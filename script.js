$( document ).ready(function() {

    //get the duration of every aduiotrack and output it near the prgressbar


    var session = $('.playlist li');
    session.each(function(i) {

        // get every audio in the list item;
        var a = $(this).find('audio');
        var duration = a[0].duration;

        // 97.461182 << parse these seconds into minutes
        var newDuration = convertTime(duration);

        time = $(this).find('.time');
        time.append(newDuration);
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
        	$('.progress-cursor').css('left', aud[0].currentTime / aud[0].duration * 100 + '%');
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


    // STOLEN FROM : https://www.tutorialspoint.com/How-to-convert-JavaScript-seconds-to-minutes-and-seconds
    // Adapted to suit my needs
    function convertTime(duration) {
        var hr = ~~(duration / 3600);
        var min = ~~((duration % 3600) / 60);
        var sec = ~~(duration % 60);
        var sec_min = "";

            if (hr > 0) {
               sec_min += "" + hrs + ":" + (min < 10 ? "0" : "");
            }
            sec_min += "" + min + ":" + (sec < 10 ? "0" : "");
            sec_min += "" + sec;
            return sec_min;
         }
})



