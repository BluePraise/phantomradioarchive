$(
  function(){
  var aud = $('audio')[0];
  $('.play-pause').on('click', function(){
  if (aud.paused) {
    aud.play();
    $('.play-pause').removeClass('icon-play');
    $('.play-pause').addClass('icon-pause');
  }
  else {
    aud.pause();
    $('.play-pause').removeClass('icon-pause');
    $('.play-pause').addClass('icon-play');
  }

})
  $('.next').on('click', function(){
  aud.src = 'another audio source';
})
  aud.ontimeupdate = function(){
    $('.progress').css('width', aud.currentTime / aud.duration * 100 + '%')
  }
})