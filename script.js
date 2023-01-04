//--- make the clock work
const seconds = document.getElementById('seconds');
const answer = document.querySelector(".answers");
const btn = document.querySelector(".btn");
const startBtn = document.querySelector("#startBtn");
const container = document.querySelector(".container");
const questionContainer = document.querySelector("#question-container");
const runGet = document.querySelector("#run");
let currentlyIndex = 0;
let questionsCorrect = 0;
var secondsLeft = 60 //--timer
seconds.textContent = secondsLeft
setInterval(timerStart, 1000);
function startQuiz() { //hide the timer
    startBtn.setAttribute("class","hide")
    questionContainer.removeAttribute("class")
}
function timerStart() {
    secondsLeft-- ;
    seconds.textContent = secondsLeft
}
function nextQuestion(e) {
    if (e.target.getAtribute("data-correct") === "true") {
        questionsCorrect++;
     }
     if (currentlyIndex < questions.length -1) {
        currentlyIndex++;
        loadQuestions();
    } else {
        finish();
    }
}
function loadQuestions () {
    spnQtd.innerHTML = `{currentlyIndex + 1}/${questions.length}`;
    const item = questions[currentlyIndex];
    answer.innerHTML = "";
    question.innerHTML = item.question;
    //--  for loop run the questions
    for (var i = 0; i < quizQuestions.length; i++) {
        var response = window.questions(questions[i].questions)
        if (response === questions[i].answer){
            score++;
            alert("Correct!");
        } else {
            alert("WRONG!");
        }
        }};
//---Questions and Answers
var quizQuestions =  [
{
    questions: "How much is 4 + 7?",
    option: [
          "5","9","11",
        ],
        answer: "11"
},
{
    questions: "How much is 3 - 9?",
    option: [
         "1","6","8",
    ],
    answer: "6"
},
{
    questions: "How much is 8 ÷ 4?",
    option: [
       "2","9","1",
    ],
    answer: "2"
},
{
    questions: "How much is 7 x 7?",
    option: [
      "49","14","59"
    ],
    answer: "49"
} ];
//build the function to start the quiz
function buildQuiz(questions) {
  questions.textContent = option
  questions.textContent = answer
  answer.textContent = option
  setAttribute('value', '5')
  setAttribute('value', '9')
  setAttribute('value', '11')
}
function buildQuiz(questions) {
    questions.textContent = option
    questions.textContent = answer
    answer.textContent = option
    setAttribute('value', '1')
    setAttribute('value', '6')
    setAttribute('value', '8')
  }
  function buildQuiz(questions) {
    questions.textContent = option
    questions.textContent = answer
    answer.textContent = option
    setAttribute('value', '2')
    setAttribute('value', '9')
    setAttribute('value', '1')
  }
  function buildQuiz(questions) {
    questions.textContent = option
    questions.textContent = answer
    answer.textContent = option
    setAttribute('value', '49')
    setAttribute('value', '14')
    setAttribute('value', '59')
  }
  function blockOptions () {
    classList.add('block')
    classList.add('block')
    classList.add('block')
  }
  function unblockOptions() {
    classList.remove ('unblock')
    classList.remove ('unblock')
    classList.remove ('unblock')
  }
//check score
  function checkScore(questions, answer) {
    console.log("Question" + numberQuestions)
    let asnwer = answer.textContent
    console.log("answer" + answer)
    let correct = questions [numberQuestions].correct
    console.log("answer" + correct)
    if(correctAnswer == correct) {
        console.log("Correct!")
        youAre.textContent = "Correct"
        score += 10
    } else{
        console.log("WRONG!")
        youAre.textContent = "False"
    }
  }
//sort
quizQuestions.sort(function(a, b) {
    if(a.questions > b.questions) {
        return -1;
    } else {
        return true;
    }
});
console.log(quizQuestions);
//start game
startBtn.addEventListener("click", startQuiz)





