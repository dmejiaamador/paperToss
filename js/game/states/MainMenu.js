paperToss.MainMenu = function() {}

paperToss.MainMenu.prototype = {    
    create: function(){
        this.background = this.add.sprite(0,0,'background');
        this.background.scale.setTo(5);
        this.add.text(16, 16, "Current State:MainMenu.", { font: "16px Arial", fill: "#ffffff" });
        this.add.text(16, 32, "Click to Start Game.", { font: "16px Arial", fill: "#ffffff" });
    },
    
    update: function() {
        if(this.game.input.activePointer.justPressed()){
            this.game.state.start("Game");
        }
    }
    
}