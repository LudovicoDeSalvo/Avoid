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

let higherEntities = []
let entities = []
let pg
let keys
let Delta
const epsilon = 0.0000000000001


// GAME VARIABLES

let playerSize = 10
let playerSpeed = 160


//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

//
// CLASSES
//

class Entity{
    constructor(x,y,width,height,collision,deadly,speed,velocity){
                
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.collision = collision
        this.deadly = deadly
        this.speed = speed
        this.velocity = velocity
        this.color = 0x000000

        this.look = scene.add.graphics();

        entities.push(this)
    }

    handler(){
        
    }

    /*
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


    move(){
        //moves and returns if there has been a collision (it saves to call checkCollision again in the handler)
        
        this.velocity = normalizeVector(this.velocity)

        //generate step
        let mx = this.velocity[0] * this.speed * Delta
        let my = this.velocity[1] * this.speed * Delta

        let collision = [false]
        let collided = false

        //Check if collision with "collidable" entities
        for (let i = 0 ; i < entities.length ; i++){

            //you should not check the object with itself
            let forbidden = entities.indexOf(this)

            if( entities[i].collision === true && i !== forbidden){

                //This check properly if there is a collision and the distance to touch the stopping object
                collision = this.checkCollision2TheRevenge( entities[i] , mx , my)

                if(collision[0] === true){

                    collided = true

                    //If there's a collision, checks if it can still moves on another axis
                    let blocked = this.checkCollisionXY(entities[i] , mx , my)
                    
                    if ( blocked[0] === true){
                        mx = collision[1]
                    }
                    if( blocked[1] === true){
                        my = collision[2]
                    }
                    //this checks if you're a free both in X and in Y, if you are you can move in X and cover the distance in Y (remember that you already verified that you're blocked diagonally)
                    if( blocked[0] === false && blocked [1] === false){
                        my = collision[2]
                    }
                }
            }
        }
        
        this.moveTo(this.x + mx, this.y + my)

        return collided
    }


    checkCollisionXY(theOtherOne , mx , my){
        //This method generates the region covered from this entity while moving and checks if existis a common region between that and the one occupied from the OtherOne

        let blocked = [false,false,false]

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


    checkCollision2TheRevenge(theOtherOne, mx , my){        
        //v0.9
        //This method checks if the area of this overlaps with theOtherOne's while moving in numberofsteps steps.
        //It returns true if there's a collision and the distance in X and Y to reach the colliding object
        
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


    moveTo(x,y){
        this.x = x
        this.y = y

        this.look.clear();
        this.look.fillStyle(this.color);
        this.look.fillRect(this.x , this.y , this.width, this.height);
    }
}



class player extends Entity{
    constructor(x,y){
        super(x,y,playerSize,playerSize,false,null,playerSpeed)

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

        if(keys.V.isDown){
            dx=1
            dy=1
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


//Good luck implementing pushing the player and killing it if crushed
class wall extends Entity{
    constructor(x,y,width,height){
        super(x,y,width,height,true)

        this.color = 0xFFFFFF

        this.look.fillStyle(this.color);
        this.look.fillRect(x , y , width, height);

    }

    handler(){
        if(this.speed && this.velocity){
            this.move()
        }
    }
}

class cannon extends Entity{
    constructor(x,y,bulletClock,direction,bulletSpeed,bulletVelocity,bulletSize,capacity){
        super(x,y,10,10,true,false,0,[0,0])

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
                let pewpew = new bullet(-100, -100 , this.bulletSize , this.bulletSize , this.bulletSpeed , 
                    this.bulletVelocity, false);
                this.magazine.push(pewpew)
            }
        }
    }
}


class bullet extends Entity{
    constructor(x,y,width,height,speed,velocity,active,color){
        super(x,y,width,height,false,true,speed,velocity)

        this.active = active

        if(color){this.color = color}else{this.color = 0xFF0000}        
        this.look.fillStyle(this.color);
        this.look.fillRect(x , y , width, height);
    }

    handler(){

        if(this.active === true){
            if(this.move()){
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


class nonnoLaser extends Entity{
    constructor(x,y,offTime,onTime,direction){
        super(x,y,10,10,true,false,0)

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
            this.generateLaser()
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
        super(x,y,10,10,false,true,100,[0,0])


        
        
    }

    handler(){
    
    }

    
    pathFinding(){

        let open = []
        let closed = []
        
       
        
    
    
    }
        
}


class node{
    constructor(x,y){
        this.x = x
        this.y = y
        
        this.sCost = Number.MAX_SAFE_INTEGER
        this.tCost = Number.MAX_SAFE_INTEGER
        this.parent = null
    }
}


class nodeGrid{
    constructor(){

        for(let i = 0; i < dimensione_x/10; i++){
            for(let j = 0; j < dimensione_y/10; j++){
                let node = new node(i * 10 , i * 10)
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

let fpsCounter
let playerPosition

function preload ()
{

}

//IMPORTANT!!! WALLS HAVE TO BE DECLARED FIRST. Resolving this would meaning recalculate the laser form each frame, but in this way I can use moving walls

function create ()
{    
    scene = this
    
    keys = this.input.keyboard.addKeys('W,A,S,D,V,SPACE');
    pg = new player(65,495);
    
    let wallThickness = 10
     
    let lowerEdge = new wall(0 , dimensione_y - wallThickness ,dimensione_x , wallThickness)
    let upperEdge = new wall(0,0, dimensione_x , wallThickness)
    let rightEdge = new wall(dimensione_x - wallThickness , 0 , wallThickness , dimensione_y)
    let leftEdge = new wall(0,0, wallThickness , dimensione_y)
    let centerWall = new wall(80,510,50,30)
    let thinWall = new wall(50,480,50,4)
    let thinWall2 = new wall(50,500,4,50)
    let laserWallTest = new wall(535,85,40,40)
    laserWallTest.speed = 50
    laserWallTest.velocity = [-1,1]
     
    
    let cannone = new cannon(10,100,0.2,[1,0],150,[1,0],5)
    let Tcannon = new trackingCannon(200,250,0.2,[1,0],150,[1,0],5)
    let laser = new nonnoLaser(10,120,3,0.5,[1,0])
    let laser2 = new nonnoLaser(580,140,2,5,[-1,0])
    let laser3 = new nonnoLaser(540,10,0.5,0.5,[0,1])
    let laser4 = new nonnoLaser(560,580,5,2,[0,-1])
    let cumbare = new stalker(400,400)    

    //let testBullet = new bullet(100,100,5,5,5,[1,0])
    //testBullet.deactivate()

    fpsCounter = this.add.text(20, 15)
    playerPosition = this.add.text(20,30) 
}



function update (time,delta)
{
    Delta = delta / 1000

    omniHandler()
        
    fpsCounter.setText(1000 / delta)
    playerPosition.setText("X: " + pg.x + "  Y: " + pg.y)
 }