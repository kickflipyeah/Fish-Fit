/*
 *  Jessica Zogaric
 *  Fish Fit
 *  Approximate time to complete: -40 hours
 *  My game has a unique visual style that makes it stand out from other endless runners.
 *  I'm particularly very proud of the title screen that I drew in photoshop.
 *  The artwork is all pixel art which took me a while to format correctly. 
 *  I added photoshop photo filters to make the artwork look more warm and inviting.
 *  In terms of technically interesting programming, I added bubbles that match the flopping fish theme and boost your score.
 *  Although not the most technically impressive, I am proud of myself for figuring out
 *  how to implement these features, as programming is not my strong suit and I have been struggling with Phaser. 
 *  I also had to look beyond the class examples to figure out how to make the bubble disappear; I ended up using an overlap function.
 */

//configured the screen so its 640 x 480 and pass the config thru the let game
let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Load, Menu, Play ], 
    physics: {
      default: 'arcade',
      arcade: {
          //debug: true,
          gravity: {
              x: 0,
              y: 100
          }
      }
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






