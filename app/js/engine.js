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
        centerPadding: '110px',
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


	let closemodal2 = document.querySelectorAll('.close-modal');
	for (var i = 0; i < closemodal2.length; i++) {
	    var self = closemodal2[i];

		self.addEventListener('click', function(e){
			this.closest('.open').classList.remove('open');
			document.querySelector('.body').classList.remove('m-modal-open');
		}, false);
	}

	$('body').parallax({
		'elements': [
			{
				'selector': 'div.grid',
				'properties': {
					'x': {
						'background-position-x': {
						'initial': -10,
						'multiplier': 0.008,
						'invert': false,
						'unit': 'px'
						}
					}
				}
			},
			{
				'selector': 'div.main-pic',
				'properties': {
					'x': {
						'background-position-x': {
						'initial': 0,
						'multiplier': 0.03,
						'invert': true,
						'unit': 'px'
						}
					}
				}
			}
		]
	});

});
  


// обратный звонок
document.querySelector('[data-toggle="sidemodal"]').addEventListener('click', function(e){
	e.stopPropagation();
	let target = this.dataset.target,
		title = this.dataset.title;
	document.querySelector(target).classList.add('open');
	document.querySelector('.body').classList.add('m-modal-open');
}, false);


 

$(document).on('click', '.extra-toggle', function(e){
	if (window.innerWidth > 650) {
		var modal = $(this).data('popup');
		$('#' + modal).addClass('open');
		// document.querySelector('body').classList.add('modal-open-my')
	} else{
		// document.querySelector('.apanel').classList.add('open');
	}
});







// var lFollowX = 0,
//     lFollowY = 0,
//     x = 0,
//     y = 0,
//     friction = 1 / 30;

// function moveBackground() {
//   x += (lFollowX - x) * friction;
//   y += (lFollowY - y) * friction;
  
//   translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

//   $('.main-pic').css({
//     '-webit-transform': translate,
//     '-moz-transform': translate,
//     'transform': translate
//   });

//   window.requestAnimationFrame(moveBackground);
// }

// $(window).on('mousemove click', function(e) {

//   var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
//   var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
//   lFollowX = (10 * lMouseX) / 70; // 100 : 12 = lMouxeX : lFollow
//   lFollowY = (10 * lMouseY) / 70;

// });

// moveBackground(); 