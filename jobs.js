/**
 * KaushalPath - Jobs Data
 * Multilingual support for job listings
 */

const JOBS = [
  {
    id: 1,
    title: {
      en: "Senior Electrician",
      hi: "वरिष्ठ इलेक्ट्रीशियन",
      ta: "மூத்த மின்சாரி",
      te: "సీనియర్ ఎలక్ట్రీషియన్",
      mr: "ज्येष्ठ इलेक्ट्रिशियन"
    },
    company: "PowerGrid Solutions",
    location: {
      en: "Mumbai",
      hi: "मुंबई",
      ta: "மும்பை",
      te: "ముంబై",
      mr: "मुंबई"
    },
    field: "electrical",
    level: "pro",
    salaryMin: 45000,
    salaryMax: 75000,
    demand: "high",
    category: "electrical"
  },
  {
    id: 2,
    title: {
      en: "HVAC Technician",
      hi: "HVAC तकनीशियन",
      ta: "HVAC தொழில்நுட்ப வல்லுநர்",
      te: "HVAC టెక్నీషియన్",
      mr: "HVAC तंत्रज्ञ"
    },
    company: "Climate Control Inc",
    location: {
      en: "Bangalore",
      hi: "बेंगलुरु",
      ta: "பெங்களூரு",
      te: "బెంగళూరు",
      mr: "बेंगलुरु"
    },
    field: "hvac",
    level: "mid",
    salaryMin: 35000,
    salaryMax: 55000,
    demand: "high",
    category: "mechanical"
  },
  {
    id: 3,
    title: {
      en: "Master Plumber",
      hi: "मास्टर प्लंबर",
      ta: "மாஸ்டர் குழாய் பொருத்துபவர்",
      te: "మాస్టర్ ప్లంబర్",
      mr: "मास्टर प्लंबर"
    },
    company: "AquaFlow Services",
    location: {
      en: "Delhi",
      hi: "दिल्ली",
      ta: "டெல்லி",
      te: "ఢిల్లీ",
      mr: "दिल्ली"
    },
    field: "plumbing",
    level: "master",
    salaryMin: 50000,
    salaryMax: 80000,
    demand: "medium",
    category: "trades"
  },
  {
    id: 4,
    title: {
      en: "Welding Specialist",
      hi: "वेल्डिंग विशेषज्ञ",
      ta: "வெல்டிங் நிபுணர்",
      te: "వెల్డింగ్ నిపుణుడు",
      mr: "वेल्डिंग तज्ञ"
    },
    company: "Steel Masters Ltd",
    location: {
      en: "Pune",
      hi: "पुणे",
      ta: "புனே",
      te: "పూణే",
      mr: "पुणे"
    },
    field: "welding",
    level: "pro",
    salaryMin: 40000,
    salaryMax: 65000,
    demand: "high",
    category: "mechanical"
  },
  {
    id: 5,
    title: {
      en: "Junior Electrician",
      hi: "कनिष्ठ इलेक्ट्रीशियन",
      ta: "இளைய மின்சாரி",
      te: "జూనియర్ ఎలక్ట్రీషియన్",
      mr: "कनिष्ठ इलेक्ट्रिशियन"
    },
    company: "Bright Electric Co",
    location: {
      en: "Chennai",
      hi: "चेन्नई",
      ta: "சென்னை",
      te: "చెన్నై",
      mr: "चेन्नई"
    },
    field: "electrical",
    level: "beginner",
    salaryMin: 25000,
    salaryMax: 40000,
    demand: "medium",
    category: "electrical"
  },
  {
    id: 6,
    title: {
      en: "HVAC Installation Expert",
      hi: "HVAC स्थापना विशेषज्ञ",
      ta: "HVAC நிறுவல் நிபுணர்",
      te: "HVAC ఇన్‌స్టాలేషన్ నిపుణుడు",
      mr: "HVAC स्थापना तज्ञ"
    },
    company: "CoolTech Systems",
    location: {
      en: "Hyderabad",
      hi: "हैदराबाद",
      ta: "ஹைதராபாத்",
      te: "హైదరాబాద్",
      mr: "हैदराबाद"
    },
    field: "hvac",
    level: "pro",
    salaryMin: 42000,
    salaryMax: 70000,
    demand: "high",
    category: "mechanical"
  },
  {
    id: 7,
    title: {
      en: "Residential Plumber",
      hi: "आवासीय प्लंबर",
      ta: "குடியிருப்பு குழாய் பொருத்துபவர்",
      te: "నివాస ప్లంబర్",
      mr: "निवासी प्लंबर"
    },
    company: "Home Services Plus",
    location: {
      en: "Kolkata",
      hi: "कोलकाता",
      ta: "கொல்கத்தா",
      te: "కోల్‌కతా",
      mr: "कोलकाता"
    },
    field: "plumbing",
    level: "mid",
    salaryMin: 32000,
    salaryMax: 52000,
    demand: "medium",
    category: "trades"
  },
  {
    id: 8,
    title: {
      en: "TIG Welder",
      hi: "TIG वेल्डर",
      ta: "TIG வெல்டர்",
      te: "TIG వెల్డర్",
      mr: "TIG वेल्डर"
    },
    company: "Precision Welding",
    location: {
      en: "Ahmedabad",
      hi: "अहमदाबाद",
      ta: "அகமதாபாத்",
      te: "అహ్మదాబాద్",
      mr: "अहमदाबाद"
    },
    field: "welding",
    level: "master",
    salaryMin: 55000,
    salaryMax: 85000,
    demand: "high",
    category: "mechanical"
  },
  {
    id: 9,
    title: {
      en: "Commercial Electrician",
      hi: "वाणिज्यिक इलेक्ट्रीशियन",
      ta: "வணிக மின்சாரி",
      te: "వాణిజ్య ఎలక్ట్రీషియన్",
      mr: "व्यावसायिक इलेक्ट्रिशियन"
    },
    company: "Metro Electrical Works",
    location: {
      en: "Jaipur",
      hi: "जयपुर",
      ta: "ஜெய்ப்பூர்",
      te: "జైపూర్",
      mr: "जयपूर"
    },
    field: "electrical",
    level: "mid",
    salaryMin: 38000,
    salaryMax: 60000,
    demand: "high",
    category: "electrical"
  },
  {
    id: 10,
    title: {
      en: "AC Repair Technician",
      hi: "AC मरम्मत तकनीशियन",
      ta: "ஏசி பழுதுபார்ப்பு தொழில்நுட்ப வல்லுநர்",
      te: "ఏసీ రిపేర్ టెక్నీషియన్",
      mr: "AC दुरुस्ती तंत्रज्ञ"
    },
    company: "ChillZone Services",
    location: {
      en: "Surat",
      hi: "सूरत",
      ta: "சூரத்",
      te: "సూరత్",
      mr: "सूरत"
    },
    field: "hvac",
    level: "beginner",
    salaryMin: 22000,
    salaryMax: 38000,
    demand: "medium",
    category: "mechanical"
  },
  {
    id: 11,
    title: {
      en: "Industrial Welder",
      hi: "औद्योगिक वेल्डर",
      ta: "தொழில்துறை வெல்டர்",
      te: "ఇండస్ట్రియల్ వెల్డర్",
      mr: "औद्योगिक वेल्डर"
    },
    company: "Heavy Industries Corp",
    location: {
      en: "Coimbatore",
      hi: "कोयंबटूर",
      ta: "கோயம்புத்தூர்",
      te: "కోయంబత్తూరు",
      mr: "कोयंबटूर"
    },
    field: "welding",
    level: "mid",
    salaryMin: 36000,
    salaryMax: 58000,
    demand: "high",
    category: "mechanical"
  },
  {
    id: 12,
    title: {
      en: "Apprentice Plumber",
      hi: "अप्रेंटिस प्लंबर",
      ta: "பயிற்சி குழாய் பொருத்துபவர்",
      te: "అప్రెంటిస్ ప్లంబర్",
      mr: "प्रशिक्षु प्लंबर"
    },
    company: "PipeMasters",
    location: {
      en: "Lucknow",
      hi: "लखनऊ",
      ta: "லக்னோ",
      te: "లక్నో",
      mr: "लखनौ"
    },
    field: "plumbing",
    level: "beginner",
    salaryMin: 20000,
    salaryMax: 35000,
    demand: "low",
    category: "trades"
  }
];

/**
 * Helper function to get localized job field
 */
function getLocalizedJobField(job, field, langCode = 'en') {
  if (job[field] && typeof job[field] === 'object') {
    return job[field][langCode] || job[field]['en'] || '';
  }
  return job[field] || '';
}

/**
 * Get jobs by category
 */
function getJobsByCategory(category) {
  if (!category || category === 'all') return JOBS;
  return JOBS.filter(job => job.category === category);
}

/**
 * Search jobs by query
 */
function searchJobs(query, langCode = 'en') {
  if (!query) return JOBS;
  
  const lowerQuery = query.toLowerCase();
  return JOBS.filter(job => {
    const title = getLocalizedJobField(job, 'title', langCode).toLowerCase();
    const location = getLocalizedJobField(job, 'location', langCode).toLowerCase();
    const company = job.company.toLowerCase();
    
    return title.includes(lowerQuery) || 
           location.includes(lowerQuery) || 
           company.includes(lowerQuery);
  });
}
