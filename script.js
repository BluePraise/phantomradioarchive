$(
function() {
	$('.play-pause').on('click', function(e) {
		e.preventDefault();
		// get the list-item of the element that
		// was clicked upon.
		li = $(this).closest('li');
		// find the audio of this li that was targeted
		aud = li.find('audio');

		// if the audio is paused, play the audio
		if (aud[0].paused) {
			// if (findPause.length = 1) {
	            aud[0].play();
	            $(this).removeClass('icon-play');
	            $(this).addClass('icon-pause');
            // }
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
