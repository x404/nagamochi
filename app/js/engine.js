$(document).ready(function(){

	$('#news-carousel').slick({
		dots: false,
		prevArrow: '<button type="button" class="slick-prev slick-arrow" aria-label="Назад"></button>',
		nextArrow: '<button type="button" class="slick-next slick-arrow" aria-label="Вперед"></button>',
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 4000,
		arrows : true,
		appendArrows : $('.prevnext'),
        centerMode: true,
        centerPadding: '105px',
        infinite : true
	});



	// // mobile-menu
	// $('#navbar').each(function(){
	// 	var $this = $(this),
	// 		$link = $('.navbar-toggle'),
	// 		$close = $('.close-menu'),

	// 		init = function(){
	// 			$link.on('click', openMenu);
	// 			$close.on('click', closeMenu);
	// 		},
	// 		openMenu = function(e){
	// 			e.preventDefault();
	// 			h = $(document).height();
	// 			$('body').addClass('o-menu');
	// 			$('#navbar').height(h);

	// 		},
	// 		closeMenu = function(e){
	// 			e.preventDefault();
	// 			$('body').removeClass('o-menu');
	// 			$('#navbar').height('auto');
	// 		};
	// 	init();
	// });	
});
