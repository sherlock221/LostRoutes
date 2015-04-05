//Home菜单操作标识
var HomeMenuActionTypes = {
	 MenuItemStart : 100,
	 MenuItemSetting : 101,
	 MenuItemHelp  : 102
};

// 定义敌人类型
var EnemyTypes = {
	 
	  // 陨石
	Enemy_Stone : 0,
	  // 敌机1
	  Enemy_1 : 1,
	  // 敌机2
	  Enemy_2 : 2,
	  // 行星
	  Enemy_Planet : 3
	  
}


// 定义敌人精灵帧的名称
var  EnemyName = {
	
		Enemy_Stone : "gameplay.stone1.png",
		Enemy_1 : "gameplay.enemy-1.png",
		Enemy_2 : "gameplay.enemy-2.png",
		Enemy_Planet : "gameplay.enemy.planet.png"
}


// 游戏场景中使用的标签常量
var  GameSceneNodeTag = {
		StatusBarFighterNode: 301,
		StatusBarLifeNode: 302,
		StatusBarScore: 303,
		BatchBackground: 800,
		Fighter: 900,
		ExplosionParticleSystem: 901,
		Bullet: 100,
		Enemy: 700
}


//精灵速度常量
//精灵速度常量
Sprite_Velocity = {
		Enemy_Stone: cc.p(0, -300),
		Enemy_1: cc.p(0, -80),
		Enemy_2: cc.p(0, -100),
		Enemy_Planet: cc.p(0, -50),
		Bullet: cc.p(0, 300)
};

//游戏分数
EnemyScores = {
		Enemy_Stone:5,
		Enemy_1:10,
		Enemy_2:15,
		Enemy_Planet:20
};

//敌人初始生命值
Enemy_initialHitPoints = {
		Enemy_Stone:3,
		Enemy_1:5,
		Enemy_2:15,
		Enemy_Planet:20
};

//我方飞机生命数
Fighter_hitPoints = 5;

//碰撞类型
Collision_Type = {
		Enemy: 1,
		Fighter: 1,
		Bullet: 1
};

//保存音效状态键
EFFECT_KEY = "sound_key";
//保存声音状态键
MUSIC_KEY  = "music_key";
//保存最高分记录键
HIGHSCORE_KEY = "highscore_key";

//自定义的布尔常量
BOOL = {
		NO:"0",
		YES:"1"
}




