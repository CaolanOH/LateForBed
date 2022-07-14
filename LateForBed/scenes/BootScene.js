class BootScene extends Phaser.Scene {
    constructor() {
        super('Boot');
    }

    preload() {
        console.log("preloading");
        // load images
        this.loadImages();
        // load spritesheets
        this.loadSpriteSheets();
        // load audio
        this.loadAudio();

    }


    loadImages() {
        // load images
        this.load.image('ground', '/assets/Ground2.png');
        this.load.image('groundLvl2', '/assets/groundLvl02.png');
        this.load.image('background', '/assets/background.png');
        this.load.image('backgroundlvl2', '/assets/backgroundLvl02.png');
        this.load.image('clouds', '/assets/Clouds.png');
        this.load.image('clouds2', '/assets/cloudsLvl02.png');
        this.load.image('hills1', '/assets/Hills01.png');
        this.load.image('hills2', '/assets/Hills02.png');
        this.load.image('hills1Lvl2', '/assets/hills01Lvl02.png');
        this.load.image('hills2Lvl2', '/assets/hills02Lvl02.png');
        this.load.image('title', '/assets/Title01.png');
//        this.load.image('enemy', '/assets/enemy.png');
        //this.load.image('monster', '/assets/monster.png');
        this.load.image('help', '/assets/HELP.png');
        this.load.image('platform', '/assets/platform.png');
        this.load.image('platformlvl2', '/assets/platformlvl2.png');
        this.load.image('bed', '/assets/bed.png');
        this.load.image('star', '/assets/star.png');
        this.load.image('wall', '/assets/wall.png');
        this.load.image('arrows', '/assets/arrows.png');


        //Button images
        this.load.image('startButton1', '/assets/StartButton01.png');
        this.load.image('startButton2', '/assets/StartButton02.png');
        this.load.image('optionsButton1', '/assets/OptionsButton01.png');
        this.load.image('optionsButton2', '/assets/OptionsButton02.png');
        this.load.image('playAgainButton1', '/assets/PlayAgainButton01.png');
        this.load.image('playAgainButton2', '/assets/PlayAgainButton02.png');
        this.load.image('helpbutton1', '/assets/HelpButton01.png');
        this.load.image('helpbutton2', '/assets/HelpButton02.png');
        this.load.image('backButton1', '/assets/backArrow01.png');
        this.load.image('backButton2', '/assets/backArrow02.png');
        this.load.image('soundButton01', '/assets/sound01.png');
        this.load.image('soundButton02', '/assets/sound02.png');
        this.load.image('homeButton1', '/assets/Home02.png');
        this.load.image('homeButton2', '/assets/Home01.png');

    }

    loadSpriteSheets() {
        this.load.spritesheet('player', '/assets/player.png', {
            frameWidth: 128,
            frameHeight: 128
        });
        this.load.spritesheet('enemy', '/assets/enemy.png', {
            frameWidth: 76,
            frameHeight: 128
        });
        this.load.spritesheet('monster', '/assets/monster.png', {
            frameWidth: 128,
            frameHeight: 128
        });
    }

    loadAudio() {
        // Adding Sounds
        this.load.audio("lvl1", ["/assets/lvl1.mp3"]);
        this.load.audio("lvl2", ["/assets/lvl2.mp3"]);
        this.load.audio("coin", ["/assets/coin.mp3"]);
        this.load.audio("gameOverSound", ["/assets/gameOverSound.mp3"]);
        this.load.audio("victory", ["/assets/victory.mp3"]);
    }

    create() {
        this.scene.start('Title');
    }
}
