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


$( window ).on( "load", function() {


    var audio = $('.playlist li audio');

    //get the duration of every aduiotrack and output it near the prgressbar
    audio.each(function(i){
        // var duration = $(this)[i].duration;
        var t = $(this);
        var duration = t[0].duration;

        // 97.461182 << parse these seconds into minutes
        var newDuration = convertTime(duration);

        durationTime = $('.time--duration');
        durationTime[i].append(newDuration);

        // Place CurrentTime and Convert it.
        ctime = t[0].currentTime;
        var newctime = convertTime(ctime);
        tc[i].append(newctime);

    });

});


$( document ).ready(function(e) {

    tc = $('.time--current');


	$('.play-pause').on('click', function(e) {
		e.preventDefault();
		// get the list-item of the element that
		// was clicked upon.
		// find the audio of the targeted li

    	li = $(this).closest('li');
    	aud = li.find('audio');
        var divCurrentTime = li.find('.time--current');
        var cursor = li.find('.progress-cursor');
        var currentPlayTime = aud[0].currentTime;
        var convertedCurrentPlayTime = convertTime(currentPlayTime);
        var play = li.find('.icon-play');
        var pause = li.find('.icon-pause');

		// if the audio is paused, play the audio
		if (aud[0].paused) {
            aud[0].play();
            play.hide();
            pause.show();
        }
        // else pause it.
        else {
            aud[0].pause();
            pause.hide();
            play.show();
        }

        aud[0].ontimeupdate = function() {
            cursor.css('left', aud[0].currentTime / aud[0].duration * 100 + '%');
            divCurrentTime.empty('');
            divCurrentTime.append(convertedCurrentPlayTime);
        }

        //Let's add an event listener to each progressbar
        var progress = $(this).find('.progress');
        progress.on('click', function(e) {

            // calculate the normalized position clicked
            var clickPosition = (e.pageX  - this.offsetLeft) / this.offsetWidth;
            var clickTime = clickPosition * t[0].duration;
            console.log(clickTime);

            // move the playhead to the correct position
            t[0].currentTime = clickTime;
        });

    })


    // ACCORDION
    $('.accordion--toggle').on('click', function(){
        $(this).toggleClass('active');
        $(this).next().toggle();
        /* added a border with JS, because don't know how to do it in css */
        $(this).next().css( 'border-top','1px solid' );
    });

});



