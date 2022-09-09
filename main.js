"use strict"

// UI
let dimensione_x = 600
let dimensione_y = 600


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



// GAME VARIABLES

let playerSize = 10
let playerSpeed = 160


//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

//
// CLASSES
//

class HigherPlaneEntity{
    
    //GRANT US MORE EYES
    
    constructor(entity){

        this.entity = entity



    }


}


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

        this.look = scene.add.graphics();

        entities.push(this)


    }


    handler(){
        
    }

    
    selfDestruct(){
        
        let index = entities.indexOf(this)
        entities.splice(index,1)

        this.look.clear()
        
        for( const i in this){
            delete this[i]
        }

        const allProp = Object.getOwnPropertyNames(this)

        allProp.forEach(propriety => {delete this[propriety];});

        Object.setPrototypeOf(this,null)
    } 


    move([dx,dy]){

        let mx = 0
        let my = 0

        //normalize and generate step
        if ( dx !== 0 && this.speed > 0){
            mx = ( dx  / Math.sqrt(dx ** 2 + dy ** 2) ) * this.speed * Delta
        } 

        if ( dy !== 0 && this.speed > 0){
            my = ( dy  / Math.sqrt(dx ** 2 + dy ** 2) ) * this.speed * Delta
        } 


        //Check if collision with "collidable" entities
        for (let i = 0 ; i < entities.length ; i++){

            if( entities[i].collision === true){

                //This check properly if there is a collision and the distance to touch the stopping object
                let collision = this.checkCollision2TheRevenge( entities[i] , mx , my)

                if(collision[0] === true){

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
        
        this.x += mx
        this.y += my

    }


    checkCollisionXY(theOtherOne , mx , my){

        //This method generates the region covered from this entity while moving and checks if existis a common region between that and the one occupied from the OtherOne

        let blocked = [false,false,false]

        let commonRegionUpperEdge
        let commonRegionLowerEdge
        let commonRegionRightEdge
        let commonRegionLeftEdge 
        
        let epsilon = 0.0000000000001

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

        let epsilon = 0.0000000000001

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
}



class player extends Entity{
    constructor(x,y){
        super(x,y,playerSize,playerSize,false,null,playerSpeed)

        this.dead = false

        this.look.fillStyle(0x00FF00);
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
        
        this.movePlayer(this.velocity)
        this.checkIfDead()

    }


    movePlayer([dx,dy]){
        
        this.move([dx,dy])
        this.look.clear()
        this.look.fillStyle(0x00FF00);
        this.look.fillRect(this.x , this.y , this.width, this.height);
    }


    checkIfDead(){

        for (let i = 0; i < entities.length ; i++){
            
            if(entities[i].deadly == true){

                let collision = this.checkCollision2TheRevenge(entities[i],0,0)

                if(collision[0]){
                    this.dead = true
                }
            }
        }
    }
}

class wall extends Entity{
    constructor(x,y,width,height){
        super(x,y,width,height,true)

        this.look.fillStyle(0xFFFFFF);
        this.look.fillRect(x , y , width, height);

    }
}

class cannon extends Entity{
    constructor(x,y,direction){
        super(x,y,10,10,true,false,0)

        this.direction = direction

        this.look.fillStyle(0xAA0000);
        this.look.fillRect(x , y , 10, 10);
    }
}


//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

//
// FUNCTIONS
//



//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

//
// GAMELOOP AND STUFF
//

let fpsCounter
let playerPosition

function preload ()
{

}



function create ()
{    
    scene = this
    
    keys = this.input.keyboard.addKeys('W,A,S,D,V,SPACE');
    pg = new player(189,189);    
    
    let wallThickness = 10
    let lowerEdge = new wall(0 , dimensione_y - wallThickness ,dimensione_x , wallThickness)
    let upperEdge = new wall(0,0, dimensione_x , wallThickness)
    let rightEdge = new wall(dimensione_x - wallThickness , 0 , wallThickness , dimensione_y)
    let leftEdge = new wall(0,0, wallThickness , dimensione_y)
    let centerWall = new wall(200,200,50,30)
    let thinWall = new wall(100,300,50,4)
    let thinWall2 = new wall(100,400,4,50)    

    fpsCounter = this.add.text(20, 15)
    playerPosition = this.add.text(20,30)
 
}


let doItOnce = true
let meow

function update (time,delta)
{
    Delta = delta / 1000

    
    
    while(doItOnce){ 

        meow = new wall(40,40,10,10)
        
        const allProp = Object.getOwnPropertyNames(meow)

        allProp.forEach(propriety => {delete meow[propriety];});
        
        Object.setPrototypeOf(meow,null)

        //meow.selfDestruct()
        
        doItOnce = false
    }

    pg.handler()
        
    fpsCounter.setText(1000 / delta)
    playerPosition.setText("X: " + pg.x + "  Y: " + pg.y)        

    //var follia = new wall(100,100,5,5)
    //follia.selfDestruct()
    //follia = undefined
    //console.log(follia)

    console.log(meow)

 }