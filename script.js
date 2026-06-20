// Extended Quiz Questions Database (25 questions across 5 categories)
const questionsDatabase = {
    'HTML/CSS': [
        {
            id: 1,
            text: "What does HTML stand for?",
            options: ["Hypertext Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
            correctAnswer: 0,
            difficulty: 'easy',
            explanation: "HTML stands for HyperText Markup Language. It is the standard markup language used to create web pages."
        },
        {
            id: 2,
            text: "What is the purpose of CSS?",
            options: ["To define the structure of web pages", "To style and layout web pages", "To handle server-side logic", "To manage databases"],
            correctAnswer: 1,
            difficulty: 'easy',
            explanation: "CSS (Cascading Style Sheets) is used to style and layout web pages."
        },
        {
            id: 3,
            text: "Which CSS property controls text spacing between words?",
            options: ["letter-spacing", "word-spacing", "text-spacing", "word-gap"],
            correctAnswer: 1,
            difficulty: 'medium',
            explanation: "The word-spacing property in CSS controls the space between words."
        },
        {
            id: 4,
            text: "What is the semantic HTML tag for the main content of a page?",
            options: ["<div>", "<section>", "<main>", "<container>"],
            correctAnswer: 2,
            difficulty: 'medium',
            explanation: "The <main> tag is used to define the main content of a page."
        },
        {
            id: 5,
            text: "Which attribute is used to specify a unique identifier for an HTML element?",
            options: ["class", "id", "name", "ref"],
            correctAnswer: 1,
            difficulty: 'easy',
            explanation: "The 'id' attribute is used to specify a unique identifier for an HTML element."
        }
    ],
    'JavaScript': [
        {
            id: 6,
            text: "Which of the following is NOT a programming language?",
            options: ["Python", "JavaScript", "HTML", "Java"],
            correctAnswer: 2,
            difficulty: 'easy',
            explanation: "HTML is a markup language, not a programming language."
        },
        {
            id: 7,
            text: "What does the 'this' keyword refer to in JavaScript?",
            options: ["The global object", "The object it belongs to", "The parent object", "The function itself"],
            correctAnswer: 1,
            difficulty: 'hard',
            explanation: "'this' refers to the object it belongs to, though this can vary based on context."
        },
        {
            id: 8,
            text: "Which method is used to add an element to the end of an array?",
            options: ["add()", "push()", "append()", "insert()"],
            correctAnswer: 1,
            difficulty: 'easy',
            explanation: "The push() method adds an element to the end of an array."
        },
        {
            id: 9,
            text: "What is the result of typeof null in JavaScript?",
            options: ["'null'", "'object'", "'undefined'", "'null object'"],
            correctAnswer: 1,
            difficulty: 'hard',
            explanation: "typeof null returns 'object', which is actually a known bug in JavaScript."
        },
        {
            id: 10,
            text: "Which of these is a correct way to declare a variable in modern JavaScript?",
            options: ["var x = 5;", "let x = 5;", "const x = 5;", "All are correct"],
            correctAnswer: 3,
            difficulty: 'medium',
            explanation: "var, let, and const are all valid ways to declare variables in JavaScript."
        }
    ],
    'Databases': [
        {
            id: 11,
            text: "Which of these is a relational database?",
            options: ["MongoDB", "Firebase", "PostgreSQL", "Cassandra"],
            correctAnswer: 2,
            difficulty: 'easy',
            explanation: "PostgreSQL is a relational database. MongoDB is NoSQL."
        },
        {
            id: 12,
            text: "Which of the following is a NoSQL database?",
            options: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"],
            correctAnswer: 2,
            difficulty: 'easy',
            explanation: "MongoDB is a NoSQL database that stores data in JSON-like documents."
        },
        {
            id: 13,
            text: "What does ACID stand for in database transactions?",
            options: ["Atomicity, Consistency, Isolation, Durability", "Application, Code, Interface, Data", "Access, Control, Information, Database", "Accuracy, Certainty, Integrity, Design"],
            correctAnswer: 0,
            difficulty: 'medium',
            explanation: "ACID stands for Atomicity, Consistency, Isolation, Durability - properties of reliable database transactions."
        },
        {
            id: 14,
            text: "What is a primary key in a database?",
            options: ["A key that opens the database", "A unique identifier for each row", "A key used for encryption", "The first column in a table"],
            correctAnswer: 1,
            difficulty: 'medium',
            explanation: "A primary key is a unique identifier that uniquely identifies each record in a table."
        },
        {
            id: 15,
            text: "Which JOIN returns all rows from both tables?",
            options: ["INNER JOIN", "LEFT JOIN", "FULL OUTER JOIN", "RIGHT JOIN"],
            correctAnswer: 2,
            difficulty: 'hard',
            explanation: "FULL OUTER JOIN returns all rows from both tables, including unmatched rows."
        }
    ],
    'Data Structures': [
        {
            id: 16,
            text: "What is the time complexity of binary search?",
            options: ["O(n)", "O(n²)", "O(log n)", "O(1)"],
            correctAnswer: 2,
            difficulty: 'medium',
            explanation: "Binary search has O(log n) time complexity as it divides the search space in half each time."
        },
        {
            id: 17,
            text: "Which data structure uses LIFO (Last In First Out)?",
            options: ["Queue", "Stack", "Linked List", "Graph"],
            correctAnswer: 1,
            difficulty: 'easy',
            explanation: "A Stack uses LIFO principle. The last element added is the first one removed."
        },
        {
            id: 18,
            text: "Which sorting algorithm has the best average case time complexity?",
            options: ["Bubble Sort", "Insertion Sort", "Merge Sort", "Selection Sort"],
            correctAnswer: 2,
            difficulty: 'medium',
            explanation: "Merge Sort has O(n log n) average case time complexity."
        },
        {
            id: 19,
            text: "What is a hash table used for?",
            options: ["Storing sorted data", "Mapping keys to values with fast lookup", "Implementing stacks", "Implementing queues"],
            correctAnswer: 1,
            difficulty: 'medium',
            explanation: "Hash tables are used for fast key-value lookups with average O(1) time complexity."
        },
        {
            id: 20,
            text: "Which data structure is best for implementing a priority queue?",
            options: ["Array", "Linked List", "Binary Heap", "Hash Table"],
            correctAnswer: 2,
            difficulty: 'hard',
            explanation: "Binary Heap is the most efficient data structure for implementing a priority queue."
        }
    ],
    'General Tech': [
        {
            id: 21,
            text: "What does API stand for?",
            options: ["Application Programming Integration", "Application Programming Interface", "Advanced Protocol Integration", "Application Program Integration"],
            correctAnswer: 1,
            difficulty: 'easy',
            explanation: "API stands for Application Programming Interface, allowing different software to communicate."
        },
        {
            id: 22,
            text: "What is the main purpose of version control systems like Git?",
            options: ["To run automated tests", "To track changes in code and manage collaboration", "To deploy applications", "To compress files"],
            correctAnswer: 1,
            difficulty: 'easy',
            explanation: "Git is used to track code changes and enable developer collaboration."
        },
        {
            id: 23,
            text: "What does REST stand for in API design?",
            options: ["Representational State Transfer", "Request-Response Energy System", "Reliable Execution Service Tool", "Resource Serialization Tech"],
            correctAnswer: 0,
            difficulty: 'medium',
            explanation: "REST stands for Representational State Transfer, an architectural style for APIs."
        },
        {
            id: 24,
            text: "What is the difference between HTTP and HTTPS?",
            options: ["HTTPS is faster", "HTTPS is encrypted", "HTTP is more secure", "They are the same"],
            correctAnswer: 1,
            difficulty: 'medium',
            explanation: "HTTPS is HTTP with encryption (SSL/TLS), making it secure for sensitive data transmission."
        },
        {
            id: 25,
            text: "What is DevOps primarily focused on?",
            options: ["Developing new features", "Operating servers", "Integration of development and operations", "Device optimization"],
            correctAnswer: 2,
            difficulty: 'hard',
            explanation: "DevOps focuses on integrating development and operations for faster, more reliable deployment."
        }
    ]
};

const categories = Object.keys(questionsDatabase).map((name, index) => ({
    name,
    icon: ['🎨', '⚙️', '💾', '📊', '🔧'][index],
    count: questionsDatabase[name].length
}));

// Main Quiz Application
class QuizMaster {
    constructor() {
        this.selectedCategories = Object.keys(questionsDatabase);
        this.quizMode = 'practice';
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.score = 0;
        this.lives = 3;
        this.timerInterval = null;
        this.timeRemaining = 45;
        this.totalTime = 0;
        this.quizStartTime = null;
        this.allQuestions = [];
        
        this.initializeElements();
        this.attachEventListeners();
        this.showHome();
    }

    initializeElements() {
        // Screens
        this.screens = {
            home: document.getElementById('homeScreen'),
            category: document.getElementById('categoryScreen'),
            mode: document.getElementById('modeScreen'),
            quiz: document.getElementById('quizScreen'),
            results: document.getElementById('resultsScreen'),
            review: document.getElementById('reviewScreen'),
            stats: document.getElementById('statsScreen')
        };

        // Home Screen
        this.startBtn = document.getElementById('startBtn');
        this.statsBtn = document.getElementById('statsBtn');
        this.bestScoreDisplay = document.getElementById('bestScore');

        // Category Screen
        this.categoryGrid = document.getElementById('categoryGrid');
        this.proceedBtn = document.getElementById('proceedBtn');
        this.categoryBackBtn = document.getElementById('categoryBackBtn');

        // Mode Screen
        this.modeBackBtn = document.getElementById('modeBackBtn');

        // Quiz Screen
        this.questionText = document.getElementById('questionText');
        this.optionsContainer = document.getElementById('optionsContainer');
        this.feedbackSection = document.getElementById('feedbackSection');
        this.feedbackLabel = document.getElementById('feedbackLabel');
        this.feedbackText = document.getElementById('feedbackText');
        this.timerValue = document.getElementById('timerValue');
        this.timerDisplay = document.getElementById('timerDisplay');
        this.questionNumber = document.getElementById('questionNumber');
        this.progressFill = document.getElementById('progressFill');
        this.modeBadge = document.getElementById('modeBadge');
        this.categoryBadge = document.getElementById('categoryBadge');
        this.difficultyBadge = document.getElementById('difficultyBadge');
        this.livesContainer = document.getElementById('livesContainer');
        this.livesDisplay = document.getElementById('livesDisplay');
        this.nextBtn = document.getElementById('nextBtn');
        this.quitBtn = document.getElementById('quitBtn');

        // Results Screen
        this.finalScore = document.getElementById('finalScore');
        this.scorePercentage = document.getElementById('scorePercentage');
        this.scoreMessage = document.getElementById('scoreMessage');
        this.correctCount = document.getElementById('correctCount');
        this.wrongCount = document.getElementById('wrongCount');
        this.modeResult = document.getElementById('modeResult');
        this.modeStats = document.getElementById('modeStats');
        this.reviewBtn = document.getElementById('reviewBtn');
        this.retakeBtn = document.getElementById('retakeBtn');
        this.homeBtn = document.getElementById('homeBtn');

        // Review Screen
        this.reviewScore = document.getElementById('reviewScore');
        this.reviewContainer = document.getElementById('reviewContainer');
        this.backToResultsBtn = document.getElementById('backToResultsBtn');
        this.retakeFromReviewBtn = document.getElementById('retakeFromReviewBtn');

        // Stats Screen
        this.totalAttempts = document.getElementById('totalAttempts');
        this.highestScore = document.getElementById('highestScore');
        this.averageScore = document.getElementById('averageScore');
        this.totalCorrect = document.getElementById('totalCorrect');
        this.historyList = document.getElementById('historyList');
        this.statsBackBtn = document.getElementById('statsBackBtn');
    }

    attachEventListeners() {
        // Home
        this.startBtn.addEventListener('click', () => this.showCategories());
        this.statsBtn.addEventListener('click', () => this.showStats());

        // Categories
        this.categoryBackBtn.addEventListener('click', () => this.showHome());
        this.proceedBtn.addEventListener('click', () => this.showModes());

        // Modes
        this.modeBackBtn.addEventListener('click', () => this.showCategories());
        document.querySelectorAll('.btn-mode').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.quizMode = e.target.closest('.mode-card').dataset.mode;
                this.startQuiz();
            });
        });

        // Quiz
        this.nextBtn.addEventListener('click', () => this.nextQuestion());
        this.quitBtn.addEventListener('click', () => {
            if (confirm('Are you sure you want to quit? Your progress will be lost.')) {
                this.showHome();
            }
        });

        // Results
        this.reviewBtn.addEventListener('click', () => this.showReview());
        this.retakeBtn.addEventListener('click', () => this.showModes());
        this.homeBtn.addEventListener('click', () => this.showHome());

        // Review
        this.backToResultsBtn.addEventListener('click', () => this.showResults());
        this.retakeFromReviewBtn.addEventListener('click', () => this.showModes());

        // Stats
        this.statsBackBtn.addEventListener('click', () => this.showHome());
    }

    showScreen(screenName) {
        Object.values(this.screens).forEach(screen => screen.classList.remove('active'));
        this.screens[screenName].classList.add('active');
    }

    showHome() {
        const stats = this.getStats();
        const bestScore = stats.length > 0 ? Math.max(...stats.map(s => s.percentage)) : '-';
        this.bestScoreDisplay.textContent = bestScore !== '-' ? bestScore + '%' : '-';
        this.showScreen('home');
    }

    showCategories() {
        this.renderCategories();
        this.showScreen('category');
    }

    renderCategories() {
        this.categoryGrid.innerHTML = '';
        categories.forEach(cat => {
            const card = document.createElement('div');
            card.className = 'category-card selected';
            card.innerHTML = `
                <div class="category-icon">${cat.icon}</div>
                <div class="category-name">${cat.name}</div>
                <div class="category-count">${cat.count} Qs</div>
            `;
            card.addEventListener('click', () => this.toggleCategory(cat.name, card));
            this.categoryGrid.appendChild(card);
        });
        this.updateProceedButton();
    }

    toggleCategory(categoryName, element) {
        if (this.selectedCategories.includes(categoryName)) {
            if (this.selectedCategories.length > 1) {
                this.selectedCategories = this.selectedCategories.filter(c => c !== categoryName);
                element.classList.remove('selected');
            }
        } else {
            this.selectedCategories.push(categoryName);
            element.classList.add('selected');
        }
        this.updateProceedButton();
    }

    updateProceedButton() {
        this.proceedBtn.disabled = this.selectedCategories.length === 0;
    }

    showModes() {
        this.showScreen('mode');
    }

    startQuiz() {
        this.buildQuestionSet();
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.score = 0;
        this.lives = 3;
        this.quizStartTime = Date.now();
        
        this.setupQuizMode();
        this.showScreen('quiz');
        this.displayQuestion();
    }

    buildQuestionSet() {
        this.allQuestions = [];
        this.selectedCategories.forEach(cat => {
            this.allQuestions.push(...questionsDatabase[cat]);
        });
        this.shuffleArray(this.allQuestions);
        this.categoryBadge.textContent = this.selectedCategories.length === 1 
            ? this.selectedCategories[0] 
            : `${this.selectedCategories.length} Categories`;
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    setupQuizMode() {
        this.modeBadge.textContent = this.quizMode.toUpperCase();
        
        if (this.quizMode === 'survival') {
            this.livesDisplay.style.display = 'block';
            this.updateLivesDisplay();
        } else {
            this.livesDisplay.style.display = 'none';
        }

        if (this.quizMode === 'timed') {
            this.totalTime = this.allQuestions.length * 60; // 60 seconds per question
        }
    }

    displayQuestion() {
        const question = this.allQuestions[this.currentQuestionIndex];
        
        this.questionNumber.textContent = `${this.currentQuestionIndex + 1}/${this.allQuestions.length}`;
        this.updateProgressBar();
        this.questionText.textContent = question.text;

        this.difficultyBadge.textContent = question.difficulty.toUpperCase();
        this.difficultyBadge.className = `difficulty-badge ${question.difficulty}`;

        this.optionsContainer.innerHTML = '';
        question.options.forEach((option, index) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = option;
            btn.addEventListener('click', () => this.selectAnswer(index));
            this.optionsContainer.appendChild(btn);
        });

        this.feedbackSection.style.display = 'none';

        if (this.quizMode === 'practice') {
            this.timeRemaining = 45;
            this.startTimer();
        } else if (this.quizMode === 'timed') {
            this.timeRemaining = this.totalTime;
            this.startTimedModeTimer();
        }
    }

    updateProgressBar() {
        const progress = ((this.currentQuestionIndex + 1) / this.allQuestions.length) * 100;
        this.progressFill.style.width = progress + '%';
    }

    startTimer() {
        if (this.timerInterval) clearInterval(this.timerInterval);
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

    startTimedModeTimer() {
        if (this.timerInterval) clearInterval(this.timerInterval);
        this.updateTimerDisplay();
        
        this.timerInterval = setInterval(() => {
            this.totalTime--;
            this.timeRemaining = this.totalTime;
            this.updateTimerDisplay();
            if (this.totalTime <= 0) {
                clearInterval(this.timerInterval);
                this.finishQuiz();
            }
        }, 1000);
    }

    updateTimerDisplay() {
        this.timerValue.textContent = this.quizMode === 'timed' 
            ? Math.ceil(this.totalTime / 60)
            : this.timeRemaining;
        
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
        if (this.timerInterval) clearInterval(this.timerInterval);

        const question = this.allQuestions[this.currentQuestionIndex];
        const optionBtns = document.querySelectorAll('.option-btn');
        optionBtns.forEach(btn => btn.classList.add('disabled'));

        const isCorrect = optionIndex === question.correctAnswer;
        
        this.userAnswers.push({
            questionIndex: this.currentQuestionIndex,
            selectedAnswer: optionIndex,
            isCorrect
        });

        if (isCorrect) {
            this.score++;
            optionBtns[optionIndex].classList.add('correct');
            this.playSound('correct');
        } else {
            optionBtns[optionIndex].classList.add('incorrect');
            optionBtns[question.correctAnswer].classList.add('correct');
            this.playSound('incorrect');
            
            if (this.quizMode === 'survival') {
                this.lives--;
                if (this.lives <= 0) {
                    this.feedbackSection.style.display = 'block';
                    this.feedbackLabel.textContent = 'Game Over!';
                    this.feedbackLabel.className = 'feedback-label incorrect';
                    this.feedbackText.textContent = 'You\'ve run out of lives! Quiz ended.';
                    this.nextBtn.textContent = 'View Results';
                    setTimeout(() => this.finishQuiz(), 2000);
                    return;
                }
                this.updateLivesDisplay();
            }
        }

        this.feedbackSection.style.display = 'block';
        this.feedbackLabel.textContent = isCorrect ? 'Correct!' : 'Incorrect!';
        this.feedbackLabel.className = `feedback-label ${isCorrect ? 'correct' : 'incorrect'}`;
        this.feedbackText.textContent = question.explanation;
    }

    updateLivesDisplay() {
        this.livesContainer.innerHTML = '';
        for (let i = 0; i < 3; i++) {
            const life = document.createElement('div');
            life.className = 'life';
            life.textContent = i < this.lives ? '❤️' : '🖤';
            this.livesContainer.appendChild(life);
        }
    }

    autoAdvanceQuestion() {
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
        if (this.currentQuestionIndex < this.allQuestions.length) {
            this.displayQuestion();
        } else {
            this.finishQuiz();
        }
    }

    finishQuiz() {
        if (this.timerInterval) clearInterval(this.timerInterval);
        
        const attempt = {
            mode: this.quizMode,
            categories: this.selectedCategories.join(', '),
            score: this.score,
            total: this.allQuestions.length,
            percentage: Math.round((this.score / this.allQuestions.length) * 100),
            date: new Date().toLocaleString()
        };
        
        this.saveAttempt(attempt);
        this.showResults();
    }

    showResults() {
        const total = this.allQuestions.length;
        const percentage = Math.round((this.score / total) * 100);
        
        this.finalScore.textContent = `${this.score}/${total}`;
        this.scorePercentage.textContent = `${percentage}%`;
        this.correctCount.textContent = this.score;
        this.wrongCount.textContent = total - this.score;
        this.modeResult.textContent = this.quizMode.toUpperCase() + ' MODE';
        
        let message = '';
        if (percentage >= 90) message = '🎉 Outstanding! You\'re a true tech master!';
        else if (percentage >= 75) message = '🌟 Excellent! Very impressive performance!';
        else if (percentage >= 60) message = '👏 Good job! Keep practicing!';
        else if (percentage >= 40) message = '📚 Nice try! Review and improve!';
        else message = '💪 Keep learning! You\'ll get better!';
        
        this.scoreMessage.textContent = message;

        let modeStatsHtml = '';
        if (this.quizMode === 'timed') {
            modeStatsHtml = `Completed in time! ⏱️`;
        } else if (this.quizMode === 'survival') {
            modeStatsHtml = `Survived with ${Math.max(0, this.lives)} ${this.lives === 1 ? 'life' : 'lives'} remaining! 💪`;
        }
        this.modeStats.innerHTML = modeStatsHtml;

        this.showScreen('results');
    }

    showReview() {
        this.reviewContainer.innerHTML = '';
        const total = this.allQuestions.length;
        const percentage = Math.round((this.score / total) * 100);
        this.reviewScore.textContent = `Score: ${this.score}/${total} (${percentage}%)`;

        this.userAnswers.forEach(answer => {
            const question = this.allQuestions[answer.questionIndex];
            const item = document.createElement('div');
            item.className = `review-item ${answer.isCorrect ? 'correct' : 'incorrect'}`;
            
            let html = `<div class="review-question">Q${answer.questionIndex + 1}: ${question.text}</div>`;
            
            if (answer.selectedAnswer !== -1) {
                html += `<div class="review-answer ${answer.isCorrect ? '' : 'user-incorrect'}">
                    <span class="answer-label">Your Answer:</span>
                    <span class="answer-text">${question.options[answer.selectedAnswer]}</span>
                </div>`;
            } else {
                html += `<div class="review-answer user-incorrect">
                    <span class="answer-label">Your Answer:</span>
                    <span class="answer-text">No answer (timeout)</span>
                </div>`;
            }
            
            if (!answer.isCorrect) {
                html += `<div class="review-answer correct-answer">
                    <span class="answer-label">Correct Answer:</span>
                    <span class="answer-text">${question.options[question.correctAnswer]}</span>
                </div>`;
            }
            
            html += `<div class="review-explanation"><strong>Explanation:</strong> ${question.explanation}</div>`;
            item.innerHTML = html;
            this.reviewContainer.appendChild(item);
        });

        this.showScreen('review');
    }

    showStats() {
        const attempts = this.getStats();
        
        if (attempts.length === 0) {
            this.totalAttempts.textContent = '0';
            this.highestScore.textContent = '-';
            this.averageScore.textContent = '-';
            this.totalCorrect.textContent = '0';
            this.historyList.innerHTML = '<p class="empty-message">No quiz attempts yet</p>';
        } else {
            const percentages = attempts.map(a => a.percentage);
            this.totalAttempts.textContent = attempts.length;
            this.highestScore.textContent = Math.max(...percentages) + '%';
            this.averageScore.textContent = Math.round(percentages.reduce((a, b) => a + b) / percentages.length) + '%';
            this.totalCorrect.textContent = attempts.reduce((sum, a) => sum + a.correct, 0);
            
            this.historyList.innerHTML = attempts.slice(-5).reverse().map((a, i) => `
                <div class="history-item">
                    <div>
                        <div style="font-weight: 600;">${a.categories}</div>
                        <div class="history-date">${a.date}</div>
                    </div>
                    <div class="history-score">${a.percentage}%</div>
                </div>
            `).join('');
        }

        this.showScreen('stats');
    }

    saveAttempt(attempt) {
        let attempts = JSON.parse(localStorage.getItem('quizAttempts') || '[]');
        attempt.correct = this.score;
        attempts.push(attempt);
        localStorage.setItem('quizAttempts', JSON.stringify(attempts));
    }

    getStats() {
        return JSON.parse(localStorage.getItem('quizAttempts') || '[]');
    }

    playSound(type) {
        // Create simple beep using Web Audio API
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gain = audioContext.createGain();
        
        oscillator.connect(gain);
        gain.connect(audioContext.destination);
        
        if (type === 'correct') {
            oscillator.frequency.value = 800;
            oscillator.type = 'sine';
            gain.gain.setValueAtTime(0.3, audioContext.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.1);
        } else {
            oscillator.frequency.value = 400;
            oscillator.type = 'sine';
            gain.gain.setValueAtTime(0.2, audioContext.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.2);
        }
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    new QuizMaster();
});
