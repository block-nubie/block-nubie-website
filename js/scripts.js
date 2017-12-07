$( document ).ready(function() {
		
	setBannerVideoSize('.video-container .poster img');
	setBannerVideoSize('.video-container .filter');
	setBannerVideoSize('.video-container video');
			
	$(window).on('resize', function() {
		scaleBannerVideoSize('.video-container .poster img');
		scaleBannerVideoSize('.video-container .filter');
		scaleBannerVideoSize('.video-container video');
	});
	
});
	
	function setBannerVideoSize(element){
		
		$(element).each(function(){
			$(this).data('height', $(this).height());
			$(this).data('width', $(this).width());
		});
	
		scaleBannerVideoSize(element);
	
	}
	
	function scaleBannerVideoSize(element){
	
		var windowWidth = $(window).width(),
			windowHeight = $(window).height(),
			videoWidth,
			videoHeight;
		
		$(element).each(function(){
			var videoAspectRatio = $(this).data('height')/$(this).data('width'),
				windowAspectRatio = windowHeight/windowWidth;
				
			if (videoAspectRatio > windowAspectRatio) {
				videoWidth = windowWidth;
				videoHeight = videoWidth * videoAspectRatio;
				$(this).css({'top' : -(videoHeight - windowHeight) / 2 + 'px', 'margin-left' : 0});
			} else {
				videoHeight = windowHeight;
				videoWidth = videoHeight / videoAspectRatio;
				$(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});
			}
	
			$(this).width(videoWidth).height(videoHeight);
	
			$('.homepage-hero-module .video-container video').addClass('fadeIn animated');
		
		});
	}