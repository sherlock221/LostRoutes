


var  GamePlayLayer = cc.Layer.extend({
	
	ctor : function(){
		this._super();
		winSize = cc.director.getWinSize();
		
		
		return true;
		
	}
	
	
	
});



var  GamePlayScene = cc.Scene.extend({
	onEnter : function(){
		this._super();
		var  gamePlayLayer = new GamePlayLayer();
		this.addChild(gamePlayLayer);
	}
	
});