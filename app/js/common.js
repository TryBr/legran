$(document).ready(function() {

	/*---------------
			#SERIES SLIDER
	---------------*/
	// var swiperSeriesSlider = new Swiper('.swiper-series', {
	// 		slidesPerView: 6,
	// 		paginationClickable: true,
	// 		spaceBetween: 0,
	// 		loop: false,
	// 		slideToClickedSlide: true,
	// 		breakpoints: {
	// 			// when window width is <= 320px
	// 			320: {
	// 				slidesPerView: 1,
	// 				spaceBetween: 0
	// 			},
	// 			// when window width is <= 480px
	// 			480: {
	// 				slidesPerView: 1,
	// 				spaceBetween: 0
	// 			},
	// 			// when window width is <= 640px
	// 			767: {
	// 				slidesPerView: 2,
	// 				spaceBetween: 0
	// 			},
	// 			1199: {
	// 				slidesPerView: 4,
	// 				spaceBetween: 0
	// 			}
	// 		}
	// });


	// $('.series-nav-prev').click(function() {
	// 		swiperSeriesSlider.slidePrev();
	// });
	//
	// $('.series-nav-next').click(function() {
	// 		swiperSeriesSlider.slideNext();
	// });



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
			#SERIES COLOR SLIDER
	---------------*/
	// var swiperSeriesColorMain = new Swiper('.swiper-colors-main', {
	// 		slidesPerView: 3,
	// 		paginationClickable: true,
	// 		spaceBetween: 10,
	// 		breakpoints: {
	// 			// when window width is <= 320px
	// 			320: {
	// 				slidesPerView: 1,
	// 				spaceBetween: 0
	// 			},
	// 			// when window width is <= 480px
	// 			480: {
	// 				slidesPerView: 1,
	// 				spaceBetween: 0
	// 			},
	// 			// when window width is <= 640px
	// 			767: {
	// 				slidesPerView: 1,
	// 				spaceBetween: 0
	// 			},
	// 			1199: {
	// 				slidesPerView: 2,
	// 				spaceBetween: 30
	// 			}
	// 		}
	// });
	//
	//
	// $('.series-colors-nav-prev').click(function() {
	// 		swiperSeriesColorMain.slidePrev();
	// });
	//
	// $('.series-colors-nav-next').click(function() {
	// 		swiperSeriesColorMain.slideNext();
	// });

	/*---------------
			#SERIES COLOR SLIDER 2
	---------------*/
	// var swiperSeriesColorAdditional = new Swiper('.swiper-colors-additional', {
	// 		slidesPerView: 3,
	// 		paginationClickable: true,
	// 		spaceBetween: 10,
	// 		breakpoints: {
	// 			// when window width is <= 320px
	// 			320: {
	// 				slidesPerView: 1,
	// 				spaceBetween: 0
	// 			},
	// 			// when window width is <= 480px
	// 			480: {
	// 				slidesPerView: 1,
	// 				spaceBetween: 0
	// 			},
	// 			// when window width is <= 640px
	// 			767: {
	// 				slidesPerView: 1,
	// 				spaceBetween: 0
	// 			},
	// 			1199: {
	// 				slidesPerView: 2,
	// 				spaceBetween: 30
	// 			}
	// 		}
	// });
	//
	//
	// $('.series-colors-nav-prev-2').click(function() {
	// 		swiperSeriesColorAdditional.slidePrev();
	// });
	//
	// $('.series-colors-nav-next-2').click(function() {
	// 		swiperSeriesColorAdditional.slideNext();
	// });

	/*---------------
			#SERIES COLOR SLIDER 3
	---------------*/
	// var swiperSeriesColorMain2 = new Swiper('.swiper-colors-main-2', {
	// 		slidesPerView: 3,
	// 		paginationClickable: true,
	// 		spaceBetween: 10,
	// 		breakpoints: {
	// 			// when window width is <= 320px
	// 			320: {
	// 				slidesPerView: 1,
	// 				spaceBetween: 0
	// 			},
	// 			// when window width is <= 480px
	// 			480: {
	// 				slidesPerView: 1,
	// 				spaceBetween: 0
	// 			},
	// 			// when window width is <= 640px
	// 			767: {
	// 				slidesPerView: 1,
	// 				spaceBetween: 0
	// 			},
	// 			1199: {
	// 				slidesPerView: 2,
	// 				spaceBetween: 30
	// 			}
	// 		}
	// });
	//
	//
	// $('.series-colors-nav-prev-11').click(function() {
	// 		swiperSeriesColorMain2.slidePrev();
	// });
	//
	// $('.series-colors-nav-next-11').click(function() {
	// 		swiperSeriesColorMain2.slideNext();
	// });

	/*---------------
			#SERIES COLOR SLIDER 4
	---------------*/
	// var swiperSeriesColorAdditional2 = new Swiper('.swiper-colors-additional-2', {
	// 		slidesPerView: 3,
	// 		paginationClickable: true,
	// 		spaceBetween: 10,
	// 		breakpoints: {
	// 			// when window width is <= 320px
	// 			320: {
	// 				slidesPerView: 1,
	// 				spaceBetween: 0
	// 			},
	// 			// when window width is <= 480px
	// 			480: {
	// 				slidesPerView: 1,
	// 				spaceBetween: 0
	// 			},
	// 			// when window width is <= 640px
	// 			767: {
	// 				slidesPerView: 1,
	// 				spaceBetween: 0
	// 			},
	// 			1199: {
	// 				slidesPerView: 2,
	// 				spaceBetween: 30
	// 			}
	// 		}
	// });
	//
	//
	// $('.series-colors-nav-prev-22').click(function() {
	// 		swiperSeriesColorAdditional2.slidePrev();
	// });
	//
	// $('.series-colors-nav-next-22').click(function() {
	// 		swiperSeriesColorAdditional2.slideNext();
	// });


	/*---------------
			#BANNER SLIDER
	---------------*/
	var swiperBanner = new Swiper('.swiper-banner', {
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
			# SCROLLING
	---------------*/
  // $(window).scroll( function(){
	//
  //     /* Check the location of each desired element */
  //     $('.block--hide').each( function(i){
	//
  //         var bottom_of_object = $(this).offset().top + $(this).outerHeight();
  //         var bottom_of_window = $(window).scrollTop() + $(window).height();
	//
  //         /* If the object is completely visible in the window, fade it it */
  //         if( bottom_of_window >= bottom_of_object ){
	//
  //             $(this).animate({'opacity':'1'},500);
	//
  //         }
	//
  //     });
	//
  // });


	/*---------------
			# VALIDATE
	---------------*/
	// $("#contacts-form").validate();
	$("#contacts-form").validate({
		errorPlacement: function(error, element) {
			error.appendTo('.form__error');
		}
	});



	//  $('.series-information__link').click(function() {
	// 	 $('html, body').animate({
	// 			 scrollTop: $( $.attr(this, 'href') ).offset().top
	// 	 }, 500);
 // 	 });


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
		$( "#tabs" ).tabs({ active: 0 });
	 });

	 $( function() {
		$( "#tabs2" ).tabs({ active: 0 });
	 });

	 /*---------------
			 # SWIPER SLIDERS SERIES
	 ---------------*/
		var tileSlider = $('.swiper-series');
		tileSlider.each(function(){
		    var mySwiper = new Swiper(this, {
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
		 			},
		 		  observer: true,
	        nextButton: $(this).parents('.series-variants-slider').find('.series-nav-next')[0],
	        prevButton: $(this).parents('.series-variants-slider').find('.series-nav-prev')[0]
		    });
		});

		$('.series-variants-item').click(function() {
			var swiperWrapper = $(this).parents('.swiper-wrapper');
			swiperWrapper.css({'margin-left' : 0+'px'});
			var sum = 0;
			var swiperMarginLeft = 0;
			var totalSum = 0;
			var activeElemNum = 0;
	    swiperWrapper.find('.swiper-slide').each( function(i){
				sum = i;
				if ($(this).hasClass('swiper-slide-active')) {
					console.log(i);
					activeElemNum = i;
				}
      });
			totalSum = activeElemNum;
			swiperMarginLeft = totalSum*17;
			console.log(swiperMarginLeft);
			swiperWrapper.css({'margin-left' : swiperMarginLeft+'px'});
		});

		$('.series-nav div').click(function() {
			var swiperWrapper = $(this).parents('.series-variants-slider').find('.swiper-series').find('.swiper-wrapper');
			swiperWrapper.css({'margin-left' : 0+'px'});
			var sum = 0;
			var swiperMarginLeft = 0;
			var totalSum = 0;
			var activeElemNum = 0;
			swiperWrapper.find('.swiper-slide').each( function(i){
				sum = i;
				if ($(this).hasClass('swiper-slide-active')) {
					console.log(i);
					activeElemNum = i;
				}
			});
			totalSum = activeElemNum;
			swiperMarginLeft = totalSum*17;
			swiperWrapper.css({'margin-left' : swiperMarginLeft+'px'});
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

});
