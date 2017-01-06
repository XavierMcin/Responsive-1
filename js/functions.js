

$(function(){
	$(window).scroll(function(event){
		var target = $(this).scrollTop();

		if (target >= 30) {
			$('.fixedMenu').addClass('stuck');
			$('.carousel').addClass('stuck');
			$('.farLeft nav ul li a').addClass('stuck');
			$('.centerLogo svg').addClass('stuck');
			$('.farRight nav ul li a').addClass('stuck');
		}

		if (target < 100) {
			$('.fixedMenu').removeClass('stuck');
			$('.carousel').removeClass('stuck');
			$('.farLeft nav ul li a').removeClass('stuck');
			$('.centerLogo svg').removeClass('stuck');
			$('.farRight nav ul li a').removeClass('stuck');
		}







	});
});