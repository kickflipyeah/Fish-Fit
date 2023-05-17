class Fish extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        
    //add fish to scene w/ physics and gravity  
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.body.setSize(25, 20, true);
    this.body.gravity.y = 450;
    this.body.maxVelocity.x = 450;
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
                this.scene.sound.play('jump');
                isJumping = true;
            }
            else {
                this.anims.play('walk', true);
            }

        }

    }
    
}


















