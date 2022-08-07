// UI
var dimensione_x = 800
var dimensione_y = 800


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

// GAME ELEMENTS

var entities = [];
var pg



// GAME VARIABLES

var playerSize = 10;


//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

//
// CLASSES test
//

class Entity{
    constructor(scene,x,y,width,height,collision,deadly){
        
        this.scene = scene
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.collision = collision
        this.deadly = deadly

        this.look = this.scene.add.graphics();

        entities.push(this)
    }

    move(mx,my){

        let move = true
        
        for (let i = 0 ; i < entities.length ; i++){

            if( entities[i].collision == true ){
                
                //check upper left corner
                if ( (this.x + mx > entities[i].x && this.x + mx < (entities[i].x + entities[i].width ) ) || (this.y + my > entities[i].y && this.y + my < (entities[i].y + entities[i].height)))
                    move = false;
                
                //check upper right corner
                if ( (this.x + mx + this.width > entities[i].x && this.x + mx + this.width < (entities[i].x + entities[i].width ) ) || (this.y + my > entities[i].y && this.y + my < (entities[i].y + entities[i].height)))
                    move = false;

                //check bottom left corner
                if ( (this.x + mx > entities[i].x && this.x + mx < (entities[i].x + entities[i].width ) ) || (this.y + my + this.height > entities[i].y && this.y + my + this.height < (entities[i].y + entities[i].height)))
                    move = false;

                //check bottom right corner
                if ( (this.x + mx + this.width > entities[i].x && this.x + mx + this.width < (entities[i].x + entities[i].width ) ) || (this.y + my + this.height > entities[i].y && this.y + my + this.height < (entities[i].y + entities[i].height)))
                    move = false;

            }
        }

        if( move == true) {
            this.x += mx
            this.y -= my
            this.look.moveTo(mx,my)
        }


    }
}

class player extends Entity{
    constructor(scene,x,y){
        super(scene,x,y,playerSize,playerSize,false)

        this.dead = false

        this.look.fillStyle(0x00FF00);
        this.look.fillRect(x , y , this.width, this.height);
    }

    checkIfDead(){

        for (let i = 0; i < entities.length ; i++){
            
            if(entities[i].deadly == true){

                //check upper left corner moved by 1 in each direction towards the player's centre
                if ( (this.x + 1 > entities[i].x && this.x + 1 < (entities[i].x + entities[i].width ) ) || (this.y + 1 > entities[i].y && this.y + 1 < (entities[i].y + entities[i].height)))
                    this.dead = true;
                
                //check upper right corner
                if ( (this.x - 1 + this.width > entities[i].x && this.x - 1 + this.width < (entities[i].x + entities[i].width ) ) || (this.y + 1 > entities[i].y && this.y + 1 < (entities[i].y + entities[i].height)))
                    this.dead = true;

                //check bottom left corner
                if ( (this.x + 1 > entities[i].x && this.x + 1 < (entities[i].x + entities[i].width ) ) || (this.y - 1 + this.height > entities[i].y && this.y - 1 + this.height < (entities[i].y + entities[i].height)))
                    this.dead = true;

                //check bottom right corner
                if ( (this.x - 1 + this.width > entities[i].x && this.x - 1 + this.width < (entities[i].x + entities[i].width ) ) || (this.y - 1 + this.height > entities[i].y && this.y - 1 + this.height < (entities[i].y + entities[i].height)))
                    this.dead = true;

                //check center
                if ( (this.x  + this.width / 2 > entities[i].x && this.x + this.width / 2 < (entities[i].x + entities[i].width ) ) || (this.y + this.height / 2> entities[i].y && this.y + this.height / 2 < (entities[i].y + entities[i].height)))
                this.dead = true;


            }
        }

        console.log(this.dead)
    }
}

class wall extends Entity{
    constructor(scene,x,y,width,height){
        super(scene,x,y,width,height,true)

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
    var wallThickness = 10
    var lowerEdge = new wall(this,0 , dimensione_y - wallThickness ,dimensione_x , wallThickness)
    var upperEdge = new wall(this,0,0, dimensione_x , wallThickness)
    var rightEdge = new wall(this,dimensione_x - wallThickness , 0 , wallThickness , dimensione_y)
    var leftEdge = new wall(this,0,0, wallThickness , dimensione_y)

    pg = new player(this,400,400);


}

function update ()
{
    //pg.checkIfDead()
}

function render ()
{
    
}


