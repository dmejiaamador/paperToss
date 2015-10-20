var Paper = function(game,x,y,key,frame) {
    key = 'projectile';
    Phaser.Sprite.call(this,game,x,y,key,frame);
    this.scale.setTo(2);
    this.anchor.setTo(0.5);
    this.game.physics.arcade.enableBody(this);
    this.body.allowGravity= true;
    this.checkWorldBounds = true;
    this.onOutOfBoundsKill=true;
    this.events.onRevived.add(this.onRevived,this);
};

Paper.prototype= Object.create(Phaser.Sprite.prototype);
Paper.prototype.constructor = Paper;
Paper.prototype.onRevived = function() {
    //this.game.add.tween(this).to( {y: this.y-16},500,Phaser.Easing.Linear.NONE,true,0,Infinity,true);

    this.body.velocity.y=40;
    

};