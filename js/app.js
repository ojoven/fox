$(function() {

	// Menu options
	$('.js-to-mode').on('click', function() {

		$('.js-to-mode').removeClass('is-active');
		$(this).addClass('is-active');

		if ($(this).attr('data-mode') === 'red') {
			$('body').addClass('red-mode');
		} else {
			$('body').removeClass('red-mode');
		}

	});

	// Audio
	$(".js-to-control-audio").on('click', function() {

		if ($(this).attr('data-playing') === 'playing') {
			$(".audio-player")[0].pause();
			$(this).attr('data-playing', 'paused')
		} else {
			$(".audio-player")[0].play();
			$(this).attr('data-playing', 'playing')
		}
    })
});