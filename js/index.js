today=new Date();
function initArray(){
this.length=initArray.arguments.length
for(var i=0;i<this.length;i++)
this[i+1]=initArray.arguments[i] }
var d=new initArray(
"星期日",
"星期一",
"星期二",
"星期三",
"星期四",
"星期五",
"星期六");
// document.write(
// "<font color=##000000 style='font-size:9pt;font-family: 宋体'> ",
// today.getYear(),"年",
// today.getMonth()+1,"月",
// today.getDate(),"日",
// d[today.getDay()+1],
// "</font>" ); 

window.onload = function(){ 
	//日历
	var time = (today.getYear()+1900)+"年"+(today.getMonth()+1)+"月"+(today.getDate())+"日";
	$(".data").html(time);

	var week = d[today.getDay()+1];
	$(".week").html(week);

	var weekNum = '第5周';
	$(".weekNum").html(weekNum);

  // $.simpleWeather({
  //   zipcode: '',
  //   woeid: '2357536',
  //   location: '',
  //   unit: 'f',
  //   success: function(weather) {
  //     html = '<h2>'+weather.temp+'&deg;'+weather.units.temp+'</h2>';
  //     html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
  //     html += '<li class="currently">'+weather.currently+'</li>';
  //     html += '<li>'+weather.tempAlt+'&deg;C</li></ul>';
  
  //     $("#weather").html(html);
  //   },
  //   error: function(error) {
  //     $("#weather").html('<p>'+error+'</p>');
  //   }
  // });


	//轮播图片
	//箭头切换
	var index = 1;
	// var circles = $(".picBtn").find('span');
	//var circles = document.getElementById('buttons').getElementsByTagName('span');
	// console.log(circles.attr('index'));
	$(".arrow").bind('click',function (e) {
		(e.target.id =='prev')?prevMove():nextMove();
	});

	function prevMove (){
		picMov('+');
		index = (index-1)<1?index=5:--index;
		circleHighlight(index);
	}

	function nextMove(){
		picMov('-');
		index = (index+1)>5?index=1:++index;
		circleHighlight(index);
	}

	//图片滚动
	function picMov(symbol){
		var left = parseInt($(".picContainer").css('left'));
		console.log('primeleft'+left);
		//向右
		if(left<=-3984&&symbol=='-'){
			left = 0;
		}else if(left>=0&&symbol=='+'){//向左
			left = -3984;
		}else{
			left = left+ parseInt(symbol + 996);
		}
		$(".picContainer").css('left',(left+'px'));
	}

	//小圆点指示
	function circleHighlight (indexs){
		$(".picBtn").find('span').each(function(ind, el) {
			$(".picBtn").find('span').eq(ind).attr("class","");
		});
		//获得页面对应的小圆点
		var circles = $(".picBtn").find('span').eq(indexs-1).attr("class","on");
	}
};