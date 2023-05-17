class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }
    
    create() {
        //add music that loops
        this.gameSong = this.sound.add('slower-ver', { loop: true });
        this.gameSong.play();
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
        //add collider for fish 
        this.boat = this.add.tileSprite(0, 160, game.config.width, 259, 'boat-bottom').setOrigin(0, 0);
        this.ocean = this.add.tileSprite(0, 404, game.config.width, 79, 'ocean-bottom').setOrigin(0, 0);
        //add UI bar
        this.add.rectangle(0, borderUISize + borderPadding, game.config.width, borderUISize * 2, 0xfff5bb).setOrigin(0, 0);
        let runScore = {
            fontFamily: 'Helvetica',
            fontSize: '20px',
            color: '#cfe8ff',
            backgroundColor: '#654791',
            padding: {
                x: 8,
                y: 4
            },
            align: 'right'
        };
        this.scoreText = this.add.text(0, 60, 'SCORE: 0', runScore);
        this.score = 0;
        //add fish
        this.p1Fish = new Fish(this, game.config.width/5, game.config.height - 160, 'fish-sheet').setOrigin(0.5, 0);
        //add keys
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        //collider
        this.physics.add.collider(this.p1Fish, this.boatBox, null, function(){
            isJumping = false;
        });
        keyENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
        this.skullSpeed = -150;
        this.skullGroup = this.add.group({
            runChildUpdate: true    // make sure update runs on group children
        });
        //timer for score
        this.scoreTimer = this.time.addEvent({
            delay: 1000,
            callback: () => {
                if (!this.gameOver){
                    this.score += 1;
                    this.skullSpeed *= 1.03;
                    this.scoreText.text = 'SCORE: ' + this.score; //.text fills in words
                }
            },
            loop: true
        });

        //add skull enemy
        //this.skull = new Skull(this, game.config.width, game.config.height - 160, 'skull').setOrigin(0.5, 0);
        //make skull enemy w timer
        this.skullTime = this.time.addEvent({
            delay: 2000,
            callback: () => {
                if (!this.gameOver){
                    this.addSkull();
                }
            },
            loop: true
        });
        let scoreConfig = {
            fontFamily: 'Helvetica',
            fontSize: '24px',
            color: '#000000',
            backgroundColor: '#F5DEB3',
            padding: {
                x: 10,
                y: 5
            },
            align: 'center'
        };
        this.gameOver = false;
        //collision with fish
        this.physics.add.collider(this.skullGroup, this.p1Fish, () => {
            this.physics.pause();
            this.sound.play('hitHurt');
            this.gameSong.stop();
            //this.sound.stopAll();
            this.add.text(game.config.width/2, game.config.height/2, 'GAME OVER', scoreConfig).setOrigin(0.5);
            this.add.text(game.config.width/2, game.config.height/2 + 64, 'Press (ENTER) to Restart', scoreConfig).setOrigin(0.5);            
            this.gameOver = true;
        });
      }
    
      addSkull() {
        let skullHeight =  Phaser.Math.Between(190, 340);
        let skull = new Skull(this, game.config.width, skullHeight, 'skull'); //190 - 340
        skull.setScale(0.5);
        this.skullGroup.add(skull);
    }
    update() {
        //this.skull.update();
        this.p1Fish.update();
        this.boat.tilePositionX += 2;  // update tile sprite
        this.clouds.tilePositionX += 1;  // update tile sprite
        this.ocean.tilePositionX += 3;
        
        if(this.gameOver && Phaser.Input.Keyboard.JustDown(keyENTER)) {
            this.sound.play('blipSelect');
            this.scene.restart();
        }
       
    }
}

//i love






