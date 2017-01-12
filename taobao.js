
$(function(){

	$('.search-ul li').click(function(){
		$('.search-ul li').removeClass('selected');
		$(this).addClass('selected');
		$('.input-wrap').hide();
		var dataType = $(this).attr('data-type');
		var divId = '#' + dataType + '-input';
		$(divId).show();
	});


	$('.notice li').mouseover(function(){
		$('.notice li').removeClass('luky');
		$(this).addClass('luky');
		$('.mod-box div.mod').hide();
		

		var data = $(this).attr('data-mod');

		var modId= '#'+ data;

		$(modId).show();


		});


	$('.service-bd li').mouseover( function(){
		$('#popup-box').show();
		var currentLi = $(this);
		var id = currentLi.attr('data-div');
		$('#popup-box > div').hide();
		$('#' + id).show();

	});



	$('.service-bd li').mouseout(function(){
		$('#popup-box').hide();
		//var currentLi = $(this);
		//var id = currentLi.attr('data-div');
		//$('#' + id).hide();

	});

	$('#popup-box').mouseover(function(){
		$(this).show();
	});

	$('#popup-box').mouseout(function(){
		$(this).hide();
	});





	var topvalue = 0;
	var count = $('.search-hot-box').find('.search-hot').length;
	var index = 0;
	

	setInterval(function(){

		topvalue = 18 * index;
		$('.search-hot-box').css({top: '-' + topvalue + 'px'});
		if(index < count - 1 ){
			index++;
		}else{
			index = 0;
		}

		
	}, 2000);

	

	$('#Glide').glide();
	$('#Small-gd').glide();





});

	