//屏幕大小
var winSize;
// 是否播放背景音乐状态
var musicStatus;
// 是否播放音效状态
var effectStatus;


var  HomeMenuLayer = cc.Layer.extend({
	
	ctor : function(){
		this._super();
		winSize = cc.director.getWinSize();
		
		cc.log("HomeLayer init...");
		
		// 加载精灵帧缓存
		cc.spriteFrameCache.addSpriteFrames(res_platform.texture_plist, res_platform.texture_res);
		
		musicStatus = cc.sys.localStorage.getItem(MUSIC_KEY);
		effectStatus = cc.sys.localStorage.getItem(EFFECT_KEY);
		
		// 瓦片地图
		var bg = new cc.TMXTiledMap(res.red_bg_tmx);
		this.addChild(bg);
		
		// top
		var topSprite =  new cc.Sprite("#home-top.png");
		topSprite.x = winSize.width/2;
		topSprite.y = winSize.height - topSprite.getContentSize().height/2
		
		this.addChild(topSprite);
		
		var endSprite = new cc.Sprite("#home-end.png");
		endSprite.x = winSize.width/2;
//		endSprite.y = winSize.height - endSprite.getContentSize().height/2
		endSprite.y = 120;
		
		this.addChild(endSprite);
		
		// 开始菜单
		var startMenuItem = new cc.MenuItemSprite(new cc.Sprite("#button.start.png"),new cc.Sprite("#button.start-on.png"),this.menuItemCallBack,this);
		startMenuItem.setTag(HomeMenuActionTypes.MenuItemStart);
		
		// 设置菜单
		var settingMenuItem = new cc.MenuItemSprite(new cc.Sprite("#button.setting.png"),new cc.Sprite("#button.setting-on.png"),this.menuItemCallBack,this);
		settingMenuItem.setTag(HomeMenuActionTypes.MenuItemSetting);
		
		// 帮助菜单
		var helpMenuItem = new cc.MenuItemSprite(new cc.Sprite("#button.help.png"),new cc.Sprite("#button.help-on.png"),this.menuItemCallBack,this);
		helpMenuItem.setTag(HomeMenuActionTypes.MenuItemHelp);
		
		var menu =  new cc.Menu(startMenuItem,settingMenuItem,helpMenuItem);
		
		menu.x = winSize.width/2;
		menu.y = winSize.height/2;
		
		menu.alignItemsVerticallyWithPadding(10);
		this.addChild(menu);
		
		
		
		
		return true;
		
	},
	
	menuItemCallBack : function(sender){
		// 是否播放音效
		if(effectStatus == BOOL.YES){
			cc.audioEngine.playEffect(res_platform.effectBlip);
		}
		
		var tsc;
		
		switch (sender.tag) {
		
			// 开始游戏
			case HomeMenuActionTypes.MenuItemStart:
				tsc = new cc.TransitionFade(1.0, new GamePlayScene());
				cc.log("Star...");
				break;
		    // 设置
			case HomeMenuActionTypes.MenuItemSetting  :
				tsc = new cc.TransitionFade(1.0,new SettingScene());
				cc.log("setting...");
				break;
			// 帮助
			case HomeMenuActionTypes.MenuItemHelp  :
				tsc = new cc.TransitionFade(1.0,new HelpScene());
				cc.log("help...");
				break;
			default:
				break;
		}
		
		if(tsc){
			cc.director.pushScene(tsc);
		}
		
	},
	
	onEnter : function(){
		this._super();
		cc.log("HomeMenuLayer enter..");
	},
	
	onExit : function(){
		this._super();
		cc.log("HomeMenuLayer exit..");
	}
	
});



var  HomeScene = cc.Scene.extend({
	onEnter : function(){
		this._super();
		var  homeMenuLayer = new HomeMenuLayer();
		this.addChild(homeMenuLayer);
	}
	
});