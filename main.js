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


var entities = [];
var pg
var keys



// GAME VARIABLES

var playerSize = 10;


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

    move(mx,my){

        let move = true

        //console.log(move)
        
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
        }


        if( move == true) {
            this.x += mx
            this.y += my
        }


    }
}

class player extends Entity{
    constructor(x,y){
        super(x,y,playerSize,playerSize,false,null,1)

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
        
        let mx = 0
        let my = 0

        if(keys.W.isDown)
            my = -1
        if(keys.A.isDown)
            mx = -1
        if(keys.S.isDown)
            my = 1
        if(keys.D.isDown)
            mx = 1
        
        if (mx !== 0 || my !== 0){
            let normalizedX = mx  / Math.sqrt(mx ** 2 + my ** 2) 
            let normalizedY = my  / Math.sqrt(mx ** 2 + my ** 2) 

            this.movePlayer(normalizedX * this.speed, normalizedY * this.speed)
        }
    }

    movePlayer(mx,my){
        
        this.move(mx,my)
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

}

function update ()
{
    
    pg.handler();


    
    //console.log(pg.dead)
    //console.log("W:", keys.W.isDown, "A:", keys.A.isDown, "S:", keys.S.isDown, "D:",keys.D.isDown, "Space:",keys.SPACE.isDown)
}

function render ()
{

}


// KNOWN BUGS
/*
    -PERCHE NON MI FUNZIONA STO MOVE TO
    -ti accosti al muro continuando a premedere un direzione e ne premi una seconda, non va








*/