// Main JavaScript file for STAR Learning Management System
class STARLearningSystem {
    constructor() {
        this.currentUser = null;
        this.currentBook = null;
        this.currentSlide = 0;
        this.currentQuestion = 0;
        this.quizSession = null;
        this.readingStartTime = null;
        this.quizStartTime = null;
        this.userAnswers = [];
        this.readingTimer = null;
        this.quizTimer = null;
        
        this.init();
    }

    async init() {
        // Hide loading screen immediately
        document.getElementById('loading-screen').style.display = 'none';

        // Check if user is already logged in
        this.checkExistingUser();
        
        // Setup event listeners
        this.setupEventListeners();
        
        // Load library data
        await this.loadLibrary();
    }

    checkExistingUser() {
        const savedUser = localStorage.getItem('starUser');
        console.log('Checking user:', savedUser);
        if (savedUser) {
            this.currentUser = JSON.parse(savedUser);
            if (this.currentUser.registrationComplete) {
                this.showLibrary();
            } else {
                this.showRegistration();
            }
        } else {
            this.showLogin(); // Ensure login is shown if no user
        }
    }

    setupEventListeners() {
        // Login form
        const loginForm = document.querySelector('.login-form');
        if (loginForm) {
            loginForm.addEventListener('submit', (e) => this.handleLogin(e));
        }

        // Registration form
        const registrationForm = document.querySelector('.registration-form');
        if (registrationForm) {
            registrationForm.addEventListener('submit', (e) => this.handleRegistration(e));
        }

        // Search functionality
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => this.handleSearch(e));
        }

        // Set today's date for registration
        const dateInput = document.getElementById('registrationDate');
        if (dateInput) {
            dateInput.value = new Date().toISOString().split('T')[0];
        }
    }

    async handleLogin(e) {
        e.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        // Check if user exists in localStorage
        const existingUsers = JSON.parse(localStorage.getItem('starUsers') || '{}');
        const user = existingUsers[username];

        if (user && user.password === password) {
            this.currentUser = user;
            localStorage.setItem('starUser', JSON.stringify(user));
            
            if (user.registrationComplete) {
                this.showLibrary();
            } else {
                this.showRegistration();
            }
        } else {
            // For demo purposes, allow any login to proceed to registration
            this.currentUser = { username, password, registrationComplete: false };
            this.showRegistration();
        }
    }

    async handleRegistration(e) {
        e.preventDefault();
        
        const formData = {
            fullName: document.getElementById('fullName').value,
            designation: document.getElementById('designation').value,
            teamDepartment: document.getElementById('teamDepartment').value,
            baseCity: document.getElementById('baseCity').value,
            registrationDate: document.getElementById('registrationDate').value,
            email: document.getElementById('email').value,
            cellNumber: document.getElementById('cellNumber').value,
            username: document.getElementById('reg-username').value || this.currentUser?.username,
            password: document.getElementById('reg-password').value || this.currentUser?.password,
            registrationComplete: true
        };

        // Save to localStorage
        const existingUsers = JSON.parse(localStorage.getItem('starUsers') || '{}');
        existingUsers[formData.username] = formData;
        localStorage.setItem('starUsers', JSON.stringify(existingUsers));
        localStorage.setItem('starUser', JSON.stringify(formData));

        this.currentUser = formData;
        this.showLibrary();
    }

    async loadLibrary() {
        const bookSections = document.getElementById('book-sections');
        if (!bookSections) return;

        bookSections.innerHTML = '';

        // Fallback to dummy data if LMSData is not defined
        const sections = window.LMSData?.bookSections || [
            {
                title: "Sample Section",
                description: "A collection of sample books.",
                books: [
                    {
                        id: "book1",
                        dataFile: "book1.json",
                        thumbnail: "placeholder.jpg",
                        title: "Sample Book 1",
                        description: "A sample book description."
                    }
                ]
            }
        ];

        for (const section of sections) {
            const sectionElement = document.createElement('div');
            sectionElement.className = 'book-section';
            
            sectionElement.innerHTML = `
                <h2 class="section-title">${section.title}</h2>
                <p class="section-description">${section.description}</p>
                <div class="books-grid">
                    ${section.books.map(book => `
                        <div class="book-card" onclick="starSystem.selectBook('${book.id}', '${book.dataFile}')">
                            <div class="book-thumbnail">
                                <img src="${book.thumbnail}" alt="${book.title}" 
                                     onerror="this.style.display='none'; this.parentElement.innerHTML='📚';">
                            </div>
                            <h3 class="book-title">${book.title}</h3>
                            <p class="book-description">${book.description}</p>
                        </div>
                    `).join('')}
                </div>
            `;
            
            bookSections.appendChild(sectionElement);
        }
    }

    handleSearch(e) {
        const searchTerm = e.target.value.toLowerCase();
        const bookCards = document.querySelectorAll('.book-card');
        
        bookCards.forEach(card => {
            const title = card.querySelector('.book-title').textContent.toLowerCase();
            const description = card.querySelector('.book-description').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    async selectBook(bookId, dataFile) {
        try {
            this.currentBook = window.BookData_Mindset;
            this.currentSlide = 0;
            this.showReader();
        } catch (error) {
            console.error('Error loading book data:', error);
            alert('Error loading book. Please try again.');
        }
    }

    showLogin() {
        this.hideAllPages();
        document.getElementById('login-page').classList.add('active');
    }

    showRegistration() {
        this.hideAllPages();
        document.getElementById('registration-page').classList.add('active');
    }

    showLibrary() {
        this.hideAllPages();
        document.getElementById('library-page').classList.add('active');
        document.getElementById('user-name').textContent = this.currentUser?.fullName || this.currentUser?.username;
    }

    showReader() {
        this.hideAllPages();
        document.getElementById('reader-page').classList.add('active');
        document.getElementById('book-title').textContent = this.currentBook.title;
        
        this.startReadingTimer();
        this.displaySlide();
    }

    showQuiz() {
        this.hideAllPages();
        document.getElementById('quiz-page').classList.add('active');
        document.getElementById('quiz-book-title').textContent = `Quiz: ${this.currentBook.title}`;
        
        this.initializeQuiz();
        this.startQuizTimer();
        this.displayQuestion();
    }

    showScorecard() {
        this.hideAllPages();
        document.getElementById('scorecard-page').classList.add('active');
        this.displayScorecard();
    }

    showAnswers() {
        this.hideAllPages();
        document.getElementById('answers-page').classList.add('active');
        this.displayAnswerReview();
    }

    hideAllPages() {
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });
    }

    startReadingTimer() {
        this.readingStartTime = new Date();
        const timerElement = document.getElementById('reading-timer');
        
        this.readingTimer = setInterval(() => {
            const elapsed = new Date() - this.readingStartTime;
            const minutes = Math.floor(elapsed / 60000);
            const seconds = Math.floor((elapsed % 60000) / 1000);
            timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }, 1000);
    }

    startQuizTimer() {
        this.quizStartTime = new Date();
        const timerElement = document.getElementById('quiz-timer');
        
        this.quizTimer = setInterval(() => {
            const elapsed = new Date() - this.quizStartTime;
            const minutes = Math.floor(elapsed / 60000);
            const seconds = Math.floor((elapsed % 60000) / 1000);
            timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }, 1000);
    }

    stopReadingTimer() {
        if (this.readingTimer) {
            clearInterval(this.readingTimer);
            const elapsed = new Date() - this.readingStartTime;
            const minutes = Math.floor(elapsed / 60000);
            const seconds = Math.floor((elapsed % 60000) / 1000);
            return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }
        return '00:00';
    }

    stopQuizTimer() {
        if (this.quizTimer) {
            clearInterval(this.quizTimer);
            const elapsed = new Date() - this.quizStartTime;
            const minutes = Math.floor(elapsed / 60000);
            const seconds = Math.floor((elapsed % 60000) / 1000);
            return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }
        return '00:00';
    }

    displaySlide() {
        const slide = this.currentBook.slides[this.currentSlide];
        const slideContainer = document.getElementById('current-slide');
        const slideCounter = document.getElementById('slide-counter');
        
        slideContainer.innerHTML = `
            <h3>${slide.title}</h3>
            <div class="slide-content">${slide.content}</div>
            ${this.currentSlide === this.currentBook.slides.length - 1 ? 
                '<button class="rainbow-btn" onclick="starSystem.proceedToQuiz()" style="margin-top: 2rem;">Let\'s Check Your Understanding of This Book</button>' : ''}
        `;
        
        slideCounter.textContent = `${this.currentSlide + 1} / ${this.currentBook.slides.length}`;
        
        slideContainer.classList.add('slide-in-right');
        setTimeout(() => {
            slideContainer.classList.remove('slide-in-right');
        }, 500);
    }

    initializeQuiz() {
        const shuffledQuestions = [...this.currentBook.quizQuestions].sort(() => Math.random() - 0.5);
        this.quizSession = {
            ...window.LMSData?.quizSessionTemplate || {},
            bookId: this.currentBook.id,
            bookTitle: this.currentBook.title,
            userName: this.currentUser.fullName || this.currentUser.username,
            questions: shuffledQuestions.slice(0, 20),
            readingTime: this.stopReadingTimer()
        };
        
        this.currentQuestion = 0;
        this.userAnswers = [];
    }

    displayQuestion() {
        const question = this.quizSession.questions[this.currentQuestion];
        const questionContainer = document.getElementById('current-question');
        const questionCounter = document.getElementById('question-counter');
        
        questionContainer.innerHTML = `
            <h4>${question.question}</h4>
            <div class="options">
                ${Object.entries(question.options).map(([key, value]) => `
                    <div class="option" onclick="starSystem.selectAnswer('${key}')">
                        <strong>${key}:</strong> ${value}
                    </div>
                `).join('')}
            </div>
        `;
        
        questionCounter.textContent = `${this.currentQuestion + 1} / ${this.quizSession.questions.length}`;
        
        const prevBtn = document.getElementById('prev-question-btn');
        const nextBtn = document.getElementById('next-question-btn');
        const finishBtn = document.getElementById('finish-quiz-btn');
        
        prevBtn.style.display = this.currentQuestion === 0 ? 'none' : 'block';
        
        if (this.currentQuestion === this.quizSession.questions.length - 1) {
            nextBtn.style.display = 'none';
            finishBtn.style.display = 'block';
        } else {
            nextBtn.style.display = 'block';
            finishBtn.style.display = 'none';
        }
        
        if (this.userAnswers[this.currentQuestion]) {
            const selectedOption = document.querySelector(`.option:nth-child(${this.getOptionIndex(this.userAnswers[this.currentQuestion])})`);
            if (selectedOption) {
                selectedOption.classList.add('selected');
            }
        }
    }

    selectAnswer(answer) {
        document.querySelectorAll('.option').forEach(option => {
            option.classList.remove('selected');
        });
        
        event.target.classList.add('selected');
        
        this.userAnswers[this.currentQuestion] = answer;
        
        this.updateScoreDisplay();
    }

    getOptionIndex(answer) {
        const options = ['A', 'B', 'C', 'D'];
        return options.indexOf(answer) + 1;
    }

    updateScoreDisplay() {
        const scoreElement = document.getElementById('quiz-score');
        let correctAnswers = 0;
        
        this.userAnswers.forEach((answer, index) => {
            if (answer && this.quizSession.questions[index] && 
                answer === this.quizSession.questions[index].correctAnswer) {
                correctAnswers++;
            }
        });
        
        const score = correctAnswers * 5;
        scoreElement.textContent = `Score: ${score}/100`;
    }

    calculateGrade(score) {
        for (const [grade, range] of Object.entries(window.LMSData?.gradingSystem || {})) {
            if (score >= range.min && score <= range.max) {
                return { grade, message: range.message };
            }
        }
        return { grade: 'E', message: 'Needs improvement. Keep learning!' };
    }

    async finishQuiz() {
        const quizTime = this.stopQuizTimer();
        let correctAnswers = 0;
        
        this.userAnswers.forEach((answer, index) => {
            if (answer && answer === this.quizSession.questions[index].correctAnswer) {
                correctAnswers++;
            }
        });
        
        const score = correctAnswers * 5;
        const gradeInfo = this.calculateGrade(score);
        
        this.quizSession.answers = this.userAnswers;
        this.quizSession.score = score;
        this.quizSession.grade = gradeInfo.grade;
        this.quizSession.quizTime = quizTime;
        this.quizSession.endTime = new Date();
        this.quizSession.encouragementMessage = gradeInfo.message;
        
        try {
            await window.GoogleSheetsAPI.saveQuizResults(this.quizSession);
        } catch (error) {
            console.error('Failed to save quiz results:', error);
        }
        
        const quizHistory = JSON.parse(localStorage.getItem('starQuizHistory') || '[]');
        quizHistory.push(this.quizSession);
        localStorage.setItem('starQuizHistory', JSON.stringify(quizHistory));
        
        this.showScorecard();
    }

    displayScorecard() {
        const scorecardContent = document.getElementById('scorecard-content');
        const userInfo = this.currentUser;
        const quiz = this.quizSession;
        
        scorecardContent.innerHTML = `
            <div class="certificate-border"></div>
            <div class="user-details">
                <h3>Certificate of Completion</h3>
                <p><strong>Name:</strong> ${userInfo.fullName}</p>
                <p><strong>Designation:</strong> ${userInfo.designation}</p>
                <p><strong>Team/Department:</strong> ${userInfo.teamDepartment}</p>
                <p><strong>Base City:</strong> ${userInfo.baseCity}</p>
                <p><strong>Email:</strong> ${userInfo.email}</p>
                <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
            </div>
            
            <div class="score-details">
                <div class="score-item">
                    <div class="score-label">Book</div>
                    <div class="score-value">${quiz.bookTitle}</div>
                </div>
                <div class="score-item">
                    <div class="score-label">Reading Time</div>
                    <div class="score-value">${quiz.readingTime}</div>
                </div>
                <div class="score-item">
                    <div class="score-label">Quiz Time</div>
                    <div class="score-value">${quiz.quizTime}</div>
                </div>
                <div class="score-item">
                    <div class="score-label">Score</div>
                    <div class="score-value">${quiz.score}/100</div>
                </div>
                <div class="score-item">
                    <div class="score-label">Grade</div>
                    <div class="score-value grade-${quiz.grade}">${quiz.grade}</div>
                </div>
            </div>
            
            <div class="encouragement-message">
                <h4>Feedback</h4>
                <p>${quiz.encouragementMessage}</p>
            </div>
        `;
    }

    displayAnswerReview() {
        const answersContent = document.getElementById('answers-content');
        const questions = this.quizSession.questions;
        const userAnswers = this.quizSession.answers;
        
        let reviewHTML = '';
        
        questions.forEach((question, index) => {
            const userAnswer = userAnswers[index];
            const correctAnswer = question.correctAnswer;
            const isCorrect = userAnswer === correctAnswer;
            
            reviewHTML += `
                <div class="answer-item">
                    <div class="question-text">
                        <strong>Question ${index + 1}:</strong> ${question.question}
                    </div>
                    <div class="answer-options">
                        ${Object.entries(question.options).map(([key, value]) => {
                            let className = 'option';
                            if (key === correctAnswer) className += ' correct';
                            if (key === userAnswer && key !== correctAnswer) className += ' incorrect';
                            if (key === userAnswer) className += ' selected';
                            
                            return `<div class="${className}"><strong>${key}:</strong> ${value}</div>`;
                        }).join('')}
                    </div>
                    <div class="answer-summary">
                        <span>Your answer: ${userAnswer || 'Not answered'}</span>
                        <span>Correct answer: ${correctAnswer}</span>
                        <span class="${isCorrect ? 'correct' : 'incorrect'}">
                            ${isCorrect ? '✓ Correct' : '✗ Incorrect'}
                        </span>
                    </div>
                </div>
            `;
        });
        
        answersContent.innerHTML = reviewHTML;
    }

    async downloadPDF() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        
        doc.setFontSize(20);
        doc.text('STAR Learning Certificate', 105, 30, { align: 'center' });
        
        doc.setFontSize(16);
        doc.text('Shaigan\'s Books Learning Management Portal', 105, 45, { align: 'center' });
        
        doc.setFontSize(12);
        const userInfo = this.currentUser;
        const quiz = this.quizSession;
        
        let yPosition = 70;
        const leftMargin = 20;
        
        doc.text(`Name: ${userInfo.fullName}`, leftMargin, yPosition);
        yPosition += 10;
        doc.text(`Designation: ${userInfo.designation}`, leftMargin, yPosition);
        yPosition += 10;
        doc.text(`Team/Department: ${userInfo.teamDepartment}`, leftMargin, yPosition);
        yPosition += 10;
        doc.text(`Base City: ${userInfo.baseCity}`, leftMargin, yPosition);
        yPosition += 10;
        doc.text(`Email: ${userInfo.email}`, leftMargin, yPosition);
        yPosition += 10;
        doc.text(`Date: ${new Date().toLocaleDateString()}`, leftMargin, yPosition);
        
        yPosition += 20;
        doc.text(`Book: ${quiz.bookTitle}`, leftMargin, yPosition);
        yPosition += 10;
        doc.text(`Reading Time: ${quiz.readingTime}`, leftMargin, yPosition);
        yPosition += 10;
        doc.text(`Quiz Time: ${quiz.quizTime}`, leftMargin, yPosition);
        yPosition += 10;
        doc.text(`Score: ${quiz.score}/100`, leftMargin, yPosition);
        yPosition += 10;
        doc.text(`Grade: ${quiz.grade}`, leftMargin, yPosition);
        
        yPosition += 20;
        doc.setFontSize(10);
        const message = quiz.encouragementMessage;
        const splitMessage = doc.splitTextToSize(message, 170);
        doc.text(splitMessage, leftMargin, yPosition);
        
        doc.save(`STAR_Certificate_${userInfo.fullName.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.pdf`);
    }

    goToFirstSlide() {
        this.currentSlide = 0;
        this.displaySlide();
    }

    previousSlide() {
        if (this.currentSlide > 0) {
            this.currentSlide--;
            this.displaySlide();
        }
    }

    nextSlide() {
        if (this.currentSlide < this.currentBook.slides.length - 1) {
            this.currentSlide++;
            this.displaySlide();
        }
    }

    goToLastSlide() {
        this.currentSlide = this.currentBook.slides.length - 1;
        this.displaySlide();
    }

    proceedToQuiz() {
        this.showQuiz();
    }

    previousQuestion() {
        if (this.currentQuestion > 0) {
            this.currentQuestion--;
            this.displayQuestion();
        }
    }

    nextQuestion() {
        if (this.currentQuestion < this.quizSession.questions.length - 1) {
            this.currentQuestion++;
            this.displayQuestion();
        }
    }

    retakeQuiz() {
        const useNewQuestions = confirm('Would you like to use a new set of questions for the retake?');
        if (useNewQuestions) {
            this.generateNewQuiz();
        }
        this.showQuiz();
    }

    generateNewQuiz() {
        const allQuestions = [
            ...this.currentBook.quizQuestions,
            ...this.currentBook.extendedQuestionBank
        ];
        
        const shuffledQuestions = [...allQuestions].sort(() => Math.random() - 0.5);
        this.quizSession.questions = shuffledQuestions.slice(0, 20);
        this.currentQuestion = 0;
        this.userAnswers = [];
    }

    goHome() {
        if (this.readingTimer) clearInterval(this.readingTimer);
        if (this.quizTimer) clearInterval(this.quizTimer);
        
        this.showLibrary();
    }

    backToScorecard() {
        this.showScorecard();
    }

    logout() {
        localStorage.removeItem('starUser');
        this.currentUser = null;
        this.currentBook = null;
        this.showLogin();
    }
}

// Global functions for HTML onclick events
window.showRegistration = () => starSystem.showRegistration();
window.showLogin = () => starSystem.showLogin();
window.logout = () => starSystem.logout();
window.goToFirstSlide = () => starSystem.goToFirstSlide();
window.previousSlide = () => starSystem.previousSlide();
window.nextSlide = () => starSystem.nextSlide();
window.goToLastSlide = () => starSystem.goToLastSlide();
window.goHome = () => starSystem.goHome();
window.previousQuestion = () => starSystem.previousQuestion();
window.nextQuestion = () => starSystem.nextQuestion();
window.finishQuiz = () => starSystem.finishQuiz();
window.downloadPDF = () => starSystem.downloadPDF();
window.showAnswers = () => starSystem.showAnswers();
window.retakeQuiz = () => starSystem.retakeQuiz();
window.backToScorecard = () => starSystem.backToScorecard();

// Dummy LMSData for testing
window.LMSData = window.LMSData || {
    bookSections: [
        {
            title: "Sample Section",
            description: "A collection of sample books.",
            books: [
                {
                    id: "book1",
                    dataFile: "book1.json",
                    thumbnail: "placeholder.jpg",
                    title: "Sample Book 1",
                    description: "A sample book description."
                }
            ]
        }
    ],
    quizSessionTemplate: {},
    gradingSystem: {
        A: { min: 90, max: 100, message: "Excellent work! Keep it up!" },
        B: { min: 80, max: 89, message: "Good job! Aim higher next time!" },
        C: { min: 70, max: 79, message: "Fair effort. Room for improvement." },
        D: { min: 60, max: 69, message: "Needs more practice." },
        E: { min: 0, max: 59, message: "Needs improvement. Keep learning!" }
    }
};

// Initialize the system when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.starSystem = new STARLearningSystem();
});
