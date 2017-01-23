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
    var valueOne = numbers[Math.floor(Math.random() * numbers.length)];
    var valueTwo = numbers[Math.floor(Math.random() * numbers.length)];
    var answer = valueOne * valueTwo;
    var button = $('button');
    randomAnswers.push(answer);
    // console.log(valueOne);
    // console.log(valueTwo);
    // console.log('What is ' + valueOne + ' x ' + valueTwo + '?');
    // console.log('This is the Answer: ' + valueOne * valueTwo);
    $("#question").text('What is ' + valueOne + ' x ' + valueTwo + '?');

    var randomNumberOne = Math.floor(Math.random() * 100);
    // console.log(randomNumberOne);
    randomValues.push(randomNumberOne);

    var randomNumberTwo = Math.floor(Math.random() * 100);
    // console.log(randomNumberTwo);
    randomValues.push(randomNumberTwo);  

    var randomNumberThree = Math.floor(Math.random() * 100);
    // console.log(randomNumberThree);
    randomValues.push(randomNumberThree);    

    var gameSort = randomValues.concat(randomAnswers);
    gameSort.sort(function(a, b){return 0.5 - Math.random()});
    // console.log(gameSort);
    var gameAnswers = gameSort;
    // console.log(gameAnswers);
    // console.log(gameAnswers[0]);
    // console.log(gameAnswers[1]);
    // console.log(gameAnswers[2]);
    // console.log(gameAnswers[3]);
    // console.log(gameAnswers);
    // console.log(randomValues, 'Random Values');
    // console.log(randomAnswers, 'Random Answers');

    $('button#one').text(gameAnswers[0]);
    $('button#two').text(gameAnswers[1]);
    $('button#three').text(gameAnswers[2]);
    $('button#four').text(gameAnswers[3]);

    // console.log(gameAnswers);
    // console.log("This is the final answer: " + answer);
    
    $('button').on("click", function(){
        gameAnswers
      // console.log(this.innerHTML, "After Click");
      // console.log(typeof this);
      // console.log(typeof answer);
      // console.log(this.innerHTML == answer);
      // console.log(score);
      // console.log(gameAnswers, "End of Click");
      if (this.innerHTML == answer) {
            alert("Correct!");
            score = score + 5;
            // console.log(gameAnswers);
            // var randomValues = [];
            // var randomAnswers = [];
            // console.log(randomValues, 'Random Values');
            // console.log(randomAnswers, 'Random Answers');
            // console.log(gameAnswers, 'Game Answers');
            gameAnswers = [];
            // console.log(gameAnswers, 'Game Answers');
            $( "#score" ).text("Current score:  " + score);
            return getMathQuestion();           
        } else {
            alert("Try Again.");
            score--;
        }
        });
    };
getMathQuestion();




    
    