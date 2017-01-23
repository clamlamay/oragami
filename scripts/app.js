    var timerElement = $('timer');
    var count = 61;
    var counter = setInterval(timer, 1000); 
    var score = 0;

function getName() {
    var username = prompt('What is your name?');
    $("#name").text( "Welcome, " + username + "!");
    alert('Time to multiply!');
  };
getName();

function getScore() {
    $( "#score" ).text("Current score:  " + score);
  };
getScore();

function timer(){
    count = count-1;
    if (count <= 0) {
    clearInterval(counter);
    alert('Game Over');
    }
    $("#timer").text("Timer: " + count);
  };
timer();

function getMathQuestion(){
    var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
    var randomValues = [];
    var randomAnswers = [];
    var randomArray = [];
    var valueOne = numbers[Math.floor(Math.random() * numbers.length)];
    var valueTwo = numbers[Math.floor(Math.random() * numbers.length)];
    var answer = valueOne * valueTwo;
    randomAnswers.push(answer);
    $("#question").text('What is ' + valueOne + ' x ' + valueTwo + '?');
    var randomNumberOne = Math.floor(Math.random() * 100);
    randomValues.push(randomNumberOne);
    var randomNumberTwo = Math.floor(Math.random() * 100);
    randomValues.push(randomNumberTwo);  
    var randomNumberThree = Math.floor(Math.random() * 100);
    randomValues.push(randomNumberThree);    
    var gameAnswers = randomValues.concat(randomAnswers);
    gameAnswers.sort(function(a, b){return 0.5 - Math.random()});
    $('button#one').text(gameAnswers[0]);
    $('button#two').text(gameAnswers[1]);
    $('button#three').text(gameAnswers[2]);
    $('button#four').text(gameAnswers[3]);    
    $('button').on("click", function(){
      if (this.innerHTML == answer) {
        score = score + 5;
        $("#score").text("Score: " + score);
        alert("Correct!");
        getMathQuestion();
      } else {
        alert("Try Again.");
      };
    });
  };

getMathQuestion();












