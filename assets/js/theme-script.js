$(document).ready(function () {
	$('#banner .slider').slick({
		autoplay: false,
		speed: 3000,
		autoplaySpeed: 10000,
		lazyLoad: 'progressive',
		arrows: true,
		dots: false,
		prevArrow: '<div class="slick-nav prev-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
		nextArrow: '<div class="slick-nav next-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
	}).slickAnimation();
	
	
	$('#banner .slick-nav').on('click touch', function (e) {
		e.preventDefault();
		var arrow = $(this);
		if (!arrow.hasClass('animate')) {
			arrow.addClass('animate');
			setTimeout(() => {
				arrow.removeClass('animate');
			}, 1600);
		}
	});
	
	var articleNewspapers = new Swiper('#article-newspapers', {
		slidesPerView: 3,
		navigation: {
			nextEl: '.intro .bottom .swiper-button-next',
			prevEl: '.intro .bottom .swiper-button-prev',
		},
		autoplay: {
			delay: 10000,
			disableOnInteraction: false,
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
			1024: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
		}
	});
	var activities = new Swiper('#activities', {
		slidesPerView: 3,
		navigation: {
			nextEl: '.activities .swiper-button-next',
			prevEl: '.activities .swiper-button-prev',
		},
		autoplay: {
			delay: 10000,
			disableOnInteraction: false,
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
			1024: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
		}
	});
	var award = new Swiper('#award', {
		slidesPerView: 3,
		navigation: {
			nextEl: '.award .swiper-button-next',
			prevEl: '.award .swiper-button-prev',
		},
		autoplay: {
			delay: 10000,
			disableOnInteraction: false,
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
			1024: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
		}
	});
})