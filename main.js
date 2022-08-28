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
        update: update,
        render: render
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


        let blocked = false

        for (let i = 0 ; i < entities.length ; i++){

            if( entities[i].collision == true && blocked == false){

                let theOneThatBlocked

                //praticamente prendo la funzione degli edge del player e dell'entity e vedo se il punto in comunque appartiene sia alla distanza coperta dal player che al lato dell'entity


                //MOVEX
                //se il punto [leftEdge||rightEdge;player.y] è compreso SIA tra (player.x,player.x+mx) e (En.y+En.y+height)
                
                let maxX = 0
                let minX = 0

                if(mx > 0){
                    maxX = this.x + mx
                    minX = this.x
                }else{
                    maxX = this.x
                    minX = this.x + mx
                }


                //UL per mx per leftEdge e poi rightEdge
                if( ( entities[i].x >= minX && entities[i].x <= maxX) && ( this.y >= entities[i].y && this.y <= entities[i].y + entities[i].width) ){
                    movex = false;
                    theOneThatBlocked = i
                    blocked = true
                }
                /*if( (entities[i].x + entities[i].width > this.x && entities[i].x + entities[i].width < this.x + mx ) && ( this.y > entities[i].y && this.y < entities[i].y + entities[i].width) ){
                    movex = false;
                    theOneThatBlocked = i
                    blocked = true
                }*/

                /*
                //UR per mx per leftEdge e poi rightEdge
                if( ( entities[i].x > this.x + this.width && entities[i].x < this.x + this.width + mx) && ( this.y > entities[i].y && this.y < entities[i].y + entities[i].width) ){
                    movex = false;
                    theOneThatBlocked = i
                    blocked = true
                }
                if( (entities[i].x + entities[i].width > this.x + this.width && entities[i].x + entities[i].width < this.x + this.width + mx ) && ( this.y > entities[i].y && this.y < entities[i].y + entities[i].width) ){
                    movex = false;
                    theOneThatBlocked = i
                    blocked = true
                }


                //LowerL per mx per leftEdge e poi rightEdge
                if( ( entities[i].x > this.x && entities[i].x < this.x + mx) && ( this.y + this.height > entities[i].y && this.y + this.height < entities[i].y + entities[i].width) ){
                    movex = false;
                    theOneThatBlocked = i
                    blocked = true
                }
                if( (entities[i].x + entities[i].width > this.x && entities[i].x + entities[i].width < this.x + mx ) && ( this.y + this.height > entities[i].y && this.y + this.height < entities[i].y + entities[i].width) ){
                    movex = false;
                    theOneThatBlocked = i
                    blocked = true
                }


                //LowerR per mx per leftEdge e poi rightEdge
                if( ( entities[i].x > this.x + this.width && entities[i].x < this.x + this.width + mx) && ( this.y + this.height > entities[i].y && this.y + this.height < entities[i].y + entities[i].width) ){
                    movex = false;
                    theOneThatBlocked = i
                    blocked = true
                }
                if( (entities[i].x + entities[i].width > this.x + this.width && entities[i].x + entities[i].width < this.x + this.width + mx ) && ( this.y + this.height > entities[i].y && this.y + this.height < entities[i].y + entities[i].width) ){
                    movex = false;
                    theOneThatBlocked = i
                    blocked = true
                }
                */
               console.log(this.x,this.y)
                
                
                
                
                
                
                
                /*
                //Check corners for X
                //check upper left corner
                if ( (this.x + mx > entities[i].x && this.x + mx < (entities[i].x + entities[i].width ) ) && (this.y > entities[i].y && this.y < (entities[i].y + entities[i].height)))
                    {
                    movex = false;
                    theOneThatBlocked = i
                    blocked = true
                }
                
                //check upper right corner 
                if ( (this.x + mx + this.width > entities[i].x && this.x + mx + this.width < (entities[i].x + entities[i].width ) ) && (this.y > entities[i].y && this.y < (entities[i].y + entities[i].height)))
                    {movex = false;
                    theOneThatBlocked = i
                    blocked = true}

                //check bottom left corner
                if ( (this.x + mx > entities[i].x && this.x + mx < (entities[i].x + entities[i].width ) ) && (this.y  + this.height > entities[i].y && this.y + this.height < (entities[i].y + entities[i].height)))
                    {movex = false;
                    theOneThatBlocked = i
                    blocked = true}

                //check bottom right corner
                if ( (this.x + mx + this.width > entities[i].x && this.x + mx + this.width < (entities[i].x + entities[i].width ) ) && (this.y + this.height > entities[i].y && this.y + this.height < (entities[i].y + entities[i].height)))
                    {movex = false;
                    theOneThatBlocked = i
                    blocked = true} 

                
                
                //Check corners for Y
                //check upper left corner
                if ( (this.x > entities[i].x && this.x < (entities[i].x + entities[i].width ) ) && (this.y + my > entities[i].y && this.y + my < (entities[i].y + entities[i].height)))
                    {movey = false;
                    theOneThatBlocked = i
                    blocked = true}
                
                //check upper right corner 
                if ( (this.x + this.width > entities[i].x && this.x + this.width < (entities[i].x + entities[i].width ) ) && (this.y + my > entities[i].y && this.y + my < (entities[i].y + entities[i].height)))
                    {movey = false;
                    theOneThatBlocked = i
                    blocked = true}

                //check bottom left corner
                if ( (this.x > entities[i].x && this.x < (entities[i].x + entities[i].width ) ) && (this.y + my + this.height > entities[i].y && this.y + my + this.height < (entities[i].y + entities[i].height)))
                    {movey = false;
                    theOneThatBlocked = i
                    blocked = true}

                //check bottom right corner
                if ( (this.x + this.width > entities[i].x && this.x + this.width < (entities[i].x + entities[i].width ) ) && (this.y + my + this.height > entities[i].y && this.y + my + this.height < (entities[i].y + entities[i].height)))
                    {movey = false;
                    theOneThatBlocked = i
                    blocked = true}
                */
                /*
                //Cover remaining gap
                if (movex == false && dx !== 0){
                    let gap = 0

                    if(dx > 0){
                        gap = entities[theOneThatBlocked].x - (this.x + this.width)
                        this.x += Math.floor(gap)
                    }

                    if(dx < 0){

                        gap = this.x - (entities[theOneThatBlocked].x + entities[theOneThatBlocked].width)
                        this.x -= Math.floor(gap)
                    }

                    console.log(gap)
                    

                }

                if (movey == false && dy !== 0){
                    let gap = 0
                    if(dy > 0)
                        gap = entities[theOneThatBlocked].y - (this.y + this.height)
                    if(dy < 0)
                        gap = (this.y - (entities[theOneThatBlocked].y + entities[theOneThatBlocked].height)) * -1

                    //if(gap >= 1)
                        //this.y += gap
                }  */
            }
        }

        
        if( movex == true) {
            this.x += mx
        }
        if( movey == true){
            this.y += my
        }

        //this.speed = originalSpeed


    }
}

class player extends Entity{
    constructor(x,y){
        super(x,y,playerSize,playerSize,false,null,playerSpeed)

        this.dead = false

        this.look.fillStyle(0x00FF00);
        this.look.fillRect(x , y , this.width, this.height);
    }


    checkIfDead(){

        for (let i = 0; i < entities.length ; i++){
            
            if(entities[i].deadly == true){

                //check upper left corner moved by 1 in each direction towards the player's centre
                if ( (this.x + 1 > entities[i].x && this.x + 1 < (entities[i].x + entities[i].width ) ) && (this.y + 1 > entities[i].y && this.y + 1 < (entities[i].y + entities[i].height)))
                    this.dead = true;
                
                //check upper right corner
                if ( (this.x - 1 + this.width > entities[i].x && this.x - 1 + this.width < (entities[i].x + entities[i].width ) ) && (this.y + 1 > entities[i].y && this.y + 1 < (entities[i].y + entities[i].height)))
                    this.dead = true;

                //check bottom left corner
                if ( (this.x + 1 > entities[i].x && this.x + 1 < (entities[i].x + entities[i].width ) ) && (this.y - 1 + this.height > entities[i].y && this.y - 1 + this.height < (entities[i].y + entities[i].height)))
                    this.dead = true;

                //check bottom right corner
                if ( (this.x - 1 + this.width > entities[i].x && this.x - 1 + this.width < (entities[i].x + entities[i].width ) ) && (this.y - 1 + this.height > entities[i].y && this.y - 1 + this.height < (entities[i].y + entities[i].height)))
                    this.dead = true;
            }
        }
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
        
        this.velocity = [dx,dy]
        
        this.movePlayer(this.velocity)
    }

    movePlayer([dx,dy]){
        
        this.move([dx,dy])
        this.look.clear()
        this.look.fillStyle(0x00FF00);
        this.look.fillRect(this.x , this.y , this.width, this.height);
    }
}

class wall extends Entity{
    constructor(x,y,width,height){
        super(x,y,width,height,true)

        this.look.fillStyle(0xFFFFFF);
        this.look.fillRect(x , y , width, height);

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

function preload ()
{

}

function create ()
{
    scene = this
    
    keys = this.input.keyboard.addKeys('W,A,S,D,SPACE');
    pg = new player(400,400);
    
    
    var wallThickness = 10
    var lowerEdge = new wall(0 , dimensione_y - wallThickness ,dimensione_x , wallThickness)
    var upperEdge = new wall(0,0, dimensione_x , wallThickness)
    var rightEdge = new wall(dimensione_x - wallThickness , 0 , wallThickness , dimensione_y)
    var leftEdge = new wall(0,0, wallThickness , dimensione_y)
    var centerWall = new wall(200,200,50,30)
    var thinWall = new wall(100,300,50,4)
    var thinWall2 = new wall(100,400,4,50)


    fpsCounter = this.add.text(20, 15);



}



function update (time,delta)
{
    frameTime += delta

    if (frameTime > 16.5) {  
        frameTime = 0;
        pg.handler();
        fpsCounter.setText(1000 / delta)
    }
 }

function render ()
{

}


// KNOWN BUGS
/*
    -ti accosti al muro continuando a premedere un direzione e ne premi una seconda, non va
    -





*/