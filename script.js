let questions = [
  {
    question: "Wie heißt die Hauptstadt von Deutschland?",
    answer_1: "Berlin",
    answer_2: "Hamburg",
    answer_3: "München",
    answer_4: "Köln",
    correctAnswer: 1,
  },
  {
    question: "Wie heißt die Hauptstadt von Frankreich?",
    answer_1: "Paris",
    answer_2: "Marseille",
    answer_3: "Lyon",
    answer_4: "Toulouse",
    correctAnswer: 1,
  },
  {
    question: "Wie heißt die Hauptstadt von Italien?",
    answer_1: "Rom",
    answer_2: "Mailand",
    answer_3: "Neapel",
    answer_4: "Turin",
    correctAnswer: 1,
  },
  {
    question: "Wie heißt die Hauptstadt von Spanien?",
    answer_1: "Madrid",
    answer_2: "Barcelona",
    answer_3: "Valencia",
    answer_4: "Sevilla",
    correctAnswer: 1,
  },
];

let amountOfRightQuestions = 0;
let currentQuestion = 0;
let AUDIO_SUCCESS = new Audio("audio/success.mp3");
let AUDIO_FAIL = new Audio("audio/wrong.mp3");

function init() {
  document.getElementById("all-questions").innerHTML = questions.length;

  showQuestion();
}

//Frage anzeigen
function showQuestion() {
  //to do show end screen if all questions are answered
  if (currentQuestion >= questions.length) {
    document.getElementById("question-body").style = "display: none";
    document.getElementById("endScreen").style = "";
    document.getElementById("header-image").src = "img/winner.jpg";
    document.getElementById("amountOfQuestions").innerHTML = questions.length;
    document.getElementById("amountOfRightQuestions").innerHTML =
      amountOfRightQuestions;

    // show Question
  } else {
    let percent = (currentQuestion +1) / questions.length;
    percent = Math.round(percent * 100);
    document.getElementById("progress-bar").innerHTML = `${percent} %`;
    document.getElementById("progress-bar").style = `width: ${percent}%`;

    let question_container = questions[currentQuestion];

    document.getElementById("questiontext").innerHTML =
      question_container.question;
    document.getElementById("first-question").innerHTML = currentQuestion + 1;
    document.getElementById("answer_1").innerHTML = question_container.answer_1;
    document.getElementById("answer_2").innerHTML = question_container.answer_2;
    document.getElementById("answer_3").innerHTML = question_container.answer_3;
    document.getElementById("answer_4").innerHTML = question_container.answer_4;
  }
}

function answer(index) {
  let question_container = questions[currentQuestion];
  let selectedQuestionNumber = index.slice(-1);
  let correctAnswerID = `answer_${question_container.correctAnswer}`;

  if (selectedQuestionNumber == question_container.correctAnswer) {
    document.getElementById(index).parentNode.classList.add("bg-success");
    AUDIO_SUCCESS.play();
    amountOfRightQuestions++;
  } else {
    document.getElementById(index).parentNode.classList.add("bg-danger");
    document
      .getElementById(correctAnswerID)
      .parentNode.classList.add("bg-success");
      AUDIO_FAIL.play();
  }

  document.getElementById("next-button").disabled = false;
}

function nextQuestion() {
  currentQuestion++;

  document.getElementById("next-button").disabled = true;
  resetAnswerButtons();
  showQuestion();
}

function resetAnswerButtons() {
  document.getElementById("answer_1").parentNode.classList.remove("bg-success");
  document.getElementById("answer_1").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_2").parentNode.classList.remove("bg-success");
  document.getElementById("answer_2").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_3").parentNode.classList.remove("bg-success");
  document.getElementById("answer_3").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_4").parentNode.classList.remove("bg-success");
  document.getElementById("answer_4").parentNode.classList.remove("bg-danger");
}

function restartGame() {
  document.getElementById("header-image").src = "img/quiz-bg.jpg";
  document.getElementById("question-body").style = ""; //question body wieder anzeigen
  document.getElementById("endScreen").style = "display: none"; //end screen wieder ausblenden
  currentQuestion = 0;
  amountOfRightQuestions = 0;
  init();
}
