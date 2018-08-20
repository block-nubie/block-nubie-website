$(document).ready(function () {

	$("#myModal").on("hidden.bs.modal", function () {
		$("#iframeYoutube").attr("src", "#");
	})

	var deadline = new Date(Date.parse('02/28/2019'));
	  initializeClock('clockdiv', deadline);
	  controlPanelSize();

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
    
    $('#playVideo').addClass('active');
    setTimeout(function () {
        $('#playVideo').removeClass('active');
    },3000)
    
    // $('.panel').matchHeight();
    //  $('.panel-body').matchHeight();

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

  function controlPanelSize() {
	var showChar = 200;
	var ellipsestext = "...";
	var moretext = "more";
	var lesstext = "less";
	$('.more').each(function() {
		var content = $(this).html();

		if(content.length > showChar) {

			var c = content.substr(0, showChar);
			var h = content.substr(showChar, content.length - showChar);

			var html = c + '<span class="moreelipses">'+ellipsestext+'</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">'+moretext+'</a></span>';

			$(this).html(html);
		}

	});

	$(".morelink").click(function(){
		if($(this).hasClass("less")) {
			$(this).removeClass("less");
			$(this).html(moretext);
		} else {
			$(this).addClass("less");
			$(this).html(lesstext);
		}
		$(this).parent().prev().toggle();
		$(this).prev().toggle();
		//  $('.panel-body').matchHeight();
		return false;
	});
  }
  
  