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
        
        let move = true


        
        //normalize and generate step
        if ( (dx !== 0 || dy !== 0) && this.speed >= 0){
            mx = ( dx  / Math.sqrt(dx ** 2 + dy ** 2) ) * this.speed
            my = ( dy  / Math.sqrt(dx ** 2 + dy ** 2) ) * this.speed
        } 
        else{
            move = false
        }

        let originalSpeed = this.speed
        this.speed = this.speed - 0.5
        
        //check if destination is inside solid entities
        for (let i = 0 ; i < entities.length ; i++){

            if( entities[i].collision == true ){
                
                //check upper left corner
                if ( (this.x + mx > entities[i].x && this.x + mx < (entities[i].x + entities[i].width ) ) && (this.y + my > entities[i].y && this.y + my < (entities[i].y + entities[i].height)))
                    move = false;
                
                //check upper right corner 
                if ( (this.x + mx + this.width > entities[i].x && this.x + mx + this.width < (entities[i].x + entities[i].width ) ) && (this.y + my > entities[i].y && this.y + my < (entities[i].y + entities[i].height)))
                    move = false;

                //check bottom left corner
                if ( (this.x + mx > entities[i].x && this.x + mx < (entities[i].x + entities[i].width ) ) && (this.y + my + this.height > entities[i].y && this.y + my + this.height < (entities[i].y + entities[i].height)))
                    move = false;

                //check bottom right corner
                if ( (this.x + mx + this.width > entities[i].x && this.x + mx + this.width < (entities[i].x + entities[i].width ) ) && (this.y + my + this.height > entities[i].y && this.y + my + this.height < (entities[i].y + entities[i].height)))
                    move = false; 
                
            }

            if(move == false && this.speed > 0.5){

                console.log(this.speed)
                //this.move([dx,dy])

            }
        }


        if( move == true) {
            this.x += mx
            this.y += my
        }

        this.speed = originalSpeed


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
    var centerWall = new wall(200,200,30,30)


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