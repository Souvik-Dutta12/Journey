// Global Variables
let currentQuestionIndex = 0;
let score = 0;
let questions = [];
let selectedAnswer = null;
let timer;
let timeLeft = 15;

// Elements
const questionText = document.getElementById("question");
const answersBox = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");
const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBar");
const timerDisplay = document.getElementById("timer");
const scoreScreen = document.getElementById("scoreScreen");
const finalScore = document.getElementById("finalScore");
const restartBtn = document.getElementById("restartBtn");
const reviewBtn = document.getElementById("reviewBtn");
const reviewBox = document.getElementById("reviewBox");

// Utility
function decodeHTML(html) {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

function shuffleArray(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

async function fetchQuestions() {
  const res = await fetch("https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple");
  const data = await res.json();
  questions = data.results.map((q) => ({
    question: decodeHTML(q.question),
    answers: shuffleArray([...q.incorrect_answers, q.correct_answer].map(decodeHTML)),
    correct: decodeHTML(q.correct_answer),
    selected: null
  }));
  currentQuestionIndex = 0;
  score = 0;
  selectedAnswer = null;
  showQuestion();
  startTimer();
  scoreScreen.classList.add("hidden");
  document.querySelector("main").classList.remove("blur-sm", "pointer-events-none");
  reviewBox.classList.add("hidden");
}

function showQuestion() {
  const q = questions[currentQuestionIndex];
  questionText.textContent = q.question;
  progressText.textContent = `${currentQuestionIndex + 1} of ${questions.length}`;
  progressBar.style.width = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;

  answersBox.innerHTML = "";

  q.answers.forEach((answer, i) => {
    const id = `answer-${i}`;
    const label = document.createElement("label");
    label.setAttribute("for", id);
    label.className = `ans flex items-center justify-between w-full p-4 rounded-xl bg-zinc-800 border-2 border-zinc-600 hover:border-orange-500 transition cursor-pointer`;

    const span = document.createElement("span");
    span.className = "text-xl font-medium text-white";
    span.textContent = answer;

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "option";
    input.id = id;
    input.value = answer;
    input.className = "sr-only peer";
    input.addEventListener("change", () => {
      selectedAnswer = answer;
    });

    const circle = document.createElement("div");
    circle.className =
      "w-5 h-5 rounded-full border-2 border-zinc-500 peer-checked:border-orange-500 peer-checked:bg-orange-500 flex items-center justify-center transition";

    const inner = document.createElement("div");
    inner.className = "w-2.5 h-2.5 rounded-full bg-white peer-checked:opacity-100 opacity-0 transition";

    circle.appendChild(inner);
    label.append(span, input, circle);
    answersBox.appendChild(label);
  });
}

function startTimer() {
  timeLeft = 15;
  timerDisplay.textContent = `${timeLeft}s`;

  timer = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = `${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      autoNext();
    }
  }, 1000);
}

function autoNext() {
  if (!selectedAnswer) selectedAnswer = "null";
  checkAnswer();
  goToNextQuestion();
}

function checkAnswer() {
  const q = questions[currentQuestionIndex];
  q.selected = selectedAnswer;
  if (selectedAnswer === q.correct) score++;
}

function goToNextQuestion() {
  clearInterval(timer);
  selectedAnswer = null;
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
    startTimer();
  } else {
    showFinalScore();
  }
}

function showFinalScore() {
  document.querySelector("main").classList.add("blur-sm", "pointer-events-none");
  scoreScreen.classList.remove("hidden");
  finalScore.textContent = `${score} / ${questions.length}`;
}

function showReview() {
  reviewBox.classList.remove("hidden");
  reviewBox.innerHTML = `<h2 class="text-2xl font-bold mb-4">Review Answers</h2>`;
  questions.forEach((q, index) => {
    const wrapper = document.createElement("div");
    wrapper.className = "mb-3 p-3 rounded-xl border-2";

    const qText = document.createElement("p");
    qText.className = "font-semibold text-white mb-2";
    qText.textContent = `Q${index + 1}. ${q.question}`;
    wrapper.appendChild(qText);

    q.answers.forEach((ans) => {
      const aText = document.createElement("p");
      aText.textContent = ans;
      aText.className = `pl-3 py-1 rounded ${
        ans === q.correct
          ? "bg-green-600 text-white"
          : ans === q.selected
          ? "bg-red-600 text-white"
          : "text-zinc-400"
      }`;
      wrapper.appendChild(aText);
    });

    reviewBox.appendChild(wrapper);
  });
}

// Event Listeners
nextBtn.addEventListener("click", () => {
  if (!selectedAnswer) return alert("Please select an answer.");
  checkAnswer();
  goToNextQuestion();
});

restartBtn.addEventListener("click", fetchQuestions);
reviewBtn.addEventListener("click", showReview);

// Initialize Quiz
fetchQuestions();
