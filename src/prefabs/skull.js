class Skull extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        scene.physics.add.existing(this);
    
        // make skulls not fall and move to the left
        // this.body.setVelocityX(-140);
        this.body.setAllowGravity(false);
        //this.body.gravity.y = 0;
        //this.body.maxVelocity.x = 10;
        this.body.setVelocityX(scene.skullSpeed);

    }

    update() {
        if (this.x < -20) {
            this.destroy();
        }
    }
}

