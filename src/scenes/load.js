class Load extends Phaser.Scene {
    constructor() {
        super('loadScene');
    }
    preload() {
        // loading bar
        // see: https://rexrainbow.github.io/phaser3-rex-notes/docs/site/loader/
        let loadingBar = this.add.graphics();
        this.load.on('progress', (value) => {
            loadingBar.clear();                             // reset fill/line style
            loadingBar.fillStyle(0xa6e1e3, 1);              // (color, alpha)
            loadingBar.fillRect(0, centerY, w * value, 5);  // (x, y, w, h) 
        });
        this.load.on('complete', () => {
            loadingBar.destroy();
        });
        
        this.load.path = './assets/';
        //load img
        this.load.image('rock-fish', 'img/rock-fish.png');
        this.load.image('fish-fit-title', 'img/fish-fit-title.png');
        this.load.image('boat-bottom', 'img/boat-bottom.png');
        this.load.image('ocean-bottom', 'img/ocean-bottom.png');
        this.load.image('clouds-top', 'img/clouds-top.png');
        this.load.image('sky', 'img/sky.png');
        this.load.image('skull', 'img/skull.png');
    }


    create() {
        // check for local storage browser support
        if(window.localStorage) {
            console.log('Local storage supported');
        } else {
            console.log('Local storage not supported');
        }

        // go to Title scene
        this.scene.start('menuScene');
    }
}