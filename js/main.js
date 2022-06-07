//
// This is The Scripts used for Simply Theme
//
function main() {
(function () {
   'use strict'
	//Script
	//-----------------------------------
    jQuery(document).ready(function($){
		var wd = $(window).width();
		
		var wd = jQuery(window).width();
		/* ---------------------------------------------- /*
			* MenuMobie
		/* ---------------------------------------------- */
		$('.rst-menu-trigger').click(function(){
			$('.menu-main').slideToggle(400);
			$(this).toggleClass('exit');
			$(this).parents('#header').toggleClass('click-menu');
			return false;
		});
		
		

	});
	
	
	jQuery(window).scroll(function($) {			
		var hg_scroll = jQuery(window).scrollTop();
		if(hg_scroll >= 1){
			jQuery('header').addClass('is-sticky-opening');
		}else{
			jQuery('header').removeClass('is-sticky-opening');
		}
		
	});
	
}());
}
main();