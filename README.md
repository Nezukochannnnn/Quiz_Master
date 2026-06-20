# Quiz Master 🎯

An advanced, feature-rich quiz application built for tech hackathons and learning platforms. Master your tech knowledge with 25 comprehensive questions across 5 categories, multiple quiz modes, difficulty levels, and detailed statistics—all without backend dependencies!

## 🚀 What's New (Advanced Version)

### Major Features
- **25 Total Questions** - Expanded from 10 to 25 questions for comprehensive coverage
- **5 Quiz Categories** - HTML/CSS, JavaScript, Databases, Data Structures, General Tech
- **3 Quiz Modes**
  - 🎓 **Practice Mode** - Learn at your own pace with 45 seconds per question
  - ⏱️ **Timed Mode** - Race against the clock with total quiz timer
  - 💪 **Survival Mode** - Get 3 strikes and game over!
- **Difficulty Levels** - Easy, Medium, Hard questions (visual badges)
- **Question Shuffling** - Random question order for each attempt
- **Audio Feedback** - Success beeps and error tones for each answer
- **Category Selection** - Choose which topics to include in your quiz
- **Statistics Dashboard** - Track attempts, scores, averages, and history
- **Animated UI** - Smooth transitions, bounce effects, and visual feedback

## ✨ Core Features

### Quiz Experience
- **One question at a time** with 4 multiple choice options
- **Instant visual feedback** - Green (correct), Red (incorrect)
- **Explanations for every question** - Learn from every answer
- **Progress tracking** - Visual progress bar and question counter
- **Real-time timer** - Color-coded warnings (yellow at 15s, red at 5s)
- **Smart auto-advance** - Auto-moves to next question on timer expiry

### Advanced Modes

#### Practice Mode 🎓
- No pressure learning environment
- 45 seconds per question
- Perfect for study sessions
- Best for beginners

#### Timed Mode ⏱️
- Complete all selected questions in a time limit
- Race against the global timer
- Adds urgency and challenge
- Great for competitive exams

#### Survival Mode 💪
- Get 3 wrong answers = Game Over
- Lives display (❤️ 🖤)
- High-stakes quiz experience
- Most challenging mode

### Statistics & Progress
- **Total Attempts** - Track how many times you've taken quizzes
- **Highest Score** - Best percentage achieved
- **Average Score** - Performance trend over time
- **Total Correct** - Cumulative correct answers
- **Quiz History** - Last 5 attempts with dates and modes
- **localStorage Persistence** - All data saved locally

## 🎨 Enhanced UI/UX

### Visual Improvements
- **Gradient backgrounds** - Modern purple-violet aesthetic
- **Category icons** - Visual representation (🎨 HTML, ⚙️ JavaScript, 💾 Database, 📊 DS, 🔧 Tech)
- **Difficulty badges** - Easy (green), Medium (yellow), Hard (red)
- **Smooth animations** - Fade-in, slide-in, bounce effects
- **Responsive design** - Works perfectly on mobile, tablet, desktop
- **Mode badges** - Clear indication of selected mode
- **Score circle** - Large, prominent score display with gradient

### Interaction Feedback
- ✅ **Correct answer** - Green highlight with success beep
- ❌ **Wrong answer** - Red highlight with error tone
- 🎵 **Audio cues** - Different sounds for correct/incorrect
- 📊 **Breakdown statistics** - Shows correct/wrong counts by category

## 📚 Question Database

### Categories (5 topics, 25 questions)

**1. HTML/CSS (5 Q's)** 🎨
- HTML basics and semantic tags
- CSS styling and layout
- Attribute usage

**2. JavaScript (5 Q's)** ⚙️
- Language fundamentals
- Array methods and data types
- Context and scoping

**3. Databases (5 Q's)** 💾
- Relational vs NoSQL
- ACID principles
- Database operations (JOIN, etc.)

**4. Data Structures (5 Q's)** 📊
- Time complexity analysis
- Stack, Queue, Heap
- Sorting algorithms

**5. General Tech (5 Q's)** 🔧
- APIs and REST
- Git and Version Control
- HTTP/HTTPS
- DevOps concepts

## 🎮 How to Use

### Getting Started
1. Clone the repository:
   ```bash
   git clone https://github.com/Nezukochannnnn/Quiz_Master.git
   ```

2. Open `index.html` in a web browser

3. Click "Start Quiz"

### Quiz Workflow
1. **Home Screen** - View stats or start a new quiz
2. **Category Selection** - Choose which topics (all selected by default)
3. **Mode Selection** - Pick Practice, Timed, or Survival mode
4. **Quiz** - Answer questions with real-time feedback
5. **Results** - View final score and performance breakdown
6. **Review** - See all questions with correct answers and explanations
7. **Statistics** - Check your progress and history

## 💾 Data Storage

Quiz Master uses **localStorage** to persistently store:

```javascript
{
  quizProgress: "1",                              // Current question index
  quizAnswers: [...],                             // Array of user answers
  quizScore: "15",                                // Final score
  quizAttempts: [                                 // Complete history
    {
      mode: "practice",
      categories: "JavaScript, Databases",
      score: 20,
      total: 25,
      percentage: 80,
      date: "6/20/2026, 2:30 PM"
    }
  ]
}
```

## 🎯 Features at a Glance

| Feature | Details |
|---------|---------|
| **Questions** | 25 total across 5 categories |
| **Difficulty** | Easy, Medium, Hard |
| **Modes** | Practice, Timed, Survival |
| **Timer** | Per-question (Practice) or total (Timed) |
| **Feedback** | Instant green/red + explanations |
| **Audio** | Success beeps and error tones |
| **Animation** | Smooth transitions and effects |
| **Stats** | Detailed tracking and history |
| **Responsive** | Mobile, tablet, desktop |
| **Storage** | localStorage (no backend needed) |
| **Framework** | Vanilla JavaScript (no dependencies) |

## 🚀 Advanced Configuration

### Customize Difficulty Distribution
Edit `questionsDatabase` in `script.js` to adjust difficulty levels:
```javascript
{
    difficulty: 'easy',  // Change to 'medium' or 'hard'
    // ...
}
```

### Adjust Timer Duration
```javascript
// Practice Mode: 45 seconds per question
this.timeRemaining = 45;

// Timed Mode: 60 seconds per question
this.totalTime = this.allQuestions.length * 60;
```

### Modify Lives for Survival Mode
```javascript
this.lives = 3;  // Change to 5 or 2 for different difficulty
```

### Add Sound Effects
Web Audio API generates beeps on:
- Correct answer: 800Hz sine wave (0.1s)
- Incorrect answer: 400Hz sine wave (0.2s)

## 📱 Responsive Design

- **Desktop** - Full features with optimal spacing
- **Tablet** - Grid adjustments for touch
- **Mobile** - Single-column layout with touch-friendly buttons
- **Small screens** - Compact stats cards and full-width buttons

## 🎓 Perfect For

- **Tech Hackathons** - Quick, engaging quiz format
- **Coding Interviews** - Practice interview questions
- **Learning Platforms** - Student assessment tools
- **Self-Study** - Track your progress over time
- **Competitive Exams** - Use Timed and Survival modes
- **Tech Meetups** - Fun group quizzes during events

## 🔧 Technical Stack

- **HTML5** - Semantic markup with organized screens
- **CSS3** - CSS Grid, Flexbox, gradients, animations
- **Vanilla JavaScript** - Modern ES6+ class-based architecture
- **Web Audio API** - Beep sounds for feedback
- **localStorage API** - Client-side data persistence

## 🛠️ Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📊 Performance

- **Fast load time** - Single static files, no dependencies
- **Smooth animations** - 60fps CSS/JS transitions
- **Minimal storage** - ~50KB of data in localStorage
- **Instant feedback** - No server calls

## 🚀 Deployment Options

Host on any of these platforms for free:
- **GitHub Pages** - Direct deployment from repo
- **Netlify** - Drag and drop deployment
- **Vercel** - One-click deploy from GitHub
- **Firebase Hosting** - Google's hosting platform
- **Any web server** - Upload HTML/CSS/JS files

## 📈 Future Enhancement Ideas

- User authentication and profiles
- Leaderboard with top scores
- Question difficulty balancing
- Category-specific statistics
- Badges and achievements
- Export quiz results as PDF
- Dark mode toggle
- Keyboard-only navigation
- Question reporting system
- Admin panel for question management
- Multiplayer mode
- Time-based challenges

## 🤝 Contributing

Found a bug or have a feature request? Feel free to:
1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## 📄 License

This project is open source and available under the MIT License.

## 🎉 Credits

Built for the college tech hackathon challenge with ❤️

**Version:** 2.0 (Advanced Edition)  
**Last Updated:** June 20, 2026  
**Status:** Ready for Production ✅


---

**Ready to master your tech knowledge? Start the quiz now!** 🚀
