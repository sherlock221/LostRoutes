

var  Enemy = cc.PhysicsSprite.extend({
	
	  enemyType : 0,    //敌人类型
	  initalHitPoints : 0, //初始生命值
	  hitPoints : 0, //当前生命值
	  
	  velocity : null, // 速度
	  space : null, //所在物理空间
	  
	  ctor : function(enemyType,space){
		  
		  //精灵帧
		  var enemyFrameName = EnemyName.Enemy_Stone;
		  //得分值
		  var hitPointsTemp = 0;
		  //速度
		  var velocityTemp = cc.p(0,0);
		  
		  switch (enemyType){
		  	
		  	//陨石
		  	case EnemyTypes.Enemy_Stone :
		  		enemyFrameName = EnemyName.Enemy_Stone;
		  		hitPointsTemp  = Enemy_initialHitPoints.Enemy_Stone;
		  		velocityTemp = Sprite_Velocity.Enemy_Stone;
		  		break;
		  	case EnemyTypes.Enemy_1 : 
		  		enemyFrameName = EnemyName.Enemy_1;
		  		hitPointsTemp  = Enemy_initialHitPoints.Enemy_1;
		  		velocityTemp = Sprite_Velocity.Enemy_1;
		  		break;
		  	case EnemyTypes.Enemy_2 : 
		  		enemyFrameName = EnemyName.Enemy_2;
		  		hitPointsTemp  = Enemy_initialHitPoints.Enemy_2;
		  		velocityTemp = Sprite_Velocity.Enemy_2;
		  		break;
		  	case EnemyTypes.Enemy_Planet : 
		  		enemyFrameName = EnemyName.Enemy_Planet;
		  		hitPointsTemp  = Enemy_initialHitPoints.Enemy_Planet;
		  		velocityTemp = Sprite_Velocity.Enemy_Planet;
		  		break;
		  	default :
		  		break;
		  }
		  
		  this._super("#"+enemyFrameName);
		  this.setVisible(false);
		  
		  this.initalHitPoints = hitPointsTemp;
		  this.velocity = velocityTemp;
		  this.enemyType = enemyType;
		  
		  this.space = space;
		  
		  
		  //物理引擎进行碰撞检测
		  
		  
	  }
	
	
});