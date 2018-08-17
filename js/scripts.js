$(document).ready(function () {

	$("#myModal").on("hidden.bs.modal", function () {
		$("#iframeYoutube").attr("src", "#");
	})

	var deadline = new Date(Date.parse('02/28/2019'));
	// initializeClock('countdown', deadline);

	// var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
  	initializeClock('clockdiv', deadline);

	$('.whitelist').click(function () {
		dataLayer.push({ 'event': 'Whitelist Click' });

		ga('send', {
			hitType: 'event',
			eventCategory: 'Whitelist',
			eventAction: 'click',
			eventLabel: 'Public PreSale Campaign'
		});
	});

	$('.whitepaper').click(function () {
		dataLayer.push({ 'event': 'Whitepaper Download' });

		ga('send', {
			hitType: 'event',
			eventCategory: 'Whitepaper',
			eventAction: 'download',
			eventLabel: 'Public PreSale Campaign'
		});
	});
    
    $('.panel').matchHeight();
    $('.panel-body').matchHeight();

});

function changeVideo(vId) {
	var iframe = document.getElementById("iframeYoutube");
	iframe.src = "https://www.youtube.com/embed/" + vId;

	$("#myModal").modal("show");
}

function getTimeRemaining(endtime) {
	var t = Date.parse(endtime) - Date.parse(new Date());
	var seconds = Math.floor((t / 1000) % 60);
	var minutes = Math.floor((t / 1000 / 60) % 60);
	var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
	var days = Math.floor(t / (1000 * 60 * 60 * 24));
	return {
		'total': t,
		'days': days,
		'hours': hours,
		'minutes': minutes,
		'seconds': seconds
	};
}

function setBannerVideoSize(element) {

	$(element).each(function () {
		$(this).data('height', $(this).height());
		$(this).data('width', $(this).width());
	});

	scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element) {

	var windowWidth = $(window).width(),
		windowHeight = $(window).height(),
		videoWidth,
		videoHeight;

	$(element).each(function () {
		var videoAspectRatio = $(this).data('height') / $(this).data('width'),
			windowAspectRatio = windowHeight / windowWidth;

		if (videoAspectRatio > windowAspectRatio) {
			videoWidth = windowWidth;
			videoHeight = videoWidth * videoAspectRatio;
			$(this).css({ 'top': -(videoHeight - windowHeight) / 2 + 'px', 'margin-left': 0 });
		} else {
			videoHeight = windowHeight;
			videoWidth = videoHeight / videoAspectRatio;
			$(this).css({ 'margin-top': 0, 'margin-left': -(videoWidth - windowWidth) / 2 + 'px' });
		}

		$(this).width(videoWidth).height(videoHeight);

		$('.homepage-hero-module .video-container video').addClass('fadeIn animated');

	});
}

function getTimeRemaining(endtime) {
	var t = Date.parse(endtime) - Date.parse(new Date());
	var seconds = Math.floor((t / 1000) % 60);
	var minutes = Math.floor((t / 1000 / 60) % 60);
	var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
	var days = Math.floor(t / (1000 * 60 * 60 * 24));
	return {
	  'total': t,
	  'days': days,
	  'hours': hours,
	  'minutes': minutes,
	  'seconds': seconds
	};
  }
  
  function initializeClock(id, endtime) {
	var clock = document.getElementById(id);
	var daysSpan = clock.querySelector('.days');
	var hoursSpan = clock.querySelector('.hours');
	var minutesSpan = clock.querySelector('.minutes');
	var secondsSpan = clock.querySelector('.seconds');
  
	function updateClock() {
	  var t = getTimeRemaining(endtime);
  
	  daysSpan.innerHTML = t.days;
	  hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
	  minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
	  secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  
	  if (t.total <= 0) {
		clearInterval(timeinterval);
	  }
	}
  
	updateClock();
	var timeinterval = setInterval(updateClock, 1000);
  }
  
  