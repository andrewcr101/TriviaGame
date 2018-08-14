var allQuestions = [{
  question: "Who is Isildur's heir?",
  choices: ["Faramir", "Aragorn", "Bormomir", "Galadriel"],
  correctAnswer: 1
},

{
  question: "How many hobbits are there in the fellowship?",
  choices: ["2", "3", "5", "4"],
  correctAnswer: 3
},

{
  question: "Does Sam marry at the end?",
  choices: ["Yes", "No", "Yes but he divorces", "No because he dies"],
  correctAnswer: 0
},

{
  question: "Who in the fellowship trys to take the ring from Frodo?",
  choices: ["Aragorn", "Legolas", "Sam", "Boromir"],
  correctAnswer: 3
},

{
  question: "What was Gollum’s hobbit name?",
  choices: ["Frshol", "Smeagol", "Bandobras", "Tobold"],
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
$("#submit").empty();
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