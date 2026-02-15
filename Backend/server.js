 require("dotenv").config();

console.log("MONGO URI:", process.env.MONGO_URI);
 // Simple Express server to handle job matching and chatbot responses
 
const express = require("express");
const cors = require("cors");

const JOBS = require("./jobs");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post("/api/match-jobs", (req, res) => {

  const { name, age, salary, experience, interest } = req.body;

  if (!experience || !interest) {
    return res.status(400).json({
      error: "experience and interest are required"
    });
  }

  const expectedSalary = Number(salary);

  let results = JOBS.filter(job => {

    const fieldMatch = job.field === interest;
    const levelMatch = job.level === experience;

    let salaryMatch = true;

    if (!isNaN(expectedSalary)) {
      salaryMatch =
        expectedSalary >= job.salaryMin &&
        expectedSalary <= job.salaryMax;
    }

    return fieldMatch && levelMatch && salaryMatch;
  });

  // fallback if salary filter removes everything
  if (results.length === 0) {
    results = JOBS.filter(job =>
      job.field === interest &&
      job.level === experience
    );
  }

  res.json({
    user: { name, age, salary, experience, interest },
    results
  });
});

// Simple rule-based chatbot responses
function generateBotResponse(userMessage) {
  const msg = userMessage.toLowerCase();

  // Job related queries
  if (msg.includes('job') || msg.includes('work') || msg.includes('vacancy') || msg.includes('opening')) {
    if (msg.includes('electrical') || msg.includes('electrician')) {
      return "⚡ We have electrical jobs available! Entry-level: ₹25,000-₹35,000/month, Experienced: ₹50,000-₹80,000/month. Check our Jobs section for current openings!";
    }
    if (msg.includes('plumb')) {
      return "🔧 Plumbing jobs available! Entry-level: ₹20,000-₹30,000/month, Experienced: ₹45,000-₹70,000/month. Visit our Jobs section to apply!";
    }
    if (msg.includes('hvac') || msg.includes('ac') || msg.includes('air condition')) {
      return "❄️ HVAC technician roles open! Entry-level: ₹25,000-₹35,000/month, Experienced: ₹55,000-₹90,000/month. Browse Jobs to find the right fit!";
    }
    if (msg.includes('weld')) {
      return "🔥 Welding positions available! Entry-level: ₹22,000-₹32,000/month, Experienced: ₹50,000-₹85,000/month. Check our Jobs section!";
    }
    return "💼 We have jobs in Electrical, Plumbing, HVAC, and Welding fields. Entry-level salaries range from ₹20,000-₹40,000/month, experienced roles go up to ₹1,00,000+/month. Click 'Find Jobs' to explore!";
  }

  // Training related queries
  if (msg.includes('train') || msg.includes('course') || msg.includes('learn') || msg.includes('certif') || msg.includes('skill')) {
    if (msg.includes('electrical') || msg.includes('electrician')) {
      return "⚡ Electrical Training Programs:\n• Basic (2 months) - ₹15,000\n• Advanced (4 months) - ₹25,000\n• Master Certification (6 months) - ₹40,000\nClick 'Training' to enroll!";
    }
    if (msg.includes('plumb')) {
      return "🔧 Plumbing Training Programs:\n• Basic (2 months) - ₹12,000\n• Advanced (4 months) - ₹22,000\n• Master Certification (6 months) - ₹35,000\nClick 'Training' to enroll!";
    }
    if (msg.includes('hvac') || msg.includes('ac')) {
      return "❄️ HVAC Training Programs:\n• Basic (2 months) - ₹18,000\n• Advanced (4 months) - ₹30,000\n• Master Certification (6 months) - ₹45,000\nClick 'Training' to enroll!";
    }
    if (msg.includes('weld')) {
      return "🔥 Welding Training Programs:\n• Basic (2 months) - ₹14,000\n• Advanced (4 months) - ₹24,000\n• Master Certification (6 months) - ₹38,000\nClick 'Training' to enroll!";
    }
    return "📚 We offer training in Electrical, Plumbing, HVAC, and Welding. Programs range from beginner (2 months) to master certification (6 months). Click 'Training' to see all programs!";
  }

  // Salary queries
  if (msg.includes('salary') || msg.includes('pay') || msg.includes('earn') || msg.includes('income')) {
    return "💰 Salary Ranges:\n• Entry-level: ₹20,000-₹40,000/month\n• Mid-level: ₹40,000-₹60,000/month\n• Experienced: ₹60,000-₹1,00,000+/month\nSalary depends on skills, certifications, and experience!";
  }

  // Help queries
  if (msg.includes('help') || msg.includes('what can you') || msg.includes('how do')) {
    return "🤝 I can help you with:\n• Finding jobs in skilled trades\n• Information about training programs\n• Salary and career guidance\n\nTry asking: 'Show me jobs', 'Training programs', or 'What's the salary for electricians?'";
  }

  // Greetings
  if (msg.includes('hi') || msg.includes('hello') || msg.includes('hey') || msg.includes('namaste')) {
    return "🙏 Hello! Welcome to kaushalPath. I can help you find jobs or training programs in skilled trades like Electrical, Plumbing, HVAC, and Welding. What would you like to know?";
  }

  // Thanks
  if (msg.includes('thank') || msg.includes('thanks') || msg.includes('dhanyavad')) {
    return "😊 You're welcome! Feel free to ask if you have more questions. Good luck with your career!";
  }

  // Default response
  return "I can help you with jobs and training in skilled trades (Electrical, Plumbing, HVAC, Welding). Try asking about:\n• Available jobs\n• Training programs\n• Salary information\n\nOr use the buttons below to get started!";
}

// Chatbot endpoint
app.post("/api/chatbot", (req, res) => {
  const { messages } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({
      error: "messages array is required"
    });
  }

  // Get the last user message
  const userMessages = messages.filter(m => m.role === 'user');
  const lastUserMessage = userMessages[userMessages.length - 1]?.content || '';

  const botResponse = generateBotResponse(lastUserMessage);

  // Return in OpenAI-compatible format
  res.json({
    choices: [{
      message: {
        role: 'assistant',
        content: botResponse
      }
    }]
  });
});

app.listen(PORT, () => {
  console.log("Backend running on http://localhost:3000");
});
