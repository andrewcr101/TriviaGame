var allQuestions = [{
  question: " What does Ralphie want for Christmas?",
  choices: ["Fire Truck", "BB Gun", "Atari", "Bicycle"],
  correctAnswer: 1
},

{
  question: "When Ralphie is sitting on Santa's lap his mind goes blank and he can't remember what he wants for Christmas. What does Santa suggest he bring Ralphie?",
  choices: ["A nice football", "Video Game", "Bicycle", "Sling Shot"],
  correctAnswer: 0
},

{
  question: "What color were Scut Farkus's eyes?",
  choices: ["Red", "White", "Gray", "Yellow"],
  correctAnswer: 3
},

{
  question: "Whose book was this movie based upon?",
  choices: ["Ernest Hemingway", "John Updike", "John Steinbeck", "Jean Shepherd"],
  correctAnswer: 3
},

{
  question: "Which store window did Ralph see the Air Rifle in when he went into town?",
  choices: ["Macy's", "Higbee's", "Saks 5th Avenue", "Dillards's"],
  correctAnswer: 1
}
];
      var currentquestion = 0;
      var correctAnswers = 0;
      var number  = 60;
      var intervalId;

      function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }

  function decrement() {
number--;
$("#time-left").html("<h2>" + number + "</h2>");
if (number === 0) {
endGame();

}
}

function stop() {
clearInterval(intervalId);
}

function setupOptions() {
$('#question').html(parseInt(currentquestion) + 1 + ". " + allQuestions[currentquestion].question);
var options = allQuestions[currentquestion].choices;
var formHtml = '';
for (var i = 0; i < options.length; i++) {
  formHtml += '<div><input type="radio" name="option" value="' + i + '" id="option' + i + '"><label for="option' + i + '">' +
    allQuestions[currentquestion].choices[i] + '</label></div><br/>';
}
$('#form').html(formHtml);
$("#option0").prop('checked', true);
};

function checkAns() {
if ($("input[name=option]:checked").val() == allQuestions[currentquestion].correctAnswer) {
  correctAnswers++;
};
};

function endGame() {
stop();
$("#quizbutton").empty();
$("#question").empty();
$("#form").empty();
$("#time-left").empty();
$("#next").empty();
$("#result").html("You correctly answered " + correctAnswers + " out of " + currentquestion + " questions! ");
}

$("#start-quiz").click(function(){
          run();
          setupOptions();

  $("#next").click(function() {
  event.preventDefault();
  checkAns();
  currentquestion++;
  
    if ((currentquestion < allQuestions.length) && (number > 0)) {
      setupOptions();
      if (currentquestion == allQuestions.length - 1) {
          $('#next').html("Submit");
             $('#next').click(function() {
                endGame();
              });
            };

    };

   
});

})