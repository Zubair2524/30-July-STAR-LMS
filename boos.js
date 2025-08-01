// STAR Learning Management System - Books Data
// Complete book content with slides and quiz questions

const booksData = {
    'think-grow-rich': {
        title: 'Think and Grow Rich',
        author: 'Napoleon Hill',
        slides: [
            {
                title: 'Introduction to Think and Grow Rich',
                content: `
                    <h2><strong>Think and Grow Rich</strong></h2>
                    <p>Napoleon Hill's timeless classic reveals the secret to financial success and personal achievement. Based on his study of over 500 successful individuals, this book presents the 13 principles that can transform your life.</p>
                    <p>This book isn't just about money - it's about developing the mindset and habits that lead to success in any area of life.</p>
                `
            },
            {
                title: 'The Power of Desire',
                content: `
                    <h2><strong>The Starting Point of All Achievement: Desire</strong></h2>
                    <p>Every great achievement begins with a burning desire. This isn't just wishing or hoping - it's an obsessive, consuming desire that drives you to take action.</p>
                    <ul>
                        <li>Define exactly what you want</li>
                        <li>Determine what you're willing to give in return</li>
                        <li>Set a definite date for achievement</li>
                        <li>Create a definite plan and begin immediately</li>
                    </ul>
                `
            },
            {
                title: 'Example: Andrew Carnegie\'s Burning Desire',
                content: `
                    <div class="example-badge">Real-Life Example</div>
                    <h2><strong>Andrew Carnegie's Steel Empire</strong></h2>
                    <p>Andrew Carnegie, once a poor Scottish immigrant, had a burning desire to become the richest man in America. His desire was so intense that he:</p>
                    <ul>
                        <li>Worked 12-hour days in a cotton factory as a child</li>
                        <li>Studied successful businessmen obsessively</li>
                        <li>Reinvested every penny back into his business</li>
                        <li>Eventually built the largest steel company in the world</li>
                    </ul>
                    <p>His burning desire transformed him from a $1.20-per-week factory worker to a multi-millionaire philanthropist.</p>
                `
            },
            {
                title: 'Faith: The Second Step',
                content: `
                    <h2><strong>Faith: Visualization and Belief</strong></h2>
                    <p>Faith is the "eternal elixir" that gives life, power, and action to the impulse of thought. It's the starting point of all accumulation of riches.</p>
                    <p><strong>Key principles of faith:</strong></p>
                    <ul>
                        <li>Repetition of affirmations</li>
                        <li>Visualization of your goals</li>
                        <li>Acting as if you've already achieved success</li>
                        <li>Surrounding yourself with positive influences</li>
                    </ul>
                `
            },
            {
                title: 'Auto-Suggestion: The Medium for Faith',
                content: `
                    <h2><strong>Auto-Suggestion: Programming Your Mind</strong></h2>
                    <p>Auto-suggestion is the agency of communication between the conscious and subconscious mind. It's how you can influence your subconscious mind with your conscious thoughts.</p>
                    <p><strong>How to use auto-suggestion:</strong></p>
                    <ul>
                        <li>Read your written statement of desire aloud twice daily</li>
                        <li>See and feel yourself already in possession of your goal</li>
                        <li>Repeat with emotion and conviction</li>
                        <li>Continue until your subconscious accepts it as fact</li>
                    </ul>
                `
            },
            {
                title: 'Specialized Knowledge',
                content: `
                    <h2><strong>Specialized Knowledge: Personal Experiences or Observations</strong></h2>
                    <p>General knowledge is of little use in accumulating money. You need specialized knowledge in your chosen field.</p>
                    <p><strong>Sources of specialized knowledge:</strong></p>
                    <ul>
                        <li>Your own experience and education</li>
                        <li>Experience and education of others</li>
                        <li>Colleges and universities</li>
                        <li>Public libraries</li>
                        <li>Special training courses</li>
                    </ul>
                `
            },
            {
                title: 'Example: Henry Ford\'s V-8 Engine',
                content: `
                    <div class="example-badge">Real-Life Example</div>
                    <h2><strong>Henry Ford's "Impossible" V-8 Engine</strong></h2>
                    <p>When Henry Ford decided to create the V-8 engine, his engineers told him it was impossible. But Ford had specialized knowledge about what customers wanted and the determination to achieve it:</p>
                    <ul>
                        <li>He insisted on the design despite expert opposition</li>
                        <li>He assembled a team of specialists</li>
                        <li>He refused to accept "impossible" as an answer</li>
                        <li>After months of "failure," his team finally succeeded</li>
                    </ul>
                    <p>The V-8 engine became one of Ford's most successful innovations, proving that specialized knowledge combined with persistence can overcome any obstacle.</p>
                `
            },
            {
                title: 'Imagination: The Workshop of the Mind',
                content: `
                    <h2><strong>Imagination: The Workshop of the Mind</strong></h2>
                    <p>Through imagination, you can combine old concepts, ideas, or plans into new combinations. There are two forms of imagination:</p>
                    <p><strong>Synthetic Imagination:</strong> Arranging old concepts into new combinations</p>
                    <p><strong>Creative Imagination:</strong> Creating something from nothing through hunches and inspiration</p>
                    <ul>
                        <li>Use your imagination to see your goals as already achieved</li>
                        <li>Create detailed mental pictures of your success</li>
                        <li>Combine existing ideas in new ways</li>
                    </ul>
                `
            },
            {
                title: 'Organized Planning',
                content: `
                    <h2><strong>Organized Planning: The Crystallization of Desire</strong></h2>
                    <p>You must have a practical plan to transform your desire into reality. No one ever accumulates money without a definite plan.</p>
                    <p><strong>Steps to create your plan:</strong></p>
                    <ul>
                        <li>Ally yourself with others whose help you need</li>
                        <li>Decide what advantages you can offer in return</li>
                        <li>Arrange regular meetings with your group</li>
                        <li>Maintain perfect harmony among all members</li>
                    </ul>
                `
            },
            {
                title: 'Example: Thomas Edison\'s Mastermind Laboratory',
                content: `
                    <div class="example-badge">Real-Life Example</div>
                    <h2><strong>Edison's Mastermind Laboratory</strong></h2>
                    <p>Thomas Edison created one of history's most successful mastermind groups at his Menlo Park laboratory:</p>
                    <ul>
                        <li>He assembled brilliant minds from different fields</li>
                        <li>Created an environment of collaboration and innovation</li>
                        <li>Encouraged wild ideas and experimentation</li>
                        <li>Produced over 1,000 patents through organized planning</li>
                    </ul>
                    <p>Edison's organized approach to innovation revolutionized the world and made him incredibly wealthy. His laboratory became known as the "invention factory."</p>
                `
            },
            {
                title: 'Decision and Persistence',
                content: `
                    <h2><strong>Decision: The Mastery of Procrastination</strong></h2>
                    <p>Successful people make decisions quickly and change them slowly. Unsuccessful people make decisions slowly and change them quickly.</p>
                    <p><strong>Persistence: The Sustained Effort Necessary</strong></p>
                    <ul>
                        <li>Definiteness of purpose</li>
                        <li>Desire backed by faith</li>
                        <li>Definite plans consistently applied</li>
                        <li>Closed mind to negative influences</li>
                    </ul>
                `
            },
            {
                title: 'The Mastermind Principle',
                content: `
                    <h2><strong>The Master Mind: The Driving Force</strong></h2>
                    <p>The mastermind consists of two or more people working in perfect harmony toward a common goal. This creates a "third mind" more powerful than any individual mind.</p>
                    <p><strong>Benefits of the mastermind:</strong></p>
                    <ul>
                        <li>Economic advantages through cooperation</li>
                        <li>Psychic benefits from collective thinking</li>
                        <li>Accountability and motivation</li>
                        <li>Access to specialized knowledge and connections</li>
                    </ul>
                `
            },
            {
                title: 'The Subconscious Mind and Success',
                content: `
                    <h2><strong>The Subconscious Mind: The Connecting Link</strong></h2>
                    <p>Your subconscious mind works continuously, influencing your thoughts and actions. You can voluntarily plant in your subconscious mind any plan, thought, or purpose you wish to transform into reality.</p>
                    <p><strong>The Six Basic Fears to Overcome:</strong></p>
                    <ul>
                        <li>Fear of poverty</li>
                        <li>Fear of criticism</li>
                        <li>Fear of ill health</li>
                        <li>Fear of loss of love</li>
                        <li>Fear of old age</li>
                        <li>Fear of death</li>
                    </ul>
                `
            }
        ],
        quiz: [
            {
                question: "According to Napoleon Hill, what is the starting point of all achievement?",
                options: ["Hard work", "Burning desire", "Good luck", "Education"],
                correct: 1
            },
            {
                question: "What are the two forms of imagination mentioned in the book?",
                options: ["Creative and Destructive", "Synthetic and Creative", "Positive and Negative", "Active and Passive"],
                correct: 1
            },
            {
                question: "How many people studied by Napoleon Hill contributed to the principles in this book?",
                options: ["Over 100", "Over 250", "Over 500", "Over 1000"],
                correct: 2
            },
            {
                question: "What is the 'eternal elixir' that gives life and power to thoughts?",
                options: ["Persistence", "Faith", "Knowledge", "Planning"],
                correct: 1
            },
            {
                question: "According to the book, successful people make decisions how?",
                options: ["Slowly and carefully", "Quickly and change them slowly", "After consulting others", "Based on emotions"],
                correct: 1
            },
            {
                question: "What is auto-suggestion?",
                options: ["Self-hypnosis", "Communication between conscious and subconscious mind", "Automatic writing", "Subliminal messaging"],
                correct: 1
            },
            {
                question: "How many basic fears does Hill identify that must be overcome?",
                options: ["Four", "Five", "Six", "Seven"],
                correct: 2
            },
            {
                question: "What creates a 'third mind' more powerful than individual minds?",
                options: ["Meditation", "The mastermind principle", "Specialized knowledge", "Organized planning"],
                correct: 1
            },
            {
                question: "In Henry Ford's V-8 engine example, what was the key to success?",
                options: ["Superior technology", "More money", "Refusing to accept 'impossible'", "Better marketing"],
                correct: 2
            },
            {
                question: "What was Thomas Edison's laboratory known as?",
                options: ["The think tank", "The invention factory", "The mastermind center", "The innovation hub"],
                correct: 1
            }
        ]
    },

    '7-habits': {
        title: 'The 7 Habits of Highly Effective People',
        author: 'Stephen R. Covey',
        slides: [
            {
                title: 'Introduction to the 7 Habits',
                content: `
                    <h2><strong>The 7 Habits of Highly Effective People</strong></h2>
                    <p>Stephen Covey's groundbreaking book presents a principle-centered approach to solving personal and professional problems. These habits represent a progression from dependence to independence to interdependence.</p>
                    <p>The 7 habits are based on timeless principles that govern human effectiveness, moving from private victory to public victory.</p>
                `
            },
            {
                title: 'Paradigms and Character Ethics',
                content: `
                    <h2><strong>Inside-Out Approach</strong></h2>
                    <p>True effectiveness comes from character ethics, not personality ethics. We must work from the inside out, starting with our character and paradigms.</p>
                    <p><strong>Key concepts:</strong></p>
                    <ul>
                        <li>Paradigms shape how we see the world</li>
                        <li>Character ethics vs. personality ethics</li>
                        <li>Principles are natural laws that govern effectiveness</li>
                        <li>Private victories precede public victories</li>
                    </ul>
                `
            },
            {
                title: 'Habit 1: Be Proactive',
                content: `
                    <h2><strong>Habit 1: Be Proactive</strong></h2>
                    <p>Proactivity means taking responsibility for your life. You have the freedom to choose your response to any situation.</p>
                    <p><strong>Circle of Concern vs. Circle of Influence:</strong></p>
                    <ul>
                        <li>Focus on what you can influence, not what concerns you</li>
                        <li>Use proactive language: "I can," "I will," "I choose"</li>
                        <li>Take initiative and act on your values</li>
                        <li>Be a transition person in your family or organization</li>
                    </ul>
                `
            },
            {
                title: 'Example: Viktor Frankl\'s Choice',
                content: `
                    <div class="example-badge">Real-Life Example</div>
                    <h2><strong>Viktor Frankl's Ultimate Freedom</strong></h2>
                    <p>Viktor Frankl, a Holocaust survivor and psychiatrist, demonstrated the ultimate proactive response in Nazi concentration camps:</p>
                    <ul>
                        <li>Despite losing everything, he chose his response to suffering</li>
                        <li>He found meaning and purpose even in the worst conditions</li>
                        <li>He helped fellow prisoners maintain hope and dignity</li>
                        <li>His experience led to the development of logotherapy</li>
                    </ul>
                    <p>Frankl proved that even in the most extreme circumstances, we always have the freedom to choose our attitude and response.</p>
                `
            },
            {
                title: 'Habit 2: Begin with the End in Mind',
                content: `
                    <h2><strong>Habit 2: Begin with the End in Mind</strong></h2>
                    <p>All things are created twice: first mentally, then physically. Start with a clear destination in mind.</p>
                    <p><strong>Personal Mission Statement:</strong></p>
                    <ul>
                        <li>Define your personal mission and constitution</li>
                        <li>Identify your center: what drives your life?</li>
                        <li>Write your own eulogy - what do you want to be remembered for?</li>
                        <li>Use visualization to see your goals clearly</li>
                    </ul>
                `
            },
            {
                title: 'Habit 3: Put First Things First',
                content: `
                    <h2><strong>Habit 3: Put First Things First</strong></h2>
                    <p>This is about managing yourself, not time. Focus on important activities, not just urgent ones.</p>
                    <p><strong>Time Management Matrix:</strong></p>
                    <ul>
                        <li><strong>Quadrant I:</strong> Urgent and Important (Crises)</li>
                        <li><strong>Quadrant II:</strong> Not Urgent but Important (Prevention, planning)</li>
                        <li><strong>Quadrant III:</strong> Urgent but Not Important (Interruptions)</li>
                        <li><strong>Quadrant IV:</strong> Not Urgent and Not Important (Time wasters)</li>
                    </ul>
                    <p>Effective people spend most of their time in Quadrant II.</p>
                `
            },
            {
                title: 'Example: Eisenhower\'s Decision Matrix',
                content: `
                    <div class="example-badge">Real-Life Example</div>
                    <h2><strong>President Eisenhower's Priority System</strong></h2>
                    <p>President Dwight D. Eisenhower used a decision matrix that became the foundation for Covey's time management quadrants:</p>
                    <ul>
                        <li>He distinguished between urgent and important tasks</li>
                        <li>Focused on important but not urgent activities (Quadrant II)</li>
                        <li>Delegated urgent but not important tasks</li>
                        <li>This system helped him lead effectively during WWII and as President</li>
                    </ul>
                    <p>Eisenhower's approach allowed him to focus on strategic thinking and long-term planning rather than just reacting to crises.</p>
                `
            },
            {
                title: 'Habit 4: Think Win-Win',
                content: `
                    <h2><strong>Habit 4: Think Win-Win</strong></h2>
                    <p>Win-Win is a frame of mind that seeks mutual benefit in all interactions. It's based on the paradigm that there's plenty for everybody.</p>
                    <p><strong>Six Paradigms of Human Interaction:</strong></p>
                    <ul>
                        <li><strong>Win-Win:</strong> Mutual benefit</li>
                        <li><strong>Win-Lose:</strong> Authoritarian approach</li>
                        <li><strong>Lose-Win:</strong> Accommodating approach</li>
                        <li><strong>Lose-Lose:</strong> Adversarial approach</li>
                        <li><strong>Win:</strong> Independent approach</li>
                        <li><strong>Win-Win or No Deal:</strong> When Win-Win isn't possible</li>
                    </ul>
                `
            },
            {
                title: 'Habit 5: Seek First to Understand, Then to Be Understood',
                content: `
                    <h2><strong>Habit 5: Seek First to Understand, Then to Be Understood</strong></h2>
                    <p>Most people listen with the intent to reply, not to understand. Empathic listening is the key to effective communication.</p>
                    <p><strong>Levels of Listening:</strong></p>
                    <ul>
                        <li>Ignoring</li>
                        <li>Pretending to listen</li>
                        <li>Selective listening</li>
                        <li>Attentive listening</li>
                        <li><strong>Empathic listening</strong> (the highest level)</li>
                    </ul>
                `
            },
            {
                title: 'Example: Carl Rogers\' Therapeutic Approach',
                content: `
                    <div class="example-badge">Real-Life Example</div>
                    <h2><strong>Carl Rogers' Empathic Listening</strong></h2>
                    <p>Psychologist Carl Rogers revolutionized therapy through empathic listening:</p>
                    <ul>
                        <li>He listened to understand, not to judge or advise</li>
                        <li>Reflected back what clients said to show understanding</li>
                        <li>Created a safe space for people to explore their feelings</li>
                        <li>His approach led to breakthrough healing and self-discovery</li>
                    </ul>
                    <p>Rogers proved that when people feel truly understood, they naturally move toward positive change and growth.</p>
                `
            },
            {
                title: 'Habit 6: Synergize',
                content: `
                    <h2><strong>Habit 6: Synergize</strong></h2>
                    <p>Synergy means the whole is greater than the sum of its parts. It's about creative cooperation and teamwork.</p>
                    <p><strong>Keys to Synergy:</strong></p>
                    <ul>
                        <li>Value differences in others</li>
                        <li>Seek the third alternative</li>
                        <li>Create an environment of trust and safety</li>
                        <li>Focus on shared goals and values</li>
                    </ul>
                    <p>When people work together synergistically, they create solutions that are better than what any individual could create alone.</p>
                `
            },
            {
                title: 'Habit 7: Sharpen the Saw',
                content: `
                    <h2><strong>Habit 7: Sharpen the Saw</strong></h2>
                    <p>This is about renewal and continuous improvement in four dimensions of life.</p>
                    <p><strong>Four Dimensions of Renewal:</strong></p>
                    <ul>
                        <li><strong>Physical:</strong> Exercise, nutrition, stress management</li>
                        <li><strong>Mental:</strong> Reading, writing, planning, visualizing</li>
                        <li><strong>Social/Emotional:</strong> Service, empathy, synergy</li>
                        <li><strong>Spiritual:</strong> Value clarification, meditation, prayer</li>
                    </ul>
                `
            },
            {
                title: 'Example: Benjamin Franklin\'s Self-Improvement System',
                content: `
                    <div class="example-badge">Real-Life Example</div>
                    <h2><strong>Benjamin Franklin's 13 Virtues</strong></h2>
                    <p>Benjamin Franklin created a systematic approach to self-improvement that exemplifies "sharpening the saw":</p>
                    <ul>
                        <li>Identified 13 virtues he wanted to develop</li>
                        <li>Focused on one virtue per week for continuous improvement</li>
                        <li>Kept a daily chart to track his progress</li>
                        <li>Repeated the cycle throughout his life</li>
                    </ul>
                    <p>Franklin's commitment to continuous self-renewal helped him become one of history's most accomplished individuals - inventor, diplomat, writer, and founding father.</p>
                `
            }
        ],
        quiz: [
            {
                question: "What is the foundation of the 7 Habits according to Covey?",
                options: ["Personality ethics", "Character ethics", "Social skills", "Time management"],
                correct: 1
            },
            {
                question: "What does 'Be Proactive' mean?",
                options: ["Work harder", "Take responsibility for your life", "Plan ahead", "Be aggressive"],
                correct: 1
            },
            {
                question: "Which quadrant should effective people spend most of their time in?",
                options: ["Quadrant I (Urgent & Important)", "Quadrant II (Important, Not Urgent)", "Quadrant III (Urgent, Not Important)", "Quadrant IV (Not Urgent, Not Important)"],
                correct: 1
            },
            {
                question: "What is the highest level of listening?",
                options: ["Attentive listening", "Selective listening", "Empathic listening", "Active listening"],
                correct: 2
            },
            {
                question: "What does 'Begin with the End in Mind' refer to?",
                options: ["Planning your retirement", "Starting with a clear destination", "Thinking about death", "Setting deadlines"],
                correct: 1
            },
            {
                question: "How many paradigms of human interaction does Covey identify?",
                options: ["Four", "Five", "Six", "Seven"],
                correct: 2
            },
            {
                question: "What are the four dimensions of renewal in 'Sharpen the Saw'?",
                options: ["Mind, Body, Soul, Heart", "Physical, Mental, Social/Emotional, Spiritual", "Work, Family, Health, Finance", "Past, Present, Future, Eternal"],
                correct: 1
            },
            {
                question: "What does synergy mean?",
                options: ["Working together", "The whole is greater than the sum of its parts", "Compromise", "Teamwork"],
                correct: 1
            },
            {
                question: "Who demonstrated the ultimate proactive response in concentration camps?",
                options: ["Stephen Covey", "Viktor Frankl", "Carl Rogers", "Benjamin Franklin"],
                correct: 1
            },
            {
                question: "What system did President Eisenhower use for decision making?",
                options: ["Priority matrix", "Decision tree", "Urgent vs Important matrix", "Cost-benefit analysis"],
                correct: 2
            }
        ]
    },

    'win-friends': {
        title: 'How to Win Friends and Influence People',
        author: 'Dale Carnegie',
        slides: [
            {
                title: 'Introduction to Winning Friends',
                content: `
                    <h2><strong>How to Win Friends and Influence People</strong></h2>
                    <p>Dale Carnegie's timeless classic teaches fundamental techniques for handling people, making friends, and influencing others in positive ways. This book has helped millions of people achieve greater success in their personal and professional relationships.</p>
                    <p>The principles are based on understanding human nature and treating people with genuine respect and appreciation.</p>
                `
            },
            {
                title: 'Fundamental Techniques in Handling People',
                content: `
                    <h2><strong>Part 1: Fundamental Techniques in Handling People</strong></h2>
                    <p><strong>Principle 1:</strong> Don't criticize, condemn, or complain</p>
                    <p><strong>Principle 2:</strong> Give honest and sincere appreciation</p>
                    <p><strong>Principle 3:</strong> Arouse in the other person an eager want</p>
                    <p>These three principles form the foundation of all successful human relations. They recognize that people are driven by their own desires and need to feel important and appreciated.</p>
                `
            },
            {
                title: 'Example: Lincoln\'s Leadership Approach',
                content: `
                    <div class="example-badge">Real-Life Example</div>
                    <h2><strong>Abraham Lincoln's Wisdom</strong></h2>
                    <p>President Lincoln exemplified Carnegie's principles throughout his leadership:</p>
                    <ul>
                        <li>He refused to criticize his generals publicly, even when they failed</li>
                        <li>Instead of condemning the South, he spoke of healing and unity</li>
                        <li>He gave sincere appreciation to his cabinet members and soldiers</li>
                        <li>He appealed to people's higher motives and noble desires</li>
                    </ul>
                    <p>Lincoln's approach helped him navigate the Civil War and preserve the Union through understanding and compassion rather than harsh criticism.</p>
                `
            },
            {
                title: 'Six Ways to Make People Like You',
                content: `
                    <h2><strong>Part 2: Six Ways to Make People Like You</strong></h2>
                    <p><strong>1.</strong> Become genuinely interested in other people</p>
                    <p><strong>2.</strong> Smile</p>
                    <p><strong>3.</strong> Remember that a person's name is the sweetest sound</p>
                    <p><strong>4.</strong> Be a good listener and encourage others to talk about themselves</p>
                    <p><strong>5.</strong> Talk in terms of the other person's interests</p>
                    <p><strong>6.</strong> Make the other person feel important—and do it sincerely</p>
                `
            },
            {
                title: 'Example: Theodore Roosevelt\'s Memory',
                content: `
                    <div class="example-badge">Real-Life Example</div>
                    <h2><strong>Roosevelt's Remarkable Memory for People</strong></h2>
                    <p>Theodore Roosevelt was famous for his ability to make people feel important:</p>
                    <ul>
                        <li>He remembered the names of thousands of people he met</li>
                        <li>He would ask about their families, interests, and concerns</li>
                        <li>He made everyone from janitors to senators feel valued</li>
                        <li>People left conversations with him feeling energized and important</li>
                    </ul>
                    <p>Roosevelt's genuine interest in people and remarkable memory made him one of the most beloved presidents in American history.</p>
                `
            },
            {
                title: 'How to Win People to Your Way of Thinking',
                content: `
                    <h2><strong>Part 3: How to Win People to Your Way of Thinking</strong></h2>
                    <p><strong>Key principles include:</strong></p>
                    <ul>
                        <li>Avoid arguments - you can't win them</li>
                        <li>Show respect for others' opinions</li>
                        <li>If you're wrong, admit it quickly and emphatically</li>
                        <li>Begin in a friendly way</li>
                        <li>Get the other person saying "yes, yes" immediately</li>
                        <li>Let the other person do a great deal of the talking</li>
                        <li>Try honestly to see things from the other person's point of view</li>
                    </ul>
                `
            },
            {
                title: 'Example: Benjamin Franklin\'s Diplomacy',
                content: `
                    <div class="example-badge">Real-Life Example</div>
                    <h2><strong>Franklin's Diplomatic Success</strong></h2>
                    <p>Benjamin Franklin's diplomatic skills during the American Revolution demonstrate these principles:</p>
                    <ul>
                        <li>He avoided direct confrontation with French officials</li>
                        <li>He found common ground and shared interests</li>
                        <li>He let others feel they came up with solutions</li>
                        <li>He admitted his own mistakes and limitations</li>
                    </ul>
                    <p>Franklin's approach helped secure crucial French support for American independence, proving that diplomacy and understanding achieve more than force or argument.</p>
                `
            },
            {
                title: 'Be a Leader: How to Change People',
                content: `
                    <h2><strong>Part 4: Be a Leader - How to Change People Without Giving Offense</strong></h2>
                    <p><strong>Leadership principles:</strong></p>
                    <ul>
                        <li>Begin with praise and honest appreciation</li>
                        <li>Call attention to mistakes indirectly</li>
                        <li>Talk about your own mistakes before criticizing others</li>
                        <li>Ask questions instead of giving direct orders</li>
                        <li>Let the other person save face</li>
                        <li>Praise every improvement</li>
                        <li>Give people a fine reputation to live up to</li>
                    </ul>
                `
            },
            {
                title: 'Example: John D. Rockefeller Jr.\'s Crisis Management',
                content: `
                    <div class="example-badge">Real-Life Example</div>
                    <h2><strong>Rockefeller's Labor Relations Transformation</strong></h2>
                    <p>During a major labor crisis, John D. Rockefeller Jr. applied Carnegie's principles:</p>
                    <ul>
                        <li>Instead of attacking striking workers, he praised their dedication</li>
                        <li>He acknowledged the company's mistakes first</li>
                        <li>He asked for workers' input on solutions</li>
                        <li>He gave workers a reputation for fairness to live up to</li>
                    </ul>
                    <p>This approach transformed a hostile situation into cooperation, leading to one of the first successful labor-management partnerships in American industry.</p>
                `
            },
            {
                title: 'The Power of Appreciation',
                content: `
                    <h2><strong>The Deepest Craving in Human Nature</strong></h2>
                    <p>The deepest principle in human nature is the craving to be appreciated. Most people go through life feeling unappreciated and unimportant.</p>
                    <p><strong>How to give effective appreciation:</strong></p>
                    <ul>
                        <li>Be specific about what you appreciate</li>
                        <li>Make it timely and relevant</li>
                        <li>Focus on the person's character, not just their actions</li>
                        <li>Be sincere - people can detect fake appreciation</li>
                    </ul>
                `
            },
            {
                title: 'Example: Mary Kay Ash\'s Recognition System',
                content: `
                    <div class="example-badge">Real-Life Example</div>
                    <h2><strong>Mary Kay's Pink Cadillac Philosophy</strong></h2>
                    <p>Mary Kay Ash built her cosmetics empire on Carnegie's appreciation principles:</p>
                    <ul>
                        <li>She created elaborate recognition ceremonies for achievements</li>
                        <li>She gave specific, heartfelt praise to her sales force</li>
                        <li>She made people feel like queens and kings</li>
                        <li>Her famous pink Cadillacs became symbols of appreciation</li>
                    </ul>
                    <p>Mary Kay's philosophy of "praise people to success" created one of the most successful direct sales companies in history, with thousands of women achieving financial independence.</p>
                `
            },
            {
                title: 'Handling Complaints and Criticism',
                content: `
                    <h2><strong>The Art of Handling Complaints</strong></h2>
                    <p>When faced with complaints or criticism, Carnegie suggests a specific approach:</p>
                    <ul>
                        <li>Listen without interrupting</li>
                        <li>Show that you understand their point of view</li>
                        <li>Thank them for bringing the issue to your attention</li>
                        <li>Take responsibility where appropriate</li>
                        <li>Focus on solutions, not blame</li>
                        <li>Follow up to ensure satisfaction</li>
                    </ul>
                    <p>This approach transforms potential enemies into friends and allies.</p>
                `
            },
            {
                title: 'Creating Lasting Relationships',
                content: `
                    <h2><strong>Building Relationships That Last</strong></h2>
                    <p>Carnegie's principles create lasting relationships because they're based on genuine care for others:</p>
                    <ul>
                        <li>Focus on giving rather than getting</li>
                        <li>Show genuine interest in others' success</li>
                        <li>Be the kind of friend you'd want to have</li>
                        <li>Remember that everyone wants to feel important</li>
                        <li>Practice these principles consistently, not just when you need something</li>
                    </ul>
                    <p>The goal isn't manipulation, but genuine connection and mutual benefit.</p>
                `
            }
        ],
        quiz: [
            {
                question: "What are the three fundamental techniques in handling people?",
                options: ["Listen, speak, act", "Don't criticize, give appreciation, arouse eager want", "Smile, remember names, be interested", "Be friendly, be helpful, be honest"],
                correct: 1
            },
            {
                question: "According to Carnegie, what is the deepest craving in human nature?",
                options: ["To be loved", "To be appreciated", "To be successful", "To be understood"],
                correct: 1
            },
            {
                question: "What should you do if you're wrong in an argument?",
                options: ["Defend your position", "Change the subject", "Admit it quickly and emphatically", "Find a compromise"],
                correct: 2
            },
            {
                question: "How many ways does Carnegie suggest to make people like you?",
                options: ["Four", "Five", "Six", "Seven"],
                correct: 2
            },
            {
                question: "What did Theodore Roosevelt do that made people feel important?",
                options: ["Gave them money", "Remembered their names and interests", "Offered them jobs", "Wrote them letters"],
                correct: 1
            },
            {
                question: "According to Carnegie, can you win an argument?",
                options: ["Yes, with good facts", "Yes, with emotion", "No, you can't win them", "Only if you're right"],
                correct: 2
            },
            {
                question: "What should you do before criticizing others?",
                options: ["Get angry", "Talk about your own mistakes first", "Find witnesses", "Write it down"],
                correct: 1
            },
            {
                question: "What is the sweetest sound to any person?",
                options: ["Music", "Their own name", "Applause", "Laughter"],
                correct: 1
            },
            {
                question: "How did John D. Rockefeller Jr. handle the labor crisis?",
                options: ["He fired everyone", "He called the police", "He praised workers and acknowledged company mistakes", "He ignored the problem"],
                correct: 2
            },
            {
                question: "What was Mary Kay Ash's philosophy for success?",
                options: ["Work harder than everyone", "Praise people to success", "Compete aggressively", "Focus only on profits"],
                correct: 1
            }
        ]
    },

    'atomic-habits': {
        title: 'Atomic Habits',
        author: 'James Clear',
        slides: [
            {
                title: 'Introduction to Atomic Habits',
                content: `
                    <h2><strong>Atomic Habits: Tiny Changes, Remarkable Results</strong></h2>
                    <p>James Clear's "Atomic Habits" reveals how small changes can make a big difference. An atomic habit is a regular practice that is small and easy to do, but also the source of incredible power.</p>
                    <p>The book shows how habits are the compound interest of self-improvement - small improvements accumulate into remarkable results over time.</p>
                `
            },
            {
                title: 'The Surprising Power of Small Habits',
                content: `
                    <h2><strong>The Power of Tiny Gains</strong></h2>
                    <p>If you get 1% better each day for one year, you'll end up 37 times better. If you get 1% worse each day for one year, you'll decline nearly down to zero.</p>
                    <p><strong>Key insights:</strong></p>
                    <ul>
                        <li>Habits are the compound interest of self-improvement</li>
                        <li>Small changes often appear to make no difference until you cross a critical threshold</li>
                        <li>The most powerful outcomes are delayed</li>
                        <li>Breakthrough moments are often the result of many previous actions</li>
                    </ul>
                `
            },
            {
                title: 'Example: British Cycling\'s Marginal Gains',
                content: `
                    <div class="example-badge">Real-Life Example</div>
                    <h2><strong>The British Cycling Team's Transformation</strong></h2>
                    <p>Dave Brailsford applied the philosophy of marginal gains to transform British cycling:</p>
                    <ul>
                        <li>Improved bike seats for better comfort</li>
                        <li>Rubbed alcohol on tires for better grip</li>
                        <li>Changed pillows and mattresses for better sleep</li>
                        <li>Taught proper hand-washing to avoid illness</li>
                    </ul>
                    <p>These tiny improvements, each just 1% better, accumulated into extraordinary results. British cycling went from winning just one Olympic gold medal in 76 years to dominating the sport.</p>
                `
            },
            {
                title: 'How Your Habits Shape Your Identity',
                content: `
                    <h2><strong>Identity-Based Habits</strong></h2>
                    <p>There are three levels of change: outcomes, processes, and identity. The most effective way to change your habits is to focus on who you wish to become, not what you want to achieve.</p>
                    <p><strong>The two-step process:</strong></p>
                    <ul>
                        <li><strong>Step 1:</strong> Decide the type of person you want to be</li>
                        <li><strong>Step 2:</strong> Prove it to yourself with small wins</li>
                    </ul>
                    <p>Every action is a vote for the type of person you wish to become.</p>
                `
            },
            {
                title: 'The Four Laws of Behavior Change',
                content: `
                    <h2><strong>The Four Laws of Behavior Change</strong></h2>
                    <p>The process of building a habit can be divided into four simple steps: cue, craving, response, and reward.</p>
                    <p><strong>How to Create a Good Habit:</strong></p>
                    <ul>
                        <li><strong>1st Law (Cue):</strong> Make it obvious</li>
                        <li><strong>2nd Law (Craving):</strong> Make it attractive</li>
                        <li><strong>3rd Law (Response):</strong> Make it easy</li>
                        <li><strong>4th Law (Reward):</strong> Make it satisfying</li>
                    </ul>
                `
            },
            {
                title: 'The 1st Law: Make It Obvious',
                content: `
                    <h2><strong>The 1st Law: Make It Obvious</strong></h2>
                    <p>Many of our failures in performance are largely attributable to a lack of self-awareness. Before we can effectively change our habits, we need to be aware of them.</p>
                    <p><strong>Strategies:</strong></p>
                    <ul>
                        <li>Use implementation intentions: "I will [BEHAVIOR] at [TIME] in [LOCATION]"</li>
                        <li>Use habit stacking: "After [CURRENT HABIT], I will [NEW HABIT]"</li>
                        <li>Design your environment to make good habits obvious</li>
                        <li>Create a habits scorecard to become aware of your behavior</li>
                    </ul>
                `
            },
            {
                title: 'Example: Jerry Seinfeld\'s Chain Method',
                content: `
                    <div class="example-badge">Real-Life Example</div>
                    <h2><strong>Jerry Seinfeld's "Don't Break the Chain"</strong></h2>
                    <p>Comedian Jerry Seinfeld used a simple visual cue to maintain his writing habit:</p>
                    <ul>
                        <li>He hung a large calendar on his wall</li>
                        <li>Every day he wrote jokes, he marked an X on that day</li>
                        <li>After a few days, he had a chain of X's</li>
                        <li>His only job was to not break the chain</li>
                    </ul>
                    <p>This visual cue made his habit obvious and created a satisfying reward (marking the X) that motivated him to continue writing daily.</p>
                `
            },
            {
                title: 'The 2nd Law: Make It Attractive',
                content: `
                    <h2><strong>The 2nd Law: Make It Attractive</strong></h2>
                    <p>The more attractive an opportunity is, the more likely it is to become habit-forming. We need to make our habits irresistible.</p>
                    <p><strong>Strategies:</strong></p>
                    <ul>
                        <li>Use temptation bundling: pair an action you want to do with an action you need to do</li>
                        <li>Join a culture where your desired behavior is the normal behavior</li>
                        <li>Create a motivation ritual by doing something you enjoy immediately before a difficult habit</li>
                        <li>Reframe your mindset to highlight the benefits of avoiding bad habits</li>
                    </ul>
                `
            },
            {
                title: 'The 3rd Law: Make It Easy',
                content: `
                    <h2><strong>The 3rd Law: Make It Easy</strong></h2>
                    <p>The most effective form of learning is practice, not planning. Focus on taking action, not being in motion.</p>
                    <p><strong>Key principles:</strong></p>
                    <ul>
                        <li>The Two-Minute Rule: when you start a new habit, it should take less than two minutes</li>
                        <li>Reduce friction for good habits</li>
                        <li>Increase friction for bad habits</li>
                        <li>Use the environment to make future actions easier</li>
                    </ul>
                `
            },
            {
                title: 'Example: Ronan Byrnes\' Gym Habit',
                content: `
                    <div class="example-badge">Real-Life Example</div>
                    <h2><strong>Making Exercise Easier</strong></h2>
                    <p>Ronan Byrnes, a reader of James Clear, transformed his exercise habit by making it easier:</p>
                    <ul>
                        <li>He started by just going to the gym for 5 minutes</li>
                        <li>He wasn't allowed to stay longer than 5 minutes for the first 6 weeks</li>
                        <li>This removed the pressure and made the habit easy to maintain</li>
                        <li>After 6 weeks, going to the gym felt natural and he gradually increased his workout time</li>
                    </ul>
                    <p>By making the habit ridiculously easy to start, he built the identity of someone who exercises regularly.</p>
                `
            },
            {
                title: 'The 4th Law: Make It Satisfying',
                content: `
                    <h2><strong>The 4th Law: Make It Satisfying</strong></h2>
                    <p>We are more likely to repeat a behavior when the experience is satisfying. The human brain prioritizes immediate rewards over delayed rewards.</p>
                    <p><strong>Strategies:</strong></p>
                    <ul>
                        <li>Use reinforcement: give yourself an immediate reward when you complete your habit</li>
                        <li>Make "doing nothing" enjoyable</li>
                        <li>Use a habit tracker to make progress visible</li>
                        <li>Never miss twice - when you miss once, get back on track quickly</li>
                    </ul>
                `
            },
            {
                title: 'Example: Benjamin Franklin\'s Virtue Tracking',
                content: `
                    <div class="example-badge">Real-Life Example</div>
                    <h2><strong>Franklin's 13 Virtues Chart</strong></h2>
                    <p>Benjamin Franklin created one of history's most famous habit tracking systems:</p>
                    <ul>
                        <li>He identified 13 virtues he wanted to develop</li>
                        <li>He created a chart with days of the week and the 13 virtues</li>
                        <li>Each day, he would mark his failures with a dot</li>
                        <li>His goal was to have a clean chart with no dots</li>
                    </ul>
                    <p>This tracking system made his progress visible and satisfying, helping him develop the character traits that made him one of America's most respected founding fathers.</p>
                `
            },
            {
                title: 'Advanced Tactics: How to Go from Good to Great',
                content: `
                    <h2><strong>Advanced Tactics</strong></h2>
                    <p>Once you've mastered the basics, these advanced strategies can help you achieve mastery:</p>
                    <p><strong>The Goldilocks Rule:</strong> Humans experience peak motivation when working on tasks that are right on the edge of their current abilities.</p>
                    <ul>
                        <li>Choose the right level of difficulty</li>
                        <li>Measure and track your progress</li>
                        <li>Review and reflect regularly</li>
                        <li>Focus on systems, not goals</li>
                        <li>Fall in love with the process, not just the outcome</li>
                    </ul>
                `
            }
        ],
        quiz: [
            {
                question: "According to James Clear, if you get 1% better each day for one year, how much better will you be?",
                options: ["3.65 times better", "37 times better", "100 times better", "365 times better"],
                correct: 1
            },
            {
                question: "What are the four stages of the habit loop?",
                options: ["Cue, Craving, Response, Reward", "See, Want, Do, Get", "Trigger, Desire, Action, Satisfaction", "Notice, Want, Act, Enjoy"],
                correct: 0
            },
            {
                question: "What is the Two-Minute Rule?",
                options: ["Exercise for 2 minutes daily", "When starting a new habit, it should take less than 2 minutes", "Wait 2 minutes before breaking a bad habit", "Meditate for 2 minutes"],
                correct: 1
            },
            {
                question: "What are the Four Laws of Behavior Change for creating good habits?",
                options: ["Make it obvious, attractive, easy, satisfying", "Make it clear, fun, simple, rewarding", "Make it visible, desirable, effortless, enjoyable", "Make it apparent, appealing, achievable, gratifying"],
                correct: 0
            },
            {
                question: "What strategy did Jerry Seinfeld use to maintain his writing habit?",
                options: ["Setting daily alarms", "The chain method with X's on a calendar", "Writing in the same place every day", "Rewarding himself after writing"],
                correct: 1
            },
            {
                question: "What is 'habit stacking'?",
                options: ["Doing multiple habits at once", "After [CURRENT HABIT], I will [NEW HABIT]", "Building habits on top of each other", "Combining similar habits together"],
                correct: 1
            },
            {
                question: "What transformation did Dave Brailsford achieve with British cycling?",
                options: ["Won one Olympic medal", "Dominated the sport through marginal gains", "Created new training methods", "Built better bicycles"],
                correct: 1
            },
            {
                question: "What is the most effective way to change habits according to Clear?",
                options: ["Focus on outcomes", "Focus on processes", "Focus on identity", "Focus on motivation"],
                correct: 2
            },
            {
                question: "What did Benjamin Franklin track in his virtue chart?",
                options: ["His successes", "His failures with dots", "His daily activities", "His mood"],
                correct: 1
            },
            {
                question: "What is the Goldilocks Rule?",
                options: ["Everything in moderation", "Peak motivation occurs when tasks are right on the edge of current abilities", "Start small and build up", "Make habits just right for you"],
                correct: 1
            }
        ]
    },

    'power-of-now': {
        title: 'The Power of Now',
        author: 'Eckhart Tolle',
        slides: [
            {
                title: 'Introduction to The Power of Now',
                content: `
                    <h2><strong>The Power of Now: A Guide to Spiritual Enlightenment</strong></h2>
                    <p>Eckhart Tolle's transformative book teaches us to live in the present moment and find peace beyond the constant chatter of our minds. The book reveals how our attachment to the past and anxiety about the future prevents us from experiencing true happiness.</p>
                    <p>The "Now" is the only moment where life exists, where problems can be solved, and where peace can be found.</p>
                `
            },
            {
                title: 'You Are Not Your Mind',
                content: `
                    <h2><strong>The Greatest Obstacle to Enlightenment</strong></h2>
                    <p>The single most vital step on your journey toward enlightenment is learning to disidentify from your mind. You are not your thoughts.</p>
                    <p><strong>Key insights:</strong></p>
                    <ul>
                        <li>The mind is a superb instrument if used rightly, but destructive if used wrongly</li>
                        <li>Most people are possessed by their thoughts</li>
                        <li>The voice in your head is not who you are</li>
                        <li>Observe your thoughts without judgment</li>
                    </ul>
                `
            },
            {
                title: 'Example: Tolle\'s Park Bench Awakening',
                content: `
                    <div class="example-badge">Real-Life Example</div>
                    <h2><strong>Eckhart Tolle's Transformation</strong></h2>
                    <p>Tolle's own awakening demonstrates the power of present-moment awareness:</p>
                    <ul>
                        <li>At 29, he was suicidally depressed and anxious</li>
                        <li>One night, he had the thought "I cannot live with myself any longer"</li>
                        <li>He suddenly realized there were two entities: "I" and "myself"</li>
                        <li>This realization led to a profound awakening and inner peace</li>
                    </ul>
                    <p>For two years after this experience, Tolle sat on park benches in a state of deep bliss, having discovered the peace that exists beyond the mind's constant chatter.</p>
                `
            },
            {
                title: 'Consciousness: The Way Out of Pain',
                content: `
                    <h2><strong>Breaking Free from Psychological Time</strong></h2>
                    <p>All problems are illusions of the mind. In the Now, there are no problems, only situations to be dealt with or accepted.</p>
                    <p><strong>Understanding psychological time:</strong></p>
                    <ul>
                        <li>Clock time is necessary for practical purposes</li>
                        <li>Psychological time is dwelling on past or future</li>
                        <li>The past gives you an identity, the future holds promise of salvation</li>
                        <li>Both are illusions that prevent present-moment awareness</li>
                    </ul>
                `
            },
            {
                title: 'Moving Deeply into the Now',
                content: `
                    <h2><strong>Accessing the Power of Now</strong></h2>
                    <p>The Now is the only point that can take you beyond the limited confines of the mind. It is your only point of access into the timeless and formless realm of Being.</p>
                    <p><strong>Practical techniques:</strong></p>
                    <ul>
                        <li>Focus on your breathing</li>
                        <li>Feel your inner body</li>
                        <li>Listen to sounds around you without labeling</li>
                        <li>Watch your thoughts without getting caught up in them</li>
                    </ul>
                `
            },
            {
                title: 'Example: The Zen Master\'s Tea Ceremony',
                content: `
                    <div class="example-badge">Real-Life Example</div>
                    <h2><strong>The Art of Present-Moment Awareness</strong></h2>
                    <p>A Zen master demonstrates the power of now through a simple tea ceremony:</p>
                    <ul>
                        <li>Every movement is deliberate and mindful</li>
                        <li>Complete attention is given to each step of the process</li>
                        <li>There is no rushing toward the end result</li>
                        <li>The preparation becomes as important as drinking the tea</li>
                    </ul>
                    <p>This practice transforms an ordinary activity into a meditation, showing how any moment can become a gateway to presence and peace.</p>
                `
            },
            {
                title: 'The State of Presence',
                content: `
                    <h2><strong>Being Present in Daily Life</strong></h2>
                    <p>Presence is a state of alert attention in the Now. When you are present, you can sense the aliveness within your body, the peace beneath your thoughts.</p>
                    <p><strong>Cultivating presence:</strong></p>
                    <ul>
                        <li>Bring attention to routine activities</li>
                        <li>Feel your feet touching the ground as you walk</li>
                        <li>Listen completely when others speak</li>
                        <li>Accept what is without mental resistance</li>
                    </ul>
                `
            },
            {
                title: 'Dissolving the Pain-Body',
                content: `
                    <h2><strong>The Pain-Body: Accumulated Emotional Pain</strong></h2>
                    <p>The pain-body is an accumulation of old emotional pain that lives in your energy field. It feeds on negative thinking and emotional drama.</p>
                    <p><strong>Dealing with the pain-body:</strong></p>
                    <ul>
                        <li>Recognize when it becomes active</li>
                        <li>Don't identify with it - observe it</li>
                        <li>Stay present and alert</li>
                        <li>Don't feed it with more negative thinking</li>
                    </ul>
                `
            },
            {
                title: 'Example: The Surgeon\'s Presence',
                content: `
                    <div class="example-badge">Real-Life Example</div>
                    <h2><strong>Life-Saving Presence</strong></h2>
                    <p>A surgeon demonstrates the power of present-moment awareness during critical operations:</p>
                    <ul>
                        <li>Complete focus on the task at hand</li>
                        <li>No mental commentary or worry about outcomes</li>
                        <li>Total absorption in the present moment</li>
                        <li>Access to intuition and precise decision-making</li>
                    </ul>
                    <p>In life-or-death situations, the surgeon naturally enters a state of presence, showing how the Now provides access to our highest capabilities and wisdom.</p>
                `
            },
            {
                title: 'Enlightened Relationships',
                content: `
                    <h2><strong>Love, Joy, and Peace in Relationships</strong></h2>
                    <p>True love is not an emotion - it's a state of being. When you are present, you can love without attachment, without the need to possess or change the other person.</p>
                    <p><strong>Keys to enlightened relationships:</strong></p>
                    <ul>
                        <li>Don't seek yourself in the other person</li>
                        <li>Accept the other person completely as they are</li>
                        <li>Be present rather than lost in mental stories</li>
                        <li>Love the Being behind the personality</li>
                    </ul>
                `
            },
            {
                title: 'Beyond Happiness and Unhappiness',
                content: `
                    <h2><strong>The Peace That Surpasses Understanding</strong></h2>
                    <p>True peace and joy don't depend on external circumstances. They arise from your connection to Being, which is always accessible in the Now.</p>
                    <p><strong>Characteristics of inner peace:</strong></p>
                    <ul>
                        <li>It's not dependent on what happens</li>
                        <li>It's not the opposite of unhappiness</li>
                        <li>It's your natural state when not obscured by mind</li>
                        <li>It's always available in the present moment</li>
                    </ul>
                `
            },
            {
                title: 'Example: A Mother\'s Transformation',
                content: `
                    <div class="example-badge">Real-Life Example</div>
                    <h2><strong>From Anxiety to Peace</strong></h2>
                    <p>A mother discovers the power of now while caring for her sick child:</p>
                    <ul>
                        <li>Initially overwhelmed with worry about the future</li>
                        <li>Learned to focus completely on caring for her child in each moment</li>
                        <li>Found peace by accepting the present situation</li>
                        <li>Discovered that love and care flow naturally from presence</li>
                    </ul>
                    <p>By staying present instead of projecting fearful scenarios, she found the strength and wisdom to provide the best care while maintaining inner peace.</p>
                `
            },
            {
                title: 'The Meaning of Surrender',
                content: `
                    <h2><strong>Surrender: The Gateway to Freedom</strong></h2>
                    <p>Surrender is the simple but profound wisdom of yielding to rather than opposing the flow of life. It's accepting what is without mental resistance.</p>
                    <p><strong>What surrender is and isn't:</strong></p>
                    <ul>
                        <li>Surrender is not passive inaction</li>
                        <li>It's accepting the present moment unconditionally</li>
                        <li>It allows appropriate action to arise naturally</li>
                        <li>It transforms suffering into peace</li>
                        <li>It's the end of the ego's resistance to life</li>
                    </ul>
                    <p>Through surrender, you align yourself with the intelligence of the universe.</p>
                `
            }
        ],
        quiz: [
            {
                question: "According to Eckhart Tolle, what is the greatest obstacle to enlightenment?",
                options: ["Lack of education", "Identification with the mind", "Physical limitations", "Social conditioning"],
                correct: 1
            },
            {
                question: "What is the 'pain-body' according to Tolle?",
                options: ["Physical illness", "Accumulated emotional pain", "Mental disorders", "Spiritual blockages"],
                correct: 1
            },
            {
                question: "What is the difference between clock time and psychological time?",
                options: ["Clock time is faster", "Clock time is practical, psychological time is dwelling on past/future", "There is no difference", "Psychological time is more accurate"],
                correct: 1
            },
            {
                question: "How did Tolle's awakening begin?",
                options: ["Through meditation", "Reading spiritual books", "Realizing 'I' and 'myself' were separate", "Meeting a spiritual teacher"],
                correct: 2
            },
            {
                question: "What does Tolle say about problems?",
                options: ["They must be solved immediately", "They are learning opportunities", "In the Now, there are no problems, only situations", "They are caused by other people"],
                correct: 2
            },
            {
                question: "What is true love according to Tolle?",
                options: ["An emotion", "A state of being", "A chemical reaction", "A social construct"],
                correct: 1
            },
            {
                question: "What should you do when the pain-body becomes active?",
                options: ["Fight it", "Ignore it", "Observe it without identifying with it", "Express it fully"],
                correct: 2
            },
            {
                question: "What is surrender in Tolle's teaching?",
                options: ["Giving up", "Accepting the present moment unconditionally", "Being passive", "Avoiding responsibility"],
                correct: 1
            },
            {
                question: "How long did Tolle sit on park benches after his awakening?",
                options: ["Six months", "One year", "Two years", "Five years"],
                correct: 2
            },
            {
                question: "What is presence according to Tolle?",
                options: ["Being physically present", "A state of alert attention in the Now", "Thinking about the present", "Avoiding the past and future"],
                correct: 1
            }
        ]
    }
};

// Make the data globally available
window.booksData = booksData;