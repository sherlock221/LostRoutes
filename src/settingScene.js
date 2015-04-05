


var  SettingLayer = cc.Layer.extend({
	
	ctor : function(){
		this._super();
		winSize = cc.director.getWinSize();
		
		
		return true;
		
	}
	
	
	
});


var  SettingScene = cc.Scene.extend({
	onEnter : function(){
		this._super();
		var  settingLayer = new SettingLayer();
		this.addChild(settingLayer);
	}
	
});