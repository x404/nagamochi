$(document).ready(function(){

	// homepage news carousel
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
        infinite : true,
		responsive: [
		    {
		      breakpoint: 1700,
		      settings: {
		        centerPadding: "70px"
		      }
		    },
			{
		      breakpoint: 991,
		      settings: {
		        centerPadding: "50px"
		      }
		    },
			{
		      breakpoint: 850,
		      settings: {
		        centerPadding: "30px"
		      }
		    },
			{
		      breakpoint: 768,
		      settings: {
		        centerPadding: "0px"
		      }
		    },
			{
		      breakpoint: 740,
		      settings: {
		        centerPadding: "10px"
		      }
		    }		    
	    ]
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

	// scroll
	var nice = $('.selectize-dropdown-content').niceScroll(); 


	// mobile menu
	var apanelfolder = document.querySelectorAll('.apanel .folder span');
	for (var i = 0; i < apanelfolder.length;i++)
	{
		var self = apanelfolder[i];
		self.addEventListener("click", function(e){
			e.preventDefault();
			let $this = $(this),
				menuItem = $this.data('name');

			document.querySelector('.page-asubnav').classList.add('open');

			$('.apanel .subnav_content-active').removeClass('subnav_content-active');
			$('.apanel .subnav_content-' + menuItem).addClass('subnav_content-active');
		});
	}	
});
  


// callback
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
		document.querySelector('.apanel').classList.add('open');
	}
});



// mobile menu
document.querySelector('.apanel .close-menu').addEventListener("click", function(){
	document.querySelector('.apanel.open').classList.remove('open');
}, false);

document.querySelector('.asubnav .back_btn').addEventListener("click", function(){
	document.querySelector('.page-asubnav.open').classList.remove('open');
}, false);


// =/mobile menu




// `closest` polyfill for IE11
(function (ElementProto) {
	if (typeof ElementProto.matches !== 'function') {
		ElementProto.matches = ElementProto.msMatchesSelector || ElementProto.mozMatchesSelector || ElementProto.webkitMatchesSelector || function matches(selector) {
			var element = this;
			var elements = (element.document || element.ownerDocument).querySelectorAll(selector);
			var index = 0;

			while (elements[index] && elements[index] !== element) {
				++index;
			}

			return Boolean(elements[index]);
		};
	}

	if (typeof ElementProto.closest !== 'function') {
		ElementProto.closest = function closest(selector) {
			var element = this;

			while (element && element.nodeType === 1) {
				if (element.matches(selector)) {
					return element;
				}

				element = element.parentNode;
			}

			return null;
		};
	}
})(window.Element.prototype);