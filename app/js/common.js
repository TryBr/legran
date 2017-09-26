$(document).ready(function() {

	$('#gallery').click(function() {
			$('.series-gallery').show();

			/*---------------
					#SERIES GALLERY
			---------------*/
			var swiperSeriesGallery = new Swiper('.swiper-series-gallery', {
					pagination: '.swiper-pagination',
					paginationType: 'fraction'
			});

			$('.gallery-nav-prev').click(function() {
					swiperSeriesGallery.slidePrev();
			});

			$('.gallery-nav-next').click(function() {
					swiperSeriesGallery.slideNext();
			});
	});

	$('#gallery-close').click(function() {
			$('.series-gallery').hide();
	});



	/*---------------
			#SERIES SLIDER ADDITIONAL
	---------------*/
	var swiperSeriesSliderAd = new Swiper('.swiper-series-additional', {
			slidesPerView: 6,
			paginationClickable: true,
			spaceBetween: 0,
			loop: false,
			slideToClickedSlide: true,
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
					slidesPerView: 2,
					spaceBetween: 0
				},
				1199: {
					slidesPerView: 4,
					spaceBetween: 0
				}
			}
	});

	$('.series-nav-ad-prev').click(function() {
			swiperSeriesSliderAd.slidePrev();
	});

	$('.series-nav-ad-next').click(function() {
			swiperSeriesSliderAd.slideNext();
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
				},
				1199: {
					slidesPerView: 2,
					spaceBetween: 30
				}
			}
	});

	$('.products-nav-main-prev').click(function() {
			swiperProducts.slidePrev();
	});

	$('.products-nav-main-next').click(function() {
			swiperProducts.slideNext();
	});

	/*---------------
			#PRODUCTS SLIDER INNER
	---------------*/
	var swiperProductsInner = new Swiper('.swiper-products-inner', {
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
				},
				1199: {
					slidesPerView: 2,
					spaceBetween: 30
				}
			}
	});

	$('.products-nav-in-prev').click(function() {
			swiperProductsInner.slidePrev();
	});

	$('.products-nav-in-next').click(function() {
			swiperProductsInner.slideNext();
	});

	/*---------------
			#PRODUCTS SLIDER ADDITIONAL
	---------------*/
	var swiperProductsAd = new Swiper('.swiper-products-additional', {
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
				},
				1199: {
					slidesPerView: 2,
					spaceBetween: 30
				}
			}
	});

	$('.products-nav-ad-prev').click(function() {
			swiperProductsAd.slidePrev();
	});

	$('.products-nav-ad-next').click(function() {
			swiperProductsAd.slideNext();
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
			#BANNER SLIDER
	---------------*/
	var swiperBanner = new Swiper('.swiper-banner', {
		autoplay: 3000
	});

	/*---------------
			#SEND FORM
	---------------*/
	$('#contacts-form').submit(function(){
		if(!$("#agree").is(':checked')) {
				$("#agree").parent().addClass('invalid');
				return false;
		}
		return true;
		var msg   = $('#contacts-form').serialize();
    $.ajax({
      type: 'POST',
      url: 'send.php',
      data: msg,
			dataType: 'json',
      success: function(data) {
        $('#results').html(data);
				$('.contacts-form-result').text('Успех! Форма отправлена.');
      },
      error:  function(xhr, str){
  			console.log('Возникла ошибка: ' + xhr.responseCode);
				$('.contacts-form-result').text('Ошибка! Форма не отправлена!');
      }
    });
	});

	$(".form__field").blur(function(){
	    if($(this).val() !== ''){
	        $(this).addClass('not--empty');
	    } else {
				$(this).removeClass('not--empty');
			}
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
			# VALIDATE
	---------------*/
	// $("#contacts-form").validate();
	$("#contacts-form").validate({
		errorPlacement: function(error, element) {
			error.appendTo('.form__error');
		}
	});

	 /*---------------
			 # SERIES COLORS
	 ---------------*/
	 $('.series-colors-item').click(function() {
		 $(this).parents('.swiper-container').find('.swiper-slide').each(function( index ) {
			  $(this).removeClass('active');
		 });

		 $(this).parents('.swiper-slide').addClass('active');
 	 });


	 /*---------------
			 # DEFAULT PAGE
	 ---------------*/
   $('.default-page img').each( function(i){
       var img_height = Math.round($(this).height());
       var img_width = Math.round($(this).width());


			 $(this).wrap("<div class='content-photo-wrapper'></div>");
			 			 $('.content-photo-wrapper').append('<div class="content-photo-bg"><div>');

			 $('.content-photo-bg').width(img_width);
			 $('.content-photo-bg').height(img_height);
   });


	 $( function() {
		$( "#tabs" ).tabs({
			active: 0,
			activate: function(event ,ui){

					 var seriesCarousel = $(this);

					 $('.series-carousel').on('translated.owl.carousel', function(event) {
							 $('.series-carousel').find('.owl-item.selected').removeClass('selected');
							 $('.series-carousel').find('.owl-item.active:first').addClass('selected');
					 });

					 $(".series-carousel").trigger('refresh.owl.carousel');
					 $(".series-carousel").trigger('initialized.owl.carousel');
					 $(".series-carousel").trigger('resize.owl.carousel');
			 }
		});
	 });

	 $( function() {
		$( "#tabs2" ).tabs({ active: 0 });
	 });

		/*---------------
				#SERIES COLOR SLIDER MAIN
		---------------*/
		var colorsSliderMain = $('.swiper-colors-main');
		colorsSliderMain.each(function(){
					var mySwiperColorsMain = new Swiper(this, {
					slidesPerView: 3,
					paginationClickable: true,
					spaceBetween: 10,
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
							slidesPerView: 2,
							spaceBetween: 30
						}
					},
					observer: true,
					nextButton: $(this).parents('.series-colors-slider').find('.series-colors-nav-next')[0],
					prevButton: $(this).parents('.series-colors-slider').find('.series-colors-nav-prev')[0]
			});
		});


		/*---------------
				#SERIES COLOR SLIDER ADDITIONAL
		---------------*/
		var colorsSliderAdd = $('.swiper-colors-additional');
		colorsSliderAdd.each(function(){
					var mySwiperColorsAdd = new Swiper(this, {
					slidesPerView: 3,
					paginationClickable: true,
					spaceBetween: 10,
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
							slidesPerView: 2,
							spaceBetween: 30
						}
					},
					observer: true,
					nextButton: $(this).parents('.series-colors-slider--additional').find('.series-colors-nav-next-2')[0],
					prevButton: $(this).parents('.series-colors-slider--additional').find('.series-colors-nav-prev-2')[0]
			});
		});

		/*---------------
				#MASKED INPUT
		---------------*/
		$(".phone__field").mask("+7 (999) 999-999-99", { autoclear: false } );



		/*---------------
				# SWIPER SLIDERS SERIES
		---------------*/
		var owlsliders = $(".series-carousel");
		owlsliders.each(function() {
				$(this).owlCarousel({
						margin:30,
				    loop:true,
						slideBy: 1,
				    autoWidth:true,
				    items: 6,
						nav: true,
						dots: false,
						navText: false,
						mouseDrag: true,
						URLhashListener:true,
		        startPosition: 'URLHash'
				});
		});


		$('.series-nav-next').click(function() {
	    	$('.series-carousel').trigger('owl.next');
		});
		// Go to the previous item
		$('.series-nav-prev').click(function() {
		    $('.series-carousel').trigger('owl.prev');
		});

		var seriesCarousel = $(this);

		$('.series-carousel').on('translated.owl.carousel', function(event) {
				$(".series-carousel").trigger('refresh.owl.carousel');
				$(".series-carousel").trigger('initialized.owl.carousel');
				$(".series-carousel").trigger('resize.owl.carousel');

				$('.series-carousel').find('.owl-item.selected').removeClass('selected');
		    $('.series-carousel').find('.owl-item.active:first').addClass('selected');
		});


		function recalcCarouselWidth(carousel) {
		  var $stage = seriesCarousel.find('.owl-stage'),
		         stageW = $stage.width(),
			 $el = $('.owl-item'),
			 elW = 0;
		    $el.each(function() {
		        elW += $(this)[0].getBoundingClientRect().width;
		    });
		    if ( elW > stageW ) {
			//  console.log('elW maggiore di stageW: ' +  elW + ' > ' + stageW);
			 $stage.width( Math.ceil( elW ) );
		    }
		}

		$(window).on('resize', function(e){
		    recalcCarouselWidth( $('.owl-carousel') );
		}).resize();
		$('.owl-carousel').on('refreshed.owl.carousel', function(event) {
		     recalcCarouselWidth( $('.owl-carousel') );
		});
		$('.owl-carousel').on('onResize.owl.carousel', function(event) {
		    recalcCarouselWidth( $('.owl-carousel') );
		});

		// $('.owl-item').click(function() {
		// 		var owlSliderActive = $(this).parents('.series-carousel');
		// 		$('.owl-item').removeClass('clicked');
		// 		$(this).addClass('clicked');
		// 		// owlSliderActive.on('changed.owl.carousel', function (e) {
		// 		// 		console.log("current: ",e.relatedTarget.current())
		// 		// 		console.log("current: ",e.item.index) //same
		// 		// 		console.log("total: ",e.item.count)   //total
		// 		// });
		//
		// 		owlSliderActive.find('.owl-item').each(function( index ) {
		// 			 if ( ($(this).hasClass('clicked')) ) {
		// 				 console.log('НАШЛИ');
		// 				 console.log(index);
		// 				 owlSliderActive.trigger('to.owl.carousel', index);
		// 			 }
		// 		});
		// 		owlSliderActive.trigger('refresh.owl.carousel');
		// 		owlSliderActive.trigger('initialized.owl.carousel');
		// 		owlSliderActive.trigger('resize.owl.carousel');
		// });


		// $('.owl-carousel').on('click', '.owl-item', function(e) {
		//   var carousel = $('.owl-carousel').data('owl.carousel');
		// 	var itemIndex = $(this).index();
		// 	var owlSliderActive = $(this).parents('.series-carousel');
		// 	e.preventDefault();
		// 	owlSliderActive.trigger('to.owl.carousel', itemIndex - 2);
		//
		// });


});
