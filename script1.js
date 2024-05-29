const loginContainer = document.querySelector(".login-container");
const quizContainer = document.querySelector(".quiz-container");
const errorMessage = document.getElementById("error-message");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

const quizData = [
    {
        question: "What is C language ? 😊",
        options: ["Compiler", "Interpreter", "Machine", "Other"],
        correctAnswer: "Compiler"
    },
    {
        question: "Which is most favorite language ? ❤️",
        options: ["Java", "Python", "C lang", "Javascript"],
        correctAnswer: "Python"
    },
    {
        question: "What is int occupy? 🎉",
        options: ["5", "4", "8", "1"],
        correctAnswer: "4"
    }
];

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const resultsContainer = document.getElementById("results");

let currentQuestion = 0;
let score = 0;

function login() {
    const username = usernameInput.value;
    const password = passwordInput.value;

    // Example username and password for demonstration purposes
    const correctUsername = "user123";
    const correctPassword = "pass123";

    if (username === correctUsername && password === correctPassword) {
        loginContainer.style.display = "none";
        quizContainer.style.display = "block";
        startQuiz();
    } else {
        errorMessage.innerText = "Invalid username or password. Please try again.";
    }
}

function startQuiz() {
    showQuestion(quizData[currentQuestion]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    optionsContainer.innerHTML = "";
    question.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("option-btn");
        button.addEventListener("click", selectAnswer);
        optionsContainer.appendChild(button);
    });
}

function selectAnswer(event) {
    const selectedButton = event.target;
    const correct = selectedButton.innerText === quizData[currentQuestion].correctAnswer;
    if (correct) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        showQuestion(quizData[currentQuestion]);
    } else {
        showResults();
    }
}

function showResults() {
    questionElement.innerText = `You answered ${score} out of ${quizData.length} questions correctly.`;
    optionsContainer.innerHTML = "";
    nextButton.style.display = "none";
    resultsContainer.style.display = "block";
}
