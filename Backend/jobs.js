/**
 * KaushalPath - Jobs Data with Multilingual Support
 * Language codes: en (English), hi (Hindi), ta (Tamil), te (Telugu), mr (Marathi)
 */

const JOBS = [
  // ================= HVAC =================
  {
    id: 1,
    title: {
      en: "HVAC Technician",
      hi: "HVAC तकनीशियन",
      ta: "HVAC தொழில்நுட்பர்",
      te: "HVAC టెక్నీషియన్",
      mr: "HVAC तंत्रज्ञ"
    },
    field: "hvac",
    level: "beginner",
    salaryMin: 30000,
    salaryMax: 45000,
    location: {
      en: "Hyderabad",
      hi: "हैदराबाद",
      ta: "ஹைதராபாத்",
      te: "హైదరాబాద్",
      mr: "हैदराबाद"
    },
    company: "CoolAir Solutions",
    demand: "high"
  },
  {
    id: 2,
    title: {
      en: "HVAC Maintenance Tech",
      hi: "HVAC रखरखाव तकनीशियन",
      ta: "HVAC பராமரிப்பு தொழில்நுட்பர்",
      te: "HVAC మెయింటెనెన్స్ టెక్",
      mr: "HVAC देखभाल तंत्रज्ञ"
    },
    field: "hvac",
    level: "mid",
    salaryMin: 40000,
    salaryMax: 65000,
    location: {
      en: "Chennai",
      hi: "चेन्नई",
      ta: "சென்னை",
      te: "చెన్నై",
      mr: "चेन्नई"
    },
    company: "ClimateFix"
  },
  {
    id: 3,
    title: {
      en: "Senior HVAC Supervisor",
      hi: "वरिष्ठ HVAC पर्यवेक्षक",
      ta: "மூத்த HVAC மேற்பார்வையாளர்",
      te: "సీనియర్ HVAC సూపర్‌వైజర్",
      mr: "वरिष्ठ HVAC पर्यवेक्षक"
    },
    field: "hvac",
    level: "pro",
    salaryMin: 60000,
    salaryMax: 90000,
    location: {
      en: "Bangalore",
      hi: "बेंगलुरु",
      ta: "பெங்களூர்",
      te: "బెంగళూరు",
      mr: "बेंगळुरू"
    },
    company: "AirFlow Systems"
  },
  {
    id: 4,
    title: {
      en: "HVAC Project Manager",
      hi: "HVAC प्रोजेक्ट मैनेजर",
      ta: "HVAC திட்ட மேலாளர்",
      te: "HVAC ప్రాజెక్ట్ మేనేజర్",
      mr: "HVAC प्रकल्प व्यवस्थापक"
    },
    field: "hvac",
    level: "master",
    salaryMin: 90000,
    salaryMax: 140000,
    location: {
      en: "Mumbai",
      hi: "मुंबई",
      ta: "மும்பை",
      te: "ముంబై",
      mr: "मुंबई"
    },
    company: "ThermoBuild"
  },

  // ================= ELECTRICAL =================
  {
    id: 5,
    title: {
      en: "Assistant Electrician",
      hi: "सहायक इलेक्ट्रीशियन",
      ta: "உதவி மின்சாரி",
      te: "అసిస్టెంట్ ఎలక్ట్రీషియన్",
      mr: "सहाय्यक इलेक्ट्रिशियन"
    },
    field: "electrical",
    level: "beginner",
    salaryMin: 25000,
    salaryMax: 40000,
    location: {
      en: "Pune",
      hi: "पुणे",
      ta: "புனே",
      te: "పూణే",
      mr: "पुणे"
    },
    company: "SparkPower",
    demand: "high"
  },
  {
    id: 6,
    title: {
      en: "Industrial Electrician",
      hi: "औद्योगिक इलेक्ट्रीशियन",
      ta: "தொழில்துறை மின்சாரி",
      te: "ఇండస్ట్రియల్ ఎలక్ట్రీషియన్",
      mr: "औद्योगिक इलेक्ट्रिशियन"
    },
    field: "electrical",
    level: "mid",
    salaryMin: 35000,
    salaryMax: 60000,
    location: {
      en: "Chennai",
      hi: "चेन्नई",
      ta: "சென்னை",
      te: "చెన్నై",
      mr: "చెన్నై"
    },
    company: "VoltEdge",
    demand: "high"
  },
  {
    id: 7,
    title: {
      en: "Electrical Site Engineer",
      hi: "इलेक्ट्रिकल साइट इंजीनियर",
      ta: "மின் தள பொறியாளர்",
      te: "ఎలక్ట్రికల్ సైట్ ఇంజనీర్",
      mr: "इलेक्ट्रिकल साइट इंजिनिअर"
    },
    field: "electrical",
    level: "pro",
    salaryMin: 55000,
    salaryMax: 85000,
    location: {
      en: "Hyderabad",
      hi: "हैदराबाद",
      ta: "ஹைதராபாத்",
      te: "హైదరాబాద్",
      mr: "हैदराबाद"
    },
    company: "PowerGrid Ltd"
  },
  {
    id: 8,
    title: {
      en: "Chief Electrical Consultant",
      hi: "मुख्य इलेक्ट्रिकल सलाहकार",
      ta: "தலைமை மின் ஆலோசகர்",
      te: "చీఫ్ ఎలక్ట్రికల్ కన్సల్టెంట్",
      mr: "मुख्य इलेक्ट्रिकल सल्लागार"
    },
    field: "electrical",
    level: "master",
    salaryMin: 100000,
    salaryMax: 160000,
    location: {
      en: "Delhi",
      hi: "दिल्ली",
      ta: "டெல்லி",
      te: "ఢిల్లీ",
      mr: "दिल्ली"
    },
    company: "ElectraWorks"
  },

  // ================= PLUMBING =================
  {
    id: 9,
    title: {
      en: "Junior Plumber",
      hi: "जूनियर प्लंबर",
      ta: "ஜூனியர் பிளம்பர்",
      te: "జూనియర్ ప్లంబర్",
      mr: "कनिष्ठ प्लंबर"
    },
    field: "plumbing",
    level: "beginner",
    salaryMin: 20000,
    salaryMax: 35000,
    location: {
      en: "Kolkata",
      hi: "कोलकाता",
      ta: "கொல்கத்தா",
      te: "కోల్‌కతా",
      mr: "कोलकाता"
    },
    company: "FlowMasters"
  },
  {
    id: 10,
    title: {
      en: "Pipe Installation Tech",
      hi: "पाइप इंस्टॉलेशन तकनीशियन",
      ta: "குழாய் நிறுவல் தொழில்நுட்பர்",
      te: "పైప్ ఇన్‌స్టాలేషన్ టెక్",
      mr: "पाईप इन्स्टॉलेशन तंत्रज्ञ"
    },
    field: "plumbing",
    level: "mid",
    salaryMin: 30000,
    salaryMax: 55000,
    location: {
      en: "Ahmedabad",
      hi: "अहमदाबाद",
      ta: "அகமதாபாத்",
      te: "అహ్మదాబాద్",
      mr: "अहमदाबाद"
    },
    company: "AquaLine"
  },
  {
    id: 11,
    title: {
      en: "Plumbing Supervisor",
      hi: "प्लंबिंग पर्यवेक्षक",
      ta: "பிளம்பிங் மேற்பார்வையாளர்",
      te: "ప్లంబింగ్ సూపర్‌వైజర్",
      mr: "प्लंबिंग पर्यवेक्षक"
    },
    field: "plumbing",
    level: "pro",
    salaryMin: 50000,
    salaryMax: 75000,
    location: {
      en: "Bangalore",
      hi: "बेंगलुरु",
      ta: "பெங்களூர்",
      te: "బెంగళూరు",
      mr: "बेंगळुरू"
    },
    company: "UrbanFlow"
  },
  {
    id: 12,
    title: {
      en: "Plumbing Operations Head",
      hi: "प्लंबिंग संचालन प्रमुख",
      ta: "பிளம்பிங் செயல்பாட்டுத் தலைவர்",
      te: "ప్లంబింగ్ ఆపరేషన్స్ హెడ్",
      mr: "प्लंबिंग ऑपरेशन्स हेड"
    },
    field: "plumbing",
    level: "master",
    salaryMin: 80000,
    salaryMax: 130000,
    location: {
      en: "Mumbai",
      hi: "मुंबई",
      ta: "மும்பை",
      te: "ముంబై",
      mr: "मुंबई"
    },
    company: "HydroFix"
  },

  // ================= WELDING =================
  {
    id: 13,
    title: {
      en: "Trainee Welder",
      hi: "प्रशिक्षु वेल्डर",
      ta: "பயிற்சி வெல்டர்",
      te: "ట్రైనీ వెల్డర్",
      mr: "प्रशिक्षणार्थी वेल्डर"
    },
    field: "welding",
    level: "beginner",
    salaryMin: 22000,
    salaryMax: 38000,
    location: {
      en: "Coimbatore",
      hi: "कोयंबटूर",
      ta: "கோயம்புத்தூர்",
      te: "కోయంబత్తూర్",
      mr: "कोईंबतूर"
    },
    company: "MetalForge"
  },
  {
    id: 14,
    title: {
      en: "Fabrication Specialist",
      hi: "फैब्रिकेशन विशेषज्ञ",
      ta: "உருவாக்க நிபுணர்",
      te: "ఫాబ్రికేషన్ స్పెషలిస్ట్",
      mr: "फॅब्रिकेशन तज्ञ"
    },
    field: "welding",
    level: "mid",
    salaryMin: 35000,
    salaryMax: 60000,
    location: {
      en: "Hyderabad",
      hi: "हैदराबाद",
      ta: "ஹைதராபாத்",
      te: "హైదరాబాద్",
      mr: "हैदराबाद"
    },
    company: "SteelCraft"
  },
  {
    id: 15,
    title: {
      en: "Senior Welding Inspector",
      hi: "वरिष्ठ वेल्डिंग निरीक्षक",
      ta: "மூத்த வெல்டிங் ஆய்வாளர்",
      te: "సీనియర్ వెల్డింగ్ ఇన్‌స్పెక్టర్",
      mr: "वरिष्ठ वेल्डिंग निरीक्षक"
    },
    field: "welding",
    level: "pro",
    salaryMin: 55000,
    salaryMax: 90000,
    location: {
      en: "Vizag",
      hi: "विशाखापत्तनम",
      ta: "விசாகப்பட்டினம்",
      te: "విశాఖపట్నం",
      mr: "विशाखापट्टणम"
    },
    company: "IronWorks"
  },
  {
    id: 16,
    title: {
      en: "Metal Works Manager",
      hi: "मेटल वर्क्स मैनेजर",
      ta: "உலோக வேலை மேலாளர்",
      te: "మెటల్ వర్క్స్ మేనేజర్",
      mr: "मेटल वर्क्स व्यवस्थापक"
    },
    field: "welding",
    level: "master",
    salaryMin: 90000,
    salaryMax: 150000,
    location: {
      en: "Mumbai",
      hi: "मुंबई",
      ta: "மும்பை",
      te: "ముంబై",
      mr: "मुंबई"
    },
    company: "TitanFabricators"
  }
];

/**
 * Helper function to get localized job field
 * @param {object} job - Job object
 * @param {string} field - Field name (title, location)
 * @param {string} langCode - Language code
 * @returns {string}
 */
function getLocalizedJobField(job, field, langCode = 'en') {
  if (job[field] && typeof job[field] === 'object') {
    return job[field][langCode] || job[field]['en'] || '';
  }
  return job[field] || '';
}
