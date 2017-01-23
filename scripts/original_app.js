    var timerElement = $('timer');
    var count = 61;
    var counter = setInterval(timer, 1000); 
    var score = 0;

function getScore() {
    $( "#score" ).text("Current score:  " + score);
  };
getScore();


function getName() {
    var username = prompt('What is your name?');
    $("#name").text( "Welcome, " + username + "!");
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


function getMathQuestion(){
    var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
    var randomValues = [];
    var randomAnswers = [];
    var randomArray = [];
    var valueOne = numbers[Math.floor(Math.random() * numbers.length)];
    var valueTwo = numbers[Math.floor(Math.random() * numbers.length)];
    var answer = valueOne * valueTwo;
    var button = $('button');
    
    randomAnswers.push(answer)
    console.log(valueOne);
    console.log(valueTwo);
    console.log('What is ' + valueOne + ' x ' + valueTwo + '?');
    console.log('This is the Answer: ' + valueOne * valueTwo);
    $("#question").text('What is ' + valueOne + ' x ' + valueTwo + '?');

    var randomNumberOne = Math.floor(Math.random() * 100);
    console.log(randomNumberOne)
    randomValues.push(randomNumberOne);

    var randomNumberTwo = Math.floor(Math.random() * 100);
    console.log(randomNumberTwo)
    randomValues.push(randomNumberTwo);  

    var randomNumberThree = Math.floor(Math.random() * 100);
    console.log(randomNumberThree)
    randomValues.push(randomNumberThree);    

    var gameAnswers = randomValues.concat(randomAnswers);
    console.log(gameAnswers);
    gameAnswers.sort(function(a, b){return 0.5 - Math.random()});
    console.log(gameAnswers[0]);
    console.log(gameAnswers[1]);
    console.log(gameAnswers[2]);
    console.log(gameAnswers[3]);

    $('button#one').text(gameAnswers[0]);
    $('button#two').text(gameAnswers[1]);
    $('button#three').text(gameAnswers[2]);
    $('button#four').text(gameAnswers[3]);

    console.log("This is the final answer: " + answer);
    
    $('button').on("click", function(){
      console.log(this.innerHTML);
      console.log(typeof this);
      console.log(typeof answer);
      console.log(this.innerHTML == answer);
      if (this.innerHTML == answer) {
        alert("Correct!");
        score = score + 5;
        $("#score").text("Score: " + score);
        getMathQuestion();
      } else {
        alert("Try Again.")
      }
    });
  };
getMathQuestion();










