class BootScene extends Phaser.Scene {
  constructor() {
    super("Boot");
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
    this.load.image("ground", "LateForBed/assets/Ground2.png");
    this.load.image("groundLvl2", "LateForBed/assets/groundLvl02.png");
    this.load.image("background", "LateForBed/assets/background.png");
    this.load.image("backgroundlvl2", "LateForBed/assets/backgroundLvl02.png");
    this.load.image("clouds", "LateForBed/assets/Clouds.png");
    this.load.image("clouds2", "LateForBed/assets/cloudsLvl02.png");
    this.load.image("hills1", "LateForBed/assets/Hills01.png");
    this.load.image("hills2", "LateForBed/assets/Hills02.png");
    this.load.image("hills1Lvl2", "LateForBed/assets/hills01Lvl02.png");
    this.load.image("hills2Lvl2", "LateForBed/assets/hills02Lvl02.png");
    this.load.image("title", "LateForBed/assets/Title01.png");
    //        this.load.image('enemy', '/assets/enemy.png');
    //this.load.image('monster', '/assets/monster.png');
    this.load.image("help", "LateForBed/assets/HELP.png");
    this.load.image("platform", "LateForBed/assets/platform.png");
    this.load.image("platformlvl2", "LateForBed/assets/platformlvl2.png");
    this.load.image("bed", "LateForBed/assets/bed.png");
    this.load.image("star", "LateForBed/assets/star.png");
    this.load.image("wall", "LateForBed/assets/wall.png");
    this.load.image("arrows", "LateForBed/assets/arrows.png");

    //Button images
    this.load.image("startButton1", "LateForBed/assets/StartButton01.png");
    this.load.image("startButton2", "LateForBed/assets/StartButton02.png");
    this.load.image("optionsButton1", "LateForBed/assets/OptionsButton01.png");
    this.load.image("optionsButton2", "LateForBed/assets/OptionsButton02.png");
    this.load.image(
      "playAgainButton1",
      "LateForBed/assets/PlayAgainButton01.png"
    );
    this.load.image(
      "playAgainButton2",
      "LateForBed/assets/PlayAgainButton02.png"
    );
    this.load.image("helpbutton1", "LateForBed/assets/HelpButton01.png");
    this.load.image("helpbutton2", "LateForBed/assets/HelpButton02.png");
    this.load.image("backButton1", "LateForBed/assets/backArrow01.png");
    this.load.image("backButton2", "LateForBed/assets/backArrow02.png");
    this.load.image("soundButton01", "LateForBed/assets/sound01.png");
    this.load.image("soundButton02", "LateForBed/assets/sound02.png");
    this.load.image("homeButton1", "LateForBed/assets/Home02.png");
    this.load.image("homeButton2", "LateForBed/assets/Home01.png");
  }

  loadSpriteSheets() {
    this.load.spritesheet("player", "/assets/player.png", {
      frameWidth: 128,
      frameHeight: 128,
    });
    this.load.spritesheet("enemy", "/assets/enemy.png", {
      frameWidth: 76,
      frameHeight: 128,
    });
    this.load.spritesheet("monster", "/assets/monster.png", {
      frameWidth: 128,
      frameHeight: 128,
    });
  }

  loadAudio() {
    // Adding Sounds
    this.load.audio("lvl1", ["LateForBed/assets/lvl1.mp3"]);
    this.load.audio("lvl2", ["LateForBed/assets/lvl2.mp3"]);
    this.load.audio("coin", ["LateForBed/assets/coin.mp3"]);
    this.load.audio("gameOverSound", ["LateForBed/assets/gameOverSound.mp3"]);
    this.load.audio("victory", ["LateForBed/assets/victory.mp3"]);
  }

  create() {
    this.scene.start("Title");
  }
}
