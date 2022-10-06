const quiz = [
  {
    question: "Q1: What is JavaScript?",
    a: "JavaScript is a scripting language used to make the website interactive",
    b: "JavaScript is an assembly language used to make the website interactive",
    c: "JavaScript is a compiled language used to make the website interactive",
    d: " None of the mentioned",
    ans: "ans1",
  },

  {
    question: "Q2: Which of the following is correct about JavaScript?",
    a: " JavaScript is an Object-Based language",
    b: "JavaScript is Assembly-language",
    c: "JavaScript is an Object-Oriented language",
    d: " JavaScript is a High-level language",
    ans: "ans1",
  },

  {
    question:
      "Q3:Among the given statements, which statement defines closures in JavaScript?",
    a: "JavaScript is a function that is enclosed with references to its inner function scope",
    b: " JavaScript is a function that is enclosed with references to its lexical environment",
    c: "JavaScript is a function that is enclosed with the object to its inner function scope",
    d: " None of the mentioned",
    ans: "ans2",
  },

  {
    question:
      "Q4:Arrays in JavaScript are defined by which of the following statements?",
    a: " It is an ordered list of values",
    b: "It is an ordered list of objects",
    c: " It is an ordered list of string",
    d: " It is an ordered list of functions",
    ans: "ans1",
  },

  {
    question:
      "Q5: Where is Client-side JavaScript code is embedded within HTML documents?",
    a: " A URL that uses the special javascript:code",
    b: " A URL that uses the special javascript:protocol",
    c: " A URL that uses the special javascript:encoding",
    d: " A URL that uses the special javascript:stack",
    ans: "ans2",
  },

  {
    question:
      "Q6: Which of the following object is the main entry point to all client-side JavaScript features and APIs?",
    a: "Position",
    b: "Window",
    c: "Standard",
    d: " Location",
    ans: "ans2",
  },
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.getElementById("submit");

const answers = document.querySelectorAll(".answer");

const showScore = document.querySelector("#showScore");

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
  const questionList = quiz[questionCount];
  question.innerText = questionList.question;

  option1.innerText = questionList.a;
  option2.innerText = questionList.b;
  option3.innerText = questionList.c;
  option4.innerText = questionList.d;
};

loadQuestion();

const getCheckAnswer = () => {
  let answer;
  answers.forEach((curAnsElem) => {
    if (curAnsElem.checked) {
      answer = curAnsElem.id;
    }
  });

  return answer;
};

const deSelectAll = () => {
  answers.forEach((curAnsElem) => (curAnsElem.checked = false));
};

submit.addEventListener("click", () => {
  const checkedAnswer = getCheckAnswer();
  console.log(checkedAnswer);

  if (checkedAnswer === quiz[questionCount].ans) {
    score++;
  }

  questionCount++;

  deSelectAll();

  if (questionCount < quiz.length) {
    loadQuestion();
  } else {
    showScore.innerHTML = `
  <h3>Your Score  ${score}/${quiz.length} &#9996</h3>
  <button class="btn" onclick="location.reload()">Play again</button>
  
  `;
    showScore.classList.remove("scoreArea");
  }
});
