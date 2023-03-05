class OptionsScene extends Phaser.Scene {
        constructor() {
            super('OptionsScene');
        }

        init() {
            console.log("Options scene Started");

            this.scaleW = this.sys.game.config.width;
            this.scaleH = this.sys.game.config.height;

        }

        create() {

            this.createBackground();
            /*this.myCam = this.cameras.main;
            this.myCam.setBounds(0, 0, game.config.width * 3, game.config.height);*/
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


            //Ground
            this.ground = this.add.tileSprite(0, 0, game.config.width, game.config.height, "ground");
            this.ground.setOrigin(0, 0);
            this.ground.setScrollFactor(0);


                /*
                        this.background.tilePositionX = this.myCam.scrollX * .3;
                        this.clouds.tilePositionX = this.myCam.scrollX * .6;
                        this.hills2.tilePositionX = this.myCam.scrollX * .5;
                        this.hills1.tilePositionX = this.myCam.scrollX * .8;
                        this.ground.tilePositionX = this.myCam.scrollX;
                */

            }


        }
