/**
 * KaushalPath - Training Programs Data
 * Multilingual support for training courses and certifications
 */

const TRAINING_PROGRAMS = [
  {
    id: 1,
    title: {
      en: "Basic Electrical Wiring",
      hi: "बुनियादी विद्युत वायरिंग",
      ta: "அடிப்படை மின் வயரிங்",
      te: "ప్రాథమిక విద్యుత్ వైరింగ్",
      mr: "मूलभूत विद्युत वायरिंग"
    },
    description: {
      en: "Learn fundamental electrical wiring skills and safety protocols",
      hi: "बुनियादी विद्युत वायरिंग कौशल और सुरक्षा प्रोटोकॉल सीखें",
      ta: "அடிப்படை மின் வயரிங் திறன்கள் மற்றும் பாதுகாப்பு நெறிமுறைகளை கற்றுக் கொள்ளுங்கள்",
      te: "ప్రాథమిక విద్యుత్ వైరింగ్ నైపుణ్యాలు మరియు భద్రతా ప్రోటోకాల్‌లను నేర్చుకోండి",
      mr: "मूलभूत विद्युत वायरिंग कौशल्ये आणि सुरक्षा प्रोटोकॉल शिका"
    },
    provider: "National Skill Development Corporation",
    level: "beginner",
    format: "online-hands-on",
    duration: "3 months",
    certified: true
  },
  {
    id: 2,
    title: {
      en: "Advanced HVAC Systems",
      hi: "उन्नत HVAC सिस्टम",
      ta: "மேம்பட்ட HVAC அமைப்புகள்",
      te: "అధునాతన HVAC వ్యవస్థలు",
      mr: "प्रगत HVAC प्रणाली"
    },
    description: {
      en: "Master commercial HVAC installation, maintenance, and troubleshooting",
      hi: "वाणिज्यिक HVAC स्थापना, रखरखाव और समस्या निवारण में महारत हासिल करें",
      ta: "வணிக HVAC நிறுவல், பராமரிப்பு மற்றும் சிக்கல் தீர்வு ஆகியவற்றில் தேர்ச்சி பெறுங்கள்",
      te: "వాణిజ్య HVAC ఇన్‌స్టాలేషన్, నిర్వహణ మరియు ట్రబుల్షూటింగ్‌లో నైపుణ్యం పొందండి",
      mr: "व्यावसायिक HVAC स्थापना, देखभाल आणि समस्यानिवारणात प्रावीण्य मिळवा"
    },
    provider: "ITI Training Center",
    level: "advanced",
    format: "in-person",
    duration: "6 months",
    certified: true
  },
  {
    id: 3,
    title: {
      en: "Plumbing Basics Certification",
      hi: "प्लंबिंग मूल बातें प्रमाणन",
      ta: "குழாய் அடிப்படைகள் சான்றிதழ்",
      te: "ప్లంబింగ్ బేసిక్స్ సర్టిఫికేషన్",
      mr: "प्लंबिंग मूलभूत प्रमाणन"
    },
    description: {
      en: "Complete introduction to residential plumbing systems and fixtures",
      hi: "आवासीय प्लंबिंग सिस्टम और फिक्स्चर का पूर्ण परिचय",
      ta: "குடியிருப்பு குழாய் அமைப்புகள் மற்றும் பொருத்துதல்களுக்கான முழுமையான அறிமுகம்",
      te: "నివాస ప్లంబింగ్ వ్యవస్థలు మరియు ఫిక్చర్‌లకు పూర్తి పరిచయం",
      mr: "निवासी प्लंबिंग प्रणाली आणि फिक्स्चरचा संपूर्ण परिचय"
    },
    provider: "Skill India Initiative",
    level: "beginner",
    format: "online",
    duration: "2 months",
    certified: true
  },
  {
    id: 4,
    title: {
      en: "Welding & Fabrication Pro",
      hi: "वेल्डिंग और फैब्रिकेशन प्रो",
      ta: "வெல்டிங் & உருவாக்கம் நிபுணர்",
      te: "వెల్డింగ్ & ఫాబ్రికేషన్ ప్రో",
      mr: "वेल्डिंग आणि फॅब्रिकेशन प्रो"
    },
    description: {
      en: "Professional-level training in MIG, TIG, and arc welding techniques",
      hi: "MIG, TIG और आर्क वेल्डिंग तकनीकों में पेशेवर स्तर का प्रशिक्षण",
      ta: "MIG, TIG மற்றும் ஆர்க் வெல்டிங் நுட்பங்களில் தொழில்முறை அளவிலான பயிற்சி",
      te: "MIG, TIG మరియు ఆర్క్ వెల్డింగ్ పద్ధతుల్లో వృత్తిపరమైన స్థాయి శిక్షణ",
      mr: "MIG, TIG आणि आर्क वेल्डिंग तंत्रांमध्ये व्यावसायिक स्तरावरील प्रशिक्षण"
    },
    provider: "Central Tool Room",
    level: "intermediate",
    format: "in-person",
    duration: "4 months",
    certified: true
  },
  {
    id: 5,
    title: {
      en: "Industrial Electrician Course",
      hi: "औद्योगिक इलेक्ट्रीशियन पाठ्यक्रम",
      ta: "தொழில்துறை மின்சாரி பாடநெறி",
      te: "ఇండస్ట్రియల్ ఎలక్ట్రీషియన్ కోర్సు",
      mr: "औद्योगिक इलेक्ट्रिशियन अभ्यासक्रम"
    },
    description: {
      en: "Specialize in three-phase systems, motor controls, and industrial automation",
      hi: "थ्री-फेज सिस्टम, मोटर नियंत्रण और औद्योगिक स्वचालन में विशेषज्ञता",
      ta: "மூன்று-கட்ட அமைப்புகள், மோட்டார் கட்டுப்பாடுகள் மற்றும் தொழில்துறை தானியங்குமயமாக்கலில் நிபுணத்துவம்",
      te: "త్రీ-ఫేజ్ సిస్టమ్స్, మోటార్ కంట్రోల్స్ మరియు ఇండస్ట్రియల్ ఆటోమేషన్‌లో ప్రత్యేకత",
      mr: "थ्री-फेज सिस्टम, मोटर नियंत्रणे आणि औद्योगिक स्वयंचलनामध्ये विशेषज्ञता"
    },
    provider: "State Technical Institute",
    level: "advanced",
    format: "online-hands-on",
    duration: "8 months",
    certified: true
  },
  {
    id: 6,
    title: {
      en: "Solar Panel Installation",
      hi: "सोलर पैनल इंस्टॉलेशन",
      ta: "சூரிய பேனல் நிறுவல்",
      te: "సోలార్ ప్యానెల్ ఇన్‌స్టాలేషన్",
      mr: "सोलर पॅनेल इन्स्टॉलेशन"
    },
    description: {
      en: "Learn to design, install, and maintain residential and commercial solar systems",
      hi: "आवासीय और वाणिज्यिक सौर प्रणालियों को डिजाइन, स्थापित और बनाए रखना सीखें",
      ta: "குடியிருப்பு மற்றும் வணிக சூரிய அமைப்புகளை வடிவமைத்தல், நிறுவுதல் மற்றும் பராமரிப்பது கற்றுக் கொள்ளுங்கள்",
      te: "నివాస మరియు వాణిజ్య సౌర వ్యవస్థలను డిజైన్ చేయడం, ఇన్‌స్టాల్ చేయడం మరియు నిర్వహించడం నేర్చుకోండి",
      mr: "निवासी आणि व्यावसायिक सौर प्रणालींचे डिझाइन, स्थापना आणि देखभाल करणे शिका"
    },
    provider: "Ministry of New & Renewable Energy",
    level: "intermediate",
    format: "online-hands-on",
    duration: "3 months",
    certified: true
  },
  {
    id: 7,
    title: {
      en: "Smart Home Technology",
      hi: "स्मार्ट होम टेक्नोलॉजी",
      ta: "ஸ்மார்ட் ஹோம் தொழில்நுட்பம்",
      te: "స్మార్ట్ హోమ్ టెక్నాలజీ",
      mr: "स्मार्ट होम तंत्रज्ञान"
    },
    description: {
      en: "Master IoT devices, home automation systems, and smart electrical installations",
      hi: "IoT उपकरणों, होम ऑटोमेशन सिस्टम और स्मार्ट इलेक्ट्रिकल इंस्टॉलेशन में महारत हासिल करें",
      ta: "IoT சாதனங்கள், வீட்டு தன்னியக்க அமைப்புகள் மற்றும் ஸ்மார்ட் மின் நிறுவல்களில் தேர்ச்சி பெறுங்கள்",
      te: "IoT పరికరాలు, హోం ఆటోమేషన్ సిస్టమ్స్ మరియు స్మార్ట్ ఎలక్ట్రికల్ ఇన్‌స్టాలేషన్‌లలో నైపుణ్యం పొందండి",
      mr: "IoT उपकरणे, होम ऑटोमेशन सिस्टम आणि स्मार्ट इलेक्ट्रिकल इन्स्टॉलेशनमध्ये प्रावीण्य मिळवा"
    },
    provider: "Tech Skills Academy",
    level: "advanced",
    format: "online",
    duration: "5 months",
    certified: true
  },
  {
    id: 8,
    title: {
      en: "Fire Safety Systems",
      hi: "अग्नि सुरक्षा प्रणाली",
      ta: "தீ பாதுகாப்பு அமைப்புகள்",
      te: "అగ్ని భద్రతా వ్యవస్థలు",
      mr: "अग्नि सुरक्षा प्रणाली"
    },
    description: {
      en: "Installation and maintenance of sprinkler systems, alarms, and fire protection",
      hi: "स्प्रिंकलर सिस्टम, अलार्म और अग्नि सुरक्षा की स्थापना और रखरखाव",
      ta: "தெளிப்பான் அமைப்புகள், எச்சரிக்கைகள் மற்றும் தீ பாதுகாப்பு நிறுவல் மற்றும் பராமரிப்பு",
      te: "స్ప్రింక్లర్ వ్యవస్థలు, అలారాలు మరియు అగ్ని రక్షణ యొక్క ఇన్‌స్టాలేషన్ మరియు నిర్వహణ",
      mr: "स्प्रिंकलर सिस्टम, अलार्म आणि अग्निसुरक्षा यांची स्थापना आणि देखभाल"
    },
    provider: "National Fire Service College",
    level: "intermediate",
    format: "in-person",
    duration: "3 months",
    certified: true
  },
  {
    id: 9,
    title: {
      en: "Refrigeration & AC Repair",
      hi: "रेफ्रिजरेशन और एसी मरम्मत",
      ta: "குளிர்சாதனம் & ஏசி பழுதுபார்ப்பு",
      te: "రిఫ్రిజరేషన్ & ఏసీ రిపేర్",
      mr: "रेफ्रिजरेशन आणि एसी दुरुस्ती"
    },
    description: {
      en: "Comprehensive training in refrigerant handling, AC repair, and cooling systems",
      hi: "रेफ्रिजरेंट हैंडलिंग, एसी मरम्मत और कूलिंग सिस्टम में व्यापक प्रशिक्षण",
      ta: "குளிரூட்டி கையாளுதல், ஏசி பழுதுபார்ப்பு மற்றும் குளிர்ச்சி அமைப்புகளில் விரிவான பயிற்சி",
      te: "రిఫ్రిజరెంట్ హ్యాండ్లింగ్, ఏసీ రిపేర్ మరియు కూలింగ్ సిస్టమ్స్‌లో సమగ్ర శిక్షణ",
      mr: "रेफ्रिजरंट हाताळणी, एसी दुरुस्ती आणि कूलिंग सिस्टममध्ये सर्वसमावेशक प्रशिक्षण"
    },
    provider: "Cool Tech Institute",
    level: "beginner",
    format: "online-hands-on",
    duration: "4 months",
    certified: true
  },
  {
    id: 10,
    title: {
      en: "Construction Site Safety",
      hi: "निर्माण स्थल सुरक्षा",
      ta: "கட்டுமான தள பாதுகாப்பு",
      te: "నిర్మాణ సైట్ భద్రత",
      mr: "बांधकाम साइट सुरक्षा"
    },
    description: {
      en: "Essential safety protocols, risk management, and compliance for construction work",
      hi: "निर्माण कार्य के लिए आवश्यक सुरक्षा प्रोटोकॉल, जोखिम प्रबंधन और अनुपालन",
      ta: "கட்டுமானப் பணிக்கான அத்தியாவசிய பாதுகாப்பு நெறிமுறைகள், இடர் மேலாண்மை மற்றும் இணக்கம்",
      te: "నిర్మాణ పనుల కోసం అవసరమైన భద్రతా ప్రోటోకాల్స్, రిస్క్ మేనేజ్‌మెంట్ మరియు కంప్లయన్స్",
      mr: "बांधकाम कामासाठी आवश्यक सुरक्षा प्रोटोकॉल, जोखीम व्यवस्थापन आणि अनुपालन"
    },
    provider: "Construction Safety Council",
    level: "beginner",
    format: "exam-based",
    duration: "1 month",
    certified: true
  },
  {
    id: 11,
    title: {
      en: "Blueprint Reading & Technical Drawing",
      hi: "ब्लूप्रिंट रीडिंग और तकनीकी ड्राइंग",
      ta: "வரைபடம் படித்தல் & தொழில்நுட்ப வரைதல்",
      te: "బ్లూప్రింట్ రీడింగ్ & టెక్నికల్ డ్రాయింగ్",
      mr: "ब्लूप्रिंट वाचन आणि तांत्रिक रेखाचित्र"
    },
    description: {
      en: "Learn to read and interpret construction blueprints, schematics, and technical drawings",
      hi: "निर्माण ब्लूप्रिंट, योजनाबद्ध और तकनीकी चित्र पढ़ना और समझना सीखें",
      ta: "கட்டுமான வரைபடங்கள், திட்டவரைவுகள் மற்றும் தொழில்நுட்ப வரைபடங்களைப் படிக்கவும் விளக்கவும் கற்றுக் கொள்ளுங்கள்",
      te: "నిర్మాణ బ్లూప్రింట్‌లు, స్కీమాటిక్స్ మరియు టెక్నికల్ డ్రాయింగ్‌లను చదవడం మరియు అర్థం చేసుకోవడం నేర్చుకోండి",
      mr: "बांधकाम ब्लूप्रिंट, योजनाबद्ध आणि तांत्रिक रेखाचित्रे वाचणे आणि त्यांचा अर्थ लावणे शिका"
    },
    provider: "Technical Drawing Institute",
    level: "beginner",
    format: "online",
    duration: "2 months",
    certified: false
  }
];

/**
 * Helper function to get localized training field
 */
function getLocalizedTrainingField(program, field, langCode = 'en') {
  if (program[field] && typeof program[field] === 'object') {
    return program[field][langCode] || program[field]['en'] || '';
  }
  return program[field] || '';
}