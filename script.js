$(
function() {
	$('.play-pause').on('click', function(e) {
		e.preventDefault();
		// get the list-item of the element that
		// was clicked upon.
		li = $(this).closest('li');
		// find the audio of the targeted li
		aud = li.find('audio');

		// if the audio is paused, play the audio
		if (aud[0].paused) {
	            aud[0].play();
	            $(this).removeClass('icon-play');
	            $(this).addClass('icon-pause');
        }
        // else pause it.
        else {
            aud[0].pause();
            $(this).removeClass('icon-pause');
            $(this).addClass('icon-play');
        }

        aud[0].ontimeupdate = function() {
        	$('.progress').css('width', aud[0].currentTime / aud[0].duration * 100 + '%')
    	}
    })

})
