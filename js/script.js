
$( document ).ready(function(e) {
    Amplitude.init({
        "songs": [
          {
            "url": "./audio/audiofile.mp3",
            "url": "../audio/outfoxing.mp3"
          }
        ],
        debug: false
    });

	$('.play-toggle').on('click', function(e) {
		e.preventDefault();
        var el = $(this);
        var play = el.find('.icon-play');
        var pause = el.find('.icon-pause');
        var playing = el.find('.amplitude-playing');

        if (el.is( ".amplitude-playing" ) ) {
            play.hide();
            pause.show();
        }
        if (el.is( ".amplitude-paused" ) ) {
            play.show();
            pause.hide();
        }

    });
    monitorLogin();


    // ACCORDION
    $('.accordion--toggle').on('click', function(){
        $(this).toggleClass('active');
        $(this).next().toggle();
        /* added a border with JS, because don't know how to do it in css */
        $(this).next().css( 'border-top','1px solid' );
    });

});



