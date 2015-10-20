paperToss .Game = function() {}

paperToss.Game.prototype = {
    create: function() {
        this.background = this.add.sprite(0,0,'background');
        this.background.scale.setTo(5);
        this.add.text(16, 16, "Current State: Game.", { font: "16px Arial", fill: "#ffffff" });
        
        this.player = this.add.sprite(this.game.width/2, 100 , 'player');
        this.player = this.player.anchor.setTo(0.5);
        
        this.basket = this.add.sprite(this.game.width/2, this.game.height-100, 'basket');
        this.basket = this.basket.anchor.setTo(.5);
    }
}