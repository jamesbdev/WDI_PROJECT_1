console.log('loaded');
//click event listeners
//make sounds play after click
//match sounds
//if sounds are equal, remove them
//shuffle board


//DOM
//select elements sounds by class name
//add click element individually

//Logic
//give value to individual elements
//after clicking 2 elements, check value
//if values are equal to each other, make elements 'sleep'
//if not keep as is (or shuffle board)
//if all sounds found, notify user of win

//extra: scoring display
//difficulty level

//play background music
//make squares light up when match
//disable self-match
//score-board: 1 match - 9 to go
//after all matches, play win song
var score = 0;
var counter = 0;
var firstPick = null;
var secondPick = null;
var sounds = ['he-he-he', 'bassline', 'gangnam_style', 'go', 'heey', 'noise', 'ooh', 'oppan', 'synth', 'ukwis', 'he-he-he', 'bassline', 'gangnam_style', 'go', 'heey', 'noise', 'ooh', 'oppan', 'synth', 'ukwis'];

function startMusic() {
  var backgroundMusic = new Audio('sounds/sound_loop.wav');
  backgroundMusic.loop = true;
  backgroundMusic.play();
}

$(function() {
  startMusic();
  $('#score').text(score);
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

function checkBoard() {
  //if class won all checked, call win

}

function setChoices(){
  var audio = document.getElementById('audio');
  console.log(audio);
  audio.setAttribute('src', 'sounds/' + $(this).attr('data-sound') + '.wav');
  audio.play();
  counter++;

  if (counter % 2 !== 0) {
    // first click
    firstPick = $(this);
  } else {
    // second click
    // at the second click, when we have both values to compare
    // e.g firstPick was 1 and secondPick was 2
    // if firstPick is the same as secondPick, it's a match
    // if firstPick is not the same as secondPick, it's not a match
    secondPick = $(this);
    console.log('first', firstPick.attr('data-sound'), 'second', secondPick.attr('data-sound'));


    if (firstPick.attr('id') !== secondPick.attr('id')) {
      if (firstPick.attr('data-sound') === secondPick.attr('data-sound')) {
        console.log('Match');
        firstPick.addClass('won');
        secondPick.addClass('won');
        score = score + 5;
        checkBoard();
      } else {
        console.log('not a match');
        score = score - 1;
      }
      $('#score').text(score);
    } else {
      console.log('it\'s the same, cheater');
    }
  }
}
