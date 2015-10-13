//creating a game object
var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '');

//adding the games states that the game will have 
game.state.add('Boot', paperToss.Boot);
game.state.add('Preload', paperToss.Preload);
game.state.add('MainMenu',paperToss.MainMenu);
game.state.add('Game',paperToss.Game);
//starts the Boot game state
game.state.start('Boot');

