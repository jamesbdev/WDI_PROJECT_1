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

var counter = 0;
var firstPick = null;
var secondPick = null;
// var audio = [];
// audio src =

$(function() {
  $('li').click(function(){
    var audio = document.getElementById('audio');
    console.log(audio);
    audio.setAttribute('src', 'sounds/' + $(this).attr('data-sound') + '.wav');
    audio.play();
    counter++;

    if (counter % 2 !== 0) {
      // first click
      firstPick = $(this).attr('data-sound');
    } else {
      // second click
      // at the second click, when we have both values to compare
      // e.g firstPick was 1 and secondPick was 2
      // if firstPick is the same as secondPick, it's a match
      // if firstPick is not the same as secondPick, it's not a match
      secondPick = $(this).attr('data-sound');
      console.log('first', firstPick, 'second', secondPick);

      if (firstPick===secondPick) {
        console.log('Match');
      } else {
        console.log('not a match');
      }
    }
  });
});


//if element is clicked, play a sound

// var audio = new Audio('he-he-he .wav');
