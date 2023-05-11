/*
 *  Jessica Zogaric
 *  Fish Fit
 *  Approximate time to complete: -
 *  
 *  
 */

//configured the screen so its 640 x 480 and pass the config thru the let game
let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Load, Menu, Play ] //puts the diff scenes we have in the scene array
  }
//reservekeyboard vars (no longer needed)
let keyF, keyR, keyUP, keyRIGHT;
let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;