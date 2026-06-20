# Quiz Master 🎯

A colorful and engaging quiz application built for tech hackathons. Test your technical knowledge with 10 questions, instant feedback, timer challenges, and score tracking—all without backend dependencies!

## ✨ Features

### Core Features
- **10 Technical Questions** - General tech MCQs covering HTML, JavaScript, Data Structures, Databases, APIs, and more
- **45-Second Timer** - Time limit per question with auto-advance on timeout
- **Instant Feedback** - Green highlighting for correct answers, red for incorrect with explanations
- **Score Tracking** - Real-time score display as "X/10 - Y%"
- **Review Mode** - Complete review of all answers with correct answers and explanations
- **localStorage Persistence** - Quiz progress saved automatically; resume from where you left off

### Design & UX
- **Colorful & Engaging UI** - Modern gradient backgrounds with vibrant button styling
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Sequential Navigation** - Linear flow with no skipping; forces focused answering
- **Visual Feedback** - Timer color changes (yellow at 15s, red at 5s) for urgency
- **Score Messages** - Dynamic congratulatory messages based on performance (80%+, 60%+, 40%+)

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No installation, no backend, no framework required

### Installation & Usage
1. Clone the repository:
   ```bash
   git clone https://github.com/Nezukochannnnn/Quiz_Master.git
   ```

2. Navigate to the directory:
   ```bash
   cd Quiz_Master
   ```

3. Open `index.html` in your browser:
   ```bash
   # Windows
   start index.html
   
   # macOS
   open index.html
   
   # Linux
   xdg-open index.html
   ```

4. Click "Begin Quiz" and start answering!

## 📋 How It Works

### Quiz Flow
1. **Start Screen** - Display quiz info and "Begin Quiz" button
2. **Question Screen** - One question at a time with 4 options, timer, and progress bar
3. **Answer Selection** - Click an option to see instant feedback (green/red with explanation)
4. **Results Screen** - Final score, percentage, and performance message
5. **Review Screen** - Detailed review of all answers with correct/incorrect highlights

### Keyboard Features
- Click options to select
- "Next Question" button to proceed (auto-advances on timer expiry)
- All navigation buttons fully accessible

## 💾 localStorage Management

The app automatically saves and restores:
- **quizProgress** - Current question index (0-9)
- **quizAnswers** - Array of user selections with correctness status
- **quizScore** - Final score for results screen

**Auto-Restore Behavior:**
- Reload mid-quiz → Resume from the same question
- Reload after completion → Show results screen with previous score
- Click "Restart Quiz" → Clear all data and start fresh

## 📚 Question Topics

The quiz covers 10 essential tech topics:
1. HTML Basics
2. Programming Languages
3. Algorithm Complexity
4. Data Structures
5. CSS Styling
6. Relational Databases
7. APIs
8. Sorting Algorithms
9. Version Control (Git)
10. NoSQL Databases

## 🛠️ Built With

- **HTML5** - Semantic markup structure
- **CSS3** - Responsive gradient design with animations
- **Vanilla JavaScript** - No frameworks, pure ES6+ logic
- **localStorage API** - Client-side data persistence
- **No Backend** - Fully client-side application

## 📁 Project Structure

```
Quiz_Master/
├── index.html      # Main HTML structure with all UI screens
├── styles.css      # Colorful, responsive styling
├── script.js       # Quiz logic, timer, scoring, and localStorage
└── README.md       # This file
```

## 🎮 Sample Gameplay

### Correct Answer
```
Question: What does HTML stand for?
Your Answer: Hypertext Markup Language ✓ GREEN
Explanation: HTML stands for HyperText Markup Language...
```

### Incorrect Answer
```
Question: What is the time complexity of binary search?
Your Answer: O(n²) ✗ RED
Correct Answer: O(log n) ✓ GREEN
Explanation: Binary search has a time complexity of O(log n)...
```

## 🎨 UI Highlights

- **Gradient Background** - Purple-violet gradient for modern look
- **Timer Display** - Changes color from gray (safe) → yellow (warning) → red (critical)
- **Progress Bar** - Visual indication of quiz completion percentage
- **Score Circle** - Large circular display for final score
- **Responsive Grid** - Adapts to all screen sizes

## 🔄 Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 💡 Tips for Hackathon Use

1. **Customize Questions** - Edit the `quizQuestions` array in `script.js` to add your own questions
2. **Adjust Timer** - Change `this.timeRemaining = 45` in `script.js` to different seconds
3. **Theme Colors** - Modify gradient colors in `styles.css` to match your hackathon branding
4. **Deploy** - Host on GitHub Pages, Netlify, or Vercel for instant live access

## 📝 Future Enhancements

- Category-based questions
- Difficulty levels
- Leaderboard with localStorage rankings
- Question shuffling
- Admin panel to manage questions
- Timed quiz mode for competitions
- Dark mode toggle
- Sound effects and animations

## 🤝 Contributing

Feel free to fork, modify, and submit pull requests for improvements!

## 📄 License

This project is open source and available under the MIT License.

## 🎯 Perfect For

- Tech hackathons
- Coding interviews prep
- Tech knowledge assessment
- Classroom quizzes
- Self-learning challenges

## 📞 Support

For issues, questions, or suggestions, please open an issue on GitHub.

---

**Built with ❤️ for tech enthusiasts**

Made for the college tech hackathon challenge.
