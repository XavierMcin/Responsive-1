

$(function(){
	$(window).scroll(function(event){
		var target = $(this).scrollTop();

		if (target >= 60) {
			$('.fixedMenu').addClass('stuck');
			$('.carousel').addClass('stuck');
			$('.farLeft nav ul li a').addClass('stuck');
			$('.centerLogo svg').addClass('stuck');
			$('.farRight nav ul li a').addClass('stuck');
		}

		if (target < 60) {
			$('.fixedMenu').removeClass('stuck');
			$('.carousel').removeClass('stuck');
			$('.farLeft nav ul li a').removeClass('stuck');
			$('.centerLogo svg').removeClass('stuck');
			$('.farRight nav ul li a').removeClass('stuck');
		}







	});
});

$(function(){
	$('.hamMenu').on('click', function(){
		$('.hamMenu').toggleClass('sideMenu');
		$('.hamMenu').toggleClass('menuSlide');
		$('.menuOption').toggleClass('slide');
	});
});


$(function(){
	$('.carousel-inner1').flickity();
});