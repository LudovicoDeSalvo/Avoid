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


//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

//
// CLASSES
//

class Entity{
    constructor(x,y,width,height,collision){
        this.x = x
        this.y = y
        this.width = width
        this.height = width
        this.collision
    }

}

class player extends Entity{
    constructor(x,y,scene){
        super()
        
        this.x = x
        this.y = y
        this.width = 10
        this.height = 10
        this.collision = false

        this.scene = scene

        var player_graphics = this.scene.add.graphics();
        player_graphics.fillStyle(0x00FF00);
        player_graphics.fillRect(x , y , this.width, this.height);
    }
}

class wall extends Entity{
    constructor(x,y,width,height,scene){
        super()
        
        this.x = x
        this.y = y
        this.width = width
        this.height = width
        this.collision = true

        this.scene = scene

        var wall_graphics = this.scene.add.graphics();
        wall_graphics.fillStyle(0xFFFFFF);
        wall_graphics.fillRect(x , y , width, height);


    }

}


//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

//
// FUNCTIONS
//

//lol xd mega lol



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
    var lowerEdge = new wall(0 , dimensione_y - wallThickness ,dimensione_x , wallThickness,this)
    var upperEdge = new wall(0,0, dimensione_x , wallThickness,this)
    var rightEdge = new wall(dimensione_x - wallThickness , 0 , wallThickness , dimensione_y ,this)
    var leftEdge = new wall(0,0, wallThickness , dimensione_y,this)

    var pg = new player(400,400,this)
}

function update ()
{
    
}

function render ()
{
    
}


