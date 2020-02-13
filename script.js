$( document ).ready(function() {

    var allAudio = $('audio');

    //for all the audio
    allAudio.each(function(i) {
        // get the duration (length) of each track
        console.log( i + ": " + $(this) );
    });


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
        	$('.progress').css('width', aud[0].currentTime / aud[0].duration * 100 + '%');
            // console.log(aud[0].duration);
    	}
    })

    // ACCORDION
    $('.accordion--toggle').on('click', function(){
        $(this).toggleClass('active');
        $(this).next().toggle();
        /* added a border with JS, because don't know how to do it in css */
        $(this).next().css( 'border-top','1px solid' );
    });
})



