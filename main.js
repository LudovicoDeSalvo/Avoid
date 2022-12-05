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

var startMenu = {
    key: 'SM',
    preload: preloadSM,
    create: createSM,
    update: updateSM,
};

var credits = {
    key: 'level48',
    preload: preloadCredits,
    create: createCredits,
    update: updateCredits,
};

{
var lv1= {
    key: 'level1',
    preload: preloadLevel1,
    create: createLevel1,
    update: update,
};
var lv2 = {
    key: 'level2',
    preload: preloadLevel2,
    create: createLevel2,
    update: update,
};
var lv3 = {
    key: 'level3',
    preload: preloadLevel3,
    create: createLevel3,
    update: update,
};
var lv4 = {
    key: 'level4',
    preload: preloadLevel4,
    create: createLevel4,
    update: update,
};
var lv5 = {
    key: 'level5',
    preload: preloadLevel5,
    create: createLevel5,
    update: update,
};
var lv6 = {
    key: 'level6',
    preload: preloadLevel6,
    create: createLevel6,
    update: update,
};
var lv7 = {
    key: 'level7',
    preload: preloadLevel7,
    create: createLevel7,
    update: update,
};
var lv8 = {
    key: 'level8',
    preload: preloadLevel8,
    create: createLevel8,
    update: update,
};
var lv9 = {
    key: 'level9',
    preload: preloadLevel9,
    create: createLevel9,
    update: update,
};
var lv10 = {
    key: 'level10',
    preload: preloadLevel10,
    create: createLevel10,
    update: update,
};
var lv11 = {
    key: 'level11',
    preload: preloadLevel11,
    create: createLevel11,
    update: update,
};
var lv12 = {
    key: 'level12',
    preload: preloadLevel12,
    create: createLevel12,
    update: update,
};
var lv13 = {
    key: 'level13',
    preload: preloadLevel13,
    create: createLevel13,
    update: update,
};
var lv14 = {
    key: 'level14',
    preload: preloadLevel14,
    create: createLevel14,
    update: update,
};
var lv15 = {
    key: 'level15',
    preload: preloadLevel15,
    create: createLevel15,
    update: updateLevel15,
};
var lv16 = {
    key: 'level16',
    preload: preloadLevel16,
    create: createLevel16,
    update: update,
};
var lv17 = {
    key: 'level17',
    preload: preloadLevel17,
    create: createLevel17,
    update: update,
};
var lv18 = {
    key: 'level18',
    preload: preloadLevel18,
    create: createLevel18,
    update: update,
};
var lv19 = {
    key: 'level19',
    preload: preloadLevel19,
    create: createLevel19,
    update: update,
};
var lv20 = {
    key: 'level20',
    preload: preloadLevel20,
    create: createLevel20,
    update: update,
};
var lv21= {
    key: 'level21',
    preload: preloadLevel21,
    create: createLevel21,
    update: update,
};
var lv22 = {
    key: 'level22',
    preload: preloadLevel22,
    create: createLevel22,
    update: update,
};
var lv23 = {
    key: 'level23',
    preload: preloadLevel23,
    create: createLevel23,
    update: update,
};
var lv24 = {
    key: 'level24',
    preload: preloadLevel24,
    create: createLevel24,
    update: update,
};
var lv25 = {
    key: 'level25',
    preload: preloadLevel25,
    create: createLevel25,
    update: update,
};
var lv26 = {
    key: 'level26',
    preload: preloadLevel26,
    create: createLevel26,
    update: update,
};
var lv27 = {
    key: 'level27',
    preload: preloadLevel27,
    create: createLevel27,
    update: update,
};
var lv28 = {
    key: 'level28',
    preload: preloadLevel28,
    create: createLevel28,
    update: update,
};
var lv29 = {
    key: 'level29',
    preload: preloadLevel29,
    create: createLevel29,
    update: update,
};
var lv30 = {
    key: 'level30',
    preload: preloadLevel30,
    create: createLevel30,
    update: update,
};
var lv31= {
    key: 'level31',
    preload: preloadLevel31,
    create: createLevel31,
    update: update,
};
var lv32 = {
    key: 'level32',
    preload: preloadLevel32,
    create: createLevel32,
    update: update,
};
var lv33 = {
    key: 'level33',
    preload: preloadLevel33,
    create: createLevel33,
    update: update,
};
var lv34 = {
    key: 'level34',
    preload: preloadLevel34,
    create: createLevel34,
    update: update,
};
var lv35 = {
    key: 'level35',
    preload: preloadLevel35,
    create: createLevel35,
    update: update,
};
var lv36 = {
    key: 'level36',
    preload: preloadLevel36,
    create: createLevel36,
    update: update,
};
var lv37 = {
    key: 'level37',
    preload: preloadLevel37,
    create: createLevel37,
    update: update,
};
var lv38 = {
    key: 'level38',
    preload: preloadLevel38,
    create: createLevel38,
    update: update,
};
var lv39 = {
    key: 'level39',
    preload: preloadLevel39,
    create: createLevel39,
    update: updateLevel39,
};
var lv40 = {
    key: 'level40',
    preload: preloadLevel40,
    create: createLevel40,
    update: updateLevel40,
};
var lv41 = {
    key: 'level41',
    preload: preloadLevel41,
    create: createLevel41,
    update: update,
};
var lv42 = {
    key: 'level42',
    preload: preloadLevel42,
    create: createLevel42,
    update: update,
};
var lv43 = {
    key: 'level43',
    preload: preloadLevel43,
    create: createLevel43,
    update: update,
};
var lv44 = {
    key: 'level44',
    preload: preloadLevel44,
    create: createLevel44,
    update: updateLevel44,
};
var lv45 = {
    key: 'level45',
    preload: preloadLevel45,
    create: createLevel45,
    update: update,
};
var lv46 = {
    key: 'level46',
    preload: preloadLevel46,
    create: createLevel46,
    update: update,
};
var lv47 = {
    key: 'level47',
    preload: preloadLevel47,
    create: createLevel47,
    update: update,
};
}

let sceneArray = [startMenu,sceneTutorial,sceneDebug,sceneLandsBetween, sceneDeath, lv1, lv2, lv3,lv4,lv5,lv6,lv7,lv8,lv9,lv10,lv11,lv12,lv13,lv14,lv15,lv16,lv17,lv18,lv19,lv20,
                    lv21,lv22,lv23,lv24,lv25,lv26,lv27,lv28,lv29,lv30,lv31,lv32,lv33,lv34,lv35,lv36,lv37,lv38,lv39,lv40,lv41,lv42,lv43,lv44,lv45,lv46,lv47,credits]

let config = {
    type: Phaser.AUTO,
    width: XDIMENSION,
    height: YDIMENSION,
    parent: 'canvas',
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
var lv = localStorage["specialBoi"] || "1"
let grid
const epsilon = 0.0000000000001
const gridNodeSize = PU
let AButton = {value: 0}
let BButton = {value: 0}
let YButton = {value: 0}
let dPadDown = {value: 0}
let dPadUp = {value: 0}
let dPadLeft = {value: 0}
let dPadRight = {value: 0}
let music1
let music2
let music3
let music4
let musicSM
let musicBoss
let musicCredits
let passUnlocked = localStorage["passBoi"] || "false"
let skipBossIntro = localStorage["skipBoi"] || "false"



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
let bossColor = 0xAA2222
let bossHandColor = 0xAA2222



let password = document.getElementById("passwordBox")
let button = document.getElementById("passwordButton")
button.addEventListener("click",levelManager)
let thisLevelPass = document.getElementById("thisLevelPassword")
let levelName = document.getElementById("levelName")
let volumeSlider = document.getElementById("sliderHTML")
let passLabel = document.getElementById("psw-lbl")


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
        this.targetCoor = undefined         //targetCoordinates
        this.saveVelocity
        this.ID = 0

        this.look = scene.add.graphics()
        if(toProcess){entities.push(this)}        
    }

    handler(){        
    }

    //DO NOT PLACE WALLS ON EACH OTHER
    move(forbiddenEntities){  //moves and returns if there has been a collision AND the index of the entities you collided with in the entities array
            //(it saves from calling checkCollision again in the handler)
            //forbideenEntities contains entities colors (IDs) that will be considered collidable even if they're not       
        
        
        let sensibility = this.speed * Delta

        if(this.targetCoor != undefined){
        

            if(this.saveVelocity == undefined)
                this.saveVelocity = this.velocity
            
            this.velocity = [this.targetCoor[0] - this.x , this.targetCoor[1] - this.y]


        }
        
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

                if(collision[0]){

                    collided = true
                    withWhich.push(i)

                    //If there's a collision, checks if it can still moves on another axis
                    let blocked = this.checkCollisionXY(entities[i] , mx , my)
                        
                    if ( blocked[0] ){
                        mx = collision[1]                        
                    }
                    if( blocked[1] ){
                        my = collision[2]
                    }
                    //this checks if you're a free both in X and in Y, if you are you can move in X and cover the distance in Y (remember that you already verified 
                    // that you're blocked diagonally)
                    if( blocked[0] === false && blocked [1] === false){
                        my = collision[2]
                    }
                }
            }

            if(i !== forbidden && forbiddenEntities != undefined){

                for(let j = 0; j<forbiddenEntities.length; j++){

                    if(entities[i].ID == forbiddenEntities[j]){

                        //This check properly if there is a collision and the distance to touch the stopping object
                        collision = this.checkCollision2TheRevenge( entities[i] , mx , my)

                        if(collision[0]){

                            collided = true
                            withWhich.push(i)

                            //If there's a collision, checks if it can still moves on another axis
                            let blocked = this.checkCollisionXY(entities[i] , mx , my)
                                
                            if ( blocked[0] ){
                                mx = collision[1]                        
                            }
                            if( blocked[1] ){
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
            }
        }
        
        this.moveTo(this.x + mx, this.y + my)

        if(this.targetCoor != undefined){
            if( this.x >= this.targetCoor[0] - sensibility && this.x <= this.targetCoor[0] + sensibility && this.y >= this.targetCoor[1] - sensibility && 
                    this.y <= this.targetCoor[1] + sensibility ){
        
                this.targetCoor = undefined
                this.velocity = this.saveVelocity
                this.saveVelocity = undefined
            }
        }

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
    constructor(x,y,dash,canShoot){
        super(x,y,playerSize,playerSize,false,null,playerSpeed,[0,0],true)

        this.clock = 0
        this.clockEnabled = false
        this.dashAvailable = dash == undefined ? false : dash
        this.dashClock = 1
        this.dashing = false
        this.dashDuration = 0.15
        this.magazine = []
        this.bulletIndicators = []
        for(let i = 0; i<4; i++){
            this.magazine.push(new playerBullet())
            this.bulletIndicators.push( new bulletIndicator() )
        }
        this.canShoot = canShoot == undefined ? false : canShoot
        this.inRecovery = false

        this.ID = 1
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
            YButton = gamepad[0].buttons[3]

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
        }else{
            dx = 0
            dy = 0
        }

        if(keys.W.isDown || keys.UP.isDown)         //Keyboard Stuff
            dy = -1
        if(keys.A.isDown || keys.LEFT.isDown)
            dx = -1
        if(keys.S.isDown || keys.DOWN.isDown)
            dy = 1
        if(keys.D.isDown || keys.RIGHT.isDown)
            dx = 1
        
        if(keys.SPACE){                            //SPACE 
            
            if(this.canShoot){

                if((keys.SPACE.isDown || YButton.value == 1) && this.inRecovery == false){

                    let placed = false

                    for(let i = 0; i<this.magazine.length && placed == false; i++){

                        if(this.magazine[i].active == false && this.magazine[i].canBeShot == true){
                            this.magazine[i].x = this.x + 4
                            this.magazine[i].y = this.y + 4
                            this.magazine[i].activate()
                            placed = true
                            this.inRecovery = true
                        }
                    }
                }

                if(keys.SPACE.isUp && YButton.value == 0){
                    this.inRecovery = false
                }

            }else{
                sceneManager()
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
        
        this.velocity = [dx,dy]     //Vector is normalized in move()
        this.move()
        this.checkIfDead()

        if(this.canShoot)
            this.showBullet()
    }

    checkIfDead(){

        for (let i = 0; i < entities.length ; i++){
            
            if(entities[i].deadly == true){

                let collision = this.checkCollision2TheRevenge(entities[i],0,0)

                var theOtherScene2 = scene.scene.get("debug");  //default: "debug"  
                
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

            if(entities[i] != this && entities[i].ID == 15){
                
                let collision = this.checkCollision2TheRevenge(entities[i],0,0)

                if(collision[0]){

                    lv++
                    localStorage["specialBoi"] = lv
                    var theOtherScene = scene.scene.get("landsBetween");            
                    theOtherScene.scene.restart()            
                    scene.scene.switch("landsBetween")
                } 
            }
        }
    }

    showBullet(){

        let numberOfActive = 0

        for(let i = 0; i<4 ; i++){
            if(this.magazine[i].canBeShot){
                numberOfActive++
            }
        }

        for(let i = 0; i<4; i++){

            if(i<numberOfActive)
                this.bulletIndicators[i].show()
            else
                this.bulletIndicators[i].hide()

            this.bulletIndicators[i].moveTo(this.x + i*5 - 1, this.y + PU + 2)
        }
    }
}

class bulletIndicator extends Entity{
    constructor(x,y){
        super(x,y,4,4,false,false,0,[0,0],true)

        this.hidden = false

        this.ID = 21
        this.color = 0x00FFFF
        this.look.fillStyle(this.color);
        this.look.fillRect(x , y , this.width, this.height);
    }

    show(){

        this.look.setAlpha(1)
    }

    hide(){
        this.look.setAlpha(0)
    }
}


class wall extends Entity{
    constructor(x,y,width,height){
        super(x,y,width,height,true,false,0,[0,0],true)

        this.ID = 2
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

        this.ID = 2
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

            this.calculateDirection()
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

        this.ID = 3
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


class playerBullet extends bullet{
    constructor(){
        super(-20,-20,8,8,400,[0,-1],false,0x00FFFF)
        this.deadly = false

        this.recoveryTime = 3
        this.clockEnabled = false
        this.clock = 3
        this.canBeShot = true

        this.ID = 4
    }

    handler(){
        
        this.clock += Delta

        if(this.clock > this.recoveryTime){
            this.canBeShot = true
        }
        
        if(this.active){

            let data = this.move([17,18])
            
            if(data[0]){
                
                if(entities[data[1][0]].ID == 17){
                    bigBoi.reduceHealth()
                }

                this.deactivate()
            }
        }
    }

    deactivate(){
        this.look.clear()
        this.active = false
    }

    activate(){
        this.look.fillStyle(this.color)
        this.look.fillRect(this.x , this.y , this.width, this.height);
        this.active = true
        this.clock = 0
        this.canBeShot = false
    }
}



class trackingCannon extends cannon{
    constructor(x,y,bulletClock,bulletSpeed,bulletVelocity,bulletSize,capacity){        
        super(x,y,bulletClock,bulletSpeed,bulletVelocity,bulletSize,capacity)

        this.color = trackingCannonColor
        
        this.ID = 5
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
        this.ID = 6
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
        
        this.ID = 7
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

        this.ID = 8
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

        this.ID = 9
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

        let data = this.move([10,11])
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

        this.ID = 99
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

                        if(entities[k].ID == 10 || entities[k].ID == 11){
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

        this.ID = 10
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

        if(this.speed != 0){
            this.move()
        }
    }
}

class smoke extends Entity{
    constructor(x,y,w,h){
        super(x,y,w,h,false,false,0,[0,0],true)

        this.ID = 11
        this.color = smokeColor
        this.look.fillStyle(this.color);
        this.look.fillRect(x , y , w, h);
    }
}


class ball extends Entity{
    constructor(x,y,startingDirection){
        super(x,y,12,12,false,true,220,startingDirection,true)

        this.ID = 12
        this.color = ballColor
        this.look.fillStyle(this.color);
        this.look.fillRect(x , y , this.width, this.height);
    }

    handler(){

        let data = this.move([20])
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

        this.ID = 13
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

                        if(this.playerTriggerable){
                            this.color = mineColor
                        }else{
                            this.color = mineColor2
                        }
                        this.look.clear()
                        this.look.fillStyle(this.color);
                        this.look.fillRect(this.x + this.proximityRadius - Math.floor(PU*0.75/2), this.y + this.proximityRadius - Math.floor(PU*0.75/2),
                            this.side, this.side);

                    }else{                    

                        this.color = 0xFF0000
                        this.look.clear()
                        this.look.fillStyle(this.color);
                        this.look.fillRect(this.x + this.proximityRadius - Math.floor(PU*0.75/2), this.y + this.proximityRadius - Math.floor(PU*0.75/2),
                            this.side, this.side);
                    }

                }else{

                    if(this.clock < this.timeToBOOM){

                        if(Math.floor(this.clock * 10) % 2 ){

                            this.color = 0xFF0000
                            this.look.clear()
                            this.look.fillStyle(this.color);
                            this.look.fillRect(this.x + this.proximityRadius - Math.floor(PU*0.75/2), this.y + this.proximityRadius - Math.floor(PU*0.75/2),
                                this.side, this.side);

                        }else{
                            
                            if(this.playerTriggerable){
                                this.color = mineColor
                            }else{
                                this.color = mineColor2
                            }
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

            if(this.speed != 0)
                this.move()

        }else{

            if(!this.complete){

                this.clock += Delta

                if(this.clock > this.timeToBOOM + 0.5){

                    this.complete = true
                    this.look.clear()
                    this.explosionBOOM.deactivate()
                }
            }
        }
    }

    moveTo(x,y){  //move the entity to a location
        
        let deltaX = x - this.x
        let deltaY = y - this.y
        
        this.x = x
        this.y = y

        this.explosionBOOM.x += deltaX
        this.explosionBOOM.y += deltaY

        this.look.clear();
        this.look.fillStyle(this.color);
        this.look.fillRect(this.x + this.proximityRadius - Math.floor(PU*0.75/2), this.y + this.proximityRadius - Math.floor(PU*0.75/2), this.side, this.side);
    }

    reset(){
        this.triggered = false
        this.clock = 0
        this.BOOM = false
        this.complete = false
        if(this.playerTriggerable){
            this.color = mineColor
        }else{
            this.color = mineColor2
        }
        this.explosionBOOM.clock = 0
        this.look.clear();
        this.look.fillStyle(this.color);
        this.look.fillRect(this.x + this.proximityRadius - Math.floor(PU*0.75/2), this.y + this.proximityRadius - Math.floor(PU*0.75/2), this.side, this.side);
    }
}


class explosion extends bullet{
    constructor(x,y,width,height,color,lifeSpan){
        super(x,y,width,height,0,[0,0],false,color)

        this.lifeSpan = lifeSpan ? lifeSpan : 10
        this.clock = 0
        this.ID = 14
    }

    handler(){

        if(this.active){
            
            for (let i = 0; i < entities.length ; i++){
            
                if(entities[i].ID == 13 ){

                    let collision = this.checkCollision2TheRevenge(entities[i],0,0)  
                    
                    if(collision[0]){
                        
                        if(entities[i].triggered == false){

                            entities[i].triggered = true
                            entities[i].clock = entities[i].timeToBOOM * 0.75
                        }
                    }
                }
            }

            this.clock += Delta

            if(this.clock > this.lifeSpan){
                this.deactivate()
            }
        }
    }
}


class goal extends Entity{
    constructor(x,y,w,h){
        super(x,y,w,h,false,false,0,[0,0],true)

        this.ID = 15
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
        
        if(kind == "dash"){
            this.textSlot = scene.add.text(this.x - 60, this.y + 10 , " " , { fontFamily: 'Audiowide',fontSize : '12px' })
            this.text = "   UPGRADE TIME!\n You can Dash now!\n  Press SHIFT or Z \n B on the controller"
        }
        if(kind == "pewpew"){
            this.textSlot = scene.add.text(this.x - 130, this.y + 10 , " " , { fontFamily: 'Audiowide',fontSize : '14px' })
            this.text = "             ...The time has come\nYou can't continue on just avoiding\n          Press space to attack! \n             Y on the controller"
        }

        this.ID = 16
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
                if(this.kind == "pewpew"){
                    this.textSlot.setText(this.text)
                    pg.canShoot = true
                    this.look.clear()
                }
            }
        }   
    }
}


class Boss extends Entity{
    // Moving state:
    // 0: move none         1: move all         2: move L only      3: move R only          4: move H only          5: move L+H         6: move R+H         7: move L+R
    constructor(){
        
        super(300,-300,200,200,false,true,50,[0,0],true)
        
        this.ID = 17
        this.color = bossColor
        this.look.fillStyle(this.color);
        this.look.fillRect(this.x , this.y , this.width, this.height)
        
        this.LHand = new Entity(150,-300,100,100,false,true,75,[0,0],true)
        this.LHand.color = bossHandColor
        this.LHand.look.fillStyle(bossHandColor);
        this.LHand.look.fillRect(this.LHand.x , this.LHand.y , this.LHand.width, this.LHand.height)
        this.LHand.ID = 18
        this.RHand = new Entity(550,-300,100,100,false,true,75,[0,0],true)
        this.RHand.color = bossHandColor
        this.RHand.look.fillStyle(bossHandColor);
        this.RHand.look.fillRect(this.RHand.x , this.RHand.y , this.RHand.width, this.RHand.height)
        this.RHand.ID = 18
        
        this.state = 0
        this.lastAttack = -1
        this.movingState = 0
        this.clock = 0
        this.stateClock = 0
        this.stateClock2 = 0
        this.stateClock3 = 0
        this.stateVar1 = 0
        this.stateFlags = []

        this.recoveryTime = 3
        this.health = 80
        this.healthBar = new HealthBar()
        this.healthBar.hide()
        this.immune = true
        this.fluctuating = 0
        this.fluctuatingUp = true
        this.lastPGX = pg.x
        this.punishingBullet = new bullet(-100,100,50,50,800,[0,0],false)
        this.phase = 1
        this.dead = false

        this.maxMagazineSize = 100
        this.LMagazine = []
        for(let i = 0; i<this.maxMagazineSize; i++){
            this.LMagazine.push(new bullet(-100, -100 , 10 , 10 , 250 , [0,0], false))
        }
        this.RMagazine = []
        for(let i = 0; i<this.maxMagazineSize; i++){
            this.RMagazine.push(new bullet(-100, -100 , 10 , 10 , 250 , [0,0], false))
        }
        this.HMagazine = []
        for(let i = 0; i<this.maxMagazineSize; i++){
            this.HMagazine.push(new bullet(-100, -100 , 50 , 50 , 250 , [0,0], false))
        }
        this.MineMagazine = []
        for(let i = 0; i<this.maxMagazineSize; i++){
            this.MineMagazine.push(new mine(-100 + i*20,-100,3)) 
        }

        this.LLaser = new bullet(-100, -100, 1 , 1 ,0,[0,0],false,laserColor)
        this.RLaser = new bullet(-100, -100, 1 , 1 ,0,[0,0],false,laserColor)
        this.laser1 = new bullet(-100, -100, 1 , 1 ,0,[0,0],false,laserColor)
        this.laser2 = new bullet(-100, -100, 1 , 1 ,0,[0,0],false,laserColor)
        this.laser3 = new bullet(-100, -100, 1 , 1 ,0,[0,0],false,laserColor)
        this.laser4 = new bullet(-100, -100, 1 , 1 ,0,[0,0],false,laserColor)

        this.LPlaced = 0
        this.RPlaced = 0
        this.HPlaced = 0
        this.MPlaced = 0
    }
    
    handler(){

        //fluctuaction manager
        if(this.fluctuating < 0){
            this.fluctuatingUp = true
        }
        if(this.fluctuating > 400){
            this.fluctuatingUp = false
        }

        if(this.fluctuatingUp){
            this.fluctuating += 133 * Delta
        }else{
            this.fluctuating -= 133 * Delta
        }

        switch(this.state){
        
            case 0: //Do Nothing
            break;
            case 1: //Spawning
                
                if(this.stateClock == 0){
                    this.targetCoor = [300,50]
                    this.LHand.targetCoor = [150,200]
                    this.RHand.targetCoor = [550,200]
                }

                this.stateClock += Delta

                if(this.stateClock > 9){
                    this.movingState = 1

                    if(!musicBoss.isPlaying)
                        musicBoss.play({loop: true})

                    this.stateChanger(2)
                    this.healthBar.show()
                    this.stateClock = 0
                }
            break;

            case 2: // Recovery

                this.movingState = 1
                this.stateClock += Delta

                if(this.stateClock > this.recoveryTime){

                    let dice = generateRandomIntegerInRange(0,99)
                    let newAttack = 0

                    if(this.phase == 1){
                        
                        if(dice < 25){
                            if(this.lastAttack != 3)
                                newAttack = 3
                        }else if(dice < 50){
                            if(this.lastAttack != 4)
                                newAttack = 4
                        }else if(dice < 70){
                            if(this.lastAttack != 6)
                                newAttack = 6
                        }else if(dice < 85){
                            if(this.lastAttack != 5)
                                newAttack = 5
                        }else if(dice < 100){
                            if(this.lastAttack != 7)
                                newAttack = 7
                        }

                        if(newAttack != 0)
                            this.stateChanger( newAttack )

                    }else{

                        if(dice < 20){
                            if(this.lastAttack != 10)
                                newAttack = 10
                        }else if(dice < 40){
                            if(this.lastAttack != 11)
                                newAttack = 11
                        }else if(dice < 60){
                            if(this.lastAttack != 12)
                                newAttack = 12
                        }else if(dice < 80){
                            if(this.lastAttack != 13)
                                newAttack = 13
                        }else if(dice < 100){
                            if(this.lastAttack != 14)
                                newAttack = 14
                        }

                        if(newAttack != 0)
                            this.stateChanger( newAttack )
                    }
                }
            break;

            case 3: //Spray
                
                this.stateClock += Delta
                this.punishingBulletManager()
                
                if(this.stateClock < 0.5){

                    this.movingState = 6
                    this.LHand.speed = 200
                    this.LHand.targetCoor = [pg.x - 250,200 + this.fluctuating / 10 + 110]

                }else if(this.stateClock >= 0.5 && this.stateClock < 1){

                    this.LHand.targetCoor = [pg.x + 50,200 + this.fluctuating / 10 + 110]

                }else if(this.stateClock >= 1 && this.stateClock < 3){

                    this.LHand.targetCoor = [pg.x + 50,200 + this.fluctuating / 10 + 110]

                    if(this.stateClock2 >= this.LPlaced * 0.075 && this.LPlaced < this.maxMagazineSize){
                        this.LMagazine[this.LPlaced].moveTo(this.LHand.x + 50, this.LHand.y + this.LHand.height )
                        this.LMagazine[this.LPlaced].velocity = [generateRandomInRange(-0.4,0.4),1]
                        this.LMagazine[this.LPlaced].activate()
                        this.LPlaced ++
                    }
                    this.stateClock2 += Delta

                }else if(this.stateClock >= 3.5 && this.stateClock < 4){

                    this.movingState = 4
                    this.LHand.targetCoor = [this.x - 150 ,200 + this.fluctuating / 10 + 110]
                    this.RHand.speed = 200
                    this.RHand.targetCoor = [pg.x + 150,200 + this.fluctuating / 10 + 110]

                }else if(this.stateClock >= 4 && this.stateClock < 4.5){

                    this.movingState = 5
                    this.RHand.targetCoor = [pg.x + 50,200 + this.fluctuating / 10 + 110]
                    this.stateClock2 = 0

                }else if(this.stateClock >= 5 && this.stateClock < 7){

                    this.RHand.targetCoor = [pg.x - 50,200 + this.fluctuating / 10 + 110]
                    
                    if(this.stateClock2 >= this.RPlaced * 0.075 && this.RPlaced < this.maxMagazineSize){
                        this.RMagazine[this.RPlaced].moveTo(this.RHand.x + 50, this.RHand.y + this.RHand.height )
                        this.RMagazine[this.RPlaced].velocity = [generateRandomInRange(-0.4,0.4),1]
                        this.RMagazine[this.RPlaced].activate()
                        this.RPlaced ++
                    }
                    this.stateClock2 += Delta

                }else if(this.stateClock >= 7 && this.stateClock < 7.5){

                    this.RHand.targetCoor = [pg.x + 150,200 + this.fluctuating / 10 + 110]

                }else if(this.stateClock >= 7.5 && this.stateClock < 8){

                    this.RHand.speed = 400
                    this.LHand.speed = 400
                    this.movingState = 1
                    
                }else if(this.stateClock >= 8){

                    this.lastAttack = 3
                    this.stateChanger(2)
                }
            break;
            
            case 4: //Lasers from Hands
            
                this.stateClock += Delta
                this.punishingBulletManager()
                
                if(this.stateClock < 2){

                    this.movingState = 4
                    this.LHand.speed = 400
                    this.RHand.speed = 400
                    this.LHand.targetCoor = [16 , pg.y - 42]
                    this.RHand.targetCoor = [684 , pg.y - 42]
                    this.LLaser.height = 50
                    this.LLaser.width = 667
                    this.RLaser.height = 50
                    this.RLaser.width = 667

                }else if(this.stateClock >= 2 && this.stateClock < 2.5){

                    this.RHand.targetCoor = [684 , pg.y - 42]

                }else if(this.stateClock >= 2.5 && this.stateClock < 3){

                    this.LLaser.moveTo(this.LHand.x + this.LHand.width, this.LHand.y + 25)
                    this.LLaser.activate()
                    this.RHand.targetCoor = [684 , pg.y - 42]

                }else if(this.stateClock >= 3 && this.stateClock < 3.5){

                    this.LLaser.deactivate()
                    this.LHand.targetCoor = [16 , pg.y - 42]

                }else if(this.stateClock >= 3.5 && this.stateClock < 4){

                    this.RLaser.moveTo(16, this.RHand.y + 25)
                    this.RLaser.activate()
                    this.LHand.targetCoor = [16 , pg.y - 42]

                }else if(this.stateClock >= 4 && this.stateClock < 5){

                    this.RLaser.deactivate()
                    this.RHand.targetCoor = [684 , pg.y - 42]

                }else if(this.stateClock >= 5 && this.stateClock < 5.5){

                    this.LLaser.moveTo(this.LHand.x + this.LHand.width, this.LHand.y + 25)
                    this.LLaser.activate()
                    this.RHand.targetCoor = [684 , pg.y - 42]

                }else if(this.stateClock >= 5.5 && this.stateClock < 6){

                    this.LLaser.deactivate()
                    this.LHand.targetCoor = [16 , pg.y - 42]

                }else if(this.stateClock >= 6 && this.stateClock < 6.5){

                    this.RLaser.moveTo(16, this.RHand.y + 25)
                    this.RLaser.activate()
                    this.LHand.targetCoor = [16 , pg.y - 42]

                }else if(this.stateClock >= 6.5 && this.stateClock < 7.5){

                    this.RLaser.deactivate()
                    this.RHand.targetCoor = [684 , pg.y - 42]

                }else if(this.stateClock >= 7.5 && this.stateClock < 8){

                    this.LLaser.moveTo(this.LHand.x + this.LHand.width, this.LHand.y + 25)
                    this.LLaser.activate()
                    this.RHand.targetCoor = [684 , pg.y - 42]

                }else if(this.stateClock >= 8 && this.stateClock < 8.5){

                    this.LLaser.deactivate()
                    this.LHand.targetCoor = [16 , pg.y - 42]

                }else if(this.stateClock >= 8.5 && this.stateClock < 9){

                    this.RLaser.moveTo(16, this.RHand.y + 25)
                    this.RLaser.activate()
                    this.LHand.targetCoor = [16 , pg.y - 42]

                }else if(this.stateClock >= 9 && this.stateClock < 9.5){

                    this.RLaser.deactivate()
                    this.RHand.targetCoor = [684 , pg.y - 42]

                }else if(this.stateClock >= 9.5 && this.stateClock < 10.5){

                    this.movingState = 1
                
                }else if(this.stateClock >= 10.5){

                    this.lastAttack = 4
                    this.stateChanger(2)
                }

            break;

            case 5: //Cross Lasers
            
                this.stateClock += Delta

                if(this.stateClock < 0.1){

                    this.movingState = 0
                    this.LHand.speed = 400
                    this.RHand.speed = 400
                    this.LHand.targetCoor = [16,16]
                    this.RHand.targetCoor = [684,684]
                    this.targetCoor = [this.x, 120]
                    this.speed = 100

                }else if(this.stateClock > 1 && this.stateClock < 2){

                    if(this.stateVar1 == 0){
                        let ourX
                        if(pg.x < 400){
                            ourX = generateRandomIntegerInRange(400,484)
                        }else{
                            ourX = generateRandomIntegerInRange(116,200)
                        }
                        this.stateVar1 = ourX
                    }

                    this.speed = 400
                    this.look.setAlpha(0.3)
                    this.deadly = false

                    let ourY = pg.y - 100
                    if(ourY < 116)
                        ourY = 116
                    if(ourY > 484)
                        ourY = 484

                    this.targetCoor = [this.stateVar1 , ourY]
                
                }else if(this.stateClock > 2.5 && this.stateClock < 3){

                    this.look.setAlpha(1)
                    this.deadly = true
                    
                    this.laser1.moveTo(this.x + 50, 16)
                    this.laser1.height = this.y - 16 
                    this.laser1.width = 100
                    this.laser1.activate()
                    this.laser2.moveTo(this.x + this.width, this.y + 50)
                    this.laser2.height = 100
                    this.laser2.width = 800-16-this.x-this.width 
                    this.laser2.activate()
                    this.laser3.moveTo(this.x + 50, this.y + this.height)
                    this.laser3.height = 800-16-this.y-this.height 
                    this.laser3.width = 100
                    this.laser3.activate()
                    this.laser4.moveTo(16, this.y + 50)
                    this.laser4.height = 100
                    this.laser4.width = this.x - 16 
                    this.laser4.activate()
                    this.stateVar1 = 0

                    this.LHand.targetCoor = [684,16]
                    this.RHand.targetCoor = [16,684]


                }else if(this.stateClock > 3 && this.stateClock < 4){

                    this.laser1.deactivate()
                    this.laser4.deactivate()
                    this.laser3.deactivate()
                    this.laser2.deactivate()
                    
                    
                    if(this.stateVar1 == 0){
                        let ourY
                        if(pg.y < 400){
                            ourY = generateRandomIntegerInRange(400,484)
                        }else{
                            ourY = generateRandomIntegerInRange(116,200)
                        }
                        this.stateVar1 = ourY
                    }

                    this.look.setAlpha(0.3)
                    this.deadly = false
                    
                    let ourX = pg.x - 100
                    if(ourX < 116)
                        ourX = 116
                    if(ourX > 484)
                        ourX = 484

                    this.targetCoor = [ourX , this.stateVar1]
                
                }else if(this.stateClock > 4.5 && this.stateClock < 5){

                    this.look.setAlpha(1)
                    this.deadly = true
                    
                    this.laser1.moveTo(this.x + 50, 16)
                    this.laser1.height = this.y - 16 
                    this.laser1.width = 100
                    this.laser1.activate()
                    this.laser2.moveTo(this.x + this.width, this.y + 50)
                    this.laser2.height = 100
                    this.laser2.width = 800-16-this.x-this.width 
                    this.laser2.activate()
                    this.laser3.moveTo(this.x + 50, this.y + this.height)
                    this.laser3.height = 800-16-this.y-this.height 
                    this.laser3.width = 100
                    this.laser3.activate()
                    this.laser4.moveTo(16, this.y + 50)
                    this.laser4.height = 100
                    this.laser4.width = this.x - 16 
                    this.laser4.activate()

                    this.LHand.targetCoor = [684,684]
                    this.RHand.targetCoor = [16,16]

                }else if(this.stateClock > 5 && this.stateClock < 6){

                    this.laser1.deactivate()
                    this.laser4.deactivate()
                    this.laser3.deactivate()
                    this.laser2.deactivate()
                    
                    if(this.stateVar1 == 0){
                        let ourX
                        if(pg.x < 400){
                            ourX = generateRandomIntegerInRange(400,484)
                        }else{
                            ourX = generateRandomIntegerInRange(16,200)
                        }
                        this.stateVar1 = ourX
                    }

                    this.look.setAlpha(0.3)
                    this.deadly = false

                    let ourY = pg.y - 100
                    if(ourY < 116)
                        ourY = 116
                    if(ourY > 484)
                        ourY = 484

                    this.targetCoor = [this.stateVar1 , ourY]
                
                }else if(this.stateClock > 6.5 && this.stateClock < 7){

                    this.look.setAlpha(1)
                    this.deadly = true
                    
                    this.laser1.moveTo(this.x + 50, 16)
                    this.laser1.height = this.y - 16 
                    this.laser1.width = 100
                    this.laser1.activate()
                    this.laser2.moveTo(this.x + this.width, this.y + 50)
                    this.laser2.height = 100
                    this.laser2.width = 800-16-this.x-this.width 
                    this.laser2.activate()
                    this.laser3.moveTo(this.x + 50, this.y + this.height)
                    this.laser3.height = 800-16-this.y-this.height 
                    this.laser3.width = 100
                    this.laser3.activate()
                    this.laser4.moveTo(16, this.y + 50)
                    this.laser4.height = 100
                    this.laser4.width = this.x - 16 
                    this.laser4.activate()

                    this.LHand.targetCoor = [16,684]
                    this.RHand.targetCoor = [684,16]


                }else if(this.stateClock > 7 && this.stateClock < 8){

                    this.laser1.deactivate()
                    this.laser4.deactivate()
                    this.laser3.deactivate()
                    this.laser2.deactivate()
                    
                    if(this.stateVar1 == 0){
                        let ourY
                        if(pg.y < 400){
                            ourY = generateRandomIntegerInRange(400,584)
                        }else{
                            ourY = generateRandomIntegerInRange(116,200)
                        }
                        this.stateVar1 = ourY
                    }

                    this.look.setAlpha(0.3)
                    this.deadly = false

                    let ourX = pg.x - 100
                    if(ourX < 116)
                        ourX = 116
                    if(ourX > 484)
                        ourX = 484

                    this.targetCoor = [ourX , this.stateVar1]
                
                }else if(this.stateClock > 8.5 && this.stateClock < 9){

                    this.look.setAlpha(1)
                    this.deadly = true
                    
                    this.laser1.moveTo(this.x + 50, 16)
                    this.laser1.height = this.y - 16 
                    this.laser1.width = 100
                    this.laser1.activate()
                    this.laser2.moveTo(this.x + this.width, this.y + 50)
                    this.laser2.height = 100
                    this.laser2.width = 800-16-this.x-this.width 
                    this.laser2.activate()
                    this.laser3.moveTo(this.x + 50, this.y + this.height)
                    this.laser3.height = 800-16-this.y-this.height 
                    this.laser3.width = 100
                    this.laser3.activate()
                    this.laser4.moveTo(16, this.y + 50)
                    this.laser4.height = 100
                    this.laser4.width = this.x - 16 
                    this.laser4.activate()

                    this.LHand.targetCoor = [16,16]
                    this.RHand.targetCoor = [684,684]

                }else if(this.stateClock > 9 && this.stateClock < 10){

                    this.look.setAlpha(0.3)
                    this.deadly = false
                    
                    this.laser1.deactivate()
                    this.laser4.deactivate()
                    this.laser3.deactivate()
                    this.laser2.deactivate()
                    this.speed = 400
                    this.LHand.speed = 400
                    this.RHand.speed = 400
                    this.movingState = 1
                    this.RHand.deadly = false
                    this.RHand.look.setAlpha(0.3)
                    this.LHand.deadly = false
                    this.LHand.look.setAlpha(0.3)

                }else if(this.stateClock > 10){

                    this.lastAttack = 5 
                    this.stateChanger(2)
                }
            break;

            case 6: //Tracking Bullets

                this.stateClock += Delta
                this.punishingBulletManager()

                if(this.stateClock < 0.1){

                    this.movingState = 4
                    this.LHand.speed = 400
                    this.RHand.speed = 400
                    this.LHand.targetCoor = [16,400]
                    this.RHand.targetCoor = [684,400]
                    if(this.HPlaced == 0)
                        this.HPlaced++

                }else if((this.stateClock >= 1 && this.stateClock < 3) || (this.stateClock >= 4 && this.stateClock < 6) || (this.stateClock >= 7 && this.stateClock < 9)){

                    if(this.stateClock2 >= this.LPlaced * 0.25 && this.LPlaced < this.maxMagazineSize){
                        this.LMagazine[this.LPlaced].moveTo(this.LHand.x + 50, this.LHand.y + this.LHand.height )
                        this.LMagazine[this.LPlaced].velocity = [(pg.x + 8 - (this.LHand.x + 50)) * generateRandomInRange(0.5,1.5), 
                            (pg.y + 8 - (this.LHand.y + 100)) * generateRandomInRange(0.5,1.5)]
                        this.LMagazine[this.LPlaced].activate()
                        this.LPlaced ++
                    }

                    if(this.stateClock2 >= this.RPlaced * 0.25 && this.RPlaced < this.maxMagazineSize){
                        this.RMagazine[this.RPlaced].moveTo(this.RHand.x + 50, this.RHand.y + this.RHand.height )
                        this.RMagazine[this.RPlaced].velocity = [(pg.x + 8 - (this.RHand.x + 50)) * generateRandomInRange(0.5,1.5), 
                            (pg.y + 8 - (this.RHand.y + 100)) * generateRandomInRange(0.5,1.5)]
                        this.RMagazine[this.RPlaced].activate()
                        this.RPlaced ++
                    }

                    if(this.stateClock2 >= this.HPlaced * 1.9 && this.HPlaced < this.maxMagazineSize){
                        this.HMagazine[this.HPlaced].moveTo(this.x + 100, this.y + 200 )
                        this.HMagazine[this.HPlaced].speed = 350

                        let TP = [pg.x - this.x - 100 , pg.y - this.y - 200]
                        let bulletTravelDistance = getDistance(this.x + 100 , this.y +200 , pg.x , pg.y) - ( (this.width/2 + 25) * (1 + (Math.sqrt(2) - 1) / 2) )
                        let timeOfTravel = bulletTravelDistance / 350
                        let pgTravelDistance = playerSpeed * timeOfTravel
                        let playerVector = [pg.velocity[0] * pgTravelDistance , pg.velocity[1] * pgTravelDistance]
                        let linkingVector = [TP[0] + playerVector[0] , TP[1] + playerVector[1]]

                        this.HMagazine[this.HPlaced].velocity = linkingVector
                        this.HMagazine[this.HPlaced].speed = 500
                        this.HMagazine[this.HPlaced].activate()
                        this.HPlaced ++
                    }

                    this.stateClock2 += Delta
                }else if(this.stateClock >= 9 && this.stateClock < 9.3){

                    this.LHand.targetCoor = [150,200]
                    this.RHand.targetCoor = [550,200]
                    
                }else if(this.stateClock >= 9.3){

                    this.lastAttack = 6
                    this.stateChanger(2)
                }
            break;

            case 7: //Mine Vomit

                this.stateClock += Delta
                this.punishingBulletManager()

                if(this.stateClock < 3.1){

                    if(this.stateClock - this.stateClock2 > 1 ){
                        
                        for(let i = 0; i < 5; i++){
                            this.MineMagazine[this.MPlaced].reset()
                            this.MineMagazine[this.MPlaced].moveTo(this.x + 100, this.y + 100 )
                            this.MineMagazine[this.MPlaced].speed = 100
                            this.MineMagazine[this.MPlaced].targetCoor = [generateRandomIntegerInRange(50,750) , generateRandomIntegerInRange(50,750)] 
                            this.MPlaced++
                            if(this.MPlaced == 15){
                                this.MPlaced = 0
                            }
                        }
                        this.stateClock2 = this.stateClock
                    }                   

                }else if(this.stateClock >= 5){

                    this.lastAttack = 7
                    this.stateChanger(2)
                }
            break;

            case 8: //Phase Transition

                this.immune = true
                this.stateClock += Delta
                this.movingState = 0

                if(this.stateClock < 3){

                    this.speed = 50
                    this.LHand.speed = 50
                    this.RHand.speed = 50
                    this.targetCoor = [300,50]
                    this.LHand.targetCoor = [100,684]
                    this.RHand.targetCoor = [600,684]
                    
                }else if(this.stateClock >= 3 && this.stateClock < 4){

                    this.LHand.speed = 400
                    this.RHand.speed = 400
                    this.targetCoor = [300,50]
                    this.LHand.targetCoor = [150,200]
                    this.RHand.targetCoor = [550,200]

                }else if(this.stateClock >= 4 && this.stateClock < 4.5){

                    this.LHand.speed = 1800
                    this.RHand.speed = 1800
                    this.targetCoor = [300,50]
                    this.LHand.targetCoor = [150,100]
                    this.RHand.targetCoor = [550,100]

                }else if(this.stateClock >= 4.5 && this.stateClock < 5){

                    this.LHand.speed = 1800
                    this.RHand.speed = 1800
                    this.targetCoor = [300,50]
                    this.LHand.targetCoor = [150,684]
                    this.RHand.targetCoor = [550,684]

                }else if(this.stateClock >= 5 && this.stateClock < 5.5){

                    this.LHand.speed = 1800
                    this.RHand.speed = 1800
                    this.targetCoor = [300,50]
                    this.LHand.targetCoor = [150,100]
                    this.RHand.targetCoor = [550,100]

                }else if(this.stateClock >= 5.5 && this.stateClock < 6){

                    this.LHand.speed = 1800
                    this.RHand.speed = 1800
                    this.targetCoor = [300,50]
                    this.LHand.targetCoor = [150,684]
                    this.RHand.targetCoor = [550,684]

                }else if(this.stateClock >= 6 && this.stateClock < 6.5){

                    this.LHand.speed = 400
                    this.RHand.speed = 400
                    this.targetCoor = [300,50]
                    this.LHand.targetCoor = [150,200]
                    this.RHand.targetCoor = [550,200]

                }else if(this.stateClock >= 7 && this.stateVar1 < 50){

                    this.LHand.speed = 100
                    this.RHand.speed = 100
                    this.targetCoor = [300,50]
                    this.LHand.targetCoor = [150,200]
                    this.RHand.targetCoor = [550,200]

                    if(this.stateClock - this.stateClock2 > 0.04){
                        if(this.stateVar1 < 50){
                            this.healthBar.reduce(-2)
                            this.stateClock2 = this.stateClock
                            this.stateVar1++
                        }
                    }

                }else if(this.stateClock >= 7.5){

                    this.stateChanger(2)
                }
            break;

            case 9: //Death

                this.immune = true
                this.stateClock += Delta
                this.movingState = 0

                if(this.stateClock < 3){

                    this.speed = 50
                    this.LHand.speed = 50
                    this.RHand.speed = 50
                    this.targetCoor = [300,50]
                    this.LHand.targetCoor = [100,684]
                    this.RHand.targetCoor = [600,684]

                    if(this.stateClock - this.stateClock2 > 0.25){
                        
                        let newBOOM = new explosion(this.x + generateRandomIntegerInRange(-50,200) , this.y + generateRandomIntegerInRange(-50,200) , 75 , 75 , 0xFF0000 , 2)
                        newBOOM.activate()
                        this.stateClock2 = this.stateClock
                    }
                    
                }else if(this.stateClock >= 4 && this.stateVar1 < 18){

                    this.LHand.speed = 400
                    this.RHand.speed = 400
                    this.targetCoor = [300,50]
                    this.LHand.targetCoor = [150,200]
                    this.RHand.targetCoor = [550,200]

                    if(this.stateClock - this.stateClock2 > 0.04){
                        if(this.stateVar1 < 18){
                            this.healthBar.reduce(-2)
                            this.stateClock2 = this.stateClock
                            this.stateVar1++
                        }
                    }

                }else if(this.stateClock >= 6 && this.stateClock < 11){

                    this.speed = 50
                    this.LHand.speed = 200
                    this.RHand.speed = 200
                    this.targetCoor = [300,50]
                    this.LHand.targetCoor = [100,684]
                    this.RHand.targetCoor = [600,684]

                    if(this.stateClock - this.stateClock2 > 0.25){
                        if(this.stateVar1 < 36){
                            this.healthBar.reduce(2)
                            this.stateClock2 = this.stateClock
                            this.stateVar1++
                        }

                        let newBOOM = new explosion(this.x + generateRandomIntegerInRange(-50,200) , this.y + generateRandomIntegerInRange(-50,200) , 75 , 75 , 0xFF0000 , 2)
                        newBOOM.activate()
                        this.stateClock2 = this.stateClock
                    }
                }else if(this.stateClock >= 11){

                    let newBOOM = new explosion(this.x - 25 , this.y - 25 , 250 , 250 , 0xFF0000 , 3)
                    newBOOM.activate()
                    let newBOOM2 = new explosion(this.LHand.x - 25 , this.LHand.y - 25 , 150 , 150 , 0xFF0000 , 3)
                    newBOOM2.activate()
                    let newBOOM3 = new explosion(this.RHand.x - 25 , this.RHand.y - 25 , 150 , 150 , 0xFF0000 , 3)
                    newBOOM3.activate()

                    this.healthBar.hide()
                    this.look.clear()
                    this.deadly = false
                    this.LHand.look.clear()
                    this.LHand.deadly = false
                    this.RHand.look.clear()
                    this.RHand.deadly = false
                    this.moveTo(300,-500)
                    this.LHand.moveTo(300,-500)
                    this.RHand.moveTo(300,-500)
                    this.state = 0
                    this.dead = true
                }
            break;

            case 10: //Angry Hands

                this.stateClock += Delta
                this.punishingBulletManager()

                if(this.stateClock < 1){

                    this.LHand.speed = 1200
                    this.RHand.speed = 1200

                }else if( (this.stateClock >= 1 && this.stateClock < 1.2) || (this.stateClock >= 4 && this.stateClock < 4.2) || (this.stateClock >= 7 && this.stateClock < 7.2) ){

                    this.movingState = 6
                    this.LHand.targetCoor = [this.x, this.y - 100]

                }else if((this.stateClock >= 1.2 && this.stateClock < 1.3)||(this.stateClock >= 4.2 && this.stateClock < 4.3)||(this.stateClock >= 7.2 && this.stateClock < 7.3)){

                    this.LHand.targetCoor = [pg.x, 684]

                }else if((this.stateClock >= 2.5 && this.stateClock < 2.7) || (this.stateClock >= 5.5 && this.stateClock < 5.7) || (this.stateClock >= 8.5 && this.stateClock < 8.7)){

                    this.movingState = 5
                    this.RHand.targetCoor = [this.x, this.y - 100]

                }else if((this.stateClock >= 2.7 && this.stateClock < 2.8)||(this.stateClock >= 5.7 && this.stateClock < 5.8)||(this.stateClock >= 8.7 && this.stateClock < 8.8)){

                    this.RHand.targetCoor = [pg.x, 684]

                }else if(this.stateClock >= 10 && this.stateClock < 10.4){

                    this.movingState = 1

                }else if(this.stateClock >= 10.4){

                    this.lastAttack = 10
                    this.stateChanger(2)
                }
            break;

            case 11: //Big Spray

                this.stateClock += Delta
                this.punishingBulletManager()

                if(this.stateClock < 2){

                    this.movingState = 4
                    this.LHand.speed = 200
                    this.RHand.speed = 200
                    this.LHand.targetCoor = [296,350]
                    this.RHand.targetCoor = [404,350]
                }else if(this.stateClock >= 2 && this.stateClock < 7){                    

                    if(this.stateClock2 >= this.LPlaced * 0.2 && this.LPlaced < this.maxMagazineSize){
                        this.LMagazine[this.LPlaced].moveTo(this.LHand.x + 50, this.LHand.y + this.LHand.height )
                        this.LMagazine[this.LPlaced].velocity = [generateRandomInRange(-1,1),generateRandomInRange(-0.2,1)]
                        this.LMagazine[this.LPlaced].width = 20
                        this.LMagazine[this.LPlaced].height = 20
                        this.LMagazine[this.LPlaced].speed = 400
                        this.LMagazine[this.LPlaced].activate()
                        this.LPlaced ++
                    }
                    if(this.stateClock2 >= this.RPlaced * 0.2 && this.RPlaced < this.maxMagazineSize){
                        this.RMagazine[this.RPlaced].moveTo(this.RHand.x + 50, this.RHand.y + this.RHand.height )
                        this.RMagazine[this.RPlaced].velocity = [generateRandomInRange(-1,1),generateRandomInRange(-0.2,1)]
                        this.RMagazine[this.RPlaced].height = 20
                        this.RMagazine[this.RPlaced].width = 20
                        this.RMagazine[this.RPlaced].speed = 400
                        this.RMagazine[this.RPlaced].activate()
                        this.RPlaced ++
                    }
                    this.stateClock2 += Delta

                }else if(this.stateClock >= 7 && this.stateClock < 8){
                    this.movingState = 1
                }else if(this.stateClock > 8){

                    this.lastAttack = 11
                    this.stateChanger(2)
                }
            break;

            case 12: //Hey!

                this.stateClock += Delta

                if(this.stateClock < 0.5){

                    this.movingState = 0
                    this.LHand.speed = 100
                    this.RHand.speed = 100
                    this.speed = 100
                    this.LHand.targetCoor = [16,16]
                    this.RHand.targetCoor = [684,16]
                    this.targetCoor = [300,200]
                    this.LHand.look.setAlpha(0.3)
                    this.RHand.look.setAlpha(0.3)
                    this.LHand.deadly = false
                    this.RHand.deadly = false

                } else if(this.stateClock >= 1.5 && this.stateClock <14.4){

                    this.speed = 0
                    this.velocity = [0,0]

                    let stepX = -1 * 650 * Delta
                    this.moveTo(this.x + stepX,this.y)
                    if(this.x < -200){
                        this.x = 1200
                        this.y = generateRandomIntegerInRange(16,584)
                    }
                    if(this.x > 100 && this.x < 500){

                        if(this.stateClock - this.stateClock2 > 0.12 ){
                        
                            this.MineMagazine[this.MPlaced].reset()
                            this.MineMagazine[this.MPlaced].moveTo(this.x + 100, this.y + 100 )
                            this.MineMagazine[this.MPlaced].speed = 200
                            this.MineMagazine[this.MPlaced].triggered = true
                            this.MineMagazine[this.MPlaced].targetCoor = [generateRandomIntegerInRange(50,750) , generateRandomIntegerInRange(50,750)] 
                            this.MPlaced++
                            if(this.MPlaced == this.maxMagazineSize){
                                this.MPlaced = 0
                            }
                            this.stateClock2 = this.stateClock
                        }  
                        
                    }
                }else if(this.stateClock >= 14.4 && this.stateClock < 16){

                    this.speed = 300
                    this.deadly = false
                    this.look.setAlpha(0.3)
                    this.targetCoor = [300,50]
                    this.LHand.targetCoor = [150,200]
                    this.RHand.targetCoor = [550,200]

                }else if(this.stateClock > 16){

                    this.lastAttack = 12
                    this.stateChanger(2)
                }
            break;

            case 13: //Lasers All Over

                this.stateClock += Delta
                this.movingState = 0

                if(this.stateClock < 1.5){
                    this.speed = 200
                    this.look.setAlpha(0.3)
                    this.targetCoor = [300,16]
                    this.deadly = false
                    this.LHand.speed = 150
                    this.LHand.targetCoor = [16,300]
                    this.RHand.speed = 150
                    this.RHand.targetCoor = [684,300]
                } else if ( this.stateClock >= 1.5 && this.stateClock < 10.5){

                    if(this.stateClock - this.stateClock2 >= 1.5 ){
                        
                        this.LLaser.deactivate()
                        this.RLaser.deactivate()
                        
                        this.LHand.speed = 2000
                        this.LHand.deadly = false
                        this.LHand.look.setAlpha(0.3)

                        let dice = generateRandomIntegerInRange(1,4)
                        if(dice == 1){
                            let destination = generateRandomIntegerInRange(16,684)
                            this.LHand.targetCoor = [16, destination]
                            this.LLaser.x = 116
                            this.LLaser.y = destination + 25
                            this.LLaser.width = 667
                            this.LLaser.height = 50

                        }else if(dice == 2){
                            let destination = generateRandomIntegerInRange(16,684)
                            this.LHand.targetCoor = [destination,684]
                            this.LLaser.x = destination + 25
                            this.LLaser.y = 16
                            this.LLaser.width = 50
                            this.LLaser.height = 667

                        }else if(dice == 3){
                            let destination = generateRandomIntegerInRange(16,684)
                            this.LHand.targetCoor = [684,destination]
                            this.LLaser.x = 16
                            this.LLaser.y = destination + 25
                            this.LLaser.width = 667
                            this.LLaser.height = 50

                        }else if(dice == 4){
                            let destination = generateRandomIntegerInRange(16,684)
                            this.LHand.targetCoor = [destination,16]
                            this.LLaser.x = destination + 25
                            this.LLaser.y = 116
                            this.LLaser.width = 50
                            this.LLaser.height = 667
                        }

                        this.RHand.speed = 2000
                        this.RHand.deadly = false
                        this.RHand.look.setAlpha(0.3)

                        let dice2 = generateRandomIntegerInRange(1,4)
                        if(dice2 == 1){
                            let destination = generateRandomIntegerInRange(16,684)
                            this.RHand.targetCoor = [16, destination]
                            this.RLaser.x = 116
                            this.RLaser.y = destination + 25
                            this.RLaser.width = 667
                            this.RLaser.height = 50

                        }else if(dice2 == 2){
                            let destination = generateRandomIntegerInRange(16,684)
                            this.RHand.targetCoor = [destination,684]
                            this.RLaser.x = destination + 25
                            this.RLaser.y = 16
                            this.RLaser.width = 50
                            this.RLaser.height = 667

                        }else if(dice2 == 3){
                            let destination = generateRandomIntegerInRange(16,684)
                            this.RHand.targetCoor = [684,destination]
                            this.RLaser.x = 16
                            this.RLaser.y = destination + 25
                            this.RLaser.width = 667
                            this.RLaser.height = 50

                        }else if(dice2 == 4){
                            let destination = generateRandomIntegerInRange(16,684)
                            this.RHand.targetCoor = [destination,16]
                            this.RLaser.x = destination + 25
                            this.RLaser.y = 116
                            this.RLaser.width = 50
                            this.RLaser.height = 667
                        }
                            
                        this.stateClock2 = this.stateClock

                        if(this.stateClock3 == 0)
                            this.stateClock3 += 1
                    }
                    if( this.stateClock - this.stateClock3 >= 1.5 ){
                        
                        this.LLaser.activate()
                        this.LHand.look.setAlpha(1)
                        this.LHand.look.deadly = true
                        this.RLaser.activate()
                        this.RHand.look.setAlpha(1)
                        this.RHand.look.deadly = true

                        this.stateClock3 = this.stateClock
                    }
                }else if(this.stateClock >= 10.5 && this.stateClock < 12){

                    this.LLaser.deactivate()
                    this.RLaser.deactivate()
                    this.LHand.speed = 200
                    this.RHand.speed = 200
                    this.LHand.deadly = false
                    this.LHand.look.setAlpha(0.3)
                    this.RHand.deadly = false
                    this.RHand.look.setAlpha(0.3)
                    this.speed = 100
                    this.movingState = 1

                }else if(this.stateClock > 12){

                    this.lastAttack = 13
                    this.stateChanger(2)
                }
            break;
            
            case 14: //Mine Rain

                this.stateClock += Delta
                this.punishingBulletManager()

                if(this.stateClock < 1){
                    this.movingState = 0
                    this.speed = 100
                    this.targetCoor = [300,130]
                    this.LHand.speed = 200
                    this.RHand.speed = 200
                    this.LHand.targetCoor = [16, 16]
                    this.RHand.targetCoor = [670, 16]

                }else if (this.stateClock > 1.5 && this.stateClock < 6.5){

                    if(this.stateClock - this.stateClock2 > 0.12 ){
                        
                        this.LHand.speed = 1200
                        this.RHand.speed = 1200

                        if(this.LHand.x < 20 + generateRandomIntegerInRange(0,100))
                            this.LHand.targetCoor = [296,16]
                        if(this.LHand.x > 292 - generateRandomIntegerInRange(0,100))
                            this.LHand.targetCoor = [16,16]

                        
                        if(this.RHand.x > 670 - generateRandomIntegerInRange(0,100))
                            this.RHand.targetCoor = [404,16]                            
                        if(this.RHand.x < 410 + generateRandomIntegerInRange(0,100))
                            this.RHand.targetCoor = [670,16]

                        this.stateClock2 = this.stateClock
                    }

                    if(this.stateClock - this.stateClock3 > 0.3 ){

                        this.MineMagazine[this.MPlaced].reset()
                        this.MineMagazine[this.MPlaced].moveTo(this.LHand.x + 50, this.LHand.y + 100 )
                        this.MineMagazine[this.MPlaced].timeToBOOM = generateRandomInRange(0.5,3)
                        this.MineMagazine[this.MPlaced].speed = generateRandomIntegerInRange(300,400)
                        this.MineMagazine[this.MPlaced].triggered = true
                        this.MineMagazine[this.MPlaced].targetCoor = [this.LHand.x + 50 , 784] 
                        this.MPlaced++
                        if(this.MPlaced == this.maxMagazineSize){
                            this.MPlaced = 0
                        }
                        this.MineMagazine[this.MPlaced].reset()
                        this.MineMagazine[this.MPlaced].moveTo(this.RHand.x + 50, this.RHand.y + 100  )
                        this.MineMagazine[this.MPlaced].timeToBOOM = generateRandomInRange(0.5,3)
                        this.MineMagazine[this.MPlaced].speed = 200
                        this.MineMagazine[this.MPlaced].triggered = true
                        this.MineMagazine[this.MPlaced].targetCoor = [this.RHand.x + 50 , 784] 
                        this.MPlaced++
                        if(this.MPlaced == this.maxMagazineSize){
                            this.MPlaced = 0
                        }

                        this.stateClock3 = this.stateClock
                    }  

                }else if(this.stateClock > 6.5 && this.stateClock < 7.5){
                    this.LHand.speed = 200
                    this.RHand.speed = 200
                    this.movingState = 4
                    this.LHand.targetCoor = [150,200]
                    this.RHand.targetCoor = [550,200]
                }else if(this.stateClock > 7.5 ){

                    this.lastAttack = 14
                    this.stateChanger(2)
                }
            break;
        }



        switch(this.movingState){
            case 0:
            break;
            case 1:

                if(this.lastPGX != pg.x){
                    this.targetCoor = [pg.x - 100,50 + this.fluctuating / 10]
                    this.LHand.targetCoor = [pg.x - 250,200 + this.fluctuating / 10]
                    this.RHand.targetCoor = [pg.x + 150,200 + this.fluctuating / 10]
                    this.lastPGX = pg.x
                }
                if(Math.floor(this.fluctuating) % 10 == 0){
                    this.targetCoor = [pg.x - 100,50 + this.fluctuating / 10]
                    this.LHand.targetCoor = [pg.x - 250,200 + this.fluctuating / 10]
                    this.RHand.targetCoor = [pg.x + 150,200 + this.fluctuating / 10]
                }
            break;
            case 2:

                if(this.lastPGX != pg.x){
                    this.LHand.targetCoor = [pg.x - 250,200 + this.fluctuating / 10]
                    this.lastPGX = pg.x
                }
                if(Math.floor(this.fluctuating) % 10 == 0){
                    this.LHand.targetCoor = [pg.x - 250,200 + this.fluctuating / 10]
                }
            break;
            case 3:

                if(this.lastPGX != pg.x){
                    this.RHand.targetCoor = [pg.x + 150,200 + this.fluctuating / 10]
                    this.lastPGX = pg.x
                }
                if(Math.floor(this.fluctuating) % 10 == 0){
                    this.RHand.targetCoor = [pg.x + 150,200 + this.fluctuating / 10]
                }
            break;
            case 4:

                if(this.lastPGX != pg.x){
                    this.targetCoor = [pg.x - 100,50 + this.fluctuating / 10]
                    this.lastPGX = pg.x
                }
                if(Math.floor(this.fluctuating) % 10 == 0){
                    this.targetCoor = [pg.x - 100,50 + this.fluctuating / 10]
                }
            break;
            case 5:

                if(this.lastPGX != pg.x){
                    this.targetCoor = [pg.x - 100,50 + this.fluctuating / 10]
                    this.LHand.targetCoor = [pg.x - 250,200 + this.fluctuating / 10]
                    this.lastPGX = pg.x
                }
                if(Math.floor(this.fluctuating) % 10 == 0){
                    this.targetCoor = [pg.x - 100,50 + this.fluctuating / 10]
                    this.LHand.targetCoor = [pg.x - 250,200 + this.fluctuating / 10]
                }
            break;
            case 6:

                if(this.lastPGX != pg.x){
                    this.targetCoor = [pg.x - 100,50 + this.fluctuating / 10]
                    this.RHand.targetCoor = [pg.x + 150,200 + this.fluctuating / 10]
                    this.lastPGX = pg.x
                }
                if(Math.floor(this.fluctuating) % 10 == 0){
                    this.targetCoor = [pg.x - 100,50 + this.fluctuating / 10]
                    this.RHand.targetCoor = [pg.x + 150,200 + this.fluctuating / 10]
                }
            break;
            case 7:

                if(this.lastPGX != pg.x){
                    this.LHand.targetCoor = [pg.x - 250,200 + this.fluctuating / 10]
                    this.RHand.targetCoor = [pg.x + 150,200 + this.fluctuating / 10]
                    this.lastPGX = pg.x
                }
                if(Math.floor(this.fluctuating) % 10 == 0){
                    this.LHand.targetCoor = [pg.x - 250,200 + this.fluctuating / 10]
                    this.RHand.targetCoor = [pg.x + 150,200 + this.fluctuating / 10]
                }
            break;
        }

        if(this.state != 0){
            this.move([18])
            
            if(this.state == 13 || this.state == 5){
                this.LHand.move()
                this.RHand.move()
            }else{
                this.LHand.move([17,18])
                this.RHand.move([17,18])
            }
        }
    }

    stateChanger(stateToChangeTo){

        this.LHand.speed = 75
        this.RHand.speed = 75
        this.speed = 50
        this.stateClock2 = 0
        this.stateClock = 0
        this.stateClock3 = 0
        this.LPlaced = 0
        this.RPlaced = 0
        this.HPlaced = 0
        this.stateVar1 = 0
        this.immune = false
        this.look.setAlpha(1)
        this.LHand.look.setAlpha(1)
        this.RHand.look.setAlpha(1)
        this.deadly = true
        this.LHand.deadly = true
        this.RHand.deadly = true
        this.LLaser.deactivate()
        this.RLaser.deactivate()
        this.laser1.deactivate()
        this.laser2.deactivate()
        this.laser3.deactivate()
        this.laser4.deactivate()

        let data = this.checkCollision2TheRevenge(this.LHand,0,0)
        let data2 = this.checkCollision2TheRevenge(this.RHand,0,0)
        let data3 = this.LHand.checkCollision2TheRevenge(this.RHand,0,0)
        if(data[0] || data3[0] || data2[0]){
            this.moveTo(300,50)
            this.LHand.moveTo(150,200)
            this.RHand.moveTo(550,200)
        }

        this.state = stateToChangeTo
    }

    punishingBulletManager(){

        if(pg.y < this.y + this.height + 50 && pg.y >= this.y + this.height && pg.x >= this.x && pg.x < this.x + this.width){
            if(this.punishingBullet.active == false){
                this.punishingBullet.moveTo(this.x+75 , this.y + 75)
                this.punishingBullet.velocity = [pg.x - (this.x + 100) , pg.y - (this.y + 100)]
                this.punishingBullet.activate()
            }
        }
    }    
    
    reduceHealth(){

        if(!this.immune){
        
            this.healthBar.reduce(2.5)
            this.health--

            if(this.health == 40){
                this.phase = 2
                this.stateChanger(8)
            }
            if(this.health == 0){

                this.stateChanger(9)
            }
        }
    }
}

class HealthBar extends Entity{
    constructor(){
        super(150,20,500,20,false,false,0,[0,0],false)

        this.ID = 19
        this.color = 0xFF0000
        this.look.fillStyle(this.color);
        this.look.fillRect(150 , 20 , this.width, this.height);
        this.text = scene.add.text(76,17,"BOSS: ", { fontFamily: 'Audiowide',fontSize : '20px' })
    }

    reduce(percentage){
        this.width -= 500 * percentage / 100
        this.look.clear()
        this.look.fillStyle(this.color);
        this.look.fillRect(150 , 20 , this.width, this.height);
    }

    hide(){
        this.look.clear()
        this.text.setText("")
    }

    show(){
        this.look.clear()
        this.look.fillStyle(this.color);
        this.look.fillRect(150 , 20 , this.width, this.height);
        this.text.setText("BOSS: ")
    }
}


class barrier extends Entity{
    constructor(x,y,width,height){
        super(x,y,width,height,false,false,0,[0,0],true)

        this.ID = 20
        this.color = 0xFFFFFF
        this.look.fillStyle(this.color);
        this.look.fillRect(x , y , width, height);
        this.look.setAlpha(0.15)
    }

    handler(){}
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

    let letsChangeBaby = false

    switch(password.value){
        case "VV292Y":
            localStorage["specialBoi"] = 1
            lv = 1
            letsChangeBaby = true
        break;
        case "Q4UJE6":
            localStorage["specialBoi"] = 2
            lv = 2
            letsChangeBaby = true
        break;
        case "8KPMLN":
            localStorage["specialBoi"] = 3
            lv = 3
            letsChangeBaby = true
        break;
        case "HRPH2P":
            localStorage["specialBoi"] = 4
            lv = 4
            letsChangeBaby = true
        break;
        case "PG7P5H":
            localStorage["specialBoi"] = 5
            lv = 5
            letsChangeBaby = true
        break;
        case "6EVN95":
            localStorage["specialBoi"] = 6
            lv = 6
            letsChangeBaby = true
        break;
        case "569Q8Y":
            localStorage["specialBoi"] = 7
            lv = 7
            letsChangeBaby = true
        break;
        case "8TL79Q":
            localStorage["specialBoi"] = 8
            lv = 8
            letsChangeBaby = true
        break;
        case "86TH7J":
            localStorage["specialBoi"] = 9
            lv = 9
            letsChangeBaby = true
        break;
        case "3QUT4N":
            localStorage["specialBoi"] = 10
            lv = 10
            letsChangeBaby = true
        break;
        case "TVVQ2Q":
            localStorage["specialBoi"] = 11
            lv = 11
            letsChangeBaby = true
        break;
        case "VQ4L3E":
            localStorage["specialBoi"] = 12
            lv = 12
            letsChangeBaby = true
        break;
        case "7V53SK":
            localStorage["specialBoi"] = 13
            lv = 13
            letsChangeBaby = true
        break;
        case "RJ6RLL":
            localStorage["specialBoi"] = 14
            lv = 14
            letsChangeBaby = true
        break;
        case "2RQV22":
            localStorage["specialBoi"] = 15
            lv = 15
            letsChangeBaby = true
        break;
        case "964E8M":
            localStorage["specialBoi"] = 16
            lv = 16
            letsChangeBaby = true
        break;
        case "87GNVF":
            localStorage["specialBoi"] = 17
            lv = 17
            letsChangeBaby = true
        break;
        case "HVL7LC":
            localStorage["specialBoi"] = 18
            lv = 18
            letsChangeBaby = true
        break;
        case "U256TV":
            localStorage["specialBoi"] = 19
            lv = 19
            letsChangeBaby = true
        break;
        case "2NY2EW":
            localStorage["specialBoi"] = 20
            lv = 20
            letsChangeBaby = true
        break;
        case "JBMF8J":
            localStorage["specialBoi"] = 21
            lv = 21
            letsChangeBaby = true
        break;
        case "U3QM4M":
            localStorage["specialBoi"] = 22
            lv = 22
            letsChangeBaby = true
        break;
        case "G4V9P8":
            localStorage["specialBoi"] = 23
            lv = 23
            letsChangeBaby = true
        break;
        case "PL4CSR":
            localStorage["specialBoi"] = 24
            lv = 24
            letsChangeBaby = true
        break;
        case "Y44FR9":
            localStorage["specialBoi"] = 25
            lv = 25
            letsChangeBaby = true
        break;
        case "2Y65Y9":
            localStorage["specialBoi"] = 26
            lv = 26
            letsChangeBaby = true
        break;
        case "QG29N9":
            localStorage["specialBoi"] = 27
            lv = 27
            letsChangeBaby = true
        break;
        case "5S2KPN":
            localStorage["specialBoi"] = 28
            lv = 28
            letsChangeBaby = true
        break;
        case "N9PLL4":
            localStorage["specialBoi"] = 29
            lv = 29
            letsChangeBaby = true
        break;
        case "EEH5G9":
            localStorage["specialBoi"] = 30
            lv = 30
            letsChangeBaby = true
        break;
        case "HC8BFM":
            localStorage["specialBoi"] = 31
            lv = 31
            letsChangeBaby = true
        break;
        case "7RF7JC":
            localStorage["specialBoi"] = 32
            lv = 32
            letsChangeBaby = true
        break;
        case "843KEB":
            localStorage["specialBoi"] = 33
            lv = 33
            letsChangeBaby = true
        break;
        case "QBCR3M":
            localStorage["specialBoi"] = 34
            lv = 34
            letsChangeBaby = true
        break;
        case "2FP9E9":
            localStorage["specialBoi"] = 35
            lv = 35
            letsChangeBaby = true
        break;
        case "635THD":
            localStorage["specialBoi"] = 36
            lv = 36
            letsChangeBaby = true
        break;
        case "MQ5UD7":
            localStorage["specialBoi"] = 37
            lv = 37
            letsChangeBaby = true
        break;
        case "N6L9VJ":
            localStorage["specialBoi"] = 38
            lv = 38
            letsChangeBaby = true
        break;
        case "LB3JTF":
            localStorage["specialBoi"] = 39
            lv = 39
            letsChangeBaby = true
        break;
        case "C4WY6J":
            localStorage["specialBoi"] = 40
            lv = 40
            letsChangeBaby = true
        break;
        case "CHAY87":
            localStorage["specialBoi"] = 41
            lv = 41
            letsChangeBaby = true
        break;
        case "89KI4V":
            localStorage["specialBoi"] = 42
            lv = 42
            letsChangeBaby = true
        break;
        case "QG5KPJ":
            localStorage["specialBoi"] = 43
            lv = 43
            letsChangeBaby = true
        break;
        case "7FRCNM":
            localStorage["specialBoi"] = 44
            lv = 44
            letsChangeBaby = true
        break;
        case "PX4588":
            localStorage["specialBoi"] = 45
            lv = 45
            letsChangeBaby = true
        break;
        case "Q23B8S":
            localStorage["specialBoi"] = 46
            lv = 46
            letsChangeBaby = true
        break;
        case "8499PV":
            localStorage["specialBoi"] = 47
            lv = 47
            letsChangeBaby = true
        break;
        case ":AV01D!":
            passUnlocked = "true"
            localStorage["passBoi"] = "true"
        break;
    }

    if(passUnlocked == "true" && !letsChangeBaby){
        
        let level = Number(password.value)

        if(level != NaN){
            
            level = Math.floor(level)
            
            if(level > 0 && level <= 48){

                localStorage["specialBoi"] = password.value
                lv = password.value
                letsChangeBaby = true
            }
        }
    }

    if(letsChangeBaby){

        var theOtherScene = scene.scene.get("level" + lv);            
        theOtherScene.scene.restart()

        if(music1 != undefined){
            music1.stop()
            music1 = undefined
        }
        if(music2 != undefined){
            music2.stop()
            music2 = undefined
        } 
        if(music3 != undefined){
            music3.stop()
            music3 = undefined
        } 
        if(music4 != undefined){
            music4.stop()
            music4 = undefined
        } 
        if(musicBoss != undefined){
            musicBoss.stop()
            musicBoss = undefined
        } 
        if(musicSM != undefined){
            musicSM.stop()
            musicSM = undefined
        } 
        if(musicCredits != undefined){
            musicCredits.stop()
            musicCredits = undefined
        }
        passLabel.textContent = " This level Password: "          
        scene.scene.switch("level" + lv)
    }
}

function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomInRange(min, max) {
    return (Math.random() * (max - min)) + min;
}

function sceneManager(){

    if(scene == scene.scene.get("tutorial") && (keys.SPACE.isDown || AButton.value == 1)){

        var theOtherScene = scene.scene.get("level1");            
        theOtherScene.scene.restart()
        musicSM.stop()            
        scene.scene.switch("level1")
    } else if(scene == scene.scene.get("landsBetween")  && (keys.SPACE.isDown || AButton.value == 1)){

        var theOtherScene = scene.scene.get("level" + lv);            
        theOtherScene.scene.restart()            
        scene.scene.switch("level" + lv)
    }
}

volumeSlider.oninput = function() {

    if(music1 != undefined){
        music1.volume = this.value / 100
    }
    if(music2 != undefined){
        music2.volume = this.value / 100
    } 
    if(music3 != undefined){
        music3.volume = this.value / 100
    } 
    if(music4 != undefined){
        music4.volume = this.value / 100
    } 
    if(musicBoss != undefined){
        musicBoss.volume = this.value / 100
    } 
    if(musicSM != undefined){
        musicSM.volume = this.value / 100
    } 
    if(musicCredits != undefined){
        musicCredits.volume = this.value / 100
    } 
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

let SMClock = 0
let fallingStars = []


function preloadSM(){
    this.load.audio('themeSM', [
        'ost/Start Menu - Tonal Resonance.mp3',
    ]);
    this.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');
}

function createSM(){

    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('ENTER,SPACE,A,D,Z');
    gamepad = this.input.gamepad.gamepads
    if(musicCredits != undefined){
        musicCredits.stop()
        musicCredits = undefined
    }
    if(musicSM == undefined){
        musicSM = this.sound.add('themeSM')
        musicSM.volume = volumeSlider.value / 100  
        musicSM.play({loop: true});
        this.scene.restart()
    }


    scene.add.text(205,140,"AVOID", { fontFamily: 'Audiowide',fontSize : '110px' })
    scene.add.text(290,397,"START GAME", { fontFamily: 'Audiowide',fontSize: '28px' })
    let indicator = new bullet(270,408,12,12,0,[0,0],true,0x00FF00)

    for(let i = 0; i<50; i++){
        
        let dice = generateRandomIntegerInRange(1,2)

        if(dice == 1){
            fallingStars.push(new bullet(generateRandomIntegerInRange(0,800),generateRandomIntegerInRange(0,800),5,5,generateRandomIntegerInRange(150,250),[1,1],true,0xEEEEEE))
        }else{
            fallingStars.push(new bullet(generateRandomIntegerInRange(0,800),generateRandomIntegerInRange(0,800),5,5,generateRandomIntegerInRange(150,250),[1,1],true,0xEEEEEE))
        }
    }
}

function updateSM(time,delta){

    Delta = delta / 1000
    omniHandler()

    if(gamepad.length > 0){
        AButton = gamepad[0].buttons[0]
    }

    if(keys.ENTER.isDown || keys.SPACE.isDown || AButton.value == 1){

        passLabel.textContent = " This level Password: "
        
        if(lv == 1){

            var theOtherScene = scene.scene.get("tutorial");            
            theOtherScene.scene.restart()
            scene.scene.switch("tutorial")
        }else{

            var theOtherScene = scene.scene.get("level" + lv);            
            theOtherScene.scene.restart()  
            musicSM.stop()          
            scene.scene.switch("level" + lv)
        }
    }
            
    if(keys.Z.isDown && keys.A.isDown && keys.D.isDown){
        var theOtherScene = scene.scene.get("debug");            
        theOtherScene.scene.restart()            
        scene.scene.switch("debug")
    }
    
    for(let i = 0; i<fallingStars.length; i++){

        if(fallingStars[i].x > 800 || fallingStars[i].y > 800){

            let dice = generateRandomIntegerInRange(1,2)

            if(dice == 1){

                fallingStars[i].x = -10
                fallingStars[i].y = generateRandomIntegerInRange(0,800)
                fallingStars[i].speed = generateRandomIntegerInRange(150,250)
            }else{

                fallingStars[i].y = -10
                fallingStars[i].x = generateRandomIntegerInRange(0,800)
                fallingStars[i].speed = generateRandomIntegerInRange(150,250)
            }
        }
    }

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
    pg = new player(392,500);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)
    
    scene.add.text(210,60,"WELCOME TO AVOID", { fontFamily: 'Audiowide',fontSize: '32px' })
    scene.add.text(90,150,"           Just use the arrows keys or W A S D to move\n           The Goal is reach the green zone in each level" + 
        "\n        Also, try to avoid whatever the heck comes at you\nActually you have to, because you'd die otherwhise, y'know?", { fontFamily: 'Audiowide',fontSize: '18px' })
    scene.add.text(140,270,"    The level you reached is saved by the browser,\n   but you can also you input the level's password\n" +
        "                    to jump to that level", { fontFamily: 'Audiowide',fontSize: '18px' })
    scene.add.text(205,400,"Press SPACE to jump into the action.", { fontFamily: 'Audiowide',fontSize: '18px' })
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

    scene.add.text(90,100,"VICTORY IS YOURS", { fontFamily: 'Audiowide' , fontSize: '58px' })
    scene.add.text(95,200,"Press SPACE to advance to the next level", { fontFamily: 'Audiowide' , fontSize: '26px' })

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

    scene.add.text(240,100,"YOU DIED", { fontFamily: 'Audiowide',fontSize: '58px' })
    scene.add.text(290,200,"Respawning in:", { fontFamily: 'Audiowide',fontSize: '26px' })
    deathText3 = scene.add.text(385,240," ",{ fontFamily: 'Audiowide',fontSize: '26px' })
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


function preloadLevel1(){
    this.load.audio('theme1', ['ost/1 - City of Backstreet.ogg',]);
}

function createLevel1(){

    thisLevelPass.textContent = "VV292Y"
    levelName.textContent = "Cannons!"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,DOWN,LEFT,RIGHT,UP,SPACE');
    gamepad = this.input.gamepad.gamepads
    pg = new player(392,700);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)
    if(music1 == undefined){
        music1 = this.sound.add('theme1')
        music1.volume = volumeSlider.value / 100
        music1.play({loop: true});
        this.scene.restart()
    }
    
    let cannon1 = new cannon(16,200,0.5,200,[1,0])
    let cannon2 = new cannon(768,300,0.5,200,[-1,0])
    let cannon3 = new cannon(16,400,0.5,200,[1,0])
    let cannon4 = new cannon(768,500,0.5,200,[-1,0])

    let finish = new goal(16,16,768,40)
}

function preloadLevel2(){
    this.load.audio('theme1', ['ost/1 - City of Backstreet.ogg',]);
}

function createLevel2(){

    thisLevelPass.textContent = "Q4UJE6"
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
    if(music1 == undefined){
        music1 = this.sound.add('theme1')
        music1.volume = volumeSlider.value / 100 
        music1.play({loop: true});
        this.scene.restart()
    }

    let cannon1 = new cannon(16,200,0.75,200,[1,0])
    let cannon2 = new cannon(16,200 + PU + 4,0.75,200,[1,0])
    let cannon3 = new cannon(16,200 + PU * 2 + 8,0.75,200,[1,0])
    let cannon4 = new cannon(768,500 + PU + 4,0.75,200,[-1,0])
    let cannon5 = new cannon(768,500 + PU * 2 + 8,0.75,200,[-1,0])
    let cannon6 = new cannon(768,500,0.75,200,[-1,0])
    let cannon7 = new cannon(392,16,0.35,200,[0,1])

    let finish = new goal(650,16,134,50)
}

function preloadLevel3(){
    this.load.audio('theme1', ['ost/1 - City of Backstreet.ogg',]);
}

function createLevel3(){

    thisLevelPass.textContent = "8KPMLN"
    levelName.textContent = "The Storm!"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,DOWN,LEFT,RIGHT,UP');
    gamepad = this.input.gamepad.gamepads
    pg = new player(40,720);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)
    if(music1 == undefined){
        music1 = this.sound.add('theme1')
        music1.volume = volumeSlider.value / 100 
        music1.play({loop: true});
        this.scene.restart()
    }

    let wall1 = new wall(80,500,630,284)

    for(let i = 0; i<20; i++){
        let cannon0 = new cannon(90 + i * 32,16,generateRandomInRange(0.75,1.5),generateRandomIntegerInRange(100,400),[0,1])
    }

    let finish = new goal(710,750,74,34)
}

function preloadLevel4(){
    this.load.audio('theme1', ['ost/1 - City of Backstreet.ogg',]);
}

function createLevel4(){

    thisLevelPass.textContent = "HRPH2P"
    levelName.textContent = "Laserzzzzzz!"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,DOWN,LEFT,RIGHT,UP');
    gamepad = this.input.gamepad.gamepads
    pg = new player(392,50);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)
    if(music1 == undefined){
        music1 = this.sound.add('theme1')
        music1.volume = volumeSlider.value / 100 
        music1.play({loop: true});
        this.scene.restart()
    }

    let laser1 = new nonnoLaser(16,200,1.5,0.5,[1,0])
    let laser2 = new nonnoLaser(768,300,1.5,0.75,[-1,0])
    let laser3 = new nonnoLaser(16,400,1.5,1,[1,0])
    let laser4 = new nonnoLaser(768,500,1.5,1.25,[-1,0])
    let laser5 = new nonnoLaser(16,600,1.5,1.5,[1,0])

    let finish = new goal(16,750,768,34)    
}

function preloadLevel5(){
    this.load.audio('theme1', ['ost/1 - City of Backstreet.ogg',]);
}

function createLevel5(){

    thisLevelPass.textContent = "PG7P5H"
    levelName.textContent = "Cannons AND Lasers together strong!"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,DOWN,LEFT,RIGHT,UP');
    gamepad = this.input.gamepad.gamepads
    pg = new player(330,575);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)
    if(music1 == undefined){
        music1 = this.sound.add('theme1')
        music1.volume = volumeSlider.value / 100 
        music1.play({loop: true});
        this.scene.restart()
    }

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

function preloadLevel6(){
    this.load.audio('theme1', ['ost/1 - City of Backstreet.ogg',]);
}

function createLevel6(){

    thisLevelPass.textContent = "6EVN95"
    levelName.textContent = "Against The Current"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,DOWN,LEFT,RIGHT,UP');
    gamepad = this.input.gamepad.gamepads
    pg = new player(75,67);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)
    if(music1 == undefined){
        music1 = this.sound.add('theme1')
        music1.volume = volumeSlider.value / 100 
        music1.play({loop: true});
        this.scene.restart()
    }

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

function preloadLevel7(){
    this.load.audio('theme1', ['ost/1 - City of Backstreet.ogg',]);
}

function createLevel7(){

    thisLevelPass.textContent = "569Q8Y"
    levelName.textContent = "Against Each Other"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,DOWN,LEFT,RIGHT,UP');
    gamepad = this.input.gamepad.gamepads
    pg = new player(60,730);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)
    if(music1 == undefined){
        music1 = this.sound.add('theme1')
        music1.volume = volumeSlider.value / 100 
        music1.play({loop: true});
        this.scene.restart()
    }

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
    //let cannon10 = new cannon(150,280,0.6,150,[1,0])
    //let cannon11 = new cannon(634,270,0.6,150,[-1,0])

    let cannon12 = new cannon(150,200,0.6,250,[1,0])
    let cannon13 = new cannon(634,200,0.6,250,[-1,0])

    let laser1 = new nonnoLaser(392,16,12,3,[0,1],30)

    let finish = new goal(750,16,34,100)
}

function preloadLevel8(){
    this.load.audio('theme1', ['ost/1 - City of Backstreet.ogg',]);
}

function createLevel8(){

    thisLevelPass.textContent = "8TL79Q"
    levelName.textContent = "Tracking Cannons!"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,DOWN,LEFT,RIGHT,UP');
    gamepad = this.input.gamepad.gamepads
    pg = new player(250,66);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)
    if(music1 == undefined){
        music1 = this.sound.add('theme1')
        music1.volume = volumeSlider.value / 100 
        music1.play({loop: true});
        this.scene.restart()
    }

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

function preloadLevel9(){
    this.load.audio('theme1', ['ost/1 - City of Backstreet.ogg',]);
}

function createLevel9(){

    thisLevelPass.textContent = "86TH7J"
    levelName.textContent = "Against The Lasers"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,DOWN,LEFT,RIGHT,UP');
    gamepad = this.input.gamepad.gamepads
    pg = new player(24,740)   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)
    if(music1 == undefined){
        music1 = this.sound.add('theme1')
        music1.volume = volumeSlider.value / 100 
        music1.play({loop: true});
        this.scene.restart()
    }
    
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

    let laser3 = new nonnoLaser(384,200,3.3,1.7,[1,0])
    let laser4 = new nonnoLaser(384,320,2.6,2.4,[1,0])
    let laser5 = new nonnoLaser(384,440,1.9,3.1,[1,0])
    let laser6 = new nonnoLaser(384,560,1.2,3.8,[1,0])

    let Tcannon1 = new trackingCannon(384,160,0.4,150)
    let Tcannon2 = new trackingCannon(384,280,0.4,150)
    let Tcannon4 = new trackingCannon(384,400,0.4,150)
    let Tcannon5 = new trackingCannon(384,520,0.4,150)

    let finish = new goal(534,16,106,30)
}

function preloadLevel10(){
    this.load.audio('theme1', ['ost/1 - City of Backstreet.ogg',]);
}

function createLevel10(){

    thisLevelPass.textContent = "3QUT4N"
    levelName.textContent = "Storm and Thunder!"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,DOWN,LEFT,RIGHT,UP');
    gamepad = this.input.gamepad.gamepads
    pg = new player(40,720);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)
    if(music1 == undefined){
        music1 = this.sound.add('theme1')
        music1.volume = volumeSlider.value / 100 
        music1.play({loop: true});
        this.scene.restart()
    }

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

function preloadLevel11(){
    this.load.audio('theme2', ['ost/2 - Joker Dance.ogg',]);
}

function createLevel11(){

    thisLevelPass.textContent = "TVVQ2Q"
    levelName.textContent = "RUN"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,DOWN,LEFT,RIGHT,UP');
    gamepad = this.input.gamepad.gamepads
    pg = new player(100,200);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)
    if(music1 != undefined){
        music1.stop()
        music1 = undefined
    }
    if(music2 == undefined){
        music2 = this.sound.add('theme2') 
        music2.volume = volumeSlider.value / 100
        music2.play({loop: true});
        this.scene.restart()
    }

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

function preloadLevel12(){
    this.load.audio('theme2', ['ost/2 - Joker Dance.ogg',]);
}

function createLevel12(){

    thisLevelPass.textContent = "VQ4L3E"
    levelName.textContent = "They can do that?"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,DOWN,LEFT,RIGHT,UP');
    gamepad = this.input.gamepad.gamepads
    pg = new player(392,720);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)
    if(music2 == undefined){
        music2 = this.sound.add('theme2')
        music2.volume = volumeSlider.value / 100 
        music2.play({loop: true});
        this.scene.restart()
    }

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

function preloadLevel13(){
    this.load.audio('theme2', ['ost/2 - Joker Dance.ogg',]);
}

function createLevel13(){

    thisLevelPass.textContent = "7V53SK"
    levelName.textContent = "Bouncy Balls (they're kinda " + '"'+"squary"+'"'+" tho)"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,DOWN,LEFT,RIGHT,UP');
    gamepad = this.input.gamepad.gamepads
    pg = new player(50,750);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)
    if(music2 == undefined){
        music2 = this.sound.add('theme2')
        music2.volume = volumeSlider.value / 100 
        music2.play({loop: true});
        this.scene.restart()
    }

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

function preloadLevel14(){
    this.load.audio('theme2', ['ost/2 - Joker Dance.ogg',]);
}

function createLevel14(){

    thisLevelPass.textContent = "RJ6RLL"
    levelName.textContent = "You thought you got away with it didn't you?"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,DOWN,LEFT,RIGHT,UP');
    gamepad = this.input.gamepad.gamepads
    pg = new player(392,720);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)
    if(music2 == undefined){
        music2 = this.sound.add('theme2')
        music2.volume = volumeSlider.value / 100 
        music2.play({loop: true});
        this.scene.restart()
    }

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

function preloadLevel15(){
    this.load.audio('theme2', ['ost/2 - Joker Dance.ogg',]);
}

function createLevel15(){

    thisLevelPass.textContent = "2RQV22"
    levelName.textContent = "That's one crazy boi"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,DOWN,LEFT,RIGHT,UP');
    gamepad = this.input.gamepad.gamepads
    pg = new player(60,60);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)
    if(music2 == undefined){
        music2 = this.sound.add('theme2')
        music2.volume = volumeSlider.value / 100 
        music2.play({loop: true});
        this.scene.restart()
    }

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

function preloadLevel16(){
    this.load.audio('theme2', ['ost/2 - Joker Dance.ogg',]);
}

function createLevel16(){

    thisLevelPass.textContent = "964E8M"
    levelName.textContent = "Comfy Room with deadly balls and cannons"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,DOWN,LEFT,RIGHT,UP');
    gamepad = this.input.gamepad.gamepads
    pg = new player(50,200);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)
    if(music2 == undefined){
        music2 = this.sound.add('theme2')
        music2.volume = volumeSlider.value / 100 
        music2.play({loop: true});
        this.scene.restart()
    }

    let wall0 = new wall(100,66,50,752)
    let wall1 = new wall(650,16,50,718)
    let barrier0 = new barrier(130,16,20,50)
    let barrier1 = new barrier(650,734,20,50)

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

function preloadLevel17(){
    this.load.audio('theme2', ['ost/2 - Joker Dance.ogg',]);
}

function createLevel17(){

    thisLevelPass.textContent = "87GNVF"
    levelName.textContent = "3 Bros"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,DOWN,LEFT,RIGHT,UP');
    gamepad = this.input.gamepad.gamepads
    pg = new player(320,86);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)
    if(music2 == undefined){
        music2 = this.sound.add('theme2')
        music2.volume = volumeSlider.value / 100 
        music2.play({loop: true});
        this.scene.restart()
    }

    let wall0 = new wall(380,16,40,200)
    let wall1 = new wall(200,200,400,400)

    let tcannon0 = new trackingCannon(184,392,1,300)
    let tcannon1 = new trackingCannon(392,600,1,300)
    let pcannon1 = new predictingCannon(600,392,0.8,320)

    let finish = new goal(420,16,30,184)
}

function preloadLevel18(){
    this.load.audio('theme2', ['ost/2 - Joker Dance.ogg',]);
}

function createLevel18(){

    thisLevelPass.textContent = "HVL7LC"
    levelName.textContent = "The Corridor"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,DOWN,LEFT,RIGHT,UP');
    gamepad = this.input.gamepad.gamepads
    pg = new player(392,760);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)
    if(music2 == undefined){
        music2 = this.sound.add('theme2')
        music2.volume = volumeSlider.value / 100 
        music2.play({loop: true});
        this.scene.restart()
    }

    let wall0 = new wall(16,16,334,768)
    let wall1 = new wall(450,16,334,768)

    let ball0 = new ball(350,50,[1,1])
    let ball1 = new ball(430,100,[-1,1])
    let ball2 = new ball(350,350,[1,1])
    let ball3 = new ball(430,375,[-1,1])

    let finish = new goal(350,16,100,30)
}

function preloadLevel19(){
    this.load.audio('theme2', ['ost/2 - Joker Dance.ogg',]);
}

function createLevel19(){

    thisLevelPass.textContent = "U256TV"
    levelName.textContent = "the Sniper"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,DOWN,LEFT,RIGHT,UP');
    gamepad = this.input.gamepad.gamepads
    pg = new player(200,750);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)
    if(music2 == undefined){
        music2 = this.sound.add('theme2')
        music2.volume = volumeSlider.value / 100 
        music2.play({loop: true});
        this.scene.restart()
    }

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

function preloadLevel20(){
    this.load.audio('theme2', ['ost/2 - Joker Dance.ogg',]);
}

function createLevel20(){

    thisLevelPass.textContent = "2NY2EW"
    levelName.textContent = "Oh no, who's that?"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,DOWN,LEFT,RIGHT,UP,SPACE');
    gamepad = this.input.gamepad.gamepads
    pg = new player(392,350);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)
    if(music2 == undefined){
        music2 = this.sound.add('theme2')
        music2.volume = volumeSlider.value / 100 
        music2.play({loop: true});
        this.scene.restart()
    }

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

function preloadLevel21(){
    this.load.audio('theme3', ['ost/3 - Moonlight Land.ogg',]);
}

function createLevel21(){

    thisLevelPass.textContent = "JBMF8J"
    levelName.textContent = "Cross the River"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,DOWN,LEFT,RIGHT,UP,SPACE');
    gamepad = this.input.gamepad.gamepads
    pg = new player(30,750);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)
    if(music2 != undefined){
        music2.stop()
        music2 = undefined
    }
    if(music3 == undefined){
        music3 = this.sound.add('theme3') 
        music3.volume = volumeSlider.value / 100
        music3.play({loop: true});
        this.scene.restart()
    }

    for (let i = 0; i<34; i++){
        let cannon0 = new cannon(16 , 80 + i*18 ,generateRandomInRange(2,4),generateRandomIntegerInRange(50,100),[1,0])
    }

    let stalker0 = new stalker(392,500)
    stalker0.speed = playerSpeed

    let finish = new goal(700,16,84,40)

    grid = new nodeGrid(gridNodeSize)
}

function preloadLevel22(){
    this.load.audio('theme3', ['ost/3 - Moonlight Land.ogg',]);
}

function createLevel22(){

    thisLevelPass.textContent = "U3QM4M"
    levelName.textContent = "Hide in the Smoke!"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,DOWN,LEFT,RIGHT,UP,SPACE');
    gamepad = this.input.gamepad.gamepads
    pg = new player(40,300);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)
    if(music3 == undefined){
        music3 = this.sound.add('theme3')
        music3.volume = volumeSlider.value / 100 
        music3.play({loop: true});
        this.scene.restart()
    }

    let wall0 = new wall(48,16,768,48)
    let wall1 = new wall(16,752,768,32)
    let wall2 = new wall(16,384,600,48)

    let laser0 = new nonnoLaser(208,368,2,4,[0,-1])
    let laser1 = new nonnoLaser(233,368,2,4,[0,-1])
    let laser2 = new nonnoLaser(464,64,2,4,[0,1])
    let laser3 = new nonnoLaser(489,64,2,4,[0,1])
    let laser4 = new nonnoLaser(208,736,2,4,[0,-1])
    let laser5 = new nonnoLaser(233,736,2,4,[0,-1])
    let laser6 = new nonnoLaser(464,432,2,4,[0,1])
    let laser7 = new nonnoLaser(489,432,2,4,[0,1])

    let ball0 = new ball(generateRandomIntegerInRange(650,750),generateRandomIntegerInRange(64,140),[-1,1])
    let ball1 = new ball(generateRandomIntegerInRange(650,750),generateRandomIntegerInRange(150,240),[-1,1])
    let ball5 = new ball(generateRandomIntegerInRange(650,750),generateRandomIntegerInRange(250,340),[-1,1])
    let ball2 = new ball(generateRandomIntegerInRange(650,750),generateRandomIntegerInRange(400,490),[-1,1])
    let ball3 = new ball(generateRandomIntegerInRange(650,750),generateRandomIntegerInRange(500,590),[-1,1])
    let ball6 = new ball(generateRandomIntegerInRange(650,750),generateRandomIntegerInRange(600,690),[-1,1])

    let smoke0 = new smoke(PU * 8,PU*21,PU*4,PU*3)
    let smoke1 = new smoke(PU*18,PU*11,PU*3,PU*5)
    let smoke2 = new smoke(PU*43,PU*43,PU*6,PU*4)

    let stalker0 = new stalker(25,20)
    stalker0.speed = playerSpeed * 0.9

    let finish = new goal(PU,432,PU*3,PU*20)

    grid = new nodeGrid(gridNodeSize)
}

function preloadLevel23(){
    this.load.audio('theme3', ['ost/3 - Moonlight Land.ogg',]);
}

function createLevel23(){

    thisLevelPass.textContent = "G4V9P8"
    levelName.textContent = "The Storm has it against you"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,DOWN,LEFT,RIGHT,UP,SPACE');
    gamepad = this.input.gamepad.gamepads
    pg = new player(40,750);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)
    if(music3 == undefined){
        music3 = this.sound.add('theme3')
        music3.volume = volumeSlider.value / 100 
        music3.play({loop: true});
        this.scene.restart()
    }

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

function preloadLevel24(){
    this.load.audio('theme3', ['ost/3 - Moonlight Land.ogg',]);
}

function createLevel24(){

    thisLevelPass.textContent = "PL4CSR"
    levelName.textContent = "Mines!"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,DOWN,LEFT,RIGHT,UP,SPACE');
    gamepad = this.input.gamepad.gamepads
    pg = new player(750,300);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)
    if(music3 == undefined){
        music3 = this.sound.add('theme3')
        music3.volume = volumeSlider.value / 100 
        music3.play({loop: true});
        this.scene.restart()
    }

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

function preloadLevel25(){
    this.load.audio('theme3', ['ost/3 - Moonlight Land.ogg',]);
}

function createLevel25(){

    thisLevelPass.textContent = "Y44FR9"
    levelName.textContent = "The Field"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,DOWN,LEFT,RIGHT,UP,SPACE');
    gamepad = this.input.gamepad.gamepads
    pg = new player(734,30);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)
    if(music3 == undefined){
        music3 = this.sound.add('theme3')
        music3.volume = volumeSlider.value / 100 
        music3.play({loop: true});
        this.scene.restart()
    }

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

function preloadLevel26(){
    this.load.audio('theme3', ['ost/3 - Moonlight Land.ogg',]);
}

function createLevel26(){

    thisLevelPass.textContent = "2Y65Y9"
    levelName.textContent = "The Smoke Can Hide Other Things Too"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,DOWN,LEFT,RIGHT,UP,SPACE');
    gamepad = this.input.gamepad.gamepads
    pg = new player(685,85);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)
    if(music3 == undefined){
        music3 = this.sound.add('theme3')
        music3.volume = volumeSlider.value / 100 
        music3.play({loop: true});
        this.scene.restart()
    }

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

function preloadLevel27(){
    this.load.audio('theme3', ['ost/3 - Moonlight Land.ogg',]);
}

function createLevel27(){

    thisLevelPass.textContent = "QG29N9"
    levelName.textContent = "The Spinny Bois are here!"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,DOWN,LEFT,RIGHT,UP,SPACE');
    gamepad = this.input.gamepad.gamepads
    pg = new player(50,450);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)
    if(music3 == undefined){
        music3 = this.sound.add('theme3')
        music3.volume = volumeSlider.value / 100 
        music3.play({loop: true});
        this.scene.restart()
    }

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

function preloadLevel28(){
    this.load.audio('theme3', ['ost/3 - Moonlight Land.ogg',]);
}

function createLevel28(){

    thisLevelPass.textContent = "5S2KPN"
    levelName.textContent = "Can You Fit?"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,DOWN,LEFT,RIGHT,UP,SPACE');
    gamepad = this.input.gamepad.gamepads
    pg = new player(80,120);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)
    if(music3 == undefined){
        music3 = this.sound.add('theme3')
        music3.volume = volumeSlider.value / 100 
        music3.play({loop: true});
        this.scene.restart()
    }

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

function preloadLevel29(){
    this.load.audio('theme3', ['ost/3 - Moonlight Land.ogg',]);
}

function createLevel29(){

    thisLevelPass.textContent = "N9PLL4"
    levelName.textContent = "Double Spinning?"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,DOWN,LEFT,RIGHT,UP,SPACE');
    gamepad = this.input.gamepad.gamepads
    pg = new player(40,750);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)
    if(music3 == undefined){
        music3 = this.sound.add('theme3')
        music3.volume = volumeSlider.value / 100 
        music3.play({loop: true});
        this.scene.restart()
    }

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

function preloadLevel30(){
    this.load.audio('theme3', ['ost/3 - Moonlight Land.ogg',]);
}

function createLevel30(){

    thisLevelPass.textContent = "EEH5G9"
    levelName.textContent = "Hot Stuff"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,DOWN,LEFT,RIGHT,UP,SPACE');
    gamepad = this.input.gamepad.gamepads
    pg = new player(40,740);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)
    if(music3 == undefined){
        music3 = this.sound.add('theme3')
        music3.volume = volumeSlider.value / 100 
        music3.play({loop: true});
        this.scene.restart()
    }

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

function preloadLevel31(){
    this.load.audio('theme4', ['ost/4 - The Castle of The Dead and The Secret Sword.ogg',]);
}

function createLevel31(){

    thisLevelPass.textContent = "HC8BFM"
    levelName.textContent = "Run, Hot Stuff ;)"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,DOWN,LEFT,RIGHT,UP');
    gamepad = this.input.gamepad.gamepads
    pg = new player(100,200);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)
    if(music3 != undefined){
        music3.stop()
        music3 = undefined
    }
    if(music4 == undefined){
        music4 = this.sound.add('theme4')
        music4.volume = volumeSlider.value / 100 
        music4.play({loop: true});
        this.scene.restart()
    }

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

function preloadLevel32(){
    this.load.audio('theme4', ['ost/4 - The Castle of The Dead and The Secret Sword.ogg',]);
}

function createLevel32(){

    thisLevelPass.textContent = "7RF7JC"
    levelName.textContent = "The Hot Corridor"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,DOWN,LEFT,RIGHT,UP');
    gamepad = this.input.gamepad.gamepads
    pg = new player(357,760);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)
    if(music4 == undefined){
        music4 = this.sound.add('theme4')
        music4.volume = volumeSlider.value / 100  
        music4.play({loop: true});
        this.scene.restart()
    }

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

function preloadLevel33(){
    this.load.audio('theme4', ['ost/4 - The Castle of The Dead and The Secret Sword.ogg',]);
}

function createLevel33(){

    thisLevelPass.textContent = "843KEB"
    levelName.textContent = "Where are you?"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,DOWN,LEFT,RIGHT,UP');
    gamepad = this.input.gamepad.gamepads
    pg = new player(30,730);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)
    if(music4 == undefined){
        music4 = this.sound.add('theme4')
        music4.volume = volumeSlider.value / 100  
        music4.play({loop: true});
        this.scene.restart()
    }

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

function preloadLevel34(){
    this.load.audio('theme4', ['ost/4 - The Castle of The Dead and The Secret Sword.ogg',]);
}

function createLevel34(){

    thisLevelPass.textContent = "QBCR3M"
    levelName.textContent = "Time To Step Up"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,Z,DOWN,SHIFT,LEFT,RIGHT,UP');
    gamepad = this.input.gamepad.gamepads
    pg = new player(175,600);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)
    if(music4 == undefined){
        music4 = this.sound.add('theme4')
        music4.volume = volumeSlider.value / 100  
        music4.play({loop: true});
        this.scene.restart()
    }

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

function preloadLevel35(){
    this.load.audio('theme4', ['ost/4 - The Castle of The Dead and The Secret Sword.ogg',]);
}

function createLevel35(){

    thisLevelPass.textContent = "2FP9E9"
    levelName.textContent = "Dash or Kaboom"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,Z,DOWN,Z,SHIFT,LEFT,RIGHT,UP');
    gamepad = this.input.gamepad.gamepads
    pg = new player(100,150,true);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)
    if(music4 == undefined){
        music4 = this.sound.add('theme4')
        music4.volume = volumeSlider.value / 100  
        music4.play({loop: true});
        this.scene.restart()
    }

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

function preloadLevel36(){
    this.load.audio('theme4', ['ost/4 - The Castle of The Dead and The Secret Sword.ogg',]);
}

function createLevel36(){

    thisLevelPass.textContent = "635THD"
    levelName.textContent = "He's back"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,SHIFT,Z,DOWN,LEFT,RIGHT,UP');
    gamepad = this.input.gamepad.gamepads
    pg = new player(200,750,true);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)
    if(music4 == undefined){
        music4 = this.sound.add('theme4')
        music4.volume = volumeSlider.value / 100  
        music4.play({loop: true});
        this.scene.restart()
    }

    let wall0 = new wall(100,700,164,20)
    let wall2 = new wall(710,680,20,40)
    let wall7 = new wall(710,80,20,40)
    let wall4 = new wall(80,80,100,20)
    let wall6 = new wall(680,80,30,20)
    let wall8 = new wall(80,100,20,30)
    let wall9 = new wall(80,300,20,16)
    let wall11 = new wall(160,720,20,64)

    let lava0 = new lava(264,705,446,10)
    let lava1 = new lava(715,120,10,560)
    let lava2 = new lava(180,85,500,10)
    let lava3 = new lava(85,130,10,170)
    let lava4 = new lava(85,316,10,399)
    let lava5 = new lava(95,705,5,10)

    let cannon0 = new cannon(16,16,3.8 * 1.5,80,[1,0])
    let cannon1 = new cannon(16,40,2.6 * 1.5,80,[1,0])
    let cannon2 = new cannon(16,64,4.4 * 1.5,80,[1,0])
    let laser0 = new nonnoLaser(16,300,3,1,[1,0])
    let sniper = new predictingCannon(392,392,2,1500,undefined,12)

    let finish = new goal(130,720,30,64)
}

function preloadLevel37(){
    this.load.audio('theme4', ['ost/4 - The Castle of The Dead and The Secret Sword.ogg',]);
}

function createLevel37(){

    thisLevelPass.textContent = "MQ5UD7"
    levelName.textContent = "Fast Boi"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,SHIFT,Z,DOWN,LEFT,RIGHT,UP');
    gamepad = this.input.gamepad.gamepads
    pg = new player(720,720,true);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)
    if(music4 == undefined){
        music4 = this.sound.add('theme4')
        music4.volume = volumeSlider.value / 100  
        music4.play({loop: true});
        this.scene.restart()
    }

    let wall0 = new wall(PU*7,PU*7,PU*6,PU*6)
    let wall6 = new wall(PU*21,PU*7,PU*6,PU*6)
    let wall7 = new wall(PU*35,PU*7,PU*6,PU*6)
    let wall2 = new wall(PU*7,PU*21,PU*6,PU*6)
    let wall3 = new wall(PU*21,PU*21,PU*6,PU*6)
    let wall4 = new wall(PU*35,PU*21,PU*6,PU*6)
    let wall5 = new wall(PU*7,PU*35,PU*6,PU*6)
    let wall8 = new wall(PU*21,PU*35,PU*6,PU*6)
    let wall9 = new wall(PU*35,PU*35,PU*6,PU*6)

    let stalker0 = new stalker(PU*17,PU*17)
    stalker0.speed = playerSpeed * 1.75

    grid = new nodeGrid(gridNodeSize)
    let finish = new goal(PU,PU,PU*8,PU*5)
}

function preloadLevel38(){
    this.load.audio('theme4', ['ost/4 - The Castle of The Dead and The Secret Sword.ogg',]);
}

function createLevel38(){

    thisLevelPass.textContent = "N6L9VJ"
    levelName.textContent = "Crowded Corridors"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,SHIFT,Z,DOWN,LEFT,RIGHT,UP');
    gamepad = this.input.gamepad.gamepads
    pg = new player(100,392,true);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)
    if(music4 == undefined){
        music4 = this.sound.add('theme4')
        music4.volume = volumeSlider.value / 100  
        music4.play({loop: true});
        this.scene.restart()
    }

    let wall0 = new wall(200,16,60,380)
    let barrier0 = new barrier(240,396,20,20)
    let wall1 = new wall(200,416,60,384)
    let wall2 = new wall(350,16,60,514)
    let barrier1 = new barrier(350,530,20,20)
    let barrier3 = new barrier(390,530,20,20)
    let wall3 = new wall(350,550,60,384)
    let wall4 = new wall(510,16,60,334)
    let barrier2 = new barrier(510,352,20,20)
    let wall5 = new wall(510,372,60,434)


    for(let i=0 ; i<14; i++){
        if(i<6){
            let ball0 = new ball(generateRandomIntegerInRange(260,320),50 + i*50,[-1,1])
        }else{
            let ball0 = new ball(generateRandomIntegerInRange(260,320),350 + (i-6)*50,[1,1])
        }
    }

    for(let i=0 ; i<13; i++){
        if(i<6){
            let ball0 = new ball(generateRandomIntegerInRange(420,490),50 + i*50,[1,1])
        }else{
            let ball0 = new ball(generateRandomIntegerInRange(420,490),350 + (i-6)*50,[-1,1])
        }
    }

    let finish = new goal(750,300,34,200)
}

let smokeArray39 = []

function preloadLevel39(){
    this.load.audio('theme4', ['ost/4 - The Castle of The Dead and The Secret Sword.ogg',]);
}

function createLevel39(){

    thisLevelPass.textContent = "LB3JTF"
    levelName.textContent = "Post-Apocalyptic Storm"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,SHIFT,Z,DOWN,LEFT,RIGHT,UP');
    gamepad = this.input.gamepad.gamepads
    pg = new player(40,720,true);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION , wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)
    if(music4 == undefined){
        music4 = this.sound.add('theme4')
        music4.volume = volumeSlider.value / 100  
        music4.play({loop: true});
        this.scene.restart()
    }

    let wall1 = new lava(80,500,630,284)

    for(let i = 0; i<20; i++){

        if(Math.random() < 0.75){
            let cannone0 = new cannon(90 + i * 32,16,generateRandomInRange(0.75,1.5),generateRandomIntegerInRange(100,400),[0,1])
        }else{
            let laser0 = new nonnoLaser(90 + i* 32, 16,generateRandomInRange(1.5,3),0.2,[0,1])
        }
    }

    for(let i=0; i<10; i++){
        
        let newSmoke = new smoke(100 + i*60,generateRandomIntegerInRange(100,300),generateRandomIntegerInRange(40,60),generateRandomIntegerInRange(30,50))
        let newSmoke2 = new smoke(100 + i*60,generateRandomIntegerInRange(300,500),generateRandomIntegerInRange(40,60),generateRandomIntegerInRange(40,60))
        let newSmoke3 = new smoke(100 + i*60,generateRandomIntegerInRange(500,700),generateRandomIntegerInRange(40,60),generateRandomIntegerInRange(35,55))
        newSmoke.velocity = [0,-1]
        newSmoke.speed = generateRandomIntegerInRange(50,100)
        newSmoke2.velocity = [0,-1]
        newSmoke2.speed = generateRandomIntegerInRange(50,100)
        newSmoke3.velocity = [0,-1]
        newSmoke3.speed = generateRandomIntegerInRange(50,100)
        smokeArray39.push(newSmoke)
        smokeArray39.push(newSmoke2)
        smokeArray39.push(newSmoke3)
    }

    let finish = new goal(710,750,74,34)
}

function updateLevel39(time,delta){

    Delta = delta / 1000
    omniHandler()

    for(let i = 0; i<smokeArray39.length; i++){

        if(smokeArray39[i].y < 33){
            smokeArray39[i].y = generateRandomIntegerInRange(500,700)
        }
        
        smokeArray39[i].move()
    }
}


let bigBoi
let upgrade40
let level40Clock = 0
let upperEdge40
let winText1
let winText2
let winText3
let winText4
let level40Goal

function preloadLevel40(){
    this.load.audio('themeBoss', ['ost/Boss - Space Racing.ogg',]);
}

function createLevel40(){

    thisLevelPass.textContent = "C4WY6J"
    levelName.textContent = "..."      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,SHIFT,Z,DOWN,LEFT,RIGHT,UP,SPACE');
    gamepad = this.input.gamepad.gamepads
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let realUpperEdge = new wall(0 , -500 ,XDIMENSION , wallThickness)
    upperEdge40 = new lava(0,0, XDIMENSION , wallThickness - 1) 
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION)

    if(skipBossIntro == "true"){
        pg = new player(392,720,true,true)
        bigBoi = new Boss()
        bigBoi.moveTo(300,50)
        bigBoi.LHand.moveTo(150,200)
        bigBoi.RHand.moveTo(550,200)
        bigBoi.state = 2
        bigBoi.immune = false
        upperEdge40= new wall(0,0, XDIMENSION , wallThickness - 1)
        bigBoi.healthBar.show()
        
        if(musicBoss != undefined){
            if(!musicBoss.isPlaying)
                musicBoss.play({loop: true})
        }else{
            musicBoss = this.sound.add('themeBoss')
            musicBoss.volume = volumeSlider.value / 100  
            this.scene.restart()
        }

    }else{
        pg = new player(392,720,true)
        upgrade40 = new upgrade(396,396,"pewpew")
        bigBoi = new Boss()
    }

    if(music4 != undefined){
        music4.stop()
        music4 = undefined
    }
    if(musicBoss == undefined){
        musicBoss = this.sound.add('themeBoss')
        musicBoss.volume = volumeSlider.value / 100  
        this.scene.restart()
    }

    level40Goal = new goal(400,1200,100,50)

    winText1 = this.add.text(265,900,"WOW! YOU DID IT!", { fontFamily: 'Audiowide',fontSize : '32px' })
    winText2 = this.add.text(190,900,"That really was something, congratulations.\n", { fontFamily: 'Audiowide',fontSize : '20px' })
    winText3 = this.add.text(175,900,"Well the game is done, hope you had fun!", { fontFamily: 'Audiowide',fontSize : '20px' })
    winText4 = this.add.text(120,900,"EXCEPT IT ISN'T! There are some bonus levels just\n for you! Please try to contain your excitement.", { fontFamily: 'Audiowide',fontSize : '20px' })

    level40Clock = 0
    level40Clock2 = 0
}

let doItOnce = true
let doItOnce2 = true
let doItOnce3 = true
let level40Clock2 =0

function updateLevel40(time,delta){

    Delta = delta / 1000
    omniHandler()

    if(upgrade40 != undefined){
        if(upgrade40.done == false){

            level40Clock += Delta

            if(upgrade40.taken){

                if(doItOnce2){
                    level40Clock = 0
                    doItOnce2 = false
                }

                if(level40Clock > 2 && doItOnce){
                    bigBoi.state = 1
                    doItOnce = false
                }

                if(level40Clock > 10 && doItOnce3){
                    upperEdge40= new wall(0,0, XDIMENSION , wallThickness - 1)
                    doItOnce3 = false
                    skipBossIntro = "true"
                    localStorage["skipBoi"] = "true"
                }
            }
        }
    }

    if(bigBoi.dead == true ){

        level40Clock2 += Delta

        if(level40Clock2 > 4){
            winText1.x = 240
            winText1.y = 120
            if(musicBoss.isPlaying)
                musicBoss.stop()
        }
        if(level40Clock2 > 6.5){
            winText2.x = 160
            winText2.y = 220
        }
        if(level40Clock2 > 9.5){
            winText3.x = 175
            winText3.y = 280
        }
        if(level40Clock2 > 13){
            winText4.x = 120
            winText4.y = 340
        }
        if(level40Clock2 > 16){
            level40Goal.moveTo(350,16)
        }
    }
}



function preloadLevel41(){
    this.load.audio('theme4', ['ost/4 - The Castle of The Dead and The Secret Sword.ogg',]);
}

function createLevel41(){

    thisLevelPass.textContent = "CHAY87"
    levelName.textContent = "The Grid"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,SHIFT,Z,DOWN,LEFT,RIGHT,UP');
    gamepad = this.input.gamepad.gamepads
    pg = new player(16,16,true);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION *3, wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION*3)
    if(musicBoss != undefined){
        musicBoss.stop()
        musicBoss = undefined
    }
    if(music4 == undefined){
        music4 = this.sound.add('theme4')
        music4.volume = volumeSlider.value / 100  
        music4.play({loop: true});
        this.scene.restart()
    }

    for(let i=0; i<16; i++){

        let cannon0 = new cannon(PU,PU*3 + i*PU*3,1,150,[1,0])
        let cannon1 = new cannon(PU*3 + i*PU*3,PU,1,150,[0,1])

        if( i == 7 ){
            let cannon2 = new cannon(PU,PU*3 + i*PU*3,1,150,[1,-1])
            let cannon3 = new cannon(PU*3 + i*PU*3,PU,1,150,[-1,1])
            let cannon4 = new cannon(PU*3 + i*PU*3,768,1,150,[1,-1])
            let cannon5 = new cannon(768,PU*3 + i*PU*3,1,150,[-1,1])
        }
        if( i == 15 ){
            let cannon2 = new cannon(PU,PU*3 + i*PU*3,1,150,[1,-1])
            let cannon3 = new cannon(PU*3 + i*PU*3,PU,1,150,[-1,1])
        }
    }

    let finish = new goal(740,740,44,44)
}

function preloadLevel42(){
    this.load.audio('theme4', ['ost/4 - The Castle of The Dead and The Secret Sword.ogg',]);
}

function createLevel42(){

    thisLevelPass.textContent = "89KI4V"
    levelName.textContent = "The Box"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,SHIFT,Z,X,DOWN,LEFT,RIGHT,UP');
    gamepad = this.input.gamepad.gamepads
    pg = new player(350,50,true);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION *3, wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION*3)
    if(music4 == undefined){
        music4 = this.sound.add('theme4')
        music4.volume = volumeSlider.value / 100  
        music4.play({loop: true});
        this.scene.restart()
    }

    let wall0 = new wall(16,100,375,50)
    let wall1 = new wall(425,16,376,134)
    let wall2 = new wall(425,650,376,50)
    let wall3 = new wall(16,650,375,134)
    let wall4 = new wall(16,150,84,500)
    let wall5 = new wall(700,150,84,500)
    
    let barrier0 = new barrier(375+16,130,50,20)
    let barrier1 = new barrier(375+16,650,50,20)

    

    for(let i = 0; i<35; i++){
        
        let dice = generateRandomIntegerInRange(1,4)

        if(dice == 1){
            let ball0 = new ball(generateRandomIntegerInRange(110,670),generateRandomIntegerInRange(160,620),[1,1])
        }else if(dice == 2){
            let ball0 = new ball(generateRandomIntegerInRange(110,670),generateRandomIntegerInRange(160,620),[-1,1])
        }else if(dice == 3){
            let ball0 = new ball(generateRandomIntegerInRange(110,670),generateRandomIntegerInRange(160,620),[1,-1])
        }else{
            let ball0 = new ball(generateRandomIntegerInRange(110,670),generateRandomIntegerInRange(160,620),[-1,-1])
        }        
    }

    let finish = new goal(750,700,34,84)
}

function preloadLevel43(){
    this.load.audio('theme4', ['ost/4 - The Castle of The Dead and The Secret Sword.ogg',]);
}

function createLevel43(){

    thisLevelPass.textContent = "QG5KPJ"
    levelName.textContent = "The Spiral"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,SHIFT,Z,DOWN,LEFT,RIGHT,UP');
    gamepad = this.input.gamepad.gamepads
    pg = new player(392,760,true);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION *3, wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION*3)
    if(music4 == undefined){
        music4 = this.sound.add('theme4')
        music4.volume = volumeSlider.value / 100  
        music4.play({loop: true});
        this.scene.restart()
    }

    let wall0 = new wall(350,750,100,4)

    let superSpinnyBoi = new spinnyBoi(392,392,0.05,60)

    for ( let i = 0; i<6; i++){

        if( i % 2 == 0 ){

            let track0 = new trackingCannon(16,100 + i*100 , 2 , 200)
            let prect0 = new predictingCannon(768,100 + i * 100 , 2 , 200)
        }else{

            let track0 = new trackingCannon(768,100 + i*100 , 2 , 200)
            let prect0 = new predictingCannon(16,100 + i * 100 , 2 , 200)
        }
    }

    let finish = new goal(370,250,60,30)
}

let level44Clock = 0

function preloadLevel44(){
    this.load.audio('theme4', ['ost/4 - The Castle of The Dead and The Secret Sword.ogg',]);
}

function createLevel44(){

    thisLevelPass.textContent = "7FRCNM"
    levelName.textContent = "The Fireworks"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,SHIFT,Z,DOWN,LEFT,RIGHT,UP');
    gamepad = this.input.gamepad.gamepads
    pg = new player(740,760,true);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION *3, wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION*3)
    if(music4 == undefined){
        music4 = this.sound.add('theme4')
        music4.volume = volumeSlider.value / 100  
        music4.play({loop: true});
        this.scene.restart()
    }

    let wall0 = new wall(16,700,700,100)
    let wall1 = new wall(100,16,784,40)

    let finish = new goal(16,16,84,40)
}

function updateLevel44(time,delta){

    Delta = delta / 1000
    omniHandler()

    level44Clock += Delta

    if(level44Clock > 0.05){

        let mine1 = new mine(generateRandomInRange(20,760),generateRandomIntegerInRange(60,680),2)
        mine1.triggered = true
        level44Clock = 0
    }
}

function preloadLevel45(){
    this.load.audio('theme4', ['ost/4 - The Castle of The Dead and The Secret Sword.ogg',]);
}

function createLevel45(){

    thisLevelPass.textContent = "PX4588"
    levelName.textContent = "The Rising Volcano"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,SHIFT,Z,DOWN,LEFT,RIGHT,UP');
    gamepad = this.input.gamepad.gamepads
    pg = new player(750,660,true);   
    let upperEdge = new wall(0,0, XDIMENSION *3, wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION*3)
    if(music4 == undefined){
        music4 = this.sound.add('theme4')
        music4.volume = volumeSlider.value / 100  
        music4.play({loop: true});
        this.scene.restart()
    }

    let lava0 = new lava(16,790,768,800)
    lava0.speed = 50
    lava0.velocity = [0,-1]
    let lava1 = new lava(PU , PU*3 , PU*28 , PU*2)
    let lava2 = new lava(PU*6 , PU*11 , PU*28 , PU*2)
    let lava3 = new lava(PU*33 , PU , PU*12 , PU*4)
    let lava4 = new lava(PU*6 , PU*11 , PU*3 , PU*24)
    let lava6 = new lava(PU*13, PU*7 , PU*35 , PU*2)
    let lava8 = new lava(PU*20 , PU*27 , PU*29 , PU*2)
    let lava9 = new lava(PU*24 , PU*38 , PU*25 , PU*2)
    let lava10 = new lava(PU*8 , PU*32 , PU*30 , PU*3)
    let lava12 = new lava(PU*42 , PU*33 , PU*7 , PU*3)
    let lava7 = new lava(PU*11 , PU*20 , PU*24 , PU*4)
    let lava11 = new lava(PU*20 , PU*16 , PU*29 , PU*2)

    let lava13 = new lava(PU , PU*5 , PU , PU*50)
    let lava18 = new lava(PU*4 , PU*7 , PU*2 , PU*6)
    let lava14 = new lava(PU*2 , PU*16 , PU*2 , PU*4)
    let lava15 = new lava(PU*4 , PU*23 , PU , PU*4)
    let lava16 = new lava(PU*2 , PU*30 , PU*2 , PU*3)
    let lava17 = new lava(PU*8 , PU*5 , PU*2 , PU*3)
    
    let finish = new goal(PU,PU,PU*5,PU*2)
}

function preloadLevel46(){
    this.load.audio('theme4', ['ost/4 - The Castle of The Dead and The Secret Sword.ogg',]);
}

function createLevel46(){

    thisLevelPass.textContent = "Q23B8S"
    levelName.textContent = "The Matrix"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,SHIFT,Z,DOWN,LEFT,RIGHT,UP');
    gamepad = this.input.gamepad.gamepads
    pg = new player(16,16,true);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION *3, wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION*3)
    if(music4 == undefined){
        music4 = this.sound.add('theme4')
        music4.volume = volumeSlider.value / 100  
        music4.play({loop: true});
        this.scene.restart()
    }

    let placed = []
    let numberToPlace = 100
    let continua = true

    let wall0 = new wall(PU,PU*3-4,PU/2,4)
    let wall1 = new wall(PU*3-4,PU,4,PU/2)
    let wall2 = new wall(PU*48+8,PU*47-4,PU/2,4)
    let wall3 = new wall(PU*47-4,PU*48+8,4,PU/2)

    while(continua){

        let first = generateRandomIntegerInRange(1,48)
        let second = generateRandomIntegerInRange(1,48)
        let goodToGo = true

        for(let i = 0; i<placed.length; i++){
            if(areArraysEqual(placed[i],[first,second]) || (first >= 47 && second >= 47))
                goodToGo = false
            
            if(first == 1 && second == 1)
                goodToGo = false

            if(first == 1 && second == 2)
                goodToGo = false
            
            if(first == 2 && second == 1)
                goodToGo = false
        }

        if(goodToGo){
            placed.push([first,second])
        }

        if(placed.length == numberToPlace){
            continua = false
        }
    }

    for (let i = 0; i < numberToPlace; i++){

        let dice = generateRandomIntegerInRange(1,4)

        if(dice == 1){
            let laser0 = new nonnoLaser(PU * placed[i][0] , PU * placed[i][1] ,generateRandomInRange(0.5,2),generateRandomInRange(0.5,2),[0,1])
        }else if(dice == 2){
            let laser0 = new nonnoLaser(PU * placed[i][0] , PU * placed[i][1] ,generateRandomInRange(0.5,2),generateRandomInRange(0.5,2),[1,0])
        }else if(dice == 3){
            let laser0 = new nonnoLaser(PU * placed[i][0] , PU * placed[i][1] ,generateRandomInRange(0.5,2),generateRandomInRange(0.5,2),[-1,0])
        }else{
            let laser0 = new nonnoLaser(PU * placed[i][0] , PU * placed[i][1] ,generateRandomInRange(0.5,2),generateRandomInRange(0.5,2),[0,-1])
        }   
    }

    let finish = new goal(PU*47 + PU/2 , PU*47 + PU/2,PU*1.5,PU*1.5)
}

function preloadLevel47(){
    this.load.audio('theme4', ['ost/4 - The Castle of The Dead and The Secret Sword.ogg',]);
}

function createLevel47(){

    thisLevelPass.textContent = "8499PV"
    levelName.textContent = "The Last One"      
    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('W,A,S,D,SHIFT,Z,DOWN,LEFT,RIGHT,UP');
    gamepad = this.input.gamepad.gamepads
    pg = new player(320,750,true);   
    let lowerEdge = new wall(0 , YDIMENSION - wallThickness ,XDIMENSION , wallThickness)
    let upperEdge = new wall(0,0, XDIMENSION *3, wallThickness)
    let rightEdge = new wall(XDIMENSION - wallThickness , 0 , wallThickness , YDIMENSION)
    let leftEdge = new wall(0,0, wallThickness , YDIMENSION*3)
    if(music4 == undefined){
        music4 = this.sound.add('theme4')
        music4.volume = volumeSlider.value / 100  
        music4.play({loop: true});
        this.scene.restart()
    }

    let wall0 = new wall(16,PU*44,PU*22,30)
    let wall1 = new wall(PU*27,PU*44,PU*22,84)
    let wall2 = new wall(PU*25-4,PU*11-4,8,4)
    let lava0 = new lava(PU*17,16,PU*2,688)
    let lava1 = new lava(PU*31,16,PU*2,688)
    let lava2 = new lava(PU*24,PU*11,PU*2,PU*4)
    let barrier0 = new barrier(PU*19 , PU*44 , PU*12,PU)

    let laser0 = new nonnoLaser(PU*20,PU,9,1,[0,1])
    let laser1 = new nonnoLaser(PU*22+4,PU,9,1,[0,1])
    let laser3 = new nonnoLaser(PU*26+12,PU,9,1,[0,1])
    let laser4 = new nonnoLaser(PU*28+16,PU,9,1,[0,1])

    let cannon0 = new cannon(16,PU*43,0.5,200,[1,-1])
    let cannon1 = new cannon(66,PU*43,0.5,200,[1,-1])
    let cannon3 = new cannon(116,PU*43,0.5,200,[1,-1])
    let cannon2 = new cannon(166,PU*43,0.5,200,[1,-1])
    let cannon4 = new cannon(216,PU*43,0.5,200,[1,-1])
    let cannon5 = new cannon(768,PU*43,0.5,200,[-1,-1])
    let cannon6 = new cannon(718,PU*43,0.5,200,[-1,-1])
    let cannon7 = new cannon(668,PU*43,0.5,200,[-1,-1])
    let cannon8 = new cannon(618,PU*43,0.5,200,[-1,-1])
    let cannon9 = new cannon(568,PU*43,0.5,200,[-1,-1])

    let track0 = new trackingCannon(16,300,2,200)
    let track1 = new trackingCannon(768,500,2,200)
    let track2 = new predictingCannon(16,500,2,200)
    let track3 = new predictingCannon(768,300,2,200)
    let spin = new spinnyBoi(PU*24 + 8,PU*8,0.5,200)

    let ball0 = new ball(generateRandomIntegerInRange(PU*3,PU*8),generateRandomIntegerInRange(PU*3,PU*8),[-1,-1])
    let ball1 = new ball(generateRandomIntegerInRange(PU*43,PU*48),generateRandomIntegerInRange(PU*3,PU*8),[1,-1])
    let ball2 = new ball(generateRandomIntegerInRange(PU*43,PU*48),generateRandomIntegerInRange(PU*35,PU*40),[1,1])
    let ball3 = new ball(generateRandomIntegerInRange(PU*3,PU*8),generateRandomIntegerInRange(PU*35,PU*10),[-1,1])

    for(let i = 0; i<8; i++){
        let mine0 = new mine(generateRandomIntegerInRange(19,30) * PU + 2,generateRandomIntegerInRange(10,34) * PU + 2)
    }

    let smoke0 = new smoke(PU*21,PU*40,PU*8,PU*3)
    let smoke1 = new smoke(PU*19,PU*7,PU*5,PU*3)
    let smoke2 = new smoke(PU*26,PU*7,PU*5,PU*3)

    let stalker0 = new stalker(PU*2,PU*47)
    stalker0.speed = playerSpeed *0.5

    grid = new nodeGrid(gridNodeSize)
    let finish = new goal(PU*19 , PU*3 , PU*12,PU*2)
}


let creditsText1
let creditsText2
let creditsText3
let creditsText6
let creditsText4
let creditsText5
let creditsClock = 0
let fallingStars2 = []


function preloadCredits(){
    this.load.audio('themeCredits', ['ost/Credits - Thought Soup.mp3',]);
}

function createCredits(){

    scene = this
    entities=[]    
    keys = this.input.keyboard.addKeys('ENTER,SPACE');
    gamepad = this.input.gamepad.gamepads
    levelName.textContent = "<3" 

    if(music4 != undefined){
        music4.stop()
        music4 = undefined
    }
    if(musicCredits == undefined){
        musicCredits = this.sound.add('themeCredits')
        musicCredits.volume = volumeSlider.value / 100  
        musicCredits.play({loop: true});
        this.scene.restart()
    }

    creditsText1 = this.add.text(200,850,"AVOID", { fontFamily: 'Audiowide',fontSize : '110px' })
    creditsText2 = this.add.text(130,1150,"A Game By Ludovico De Salvo", { fontFamily: 'Audiowide',fontSize : '32px' })
    creditsText3 = this.add.text(140,1350,"Music Courtesy of", { fontFamily: 'Audiowide',fontSize : '32px' })
    creditsText6 = this.add.text(180,1400,"-Monolith Official Soundtrack\n-Swngyil YOON", { fontFamily: 'Audiowide',fontSize : '26px' })
    creditsText4 = this.add.text(135,1650,"  If you input the password "+'"'+":AV01D!"+'"'+"\nyou can jump to any level by "+
                                         "inserting\n    the level number as password", { fontFamily: 'Audiowide',fontSize : '24px' })
    creditsText5 = this.add.text(160,1930,"Thank You For Playing <3", { fontFamily: 'Audiowide',fontSize : '32px' })

    for(let i = 0; i<50; i++){
        
        let dice = generateRandomIntegerInRange(1,2)

        if(dice == 1){
            fallingStars2.push(new bullet(generateRandomIntegerInRange(0,800),generateRandomIntegerInRange(0,800),5,5,generateRandomIntegerInRange(150,250),[1,1],true,0xEEEEEE))
        }else{
            fallingStars2.push(new bullet(generateRandomIntegerInRange(0,800),generateRandomIntegerInRange(0,800),5,5,generateRandomIntegerInRange(150,250),[1,1],true,0xEEEEEE))
        }
    }
}

function updateCredits(time,delta){

    Delta = delta / 1000
    omniHandler()

    creditsClock += Delta

    if(creditsClock < 38.75){
        creditsText1.y -= 40 * Delta
        creditsText2.y -= 40 * Delta
        creditsText3.y -= 40 * Delta
        creditsText4.y -= 40 * Delta
        creditsText5.y -= 40 * Delta
        creditsText6.y -= 40 * Delta
    }else{
        creditsText1.y -= 40 * Delta
        creditsText2.y -= 40 * Delta
        creditsText3.y -= 40 * Delta
        creditsText4.y -= 40 * Delta
        creditsText6.y -= 40 * Delta

        lv = 1
        localStorage["specialBoi"] = 1

        if(gamepad.length > 0){
            AButton = gamepad[0].buttons[0]
        }
    
        if(keys.ENTER.isDown || keys.SPACE.isDown || AButton.value == 1){
    
            var theOtherScene = scene.scene.get("startMenu");            
            theOtherScene.scene.restart()        
            scene.scene.switch("startMenu")
        }
    }
    
    for(let i = 0; i<fallingStars2.length; i++){

        if(fallingStars2[i].x > 800 || fallingStars2[i].y > 800){

            let dice = generateRandomIntegerInRange(1,2)

            if(dice == 1){

                fallingStars2[i].x = -10
                fallingStars2[i].y = generateRandomIntegerInRange(0,800)
                fallingStars2[i].speed = generateRandomIntegerInRange(150,250)
            }else{

                fallingStars2[i].y = -10
                fallingStars2[i].x = generateRandomIntegerInRange(0,800)
                fallingStars2[i].speed = generateRandomIntegerInRange(150,250)
            }
        }
    }
}