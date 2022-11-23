"use strict"

// UI
const XDIMENSION = 800
const YDIMENSION = 800


// Config Game

var sceneDebug = {
    key: 'debug',
    preload: preloadDebug,
    create: createDebug,
    update: updateDebug,
};

var sceneTutorial = {
    key: 'tutorial',
    preload: preload,
    create: createTutorial,
    update: update,
};

var sceneLandsBetween= {
    key: 'landsBetween',
    preload: preload,
    create: createLandsBetween,
    update: update,
};

var sceneDeath = {
    key: 'death',
    preload: preload,
    create: createDeath,
    update: updateDeath,
};

{
var lv1= {
    key: 'level1',
    preload: preload,
    create: createLevel1,
    update: update,
};
var lv2 = {
    key: 'level2',
    preload: preload,
    create: createLevel2,
    update: update,
};
var lv3 = {
    key: 'level3',
    preload: preload,
    create: createLevel3,
    update: update,
};
var lv4 = {
    key: 'level4',
    preload: preload,
    create: createLevel4,
    update: update,
};
var lv5 = {
    key: 'level5',
    preload: preload,
    create: createLevel5,
    update: update,
};
var lv6 = {
    key: 'level6',
    preload: preload,
    create: createLevel6,
    update: update,
};
var lv7 = {
    key: 'level7',
    preload: preload,
    create: createLevel7,
    update: update,
};
var lv8 = {
    key: 'level8',
    preload: preload,
    create: createLevel8,
    update: update,
};
var lv9 = {
    key: 'level9',
    preload: preload,
    create: createLevel9,
    update: update,
};
var lv10 = {
    key: 'level10',
    preload: preload,
    create: createLevel10,
    update: update,
};
var lv11 = {
    key: 'level11',
    preload: preload,
    create: createLevel11,
    update: update,
};
var lv12 = {
    key: 'level12',
    preload: preload,
    create: createLevel12,
    update: update,
};
var lv13 = {
    key: 'level13',
    preload: preload,
    create: createLevel13,
    update: update,
};
var lv14 = {
    key: 'level14',
    preload: preload,
    create: createLevel14,
    update: update,
};
var lv15 = {
    key: 'level15',
    preload: preload,
    create: createLevel15,
    update: updateLevel15,
};
var lv16 = {
    key: 'level16',
    preload: preload,
    create: createLevel16,
    update: update,
};
var lv17 = {
    key: 'level17',
    preload: preload,
    create: createLevel17,
    update: update,
};
var lv18 = {
    key: 'level18',
    preload: preload,
    create: createLevel18,
    update: update,
};
var lv19 = {
    key: 'level19',
    preload: preload,
    create: createLevel19,
    update: update,
};
var lv20 = {
    key: 'level20',
    preload: preload,
    create: createLevel20,
    update: update,
};
var lv21= {
    key: 'level21',
    preload: preload,
    create: createLevel21,
    update: update,
};
var lv22 = {
    key: 'level22',
    preload: preload,
    create: createLevel22,
    update: update,
};
var lv23 = {
    key: 'level23',
    preload: preload,
    create: createLevel23,
    update: update,
};
var lv24 = {
    key: 'level24',
    preload: preload,
    create: createLevel24,
    update: update,
};
var lv25 = {
    key: 'level25',
    preload: preload,
    create: createLevel25,
    update: update,
};
var lv26 = {
    key: 'level26',
    preload: preload,
    create: createLevel26,
    update: update,
};
var lv27 = {
    key: 'level27',
    preload: preload,
    create: createLevel27,
    update: update,
};
var lv28 = {
    key: 'level28',
    preload: preload,
    create: createLevel28,
    update: update,
};
var lv29 = {
    key: 'level29',
    preload: preload,
    create: createLevel29,
    update: update,
};
var lv30 = {
    key: 'level30',
    preload: preload,
    create: createLevel30,
    update: update,
};
var lv31= {
    key: 'level31',
    preload: preload,
    create: createLevel31,
    update: update,
};
var lv32 = {
    key: 'level32',
    preload: preload,
    create: createLevel32,
    update: update,
};
var lv33 = {
    key: 'level33',
    preload: preload,
    create: createLevel33,
    update: update,
};
var lv34 = {
    key: 'level34',
    preload: preload,
    create: createLevel34,
    update: update,
};
var lv35 = {
    key: 'level35',
    preload: preload,
    create: createLevel35,
    update: update,
};
var lv36 = {
    key: 'level36',
    preload: preload,
    create: createLevel36,
    update: update,
};
var lv37 = {
    key: 'level37',
    preload: preload,
    create: createLevel37,
    update: update,
};
var lv38 = {
    key: 'level38',
    preload: preload,
    create: createLevel38,
    update: update,
};
var lv39 = {
    key: 'level39',
    preload: preload,
    create: createLevel39,
    update: update,
};
var lv40 = {
    key: 'level40',
    preload: preload,
    create: createLevel40,
    update: update,
};
}

let sceneArray = [sceneTutorial,sceneDebug,sceneLandsBetween, sceneDeath, lv1, lv2, lv3,lv4,lv5,lv6,lv7,lv8,lv9,lv10,lv11,lv12,lv13,lv14,lv15,lv16,lv17,lv18,lv19,lv20,
                    lv21,lv22,lv23,lv24,lv25,lv26,lv27,lv28,lv29,lv30,lv31,lv32,lv33,lv34,lv35,lv36,lv37,lv38,lv39,lv40]

let config = {
    type: Phaser.AUTO,
    width: XDIMENSION,
    height: YDIMENSION,
    input: {
        gamepad: true
    },
    scene: sceneArray
}

let game = new Phaser.Game(config);
let scene

// GAME ELEMENTS
let entities = []
const PU = 16
let pg
let keys
let gamepad
let Delta
let lv = 1
let grid
const epsilon = 0.0000000000001
const gridNodeSize = PU


// GAME VARIABLES
let playerSize = 16
let playerSpeed = 160
let wallThickness = 16


//LOOKS
let playerColor = 0x00FF00              
let goalColor = 0x00EE00                
let wallColor = 0xFFFFFF                
let defaultBulletColor = 0xFF0000       
let cannonColor = 0x0000FF             
let trackingCannonColor = 0xFF00FF      
let predictingCannonColor = 0x8000AA
let nonnoLaserColor = 0xEE6A00
let laserColor = 0x00FFFF
let stalkerColor = 0x009090
let ballColor = 0x009000
let mineColor = 0xFFFF00
let mineColor2 = 0xAAAA00
let explosionColor = 0xFF2020
let lavaColor = 0xEE4400//0xFF8800
let lavaColor2 = 0x8B0000
let smokeColor = 0x555555
let upgradeColor = 0x00FFFF
let upgradeColor2 = 0xAAFFFF



let password = document.getElementById("passwordBox")
let button = document.getElementById("passwordButton")
button.addEventListener("click",levelManager)
let thisLevelPass = document.getElementById("thisLevelPassword")
let levelName = document.getElementById("levelName")


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
        this.toProcess = toProcess == undefined ? true : toProcess

        this.look = scene.add.graphics()
        if(toProcess){entities.push(this)}        
    }

    handler(){        
    }

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

    changeColorTo(color){
        this.look.clear()
        this.look.fillStyle(color);
        this.look.fillRect(this.x , this.y , this.width, this.height);
    }
}


class player extends Entity{
    constructor(x,y,dash){
        super(x,y,playerSize,playerSize,false,null,playerSpeed,[0,0],true)

        this.clock = 0
        this.clockEnabled = false
        this.dashAvailable = dash == undefined ? false : dash
        this.dashClock = 1
        this.dashing = false
        this.dashDuration = 0.15

        this.color = playerColor
        this.look.fillStyle(this.color);
        this.look.fillRect(x , y , this.width, this.height);
    }


    handler(){
        
        //Dash Manager
        if(this.clockEnabled){

            this.clock += Delta

            if(this.clock >= this.dashDuration && this.clock < this.dashClock - 0.4){
                this.speed = playerSpeed
                this.dashing = false
                this.color = playerColor

            } else if (this.clock >= this.dashClock - 0.3 && this.clock < this.dashClock){
                this.color = 0x0066FF

            } else if(this.clock >= this.dashClock){
                this.color = playerColor
                this.dashAvailable = true
                this.clock = 0
                this.clockEnabled = false
            }
        }
        
        //Direction and Input Manager
        let dx = 0
        let dy = 0
        let AButton = {value: 0}
        let BButton = {value: 0}
        let dPadDown = {value: 0}
        let dPadUp = {value: 0}
        let dPadLeft = {value: 0}
        let dPadRight = {value: 0}

        if(gamepad.length > 0){      //Gamepad Stuff
            
            dx = gamepad[0].leftStick.x
            dy = gamepad[0].leftStick.y

            if(Math.abs(dx) + Math.abs(dy) < 0.7 && Math.abs(dx) + Math.abs(dy) != 0)
                this.speed = playerSpeed / 4
            else{ 

                if(this.dashing == false)
                    this.speed = playerSpeed
            }

            AButton = gamepad[0].buttons[0]
            BButton = gamepad[0].buttons[1]

            dPadDown = gamepad[0].buttons[13]
            dPadUp = gamepad[0].buttons[12]
            dPadLeft = gamepad[0].buttons[14]
            dPadRight = gamepad[0].buttons[15]

            if(dPadUp.value == 1)         //DPAD
                dy = -1
            if(dPadLeft.value == 1)
                dx = -1
            if(dPadDown.value == 1)
                dy = 1
            if(dPadRight.value == 1)
                dx = 1
        }

        if(keys.W.isDown || keys.UP.isDown)         //Keyboard Stuff
            dy = -1
        if(keys.A.isDown || keys.LEFT.isDown)
            dx = -1
        if(keys.S.isDown || keys.DOWN.isDown)
            dy = 1
        if(keys.D.isDown || keys.RIGHT.isDown)
            dx = 1
        
        if(keys.SPACE){                            //SPACE / A Button Stuff
            
            if(scene == scene.scene.get("tutorial") && (keys.SPACE.isDown || AButton.value == 1)){

                var theOtherScene = scene.scene.get("level1");            
                theOtherScene.scene.restart()            
                scene.scene.switch("level1")
            } else if(scene == scene.scene.get("landsBetween")  && (keys.SPACE.isDown || AButton.value == 1)){

                var theOtherScene = scene.scene.get("level" + lv);            
                theOtherScene.scene.restart()            
                scene.scene.switch("level" + lv)
            }
        }

        if(keys.SHIFT && keys.Z){
            if(this.dashAvailable && (keys.SHIFT.isDown || keys.Z.isDown || BButton.value == 1) && !(areArraysEqual(this.velocity,[0,0]))){
                this.speed = playerSpeed * 4
                this.clockEnabled = true
                this.dashAvailable = false
                this.dashing = true
                this.color = 0xAADDAA
            }
        }

        if(keys.P){
            
            if(keys.P.isDown){
                var theOtherScene = scene.scene.get("debug");            
                theOtherScene.scene.restart()            
                scene.scene.switch("debug")
            }            
        }
        
        this.velocity = [dx,dy]     //Vector is normalized in move()
        this.move()
        this.checkIfDead()
    }


    checkIfDead(){

        for (let i = 0; i < entities.length ; i++){
            
            if(entities[i].deadly == true){

                let collision = this.checkCollision2TheRevenge(entities[i],0,0)

                var theOtherScene2 = scene.scene.get("debug");  
                
                if(collision[0]){
                    
                    if(scene == theOtherScene2){

                        this.look.clear()
                        this.look.fillRect(this.x , this.y , this.width, this.height);
                        this.look.fillStyle(0xFF0000)

                    }else{

                        var theOtherScene = scene.scene.get("death");            
                        theOtherScene.scene.restart()            
                        scene.scene.switch("death")
                    }
                }
            }

            if(entities[i] != this && entities[i].color == goalColor){
                
                let collision = this.checkCollision2TheRevenge(entities[i],0,0)

                if(collision[0]){

                    lv++
                    var theOtherScene = scene.scene.get("landsBetween");            
                    theOtherScene.scene.restart()            
                    scene.scene.switch("landsBetween")
                } 
            }
        }
    }
}


class wall extends Entity{
    constructor(x,y,width,height){
        super(x,y,width,height,true,false,0,[0,0],true)

        this.color = wallColor
        this.look.fillStyle(this.color);
        this.look.fillRect(x , y , width, height);
    }

    handler(){}
}

class cannon extends Entity{
    constructor(x,y,bulletClock,bulletSpeed,bulletVelocity,bulletSize,capacity){
        super(x,y,PU,PU,true,false,0,[0,0],true)

        this.bulletClock = bulletClock  //how many seconds between bullets
        this.bulletVelocity = bulletVelocity == undefined ?  [1,0] : bulletVelocity 
        this.bulletSpeed = bulletSpeed
        this.bulletSize = bulletSize == undefined ? PU/2 : bulletSize
        this.capacity = capacity
        
        this.clock = 0
        this.color = cannonColor
        this.magazine = []        

        this.look.fillStyle(this.color);
        this.look.fillRect(x , y , PU, PU);

        this.generateMagazineNEW() 
    }

    handler(){

        this.clock += Delta

        if(this.clock >= this.bulletClock){
            
            this.clock = 0
            let continua = true

            for(let i = 0; i < this.magazine.length && continua === true; i++){

                if(this.magazine[i].active === false){

                    this.calculateDirection()
                    this.placeBullet(i)
                    continua = false
                }
            }
        }
    }

    placeBullet(i){

        let bulletCenterX
        let bulletCenterY
        let thisCenterX = this.x + this.width / 2
        let thisCenterY = this.y + this.height / 2
        let angle = Math.atan( this.bulletVelocity[0] / this.bulletVelocity[1]) + Math.PI/2
        
        if( angle >= 0 && angle < Math.PI / 4){                         //1

            let AB = this.width/2 + this.bulletSize/2
            let AC = AB / Math.cos(angle)
            let CB = AC * Math.sin(angle)

            if(this.bulletVelocity[1] < 0){
                bulletCenterX = thisCenterX + AB
                bulletCenterY = thisCenterY - CB
            }else{
                bulletCenterX = thisCenterX - AB
                bulletCenterY = thisCenterY + CB
            }

        }else if (angle >= Math.PI/4 && angle < Math.PI / 2){           //2

            let CB = this.width/2 + this.bulletSize/2
            let AC = CB / Math.sin(angle)
            let AB = AC * Math.cos(angle)

            if(this.bulletVelocity[1] < 0){
                bulletCenterX = thisCenterX + AB
                bulletCenterY = thisCenterY - CB
            }else{
                bulletCenterX = thisCenterX - AB
                bulletCenterY = thisCenterY + CB
            }

        } else if( angle >= Math.PI / 2 && angle < Math.PI * 3 / 4){    //3

            let CB = this.width/2 + this.bulletSize/2
            let AC = CB / Math.sin(Math.PI - angle)
            let AB = AC * Math.cos(Math.PI - angle)

            if(this.bulletVelocity[1] < 0){
                bulletCenterX = thisCenterX - AB
                bulletCenterY = thisCenterY - CB
            }else{
                bulletCenterX = thisCenterX + AB
                bulletCenterY = thisCenterY + CB
            }

        }else if (angle >= Math.PI * 3/4 && angle <= Math.PI){           //4

            let AB = this.width/2 + this.bulletSize/2
            let AC = AB / Math.cos(Math.PI - angle)
            let CB = AC * Math.sin(Math.PI - angle)

            if(this.bulletVelocity[1] < 0){
                bulletCenterX = thisCenterX - AB
                bulletCenterY = thisCenterY - CB
            }else{
                bulletCenterX = thisCenterX + AB
                bulletCenterY = thisCenterY + CB
            }
        } 

        this.magazine[i].moveTo( bulletCenterX - this.bulletSize/2, bulletCenterY - this.bulletSize/2)
        this.magazine[i].velocity = this.bulletVelocity
        this.magazine[i].activate()
    }

    generateMagazineNEW(){
        
        let maxDiagonal = Math.sqrt(XDIMENSION ** 2 + YDIMENSION ** 2)
        let bulletGap = this.bulletSpeed * this.bulletClock
        
        if(!(this.capacity)){ //calculate capacity if it unspecified (0 or undefinied)
            this.capacity = Math.floor( maxDiagonal / bulletGap) + 2
        }        

        for(let i = 0; i < this.capacity; i++){
            this.magazine.push(new bullet(-100, -100 , this.bulletSize , this.bulletSize , this.bulletSpeed , this.bulletVelocity, false)) 
        }

        this.calculateDirection()
        this.placeBullet(0)
        let numberToPlace = 1
        let continuaSuperior = true

        for(let i = 1; i < this.capacity && continuaSuperior == true; i++){

            let continua = true
            for(let j = 0; j < entities.length && continua == true; j++){
                
                if(entities[j] != this.magazine[0] && entities[j].collision == true){
                    let data = this.magazine[0].checkCollision2TheRevenge(entities[j], bulletGap * i * this.bulletVelocity[0], bulletGap * i * this.bulletVelocity[1])
                    if(data[0]){
                        continua = false
                    }
                }
            }

            if(continua == false){
                continuaSuperior = false
                numberToPlace = i
            }
        }

        for(let i = 1; i < numberToPlace; i++){

            this.magazine[i].moveTo(this.magazine[0].x + this.bulletVelocity[0] * i * bulletGap , this.magazine[0].y + this.bulletVelocity[1] * i * bulletGap)
            this.magazine[i].activate()
            this.magazine[i].velocity = this.bulletVelocity
        }
    }

    calculateDirection(){
        this.bulletVelocity = normalizeVector(this.bulletVelocity)
    }
}


class bullet extends Entity{
    constructor(x,y,width,height,speed,velocity,active,color){
        super(x,y,width,height,false,true,speed,velocity,true)        

        this.color = color == undefined ? defaultBulletColor : color
        this.active = active 

        if(this.active)
            this.activate()
        else
            this.deactivate()
    }

    handler(){

        if(this.active){
            
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
    constructor(x,y,bulletClock,bulletSpeed,bulletVelocity,bulletSize,capacity){        
        super(x,y,bulletClock,bulletSpeed,bulletVelocity,bulletSize,capacity)

        this.color = trackingCannonColor
        
        this.look.clear()
        this.look.fillStyle(this.color)
        this.look.fillRect(x , y , PU, PU)    
    }

    calculateDirection(){
        
        let dx = pg.x - this.x 
        let dy = pg.y - this.y

        this.bulletVelocity = normalizeVector([dx,dy])
    }
}


class predictingCannon extends cannon{
    constructor(x,y,bulletClock,bulletSpeed,bulletVelocity,bulletSize,capacity){        
        super(x,y,bulletClock,bulletSpeed,bulletVelocity,bulletSize,capacity)
        
        this.color = predictingCannonColor
        
        this.look.clear()
        this.look.fillStyle(this.color)
        this.look.fillRect(x , y , PU, PU)    
    }

    calculateDirection(){
        
        //vector between this and pg
        let TP = [pg.x - this.x , pg.y - this.y]

        let bulletTravelDistance = getDistance(this.x , this.y , pg.x , pg.y) - ( (this.width/2 + this.bulletSize) * (1 + (Math.sqrt(2) - 1) / 2) )
        let timeOfTravel = bulletTravelDistance / this.bulletSpeed

        let pgTravelDistance = playerSpeed * timeOfTravel
        let playerVector = [pg.velocity[0] * pgTravelDistance , pg.velocity[1] * pgTravelDistance]

        let linkingVector = [TP[0] + playerVector[0] , TP[1] + playerVector[1]]

        this.bulletVelocity = normalizeVector(linkingVector)
    }
}

class spinnyBoi extends cannon{
    constructor(x,y,bulletClock,bulletSpeed,anticlockwise,bulletVelocity,bulletSize,capacity){        
        super(x,y,bulletClock,bulletSpeed,bulletVelocity,bulletSize,capacity)
        
        this.color = predictingCannonColor
        this.anticlockwise = anticlockwise == undefined ? false : anticlockwise
        
        this.look.clear()
        this.look.fillStyle(this.color)
        this.look.fillRect(x , y , PU, PU)    
    }

    calculateDirection(){
        

        
         //vector between this and pg
        let vector = this.anticlockwise ? 
                        [this.bulletVelocity[0] * Math.cos(-Math.PI/12) - this.bulletVelocity[1] * Math.sin(-Math.PI/12) , 
                        this.bulletVelocity[0] * Math.sin(-Math.PI/12) + this.bulletVelocity[1] * Math.cos(-Math.PI/12)]     :     
                        [this.bulletVelocity[0] * Math.cos(Math.PI/12) - this.bulletVelocity[1] * Math.sin(Math.PI/12) , 
                        this.bulletVelocity[0] * Math.sin(Math.PI/12) + this.bulletVelocity[1] * Math.cos(Math.PI/12)] 

        this.bulletVelocity = normalizeVector(vector)
    }
}


class nonnoLaser extends Entity{ //ACTIVATE GENERATELASER() IN THE LASER IF YOU IMPLEMENT MOVING WALLS
    constructor(x,y,offTime,onTime,direction,laserThickness){
        super(x,y,PU,PU,true,false,0,[0,0],true)

        this.onTime = onTime
        this.offTime = offTime
        this.direction = direction

        this.laser = undefined
        this.laserThickness = laserThickness == undefined ? PU * 0.4 : laserThickness
        this.clock = 0

        this.color = nonnoLaserColor
        this.laserObjColor = laserColor

        this.look.fillStyle(this.color);
        this.look.fillRect(x , y , PU, PU);

        this.generateLaser()
    }

    handler(){

        this.clock += Delta
        
        if(this.clock > this.offTime && this.clock <= this.offTime + this.onTime && this.laser.active === false){
            //this.generateLaser()
            this.laser.activate()
        }
        if(this.clock > this.offTime + this.onTime && this.laser.active === true){
            this.clock = 0
            this.laser.deactivate()
        }
    }
    
    generateLaser(){
        
        let data = []
        
        let minimunX = XDIMENSION
        let minimunY = YDIMENSION

        //since checkcCollision2 returns the distance in X and Y to reach the collising object, I use it to determine the travel distance of a bullet
        for (let i = 0; i < entities.length; i++){
            
            let forbidden = entities.indexOf(this)
            
            if(entities[i].collision === true && i !== forbidden){

                data = this.checkCollision2TheRevenge(entities[i], this.direction[0] * XDIMENSION, this.direction[1] * YDIMENSION)
                if(Math.abs(data[1]) < minimunX && this.direction[1] === 0 && data[0] === true){                    
                    minimunX = Math.abs(data[1])
                }
                if(Math.abs(data[2]) < minimunY && this.direction[0] === 0 && data[0] === true){
                    minimunY = Math.abs(data[2])
                }
            }
        }

        if(areArraysEqual(this.direction , [1,0])){
            this.laser = new bullet(this.x + this.width, this.y + this.height / 2 - this.laserThickness / 2, minimunX , this.laserThickness ,0,[0,0],true,this.laserObjColor)
        }
        if(areArraysEqual(this.direction , [-1,0])){
            this.laser = new bullet(this.x - minimunX, this.y + this.height / 2 - this.laserThickness / 2 , minimunX , this.laserThickness ,0,[0,0],true,this.laserObjColor)
        }
        if(areArraysEqual(this.direction , [0,1])){
            this.laser = new bullet(this.x + this.width / 2 - this.laserThickness / 2 , this.y + this.height, this.laserThickness , minimunY ,0,[0,0],true,this.laserObjColor)
        }
        if(areArraysEqual(this.direction , [0,-1])){
            this.laser = new bullet(this.x + this.width / 2 - this.laserThickness / 2 , this.y - minimunY, this.laserThickness , minimunY ,0,[0,0],true,this.laserObjColor)
        }

        this.laser.deactivate()
    }
}


class stalker extends Entity{
    constructor(x,y){
        super(x,y,PU - 1, PU - 1,false,true,playerSpeed*0.75,[0,0],true)

        this.clock = 0
        this.path = []

        this.color = stalkerColor
        this.look.fillStyle(this.color);
        this.look.fillRect(x , y , PU, PU);
    }

    handler(){

        this.clock += Delta

        if(this.clock > 0.5){
            this.clock = 0
            
            this.pathFinding()
            this.retracePath2()
            //this.colorPath()
        }

        let data = this.move()
        this.moveStalker(data[0])
    }

    moveStalker(collided){
        
        if(collided && !(this.velocity[0] != 0 && this.velocity[1] != 0)){

            if(this.path.length > 1)
                this.velocity = [this.path[this.path.length - 1].x - this.x , this.path[this.path.length - 1].y - this.y]
            else if(this.path.length > 0){
                
                let centerPGX = pg.x + pg.width / 2
                let centerPGY = pg.y + pg.height / 2
                let dx = centerPGX - this.x 
                let dy = centerPGY - this.y

                this.velocity= normalizeVector([dx,dy])
            }

        }else{

            if(this.path.length > 1){

                let LNI = this.findMeInPath()       //Last Node Index
                let SLNI = LNI - 1                  //Second Last Node Index
                
                if(SLNI >= 0 && SLNI < this.path.length)
                    this.velocity = [this.path[SLNI].x - this.path[LNI].x , this.path[SLNI].y - this.path[LNI].y]

            }else if (this.path.length > 0){

                let centerPGX = pg.x + pg.width / 2
                let centerPGY = pg.y + pg.height / 2
                let dx = centerPGX - this.x 
                let dy = centerPGY - this.y

                this.velocity= normalizeVector([dx,dy])
                
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
        let startingNodeX = this.x - this.x % PU
        let startingNodeY = this.y - this.y % PU

        //and the target node
        let centerPGX = pg.x + pg.width / 2
        let centerPGY = pg.y + pg.height / 2
        let targetNodeX = centerPGX - centerPGX % PU
        let targetNodeY = centerPGY - centerPGY % PU

        
        grid.grid[startingNodeX/PU][startingNodeY/PU].calculateCosts(startingNodeX,startingNodeY,targetNodeX,targetNodeY)
        open.push(grid.grid[startingNodeY/PU][startingNodeX/PU])

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

            closed.push(grid.grid[open[maxIndex].y/PU][open[maxIndex].x/PU])
            open.splice(maxIndex,1)

            if(currentNode.x == grid.grid[targetNodeY/PU][targetNodeX/PU].x && currentNode.y == grid.grid[targetNodeY/PU][targetNodeX/PU].y){
                exit = true
            }

            let neighbours = grid.getNeighbours(currentNode)

            for(let i = 0; i < neighbours.length; i++){

                if( closed.indexOf(grid.grid[neighbours[i].y/PU][neighbours[i].x/PU]) == -1){

                    let newMovementCostToNeighbour = currentNode.sCost + this.calculatePathLenght(currentNode , neighbours[i])
                    
                    if( newMovementCostToNeighbour < neighbours[i].sCost ||  open.indexOf(neighbours[i]) == -1){

                        grid.grid[neighbours[i].y/PU][neighbours[i].x/PU].sCost = newMovementCostToNeighbour
                        grid.grid[neighbours[i].y/PU][neighbours[i].x/PU].tCost = 
                            this.calculatePathLenght(neighbours[i],grid.grid[targetNodeX/PU][targetNodeY/PU])
                        grid.grid[neighbours[i].y/PU][neighbours[i].x/PU].calculateCostsFromLocal()
                        grid.grid[neighbours[i].y/PU][neighbours[i].x/PU].parent = grid.grid[currentNode.y/PU][currentNode.x/PU]

                        if(open.indexOf(grid.grid[neighbours[i].y/PU][neighbours[i].x/PU] == -1)){
                            open.push(grid.grid[neighbours[i].y/PU][neighbours[i].x/PU])
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

        let centerPGX = pg.x + pg.width / 2
        let centerPGY = pg.y + pg.height / 2

        let currentNode = null
        
        if(grid.grid[(centerPGY - centerPGY % PU)/PU][(centerPGX - centerPGX % PU)/PU].walkable){
            currentNode = grid.grid[(centerPGY - centerPGY % PU)/PU][(centerPGX - centerPGX % PU)/PU]
        }
        let continua = true

        while(currentNode != grid.grid[(this.y - this.y % PU)/PU][(this.x - this.x % PU)/PU] && continua){

            if(currentNode != null){
                this.path.push(grid.grid[currentNode.y/PU][currentNode.x/PU])
                currentNode = grid.grid[currentNode.y/PU][currentNode.x/PU].parent
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
    constructor(gridNodeSize,visualize){

        this.grid = []
        this.gridNodeSize = gridNodeSize
        this.visualize = visualize == undefined ? false : visualize
        
        for(let i = 0; i < YDIMENSION/gridNodeSize; i++){
            
            let row = []

            for(let j = 0; j < XDIMENSION/gridNodeSize; j++){

                let nodo = new node(j * gridNodeSize , i * gridNodeSize, true)
                row.push(nodo)
            }

            this.grid.push(row)            
        }

        this.gridUpdater()
    }

    gridUpdater(){
        
        for(let i = 0; i < YDIMENSION/ this.gridNodeSize; i++){
            
            for(let j = 0; j < XDIMENSION/ this.gridNodeSize; j++){

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
                
                //GRID VISUALIZER
                if(this.visualize){
                    if(this.grid[i][j].walkable){
                        this.grid[i][j].look.fillStyle(0x00FF00);
                        this.grid[i][j].look.fillRect(this.grid[i][j].x + 4 , this.grid[i][j].y + 4 , 2, 2);
                    }else{
                        this.grid[i][j].look.fillStyle(0xFF0000);
                        this.grid[i][j].look.fillRect(this.grid[i][j].x + 4 , this.grid[i][j].y + 4 , 2, 2);
                    }
                }
            }
        }
    }

    getNeighbours(node){

        let neighbours = []

        let thisRow = node.y / PU
        let thisCol = node.x / PU
        
        if( thisRow - 1 >= 0 && thisCol - 1 >= 0)
            if(this.grid[thisRow - 1][thisCol - 1].walkable) {neighbours.push(this.grid[thisRow - 1][thisCol - 1])}

        if( thisCol - 1 >= 0)
            if(this.grid[thisRow][thisCol - 1].walkable) {neighbours.push(this.grid[thisRow][thisCol - 1])}

        if( thisRow + 1 < YDIMENSION / PU && thisCol - 1 >= 0)
            if(this.grid[thisRow + 1][thisCol - 1].walkable) {neighbours.push(this.grid[thisRow + 1][thisCol - 1])}

        if( thisRow - 1 >= 0)
            if(this.grid[thisRow - 1][thisCol].walkable) {neighbours.push(this.grid[thisRow - 1][thisCol])}

        if( thisRow + 1 < YDIMENSION/PU)
            if(this.grid[thisRow + 1][thisCol].walkable) {neighbours.push(this.grid[thisRow + 1][thisCol])}

        if( thisRow - 1 >= 0 && thisCol + 1 < XDIMENSION / PU)
            if(this.grid[thisRow - 1][thisCol + 1].walkable) {neighbours.push(this.grid[thisRow - 1][thisCol + 1])}

        if(thisCol + 1 < XDIMENSION / PU)
            if(this.grid[thisRow][thisCol + 1].walkable) {neighbours.push(this.grid[thisRow][thisCol + 1])}

        if( thisRow + 1 < YDIMENSION / PU && thisCol + 1 < XDIMENSION / PU)
            if(this.grid[thisRow + 1][thisCol + 1].walkable) {neighbours.push(this.grid[thisRow + 1][thisCol + 1])}

        return neighbours
    }

    cleanPaths(){

        for(let i = 0; i < YDIMENSION/gridNodeSize; i++){

            for(let j = 0; j < XDIMENSION/gridNodeSize; j++){

                this.grid[i][j].look.clear()
            }
        
        }
    }
}


class lava extends Entity{
    constructor(x,y,w,h){
        super(x,y,w,h,false,true,0,[0,0],true)

        this.clock = 0
        this.timeToChange = false

        this.color = lavaColor
        this.look.fillStyle(this.color);
        this.look.fillRect(x , y , w, h);
    }

    handler(){

        this.clock += Delta

        if(this.clock > 2){
            this.timeToChange = true
            this.clock = 0
        }

        if(this.timeToChange){

            if(this.color == lavaColor){

                this.color = lavaColor2
                this.look.clear()
                this.look.fillStyle(lavaColor2);
                this.look.fillRect(this.x , this.y , this.width, this.height);
                this.timeToChange = false

            }else{

                this.color = lavaColor
                this.look.clear()
                this.look.fillStyle(lavaColor);
                this.look.fillRect(this.x , this.y , this.width, this.height);
                this.timeToChange = false
            }
        }
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
        super(x,y,Math.floor(PU*0.75),Math.floor(PU*0.75),false,true,220,startingDirection,true)

        this.color = ballColor
        this.look.fillStyle(this.color);
        this.look.fillRect(x , y , this.width, this.height);
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


class mine extends Entity{
    constructor(x,y,timeToBOOM,proximityRadius,explosionRadius,playerTriggerable){

        if(proximityRadius != undefined){
            super(x - proximityRadius + Math.floor(PU*0.75/2), y - proximityRadius + Math.floor(PU*0.75/2), proximityRadius * 2 , proximityRadius * 2,
                false,false,0,[0,0],true)
            this.proximityRadius = proximityRadius
        }
        else{
            super(x - PU * 2 + Math.floor(PU*0.75/2), y - PU * 2 + Math.floor(PU*0.75/2), PU * 2* 2 , PU * 2 * 2,
                false,false,0,[0,0],true)
            this.proximityRadius = PU * 2
        }

        this.timeToBOOM = timeToBOOM == undefined ? 2: timeToBOOM
        this.playerTriggerable = playerTriggerable == undefined ? true : playerTriggerable 
        this.triggered = false
        this.clock = 0
        this.BOOM = false
        this.complete = false

        let centerX = this.x + this.width/2
        let centerY = this.y + this.height/2
        
        let radius = explosionRadius == undefined ? PU * 3 : explosionRadius
        this.explosionBOOM = new explosion(centerX - radius , centerY - radius , radius * 2 , radius * 2 , explosionColor)
        this.side = Math.floor(PU*0.75)

        this.color = this.playerTriggerable ? mineColor : mineColor2
        this.look.fillStyle(this.color);
        this.look.fillRect(x , y , this.side , this.side);
    }

    handler(){

        if(!this.BOOM){

            if(this.triggered){

                this.clock += Delta

                if(this.clock < this.timeToBOOM * 0.75){

                    if(Math.floor(this.clock * 10) % 6 >= 3){

                        this.look.clear()
                        this.look.fillStyle(this.color);
                        this.look.fillRect(this.x + this.proximityRadius - Math.floor(PU*0.75/2), this.y + this.proximityRadius - Math.floor(PU*0.75/2),
                            this.side, this.side);

                    }else{                    

                        this.look.clear()
                        this.look.fillStyle(0xFF0000);
                        this.look.fillRect(this.x +this.proximityRadius - Math.floor(PU*0.75/2), this.y + this.proximityRadius - Math.floor(PU*0.75/2),
                            this.side, this.side);
                    }

                }else{

                    if(this.clock < this.timeToBOOM){

                        if(Math.floor(this.clock * 10) % 2 ){

                            this.look.clear()
                            this.look.fillStyle(0xFF0000);
                            this.look.fillRect(this.x + this.proximityRadius - Math.floor(PU*0.75/2), this.y + this.proximityRadius - Math.floor(PU*0.75/2),
                                this.side, this.side);

                        }else{
        
                            this.look.clear()
                            this.look.fillStyle(this.color);
                            this.look.fillRect(this.x + this.proximityRadius - Math.floor(PU*0.75/2), this.y + this.proximityRadius - Math.floor(PU*0.75/2),
                                this.side, this.side);
                        }
                    }else{

                        this.look.clear()
                        this.BOOM = true
                        this.explosionBOOM.activate()
                    }
                }

            }else{

                if(this.playerTriggerable){
                
                    for (let i = 0; i < entities.length ; i++){
                    
                        if(entities[i] == pg){

                            let collision = this.checkCollision2TheRevenge(pg,0,0)

                            if(collision[0])                        
                                this.triggered = true
                        }
                    }
                }
            }
        }else{

            if(!this.complete){

                this.clock += Delta

                if(this.clock > this.timeToBOOM + 0.5){

                    this.complete = true
                    this.explosionBOOM.deactivate()
                }
            }
        }
    }
}


class explosion extends bullet{
    constructor(x,y,width,height,color){
        super(x,y,width,height,0,[0,0],false,color)
    }

    handler(){

        if(this.active){
            
            for (let i = 0; i < entities.length ; i++){
            
                if(entities[i].color == mineColor || entities[i].color == mineColor2){

                    let collision = this.checkCollision2TheRevenge(entities[i],0,0)  
                    
                    if(collision[0]){
                        
                        if(entities[i].triggered == false){

                            entities[i].triggered = true
                            entities[i].clock = entities[i].timeToBOOM * 0.75
                        }
                    }
                }
            }
        }
    }
}


class goal extends Entity{
    constructor(x,y,w,h){
        super(x,y,w,h,false,false,0,[0,0],true)

        this.color = goalColor
        this.look.fillStyle(this.color);
        this.look.fillRect(x , y , w, h);
    }
}


class upgrade extends Entity{
    constructor(x,y,kind){
        super(x,y,8,8,false,false,0,[0,0],true)

        this.kind = kind
        this.taken = false
        this.clock = 0
        this.timeToChange = false
        this.done = false
        this.textSlot = scene.add.text(this.x - 60, this.y + 10 , " " , { font: '12px' })
        
        if(kind == "dash")
            this.text = "   UPGRADE TIME!\n You can Dash now!\n Press SHIFT or Z \nB on the controller"

        this.color = upgradeColor
        this.look.fillStyle(this.color);
        this.look.fillRect(x , y , 8, 8);
    }
    
    handler(){

        if(!this.done){

            this.clock += Delta

            if(this.clock > 0.5 && this.taken == false){
                this.timeToChange = true
                this.clock = 0
            } else if(this.clock > 10){
                this.done = true
                this.textSlot.setText("")
            }

            if(this.timeToChange && this.taken == false){

                if(this.color == upgradeColor){

                    this.color = upgradeColor2
                    this.look.clear()
                    this.look.fillStyle(this.color);
                    this.look.fillRect(this.x , this.y , this.width, this.height);
                    this.timeToChange = false

                }else{

                    this.color = upgradeColor
                    this.look.clear()
                    this.look.fillStyle(this.color);
                    this.look.fillRect(this.x , this.y , this.width, this.height);
                    this.timeToChange = false
                }
            }

            let data = this.checkCollision2TheRevenge(pg,0,0)

            if(data[0]){

                this.taken = true
                this.clock = 0

                if(this.kind == "dash"){
                    this.textSlot.setText(this.text)
                    pg.dashAvailable = true
                    this.look.clear()
                }
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

function levelManager(){

    lv = password.value    
    
    var theOtherScene = scene.scene.get("level" + password.value);            
    theOtherScene.scene.restart()            
    scene.scene.switch("level" + password.value)
}

function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomInRange(min, max) {
    return (Math.random() * (max - min)) + min;
}



//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

//
// SCENES
//

//ORDER OF PLACEMENT:   PG  ->  WALLS   ->  LAVA   ->  ENEMIES (BALLS LAST)  ->     SMOKE   ->  GRID  

function preload (){}

function create(){}

function update(time,delta){

    Delta = delta / 1000
    omniHandler()
}

//-----------------------------------------------------

let fpsCounter
let playerPosition

function preloadDebug (){}

function createDebug (){    
    
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,SHIFT,SPACE,DOWN,LEFT,RIGHT,UP');
    gamepad = this.input.gamepad.gamepads
    pg = new player(80,250);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION) 
    
    let thinWall = new wall(50,481,50,4)
    let thinWall2 = new wall(50,520,4,50)
    let laserWallTest = new wall(435,85,60,80)
    let meow = new wall(60,200,20,10)
    let meow2 = new wall(110,200,20,10)
    let meow3 = new wall(50,200,10,90)
    let meow4 = new wall(130,200,10,90)
    let meow5= new wall(50,290,90,10)

    let lava2 = new lava(300,95,30,60)
    let lavaCreep = new lava(500,500,40,40)    
    
    let cannon0 = new cannon(16,100,0.2,150,[1,0],8)
    let Tcannon = new trackingCannon(400,250,0.2,150,[1,0],8)
    let laser = new nonnoLaser(16,120,3,0.5,[1,0])
    let laser2 = new nonnoLaser(768,140,2,5,[-1,0])
    let laser3 = new nonnoLaser(440,16,0.5,0.5,[0,1])
    let laser4 = new nonnoLaser(460,768,5,2,[0,-1])
    let cumbare = new stalker(100,350)    
    let palla = new ball(550,400,[1,1])
    let mina = new mine(420,400)
    let mina2 = new mine(400,400)
    let omg = new predictingCannon(300,350,0.2,150,[1,0],8)
    let spinnyboi0 = new spinnyBoi(680,680,0.001,200,false,undefined,undefined,10)

    let testUpgrade = new upgrade(100,350,"dash")

    let fumo = new smoke(200,450,60,50)

    grid = new nodeGrid(gridNodeSize)
    
    fpsCounter = this.add.text(20, 15)
    playerPosition = this.add.text(20,30)
}

function updateDebug (time,delta){

    Delta = delta / 1000
    omniHandler()
        
    fpsCounter.setText(1000 / delta)
    playerPosition.setText("X: " + pg.x + "  Y: " + pg.y)
}

//-----------------------------------------------------

function createTutorial(){

    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,SPACE,P,DOWN,LEFT,RIGHT,UP');
    gamepad = this.input.gamepad.gamepads
    pg = new player(392,350);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION) 

    let tutorialText = this.add.text(225,60,"WELCOME TO AVOID", { font: '32px' })
    let tutorialText2 = this.add.text(160,110,"Just use the arrows keys or W A S D to move", { font: '18px' })
    let tutorialText3 = this.add.text(145,130,"The Goal is reach the green zone in each level", { font: '18px' })
    let tutorialText4 = this.add.text(130,150,"Also, try to avoid whatever the heck comes at you", { font: '18px' })
    let tutorialText5 = this.add.text(75,170,"Actually you have to, because you'd die otherwhise, y'know?", { font: '18px' })
    let tutorialText6 = this.add.text(200,210,"Press SPACE to jump into the action.", { font: '18px' })
}


//-----------------------------------------------------

function createLandsBetween(){

    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,SPACE,DOWN,LEFT,RIGHT,UP');
    gamepad = this.input.gamepad.gamepads
    pg = new player(392,350);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)

    let LBText = this.add.text(120,100,"VICTORY IS YOURS", { font: '58px' })
    let LBText2 = this.add.text(90,180,"Press SPACE to advance to the next level", { font: '26px' })
}


//------------------------------------------------------

let deathText3
let deathClock = 0

function createDeath(){

    deathClock = 0
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,DOWN,LEFT,RIGHT,UP');
    gamepad = this.input.gamepad.gamepads
    pg = new player(392,450);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)

    let deathText = this.add.text(250,100,"YOU DIED", { font: '58px' })
    let deathText2 = this.add.text(290,200,"Respawing in:", { font: '26px' })
    deathText3 = this.add.text(385,240," ",{ font: '26px' })
}

function updateDeath(time,delta){

    Delta = delta / 1000
    deathClock += delta
    omniHandler()

    if(deathClock > 0)
        deathText3.setText("3")
    
    if(deathClock > 1000)
        deathText3.setText("2")

    if(deathClock > 2000)
        deathText3.setText("1")
    
    if(deathClock > 3000){

        var theOtherScene = scene.scene.get("level" + lv);            
        theOtherScene.scene.restart()            
        scene.scene.switch("level" + lv)
    }
}

//------------------------------------------------------


function createLevel1(){

    thisLevelPass.textContent = "SALVE"
    levelName.textContent = "CANNONS!"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,DOWN,LEFT,RIGHT,UP,SPACE');
    gamepad = this.input.gamepad.gamepads
    pg = new player(392,700);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)

    let cannon1 = new cannon(16,200,0.5,200,[1,0])
    let cannon2 = new cannon(768,300,0.5,200,[-1,0])
    let cannon3 = new cannon(16,400,0.5,200,[1,0])
    let cannon4 = new cannon(768,500,0.5,200,[-1,0])

    let finish = new goal(16,16,768,40)
}

function createLevel2(){

    thisLevelPass.textContent = "SALVE2"
    levelName.textContent = "CANNONS TOGETHER STRONG!"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,DOWN,LEFT,RIGHT,UP');
    gamepad = this.input.gamepad.gamepads
    pg = new player(150,650);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)

    let cannon1 = new cannon(16,200,0.75,200,[1,0])
    let cannon2 = new cannon(16,200 + PU + 4,0.75,200,[1,0])
    let cannon3 = new cannon(16,200 + PU * 2 + 8,0.75,200,[1,0])
    let cannon4 = new cannon(768,500 + PU + 4,0.75,200,[-1,0])
    let cannon5 = new cannon(768,500 + PU * 2 + 8,0.75,200,[-1,0])
    let cannon6 = new cannon(768,500,0.75,200,[-1,0])
    let cannon7 = new cannon(392,16,0.35,200,[0,1])

    let finish = new goal(650,16,134,50)
}

function createLevel3(){

    thisLevelPass.textContent = "SALVE2"
    levelName.textContent = "THE STORM!"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,DOWN,LEFT,RIGHT,UP');
    gamepad = this.input.gamepad.gamepads
    pg = new player(40,720);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)

    let wall1 = new wall(80,500,630,284)

    for(let i = 0; i<20; i++){
        let cannon0 = new cannon(90 + i * 32,16,generateRandomInRange(0.75,1.5),generateRandomIntegerInRange(100,400),[0,1])
    }

    let finish = new goal(710,750,74,34)
}

function createLevel4(){

    thisLevelPass.textContent = "SALVE2"
    levelName.textContent = "LASERZZZZZZ!"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,DOWN,LEFT,RIGHT,UP');
    gamepad = this.input.gamepad.gamepads
    pg = new player(392,50);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)

    let laser1 = new nonnoLaser(16,200,1.5,0.5,[1,0])
    let laser2 = new nonnoLaser(768,300,1.5,0.75,[-1,0])
    let laser3 = new nonnoLaser(16,400,1.5,1,[1,0])
    let laser4 = new nonnoLaser(768,500,1.5,1.25,[-1,0])
    let laser5 = new nonnoLaser(16,600,1.5,1.5,[1,0])

    let finish = new goal(16,750,768,34)    
}

function createLevel5(){

    thisLevelPass.textContent = "SALVE2"
    levelName.textContent = "LASERZZZZZZ!"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,DOWN,LEFT,RIGHT,UP');
    gamepad = this.input.gamepad.gamepads
    pg = new player(330,575);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)

    let wall1 = new wall(160,180,480,350)
    let wall2 = new wall(160,530,100,254)
    let wall3 = new wall(410,530,230,100)

    let laser1 = new nonnoLaser(450,630,1,2,[0,1])
    let laser2 = new nonnoLaser(470,630,1,2,[0,1])
    let laser3 = new nonnoLaser(550,630,1,1,[0,1])
    let laser4 = new nonnoLaser(570,630,1,1,[0,1])

    let laser5 = new nonnoLaser(640,540,1,3,[1,0])
    let cannon1 = new cannon(640,560,0.8,150,[1,0])
    let laser6 = new nonnoLaser(768,410,1,2,[-1,0])
    let cannon2 = new cannon(768,390,1.2,50,[-1,0])
    let laser7 = new nonnoLaser(640,240,2,2,[1,0])
    let cannon3 = new cannon(640,260,0.6,100,[1,0])    
    
    let laser8 = new nonnoLaser(300,16,2,2,[0,1])
    let cannon4= new cannon(320,16,1.5,120,[0,1])
    let laser9 = new nonnoLaser(340,16,2,2,[0,1])

    let cannon5= new cannon(440,16,1.5,120,[0,1])
    let laser10 = new nonnoLaser(460,16,2,2,[0,1])
    let cannon6= new cannon(480,16,1.5,120,[0,1])
    
    let laser11 = new nonnoLaser(32,16,1,5,[0,1])
    let laser12 = new nonnoLaser(128,16,1,5,[0,1])
    let cannon7 = new cannon(16,300,1.2,50,[1,0])
    let cannon8 = new cannon(16,450,1.2,50,[1,0])
    let cannon9 = new cannon(16,600,1.2,50,[1,0])    

    let finish = new goal(16,750,144,34)
}

function createLevel6(){

    thisLevelPass.textContent = "SALVE2"
    levelName.textContent = "CANNONS TOGETHER STRONG!"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,DOWN,LEFT,RIGHT,UP');
    gamepad = this.input.gamepad.gamepads
    pg = new player(75,67);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)

    let wall1 = new wall(16,166,149,670)
    let wall2 = new wall(272,16,149,620)
    let wall3 = new wall(528,166,149,670)

    let cannon0 = new cannon(176,768,1.5,125,[0,-1])
    let cannon1 = new cannon(199,768,1.5,150,[0,-1])
    let cannon2 = new cannon(222,768,2,100,[0,-1])
    let cannon3 = new cannon(245,768,1.75,175,[0,-1])

    let cannon4 = new cannon(432,16,1,100,[0,1])
    let cannon5 = new cannon(455,16,1.5,150,[0,1])
    let cannon6 = new cannon(478,16,2,200,[0,1])
    let cannon7 = new cannon(501,16,2.5,250,[0,1])

    let cannon8 = new cannon(688,16,1,playerSpeed,[0,1])
    let cannon9 = new cannon(711,16,1,playerSpeed,[0,1])
    let cannon10 = new cannon(734,16,1,playerSpeed,[0,1])
    let cannon11 = new cannon(757,16,1,playerSpeed,[0,1])

    let finish = new goal(677,750,107,34)
}

function createLevel7(){

    thisLevelPass.textContent = "SALVE2"
    levelName.textContent = "CANNONS TOGETHER STRONG!"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,DOWN,LEFT,RIGHT,UP');
    gamepad = this.input.gamepad.gamepads
    pg = new player(60,730);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)

    let wall1 = new wall(16,16,334,150)
    let wall2 = new wall(16,166,134,484)
    let wall3 = new wall(16,650,334,50)
    let wall4 = new wall(450,116,334,50)
    let wall5 = new wall(650,166,134,484)
    let wall6 = new wall(450,650,334,160)

    let cannon0 = new cannon(150,600,1,150,[1,0])
    let cannon1 = new cannon(634,590,1,150,[-1,0])

    let cannon2 = new cannon(150,478,1,150,[1,0])
    let cannon3 = new cannon(634,504,1,150,[-1,0])
    let cannon4 = new cannon(150,494,1,150,[1,0])
    let cannon5 = new cannon(634,520,1,150,[-1,0])

    let cannon6 = new cannon(150,390,0.6,250,[1,0])
    let cannon7 = new cannon(634,400,0.6,250,[-1,0])

    let cannon8 = new cannon(150,300,0.6,150,[1,0])
    let cannon9 = new cannon(634,290,0.6,150,[-1,0])
    let cannon10 = new cannon(150,280,0.6,150,[1,0])
    let cannon11 = new cannon(634,270,0.6,150,[-1,0])

    let cannon12 = new cannon(150,200,0.6,250,[1,0])
    let cannon13 = new cannon(634,200,0.6,250,[-1,0])

    let laser1 = new nonnoLaser(392,16,12,3,[0,1],30)

    let finish = new goal(750,16,34,100)
}

function createLevel8(){

    thisLevelPass.textContent = "SALVE2"
    levelName.textContent = "CANNONS TOGETHER STRONG!"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,DOWN,LEFT,RIGHT,UP');
    gamepad = this.input.gamepad.gamepads
    pg = new player(250,66);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)

    let wall1 = new wall(300,16,50,100)
    let wall2 = new wall(200,116,150,50)
    let wall3 = new wall(200,166,50,384)
    let wall4 = new wall(200,550,400,50)
    let wall5 = new wall(550,100,50,450)
    let wall6 = new wall(400,330,200,50)

    let Tcannon1 = new trackingCannon(16,400,0.7,200)
    let Tcannon2 = new trackingCannon(400,768,0.7,200)
    let Tcannon4 = new trackingCannon(685,16,0.7,200)
    let Tcannon5 = new trackingCannon(250,200,0.7,200)
    let Tcannon7 = new trackingCannon(400,534,0.7,200)

    let finish = new goal(520,380,30,170)
}

function createLevel9(){

    thisLevelPass.textContent = "SALVE2"
    levelName.textContent = "CANNONS TOGETHER STRONG!"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,DOWN,LEFT,RIGHT,UP');
    gamepad = this.input.gamepad.gamepads
    pg = new player(24,740)   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)
    
    let wall1 = new wall(46,16,20,184)
    let wall2 = new wall(46,241,20,309)
    let wall3 = new wall(46,591,20,134)
    let wall4 = new wall(16,16,30,709)
    let wall5 = new wall(140,76,74,750)
    let wall7 = new wall(120,66,110,309)
    let wall8 = new wall(120,418,110,400)
    let wall9 = new wall(300,16,84,709)
    let wall6 = new wall(284,16,16,184)
    let wall10 = new wall(284,241,16,309)
    let wall11 = new wall(284,591,20,134)
    let wall12 = new wall(384,675,150,50)
    let wall13 = new wall(640,675,150,50)
    let wall14 = new wall(384,16,150,100)
    let wall15 = new wall(640,16,150,100)

    let laser1 = new nonnoLaser(85,16,1.8,1,[0,1],27)
    let laser2 = new nonnoLaser(249,16,5.8,1,[0,1],27)
    let cannon1 = new cannon(284,214,1.5,50,[-1,0])
    let cannon2 = new cannon(214,389,1.5,50,[1,0])
    let cannon3 = new cannon(284,564,1.5,50,[-1,0])

    let laser3 = new nonnoLaser(384,200,2.8,1.2,[1,0])
    let laser4 = new nonnoLaser(384,320,2.1,1.9,[1,0])
    let laser5 = new nonnoLaser(384,440,1.4,2.6,[1,0])
    let laser6 = new nonnoLaser(384,560,0.7,3.3,[1,0])

    let Tcannon1 = new trackingCannon(384,160,0.4,150)
    let Tcannon2 = new trackingCannon(384,280,0.4,150)
    let Tcannon4 = new trackingCannon(384,400,0.4,150)
    let Tcannon5 = new trackingCannon(384,520,0.4,150)

    let finish = new goal(534,16,106,30)
}

function createLevel10(){

    thisLevelPass.textContent = "SALVE2"
    levelName.textContent = "STORM AND THUNDER!"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,DOWN,LEFT,RIGHT,UP');
    gamepad = this.input.gamepad.gamepads
    pg = new player(40,720);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)

    let wall1 = new wall(80,500,630,284)

    for(let i = 0; i<20; i++){

        if(Math.random() < 0.75){
            let cannone0 = new cannon(90 + i * 32,16,generateRandomInRange(0.75,1.5),generateRandomIntegerInRange(100,400),[0,1])
        }else{
            let laser0 = new nonnoLaser(90 + i* 32, 16,generateRandomInRange(1.5,3),0.2,[0,1])
        }
    }

    let finish = new goal(710,750,74,34)
}

function createLevel11(){

    thisLevelPass.textContent = "SALVE2"
    levelName.textContent = "STORM AND THUNDER!"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,DOWN,LEFT,RIGHT,UP');
    gamepad = this.input.gamepad.gamepads
    pg = new player(100,200);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)

    let wall1 = new wall(16,380,600,40)

    for(let i = 0; i<30; i++){
        let laser0 = new nonnoLaser(20 + i* 20, 16, i * 0.13 ,300,[0,1])
    }
    for(let i = 0; i<8; i++){
        let laser1 = new nonnoLaser(760 - i* 20, 16, (i + 30) * 0.13 ,300,[0,1])
    }
    for(let i = 0; i<30; i++){
        let laser2 = new nonnoLaser(600 - i* 20, 768, (i + 38) * 0.13 ,300,[0,-1])
    }

    let finish = new goal(40,440,36,310)

    let cannon0 = new trackingCannon(16,600,0.5,150)
}

function createLevel12(){

    thisLevelPass.textContent = "SALVE2"
    levelName.textContent = "STORM AND THUNDER!"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,DOWN,LEFT,RIGHT,UP');
    gamepad = this.input.gamepad.gamepads
    pg = new player(392,720);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)

    let wall1 = new wall(150,120,230,10)
    let wall2 = new wall(420,120,230,10)

    let cannon1 = new cannon(16,752,0.5,150,[1,-1])
    let cannon2 = new cannon(32,768,0.5,150,[1,-1])
    let cannon3 = new cannon(16,652,0.5,150,[1,-1])
    let cannon4 = new cannon(16,552,0.5,150,[1,-1])
    let cannon5 = new cannon(116,768,0.5,150,[1,-1])
    let cannon6 = new cannon(216,768,0.5,150,[1,-1])

    let cannon7 = new cannon(768,752,0.5,150,[-1,-1])
    let cannon8 = new cannon(752,768,0.5,150,[-1,-1])
    let cannon9 = new cannon(768,652,0.5,150,[-1,-1])
    let cannon10 = new cannon(768,552,0.5,150,[-1,-1])
    let cannon11 = new cannon(668,768,0.5,150,[-1,-1])
    let cannon12 = new cannon(568,768,0.5,150,[-1,-1])
    
    let finish = new goal(200,16,400,50)
}

function createLevel13(){

    thisLevelPass.textContent = "SALVE2"
    levelName.textContent = "STORM AND THUNDER!"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,DOWN,LEFT,RIGHT,UP');
    gamepad = this.input.gamepad.gamepads
    pg = new player(50,750);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)

    let wall0 = new wall(350,350,100,100)

    let ball0 = new ball( generateRandomIntegerInRange(100,200), generateRandomIntegerInRange(100,200),[-1,1])
    let ball1 = new ball( generateRandomIntegerInRange(200,300), generateRandomIntegerInRange(500,600),[-1,-1])
    let ball2 = new ball( generateRandomIntegerInRange(600,700), generateRandomIntegerInRange(400,500),[1,1])
    let ball3 = new ball( generateRandomIntegerInRange(500,600), generateRandomIntegerInRange(200,300),[-1,-1])
    let ball4 = new ball( generateRandomIntegerInRange(450,550), generateRandomIntegerInRange(500,600),[-1,1])
    let ball5 = new ball( generateRandomIntegerInRange(300,400), generateRandomIntegerInRange(450,550),[1,1])
    let ball6 = new ball( generateRandomIntegerInRange(100,350), generateRandomIntegerInRange(100,700),[1,1])
    let ball7 = new ball( generateRandomIntegerInRange(100,700), generateRandomIntegerInRange(450,700),[-1,-1])

    let finish = new goal(650,16,134,50)
}

function createLevel14(){

    thisLevelPass.textContent = "SALVE2"
    levelName.textContent = "STORM AND THUNDER!"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,DOWN,LEFT,RIGHT,UP');
    gamepad = this.input.gamepad.gamepads
    pg = new player(392,720);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)

    let wall1 = new wall(150,120,230,10)
    let wall2 = new wall(420,120,230,10)

    let cannon1 = new cannon(16,752,0.5,150,[1,-1])
    let cannon2 = new cannon(32,768,0.5,150,[1,-1])
    let cannon3 = new cannon(16,652,0.5,150,[1,-1])
    let cannon4 = new cannon(16,552,0.5,150,[1,-1])
    let cannon5 = new cannon(116,768,0.5,150,[1,-1])
    let cannon6 = new cannon(216,768,0.5,150,[1,-1])
    let cannon7 = new cannon(768,752,0.5,150,[-1,-1])
    let cannon8 = new cannon(752,768,0.5,150,[-1,-1])
    let cannon9 = new cannon(768,652,0.5,150,[-1,-1])
    let cannon10 = new cannon(768,552,0.5,150,[-1,-1])
    let cannon11 = new cannon(668,768,0.5,150,[-1,-1])
    let cannon12 = new cannon(568,768,0.5,150,[-1,-1])

    let laser0 = new nonnoLaser(300,768,0,300,[0,-1])
    let laser1 = new nonnoLaser(484,768,0,300,[0,-1])
    
    let finish = new goal(200,16,400,50)
}

let level15cannon
let level15coordinates
let level15clock = 0

function createLevel15(){

    thisLevelPass.textContent = "SALVE2"
    levelName.textContent = "STORM AND THUNDER!"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,DOWN,LEFT,RIGHT,UP');
    gamepad = this.input.gamepad.gamepads
    pg = new player(60,60);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)

    let wall0 = new wall(16,100,84,25)
    let wall1 = new wall(100,75,25,50)
    let wall2 = new wall(300,16,50,620)
    let wall3 = new wall(600,100,184,25)
    let wall5 = new wall(520,220,80,380)

    level15cannon = new trackingCannon(-100,-100,0.125,500)
    level15coordinates = [[16,250],[16,550],[284,375],[768,750],[350,425],[600,375],[350,50],[100,768],[450,768]]

    let finish = new goal(750,16,34,84)
}

function updateLevel15(time,delta){

    Delta = delta / 1000
    omniHandler()
    
    level15clock += Delta

    if(level15clock > 0.5){
        level15clock = 0
        let index = generateRandomIntegerInRange(0,level15coordinates.length - 1)
        level15cannon.moveTo(level15coordinates[index][0] , level15coordinates[index][1])
    }
}

function createLevel16(){

    thisLevelPass.textContent = "SALVE2"
    levelName.textContent = "STORM AND THUNDER!"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,DOWN,LEFT,RIGHT,UP');
    gamepad = this.input.gamepad.gamepads
    pg = new player(50,200);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)

    let wall0 = new wall(100,40,50,744)
    let wall1 = new wall(650,16,50,744)

    let cannon0 = new cannon(150,250,1,200,[1,0])
    let cannon1 = new cannon(634,400,1,200,[-1,0])
    let cannon2 = new cannon(150,550,1,200,[1,0])
    let cannon3 = new cannon(634,700,1,200,[-1,0])

    let ball0 = new ball( generateRandomIntegerInRange(200,600), generateRandomIntegerInRange(50,750),[-1,1])
    let ball1 = new ball( generateRandomIntegerInRange(200,600), generateRandomIntegerInRange(50,750),[-1,-1])
    let ball2 = new ball( generateRandomIntegerInRange(200,600), generateRandomIntegerInRange(50,750),[1,-1])
    let ball3 = new ball( generateRandomIntegerInRange(200,600), generateRandomIntegerInRange(50,750),[1,1])
    let ball4 = new ball( generateRandomIntegerInRange(200,600), generateRandomIntegerInRange(50,750),[-1,1])
    let ball5 = new ball( generateRandomIntegerInRange(200,600), generateRandomIntegerInRange(50,750),[-1,-1])
    let ball6 = new ball( generateRandomIntegerInRange(200,600), generateRandomIntegerInRange(50,750),[1,-1])
    let ball7 = new ball( generateRandomIntegerInRange(200,600), generateRandomIntegerInRange(50,750),[1,1])
    let ball8 = new ball( generateRandomIntegerInRange(200,600), generateRandomIntegerInRange(50,750),[-1,1])
    let ball9 = new ball( generateRandomIntegerInRange(200,600), generateRandomIntegerInRange(50,750),[-1,-1])
    let ball10 = new ball( generateRandomIntegerInRange(200,600), generateRandomIntegerInRange(50,750),[1,-1])
    let ball11 = new ball( generateRandomIntegerInRange(200,600), generateRandomIntegerInRange(50,750),[1,1])

    let finish = new goal(700,16,84,50)
}

function createLevel17(){

    thisLevelPass.textContent = "SALVE2"
    levelName.textContent = "STORM AND THUNDER!"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,DOWN,LEFT,RIGHT,UP');
    gamepad = this.input.gamepad.gamepads
    pg = new player(320,86);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)

    let wall0 = new wall(380,16,40,200)
    let wall1 = new wall(200,200,400,400)

    let tcannon0 = new trackingCannon(184,392,1,300)
    let tcannon1 = new trackingCannon(392,600,1,300)
    let pcannon1 = new predictingCannon(600,392,0.8,320)

    let finish = new goal(420,16,30,184)

}

function createLevel18(){

    thisLevelPass.textContent = "SALVE2"
    levelName.textContent = "STORM AND THUNDER!"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,DOWN,LEFT,RIGHT,UP');
    gamepad = this.input.gamepad.gamepads
    pg = new player(392,760);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)

    let wall0 = new wall(16,16,334,768)
    let wall1 = new wall(450,16,334,768)

    let ball0 = new ball(350,50,[1,1])
    let ball1 = new ball(434,100,[-1,1])
    let ball2 = new ball(350,350,[1,1])
    let ball3 = new ball(434,375,[-1,1])

    let finish = new goal(350,16,100,30)
}

function createLevel19(){

    thisLevelPass.textContent = "SALVE2"
    levelName.textContent = "STORM AND THUNDER!"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,DOWN,LEFT,RIGHT,UP');
    gamepad = this.input.gamepad.gamepads
    pg = new player(200,750);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)

    let wall0 = new wall(100,700,164,20)
    let wall1 = new wall(460,700,50,20)
    let wall2 = new wall(710,680,20,40)
    let wall7 = new wall(710,80,20,40)
    let wall3 = new wall(710,392,20,16)
    let wall4 = new wall(80,80,100,20)
    let wall5 = new wall(380,80,100,20)
    let wall6 = new wall(680,80,30,20)
    let wall8 = new wall(80,100,20,30)
    let wall9 = new wall(80,240,20,160)
    let wall10 = new wall(80,550,20,170)
    let wall11 = new wall(160,720,20,64)

    let cannon0 = new cannon(16,16,3.8 * 1.5,80,[1,0])
    let cannon1 = new cannon(16,40,2.6 * 1.5,80,[1,0])
    let cannon2 = new cannon(16,64,4.4 * 1.5,80,[1,0])
    let laser0 = new nonnoLaser(16,300,1,300,[1,0])
    let sniper = new predictingCannon(392,392,2,2000,undefined,12)

    let finish = new goal(130,720,30,64)
}

function createLevel20(){

    thisLevelPass.textContent = "SALVE"
    levelName.textContent = "CANNONS!"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,DOWN,LEFT,RIGHT,UP,SPACE');
    gamepad = this.input.gamepad.gamepads
    pg = new player(392,350);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)

    let wall0 = new wall(258,50,476,58)
    let wall10 = new wall(734,54,50,2)
    let wall1 = new wall(145,10,56,194)
    let wall2 = new wall(50,50,100,40)
    let wall3 = new wall(50,160,56,250)
    let wall4 = new wall(0,450,106,56)
    let wall5 = new wall(50,560,100,42)
    let wall6 = new wall(100,256,100,44)
    let wall7 = new wall(144,300,56,400)
    let wall8 = new wall(50,656,100,44)
    let wall9 = new wall(50,700,56,50)
    let wall11 = new wall(258,100,46,150)
    let wall12 = new wall(300,160,250,40)
    let wall13 = new wall(304,200,44,150)
    let wall14 = new wall(258,304,58,108)
    let wall15 = new wall(200,354,58,58)
    let wall16 = new wall(258,450,58,150)
    let wall17 = new wall(258,656,150,44)
    let wall18 = new wall(192,738,108,50)
    let wall19 = new wall(354,700,54,100)
    let wall20 = new wall(300,544,200,56)
    let wall21 = new wall(320,600,44,56)
    let wall22 = new wall(496,450,58,150)
    let wall23 = new wall(608,100,42,200)
    let wall24 = new wall(450,256,102,96)
    let wall25 = new wall(496,352,300,46)
    let wall26 = new wall(608,450,44,150)
    let wall27 = new wall(704,450,100,56)
    let wall28 = new wall(650,560,98,40)
    let wall29 = new wall(450,656,44,50)
    let wall30 = new wall(544,656,60,50)
    let wall31 = new wall(656,656,92,92)
    let wall32 = new wall(450,706,206,42)
    let wall33 = new wall(704,600,44,56)
    let wall34 = new wall(704,160,100,40)
    let wall35 = new wall(704,200,44,100)

    let stalker0 = new stalker(392,500)
    stalker0.speed = playerSpeed

    let finish = new goal(734,16,50,38)

    grid = new nodeGrid(gridNodeSize)
}

function createLevel21(){

    thisLevelPass.textContent = "SALVE"
    levelName.textContent = "CANNONS!"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,DOWN,LEFT,RIGHT,UP,SPACE');
    gamepad = this.input.gamepad.gamepads
    pg = new player(30,750);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)

    for (let i = 0; i<34; i++){
        let cannon0 = new cannon(16 , 80 + i*18 ,generateRandomInRange(1.2,3.2),generateRandomIntegerInRange(50,100),[1,0])
    }

    let stalker0 = new stalker(392,500)
    stalker0.speed = playerSpeed

    let finish = new goal(700,16,84,40)

    grid = new nodeGrid(gridNodeSize)

}

function createLevel22(){

    thisLevelPass.textContent = "SALVE"
    levelName.textContent = "CANNONS!"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,DOWN,LEFT,RIGHT,UP,SPACE');
    gamepad = this.input.gamepad.gamepads
    pg = new player(40,300);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)

    let wall0 = new wall(48,16,768,48)
    let wall1 = new wall(16,752,768,32)
    let wall2 = new wall(16,384,600,48)

    let laser0 = new nonnoLaser(208,368,2,5,[0,-1])
    let laser1 = new nonnoLaser(233,368,2,5,[0,-1])
    let laser2 = new nonnoLaser(464,64,2,5,[0,1])
    let laser3 = new nonnoLaser(489,64,2,5,[0,1])
    let laser4 = new nonnoLaser(208,736,2,5,[0,-1])
    let laser5 = new nonnoLaser(233,736,2,5,[0,-1])
    let laser6 = new nonnoLaser(464,432,2,5,[0,1])
    let laser7 = new nonnoLaser(489,432,2,5,[0,1])

    let ball0 = new ball(generateRandomIntegerInRange(650,750),generateRandomIntegerInRange(50,140),[-1,1])
    let ball1 = new ball(generateRandomIntegerInRange(650,750),generateRandomIntegerInRange(150,240),[-1,1])
    let ball5 = new ball(generateRandomIntegerInRange(650,750),generateRandomIntegerInRange(250,340),[-1,1])
    let ball2 = new ball(generateRandomIntegerInRange(650,750),generateRandomIntegerInRange(400,490),[-1,1])
    let ball3 = new ball(generateRandomIntegerInRange(650,750),generateRandomIntegerInRange(500,590),[-1,1])
    let ball6 = new ball(generateRandomIntegerInRange(650,750),generateRandomIntegerInRange(600,690),[-1,1])

    let smoke0 = new smoke(PU * 8,PU*4,PU*4,PU*3)
    let smoke1 = new smoke(PU*18,PU*11,PU*3,PU*5)
    let smoke2 = new smoke(PU*43,PU*43,PU*6,PU*4)

    let stalker0 = new stalker(25,20)
    stalker0.speed = playerSpeed * 0.9

    let finish = new goal(PU,432,PU*3,PU*20)

    grid = new nodeGrid(gridNodeSize)

}

function createLevel23(){

    thisLevelPass.textContent = "SALVE"
    levelName.textContent = "CANNONS!"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,DOWN,LEFT,RIGHT,UP,SPACE');
    gamepad = this.input.gamepad.gamepads
    pg = new player(40,750);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)

    let wall1 = new wall(80,500,630,284)
    let laser0 = new nonnoLaser(90, 16,generateRandomInRange(2,3.5),0.2,[0,1])
    
    for(let i = 1; i<20; i++){

        let dice = Math.random()
        
        if(dice > 0.75){
            let laser0 = new nonnoLaser(90 + i* 32, 16,generateRandomInRange(2,3.5),0.2,[0,1])
        }else{
            
            if(dice < 0.4){
                let cannone0 = new trackingCannon(90 + i * 32,16,generateRandomInRange(1.2,2.2),generateRandomIntegerInRange(100,300))
            }
            else{
                let cannone0 = new predictingCannon(90 + i * 32,16,generateRandomInRange(1.2,2.2),generateRandomIntegerInRange(100,300))
            }
        }
    }

    let finish = new goal(710,750,74,34)
}

function createLevel24(){

    thisLevelPass.textContent = "SALVE"
    levelName.textContent = "CANNONS!"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,DOWN,LEFT,RIGHT,UP,SPACE');
    gamepad = this.input.gamepad.gamepads
    pg = new player(750,300);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)

    let wall0 = new wall(16,16,768,184)
    let wall1 = new wall(16,600,768,184)
    let wall2 = new wall(650,200,20,300)
    let wall3 = new wall(475,300,20,300)
    let wall4 = new wall(312,200,20,300)
    let wall5 = new wall(150,300,20,300)
    
    for(let i = 0; i<4; i++){
        
        for(let j = 0; j<generateRandomIntegerInRange(3,5);j++){
            let mine0 = new mine(30 + 160*i + generateRandomIntegerInRange(0,100),generateRandomIntegerInRange(220,540))
        }
    }

    let finish = new goal(16,570,134,30)
}

function createLevel25(){

    thisLevelPass.textContent = "SALVE"
    levelName.textContent = "CANNONS!"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,DOWN,LEFT,RIGHT,UP,SPACE');
    gamepad = this.input.gamepad.gamepads
    pg = new player(734,30);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)

    let wall0 = new wall(100,16,600,84)
    let wall1 = new wall(392,100,16,300)

    let p0 = new predictingCannon(392,400,0.6,400)

    for(let i = 0; i<30; i++){
        let mine0 = new mine(generateRandomIntegerInRange(420,770),generateRandomIntegerInRange(120,770))
    }
    for(let i = 0; i<30; i++){
        let mine0 = new mine(generateRandomIntegerInRange(30,380),generateRandomIntegerInRange(120,770))
    }

    let finish = new goal(16,16,84,30)
}

function createLevel26(){

    thisLevelPass.textContent = "SALVE"
    levelName.textContent = "CANNONS!"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,DOWN,LEFT,RIGHT,UP,SPACE');
    gamepad = this.input.gamepad.gamepads
    pg = new player(685,85);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)

    let wall0 = new wall(580,16,20,600)
    let wall1 = new wall(350,200,20,600)
    let wall2 = new wall(120,200,230,20)

    let wall3 = new wall(600,180,71,100)
    let wall4 = new wall(600,320,71,160)
    let wall5 = new wall(600,520,71,96)
    let wall6 = new wall(721,180,71,100)
    let wall7 = new wall(721,320,71,160)
    let wall8 = new wall(721,520,71,96)
    let wall9 = new wall(370,200,100,100)
    let wall10 = new wall(370,316,100,100)
    let wal11 = new wall(370,432,100,100)
    let wal12 = new wall(370,548,100,68)

    let laser0 = new nonnoLaser(600,280,0.8,1.6,[1,0])
    let laser1 = new nonnoLaser(600,304,0.8,1.6,[1,0])
    let laser2 = new nonnoLaser(600,480,0.8,1.6,[1,0])
    let laser3 = new nonnoLaser(600,504,0.8,1.6,[1,0])
    let cannon0 = new cannon(370,300,1,300,[1,0])
    let cannon1 = new cannon(370,416,0.8,100,[1,0])
    let cannon2 = new cannon(370,532,1,150,[1,0])

    for(let i = 0; i<6; i++){
        let dice = Math.random()
        if(dice > 0.5){
            let cannon0 = new trackingCannon(334,250 + i*100,generateRandomInRange(0.5,1),generateRandomIntegerInRange(200,300))
        }else{
            let cannon0 = new predictingCannon(334,250 + i*100,generateRandomInRange(0.5,1),generateRandomIntegerInRange(200,300))
        }
    }

    let smoke0 = new smoke(671,200,50,170)
    let smoke1 = new smoke(671,400,50,184)
    let smoke2 = new smoke(470,290,110,34)
    let smoke3 = new smoke(470,406,110,34)
    let smoke4 = new smoke(470,522,110,34)
    let smoke5 = new smoke(120,220,160,564)

    let finish = new goal(16,760,104,24)
}

function createLevel27(){

    thisLevelPass.textContent = "SALVE"
    levelName.textContent = "CANNONS!"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,DOWN,LEFT,RIGHT,UP,SPACE');
    gamepad = this.input.gamepad.gamepads
    pg = new player(50,450);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)

    let wall0 = new wall(100,450,180,334)
    let wall1 = new wall(16,16,200,120)
    let wall2 = new wall(272,80,430,56)
    let wall3 = new wall(272,136,30,750)
    let wall4 = new wall(400,136,30,314)
    let wall5 = new wall(400,450,300,56)

    let spinnyboi0 = new spinnyBoi(PU*9,PU*16,0.3,100)
    let spinnyboi1 = new spinnyBoi(PU*36,PU*17,0.1,150)
    let spinnyboi2 = new spinnyBoi(PU*28,PU*41,0.3,150,true)
    let spinnyboi3 = new spinnyBoi(PU*39,PU*36,0.3,150)

    grid = new nodeGrid(gridNodeSize)

    let stalker0 = new stalker(50,750)
    stalker0.speed = playerSpeed

    let finish = new goal(302,136,98,30)
}

function createLevel28(){

    thisLevelPass.textContent = "SALVE"
    levelName.textContent = "CANNONS!"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,DOWN,LEFT,RIGHT,UP,SPACE');
    gamepad = this.input.gamepad.gamepads
    pg = new player(80,120);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)

    let wall0 = new wall(16,80,700,20)

    let wall1 = new wall(150,100,100,150)
    let wall2 = new wall(150,300,100,100)
    let wall3 = new wall(150,450,100,100)
    let wall4 = new wall(150,600,100,200)
    
    let dice = generateRandomIntegerInRange(1,3)
    switch(dice){
        case 1:
            let wall13 = new wall(200,250,4,34)
            let wall14 = new wall(200,400,4,35)
            let wall15 = new wall(200,550,4,35)
        break;
        case 2:
            let wall16 = new wall(200,250,4,35)
            let wall17 = new wall(200,400,4,34)
            let wall18 = new wall(200,550,4,35)
        break;
        case 3:
            let wall19 = new wall(200,250,4,35)
            let wall20 = new wall(200,400,4,35)
            let wall21 = new wall(200,550,4,34)
        break;
    }

    let wall5 = new wall(350,100,100,150)
    let wall6 = new wall(350,300,100,100)
    let wall7 = new wall(350,450,100,100)
    let wall8 = new wall(350,600,100,200)

    dice = generateRandomIntegerInRange(1,3)
    switch(dice){
        case 1:
            let wall13 = new wall(400,250,4,34)
            let wall14 = new wall(400,400,4,35)
            let wall15 = new wall(400,550,4,35)
        break;
        case 2:
            let wall16 = new wall(400,250,4,35)
            let wall17 = new wall(400,400,4,34)
            let wall18 = new wall(400,550,4,35)
        break;
        case 3:
            let wall19 = new wall(400,250,4,35)
            let wall20 = new wall(400,400,4,35)
            let wall21 = new wall(400,550,4,34)
        break;
    }

    let wall9 = new wall(550,100,100,150)
    let wall10 = new wall(550,300,100,100)
    let wall11 = new wall(550,450,100,100)
    let wall12 = new wall(550,600,100,200)

    dice = generateRandomIntegerInRange(1,3)
    switch(dice){
        case 1:
            let wall13 = new wall(600,250,4,34)
            let wall14 = new wall(600,400,4,35)
            let wall15 = new wall(600,550,4,35)
        break;
        case 2:
            let wall16 = new wall(600,250,4,35)
            let wall17 = new wall(600,400,4,34)
            let wall18 = new wall(600,550,4,35)
        break;
        case 3:
            let wall19 = new wall(600,250,4,35)
            let wall20 = new wall(600,400,4,35)
            let wall21 = new wall(600,550,4,34)
        break;
    }

    for(let i = 0; i<15; i++){
        if(i == 0){
            let mine0 = new mine(50 + i*48,42,undefined,100)
        }else{
            let mine0 = new mine(50 + i*48,42,3.5)
        }
    }

    let mine2 = new mine(750,80)
    let mine3 = new mine(190,140,0.4,undefined,150)
    let mine4 = new mine(390,140,0.4,undefined,150)
    let mine5 = new mine(590,140,0.4,undefined,150)

    for(let i = 0; i<4; i++){
        for(let j = 0; j<6; j++){
            
            if(i==0 && j==5){
                let mine0 = new mine(80 + i*210 , 140 + j*120,0.4,undefined,50,false)
            }else{
                let mine0 = new mine(80 + i*210 , 140 + j*120,0.4,undefined,120,false)
            }
        }
    }

    let finish = new goal(650,754,134,30)
}

function createLevel29(){

    thisLevelPass.textContent = "SALVE"
    levelName.textContent = "CANNONS!"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,DOWN,LEFT,RIGHT,UP,SPACE');
    gamepad = this.input.gamepad.gamepads
    pg = new player(40,750);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)

    let wall0 = new wall(80,720,710,64)
    let wall1 = new wall(16,16,710,64)

    for(let i=0; i<6; i++){
        for(let j=0; j<4; j++){

            let dice = generateRandomIntegerInRange(-100,100)
            let mine0 = new mine(150 + i*100 + dice , 220 + j*120 + dice)
        }
    }

    let spinnyBoi0 = new spinnyBoi(392,392,0.1,70)
    let spinnyBoi1 = new spinnyBoi(392,392,0.1,70,true)

    let finish = new goal(726,16,58,30)
}

function createLevel30(){

    thisLevelPass.textContent = "SALVE"
    levelName.textContent = "CANNONS!"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,DOWN,LEFT,RIGHT,UP,SPACE');
    gamepad = this.input.gamepad.gamepads
    pg = new player(40,740);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)

    let lava0 = new lava(PU,PU,PU*48,PU)
    let lava1 = new lava(PU,PU*2,PU,PU*47)
    let lava2 = new lava(PU*48,PU*2,PU,PU*47)
    let lava3 = new lava(PU*2,PU*48,PU*46,PU)

    let lava4 = new lava(PU*2,PU*8,PU*20,PU*11)
    let lava5 = new lava(PU*16,PU*38,PU*15,PU*8)
    let lava6 = new lava(PU*29,PU*14,PU*10,PU*22)
    let lava7 = new lava(PU*8,PU*30,PU*18,PU*5)
    let lava8 = new lava(PU*16,PU*21,PU*4,PU*6)
    let lava9 = new lava(PU*24,PU*4,PU*9,PU*6)
    let lava10 = new lava(PU*40,PU*6,PU*8,PU*6)
    let lava11 = new lava(PU*39,PU*22,PU*4,PU*6)
    let lava12 = new lava(PU*39,PU*40,PU*5,PU*8)
    let lava13 = new lava(PU*8,PU*5,PU*5,PU*3)


    let stalker0 = new stalker(PU*25,PU*20)
    stalker0.speed = playerSpeed

    grid = new nodeGrid(gridNodeSize)

    let finish = new goal(PU*2,PU*2,PU*2,PU*6)

}

function createLevel31(){

    thisLevelPass.textContent = "SALVE2"
    levelName.textContent = "STORM AND THUNDER!"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,DOWN,LEFT,RIGHT,UP');
    gamepad = this.input.gamepad.gamepads
    pg = new player(100,200);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)

    let wall1 = new wall(16,380,600,40)

    let lava0 = new lava(16,100,734,20)
    let lava1 = new lava(16,300,634,20)
    let lava2 = new lava(16,500,634,20)
    let lava3 = new lava(16,700,734,20)
    let lava4 = new lava(750,100,20,620)
    let lava5 = new lava(650,300,20,220)

    let lava6 = new lava(220,180,50,40)
    let lava7 = new lava(320,120,50,60)
    let lava8 = new lava(320,220,50,80)
    let lava9 = new lava(420,120,50,140)
    let lava10 = new lava(520,160,50,140)
    let lava11 = new lava(620,160,80,100)
    let lava12 = new lava(700,350,20,100)

    for(let i = 0; i<4; i++){

        let lava13 = new lava(200 + i*100,520,100,80 - i * 10)
        let lava14 = new lava(200 + i*100,620 + i * 10,100,80 - i * 10)
    }

    for(let i = 0; i<30; i++){
       let laser0 = new nonnoLaser(20 + i* 20, 16, i * 0.3 ,300,[0,1])
    }
    for(let i = 0; i<8; i++){
        let laser1 = new nonnoLaser(760 - i* 20, 16, (i + 30) * 0.3 ,300,[0,1])
    }
    for(let i = 0; i<30; i++){
        let laser2 = new nonnoLaser(600 - i* 20, 768, (i + 38) * 0.3 ,300,[0,-1])
    }

    let finish = new goal(16,520,30,180)
}

function createLevel32(){

    thisLevelPass.textContent = "SALVE2"
    levelName.textContent = "STORM AND THUNDER!"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,DOWN,LEFT,RIGHT,UP');
    gamepad = this.input.gamepad.gamepads
    pg = new player(357,760);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)

    let wall0 = new wall(16,16,84,768)
    let wall1 = new wall(700,16,84,768)

    let lava0 = new lava(320,16,20,768)
    let lava1 = new lava(390,100,20,684)
    let lava2 = new lava(460,16,20,768)

    let ball0 = new ball(generateRandomInRange(120,250),generateRandomIntegerInRange(100,200),[-1,-1])
    let ball1 = new ball(generateRandomInRange(550,680),generateRandomIntegerInRange(200,300),[1,1])
    let ball08 = new ball(generateRandomInRange(120,250),generateRandomIntegerInRange(300,400),[-1,1])
    let ball17 = new ball(generateRandomInRange(550,680),generateRandomIntegerInRange(400,500),[-1,-1])
    let ball06 = new ball(generateRandomInRange(120,250),generateRandomIntegerInRange(500,600),[1,-1])
    let ball15 = new ball(generateRandomInRange(550,680),generateRandomIntegerInRange(100,200),[1,-1])
    let ball04 = new ball(generateRandomInRange(120,250),generateRandomIntegerInRange(200,300),[-1,1])
    let ball13 = new ball(generateRandomInRange(550,680),generateRandomIntegerInRange(300,400),[1,1])
    let ball02 = new ball(generateRandomInRange(120,250),generateRandomIntegerInRange(400,500),[1,-1])
    let ball11 = new ball(generateRandomInRange(550,680),generateRandomIntegerInRange(500,600),[1,-1])

    let finish = new goal(410,750,50,34)
}

function createLevel33(){

    thisLevelPass.textContent = "SALVE2"
    levelName.textContent = "STORM AND THUNDER!"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,DOWN,LEFT,RIGHT,UP');
    gamepad = this.input.gamepad.gamepads
    pg = new player(30,730);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)

    let wall0 = new wall(16,700,84,4)
    let wall1 = new wall(16,676,500,4)
    let wall2 = new wall(516,516,4,164)
    let wall3 = new wall(520,516,160,4)
    let wall5 = new wall(676,16,4,500)

    let lava0 = new lava(16,760,768,24)
    let lava3 = new lava(16,680,524,20)
    let lava4 = new lava(520,520,180,20)
    let lava1 = new lava(600,600,184,184)
    let lava2 = new lava(760,16,24,768)
    let lava6 = new lava(520,540,20,140)
    let lava7 = new lava(680,16,20,504)

    let track0 = new trackingCannon(250,200,0.2,300)
    let track1 = new trackingCannon(200,500,0.2,300)
    let track2 = new trackingCannon(500,150,0.2,300)

    let smoke0 = new smoke(100,700,500,60)
    let smoke1 = new smoke(540,540,60,160)
    let smoke3 = new smoke(600,540,100,60)
    let smoke2 = new smoke(700,120,60,480)

    let finish = new goal(700,16,60,30)
}

function createLevel34(){

    thisLevelPass.textContent = "SALVE2"
    levelName.textContent = "STORM AND THUNDER!"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,Z,DOWN,SHIFT,LEFT,RIGHT,UP');
    gamepad = this.input.gamepad.gamepads
    pg = new player(175,600);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)

    let wall0 = new wall(350,150,50,634)
    let wall1 = new wall(575,16,50,634)

    for(let i = 0; i<9; i++){
        let cannon0 = new cannon(400,200 + 20 * i,1,150,[1,0])
    }
    for(let i = 0; i<3; i++){
        let cannon0 = new cannon(400,500 + 20 * i,0.5,800,[1,0])
    }
    for(let i = 0; i<3; i++){
        let cannon0 = new cannon(400,500 + 20 * i,0.5,800,[1,0])
    }

    let laser3 = new nonnoLaser(625,500,1 - 0.25,0.5,[1,0],12)
    let laser4 = new nonnoLaser(625,520,0.875 - 0.25,0.625,[1,0],12)
    let laser5 = new nonnoLaser(625,540,0.750 - 0.25,0.75,[1,0],12)
    let laser6 = new nonnoLaser(625,560,0.625 - 0.25,0.875,[1,0],12)
    let laser7 = new nonnoLaser(625,360,1,0.5,[1,0],12)
    let laser8 = new nonnoLaser(625,340,0.875,0.625,[1,0],12)
    let laser9 = new nonnoLaser(625,320,0.750,0.75,[1,0],12)
    let laser10 = new nonnoLaser(625,300,0.625,0.875,[1,0],12)

    let upgrade0 = new upgrade(180,500,"dash")
    let finish = new goal(625,16,159,30)
}

function createLevel35(){

    thisLevelPass.textContent = "SALVE2"
    levelName.textContent = "STORM AND THUNDER!"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,Z,DOWN,Z,SHIFT,LEFT,RIGHT,UP');
    gamepad = this.input.gamepad.gamepads
    pg = new player(100,150,true);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)

    let wall0 = new wall(16,250,634,50)
    let wall1 = new wall(166,500,650,50)

    for(let i = 0; i<19; i++){
        for(let j = 0; j<5; j++){
            let dice = generateRandomIntegerInRange(-5,5)
            let mine0 = new mine(30 + i*40 + dice,50 + j*40 - dice,1.2)
        }
    }
    for(let i = 0; i<19; i++){
        for(let j = 0; j<5; j++){
            let dice = generateRandomIntegerInRange(-5,5)
            let mine0 = new mine(30 + i*40 + dice,320 + j*40 - dice,1.2)
        }
    }
    for(let i = 0; i<18; i++){
        for(let j = 0; j<5; j++){
            let dice = generateRandomIntegerInRange(-5,5)
            let mine0 = new mine(30 + i*40 + dice,580 + j*40 - dice,1.2)
        }
    }
    for(let i = 0; i<3; i++){

        let dice = generateRandomIntegerInRange(-5,5)
        let mine0 = new mine(670 + i*40 + dice, 270 - dice,1)
    }
    for(let i = 0; i<3; i++){

        let dice = generateRandomIntegerInRange(-5,5)
        let mine0 = new mine(50 + i*40 + dice, 525 - dice,1)
    }

    let finish = new goal(750,550,34,234)
}

function createLevel36(){

    thisLevelPass.textContent = "SALVE2"
    levelName.textContent = "STORM AND THUNDER!"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,SHIFT,Z,DOWN,LEFT,RIGHT,UP');
    gamepad = this.input.gamepad.gamepads
    pg = new player(200,750,true);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)

    let wall0 = new wall(100,700,164,20)
    let wall2 = new wall(710,680,20,40)
    let wall7 = new wall(710,80,20,40)
    let wall4 = new wall(80,80,100,20)
    let wall6 = new wall(680,80,30,20)
    let wall8 = new wall(80,100,20,30)
    let wall9 = new wall(80,300,20,16)
    let wall11 = new wall(160,720,20,64)

    let lava0 = new lava(264,700,446,20)
    let lava1 = new lava(710,120,20,560)
    let lava2 = new lava(180,80,500,20)
    let lava3 = new lava(80,130,20,170)
    let lava4 = new lava(80,316,20,404)

    let cannon0 = new cannon(16,16,3.8 * 1.5,80,[1,0])
    let cannon1 = new cannon(16,40,2.6 * 1.5,80,[1,0])
    let cannon2 = new cannon(16,64,4.4 * 1.5,80,[1,0])
    let laser0 = new nonnoLaser(16,300,3,1,[1,0])
    let sniper = new predictingCannon(392,392,2,1500,undefined,12)

    let finish = new goal(130,720,30,64)
}

function createLevel37(){

    

}
function createLevel38(){}
function createLevel39(){}
function createLevel40(){}