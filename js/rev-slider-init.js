
    /*-------------------------------------------------------------------------------
	  Slider 
	-------------------------------------------------------------------------------*/


	
	if (typeof $.fn.revolution !== 'undefined') {
      
      $("#rev_slider").revolution({
        sliderType:"standard",
        sliderLayout:"fullscreen",
        dottedOverlay:"none",
        delay:7000,
        navigation: {
          keyboardNavigation:"off",
          keyboard_direction: "horizontal",
          onHoverStop:"off",
          touch:{
            touchenabled:"on",
            swipe_threshold: 75,
            swipe_min_touches: 1,
            swipe_direction: "horizontal",
            drag_block_vertical: false
          }
        },
        parallax: {
	        type: 'mouse+scroll',
	        origo: 'slidercenter',
	        speed: 400,
	        levels: [5,10,15,20,25,30,35,40,
	                 45,46,47,48,49,50,51,55],
	        disable_onmobile: 'on'
	    },
		responsiveLevels:[2048,1200,992],
        gridwidth:[1180,992,768],
		gridheight: [868],
        lazyType:"none",
        shadow:0,
        spinner:"off",
        stopLoop:"on",
        stopAfterLoops:0,
        shuffle:"off",
        autoHeight:"on",
        fullScreenAlignForce:"off",
        fullScreenOffsetContainer: "",
        fullScreenOffset: "",
        disableProgressBar:"on",
        hideThumbsOnMobile:"off",
        hideSliderAtLimit:0,
        hideCaptionAtLimit:0,
        hideAllCaptionAtLilmit:0,
        debugMode:false,
        fallbacks: {
          simplifyAll:"off",
          nextSlideOnWindowFocus:"off",
          disableFocusListener:false,
        }
      });
    }

    

  	$('.arrow-left').on('click', function(){
   	    $("#rev_slider").revprev();
  	});
  
	$('.arrow-right').on('click', function(){
	    $("#rev_slider").revnext();
	});

	$('.slide-number .total-count').text($('#rev_slider li').size());

    $('#rev_slider').bind("revolution.slide.onchange",function (e,data) {
	    $('.slide-number .count').text(data.slideIndex);
    });


