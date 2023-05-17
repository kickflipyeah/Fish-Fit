class Skull extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, spritesheet) {
        super(scene, scene.game.config.width, Phaser.Math.Between(0, scene.game.config.height), spritesheet);
        scene.add.existing(this);
        scene.physics.add.existing(this);
    
        // make skulls not fall and move to the left
        this.body.setVelocityX(-140);
        this.body.setAllowGravity(false);

        // collision with fish
        scene.physics.add.collider(this, scene.p1Fish, () => {
            scene.physics.pause();
            scene.sound.stopAll();
            //scene.sound.play('');

            this.destroy();
            
            //scene.gameOver = true;
        });

    }

    update() {
        if (this.x < -20) {
            this.destroy();
        }
    }
}


