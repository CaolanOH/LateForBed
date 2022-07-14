var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 1500,
    height: 900,
      scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    autoRound: false,
    scene: [
    BootScene,
    TitleScene,
    Level1,
    Level2,
    //OptionsScene,
    HelpScene,
    GameOverScene,
    GameWinScene
  ],
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: {
                y: 0,
            },
        },
    },
};

var game = new Phaser.Game(config);
