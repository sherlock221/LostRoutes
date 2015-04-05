


var  HelpLayer = cc.Layer.extend({

	ctor : function(){
		this._super();
		winSize = cc.director.getWinSize();


		return true;

	}



});



var  HelpScene = cc.Scene.extend({
	onEnter : function(){
		this._super();
		var  helpLayer = new HelpLayer();
		this.addChild(helpLayer);
	}

});