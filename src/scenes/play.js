class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }
    
    create() {
        //add background sky
        this.add.image(0, 0, 'sky').setOrigin(0, 0,);
        this.add.image(190, 210, 'skull').setOrigin(0, 0,);
        //add tileSprite
        this.clouds = this.add.tileSprite(0, 0, game.config.width, 151, 'clouds-top').setOrigin(0, 0);
        this.boat = this.add.tileSprite(0, 160, game.config.width, 259, 'boat-bottom').setOrigin(0, 0);
        this.ocean = this.add.tileSprite(0, 404, game.config.width, 79, 'ocean-bottom').setOrigin(0, 0);
      }

    update() {
        this.boat.tilePositionX += 2;  // update tile sprite
        this.clouds.tilePositionX += 1;  // update tile sprite
        this.ocean.tilePositionX += 3;
    }
}

//q: how do i make the tileSprite speed up as the game progresses?

//q: how do i make the skull appear periodically?










