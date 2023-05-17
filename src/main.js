/*
 *  Jessica Zogaric
 *  Fish Fit
 *  Approximate time to complete: -30 hours
 *  
 */

//configured the screen so its 640 x 480 and pass the config thru the let game
let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,    
    physics: {
      default: 'arcade',
      arcade: {
          //debug: true,
          gravity: {
              x: 0,
              y: 100
          }
      },
      scene: [ Load, Menu, Play ] 
  },//puts the diff scenes we have in the scene array
  }

let keyUP, keyENTER;
let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;
let centerX = game.config.width/2;
let centerY = game.config.height/2;
let w = game.config.width;
let h = game.config.height;
let isJumping = false;






