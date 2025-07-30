// Data structure for the Learning Management System
window.LMSData = {
    // Google Sheets Integration
    googleSheets: {
        url: 'https://script.google.com/macros/s/AKfycbxtHn7uUxIb4vJZmqNC40sKXwuKRetDx_33RXU1J_oUKle9-dcVEYLTHxgH0CMvOQvj/exec',
        spreadsheetId: '1ScFwhEP3FRUF_vz-ALxo17WKFz74O43ExOE8fi3uMyQ',
        libraryId: '1PzOBOBHZ0UzpkTnVIEYN0GcWKRHz459xr_kjszl_7Hg2PEHt8tpvB_65'
    },

    // Book sections configuration
    bookSections: [
        {
            id: 'mindset-psychology',
            title: 'Mindset - Psychology of Success',
            description: 'Essential concepts from Carol Dweck\'s groundbreaking work',
            books: [
                {
                    id: 'mindset-main',
                    title: 'Mindset: The New Psychology of Success',
                    description: 'The complete guide to growth mindset',
                    thumbnail: '1a.png',
                    dataFile: '1books.js'
                }
            ]
        },
        {
            id: 'personal-development',
            title: 'Personal Development',
            description: 'Books for continuous learning and growth',
            books: [
                {
                    id: 'atomic-habits',
                    title: 'Atomic Habits',
                    description: 'Small changes, remarkable results',
                    thumbnail: '2a.png',
                    dataFile: '2books.js'
                },
                {
                    id: 'think-grow-rich',
                    title: 'Think and Grow Rich',
                    description: 'Napoleon Hill\'s success principles',
                    thumbnail: '3a.png',
                    dataFile: '3books.js'
                }
            ]
        },
        {
            id: 'leadership',
            title: 'Leadership & Management',
            description: 'Essential leadership skills and principles',
            books: [
                {
                    id: 'good-to-great',
                    title: 'Good to Great',
                    description: 'Why some companies make the leap',
                    thumbnail: '4a.png',
                    dataFile: '4books.js'
                },
                {
                    id: 'seven-habits',
                    title: '7 Habits of Highly Effective People',
                    description: 'Stephen Covey\'s timeless principles',
                    thumbnail: '5a.png',
                    dataFile: '5books.js'
                }
            ]
        },
        {
            id: 'productivity',
            title: 'Productivity & Time Management',
            description: 'Maximize your efficiency and effectiveness',
            books: [
                {
                    id: 'deep-work',
                    title: 'Deep Work',
                    description: 'Rules for focused success',
                    thumbnail: '6a.png',
                    dataFile: '6books.js'
                },
                {
                    id: 'getting-things-done',
                    title: 'Getting Things Done',
                    description: 'The art of stress-free productivity',
                    thumbnail: '7a.png',
                    dataFile: '7books.js'
                }
            ]
        },
        {
            id: 'communication',
            title: 'Communication & Relationships',
            description: 'Build better connections and influence',
            books: [
                {
                    id: 'how-to-win-friends',
                    title: 'How to Win Friends & Influence People',
                    description: 'Dale Carnegie\'s classic guide',
                    thumbnail: '8a.png',
                    dataFile: '8books.js'
                },
                {
                    id: 'crucial-conversations',
                    title: 'Crucial Conversations',
                    description: 'Tools for talking when stakes are high',
                    thumbnail: '9a.png',
                    dataFile: '9books.js'
                }
            ]
        },
        {
            id: 'innovation',
            title: 'Innovation & Creativity',
            description: 'Think differently and create breakthrough solutions',
            books: [
                {
                    id: 'innovators-dilemma',
                    title: 'The Innovator\'s Dilemma',
                    description: 'When new technologies cause great firms to fail',
                    thumbnail: '10a.png',
                    dataFile: '10books.js'
                }
            ]
        }
    ],

    // Grading system
    gradingSystem: {
        'A1': { min: 100, max: 100, message: 'Outstanding! Perfect mastery of the material. You have demonstrated exceptional understanding and retention.' },
        'A': { min: 90, max: 99, message: 'Excellent work! You have shown superior comprehension and excellent retention of key concepts.' },
        'B': { min: 75, max: 89, message: 'Good job! You have a solid understanding of the material with good retention of important points.' },
        'C': { min: 60, max: 74, message: 'Satisfactory performance. You grasp the basic concepts but could benefit from further review.' },
        'D': { min: 40, max: 59, message: 'Below average. Consider reviewing the material again to strengthen your understanding.' },
        'E': { min: 0, max: 39, message: 'Needs improvement. We recommend re-reading the book and retaking the quiz to enhance your learning.' }
    },

    // User data template
    userTemplate: {
        fullName: '',
        designation: '',
        teamDepartment: '',
        baseCity: '',
        registrationDate: '',
        email: '',
        cellNumber: '',
        username: '',
        password: '',
        registrationComplete: false
    },

    // Quiz session template
    quizSessionTemplate: {
        bookId: '',
        bookTitle: '',
        userName: '',
        startTime: null,
        endTime: null,
        readingTime: '',
        quizTime: '',
        questions: [],
        answers: [],
        score: 0,
        grade: '',
        totalQuestions: 20,
        pointsPerQuestion: 5
    }
};

// Sample book data structure for Mindset book
window.BookData_Mindset = {
    id: 'mindset-main',
    title: 'Mindset: The New Psychology of Success',
    author: 'Carol S. Dweck',
    
    // 10 slides with 200+ words each
    slides: [
        {
            id: 1,
            title: 'The Power of Mindset',
            content: `The concept of mindset is fundamentally about beliefs—specifically, beliefs about the nature of human abilities and intelligence. Carol Dweck's groundbreaking research reveals that our core beliefs about our capabilities create entirely different psychological worlds, leading to dramatically different outcomes in life, learning, and relationships.

            There are two primary mindsets: the fixed mindset and the growth mindset. In a fixed mindset, people believe their basic qualities, like intelligence or talent, are simply fixed traits. They spend their time documenting their intelligence or talent instead of developing them. They also believe that talent alone creates success—without effort.

            In contrast, the growth mindset is based on the belief that your basic qualities are things you can cultivate through your efforts, strategies, and help from others. Although people may differ in every which way—in their initial talents and aptitudes, interests, or temperaments—everyone can change and grow through application and experience.

            Real-life example: Consider two students facing a challenging math problem. The fixed mindset student thinks, "I'm just not a math person," and gives up quickly. The growth mindset student thinks, "I haven't figured this out yet," and continues working, viewing the struggle as a path to mastery. This fundamental difference in perspective shapes their entire learning journey and ultimate success.`
        },
        {
            id: 2,
            title: 'The Fixed Mindset Trap',
            content: `The fixed mindset creates an urgency to prove yourself over and over. If you have only a certain amount of intelligence, a certain personality, and a certain moral character—well, then you better prove that you have a healthy dose of them. It simply wouldn't do to look deficient in these most basic characteristics.

            People in a fixed mindset worry constantly about how they'll be judged. Every situation calls for a confirmation of their intelligence, personality, or character. Every situation is evaluated: Will I succeed or fail? Will I look smart or dumb? Will I be accepted or rejected? Will I feel like a winner or a loser?

            This mindset makes failure particularly devastating because it's seen as a direct measure of your competence and worth. When people with a fixed mindset fail at something, they often conclude that they lack the basic ability and will never be good at it. This leads to a pattern of avoidance, where they shy away from challenges that might expose their limitations.

            Real-life example: A talented musician with a fixed mindset might avoid performing in front of others or trying new musical styles because they fear making mistakes that would reveal they're not as naturally gifted as they appear. This self-protective behavior actually limits their growth and prevents them from reaching their full potential. They become prisoners of their own need to appear perfect.`
        },
        {
            id: 3,
            title: 'The Growth Mindset Advantage',
            content: `The growth mindset is based on the belief that your basic qualities are things you can cultivate through your efforts. Yes, people differ greatly—in aptitude, talents, interests, or temperaments—but everyone can change and grow through application and experience. This creates a passion for learning rather than a hunger for approval.

            In the growth mindset, challenges are exciting rather than threatening. They represent opportunities to learn something new. When people with a growth mindset try hard, stretch themselves, and expand their abilities, they're doing what they love—growing. When they fail, they experience disappointment but not devastation, because failure doesn't define them—it informs them.

            The growth mindset allows people to thrive during some of the most challenging times in their lives. It helps them see beyond their current limitations and work toward their potential. This mindset creates resilience and a love of learning that is essential for great accomplishment.

            Real-life example: Michael Jordan was cut from his high school basketball team, but instead of accepting this as proof he wasn't good enough, he used it as motivation to improve. He practiced relentlessly, viewing each failure as a stepping stone to success. His growth mindset transformed initial rejection into legendary achievement. As he famously said, "I've failed over and over and over again in my life. And that is why I succeed."`
        },
        {
            id: 4,
            title: 'The Science Behind Mindset',
            content: `Decades of research have revealed that the brain is much more malleable than previously thought. Neuroplasticity—the brain's ability to reorganize itself by forming new neural connections throughout life—provides the scientific foundation for the growth mindset. Every time we learn something new or practice a skill, our brain literally changes and grows.

            Studies show that when people learn about the malleable nature of the brain, their motivation and achievement increase significantly. Students who were taught that intelligence is malleable showed improved academic performance, while those who weren't taught this concept showed declining grades over the same period.

            The research also reveals that praising intelligence or talent can actually harm motivation and performance. When children are praised for being smart, they begin to fear challenges that might reveal they're not as smart as people think. However, when praised for their effort, strategy, and process, they seek out challenges and show greater resilience.

            Real-life example: In a study, students struggling with math were divided into two groups. One group learned study skills only, while the other learned study skills plus information about how the brain grows with learning. The second group showed significant improvement in math grades, while the first group continued to struggle. Understanding that their brains could grow stronger made all the difference in their performance and motivation.`
        },
        {
            id: 5,
            title: 'Mindset in Education and Parenting',
            content: `The mindset we communicate to children profoundly shapes their relationship with learning and their willingness to take on challenges. When we praise children for their intelligence ("You're so smart!"), we inadvertently encourage a fixed mindset. They begin to believe their worth is tied to being smart, making them less likely to take on difficult tasks that might reveal limitations.

            Effective praise focuses on the process—effort, strategy, focus, perseverance, and improvement. This type of praise encourages children to embrace challenges, persist through difficulties, and see failures as opportunities to learn. It helps them develop resilience and a love of learning that will serve them throughout their lives.

            Parents and teachers can also model a growth mindset by sharing their own learning experiences, admitting when they don't know something, and showing excitement about the opportunity to learn. When adults demonstrate that learning is ongoing and that mistakes are valuable, children internalize these attitudes.

            Real-life example: When a child struggles with reading, a growth mindset approach would be: "Reading is challenging right now, but with practice and the right strategies, your brain will get stronger at it. Let's figure out what methods work best for you." This approach maintains the child's motivation and encourages persistence, unlike saying "Don't worry, not everyone is a natural reader," which suggests abilities are fixed and unchangeable.`
        },
        {
            id: 6,
            title: 'Mindset in Business and Leadership',
            content: `In the business world, mindset determines how leaders respond to setbacks, how they develop their teams, and how they approach innovation and change. Leaders with a growth mindset create cultures of learning where employees feel safe to take risks, make mistakes, and grow from them. They see talent as something to be developed rather than simply identified and rewarded.

            Fixed mindset leaders often surround themselves with people who make them look good and avoid those who might challenge their ideas. They may take credit for successes and blame others for failures. This creates toxic environments where innovation is stifled and people are afraid to speak up or take initiative.

            Growth mindset leaders, on the other hand, seek out people who challenge them and help them grow. They create psychological safety where team members can voice dissenting opinions, propose new ideas, and admit when they've made mistakes. These leaders understand that the organization's success depends on everyone's ability to learn and adapt.

            Real-life example: When Reed Hastings, CEO of Netflix, made the decision to split the DVD and streaming services in 2011, it was met with massive customer backlash and the stock price plummeted. Instead of stubbornly defending the decision or blaming others, he admitted the mistake, listened to feedback, and adjusted the strategy. This growth mindset approach helped Netflix recover and ultimately thrive in the streaming era.`
        },
        {
            id: 7,
            title: 'Overcoming Fixed Mindset Triggers',
            content: `Everyone has both mindsets within them, and certain situations can trigger our fixed mindset responses. Common triggers include facing challenges that expose our limitations, receiving criticism, encountering setbacks, or seeing others succeed where we've struggled. Recognizing these triggers is the first step in managing them effectively.

            When we notice fixed mindset thoughts arising ("I'm not good at this," "I'll never figure this out," "They're just naturally better than me"), we can consciously shift to growth mindset thinking. This involves reframing the situation, focusing on learning opportunities, and remembering that abilities can be developed through effort and strategy.

            The key is not to eliminate fixed mindset thoughts entirely—they're natural human responses—but to recognize them and choose growth mindset responses instead. This process requires self-awareness, patience, and practice. Over time, growth mindset responses become more automatic and natural.

            Real-life example: A professional giving a presentation might think, "I'm terrible at public speaking" after stumbling over words. A growth mindset reframe would be: "Public speaking is a skill I'm still developing. This experience is giving me valuable information about what I need to practice. I can improve with preparation and experience." This shift in thinking transforms a potentially defeating experience into a learning opportunity.`
        },
        {
            id: 8,
            title: 'The Power of "Yet"',
            content: `One of the simplest yet most powerful tools for developing a growth mindset is the word "yet." Adding "yet" to statements about limitations transforms them from permanent declarations to temporary conditions. "I can't do this" becomes "I can't do this yet." "I don't understand" becomes "I don't understand yet."

            This small linguistic change has profound psychological effects. It acknowledges current limitations while maintaining the possibility of future growth. It shifts focus from what you can't do to what you're working toward. It transforms frustration into motivation and dead ends into pathways.

            The "yet" mindset is particularly powerful in educational settings. When students say they're not good at math, science, or writing, adding "yet" helps them see these as temporary states rather than permanent labels. It encourages continued effort and maintains hope for improvement.

            Real-life example: A coding bootcamp student struggling with programming concepts might say, "I'm not a programmer." With the growth mindset, this becomes "I'm not a programmer yet." This simple addition changes everything—suddenly, the student is someone who is becoming a programmer rather than someone who lacks programming ability. It maintains possibility and encourages persistence through the inevitable challenges of learning to code.`
        },
        {
            id: 9,
            title: 'Mindset and Relationships',
            content: `Mindset profoundly affects our relationships, both personal and professional. In a fixed mindset, people believe that relationship qualities—like compatibility, trustworthiness, or the ability to communicate—are simply fixed traits. If problems arise, they're seen as signs of fundamental incompatibility rather than challenges to work through together.

            A growth mindset approach to relationships focuses on development and learning together. Conflicts become opportunities to understand each other better and develop stronger communication skills. Challenges are seen as normal parts of any relationship that can be worked through with effort, understanding, and patience.

            People with growth mindsets are more likely to give their partners the benefit of the doubt, work through difficulties constructively, and maintain optimism about the relationship's potential. They understand that all relationships require ongoing effort and that people can change and grow together over time.

            Real-life example: When a couple has a major disagreement, a fixed mindset approach might be: "We're just too different; this will never work." A growth mindset approach would be: "This is a difficult issue, but we can learn to communicate better about it. Let's figure out how to understand each other's perspectives and find a solution that works for both of us." This approach maintains the relationship's potential while acknowledging that work is needed.`
        },
        {
            id: 10,
            title: 'Cultivating Your Growth Mindset',
            content: `Developing a growth mindset is itself a growth process that requires patience, practice, and persistence. It begins with awareness—recognizing when you're operating from a fixed mindset and consciously choosing growth mindset responses instead. This takes time and doesn't happen overnight.

            Practical strategies include embracing challenges as opportunities to learn, viewing effort as the path to mastery, learning from criticism and setbacks, and finding inspiration in others' success rather than feeling threatened by it. Celebrate the process of learning, not just the outcomes, and remember that everyone's journey looks different.

            Surround yourself with people who support your growth and model growth mindset behaviors. Seek out feedback, take on challenges that stretch your abilities, and maintain curiosity about what you don't yet know. Remember that the goal isn't perfection but continuous improvement and learning.

            Real-life example: A professional musician wanting to develop a growth mindset might start by seeking out challenging pieces that push their technical abilities, rather than only playing familiar songs. They would welcome feedback from teachers and peers, viewing it as valuable information for improvement rather than criticism of their talent. When they make mistakes during practice or performance, they would see these as learning opportunities rather than evidence of inadequacy, asking "What can this teach me?" instead of "Why am I not good enough?"

            The journey toward a growth mindset is ongoing, but it's one of the most valuable investments you can make in your personal and professional development.`
        }
    ],

    // 20 quiz questions with 4 options each, correct answers distributed across A, B, C, D
    quizQuestions: [
        {
            id: 1,
            question: "According to Carol Dweck, what is the fundamental difference between a fixed mindset and a growth mindset?",
            options: {
                A: "Fixed mindset believes abilities can be developed, growth mindset believes they cannot",
                B: "Fixed mindset believes abilities are static traits, growth mindset believes they can be developed",
                C: "Fixed mindset focuses on effort, growth mindset focuses on talent",
                D: "There is no significant difference between the two mindsets"
            },
            correctAnswer: "B"
        },
        {
            id: 2,
            question: "What is the primary focus of people with a fixed mindset when facing challenges?",
            options: {
                A: "Learning and improvement",
                B: "Seeking help from others",
                C: "Proving their existing abilities and avoiding failure",
                D: "Developing better strategies"
            },
            correctAnswer: "C"
        },
        {
            id: 3,
            question: "How do people with a growth mindset typically view failure?",
            options: {
                A: "As a learning opportunity and source of information",
                B: "As proof of their inadequacy",
                C: "As something to be avoided at all costs",
                D: "As a sign they should quit and try something else"
            },
            correctAnswer: "A"
        },
        {
            id: 4,
            question: "What does neuroplasticity research tell us about the brain?",
            options: {
                A: "The brain stops developing after childhood",
                B: "Intelligence is completely fixed at birth",
                C: "The brain remains relatively unchanged throughout life",
                D: "The brain can reorganize and form new connections throughout life"
            },
            correctAnswer: "D"
        },
        {
            id: 5,
            question: "According to Dweck's research, what type of praise is most effective for children?",
            options: {
                A: "Praising their intelligence and natural talent",
                B: "Praising their effort, strategy, and process",
                C: "Praising their achievements and outcomes",
                D: "Avoiding praise altogether"
            },
            correctAnswer: "B"
        },
        {
            id: 6,
            question: "What happens when children are consistently praised for being 'smart'?",
            options: {
                A: "They become more confident and take on bigger challenges",
                B: "They develop better study habits",
                C: "They become afraid of challenges that might reveal limitations",
                D: "Their academic performance consistently improves"
            },
            correctAnswer: "C"
        },
        {
            id: 7,
            question: "How do growth mindset leaders typically handle team failures?",
            options: {
                A: "They blame team members for poor performance",
                B: "They avoid acknowledging failures to maintain morale",
                C: "They use failures as learning opportunities for the entire team",
                D: "They immediately replace underperforming team members"
            },
            correctAnswer: "C"
        },
        {
            id: 8,
            question: "What is a key characteristic of fixed mindset leaders?",
            options: {
                A: "They constantly seek feedback and coaching",
                B: "They surround themselves with people who challenge their ideas",
                C: "They take responsibility for all team outcomes",
                D: "They often take credit for successes and blame others for failures"
            },
            correctAnswer: "D"
        },
        {
            id: 9,
            question: "What is the significance of adding 'yet' to statements about limitations?",
            options: {
                A: "It makes people feel better about their failures",
                B: "It transforms permanent-sounding limitations into temporary conditions",
                C: "It helps people avoid taking responsibility",
                D: "It has no real psychological impact"
            },
            correctAnswer: "B"
        },
        {
            id: 10,
            question: "How does a growth mindset affect relationships?",
            options: {
                A: "It makes people more demanding of their partners",
                B: "It has no impact on relationship quality",
                C: "It leads people to view conflicts as opportunities to grow together",
                D: "It makes people give up on relationships more easily"
            },
            correctAnswer: "C"
        },
        {
            id: 11,
            question: "What is the most common trigger for fixed mindset responses?",
            options: {
                A: "Receiving positive feedback",
                B: "Working in familiar territory",
                C: "Facing challenges that expose limitations or receiving criticism",
                D: "Having too much free time"
            },
            correctAnswer: "C"
        },
        {
            id: 12,
            question: "According to the growth mindset philosophy, what is the relationship between effort and ability?",
            options: {
                A: "Effort is only needed when you lack natural ability",
                B: "Effort is the path through which ability develops",
                C: "Effort and ability are completely unrelated",
                D: "Too much effort indicates lack of talent"
            },
            correctAnswer: "B"
        },
        {
            id: 13,
            question: "How should parents and teachers respond when children struggle with learning?",
            options: {
                A: "Tell them not to worry because not everyone is naturally good at everything",
                B: "Focus on their natural talents instead",
                C: "Emphasize that struggle is part of learning and their brain is growing stronger",
                D: "Lower expectations to protect their self-esteem"
            },
            correctAnswer: "C"
        },
        {
            id: 14,
            question: "What did Michael Jordan's story illustrate about mindset?",
            options: {
                A: "Natural talent is the most important factor in success",
                B: "Being cut from a team proves you're not meant for that sport",
                C: "Initial setbacks can be transformed into motivation through a growth mindset",
                D: "Some people are just born to be great athletes"
            },
            correctAnswer: "C"
        },
        {
            id: 15,
            question: "What happens in organizations with growth mindset cultures?",
            options: {
                A: "Employees become complacent and less motivated",
                B: "Competition becomes destructive and harmful",
                C: "Innovation is stifled due to too much focus on learning",
                D: "Employees feel safe to take risks, make mistakes, and learn"
            },
            correctAnswer: "D"
        },
        {
            id: 16,
            question: "How do fixed and growth mindsets differ in their view of talent?",
            options: {
                A: "Fixed mindset sees talent as something to develop, growth mindset sees it as innate",
                B: "Both mindsets view talent the same way",
                C: "Fixed mindset sees talent as innate and fixed, growth mindset sees it as developable",
                D: "Neither mindset considers talent important"
            },
            correctAnswer: "C"
        },
        {
            id: 17,
            question: "What is the key to developing a growth mindset?",
            options: {
                A: "Avoiding all challenges and difficulties",
                B: "Focusing only on areas where you're naturally talented",
                C: "Awareness of mindset triggers and consciously choosing growth responses",
                D: "Pretending that you don't have any limitations"
            },
            correctAnswer: "C"
        },
        {
            id: 18,
            question: "In relationships, how does a fixed mindset typically interpret problems?",
            options: {
                A: "As opportunities to grow closer together",
                B: "As normal challenges that all couples face",
                C: "As signs of fundamental incompatibility",
                D: "As temporary issues that will resolve themselves"
            },
            correctAnswer: "C"
        },
        {
            id: 19,
            question: "What was the result when students learned about brain plasticity in the math study?",
            options: {
                A: "Their grades showed significant improvement",
                B: "Their grades remained the same",
                C: "Their grades actually declined",
                D: "They became overconfident and stopped studying"
            },
            correctAnswer: "A"
        },
        {
            id: 20,
            question: "What is the ultimate goal of cultivating a growth mindset?",
            options: {
                A: "To become perfect at everything you attempt",
                B: "To never experience failure or setbacks",
                C: "To achieve continuous improvement and maintain love of learning",
                D: "To outperform everyone else in your field"
            },
            correctAnswer: "C"
        }
    ],

    // Extended question bank (500 questions) - showing first 50 as example
    extendedQuestionBank: [
        // Basic Mindset Concepts (Questions 1-50)
        {
            id: 101,
            question: "What psychological phenomenon explains why some people thrive on challenges while others avoid them?",
            options: {
                A: "Their basic mindset about the nature of abilities",
                B: "Their genetic predisposition to risk-taking",
                C: "Their educational background",
                D: "Their socioeconomic status"
            },
            correctAnswer: "A"
        },
        {
            id: 102,
            question: "In Dweck's research, what percentage of people showed improved performance after learning about brain plasticity?",
            options: {
                A: "About 25% showed improvement",
                B: "Approximately 50% showed improvement", 
                C: "Nearly 75% showed improvement",
                D: "The majority of students showed significant improvement"
            },
            correctAnswer: "D"
        },
        // Continue with more questions...
        // (In a real implementation, you would include all 500 questions)
    ]
};

// Query statement for updating book data
const BOOK_UPDATE_QUERY = `
To update or add new book data to the system:

1. Create a new book data file (e.g., 11books.js, 12books.js, etc.)
2. Follow the structure of window.BookData_[BookName] = { ... }
3. Include the following sections:
   - id: unique identifier
   - title: book title
   - author: author name
   - slides: array of 10 slides with id, title, and content (200+ words each)
   - quizQuestions: array of 20 questions with 4 options each
   - extendedQuestionBank: array of 500+ additional questions

4. Update the bookSections array in data.js to include the new book:
   {
     id: 'unique-book-id',
     title: 'Book Title', 
     description: 'Book description',
     thumbnail: 'Xa.png', // where X is the next number
     dataFile: 'Xbooks.js' // corresponding data file
   }

5. Add the book thumbnail image (Xa.png) to the project root folder

6. The system will automatically load and integrate the new book data

Example structure for new book data file:
window.BookData_NewBook = {
    id: 'new-book-id',
    title: 'New Book Title',
    author: 'Author Name',
    slides: [
        {
            id: 1,
            title: 'Chapter 1 Title',
            content: 'Detailed content with real-life examples (200+ words)...'
        },
        // ... 9 more slides
    ],
    quizQuestions: [
        {
            id: 1,
            question: 'Question text?',
            options: {
                A: 'Option A',
                B: 'Option B', 
                C: 'Option C',
                D: 'Option D'
            },
            correctAnswer: 'B' // Distribute answers across A, B, C, D
        },
        // ... 19 more questions
    ],
    extendedQuestionBank: [
        // 500+ additional questions following same format
    ]
};
`;

// Google Sheets integration functions
window.GoogleSheetsAPI = {
    async saveUserData(userData) {
        try {
            const response = await fetch(window.LMSData.googleSheets.url, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    action: 'saveUser',
                    data: userData
                })
            });
            return await response.json();
        } catch (error) {
            console.error('Error saving user data:', error);
            return { success: false, error: error.message };
        }
    },

    async saveQuizResults(quizResults) {
        try {
            const response = await fetch(window.LMSData.googleSheets.url, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    action: 'saveQuizResults',
                    data: quizResults
                })
            });
            return await response.json();
        } catch (error) {
            console.error('Error saving quiz results:', error);
            return { success: false, error: error.message };
        }
    }
};