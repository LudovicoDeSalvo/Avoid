

// UI
const display_rows = document.getElementById('display_rows');
var rows = 4;

const display_columns = document.getElementById('display_columns');
var columns = 8;

var size = 100;
var gap = 10;

var dimensione_x = (size+gap) * columns + gap
var dimensione_y = (size+gap) * rows + gap

var colore_griglia = 0xffffff;
var colore_celle = 0x000000;
var colore_pellet = 0x4B6F44;

// Variabili di gioco
const densityFactor = 0.2;
var desiredEnergy = Math.floor(rows * columns * densityFactor);
if(desiredEnergy === 0){
    desiredEnergy++;
}

var present_energy = 0

//const display_size = document.getElementById('display_size');
//var size = 20

/*
function change_rows(number){
    rows = rows + number;
    display_rows.innerHTML = rows;
    
    build();
}

function change_columns(number){
    columns = columns + number;
    display_columns.innerHTML = columns;
    
    build();
}

function change_size(number){
    size = size + number;
    display_size.innerHTML = size;
    
    build();
}
*/

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
var grid = [];
var free_cells = [];


//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

//
// CLASSES
//

class cell {

    constructor(x,y, scene){
        this.x = x;
        this.y = y;
        this.scene = scene;

        this.entity;
        this.free = true;
        this.neighbors = this.neighbors_maker(this.x, this.y); 

        var cell_graphics = this.scene.add.graphics();
        cell_graphics.fillStyle(colore_celle);
        cell_graphics.fillRect(x * size + (x+1) * gap, y * size + (y+1) * gap, size, size);

        free_cells.push(this);           

    }

    neighbors_maker(x, y){
    
        let neighbors = [];
        
        if (x - 1 >= 0){
            if (y - 1 >= 0){
                neighbors.push([y-1, x-1]);
            }
            if (y + 1 < rows){
                neighbors.push([y+1, x-1]);
            }
            neighbors.push([y,x-1]);
        }
        if (x + 1 < columns){
            if (y - 1 >= 0){
                neighbors.push([y-1, x+1]);
            }
            if (y + 1 < rows){
                neighbors.push([y+1, x+1]);
            }
            neighbors.push([y, x+1]);
        }
        if( y - 1 >= 0){
            neighbors.push([y-1, x]);
        }
        if( y + 1 < rows){
            neighbors.push([y+1,x]);
        }
    
        return neighbors;
    }
}

class Entity{
    constructor (x, y, scene) {
        
        this.x = x
        this.y = y;
        this.scene = scene;

    }
    
    // moveX, MoveY int di quante caselle si deve muovere
    move (moveX, moveY){
        // Check if ammissibile
        if (this.x + moveX >= 0 && this.x + moveX < columns )
            this.x += moveX;      
        if (this.y + moveY >= 0 && this.y + moveY < rows )
            this.y += moveY;
        
    }
    
}

class EnergyPellet extends Entity{
    constructor (x, y, scene) {
        super();        
        this.x = x
        this.y = y;
        
        this.scene = scene;

        var energy_pellet_graphics = this.scene.add.graphics();
        energy_pellet_graphics.fillStyle(colore_pellet);
        energy_pellet_graphics.fillCircle(this.x * size + (this.x+1) * gap + size/2 , this.y * size + (this.y+1) * gap + size/2, size/4);

        
    }


}



//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

//
// FUNCTIONS
//

function energy_manager(scene) {
    
    spawnProbability = 0.1; // Probabilita di spawn per ogni tick
    let check = Math.random();

    if (present_energy < desiredEnergy){
        if (check < spawnProbability){
            
            let index = Math.floor(Math.random() * (free_cells.length));

            let x = free_cells[index].x;
            let y = free_cells[index].y;

            grid[y][x].entity = new EnergyPellet(x, y, scene);
            
            
            free_cells.splice(index, 1);
            present_energy++;

        }
    }
    
}

function build_grid (scene){
    
    for (let r = 0; r < rows; r++){

        let grid_row = [];
        
        for (let c = 0; c < columns; c++){
            
            let t = new cell(c, r, scene)
            grid_row.push(t);
            
        
        }
        
        grid.push(grid_row);
        
    }
}



//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

//
// GAMELOOP AND STUFF
//


function preload ()
{

}

function create ()
{
    this.cameras.main.setBackgroundColor(colore_griglia);
    build_grid(this);

}

function update ()
{
    energy_manager(this);

}

function render ()
{
    
}


