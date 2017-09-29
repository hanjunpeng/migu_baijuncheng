
//页面加载顺序
$(function(){
	start()

});
var count = 0;
var timer = null;
var speed = 15;
//创建开始按钮
function start(){
	var startdiv = $("<div class='start'></div>");
	startdiv.text('开始');
	$("body").append(startdiv);
	startdiv.on('click',function(){
		creatBall(this);
	})
};

//创建小球
function creatBall($this){
	var $this = $($this);
	var ball = $("<span class='ball'></span>");
	num(ball);
	move(ball);
};

//小球写入数字
function num(ball){
	count = count + 1;
	ball.html(count);
	$("body").append(ball);
};

//开始移动
function move(ball){
	var _this = ball;
	
	console.log(_this);
	this.timer = setInterval(function(){
		 bx = speed * Math.random(Math.sin(Math.PI/180));
		 by = speed * Math.random(Math.cos(Math.PI/180));
		 bx += bx;
		 by += by;
		_this.css({"top":bx,"left":by})
	},30)
}
