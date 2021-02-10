// Function thông báo
var call_noti = function (msg, type, time, position) {
	if (typeof time === 'undefined' || isNaN(time))
		time = 3000;
	toastr.options.timeOut = time;
	toastr.options.extendedTimeOut = time;
	if (position)
		toastr.options.positionClass = position;
	else if ($(window).width() < 765)
		toastr.options.positionClass = "toast-bottom-full-width";
	toastr[type](msg);
};

$(document).ready(function () {
	let windowWidth = $(window).width();
	if (windowWidth < 992) {
		$("header .header-bottom .left-side > ul > li > ul").each(function (index) {
			$(this).prev().attr({
				"href": "#subMenu" + index,
				"data-toggle": "collapse"
			});
			$(this).attr({
				"id": "subMenu" + index,
				"class": "collapse",
				"data-parent": "#hasMenu"
			});
		})
	}
	
	$('header .header-bottom .left-side > ul').prepend('<li><a href="javascript:void(0)" class="d-flex d-lg-none" id="close-menu"><i class="fal fa-times"></i></a></li>');
	
	function callMenu() {
		if ($('body').hasClass('show-navigation')) {
			$('body').removeClass('show-navigation');
		} else {
			$('body').addClass('show-navigation');
		}
	}
	
	$(document).on("click", "#hamburger, #close-menu, .header-overlay", function () {
		callMenu();
	});
	
	
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
	
	var newspapers = new Swiper('#newspapers', {
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
				spaceBetween: 15,
			},
			1024: {
				slidesPerView: 2,
				spaceBetween: 15,
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
				spaceBetween: 15,
			},
			1024: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
		}
	});
	var newspapers = new Swiper('#newspapers', {
		slidesPerView: 3,
		navigation: {
			nextEl: '.newspapers .swiper-button-next',
			prevEl: '.newspapers .swiper-button-prev',
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
				spaceBetween: 15,
			},
			1024: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
		}
	});
	var story = new Swiper('#story', {
		slidesPerView: 3,
		navigation: {
			nextEl: '.story .swiper-button-next',
			prevEl: '.story .swiper-button-prev',
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
				spaceBetween: 15,
			},
			1024: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
		}
	});
	
	var best = new Swiper('#product-best', {
		slidesPerView: 3,
		navigation: {
			nextEl: '.single-product--best .swiper-button-next',
			prevEl: '.single-product--best .swiper-button-prev',
		},
		autoplay: {
			delay: 10000,
			disableOnInteraction: false,
		},
		breakpoints: {
			320: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 10,
			},
			1024: {
				slidesPerView: 5,
				spaceBetween: 10,
			},
		}
	});
	
	var favourite = new Swiper('#swiper-favourite', {
		slidesPerView: 1,
		navigation: {
			nextEl: '.sidebar-favourite .swiper-button-next',
			prevEl: '.sidebar-favourite .swiper-button-prev',
		},
		autoplay: {
			delay: 10000,
			disableOnInteraction: false,
		},
	});
	
	//	Thêm giỏ hàng
	$('.addCart').click(function (e) {
		e.preventDefault();
		let amount = $('#numberCart');
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			amount.text(parseInt(amount.text()) - 1);
		} else {
			$(this).addClass('active');
			amount.text(parseInt(amount.text()) + 1);
		}
		
		call_noti("Cập nhật giỏ hàng thành công", 'success', 2000);
	});
	
	//	Yêu thích
	$('.addFavourite').click(function (e) {
		e.preventDefault();
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
		} else {
			$(this).addClass('active');
		}
		
		call_noti("Cập nhật yêu thích thành công", 'success', 2000);
	});
	
	//  Hiệu ứng input form
	$('.input-effect').blur(function () {
		$(this).val() != '' ? $(this).addClass('valid') : $(this).removeClass('valid');
	});
	if ($('.input-effect option:selected')) {
		$('.input-effect option:selected').parent().addClass('valid')
	}
	
	$('.modal-theme').on('hide.bs.modal', function () {
		$('#tabResgister').removeClass('show active');
		$('#tabLogin').addClass('show active');
	});
	
	$('.modal-theme [data-toggle=tab]').click(function (e) {
		$('.modal-theme [data-toggle=tab]').removeClass('active');
	})
})