
/*Scrolling Functions*/


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

		if (target >= 500) {
			$('.midRight').addClass('shown');
		}

		if (target < 500) {
			$('.midRight').removeClass('shown');
		}

		if (target >= 400) {
			$('.midLeft').addClass('shown');
		}

		if (target < 400) {
			$('.midLeft').removeClass('shown');
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