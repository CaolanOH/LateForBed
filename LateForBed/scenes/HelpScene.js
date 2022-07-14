class HelpScene extends Phaser.Scene {
    constructor() {
        super('HelpScene');
    }

    init() {
        console.log("Help scene Started");

        this.scaleW = this.sys.game.config.width;
        this.scaleH = this.sys.game.config.height;

    }

    create() {

        this.createBackground();
        this.createGround();
        this.createPlayer();
        this.createInput();
        this.createText();

        this.homeButton = new UiButton(this, 850, this.scaleH * 0.90, 'homeButton1', 'homeButton2', this.startScene.bind(this, 'Title'));

    }

    createBackground() {

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

        //******************************** Hills2 ********************************

        this.hills2 = this.add.tileSprite(0, -200, game.config.width, game.config.height, "hills2");
        this.hills2.setOrigin(0, 0);
        this.hills2.setScrollFactor(0);

        //******************************** Hill1 ********************************

        this.hills1 = this.add.tileSprite(0, -50, game.config.width, game.config.height, "hills1");
        this.hills1.setOrigin(0, 0);
        this.hills1.setScrollFactor(0);

        //******************************** Arrows ********************************
        this.arrows = this.add.image(350, this.scaleH / 2, "arrows");

        //******************************** Home Button ********************************


    }

    //******************************** Ground ********************************
    createGround() {
        this.platforms = this.physics.add.staticGroup();
        this.platforms.create(750, 850, 'ground');

        //******************************** Fake ground ********************************
        this.ground = this.add.tileSprite(0, 740, game.config.width, game.config.height, 'ground');
        this.ground.setOrigin(0, 0);
        this.ground.setScrollFactor(0);


    }

    createPlayer() {
        this.player = this.physics.add.sprite(825, 660, 'player');
        this.player.speed = 0;
        this.score = 0;
        this.player.body.setGravityY(500);
        this.player.setCollideWorldBounds(true);
        this.isPlayerAlive = true;
        this.player.score = 0;
        this.player.setSize(24, 108, true);


        this.physics.add.collider(this.player, this.platforms);

        //this.player.frame = 4;
        this.cameras.main.startFollow(this.player);
        // animation states
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('player', {
                start: 0,
                end: 3
            }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: [{
                key: 'player',
                frame: 4
      }],
            frameRate: 20
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('player', {
                start: 5,
                end: 8
            }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'up',
            frames: [{
                key: 'player',
                frame: 8
      }],
            frameRate: 20
        });
        this.anims.create({
            key: 'down',
            frames: [{
                key: 'player',
                frame: 8
      }],
            frameRate: 20
        });
    }

    createInput() {
        this.cursors = this.input.keyboard.createCursorKeys();
    }


    createText() {

        this.arrowText = this.add.text(120, 650, 'Use the arrow keys to move left and right', {
            fontSize: '30px',
            fill: '#ffffff',
            fontFamily: 'Lato',
            fontWeight: 'bold',
            stroke: '#ffffff',
            strokeThickness: 2
        });

        this.arrowText02 = this.add.text(240, 250, 'Press up key to jump', {
            fontSize: '30px',
            fill: '#ffffff',
            fontFamily: 'Lato',
            fontWeight: 'bold',
            stroke: '#ffffff',
            strokeThickness: 2
        });

        this.arrowText02 = this.add.text(240, 800, 'M key = Mute Music', {
            fontSize: '30px',
            fill: '#ffffff',
            fontFamily: 'Lato',
            fontWeight: 'bold',
            stroke: '#ffffff',
            strokeThickness: 2
        });

        this.arrowText02 = this.add.text(240, 850, 'P key = Plays Music', {
            fontSize: '30px',
            fill: '#ffffff',
            fontFamily: 'Lato',
            fontWeight: 'bold',
            stroke: '#ffffff',
            strokeThickness: 2
        });
    }
    update() {




        if (this.cursors.left.isDown) {
            this.player.scaleX = 1;
            this.player.anims.play('left', true);
            this.background.tilePositionX -= 5;
            this.clouds.tilePositionX -= 2;
            this.hills2.tilePositionX -= 3;
            this.hills1.tilePositionX -= 4;
            this.ground.tilePositionX -= 5;
            this.homeButton.x - 0.5;
            this.arrows.x - 0.5;

            if (this.cursors.up.isDown && this.player.body.touching.down) {
                this.player.setVelocityY(-500);
                this.player.body.setGravityY(500);
                this.player.anims.play('up', true);
                this.player.scaleX = 1;

            }


        } else if (this.cursors.right.isDown) {
            this.background.tilePositionX += 5;
            this.clouds.tilePositionX += 2;
            this.hills2.tilePositionX += 3;
            this.hills1.tilePositionX += 4;
            this.ground.tilePositionX += 5;
            this.homeButton.x + 0.5;
            this.arrows.x + 0.5;
            this.player.anims.play('right', true);
            this.player.scaleX = 1;

            if (this.cursors.up.isDown && this.player.body.touching.down) {
                this.player.setVelocityY(-500);
                this.player.body.setGravityY(500);
                this.player.anims.play('up', true);
                this.player.scaleX = 1;

            }


        } else if (this.cursors.up.isDown) {
            this.player.setVelocityY(-500);
            this.player.body.setGravityY(500);
            this.player.anims.play('turn', true);
            this.player.scaleX = 1;

        } else {
            this.player.anims.play('turn');
        }




    }

    startScene(targetScene) {
        this.scene.start(targetScene);
    }


}
