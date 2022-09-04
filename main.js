// UI
var dimensione_x = 600
var dimensione_y = 600


// Config Game
var config = {
    type: Phaser.AUTO,
    width: dimensione_x,
    height: dimensione_y,
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    fps: {
        target: 60
    }
}

var game = new Phaser.Game(config);



var scene

// GAME ELEMENTS

var entities = []
var pg
var keys
var frameTime = 0



// GAME VARIABLES

var playerSize = 10
var playerSpeed = 10


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

        this.look = scene.add.graphics();

        entities.push(this)
    }

    handler(){
        
    }

    parser(){

        let identical = true

        for(let i = 0 ; i < entities.length; i++){
            for( const j in this){
                if(this[j] !== entities[i][j]){
                    identical = false
                }
            }
        }

        return identical
    }
    
    selfDestruct(){
        console.log(entities)
        
        this.look.clear()

        //let index = entities.findIndex(parser())
        //entities.splice(index)
        
        for( const i in this){
            console.log("meow")
            delete this[i]
        }

        console.log(this)

        console.log(entities)
    }

    

    move([dx,dy]){

        let mx
        let my
        
        let movex = true
        let movey = true

        //normalize and generate step
        if ( dx !== 0 && this.speed > 0){
            mx = ( dx  / Math.sqrt(dx ** 2 + dy ** 2) ) * this.speed
        } 
        else{
            movex = false
        }

        if ( dy !== 0 && this.speed > 0){
            my = ( dy  / Math.sqrt(dx ** 2 + dy ** 2) ) * this.speed
        } 
        else{
            movey = false
        }


        let xBlocked = false
        let yBlocked = false
        let diagonallyBlocked = false

        for (let i = 0 ; i < entities.length ; i++){

            if( entities[i].collision == true){

                let blocked = this.checkCollision( entities[i] , mx , my)

                //X
                if( xBlocked == false){    
    
                    let theOneThatBlocked
                    
                    if ( blocked[0] == true){
                        movex = false;
                        theOneThatBlocked = i
                        xBlocked = true
                    }

                    //Cover remaining Gap
                    if (xBlocked == true && dx !== 0){
                        let gap = 0
    
                        if(dx > 0){
                            gap = entities[theOneThatBlocked].x - (this.x + this.width)
                            this.x += gap 
                        }
    
                        if(dx < 0){
    
                            gap = this.x - (entities[theOneThatBlocked].x + entities[theOneThatBlocked].width)
                            this.x -= gap 
                        }
                    }
                
                }

                //Y
                if( yBlocked == false){

                    let theOneThatBlocked
                    
                    if ( blocked[1] == true){
                        movey = false;
                        theOneThatBlocked = i
                        yBlocked = true
                    }

                    //Cover remaining gap
                    if (yBlocked == true && dy !== 0){
                        let gap = 0

                        if(dy > 0){
                            gap = entities[theOneThatBlocked].y - (this.y + this.height)
                            this.y += gap
                        }

                        if(dy < 0){

                            gap = this.y - (entities[theOneThatBlocked].y + entities[theOneThatBlocked].height)
                            this.y -= gap
                        }
                    }
                }

                //Diagonal
                if( diagonallyBlocked == false){

                    let theOneThatBlocked
                    
                    if ( blocked[2] == true){
                        movey = false;
                        movex = true;
                        theOneThatBlocked = i
                        diagonallyBlocked = true
                    }

                    //Cover remaining gap
                    if (diagonallyBlocked == true && dy !== 0){
                        let gap = 0

                        if(dy > 0){
                            gap = entities[theOneThatBlocked].y - (this.y + this.height)
                            this.y += gap
                        }

                        if(dy < 0){

                            gap = this.y - (entities[theOneThatBlocked].y + entities[theOneThatBlocked].height)
                            this.y -= gap
                        }
                    }
                }
            }
        }
        
        
        if( movex == true) {
            this.x += mx
        }
        if( movey == true){
            this.y += my
        }
    }

    checkCollisionXY(theOtherOne , mx , my){

        //This method generates the region covered from this entity while moving and checks if it overlaps with the other one

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

    checkCollision( theOtherOne , mx , my){

        let blocked = [false,false,false]
        let epsilon = 0.0000000000001


        blocked = this.checkCollisionXY(theOtherOne , mx, my)
        //console.log(blocked)

        if(blocked[0] == false && blocked[1] == false){

            let commonRegionUpperEdge = Math.max(this.y + my, theOtherOne.y)
            let commonRegionLowerEdge = Math.min(this.y + this.height + my - epsilon, theOtherOne.y + theOtherOne.height - epsilon)
            let commonRegionRightEdge = Math.min(this.x + this.width + mx - epsilon , theOtherOne.x + theOtherOne.width - epsilon)
            let commonRegionLeftEdge  = Math.max(this.x + mx, theOtherOne.x)
            
            if( commonRegionLeftEdge <= commonRegionRightEdge && commonRegionUpperEdge <= commonRegionLowerEdge){
                blocked[2] = true
            }           
            
            //Better but yet not working system 
            /*let step = 0.1

            //mx AND my >0

            for(let x = this.x ; x < this.x + this.width + mx ; x += step){

                //console.log(x,my)
                
                let y1 = x + this.height
                let y2 = x - this.width

                let commonRegionLowerEdge = Math.min(theOtherOne.y + theOtherOne.height - epsilon, y1 - epsilon, this.y + this.height + my - epsilon)
                let commonRegionUpperEdge = Math.max(this.y , y2 , theOtherOne.y)

                console.log(x, commonRegionLowerEdge, commonRegionUpperEdge)
                
                //controlla se il segmento verticale definito da commonRUE e commonRLE coincide con theOtherOne
                //devo anche controllare se the otherone esiste nella x
                if( ( ( commonRegionUpperEdge <= theOtherOne.y && theOtherOne.y < commonRegionLowerEdge ) || (commonRegionUpperEdge <= theOtherOne.y + theOtherOne.height && theOtherOne.y + theOtherOne.height < commonRegionLowerEdge) || ( commonRegionUpperEdge < theOtherOne.y + theOtherOne.height && commonRegionUpperEdge >= theOtherOne.y && commonRegionLowerEdge < theOtherOne.y + theOtherOne.height && commonRegionLowerEdge >= theOtherOne.y)   ) && x > theOtherOne.x && x < theOtherOne.x + theOtherOne.width){
                    blocked[2] = true
                    console.log("Collision!")
                }

            }*/
            
        }

        return blocked

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
            centerWall.selfDestruct()
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

                let collision = this.checkCollision(entities[i],0,0)

                if(collision[0] == true || collision[1] == true || collision[2] == true){
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

var fpsCounter
var deltaDisplayer
var playerPosition

function preload ()
{

}

var centerWall

function create ()
{
    scene = this
    
    keys = this.input.keyboard.addKeys('W,A,S,D,V,SPACE');
    pg = new player(189,189);    
    
    var wallThickness = 10
    var lowerEdge = new wall(0 , dimensione_y - wallThickness ,dimensione_x , wallThickness)
    var upperEdge = new wall(0,0, dimensione_x , wallThickness)
    var rightEdge = new wall(dimensione_x - wallThickness , 0 , wallThickness , dimensione_y)
    var leftEdge = new wall(0,0, wallThickness , dimensione_y)
    centerWall = new wall(200,200,50,30)
    var thinWall = new wall(100,300,50,4)
    var thinWall2 = new wall(100,400,4,50)

    

    fpsCounter = this.add.text(20, 15);
    clockDisplayer = this.add.text(20,30)
    playerPosition = this.add.text(20,45)

}


var clock = 0
var subClock = 0

function update (time,delta)
{
    
    frameTime += delta

    if (frameTime > 16.5) {  
        frameTime = 0;

        pg.handler();

        
        fpsCounter.setText(1000 / delta)
        //deltaDisplayer.setText("Delta: " + delta + "  Time: " + time)
        playerPosition.setText("X: " + pg.x + "  Y: " + pg.y)

    } 

    /*
    subClock++
    if( subClock == 59){
        subClock = 0
        clock++
    }

    clockDisplayer.setText(delta)
    console.log(delta)
    */

 }

