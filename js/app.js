
//matches-board: 1 match - 9 to go
//after all matches, play win song
//number of clicks
//reset board

var matches;
// var clicks;
var counter;
var firstPick = null;
var secondPick = null;
var backgroundMusic;
var winMusic;
var sounds = ['he-he-he', 'bassline', 'gangnam_style', 'go', 'heey', 'noise', 'ooh', 'oppan', 'synth', 'ukwis', 'he-he-he', 'bassline', 'gangnam_style', 'go', 'heey', 'noise', 'ooh', 'oppan', 'synth', 'ukwis'];

// function numberofClicks () {
  //if element is clicked
  //change inner html of


function startMusic() {
  backgroundMusic = new Audio('sounds/sound_loop.wav');
  backgroundMusic.loop = true;
  backgroundMusic.play();
}
// document.ready function ...
$(function() {
  startMusic();
  matches = 0;
  counter = 0;
  firstPick = null;
  secondPick = null;

  $('#matchesLeft').text(10 - matches);
  var sounds = ['he-he-he', 'bassline', 'gangnam_style', 'go', 'heey', 'noise', 'ooh', 'oppan', 'synth', 'ukwis', 'he-he-he', 'bassline', 'gangnam_style', 'go', 'heey', 'noise', 'ooh', 'oppan', 'synth', 'ukwis'];
  $.each(sounds, createBoard);
  $('li').click(setChoices);
});



function createBoard(index) {
  var random = Math.floor(Math.random() * sounds.length);
  $('ul').append(
    '<li id="' + index + '" data-sound="' + sounds[random] + '" class="square"></li>'
  );
  sounds.splice(random, 1);
}

function checkMatches() {
  //if class won all checked, call win
  if (matches === 10) {
    backgroundMusic.pause();
    winMusic = new Audio('sounds/win_song.wav');
    winMusic.play();
    $(winMusic).on('ended', function() {
      backgroundMusic.play();
      // resetGame();
    });
  }
}

function setChoices(){
  var audio = document.getElementById('audio');
  console.log(audio);
  audio.setAttribute('src', 'sounds/' + $(this).attr('data-sound') + '.wav');
  audio.play();
  counter++;

  if (counter % 2 !== 0) {
    firstPick = $(this);
  } else {
    secondPick = $(this);
    console.log('first', firstPick.attr('data-sound'), 'second', secondPick.attr('data-sound'));


    if (firstPick.attr('id') !== secondPick.attr('id')) {
      if (firstPick.attr('data-sound') === secondPick.attr('data-sound')) {
        console.log('Match');
        firstPick.addClass('won');
        secondPick.addClass('won');
        matches = matches + 1;
        checkMatches();
      } else {
        console.log('not a match');

      }
      $('#matchesLeft').text(10 - matches);
    } else {
      console.log('it\'s the same, cheater');
    }
  }
}
