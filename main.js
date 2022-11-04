"use strict"

// UI
const dimensione_x = 600
const dimensione_y = 600


// Config Game
let config = {
    type: Phaser.AUTO,
    width: dimensione_x,
    height: dimensione_y,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
}

let game = new Phaser.Game(config);
let scene

// GAME ELEMENTS
let entities = []
let pg
let keys
let Delta
let masterSubClock = 0
const epsilon = 0.0000000000001
const gridNodeSize = 10


// GAME VARIABLES
let playerSize = 10
let playerSpeed = 160


// DEBUG
let fpsCounter
let playerPosition
let grid


//LOOKS
let lavaColor = 0xFF8800
let smokeColor = 0x555555


//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

//
// CLASSES
//

class Entity{
    constructor(x,y,width,height,collision,deadly,speed,velocity,toProcess){
                
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.collision = collision
        this.deadly = deadly
        this.speed = speed
        this.velocity = velocity
        this.color = 0x000000

        if(toProcess == undefined){toProcess = true}else{this.toProcess = toProcess}

        this.look = scene.add.graphics()

        if(toProcess){entities.push(this)}        
    }

    handler(){        
    }

    /* //Self destruct
    selfDestruct(){
        
        //this.destroy()
        
        let index = entities.indexOf(this)
        entities.splice(index,1)

        this.look.clear()
        
        for( const i in this){
            delete this[i]
        }

        const allProp = Object.getOwnPropertyNames(this)

        allProp.forEach(propriety => {delete this[propriety];});

        Object.setPrototypeOf(this,null)

        
    }*/

    //DO NOT PLACE WALLS ON EACH OTHER
    move(){  //moves and returns if there has been a collision AND the index of the entities you collided with in the entities array
             //(it saves from calling checkCollision again in the handler)        
        
        this.velocity = normalizeVector(this.velocity)

        //generate step
        let mx = this.velocity[0] * this.speed * Delta
        let my = this.velocity[1] * this.speed * Delta

        let collision = [false]
        let collided = false

        let withWhich = []

        //Check if collision with "collidable" entities
        for (let i = 0 ; i < entities.length ; i++){

            //you should not check the object with itself
            let forbidden = entities.indexOf(this)

            if( entities[i].collision === true && i !== forbidden){

                //This check properly if there is a collision and the distance to touch the stopping object
                collision = this.checkCollision2TheRevenge( entities[i] , mx , my)

                if(collision[0] === true){

                    collided = true
                    withWhich.push(i)

                    //If there's a collision, checks if it can still moves on another axis
                    let blocked = this.checkCollisionXY(entities[i] , mx , my)
                        
                    if ( blocked[0] === true){
                        mx = collision[1]                        
                    }
                    if( blocked[1] === true){
                        my = collision[2]
                    }
                    //this checks if you're a free both in X and in Y, if you are you can move in X and cover the distance in Y (remember that you already verified 
                    // that you're blocked diagonally)
                    if( blocked[0] === false && blocked [1] === false){
                        my = collision[2]
                    }
                }
            }
        }
        
        this.moveTo(this.x + mx, this.y + my)

        return [collided , withWhich]
    }


    checkCollisionXY(theOtherOne , mx , my){
        //This method generates the region covered from this entity while moving and checks if existis a common region between that and the one occupied from the OtherOne

        let blocked = [false,false]

        let commonRegionUpperEdge
        let commonRegionLowerEdge
        let commonRegionRightEdge
        let commonRegionLeftEdge 

        commonRegionUpperEdge = Math.max(theOtherOne.y , this.y) 
        commonRegionLowerEdge = Math.min(theOtherOne.y + theOtherOne.height - epsilon , this.y + this.height)

        if( mx >= 0){
                    
            commonRegionRightEdge = Math.min(theOtherOne.x + theOtherOne.width - epsilon , this.x + mx + this.width - epsilon) 
            commonRegionLeftEdge  = Math.max(theOtherOne.x , this.x) 

            if(commonRegionLeftEdge <= commonRegionRightEdge  && commonRegionUpperEdge < commonRegionLowerEdge){
                blocked[0] = true
            }
        }
        if( mx < 0){
                    
            commonRegionRightEdge = Math.min(theOtherOne.x + theOtherOne.width - epsilon , this.x + this.width - epsilon) 
            commonRegionLeftEdge  = Math.max(theOtherOne.x , this.x + mx) 

            if(commonRegionLeftEdge < commonRegionRightEdge  && commonRegionUpperEdge < commonRegionLowerEdge){
                blocked[0] = true
            }
                        
        }

        //Y
        commonRegionLeftEdge  = Math.max( theOtherOne.x , this.x)
        commonRegionRightEdge = Math.min( theOtherOne.x + theOtherOne.width - epsilon, this.x + this.width - epsilon)

        if( my >= 0){
                    
            commonRegionLowerEdge = Math.min(theOtherOne.y + theOtherOne.height - epsilon , this.y + my + this.height - epsilon)
            commonRegionUpperEdge = Math.max(theOtherOne.y , this.y)

            if(commonRegionLeftEdge <= commonRegionRightEdge  && commonRegionUpperEdge < commonRegionLowerEdge){
                blocked[1] = true
            }
        }

        if( my < 0){
                    
            commonRegionLowerEdge = Math.min(theOtherOne.y + theOtherOne.height - epsilon , this.y + this.height - epsilon)
            commonRegionUpperEdge = Math.max(theOtherOne.y , this.y + my)

            if(commonRegionLeftEdge < commonRegionRightEdge  && commonRegionUpperEdge < commonRegionLowerEdge){
                blocked[1] = true
            }              
        }

        return blocked
    }


    checkCollision2TheRevenge(theOtherOne, mx , my){ //It returns true if there's a collision and the distance in X and Y to reach the colliding object
        //v0.9
        //This method checks if the area of this overlaps with theOtherOne's while moving in numberofsteps steps.        
        
        let collision = false

        let travelDistance = Math.sqrt(mx ** 2 + my ** 2)
        let numberOfSteps = Math.floor(travelDistance) + 2
        let stepX = mx / ( numberOfSteps - 1)
        let stepY = my / ( numberOfSteps - 1)

        let coveredDistanceX = 0
        let coveredDistanceY = 0

        let continua = true

        for( let i = 0 ; i < numberOfSteps && continua === true; i++ ){

            let commonRegionUpperEdge = Math.max(this.y + stepY * i, theOtherOne.y)
            let commonRegionLowerEdge = Math.min(this.y + this.height + stepY * i - epsilon, theOtherOne.y + theOtherOne.height - epsilon)
            let commonRegionRightEdge = Math.min(this.x + this.width + stepX * i - epsilon , theOtherOne.x + theOtherOne.width - epsilon)
            let commonRegionLeftEdge  = Math.max(this.x + stepX * i , theOtherOne.x)

            if( commonRegionLeftEdge <= commonRegionRightEdge && commonRegionUpperEdge <= commonRegionLowerEdge){
                
                collision = true
                continua = false

                if(i > 0){

                    coveredDistanceX = stepX * (i - 1)
                    coveredDistanceY = stepY * (i - 1)

                    let gapX = 0
        
                    if(mx > 0){
                        gapX = theOtherOne.x - (this.x + stepX * (i - 1) + this.width)
                        coveredDistanceX += gapX 
                    }        
                    if(mx < 0){
        
                        gapX = this.x + stepX * (i - 1) - (theOtherOne.x + theOtherOne.width)
                        coveredDistanceX -= gapX 
                    }

                    let gapY = 0
        
                    if(my > 0){
                        gapY = theOtherOne.y - (this.y + stepY * (i - 1) + this.height)
                        coveredDistanceY += gapY 
                    }        
                    if(my < 0){
        
                        gapY = this.y + stepY * (i - 1) - (theOtherOne.y + theOtherOne.height)
                        coveredDistanceY -= gapY 
                    }
                }
            }   
        }

        return [collision,coveredDistanceX,coveredDistanceY]
    }


    moveTo(x,y){  //move the entity to a location
        this.x = x
        this.y = y

        this.look.clear();
        this.look.fillStyle(this.color);
        this.look.fillRect(this.x , this.y , this.width, this.height);
    }
}



class player extends Entity{
    constructor(x,y){
        super(x,y,playerSize,playerSize,false,null,playerSpeed,[0,0],true)

        this.dead = false
        this.color = 0x00FF00

        this.look.fillStyle(this.color);
        this.look.fillRect(x , y , this.width, this.height);
    }


    handler(){
        
        let dx = 0
        let dy = 0

        if(keys.W.isDown)
            dy = -1
        if(keys.A.isDown)
            dx = -1
        if(keys.S.isDown)
            dy = 1
        if(keys.D.isDown)
            dx = 1

        if(keys.K.isDown){
            dx=1
            dy=1
        }
        if(keys.J.isDown){
            dx=-1
            dy=1
        }
        if(keys.U.isDown){
            dx=-1
            dy=-1
        }
        if(keys.I.isDown){
            dx=1
            dy=-1
        }
        
        this.velocity = [dx,dy]
        
        this.move()
        this.checkIfDead()
    }


    checkIfDead(){

        for (let i = 0; i < entities.length ; i++){
            
            if(entities[i].deadly == true){

                let collision = this.checkCollision2TheRevenge(entities[i],0,0)

                if(collision[0]){
                    this.dead = true
                    this.color=0xFF0000
                    this.look.fillStyle(this.color)
                }
            }
        }
    }
}


class wall extends Entity{
    constructor(x,y,width,height){
        super(x,y,width,height,true,false,0,[0,0],true)

        this.color = 0xFFFFFF

        this.look.fillStyle(this.color);
        this.look.fillRect(x , y , width, height);
    }

    handler(){
    }
}

class cannon extends Entity{
    constructor(x,y,bulletClock,direction,bulletSpeed,bulletVelocity,bulletSize,capacity){
        super(x,y,10,10,true,false,0,[0,0],true)

        this.direction = direction
        this.bulletClock = bulletClock  //how many seconds between bullets
        this.bulletVelocity = bulletVelocity
        this.bulletSpeed = bulletSpeed
        this.bulletSize = bulletSize
        this.capacity = capacity
        
        this.subclock = 0
        this.color = 0xAA0000
        this.magazine = []        

        this.look.fillStyle(this.color);
        this.look.fillRect(x , y , 10, 10);

        this.generateMagazine()        
    }


    handler(){

        this.subclock += Delta
        
        if(this.subclock >= this.bulletClock){
            this.subclock = 0

            let continua = true
            for(let i = 0; i < this.magazine.length && continua === true; i++){

                if(this.magazine[i].active === false){
                    let spawnX = this.bulletVelocity[0] * (Math.sqrt( (this.width / 2) ** 2 + (this.height / 2) ** 2 ) + 
                        Math.sqrt(2 * (this.bulletSize ** 2))); 
                    let spawnY = this.bulletVelocity[1] * (Math.sqrt( (this.width / 2) ** 2 + (this.height / 2) ** 2 ) + 
                        Math.sqrt(2 * (this.bulletSize ** 2)));

                    this.magazine[i].moveTo(this.x + spawnX, this.y + spawnY)
                    this.magazine[i].activate()

                    continua = false
                }
            }
        }
    }

    generateMagazine(){        

        let data = []
        let continua = true

        this.bulletVelocity = normalizeVector(this.bulletVelocity)
        let maxDiagonal = Math.sqrt(dimensione_x ** 2 + dimensione_y ** 2)

        //since checkcCollision2 returns the distance in X and Y to reach the collising object, I use it to determine the travel distance of a bullet
        //PROBLEM! in this way the magazine is calculated based on the distance on the first colliding entity found in the entities array, not the closest.
        //It is actally ok since the first in the array are the outer walls, ergo the farthest, the important thing is that I do not have less bullets than needed
        //Check the laser generator to see how it should have been coded
        for (let i = 0; i < entities.length && continua === true; i++){
            if(entities[i].collision === true){
                data = this.checkCollision2TheRevenge(entities[i], this.bulletVelocity[0] * maxDiagonal, this.bulletVelocity[1] * maxDiagonal)
                if(data[0]===true){
                    continua = false
                }
            }
        }        

        //we need to know the distance between each bullet. bulletSpeed is pixel/second, bulletClock is how many seconds between shots
        let travelDistance = Math.sqrt(data[1] ** 2, data[2] ** 2)
        let bulletGap = this.bulletSpeed * this.bulletClock
        if(!(this.capacity)){ //calculate capacity if it unspecified (0 or undefinied)
            this.capacity = Math.floor( travelDistance / bulletGap) + 2
        }

        //I want the bullet to start from a circle in which the cannon is inscribed
        let spawnX = this.bulletVelocity[0] * (Math.sqrt( (this.width / 2) ** 2 + (this.height / 2) ** 2 ) + 
            Math.sqrt(2 * (this.bulletSize ** 2))); 
        let spawnY = this.bulletVelocity[1] * (Math.sqrt( (this.width / 2) ** 2 + (this.height / 2) ** 2 ) + 
            Math.sqrt(2 * (this.bulletSize ** 2)));
        

        for(let i = 0; i < this.capacity; i++){

            if( i * bulletGap <= travelDistance - Math.sqrt(2 * (this.bulletSize ** 2))){
                let pewpew = new bullet(this.x + spawnX + bulletGap * i * this.bulletVelocity[0], this.y + spawnY + bulletGap * i * this.bulletVelocity[1], this.bulletSize , 
                    this.bulletSize , this.bulletSpeed , this.bulletVelocity, true);
                this.magazine.push(pewpew) 
            }else{
                let pewpew = new bullet(-100, -100 , this.bulletSize , this.bulletSize , this.bulletSpeed , this.bulletVelocity, false);
                this.magazine.push(pewpew)
            }
        }
    }
}


class bullet extends Entity{
    constructor(x,y,width,height,speed,velocity,active,color){
        super(x,y,width,height,false,true,speed,velocity,true)

        this.active = active

        if(color){this.color = color}else{this.color = 0xFF0000}        
        this.look.fillStyle(this.color);
        this.look.fillRect(x , y , width, height);
    }

    handler(){

        if(this.active === true){
            
            let data = this.move()
            
            if(data[0]){
                this.deactivate()
            }
        }
    }

    deactivate(){
        this.look.clear()
        this.deadly = false
        this.active = false
    }

    activate(){
        this.look.fillStyle(this.color)
        this.look.fillRect(this.x , this.y , this.width, this.height);
        this.deadly = true
        this.active = true
    }
}



class trackingCannon extends cannon{
    constructor(x,y,bulletClock,direction,bulletSpeed,bulletVelocity,bulletSize,capacity){        
        super(x,y,bulletClock,direction,bulletSpeed,bulletVelocity,bulletSize,capacity)

        this.color = 0xAA00AA
        
        this.look.clear()
        this.look.fillStyle(this.color)
        this.look.fillRect(x , y , 10, 10)    
    }

    handler(){

        this.subclock += Delta
        
        if(this.subclock >= this.bulletClock){
            this.subclock = 0

            this.bulletVelocity = this.calculateDirection()

            let continua = true
            for(let i = 0; i < this.magazine.length && continua === true; i++){

                if(this.magazine[i].active === false){
                    let spawnX = this.bulletVelocity[0] * (Math.sqrt( (this.width / 2) ** 2 + (this.height / 2) ** 2 ) + 
                        Math.sqrt(2 * (this.bulletSize ** 2))); 
                    let spawnY = this.bulletVelocity[1] * (Math.sqrt( (this.width / 2) ** 2 + (this.height / 2) ** 2 ) + 
                        Math.sqrt(2 * (this.bulletSize ** 2)));

                    this.magazine[i].moveTo(this.x + spawnX, this.y + spawnY)
                    this.magazine[i].activate()
                    this.magazine[i].velocity = this.bulletVelocity

                    continua = false
                }
            }
        }
    }

    calculateDirection(){
        
        let dx = pg.x - this.x
        let dy = pg.y - this.y

        return normalizeVector([dx,dy])
    }

    generateMagazine(){
        
        let maxDiagonal = Math.sqrt(dimensione_x ** 2 + dimensione_y ** 2)
        let bulletGap = this.bulletSpeed * this.bulletClock
        
        if(!(this.capacity)){ //calculate capacity if it unspecified (0 or undefinied)
            this.capacity = Math.floor( maxDiagonal / bulletGap) + 2
        }        

        for(let i = 0; i < this.capacity; i++){

            let pewpew = new bullet(-100, -100 , this.bulletSize , this.bulletSize , this.bulletSpeed , this.bulletVelocity, false);
            this.magazine.push(pewpew)
            
        }
    }
}


class nonnoLaser extends Entity{ //ACTIVATE GENERATELASER() IN THE LASER IF YOU IMPLEMENT MOVING WALLS
    constructor(x,y,offTime,onTime,direction){
        super(x,y,10,10,true,false,0,[0,0],true)

        this.onTime = onTime
        this.offTime = offTime
        this.direction = direction

        this.laser = undefined
        this.laserThickness = 4
        this.subClock = 0

        this.color = 0x0000FF
        this.look.fillStyle(this.color);
        this.look.fillRect(x , y , 10, 10);

        this.generateLaser()
    }

    handler(){

        this.subClock += Delta
        
        if(this.subClock > this.offTime && this.subClock <= this.offTime + this.onTime && this.laser.active === false){
            //this.generateLaser()
            this.laser.activate()
        }
        if(this.subClock > this.offTime + this.onTime && this.laser.active === true){
            this.subClock = 0
            this.laser.deactivate()
        }
    }
    
    generateLaser(){
        
        let data = []
        
        let minimunX = dimensione_x
        let minimunY = dimensione_y

        //since checkcCollision2 returns the distance in X and Y to reach the collising object, I use it to determine the travel distance of a bullet
        for (let i = 0; i < entities.length; i++){
            
            let forbidden = entities.indexOf(this)
            
            if(entities[i].collision === true && i !== forbidden){

                data = this.checkCollision2TheRevenge(entities[i], this.direction[0] * dimensione_x, this.direction[1] * dimensione_y)
                if(Math.abs(data[1]) < minimunX && this.direction[1] === 0 && data[0] === true){                    
                    minimunX = Math.abs(data[1])
                }
                if(Math.abs(data[2]) < minimunY && this.direction[0] === 0 && data[0] === true){
                    minimunY = Math.abs(data[2])
                }
            }
        }

        if(areArraysEqual(this.direction , [1,0])){
            this.laser = new bullet(this.x + this.width, this.y + this.height / 4, minimunX , this.laserThickness ,0,[0,0],true)
        }
        if(areArraysEqual(this.direction , [-1,0])){
            this.laser = new bullet(this.x - minimunX, this.y + this.height / 4, minimunX , this.laserThickness ,0,[0,0],true)
        }
        if(areArraysEqual(this.direction , [0,1])){
            this.laser = new bullet(this.x + this.width / 4, this.y + this.height, this.laserThickness , minimunY ,0,[0,0],true)
        }
        if(areArraysEqual(this.direction , [0,-1])){
            this.laser = new bullet(this.x + this.width / 4, this.y - minimunY, this.laserThickness , minimunY ,0,[0,0],true)
        }

        this.laser.deactivate()
    }
}


class stalker extends Entity{
    constructor(x,y){
        super(x,y,9,9,false,true,playerSpeed*0.75,[0,0],true)

        this.subClock = 0
        this.path = []

        this.color = 0xFF00FF
        this.look.fillStyle(this.color);
        this.look.fillRect(x , y , 10, 10);
    }

    handler(){

        this.subClock += Delta

        if(this.subClock > 0.5){
            this.subClock = 0
            
            this.pathFinding()
            this.retracePath2()
            //this.colorPath()
        }

        let data = this.move()
        
        this.moveStalker(data[0])
    }

    moveStalker(collided){
        
        if(collided && !(this.velocity[0] != 0 && this.velocity[1] != 0)){

            if(this.path.length > 0)
                this.velocity = [this.path[this.path.length - 1].x - this.x , this.path[this.path.length - 1].y - this.y]

        }else{

            if(this.path.length > 0){

                let LNI = this.findMeInPath()       //Last Node Index
                let SLNI = LNI - 1                  //Second Last Node Index
                
                if(SLNI >= 0 && SLNI < this.path.length)
                    this.velocity = [this.path[SLNI].x - this.path[LNI].x , this.path[SLNI].y - this.path[LNI].y]

            }else{

                this.velocity = [0,0]
            }
        }
    }
    
    pathFinding(){

        this.path = []

        let open = []
        let closed = []
        

        //first I need to find the node in which "this" is
        let startingNodeX = this.x - this.x % 10
        let startingNodeY = this.y - this.y % 10

        //and the target node
        let targetNodeX = pg.x - pg.x % 10
        let targetNodeY = pg.y - pg.y % 10

        
        grid.grid[startingNodeX/10][startingNodeY/10].calculateCosts(startingNodeX,startingNodeY,targetNodeX,targetNodeY)
        open.push(grid.grid[startingNodeY/10][startingNodeX/10])

        //console.log(open[0].totalCost)

        let exit = false

        while(!exit){ // target node is different from searched node
            
            let max = Number.MAX_SAFE_INTEGER
            let maxIndex = 0
            
            for(let i = 0; i < open.length ; i++){
                
                if(open[i].totalCost < max){
                    max = open[i].totalCost
                    maxIndex = i
                }
            }            

            let currentNode = open[maxIndex]

            closed.push(grid.grid[open[maxIndex].y/10][open[maxIndex].x/10])
            open.splice(maxIndex,1)

            if(currentNode.x == grid.grid[targetNodeY/10][targetNodeX/10].x && currentNode.y == grid.grid[targetNodeY/10][targetNodeX/10].y){
                exit = true
            }

            let neighbours = grid.getNeighbours(currentNode)

            for(let i = 0; i < neighbours.length; i++){

                if( closed.indexOf(grid.grid[neighbours[i].y/10][neighbours[i].x/10]) == -1){

                    let newMovementCostToNeighbour = currentNode.sCost + this.calculatePathLenght(currentNode , neighbours[i])
                    
                    if( newMovementCostToNeighbour < neighbours[i].sCost ||  open.indexOf(neighbours[i]) == -1){

                        grid.grid[neighbours[i].y/10][neighbours[i].x/10].sCost = newMovementCostToNeighbour
                        grid.grid[neighbours[i].y/10][neighbours[i].x/10].tCost = this.calculatePathLenght(neighbours[i],grid.grid[targetNodeX/10][targetNodeY/10])
                        grid.grid[neighbours[i].y/10][neighbours[i].x/10].calculateCostsFromLocal()
                        grid.grid[neighbours[i].y/10][neighbours[i].x/10].parent = grid.grid[currentNode.y/10][currentNode.x/10]

                        if(open.indexOf(grid.grid[neighbours[i].y/10][neighbours[i].x/10] == -1)){
                            open.push(grid.grid[neighbours[i].y/10][neighbours[i].x/10])
                        }
                    }
                    
                }
            }
            
            if(open.length <= 0){
                exit = true
            }
        }
    }

    retracePath2(){

        let currentNode = grid.grid[(pg.y - pg.y % 10)/10][(pg.x - pg.x % 10)/10]

        let continua = true

        while(currentNode != grid.grid[(this.y - this.y % 10)/10][(this.x - this.x % 10)/10] && continua){

            if(currentNode != null){
                this.path.push(grid.grid[currentNode.y/10][currentNode.x/10])
                currentNode = grid.grid[currentNode.y/10][currentNode.x/10].parent
            }else{
                continua = false
                this.velocity = [0,0]
            }

        }
    }

    findMeInPath(){

        let continua = true

        for(let i = this.path.length - 1; i > 0 && continua == true; i--){

            let data = this.checkCollision2TheRevenge(this.path[i],0,0)
            
            if(data[0]){

                return i
            }
        }

        return this.path.length - 1
    }

    colorPath(){

        for( let i = 0; i < this.path.length ; i++){
            this.path[i].look.fillStyle(0xFFFF00);
            this.path[i].look.fillRect(this.path[i].x + 4, this.path[i].y + 4, 2, 2);
        }

        //grid.cleanPaths()
    }

    calculatePathLenght(nodeA, nodeB){

        let xDifference = Math.abs( nodeA.x - nodeB.x)
        let yDifference = Math.abs( nodeA.y - nodeB.y)

        if(xDifference < yDifference){

            return xDifference * Math.sqrt(2) + ( yDifference - xDifference ) 

        }else{

            return yDifference * Math.sqrt(2) + ( xDifference - yDifference ) 

        }
    }
}


class node extends Entity{
    constructor(x,y,walkable){
        super(x,y,gridNodeSize,gridNodeSize,false,false,0,[0,0],false)
        
        this.x = x
        this.y = y
        this.walkable = walkable
        
        this.sCost = Number.MAX_SAFE_INTEGER
        this.tCost = Number.MAX_SAFE_INTEGER
        this.totalCost = Number.MAX_SAFE_INTEGER
        this.parent = null

        this.look = scene.add.graphics();
    }

    calculateCosts(startX,startY,targetX,targetY){
        this.sCost = getDistance(this.x , this.y , startX , startY)
        this.tCost = getDistance(this.x , this.y , targetX , targetY)
        this.totalCost = this.sCost + this.tCost
    }

    calculateCostsFromLocal(){
        this.totalCost = this.sCost + this.tCost
    }    
}


class nodeGrid{
    constructor(gridNodeSize){

        this.grid = []
        this.gridNodeSize = gridNodeSize
        
        for(let i = 0; i < dimensione_y/gridNodeSize; i++){
            
            let row = []

            for(let j = 0; j < dimensione_x/gridNodeSize; j++){

                let nodo = new node(j * gridNodeSize , i * gridNodeSize, true)
                row.push(nodo)
            }

            this.grid.push(row)            
        }

        this.gridUpdater()
    }

    gridUpdater(){
        
        for(let i = 0; i < dimensione_y/ this.gridNodeSize; i++){
            
            for(let j = 0; j < dimensione_x/ this.gridNodeSize; j++){

                let continua = true                
                
                for(let k = 0; k < entities.length && continua; k++){

                    let data = this.grid[i][j].checkCollision2TheRevenge(entities[k],0,0)
                    
                    if(data[0]){
                        
                        if(entities[k].collision){
                            this.grid[i][j].walkable = false
                            continua = false
                        }

                        if(entities[k].color == lavaColor || entities[k].color == smokeColor){
                            this.grid[i][j].walkable = false
                        }
                    }
                }                
                /*
                //GRID VISUALIZER
                if(this.grid[i][j].walkable){

                    this.grid[i][j].look.fillStyle(0x00FF00);
                    this.grid[i][j].look.fillRect(this.grid[i][j].x + 4 , this.grid[i][j].y + 4 , 2, 2);

                }else{

                    this.grid[i][j].look.fillStyle(0xFF0000);
                    this.grid[i][j].look.fillRect(this.grid[i][j].x + 4 , this.grid[i][j].y + 4 , 2, 2);
                }*/
            }
        }
    }

    getNeighbours(node){

        let neighbours = []

        let thisRow = node.y / 10
        let thisCol = node.x / 10
        
        if( thisRow - 1 >= 0 && thisCol - 1 >= 0)
            if(this.grid[thisRow - 1][thisCol - 1].walkable) {neighbours.push(this.grid[thisRow - 1][thisCol - 1])}

        if( thisCol - 1 >= 0)
            if(this.grid[thisRow][thisCol - 1].walkable) {neighbours.push(this.grid[thisRow][thisCol - 1])}

        if( thisRow + 1 < dimensione_y / 10 && thisCol - 1 >= 0)
            if(this.grid[thisRow + 1][thisCol - 1].walkable) {neighbours.push(this.grid[thisRow + 1][thisCol - 1])}

        if( thisRow - 1 >= 0)
            if(this.grid[thisRow - 1][thisCol].walkable) {neighbours.push(this.grid[thisRow - 1][thisCol])}

        if( thisRow + 1 < dimensione_y/10)
            if(this.grid[thisRow + 1][thisCol].walkable) {neighbours.push(this.grid[thisRow + 1][thisCol])}

        if( thisRow - 1 >= 0 && thisCol + 1 < dimensione_x / 10)
            if(this.grid[thisRow - 1][thisCol + 1].walkable) {neighbours.push(this.grid[thisRow - 1][thisCol + 1])}

        if(thisCol + 1 < dimensione_x / 10)
            if(this.grid[thisRow][thisCol + 1].walkable) {neighbours.push(this.grid[thisRow][thisCol + 1])}

        if( thisRow + 1 < dimensione_y / 10 && thisCol + 1 < dimensione_x / 10)
            if(this.grid[thisRow + 1][thisCol + 1].walkable) {neighbours.push(this.grid[thisRow + 1][thisCol + 1])}

        return neighbours
    }

    cleanPaths(){

        for(let i = 0; i < dimensione_y/gridNodeSize; i++){

            for(let j = 0; j < dimensione_x/gridNodeSize; j++){

                this.grid[i][j].look.clear()
            }
        
        }
    }
}


class lava extends Entity{
    constructor(x,y,w,h){
        super(x,y,w,h,false,true,0,[0,0],true)

        this.color = lavaColor
        this.look.fillStyle(this.color);
        this.look.fillRect(x , y , w, h);
    }
}

class smoke extends Entity{
    constructor(x,y,w,h){
        super(x,y,w,h,false,false,0,[0,0],true)

        this.color = smokeColor
        this.look.fillStyle(this.color);
        this.look.fillRect(x , y , w, h);
    }
}


class ball extends Entity{
    constructor(x,y,startingDirection){
        super(x,y,6,6,false,true,100,startingDirection,true)

        this.color = 0x00FF66
        this.look.fillStyle(this.color);
        this.look.fillRect(x , y , 6, 6);
    }

    handler(){

        let data = this.move()
        let rotated = false
        
        if(data[0]){            

            if(this.velocity[0] >= 0 && this.velocity[1] >= 0 && rotated == false){
                
                let foundYObstructed = false

                for (let i = 0; i < data[1].length; i++){

                    let data2 = this.checkCollisionXY(entities[data[1][i]],0,2)

                    if(data2[1]){

                        foundYObstructed = true
                    }
                }

                if(foundYObstructed){

                    this.velocity = [1,-1]
                }else{

                    this.velocity = [-1,1]
                }                
                
                rotated = true
            }

            if(this.velocity[0] < 0 && this.velocity[1] >= 0 && rotated == false){
                
                let foundYObstructed = false

                for (let i = 0; i < data[1].length; i++){

                    let data2 = this.checkCollisionXY(entities[data[1][i]],0,2)

                    if(data2[1]){

                        foundYObstructed = true
                    }
                }

                if(foundYObstructed){

                    this.velocity = [-1,-1]
                }else{

                    this.velocity = [1,1]
                }  

                rotated = true
            }

            if(this.velocity[0] < 0 && this.velocity[1] < 0 && rotated == false){
                
                let foundYObstructed = false

                for (let i = 0; i < data[1].length; i++){

                    let data2 = this.checkCollisionXY(entities[data[1][i]],0,-2)

                    if(data2[1]){

                        foundYObstructed = true
                    }
                }

                if(foundYObstructed){

                    this.velocity = [-1,1]
                }else{

                    this.velocity = [1,-1]
                }  
                
                rotated = true
            }
            
            if(this.velocity[0] >= 0 && this.velocity[1] < 0 && rotated == false){
                
                let foundYObstructed = false

                for (let i = 0; i < data[1].length; i++){

                    let data2 = this.checkCollisionXY(entities[data[1][i]],0,-2)

                    if(data2[1]){

                        foundYObstructed = true
                    }
                }

                if(foundYObstructed){

                    this.velocity = [1,1]
                }else{

                    this.velocity = [-1,-1]
                }
                  
                rotated = true
            }
        }
    }
}


//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

//
// FUNCTIONS
//

function omniHandler(){
    for(let i = 0 ; i < entities.length ; i++){
        entities[i].handler()
    }

    if(masterSubClock > 1){
        //grid.gridUpdater()
        masterSubClock = 0
    }
}

function normalizeVector([x,y]){
    
    let nx = x
    let ny = y
    
    if(!(x === 0 && y === 0)){
        nx = ( x  / Math.sqrt(x ** 2 + y ** 2) )
        ny = ( y  / Math.sqrt(x ** 2 + y ** 2) )
    }

    return [nx,ny]
}

function areArraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;
  
    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
}

function getDistance(x,y,ax,ay){

    return Math.sqrt( (x-ax) ** 2 + (y - ay) ** 2)
}




//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

//
// GAMELOOP AND STUFF
//



function preload ()
{

}

//ORDER OF PLACEMENT:   PG  ->  WALLS   ->  LAVA & SMOKE   ->  ENEMIES   ->  GRID  

function create ()
{    
    scene = this
    masterSubClock = 0
    
    keys = this.input.keyboard.addKeys('W,A,S,D,J,K,U,I,SPACE');
    pg = new player(80,250);
    
    let wallThickness = 10
     
    let lowerEdge = new wall(0 , dimensione_y - wallThickness ,dimensione_x , wallThickness)
    let upperEdge = new wall(0,0, dimensione_x , wallThickness)
    let rightEdge = new wall(dimensione_x - wallThickness , 0 , wallThickness , dimensione_y)
    let leftEdge = new wall(0,0, wallThickness , dimensione_y)
    //let centerWall = new wall(80,510,50,30)
    //let thinWall = new wall(50,481,50,4)
    //let thinWall2 = new wall(50,500,4,50)
    let laserWallTest = new wall(535,85,40,40)
    let meow = new wall(60,200,20,10)
    let meow2 = new wall(110,200,20,10)
    let meow3 = new wall(50,200,10,90)
    let meow4 = new wall(130,200,10,90)
    let meow5= new wall(50,290,90,10)

    let lava2 = new lava(300,95,30,60)
    let lavaCreep = new lava(500,500,40,40)
    let fumo = new smoke(200,450,60,50)

    
    let cannone = new cannon(10,100,0.2,[1,0],150,[1,0],5)
    let Tcannon = new trackingCannon(200,250,0.2,[1,0],150,[1,0],5)
    let laser = new nonnoLaser(10,120,3,0.5,[1,0])
    let laser2 = new nonnoLaser(580,140,2,5,[-1,0])
    let laser3 = new nonnoLaser(540,10,0.5,0.5,[0,1])
    let laser4 = new nonnoLaser(560,580,5,2,[0,-1])
    let cumbare = new stalker(100,350)    
    let palla = new ball(550,400,[1,1])

    grid = new nodeGrid(gridNodeSize)
    
    

    
    

    //let testBullet = new bullet(100,100,5,5,5,[1,0])
    //testBullet.deactivate()

    fpsCounter = this.add.text(20, 15)
    playerPosition = this.add.text(20,30)
}



function update (time,delta)
{
    Delta = delta / 1000
    masterSubClock += Delta

    omniHandler()
        
    fpsCounter.setText(1000 / delta)
    playerPosition.setText("X: " + pg.x + "  Y: " + pg.y)
 }


/*
 NOTES

 1)If I transition to sprites I have to changehow the nodeGrid finds lava

 */
