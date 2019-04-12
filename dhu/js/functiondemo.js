//$(function(){  // $(document).ready shorthand
//  $('.monster').fadeIn('slow');
//});
window.onload = windowHeight; //页面载入完毕执行函数
    function windowHeight() {
      var h = document.documentElement.clientHeight; //获取当前窗口可视操作区域高度
      var array = ["top","prologue","layer1","layer2","layer3","layer4"];  
	  for (var i = 0; i < array.length; i++) {  
        var bodyHeight = document.getElementById(array[i]); //寻找ID为content的对象
      	bodyHeight.style.height = h + "px"; //想要自适应高度的对象
      }  
	  
    }
    setInterval(windowHeight, 500);//每半秒执行一次windowHeight函数
	
$(document).ready(function() {
	//首页淡入出现
	$('#top').fadeQueue({
		duration: 1200,
        pause: 300
		})
		
	//滚动到页面指定位置
	$('#btn_start').click(function(){
		var h = document.documentElement.clientHeight;
		window.scrollTo(0,h+25);
	})
	$('#nav_top').click(function(){
		window.scrollTo(0,0);
	})
	$('#nav1').click(function(){
		var h = document.documentElement.clientHeight;
		window.scrollTo(0,2*h);
	})
	$('#nav2').click(function(){
		var h = document.documentElement.clientHeight;
		window.scrollTo(0,3*h);
	})
	$('#nav3').click(function(){
		var h = document.documentElement.clientHeight;
		window.scrollTo(0,4*h);
	})
	$('#nav4').click(function(){
		var h = document.documentElement.clientHeight;
		window.scrollTo(0,5*h);
	})
		
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.content').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it */
            if( bottom_of_window + 800 > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},1000);
                    
            }
            
        }); 

    });
	
//播放讲解


	
	//测试题:
	var survey = []; //Bidimensional array: [ [1,3], [2,4] ]
	
	//switcher function:
	$(".rb-tab").click(function(){
	  //Spot switcher:
	  $(this).parent().find(".rb-tab").removeClass("rb-tab-active");
	  $(this).addClass("rb-tab-active");
	});
	
	//Save data:
	$(".trigger").click(function(){
	  //Empty array:
	  survey = [];
	  //Push data:
	  for (i=1; i<=$(".rb").length; i++) {
		var rb = "rb" + i;
		var rbValue = parseInt($("#rb-"+i).find(".rb-tab-active").attr("data-value"));
		//Bidimensional array push:
		survey.push([i, rbValue]); //Bidimensional array: [ [1,3], [2,4] ]
	  };
	  //Debug:
	  window.open("trophy.html");
	});
	
	//Debug:
	function debug(){
	  var debug = "";
	  for (i=0; i<survey.length; i++) {
		debug += "No " + survey[i][0] + " = " + survey[i][1] + "\n";
	  };
	  alert(debug);
	};

});


