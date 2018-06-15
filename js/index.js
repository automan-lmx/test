var arr = [
	{ 'url' :'./img/01.jpg'},
	{ 'url' :'./img/02.jpg'},
	{ 'url' : './img/03.jpg'},
	{ 'url' : './img/04.jpg'},
	{ 'url' : './img/05.jpg'},
	{ 'url' : './img/06.jpg'},
	{ 'url' : './img/07.jpg'},
	{ 'url' : './img/08.jpg'},
	{ 'url' : './img/09.jpg'},
	{ 'url' : './img/10.jpg'},
	{ 'url' : './img/11.jpg'},
	{ 'url' : './img/12.jpg'},
	{ 'url' : './img/13.jpg'},
	{ 'url' : './img/14.jpg'}
	
];

     init();
     function init(){
     	addImg();
     	$('img').css('height',$("img").width());
     	bindEvent();
     }
    

  function addImg(){
  	var str = "";
  	arr.forEach(function(ele,index){
  		str += "<li><img src = '"+ele.url+"'  alt = ' '></li>";
  	});
  	$('.wrapper ul').append($(str));		
  }

  function bindEvent(){  	
  	var index; 	
  	$('ul').on('tap','li',function(){
  		 index = $(this).index();  
  		 loadImg(index);

  	});
  	$('.show').on('tap',function(){
  		$(this).css('display','none');
  	}).on('swipeLeft',function(){
  		
  		if(index < arr.length){ 			
  			loadImg(index);
  			index++;
  		}
  	}).on('swipeRight',function(){
  		index--;
  		if(index >= 0){
  			loadImg(index);
  		}
  	})
  }

  function loadImg(index){
  	$('.show').html(' ');
  	var device_WH = $(window).width() / $(window).height();
  	var img = new Image();
	img.src = arr[index].url;
	$('.show').css('display','block').append($(img)); 
	img.onload = function(){
		var img_WH = $(img).width()/$(img).height();
		if(img_WH < device_WH){
			$(this).css('height','100%');
		}else{
			$(this).css('width','100%');
		}
	}
   
  }

