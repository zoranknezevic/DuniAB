jQuery(document).ready(function($) {
	
	/* smooth scroll nav */	
	$('.second-nav a').on('click', function (e) {
		e.preventDefault(); 
		var $link = $(this);
		if ($(window).width() >= 768) {
			if ($(window).scrollTop() < $('#'+ $link.attr('data-scrollto')).offset().top) {
				$('html,body').animate({
					scrollTop: $('#'+ $link.attr('data-scrollto')).offset().top - $('#menu-top-menu').height() + 30
				}, 800);			
			} else {
				
			}			
		} else { 

		}
	});	
    
    
    $(function() {
        $('.valign').matchHeight({
            target: $('.teaser-image-text .primary-img')
        });
    });    


}); /* END document ready */




