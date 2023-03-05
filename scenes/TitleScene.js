class TitleScene extends Phaser.Scene {
    constructor() {
        super('Title');
    }

    init() {
        console.log("Title scene Started");
        this.scaleW = this.sys.game.config.width;
        this.scaleH = this.sys.game.config.height;
    }

    create() {
        this.cameras.main.scrollX++;

        this.myCam = this.cameras.main;
        this.myCam.setBounds(0, 0, game.config.width * 3, game.config.height);

        //Background
        this.background = this.add.tileSprite(0, 0, game.config.width, game.config.height, "background");
        this.background.setOrigin(0, 0);
        this.background.setScrollFactor(0);

        //Clouds
        this.clouds = this.add.tileSprite(0, 0, game.config.width, game.config.height, "clouds");
        this.clouds.setOrigin(0, 0);
        this.clouds.setScrollFactor(0);

        //Hills2 
        this.hills2 = this.add.tileSprite(0, -200, game.config.width, game.config.height, "hills2");
        this.hills2.setOrigin(0, 0);
        this.hills2.setScrollFactor(0);

        //Hill1
        this.hills1 = this.add.tileSprite(0, -50, game.config.width, game.config.height, "hills1");
        this.hills1.setOrigin(0, 0);
        this.hills1.setScrollFactor(0);


        //Ground
        this.ground = this.add.tileSprite(0, 800, game.config.width, game.config.height, "ground");
        this.ground.setOrigin(0, 0);
        this.ground.setScrollFactor(0);

        //Title
        this.title = this.add.image(this.scaleW / 4, this.scaleH / 4, "title");
        this.title.setOrigin(0, 0);
        this.title.setScrollFactor(0);







        // create the Play game button
        this.startGameButton = new UiButton(this, this.scaleW / 2, this.scaleH * 0.50, 'startButton1', 'startButton2', this.startScene.bind(this, 'Level1'));


        //create help button
        this.helpButton = new UiButton(this, this.scaleW / 2, this.scaleH * 0.70, 'helpbutton2', 'helpbutton1', this.startScene.bind(this, 'HelpScene'));




    }

    update() {
        this.background.tilePositionX++;
        this.clouds.tilePositionX++;
        this.hills2.tilePositionX++;
        this.hills1.tilePositionX++;
        this.ground.tilePositionX++;
        this.startGameButton.x+.05;
        this.helpButton.x+.05;

    }

    startScene(targetScene) {
        this.scene.start(targetScene);
    }
}
