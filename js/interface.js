( function($) {
  'use strict';



  	/*-------------------------------------------------------------------------------
	  Detect mobile device 
	-------------------------------------------------------------------------------*/


	
	var mobileDevice = false; 

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	  	$('html').addClass('mobile');
	  	mobileDevice = true;
	}

	else{
		$('html').addClass('no-mobile');
		mobileDevice = false;
	}



    /*-------------------------------------------------------------------------------
	  Window load
	-------------------------------------------------------------------------------*/



	$(window).on('load', function(){
		$('.loader').fadeOut(300);
	});

	

	var navbar=$('.navbar:not(.navbar-fixed)');
	var navbarResponsive=$('.navbar-responsive');
	var navbarMobile=$('.nav-mobile');


	/*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/



	navbar.affix({
	  offset: {
	    top: 1
	  }
	});


	navbar.on('affix.bs.affix', function() {
		if (!navbar.hasClass('affix')){
			navbar.addClass('animated slideInDown');
		}
	});

	navbar.on('affixed-top.bs.affix', function() {
	  	navbar.removeClass('animated slideInDown');
	  	
	});

	$('.nav-mobile-list li a[href="#"]').on('click',function(){
		$(this).closest('li').toggleClass('current');
		$(this).closest('li').children('ul').slideToggle(200);
		return false;
	});



	/*-------------------------------------------------------------------------------
	 Navbar collapse
	-------------------------------------------------------------------------------*/



	$('.collapse').on('show.bs.collapse', function () {
		navbar.addClass('affix');
	});

	$('.collapse').on('hidden.bs.collapse', function () {
		if (navbar.hasClass('affix-top')){
			navbar.removeClass('affix');
		}
	});

	navbar.on('affixed-top.bs.affix', function() {
		if ($('.collapse').hasClass('in')){
			navbar.addClass('affix');
		}	
	});



	/*-------------------------------------------------------------------------------
	  Smooth scroll to anchor
	-------------------------------------------------------------------------------*/



	$('body').scrollspy({ 
		offset:  66 
	});


    $('.nav-desctop li a, .nav-mobile li a').on('click', function() {
        var target = $(this.hash);
        if (target.length) {
            $('html,body').animate({
                scrollTop: (target.offset().top - 65)
            }, 1000);
            return false;
        }
    });




	/*-------------------------------------------------------------------------------
	  Isotope
	-------------------------------------------------------------------------------*/



    $('.isotope').each(function() {		
		var $container = $(this);
		$container.imagesLoaded( function(){
			$container.isotope({		 
				itemSelector: '.isotope-item',
				percentPosition: true,
				layoutMode: 'masonry',	
				masonry: {
				  columnWidth: '.isotope-item'
				}	
			});	
		});
    }); 



	/*-------------------------------------------------------------------------------
	  Popup Gallery
	-------------------------------------------------------------------------------*/



	$('.js-gallery').each(function(){
		$(this).magnificPopup({
			delegate: 'a:not(.link)',
		    type: 'image',
		    removalDelay: 300,
		    tLoading: 'Loading image #%curr%...',
		    gallery: {
		       enabled: true,
		       navigateByImgClick: true,
		       preload:[0,1]
		    },
		    image: {
		       tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
		       titleSrc: function(item) {
		          return item.el.attr('title') + '<small></small>';
		       }
		    }

		});
	});



	/*-------------------------------------------------------------------------------
	  Partners Carousel
	-------------------------------------------------------------------------------*/



	$(".js-partners-carousel").owlCarousel({
		items : 5,
	    itemsDesktop : [1199,3],
	    itemsDesktopSmall : [980,2],
	    itemsTablet: [768,1],
	    itemsMobile : [479,1],
	    pagination:true,
	 	autoHeight : true
	});



	/*-------------------------------------------------------------------------------
	  Clients Carousel
	-------------------------------------------------------------------------------*/



	$(".js-client-carousel").owlCarousel({
		items : 2,
	    itemsDesktop : [1199,1],
	    itemsDesktopSmall : [980,1],
	    itemsTablet: [768,1],
	    itemsMobile : [479,1],
	    pagination:true,
	 	autoHeight : true
	});



	/*-------------------------------------------------------------------------------
	  Subscribe Form
	-------------------------------------------------------------------------------*/



	$('.js-subscribe-form').ajaxChimp({
        language: 'cm',
        url: 'http://csmthemes.us3.list-manage.com/subscribe/post?u=9666c25a337f497687875a388&id=5b881a50fb'
            //http://xxx.xxx.list-manage.com/subscribe/post?u=xxx&id=xxx
    });


    $.ajaxChimp.translations.cm = {
        'submit': 'Submitting...',
        0: '<i class="fa fa-envelope"></i> Awesome! We have sent you a confirmation email',
        1: '<i class="fa fa-exclamation-triangle"></i> Please enter a value',
        2: '<i class="fa fa-exclamation-triangle"></i> An email address must contain a single @',
        3: '<i class="fa fa-exclamation-triangle"></i> The domain portion of the email address is invalid (the portion after the @: )',
        4: '<i class="fa fa-exclamation-triangle"></i> The username portion of the email address is invalid (the portion before the @: )',
        5: '<i class="fa fa-exclamation-triangle"></i> This email address looks fake or invalid. Please enter a real email address'
    };


	/*-------------------------------------------------------------------------------
	  Ajax Form
	-------------------------------------------------------------------------------*/



	if ($('.js-ajax-form').length) {
		$('.js-ajax-form').each(function(){
			$(this).validate({
				errorClass: 'error wobble-error',
			    submitHandler: function(form){
		        	$.ajax({
			            type: "POST",
			            url:"mail.php",
			            data: $(form).serialize(),
			            success: function() {
		                	$('.modal').modal('hide');
		                	$('#success').modal('show');
		                },

		                error: function(){
			                $('.modal').modal('hide');
		                	$('#error').modal('show');
			            }
			        });
			    }
			});
		});
	}
})(jQuery);
