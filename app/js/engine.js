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
        centerPadding: '80px',
        infinite : true
	});


	// inputs
	$('.input-field').each(function(){
		if ($(this).find('.form-control').val().length > 0) {
			return $(this).addClass('is-charged');
		}
	});

	$('body').on('focusin', '.input-field', function(e) {
		return $(this).addClass('is-focused');
	})
	.on('focusout', '.input-field', function(e) {
		$(this).removeClass('is-focused');
		return $(this).removeClass('is-focused');
	})
	.on('change', '.input-field', function() {
		$(this).removeClass('is-charged');
		if ($(this).find('.form-control').val().length > 0) {
			return $(this).addClass('is-charged');
		}
	});


	$('select').selectize();

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

		/* Time Parser */
	  var inter = 1;
		$('.cifr span').each(function() {
		  $(this).attr('data-number', parseInt($(this).text()));
			var count = parseInt($(this).attr('data-number')),
				block = $(this),
				timeout = null,
				step = 1;
			timeout = setInterval(function() {
			  if (step == 25) {
				block.text(count.toString());
				clearInterval(timeout);
			  } else {
				block.text((Math.floor(count*step/25)).toString());
				step++;
			  }
			}, 60);
		});
});



// обратный звонок
$(document).on('click', '[data-toggle="sidemodal"]', function(e){
	e.stopPropagation();
	let target = this.dataset.target,
		title = this.dataset.title;
	document.querySelector(target).classList.add('open');
	document.querySelector('.body').classList.add('m-modal-open');
	// if (title != undefined) document.querySelector(target + ' #place').value = title;
});


$(document).on('click', '.close-modal', function(e){
	$(this).closest('.open').removeClass('open');
	document.querySelector('.body').classList.remove('m-modal-open');
	// document.querySelector('body').classList.remove('modal-open');
	// document.querySelector('body').classList.remove('modal-open-my');
});
