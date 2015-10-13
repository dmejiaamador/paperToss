paperToss .Game = function() {}

paperToss.Game.prototype = {
    create: function() {
        this.background = this.add.sprite(0,0,'background');
        this.background.scale.setTo(5);
        this.add.text(16, 16, "Current State: Game.", { font: "16px Arial", fill: "#ffffff" });
    }
}