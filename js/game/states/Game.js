paperToss .Game = function() {
    this.amo = 10;
    //to keep track of how often you can shoot
    this.shootTimer = 0;
    //  will have to wait 100 microseconds before you can shoot again. adds a buffer to time
    this.shootRate = 500;
}

paperToss.Game.prototype = {
    
    create: function() {
        this.background = this.add.sprite(0,0,'background');
        this.background.scale.setTo(5);
        this.add.text(16, 16, "Current State: Game.", { font: "16px Arial", fill: "#ffffff" });
        
        this.amoLabel = this.add.text(16, 100, "Amo left: " +this.amo, { font: "16px Arial", fill: "#ffffff" });
        
        this.player = this.add.sprite(this.game.width/2, 100 , 'player');
        this.physics.enable(this.player, Phaser.Physics.ARCADE);
        this.player.anchor.setTo(0.5);
        this.player.body.collideWorldBounds = true;

        this.basket = this.add.sprite(this.game.width/2, this.game.height-100, 'basket');
        this.physics.enable(this.basket, Phaser.Physics.ARCADE);
        this.basket.anchor.setTo(.5);
        this.basket.body.collideWorldBounds=true;
        
        this.jumpKey = this.input.keyboard.addKey(Phaser.Keyboard.W);
        this.leftKey = this.input.keyboard.addKey(Phaser.Keyboard.A);
        this.rightKey = this.input.keyboard.addKey(Phaser.Keyboard.D);
        this.shootKey = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        
        this.papers= this.game.add.group();
        
    },
    
    update: function() {
        this.amoLabel.text= "Amo left: " + this.amo;
        this.player.body.velocity.x=0;
        if(this.rightKey.isDown){
            console.log('infinity');
            this.player.body.velocity.x = 50;
        }
        if(this.shootKey.isDown){
            if( this.shootTimer<this.game.time.now && this.amo> 0){
                console.log('this is running')
                this.createPaper();
                this.amo-=1;
                this.shootTimer = this.game.time.now + this.shootRate;
            }
        }
    
    
    
    },
    
     createPaper: function () {
        var x = this.player.body.x;
        var y = this.player.body.y;
        var paper = this.papers.getFirstExists(false);
        if (!paper) {
            paper = new Paper(this.game, 0,0);
            this.papers.add(paper);
        }
        paper.reset(x, y);
        paper.revive();
     },
    
}