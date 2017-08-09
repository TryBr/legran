$(document).ready(function() {

	/*---------------
			#SERIES SLIDER
	---------------*/
	var swiperSeriesSlider = new Swiper('.swiper-series', {
			slidesPerView: 6,
			paginationClickable: true,
			spaceBetween: 0,
			loop: true,
			breakpoints: {
				// when window width is <= 320px
				320: {
					slidesPerView: 1,
					spaceBetween: 0
				},
				// when window width is <= 480px
				480: {
					slidesPerView: 1,
					spaceBetween: 0
				},
				// when window width is <= 640px
				767: {
					slidesPerView: 1,
					spaceBetween: 0
				},
				1199: {
					slidesPerView: 1,
					spaceBetween: 0
				}
			}
	});

	$('.series-nav-prev').click(function() {
			swiperSeriesSlider.slidePrev();
	});

	$('.series-nav-next').click(function() {
			swiperSeriesSlider.slideNext();
	});


	/*---------------
			#PRODUCTS SLIDER
	---------------*/
	var swiperProducts = new Swiper('.swiper-products', {
			slidesPerView: 2,
			paginationClickable: true,
			loop: true,
			spaceBetween: 0,
			breakpoints: {
				// when window width is <= 320px
				320: {
					slidesPerView: 1,
					spaceBetween: 0
				},
				// when window width is <= 480px
				480: {
					slidesPerView: 1,
					spaceBetween: 0
				},
				// when window width is <= 640px
				767: {
					slidesPerView: 1,
					spaceBetween: 0
				}
			}
	});

	$('.products-nav-prev').click(function() {
			swiperProducts.slidePrev();
	});

	$('.products-nav-next').click(function() {
			swiperProducts.slideNext();
	});


	/*---------------
			#REFERENCES SLIDER
	---------------*/
	var swiperReferences = new Swiper('.swiper-references', {
			slidesPerView: 1,
			paginationClickable: true,
			spaceBetween: 0,
			loop: true,
			breakpoints: {
				// when window width is <= 320px
				320: {
					slidesPerView: 1,
					spaceBetween: 0
				},
				// when window width is <= 480px
				480: {
					slidesPerView: 1,
					spaceBetween: 0
				},
				// when window width is <= 640px
				767: {
					slidesPerView: 1,
					spaceBetween: 0
				},
				1199: {
					slidesPerView: 1,
					spaceBetween: 0
				}
			}
	});

	$('.references-nav-prev').click(function() {
			swiperReferences.slidePrev();
	});

	$('.references-nav-next').click(function() {
			swiperReferences.slideNext();
	});


	/*---------------
			#SEND FORM
	---------------*/
	$('#contacts-form').submit(function(){
		if(!$("#agree").is(':checked')) {
				$("#agree").parent().addClass('invalid');
				return false;
		}
		return false;
	});

	/*---------------
			# RIGHT MENU SERIES
	---------------*/
	var seriesItems = $('.page-menu-series').find('.page-menu-item').length;
	if (seriesItems > 3) {
		$('.page-menu-series').find('.page-menu-item:not(:first)').addClass('hide');
		$('.page-menu-wrapper').addClass('dropdown');
	}

	$('.page-menu-wrapper').hover(function(){
	  $('.page-menu-series').find('.page-menu-item').addClass('show');
		$('.page-menu-wrapper').removeClass('dropdown');
	});

	$('.page-menu-wrapper').mouseleave(function() {
		$('.page-menu-series').find('.page-menu-item').removeClass('show');
		$('.page-menu-wrapper').addClass('dropdown');
	});



	/*---------------
			# SCROLLING
	---------------*/
  $(window).scroll( function(){

      /* Check the location of each desired element */
      $('.block--hide').each( function(i){

          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();

          /* If the object is completely visible in the window, fade it it */
          if( bottom_of_window >= bottom_of_object ){

              $(this).animate({'opacity':'1'},500);

          }

      });

  });


	/*---------------
			# VALIDATE
	---------------*/
	// $("#contacts-form").validate();
	$("#contacts-form").validate({
		errorPlacement: function(error, element) {
			error.appendTo('.form__error');
		}
	 });


});
