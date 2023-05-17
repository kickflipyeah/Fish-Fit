class Fish extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        
    //add fish to scene w/ physics and gravity
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.body.gravity.y = 350;
    this.body.maxVelocity.x = 350;
    //fish animation for walking (flopping) and jumping
    this.anims.create({
        key: "walk",
        frameRate: 4,
        frames: this.anims.generateFrameNumbers("fish-sheet", {start: 0, end: 1}),
        repeat: -1
    });
    this.anims.create({
        key: "jump",
        frameRate: 4,
        frames: this.anims.generateFrameNumbers("fish-sheet", {start: 0, end: 2}),
        repeat: -1
    });
    // this.anims.play('walk', true);
    }
    update() {
        if (!isJumping){
            if(Phaser.Input.Keyboard.JustDown(keyUP)) {
                this.body.setVelocityY(-400);
                this.anims.play('jump', true);
                console.log('key was pressed');
                isJumping = true;
            }
            else {
                this.anims.play('walk', true);
            }

        }

    }
    
}
//q: how do I make the fish stop jumping when it hits the boat?
//a: I added a boolean to the fish class that is set to false by default. When the fish jumps, it is set to true. When the fish hits the boat, it is set to false. When the fish is not jumping, it plays the walking animation. When the fish is jumping, it plays the jumping animation.
//q: how do I set the boolean isJumping to false when the fish hits the boat?
//a: I added a collider to the scene that sets the boolean to false when the fish hits the boat.


















