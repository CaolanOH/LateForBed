class Level1 extends Phaser.Scene {
    constructor() {
        super('Level1');
    }

    init() {
        console.log("Level 1 Started");
        this.enemyMaxY = 600;
        this.enemyMinY = 100;
        this.enemyMinX = 300;
        this.enemyMinY = 100;




        this.scaleW = this.sys.game.config.width;
        this.scaleH = this.sys.game.config.height;

    }

    create() {

        this.createAudio();
        this.createInput();
        this.createBackground();
        this.createGround();
        this.createPlayer();
        this.createStars();
        this.createEnemies();
        this.createGoal();
        this.createPlatforms();
        this.myCam = this.cameras.main;
        this.myCam.setBounds(0, 0, game.config.width * 3, game.config.height);
    }


    createAudio() {
        // Adding Sounds
        this.music = this.sound.add('lvl1');
        this.coinSound = this.sound.add('coin');
        this.music.play();
        this.music.setVolume(0.5);
    }


    createInput() {
        this.cursors = this.input.keyboard.createCursorKeys();
        this.keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);
        this.keyP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);
    }

    createBackground() {
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

        // create sound Icon
        this.soundButton = this.add.sprite(this.scaleW / 1.05, this.scaleH * 0.10, 'soundButton01');

        this.scoreText = this.add.text(16, 16, 'Score: 0', {
            fontSize: '32px',
            fill: 'red',
            fontFamily: 'Lato',
            fontWeight: 'bold',
            stroke: '#ffffff',
            strokeThickness: 3
        });

        this.livesText = this.add.text(1300, 16, 'Lives: 100', {
            fontSize: '32px',
            fill: 'red',
            fontFamily: 'Lato',
            fontWeight: 'bold',
            stroke: '#ffffff',
            strokeThickness: 3
        });



    }

    createPlatforms() {
        this.tilePlatform = this.physics.add.staticGroup();
        //Platforms 
        this.tilePlatform.create(1600, 300, 'platform');
        this.tilePlatform.create(1200, 550, 'platform');
        this.tilePlatform.create(2200, 550, 'platform');
        this.tilePlatform.create(3500, 450, 'platform');
        this.tilePlatform.create(4200, 350, 'platform');
        this.tilePlatform.create(5000, 550, 'platform');
        this.physics.add.collider(this.player, this.tilePlatform);
    }

    createGround() {
        //Ground
        this.platforms = this.physics.add.staticGroup();
        this.platforms.create(750, 900, 'ground');

        //fake moving ground
        this.ground = this.add.tileSprite(0, 780, game.config.width, game.config.height, "ground");
        this.ground.setOrigin(0, 0);
        this.ground.setScrollFactor(0);

    }

    createPlayer() {
        this.player = this.physics.add.sprite(100, 700, 'player');
        this.player.speed = 0;
        this.score = 0;
        this.lives = 100;
        //this.player.setBounce(0.2);
        this.player.body.setGravityY(500);
        this.player.setCollideWorldBounds(true);
        this.isPlayerAlive = true;
        this.player.setSize(50, 120);


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


    createGoal() {
        // goal
        this.goal = this.add.image(6000, 750, 'bed');
        this.goal.setScale(2);
    }

    createEnemies() {
        //06: group of enemies
        this.enemies = this.physics.add.group({
            key: 'enemy',
            repeat: 100,
            setXY: {
                x: 1000,
                y: 700,
                stepX: 500,
                stepY: -20
            }
        });

        // scale enemies down
        Phaser.Actions.ScaleXY(this.enemies.getChildren(), -0.3, -0.3);

        // set random speeds for all children of enemies group
        Phaser.Actions.Call(this.enemies.getChildren(), function (enemy) {
            enemy.speed = Math.random() * 3 + 1;
        }, this);

        //set hitbox size
        Phaser.Actions.Call(this.enemies.getChildren(), function (enemy) {
            enemy.setSize(50, 120);
        }, this);
        
         this.anims.create({
            key: 'move',
            frames: this.anims.generateFrameNumbers('enemy', {
                start: 0,
                end: 2
            }),
            frameRate: 10,
            repeat: -1
        });

   

        //10 Add collider between player and enemies
        this.physics.add.overlap(this.player, this.enemies, this.collisionCheck, null, this);
    }


    createStars() {
        this.stars = this.physics.add.group({
            key: 'star',
            repeat: 10,
            score: 20,
            setXY: {
                x: 400,
                y: 600,
                stepX: 700,
                stepY: -50
            }
        });

        // scale stars down
        Phaser.Actions.ScaleXY(this.stars.getChildren(), -0.90, -0.90);

        //score
        Phaser.Actions.Call(this.stars.getChildren(), function (star) {
            this.stars.score = Math.random() * 10 + 1;
        }, this);

        //10 Add collider between player and stars
        this.physics.add.overlap(this.player, this.stars, this.collectStars, null, this);
    }

    //gameLoop
    update() {
        let enemies = this.enemies.getChildren();
        let stars = this.stars.getChildren();
        if (!this.isPlayerAlive) {
            return;
        }

        ///////////////////////////////////////////LEFT///////////////////////////////////////////////////
       
        if (this.cursors.left.isDown) {
            this.tilePlatform.children.iterate(plat => plat.setX(plat.x + 5));
            this.tilePlatform.refresh();
            this.player.setVelocityX(this.player.speed);
            this.player.anims.play('left', true);
            this.player.scaleX = 1;
            this.background.tilePositionX -= 5;
            this.clouds.tilePositionX -= 2;
            this.hills2.tilePositionX -= 3;
            this.hills1.tilePositionX -= 4;
            this.ground.tilePositionX -= 5;
            this.goal.x += 5;

            stars.forEach((s) => {
                s.x += 5;
            });

            enemies.forEach((e) => {
                e.x += 5;
            });

            if (this.cursors.up.isDown && this.player.body.touching.down) {
                this.player.setVelocityY(-500);
                this.player.body.setGravityY(600);
                this.player.anims.play('left', true);
                this.player.scaleX = 1;

            }



            ///////////////////////////////////////////RIGHT///////////////////////////////////////////////////

        } else if (this.cursors.right.isDown) {
            this.tilePlatform.children.iterate(plat => plat.setX(plat.x - 5));
            this.tilePlatform.refresh();
            this.player.setVelocityX(this.player.speed);
            this.player.anims.play('right', true);
            this.player.scaleX = 1;
            this.background.tilePositionX += 5;
            this.clouds.tilePositionX += 2;
            this.hills2.tilePositionX += 3;
            this.hills1.tilePositionX += 4;
            this.ground.tilePositionX += 5;
            this.goal.x -= 5;

            enemies.forEach((e) => {
                e.x -= 5;
            });

            stars.forEach((s) => {
                s.x -= 5;
            });
            if (this.cursors.up.isDown && this.player.body.touching.down) {
                this.player.setVelocityY(-700);
                this.player.body.setGravityY(600);
                this.player.anims.play('up', true);
                this.player.scaleX = 1;

            }



            ///////////////////////////////////////////UP///////////////////////////////////////////////////


        } else if (this.cursors.up.isDown && this.player.body.touching.down) {
            this.player.setVelocityY(-800);
            this.player.body.setGravityY(500);
            this.player.anims.play('turn', true);
            this.player.scaleX = 1;

        } else {
            this.player.setVelocityX(0);
            this.player.anims.play('turn');
        }



        // treasure collision
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.goal.getBounds())) {
            //this.gameWin();
        }


        let numEnemies = enemies.length;

        for (let i = 0; i < numEnemies; i++) {

            // move enemies
            enemies[i].x -= enemies[i].speed;
            enemies[i].anims.play('move', true);

            // 07: enemy collision
            if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), enemies[i].getBounds())) {
                console.log('lives' + this.lives);
                this.lives = this.lives - 1;
                if (this.lives == 0) {
                    this.gameOver();
                }
                this.livesText.setText('Lives: ' + this.lives);


                break;

            }

        }

        //End if player passes goal
        if (this.player.x >= this.goal.x) {
            this.gameWin();
        }


        //SOUND
        if (this.keyM.isDown) {
            this.music.pause();
            this.soundButton.setTexture('soundButton02');
        } else if (this.keyP.isDown) {
            this.music.resume();
            this.soundButton.setTexture('soundButton01');
        }

    } //END OF UPDATE LOOP


    /*
        //10 function that runs during an overlap with enemies
        collisionCheck(player, enemy) {
            console.log("bump");

            //this.gameOver();
        }
    */



    //10 Function that collects stars
    collectStars(player, stars) {
        this.coinSound.play();
        this.coinSound.setVolume(0.5);
        console.log("collected", this.score);
        this.score += 20;
        stars.disableBody(true, true);
        this.scoreText.setText('Score: ' + this.score);
    }

    gameOver() {
        this.scene.start('GameOver', {
            score: this.score,
            lives: this.lives

        });
        this.music.stop();
    }

    gameWin() {
        this.scene.start('Level2', {
            score: this.score
        });
        this.music.stop();
    }


}
