// Quiz Questions Data
const quizQuestions = [
    {
        id: 1,
        text: "What does HTML stand for?",
        options: [
            "Hypertext Markup Language",
            "High Tech Modern Language",
            "Home Tool Markup Language",
            "Hyperlinks and Text Markup Language"
        ],
        correctAnswer: 0,
        explanation: "HTML stands for HyperText Markup Language. It is the standard markup language used to create web pages."
    },
    {
        id: 2,
        text: "Which of the following is NOT a programming language?",
        options: [
            "Python",
            "JavaScript",
            "HTML",
            "Java"
        ],
        correctAnswer: 2,
        explanation: "HTML is a markup language, not a programming language. It is used for structuring content on the web. Python, JavaScript, and Java are all programming languages."
    },
    {
        id: 3,
        text: "What is the time complexity of binary search?",
        options: [
            "O(n)",
            "O(n²)",
            "O(log n)",
            "O(1)"
        ],
        correctAnswer: 2,
        explanation: "Binary search has a time complexity of O(log n). It works by repeatedly dividing the search space in half, making it very efficient for sorted arrays."
    },
    {
        id: 4,
        text: "Which data structure uses LIFO (Last In First Out)?",
        options: [
            "Queue",
            "Stack",
            "Linked List",
            "Graph"
        ],
        correctAnswer: 1,
        explanation: "A Stack uses LIFO (Last In First Out) principle. The last element added to the stack is the first one to be removed. A Queue, on the other hand, uses FIFO."
    },
    {
        id: 5,
        text: "What is the purpose of CSS?",
        options: [
            "To define the structure of web pages",
            "To style and layout web pages",
            "To handle server-side logic",
            "To manage databases"
        ],
        correctAnswer: 1,
        explanation: "CSS (Cascading Style Sheets) is used to style and layout web pages. It controls the visual appearance of HTML elements, including colors, fonts, spacing, and positioning."
    },
    {
        id: 6,
        text: "Which of these is a relational database?",
        options: [
            "MongoDB",
            "Firebase",
            "PostgreSQL",
            "Cassandra"
        ],
        correctAnswer: 2,
        explanation: "PostgreSQL is a relational database that uses SQL queries. MongoDB is NoSQL, Firebase is a cloud database, and Cassandra is a distributed NoSQL database."
    },
    {
        id: 7,
        text: "What does API stand for?",
        options: [
            "Application Programming Integration",
            "Application Programming Interface",
            "Advanced Protocol Integration",
            "Application Program Integration"
        ],
        correctAnswer: 1,
        explanation: "API stands for Application Programming Interface. It allows different software applications to communicate with each other."
    },
    {
        id: 8,
        text: "Which sorting algorithm has the best average case time complexity?",
        options: [
            "Bubble Sort",
            "Insertion Sort",
            "Merge Sort",
            "Selection Sort"
        ],
        correctAnswer: 2,
        explanation: "Merge Sort has an average case time complexity of O(n log n). It's one of the most efficient sorting algorithms and uses the divide-and-conquer approach."
    },
    {
        id: 9,
        text: "What is the main purpose of version control systems like Git?",
        options: [
            "To run automated tests",
            "To track changes in code and manage collaboration",
            "To deploy applications to production",
            "To compress files"
        ],
        correctAnswer: 1,
        explanation: "Version control systems like Git are used to track changes in code and enable collaboration among developers. They maintain a history of changes and allow developers to work together seamlessly."
    },
    {
        id: 10,
        text: "Which of the following is a NoSQL database?",
        options: [
            "MySQL",
            "PostgreSQL",
            "MongoDB",
            "Oracle"
        ],
        correctAnswer: 2,
        explanation: "MongoDB is a NoSQL database that stores data in JSON-like documents. MySQL, PostgreSQL, and Oracle are all relational SQL databases."
    }
];

// Quiz State Management
class QuizApp {
    constructor() {
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.score = 0;
        this.timerInterval = null;
        this.timeRemaining = 45;
        this.quizState = 'start'; // 'start', 'progress', or 'results'
        
        this.initializeElements();
        this.attachEventListeners();
        this.quizState = this.loadProgress();
        this.resumeOrShowStart();
    }

    initializeElements() {
        // Screens
        this.startScreen = document.getElementById('startScreen');
        this.quizScreen = document.getElementById('quizScreen');
        this.resultsScreen = document.getElementById('resultsScreen');
        this.reviewScreen = document.getElementById('reviewScreen');

        // Quiz Elements
        this.questionText = document.getElementById('questionText');
        this.optionsContainer = document.getElementById('optionsContainer');
        this.feedbackSection = document.getElementById('feedbackSection');
        this.feedbackText = document.getElementById('feedbackText');
        this.timerValue = document.getElementById('timerValue');
        this.timerDisplay = document.getElementById('timerDisplay');
        this.questionNumber = document.getElementById('questionNumber');
        this.progressFill = document.getElementById('progressFill');

        // Buttons
        this.beginBtn = document.getElementById('beginBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.reviewBtn = document.getElementById('reviewBtn');
        this.restartBtn = document.getElementById('restartBtn');
        this.backBtn = document.getElementById('backBtn');
        this.restartFromReviewBtn = document.getElementById('restartFromReviewBtn');

        // Results Elements
        this.finalScore = document.getElementById('finalScore');
        this.scorePercentage = document.getElementById('scorePercentage');
        this.scoreMessage = document.getElementById('scoreMessage');
        this.reviewScore = document.getElementById('reviewScore');
        this.reviewContainer = document.getElementById('reviewContainer');
    }

    attachEventListeners() {
        this.beginBtn.addEventListener('click', () => this.startQuiz());
        this.nextBtn.addEventListener('click', () => this.nextQuestion());
        this.reviewBtn.addEventListener('click', () => this.showReview());
        this.restartBtn.addEventListener('click', () => this.restartQuiz());
        this.backBtn.addEventListener('click', () => this.backToResults());
        this.restartFromReviewBtn.addEventListener('click', () => this.restartQuiz());
    }

    loadProgress() {
        const savedProgress = localStorage.getItem('quizProgress');
        const savedAnswers = localStorage.getItem('quizAnswers');
        const savedScore = localStorage.getItem('quizScore');

        if (savedProgress && savedAnswers) {
            this.currentQuestionIndex = parseInt(savedProgress);
            this.userAnswers = JSON.parse(savedAnswers);
            // Calculate score from saved answers
            this.score = this.userAnswers.filter(a => a.isCorrect).length;
            return 'progress';
        } else if (savedScore) {
            this.score = parseInt(savedScore);
            return 'results';
        }
        return 'start';
    }

    resumeOrShowStart() {
        if (this.quizState === 'progress') {
            this.showScreen('quizScreen');
            this.displayQuestion();
        } else if (this.quizState === 'results') {
            this.showResults();
        } else {
            this.showScreen('startScreen');
        }
    }

    saveProgress() {
        localStorage.setItem('quizProgress', this.currentQuestionIndex);
        localStorage.setItem('quizAnswers', JSON.stringify(this.userAnswers));
    }

    startQuiz() {
        // Clear any previous quiz data
        localStorage.removeItem('quizProgress');
        localStorage.removeItem('quizAnswers');
        localStorage.removeItem('quizScore');

        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.score = 0;
        this.showScreen('quizScreen');
        this.displayQuestion();
    }

    displayQuestion() {
        const question = quizQuestions[this.currentQuestionIndex];
        
        // Update header
        this.questionNumber.textContent = `Question ${this.currentQuestionIndex + 1} of ${quizQuestions.length}`;
        this.updateProgressBar();

        // Update question
        this.questionText.textContent = question.text;

        // Clear previous options
        this.optionsContainer.innerHTML = '';

        // Create option buttons
        question.options.forEach((option, index) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = option;
            btn.dataset.index = index;
            btn.addEventListener('click', () => this.selectAnswer(index));
            this.optionsContainer.appendChild(btn);
        });

        // Reset feedback section
        this.feedbackSection.style.display = 'none';
        this.feedbackText.textContent = '';

        // Check if this question was already answered (resume from saved progress)
        const savedAnswer = this.userAnswers.find(a => a.questionIndex === this.currentQuestionIndex);
        if (savedAnswer) {
            this.displayFeedbackForResume(question, savedAnswer);
            if (this.timerInterval) {
                clearInterval(this.timerInterval);
            }
        } else {
            // Reset timer only if this is a fresh question
            this.timeRemaining = 45;
            this.startTimer();
        }
    }

    displayFeedbackForResume(question, savedAnswer) {
        const optionBtns = document.querySelectorAll('.option-btn');
        
        // Disable all options
        optionBtns.forEach(btn => btn.classList.add('disabled'));

        const isCorrect = savedAnswer.isCorrect;

        // Highlight correct and incorrect answers
        optionBtns.forEach((btn, index) => {
            if (index === question.correctAnswer) {
                btn.classList.add('correct');
            } else if (index === savedAnswer.selectedAnswer && !isCorrect) {
                btn.classList.add('incorrect');
            }
        });

        // Show feedback
        this.feedbackSection.style.display = 'block';
        this.feedbackText.textContent = question.explanation;
    }


    updateProgressBar() {
        const progress = ((this.currentQuestionIndex + 1) / quizQuestions.length) * 100;
        this.progressFill.style.width = progress + '%';
    }

    startTimer() {
        // Clear any existing timer
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }

        this.updateTimerDisplay();

        this.timerInterval = setInterval(() => {
            this.timeRemaining--;
            this.updateTimerDisplay();

            if (this.timeRemaining <= 0) {
                clearInterval(this.timerInterval);
                this.autoAdvanceQuestion();
            }
        }, 1000);
    }

    updateTimerDisplay() {
        this.timerValue.textContent = this.timeRemaining;
        
        // Change timer color based on remaining time
        if (this.timeRemaining > 15) {
            this.timerDisplay.classList.remove('warning', 'critical');
        } else if (this.timeRemaining > 5) {
            this.timerDisplay.classList.remove('critical');
            this.timerDisplay.classList.add('warning');
        } else {
            this.timerDisplay.classList.add('critical');
        }
    }

    selectAnswer(optionIndex) {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }

        const question = quizQuestions[this.currentQuestionIndex];
        const optionBtns = document.querySelectorAll('.option-btn');

        // Disable all options
        optionBtns.forEach(btn => btn.classList.add('disabled'));

        const isCorrect = optionIndex === question.correctAnswer;

        // Store user answer
        this.userAnswers.push({
            questionIndex: this.currentQuestionIndex,
            selectedAnswer: optionIndex,
            isCorrect: isCorrect
        });

        // Highlight correct and incorrect answers
        optionBtns.forEach((btn, index) => {
            if (index === question.correctAnswer) {
                btn.classList.add('correct');
            } else if (index === optionIndex && !isCorrect) {
                btn.classList.add('incorrect');
            }
        });

        // Update score
        if (isCorrect) {
            this.score++;
        }

        // Show feedback
        this.feedbackSection.style.display = 'block';
        this.feedbackText.textContent = question.explanation;

        // Save progress
        this.saveProgress();
    }

    autoAdvanceQuestion() {
        // If no answer selected, record it as wrong
        if (!this.userAnswers[this.currentQuestionIndex]) {
            this.userAnswers.push({
                questionIndex: this.currentQuestionIndex,
                selectedAnswer: -1,
                isCorrect: false
            });
        }

        this.nextQuestion();
    }

    nextQuestion() {
        this.currentQuestionIndex++;

        if (this.currentQuestionIndex < quizQuestions.length) {
            this.displayQuestion();
        } else {
            this.finishQuiz();
        }
    }

    finishQuiz() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }

        // Save score
        localStorage.setItem('quizScore', this.score);
        localStorage.removeItem('quizProgress');
        localStorage.removeItem('quizAnswers');

        this.showResults();
    }

    showResults() {
        const percentage = Math.round((this.score / quizQuestions.length) * 100);
        
        this.finalScore.textContent = `${this.score}/${quizQuestions.length}`;
        this.scorePercentage.textContent = `${percentage}%`;

        // Determine message based on score
        if (percentage >= 80) {
            this.scoreMessage.textContent = '🎉 Outstanding! You\'re a tech expert!';
        } else if (percentage >= 60) {
            this.scoreMessage.textContent = '👏 Great job! Keep learning!';
        } else if (percentage >= 40) {
            this.scoreMessage.textContent = '📚 Good try! Review and learn more!';
        } else {
            this.scoreMessage.textContent = '💪 Keep practicing! You\'ll improve!';
        }

        this.showScreen('resultsScreen');
    }

    showReview() {
        this.reviewContainer.innerHTML = '';

        this.userAnswers.forEach(answer => {
            const question = quizQuestions[answer.questionIndex];
            const reviewItem = document.createElement('div');
            reviewItem.className = `review-item ${answer.isCorrect ? 'correct' : 'incorrect'}`;

            let content = `<div class="review-question">Q${answer.questionIndex + 1}: ${question.text}</div>`;

            // Show user's answer
            if (answer.selectedAnswer !== -1) {
                const userAnswerText = question.options[answer.selectedAnswer];
                const answerClass = answer.isCorrect ? '' : 'user-incorrect';
                content += `<div class="review-answer user-answer ${answerClass}">
                    <span class="answer-label">Your Answer:</span>
                    <span class="answer-text">${userAnswerText}</span>
                </div>`;
            } else {
                content += `<div class="review-answer user-answer user-incorrect">
                    <span class="answer-label">Your Answer:</span>
                    <span class="answer-text">No answer selected (time expired)</span>
                </div>`;
            }

            // Show correct answer if user got it wrong
            if (!answer.isCorrect) {
                const correctAnswerText = question.options[question.correctAnswer];
                content += `<div class="review-answer correct-answer">
                    <span class="answer-label">Correct Answer:</span>
                    <span class="answer-text">${correctAnswerText}</span>
                </div>`;
            }

            // Show explanation
            content += `<div class="review-explanation">
                <strong>Explanation:</strong> ${question.explanation}
            </div>`;

            reviewItem.innerHTML = content;
            this.reviewContainer.appendChild(reviewItem);
        });

        const percentage = Math.round((this.score / quizQuestions.length) * 100);
        this.reviewScore.textContent = `Score: ${this.score}/${quizQuestions.length} (${percentage}%)`;

        this.showScreen('reviewScreen');
    }

    backToResults() {
        this.showScreen('resultsScreen');
    }

    restartQuiz() {
        // Clear all localStorage data
        localStorage.removeItem('quizProgress');
        localStorage.removeItem('quizAnswers');
        localStorage.removeItem('quizScore');

        // Reset state
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.score = 0;

        this.showScreen('startScreen');
    }

    showScreen(screenId) {
        // Hide all screens
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });

        // Show target screen
        document.getElementById(screenId).classList.add('active');
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new QuizApp();
});
