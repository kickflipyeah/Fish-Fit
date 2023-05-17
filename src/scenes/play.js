class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }
    
    create() {
        //add music that loops
        let gameSong = this.sound.add('slower-ver', { loop: true });
        gameSong.play();
        //add background sky
        this.add.image(0, 0, 'sky').setOrigin(0, 0,);
        this.add.image(190, 210, 'skull').setOrigin(0, 0,);
        //add tileSprite
        this.clouds = this.add.tileSprite(0, 0, game.config.width, 151, 'clouds-top').setOrigin(0, 0);
        //the boat/ground
        let groundX=this.sys.game.config.width/2;
        let groundY=this.sys.game.config.height * .8;
        this.boatBox = this.physics.add.image(groundX, groundY, 'boat-bottom');
        this.boatBox.displayHeight=32;
        this.boatBox.body.setAllowGravity(false);
        this.boatBox.setImmovable();
        //add collider
        this.boat = this.add.tileSprite(0, 160, game.config.width, 259, 'boat-bottom').setOrigin(0, 0);
        this.ocean = this.add.tileSprite(0, 404, game.config.width, 79, 'ocean-bottom').setOrigin(0, 0);
        //add UI bar
        this.add.rectangle(0, borderUISize + borderPadding, game.config.width, borderUISize * 2, 0xfff5bb).setOrigin(0, 0);
        //add fish
        this.p1Fish = new Fish(this, game.config.width/5, game.config.height - 160, 'fish-sheet').setOrigin(0.5, 0);
        //add keys
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        //collider
        this.physics.add.collider(this.p1Fish, this.boatBox, null, function(){
            console.log("fish");
            isJumping = false;
        });
      }

    update() {
        this.p1Fish.update();
        this.boat.tilePositionX += 2;  // update tile sprite
        this.clouds.tilePositionX += 1;  // update tile sprite
        this.ocean.tilePositionX += 3;
    }
}











