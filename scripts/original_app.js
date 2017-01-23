var timerElement = $('timer');
var count = 11;
var counter = setInterval(timer, 1000); 
var score = 0;
var gotName = false;



function getScore() {
  $( "#score" ).text("Current score:  " + score);
};
getScore();


function getName() {
    var username = prompt('What is your name?');
    $( "#name" ).text( "Welcome, " + username + "!");
    alert('Time to multiply!');
};
getName();


function timer(){
  count = count-1;
  if (count <= 0) {
  clearInterval(counter);
  alert('Game Over');
  }
  $("#timer").text("Timer: " + count);
};
timer();


//   var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
//   for (var i = numbers.length - 1; i >= 0; i--) {
//   console.log(numbers[i]);
//   numbers.random(numbers)
// }


var questions = {};
    questions.one = 'What is 8 x 8?';
    questions.two ='What is 9 x 7?';
    questions.three = 'What is 10 x 10?';
    questions.four = 'What is 2 x 8?';
    questions.five = 'What is 4 x 7?';

var answers = {};
    answers.one = '64';
    answers.two = '63';
    answers.three = '100';
    answers.four = '16';
    answers.five = '28';
 
for (var prop in questions) { 

    var val = document.getElementById('question');
    val.textContent = questions[prop];
}

for (var prop in answers) { 
    var val = document.getElementById('one');
    val.textContent = answers[prop];
}

var buttonNumberTwo = document.getElementById('two');
function buttonTwo(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
buttonNumberTwo.textContent = buttonTwo(1, 90);


var buttonNumberTwo = document.getElementById('three');
function buttonTwo(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
buttonNumberTwo.textContent = buttonTwo(1, 90);


var buttonNumberTwo = document.getElementById('four');
function buttonTwo(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
buttonNumberTwo.textContent = buttonTwo(1, 90);

$('one').click( function(){
  var buttonCount = $('#score');
  buttonCount += 1;
});

$('#one').click(function(){
  alert("Correct.");
});
$('#two').click(function(){
  alert("Wrong.");
});
$('#three').click(function(){
  alert("Wrong.");
});
$('#four').click(function(){
  alert("Wrong.");
});



