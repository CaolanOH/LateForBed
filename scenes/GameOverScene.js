class GameOverScene extends Phaser.Scene {
    constructor() {
        super('GameOver');
    }

    init(data) {
        this.score = data.score;
        this.lives = data.lives;
        console.log("Game Over scene Started");
        this.scaleW = this.sys.game.config.width;
        this.scaleH = this.sys.game.config.height;
    }


    create() {
        this.createAudio();
        this.cameras.main.scrollX++;

        this.myCam = this.cameras.main;
        this.myCam.setBounds(0, 0, game.config.width * 3, game.config.height);

        //******************************** Background ********************************

        this.background = this.add.tileSprite(0, 0, game.config.width, game.config.height, "background");
        this.background.setOrigin(0, 0);
        this.background.setScrollFactor(0);





        //******************************** Clouds ********************************

        this.clouds = this.add.tileSprite(0, 0, game.config.width, game.config.height, "clouds");
        this.clouds.setOrigin(0, 0);
        this.clouds.setScrollFactor(0);

        this.cloudsLvl02 = this.add.tileSprite(0, 0, game.config.width, game.config.height, "clouds2");
        this.cloudsLvl02.setOrigin(0, 0);
        this.cloudsLvl02.setScrollFactor(0);

        //******************************** Hills2 ********************************

        this.hills2 = this.add.tileSprite(0, -200, game.config.width, game.config.height, "hills2");
        this.hills2.setOrigin(0, 0);
        this.hills2.setScrollFactor(0);

        this.hills02Lvl02 = this.add.tileSprite(0, 50, game.config.width, game.config.height, "hills2Lvl2");
        this.hills02Lvl02.setOrigin(0, 0);
        this.hills02Lvl02.setScrollFactor(0);


        //******************************** Hill1 ********************************

        this.hills1 = this.add.tileSprite(0, -50, game.config.width, game.config.height, "hills1");
        this.hills1.setOrigin(0, 0);
        this.hills1.setScrollFactor(0);

        this.hills01Lvl02 = this.add.tileSprite(0, 50, game.config.width, game.config.height, "hills1Lvl2");
        this.hills01Lvl02.setOrigin(0, 0);
        this.hills01Lvl02.setScrollFactor(0);


        //******************************** Ground ********************************

        this.ground = this.add.tileSprite(0, 800, game.config.width, game.config.height, "ground");
        this.ground.setOrigin(0, 0);
        this.ground.setScrollFactor(0);

        //******************************** Title ********************************
        this.title = this.add.image(this.scaleW / 4, this.scaleH / 4, "title");
        this.title.setOrigin(0, 0);
        this.title.setScrollFactor(0);

        //******************************** TEXT ********************************

        this.titleText = this.add.text(this.scaleW / 2.7, this.scaleH / 2.5, 'YOU LOSE', {
            fontSize: '100px',
            fill: '#ffffff',
            fontFamily: 'Lato',
            fontWeight: 'bold',
            stroke: '#ffffff',
            strokeThickness: 3
        });
        this.scoreText = this.add.text(this.scaleW / 2.7, this.scaleH / 1.7, 'SCORE :', {
            fontSize: '70px',
            fill: '#ffffff',
            fontFamily: 'Lato',
            fontWeight: 'bold',
            stroke: '#ffffff',
            strokeThickness: 3
        });



        //******************************** Font style ********************************







        //******************************** BUTTONS ********************************

        //******************************** create the Play Again Button ********************************

        this.playAgainButton = new UiButton(this, this.scaleW / 1.5, this.scaleH * 0.80, 'playAgainButton1', 'playAgainButton2', this.startScene.bind(this, 'Level1'));

        //******************************** create Home button ********************************

        this.homeButton = new UiButton(this, this.scaleW / 3, this.scaleH * 0.80, 'homeButton1', 'homeButton2', this.startScene.bind(this, 'Title'));
    }

    createAudio() {
        this.gameOverSound = this.sound.add('gameOverSound');
        this.gameOverSound.play();
    }


    update() {

        this.background.tilePositionX++;
        this.cloudsLvl02.tilePositionX--;
        this.clouds.tilePositionX++;
        this.hills2.tilePositionX++;
        this.hills02Lvl02.tilePositionX--;
        this.hills01Lvl02.tilePositionX--;
        this.hills1.tilePositionX++;
        this.ground.tilePositionX++;
        this.playAgainButton.x + .05;
        this.homeButton.X + .05;
        this.titleText.x + .05;
        this.scoreText.x + .05;
        this.scoreText.setText('SCORE: ' + this.score);

    }



    startScene(targetScene) {
        this.scene.start(targetScene);
    }
}
