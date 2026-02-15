/* =========================
   CENTRALIZED STATE MANAGEMENT
========================= */

const state = {
  currentPage: 'landing',
  currentLanguage: 'en',
  user: {
    name: '',
    age: '',
    salary: '',
    location: ''
  },
  quiz: {
    currentStep: 1,
    totalSteps: 3,
    experience: '',
    interest: ''
  },
  selectedJobId: null,
  filters: {
    category: 'all',
    searchQuery: ''
  },
  isTransitioning: false
};


/* =========================
   NAVIGATION WITH SMOOTH TRANSITIONS
========================= */

function navigate(pageId) {
  if (state.isTransitioning) return;
  if (state.currentPage === pageId) return;

  state.isTransitioning = true;
  const screens = document.querySelectorAll('.screen');
  const currentScreen = document.getElementById(state.currentPage);
  const nextScreen = document.getElementById(pageId);

  if (!nextScreen) {
    console.error(`Screen with id '${pageId}' not found`);
    state.isTransitioning = false;
    return;
  }

  // Fade out current screen
  if (currentScreen) {
    currentScreen.style.opacity = '0';
    currentScreen.style.transform = 'translateY(-20px)';
  }

  setTimeout(() => {
    // Remove active class from all screens
    screens.forEach(s => s.classList.remove('active'));

    // Add active class to next screen
    nextScreen.classList.add('active');
    nextScreen.style.opacity = '0';
    nextScreen.style.transform = 'translateY(20px)';

    // Trigger fade in
    requestAnimationFrame(() => {
      nextScreen.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      nextScreen.style.opacity = '1';
      nextScreen.style.transform = 'translateY(0)';
    });

    // Update state
    state.currentPage = pageId;

    // Update navbar active states
    updateNavbarActive(pageId);

    // Page-specific initialization
    onPageLoad(pageId);

    setTimeout(() => {
      state.isTransitioning = false;
    }, 400);
  }, 150);

  console.log(`Navigated to: ${pageId}`);
}

function updateNavbarActive(pageId) {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.classList.remove('active');
  });
  
  // Match navbar links to pages
  switch (pageId) {
    case 'landing':
      document.querySelector('.nav-link--home')?.classList.add('active');
      break;
    case 'results':
      document.querySelector('.nav-link--jobs')?.classList.add('active');
      break;
    case 'insights':
      // Find the Insights link (doesn't have a specific class)
      const insightsLink = Array.from(navLinks).find(link => 
        link.getAttribute('onclick')?.includes('navigateToInsights')
      );
      if (insightsLink) insightsLink.classList.add('active');
      break;
    case 'step1':
    case 'step2':
      // Quiz steps don't highlight nav
      break;
  }
}

function onPageLoad(pageId) {
  switch (pageId) {
    case 'results':
      displayMatchedJobs(false);
      break;
    case 'insights':
      if (typeof initTrainingPrograms === 'function') {
        initTrainingPrograms();
      }
      break;
    case 'step1':
      renderQuizStep(1);
      break;
    case 'step2':
      renderQuizStep(2);
      break;
  }
}

/* =========================
   NAVBAR NAVIGATION FUNCTIONS
========================= */

function navigateToHome(e) {
  if (e) e.preventDefault();
  navigate('landing');
}

function navigateToInsights(e) {
  if (e) e.preventDefault();
  navigate('insights');
}

function navigateToTrendingJobs(e) {
  if (e) e.preventDefault();
  navigate('results');
  setTimeout(() => displayTrendingJobs(), 100);
}

function handleSignIn(e) {
  if (e) e.preventDefault();
  
  // For now, show a modal-style alert
  const userName = state.user.name || 'there';
  
  alert(`👋 Welcome ${userName}!\n\nSign In functionality coming soon.\n\nFor now, you can:\n• Explore Jobs\n• Take the Career Quiz\n• Browse Training Programs`);
  
  console.log('[Auth] Sign In clicked - redirect to auth page');
}


/* =========================
   HERO FORM WITH VALIDATION
========================= */

function startQuiz() {
  const nameInput = document.getElementById('name');
  const ageInput = document.getElementById('age');
  const locationInput = document.getElementById('location');

  // Capture values
  const name = nameInput?.value.trim() || '';
  const age = parseInt(ageInput?.value) || 0;
  const location = locationInput?.value.trim() || '';

  // Validation
  if (!name) {
    showValidationError(nameInput, 'Please enter your name');
    return;
  }

  if (!age || age < 16 || age > 100) {
    showValidationError(ageInput, 'Please enter a valid age (16-100)');
    return;
  }

  if (!location) {
    showValidationError(locationInput, 'Please enter your location');
    return;
  }

  // Store in state
  state.user.name = name;
  state.user.age = age;
  state.user.location = location;
  state.user.salary = document.getElementById('salary')?.value || '';

  console.log('Starting quiz with user:', state.user);
  
  // Reset quiz state
  state.quiz.currentStep = 1;
  state.quiz.experience = '';
  state.quiz.interest = '';

  // Navigate to first quiz step
  navigate('step1');
}

function showValidationError(input, message) {
  if (!input) return;
  
  input.style.borderColor = '#ff4757';
  input.focus();
  
  alert(message);
  
  setTimeout(() => {
    input.style.borderColor = '';
  }, 3000);
}

/* =========================
   QUIZ ENGINE
========================= */

function renderQuizStep(step) {
  state.quiz.currentStep = step;
  
  // Enable/disable navigation buttons based on selection
  updateQuizButtons();
}

function selectExperience(level) {
  state.quiz.experience = level;
  console.log('Selected experience:', level);

  // Remove selected class from all cards
  document.querySelectorAll('#step1 .option-card').forEach(c => 
    c.classList.remove('selected')
  );

  // Add selected class to clicked card
  event.currentTarget.classList.add('selected');
  
  // Enable next button
  updateQuizButtons();
}

function goToStep1() {
  navigate('step1');
}

function goToStep2() {
  if (!state.quiz.experience) {
    alert('Please select your experience level');
    return;
  }
  state.quiz.currentStep = 2;
  navigate('step2');
}

function selectInterest(area) {
  state.quiz.interest = area;
  console.log('Selected interest:', area);

  // Remove selected class from all cards
  document.querySelectorAll('#step2 .option-card').forEach(c => 
    c.classList.remove('selected')
  );

  // Add selected class to clicked card
  event.currentTarget.classList.add('selected');
  
  // Enable next button
  updateQuizButtons();
}

function showResults() {
  if (!state.quiz.interest) {
    alert('Please select your area of interest');
    return;
  }

  console.log('Showing results for:', state);
  navigate('results');
  setTimeout(() => generateJobs(), 100);
}

function updateQuizButtons() {
  // Step 1 button
  const step1Btn = document.querySelector('#step1 .btn--primary');
  if (step1Btn) {
    if (state.quiz.experience) {
      step1Btn.disabled = false;
      step1Btn.style.opacity = '1';
      step1Btn.style.cursor = 'pointer';
    } else {
      step1Btn.disabled = true;
      step1Btn.style.opacity = '0.5';
      step1Btn.style.cursor = 'not-allowed';
    }
  }

  // Step 2 button
  const step2Btn = document.querySelector('#step2 .btn--primary');
  if (step2Btn) {
    if (state.quiz.interest) {
      step2Btn.disabled = false;
      step2Btn.style.opacity = '1';
      step2Btn.style.cursor = 'pointer';
    } else {
      step2Btn.disabled = true;
      step2Btn.style.opacity = '0.5';
      step2Btn.style.cursor = 'not-allowed';
    }
  }
}

function restart() {
  console.log('Restarting quiz');
  
  // Reset state
  state.user = {
    name: '',
    age: '',
    salary: '',
    location: ''
  };
  state.quiz = {
    currentStep: 1,
    totalSteps: 3,
    experience: '',
    interest: ''
  };
  state.selectedJobId = null;
  
  // Clear all inputs
  document.querySelectorAll('input').forEach(input => input.value = '');
  
  // Remove all selected states
  document.querySelectorAll('.option-card.selected').forEach(card => 
    card.classList.remove('selected')
  );
  
  navigate('landing');
}


/* =========================
   JOB GENERATION & DISPLAY
========================= */

function generateJobs() {
  const container = document.getElementById("jobCards");
  if (!container) {
    console.error("Job cards container not found");
    return;
  }

  container.innerHTML = '<div class="loading">Analyzing your profile...</div>';

  // Simulate AI processing
  setTimeout(() => {
    displayMatchedJobs(false);
  }, 1500);
}

function displayTrendingJobs() {
  const container = document.getElementById("jobCards");
  if (!container) {
    console.error("Job cards container not found");
    return;
  }

  container.innerHTML = '<div class="loading">Loading trending jobs...</div>';

  setTimeout(() => {
    displayMatchedJobs(true);
  }, 800);
}

/* =========================
   JOB FILTERING & SEARCH
========================= */

function displayMatchedJobs(showTrending = false) {
  const container = document.getElementById('jobCards');
  if (!container) return;

  // Check if JOBS array exists
  if (typeof JOBS === 'undefined') {
    container.innerHTML = '<p class="error">Jobs data not loaded. Please ensure jobs.js is included.</p>';
    return;
  }

  const currentLang = (typeof I18n !== 'undefined') ? I18n.getCurrentLanguage() : 'en';
  
  let filteredJobs = [...JOBS];

  // Apply filters
  if (state.filters.category && state.filters.category !== 'all') {
    filteredJobs = filteredJobs.filter(job => job.category === state.filters.category);
  }

  if (state.filters.searchQuery) {
    filteredJobs = searchJobs(state.filters.searchQuery, currentLang);
  }

  // Filter by user preferences if not showing trending
  if (!showTrending && state.quiz.interest) {
    filteredJobs = filteredJobs.filter(job => job.field === state.quiz.interest);
    
    if (state.quiz.experience) {
      // Prioritize matching experience level
      filteredJobs.sort((a, b) => {
        const aMatch = a.level === state.quiz.experience ? 1 : 0;
        const bMatch = b.level === state.quiz.experience ? 1 : 0;
        return bMatch - aMatch;
      });
    }
  }

  // Mark some as trending
  filteredJobs = filteredJobs.map(job => ({
    ...job,
    isTrending: showTrending ? Math.random() > 0.5 : false
  }));

  if (showTrending) {
    filteredJobs.sort((a, b) => b.isTrending - a.isTrending);
  }

  // Display up to 6 jobs
  const jobsToShow = filteredJobs.slice(0, 6);

  if (jobsToShow.length === 0) {
    container.innerHTML = '<p class="no-results">No matching jobs found. Please try different criteria.</p>';
    return;
  }

  container.innerHTML = '';

  jobsToShow.forEach((job, index) => {
    const matchScore = calculateMatchScore(job);
    const title = getLocalizedJobField(job, 'title', currentLang);
    const location = getLocalizedJobField(job, 'location', currentLang);

    const div = document.createElement("div");
    div.className = `job-card ${job.isTrending ? 'trending' : ''}`;
    div.style.animationDelay = `${index * 0.1}s`;

    const hotBadge = job.isTrending
      ? `<span class="job-card__hot-badge">🔥 HOT</span>`
      : "";

    div.innerHTML = `
      <div class="job-card__header">
        <div>
          <h3 class="job-card__title">${title}</h3>
          <p class="job-card__company">${job.company}</p>
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px;">
          ${hotBadge}
          <span class="job-card__match">${matchScore}% Match</span>
        </div>
      </div>

      <div class="job-card__details">
        <span class="job-card__tag">📍 ${location}</span>
        <span class="job-card__tag">
          💰 ₹${(job.salaryMin / 1000).toFixed(0)}k - ₹${(job.salaryMax / 1000).toFixed(0)}k
        </span>
        ${job.demand === 'high' ? '<span class="job-card__tag job-card__tag--demand">🔥 High Demand</span>' : ''}
      </div>

      <button class="btn btn--primary" style="margin-top:var(--space-sm);width:100%;" onclick="applyToJob(${job.id})">
        Apply Now
      </button>
    `;

    container.appendChild(div);
  });
}

function calculateMatchScore(job) {
  let score = 70; // Base score

  // Match by experience level
  if (state.quiz.experience === job.level) {
    score += 15;
  } else if (
    (state.quiz.experience === 'mid' && (job.level === 'beginner' || job.level === 'pro')) ||
    (state.quiz.experience === 'pro' && (job.level === 'mid' || job.level === 'master'))
  ) {
    score += 8;
  }

  // Match by field
  if (state.quiz.interest === job.field) {
    score += 15;
  }

  // Random variation
  score += Math.floor(Math.random() * 10);

  return Math.min(score, 99);
}

function applyToJob(jobId) {
  state.selectedJobId = jobId;
  console.log(`Applying to job ${jobId}`);
  
  const job = JOBS.find(j => j.id === jobId);
  const jobTitle = job ? getLocalizedJobField(job, 'title', I18n?.getCurrentLanguage() || 'en') : 'this position';
  
  alert(`Application submitted for ${jobTitle}!\n\nYou'll be contacted soon at your registered email.`);
}


/* =========================
   TRAINING FILTER
========================= */

let currentLevelFilter = 'all';
let currentFormatFilter = 'all';

function filterTrainingPrograms() {
  const searchTerm = document.getElementById("trainingSearch")?.value.toLowerCase() || "";
  
  if (typeof TRAINING_PROGRAMS === 'undefined') {
    console.warn("Training programs data not loaded");
    return;
  }

  const currentLang = (typeof I18n !== 'undefined') ? I18n.getCurrentLanguage() : 'en';
  
  let filtered = TRAINING_PROGRAMS.filter(program => {
    const matchesSearch = !searchTerm || 
      program.title[currentLang].toLowerCase().includes(searchTerm) ||
      program.provider.toLowerCase().includes(searchTerm);
    
    const matchesLevel = currentLevelFilter === 'all' || program.level === currentLevelFilter;
    const matchesFormat = currentFormatFilter === 'all' || program.format === currentFormatFilter;
    
    return matchesSearch && matchesLevel && matchesFormat;
  });

  displayTrainingPrograms(filtered);
  
  // Update count
  const countEl = document.getElementById("programCount");
  if (countEl) {
    countEl.textContent = filtered.length;
  }
}

function setLevelFilter(level) {
  currentLevelFilter = level;
  
  document.querySelectorAll('#levelFilters .filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === level);
  });
  
  filterTrainingPrograms();
}

function setFormatFilter(format) {
  currentFormatFilter = format;
  
  document.querySelectorAll('#formatFilters .filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === format);
  });
  
  filterTrainingPrograms();
}

function displayTrainingPrograms(programs) {
  const container = document.getElementById("trainingCards");
  if (!container) return;

  const currentLang = (typeof I18n !== 'undefined') ? I18n.getCurrentLanguage() : 'en';
  
  if (programs.length === 0) {
    container.innerHTML = '<p class="no-results">No programs found matching your criteria.</p>';
    return;
  }

  container.innerHTML = programs.map(program => `
    <div class="training-card glass-card">
      <div class="training-card__header">
        <span class="training-card__badge training-card__badge--${program.level}">${program.level}</span>
        ${program.certified ? '<span class="training-card__badge training-card__badge--cert">✓ Certified</span>' : ''}
      </div>
      <h3 class="training-card__title">${program.title[currentLang]}</h3>
      <p class="training-card__provider">${program.provider}</p>
      <p class="training-card__desc">${program.description[currentLang]}</p>
      <div class="training-card__meta">
        <span class="training-card__duration">⏱️ ${program.duration}</span>
        <span class="training-card__format">📍 ${program.format.replace('-', ' ')}</span>
      </div>
      <button class="btn btn--primary" style="width:100%;margin-top:var(--space-sm);">
        Learn More
      </button>
    </div>
  `).join('');
}

function initTrainingPrograms() {
  if (typeof TRAINING_PROGRAMS !== 'undefined') {
    filterTrainingPrograms();
  }
}


/* =========================
   LANGUAGE SYSTEM (i18n Integration)
========================= */

/**
 * Toggle the language dropdown visibility
 */
function toggleLangDropdown() {
  const dropdown = document.getElementById('langDropdown');
  if (dropdown) {
    dropdown.classList.toggle('open');
  }
}

/**
 * Cycle through languages in order: EN -> MR -> TE -> TA -> EN
 */
function cycleLanguage() {
  const languageOrder = ['en', 'mr', 'te', 'ta'];
  const currentLang = state.currentLanguage || I18n.getCurrentLanguage();
  const currentIndex = languageOrder.indexOf(currentLang);
  const nextIndex = (currentIndex + 1) % languageOrder.length;
  const nextLang = languageOrder[nextIndex];
  
  console.log(`[Language] Cycling: ${currentLang} → ${nextLang}`);
  changeLanguage(nextLang);
}

/**
 * Change language and update all UI elements
 * @param {string} lang - Language code (en, hi, ta, te, mr)
 */
async function changeLanguage(lang) {
  console.log(`[Language] Switching to: ${lang}`);
  
  // Validate language code
  if (!I18n || !I18n.isSupported(lang)) {
    console.error(`[Language] Unsupported language: ${lang}`);
    return false;
  }

  try {
    // Switch language using I18n module
    const success = await I18n.switchLanguage(lang);
    
    if (success) {
      // Update state
      state.currentLanguage = lang;
      
      // Update language selector UI
      updateLanguageSelectorUI(lang);
      
      // Refresh dynamic content
      refreshDynamicContent();
      
      console.log(`[Language] Successfully switched to ${lang}`);
      return true;
    }
  } catch (error) {
    console.error('[Language] Failed to change language:', error);
    return false;
  }
}

/**
 * Update the language selector UI elements
 */
function updateLanguageSelectorUI(lang) {
  // Update dropdown button active states
  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.lang === lang) {
      btn.classList.add('active');
    }
  });

  // Update language name display
  const selected = document.querySelector(`.lang-option[data-lang="${lang}"]`);
  const langName = selected?.querySelector('.lang-option__native')?.textContent;

  if (langName) {
    const display = document.querySelector('.lang-name');
    if (display) display.textContent = langName;
  }

  // Close dropdown
  toggleLangDropdown();
}

/**
 * Refresh dynamic content after language change
 */
function refreshDynamicContent() {
  const activeScreen = document.querySelector('.screen.active');
  
  if (!activeScreen) return;
  
  switch (activeScreen.id) {
    case 'results':
      // Refresh job listings
      displayMatchedJobs(false);
      break;
    case 'insights':
      // Refresh training programs
      if (typeof filterTrainingPrograms === 'function') {
        filterTrainingPrograms();
      }
      break;
    case 'step1':
    case 'step2':
      // Quiz pages are already handled by I18n.applyTranslations()
      break;
  }
}

/**
 * Legacy function for compatibility
 * @deprecated Use changeLanguage() instead
 */
function selectLanguage(lang) {
  changeLanguage(lang);
}


/* =========================
   NOTIFICATIONS
========================= */

function toggleNotifications() {
  const dropdown = document.getElementById("notificationDropdown");
  if (dropdown) {
    dropdown.classList.toggle("open");
  }
}

function markAllRead() {
  document.querySelectorAll(".notification-item").forEach(item => {
    item.classList.remove("unread");
  });

  const badge = document.querySelector(".notification-badge");
  if (badge) badge.style.display = "none";
}

function handleNotificationClick(el) {
  el.classList.remove("unread");
  
  // Update badge count
  const unreadCount = document.querySelectorAll(".notification-item.unread").length;
  const badge = document.querySelector(".notification-badge");
  if (badge) {
    if (unreadCount > 0) {
      badge.textContent = unreadCount;
    } else {
      badge.style.display = "none";
    }
  }
}


/* =========================
   LOCATION DETECTION
========================= */

function detectLocation() {
  const locationInput = document.getElementById("location");
  
  if (!navigator.geolocation) {
    alert("Geolocation is not supported by your browser");
    return;
  }

  if (locationInput) {
    locationInput.value = "Detecting...";
  }

  navigator.geolocation.getCurrentPosition(
    position => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      // Try to get city name using reverse geocoding (simplified)
      if (locationInput) {
        locationInput.value = `Lat: ${lat.toFixed(2)}, Lon: ${lon.toFixed(2)}`;
      }
      
      console.log("Location detected:", lat, lon);
    },
    error => {
      console.error("Location detection failed:", error);
      alert("Unable to detect your location. Please enter it manually.");
      if (locationInput) {
        locationInput.value = "";
      }
    }
  );
}


/* =========================
   EVENT DELEGATION & GLOBAL HANDLERS
========================= */

document.addEventListener('click', function(e) {
  const target = e.target.closest('[data-action]');
  
  // Handle data-action attributes
  if (target) {
    const action = target.dataset.action;
    const payload = target.dataset.payload;
    
    handleAction(action, payload, e);
    return;
  }

  // Close dropdowns on outside click
  const langDropdown = document.getElementById('langDropdown');
  if (langDropdown && !langDropdown.contains(e.target)) {
    langDropdown.classList.remove('open');
  }

  const notifDropdown = document.getElementById('notificationDropdown');
  if (notifDropdown && !notifDropdown.contains(e.target)) {
    notifDropdown.classList.remove('open');
  }
});

function handleAction(action, payload, event) {
  switch (action) {
    case 'navigate':
      if (payload) navigate(payload);
      break;
    case 'startQuiz':
      startQuiz();
      break;
    case 'selectExperience':
      if (payload) selectExperience(payload);
      break;
    case 'selectInterest':
      if (payload) selectInterest(payload);
      break;
    case 'goToStep1':
      goToStep1();
      break;
    case 'goToStep2':
      goToStep2();
      break;
    case 'showResults':
      showResults();
      break;
    case 'restart':
      restart();
      break;
    case 'applyToJob':
      if (payload) applyToJob(parseInt(payload));
      break;
    case 'toggleNotifications':
      toggleNotifications();
      break;
    case 'toggleLangDropdown':
      toggleLangDropdown();
      break;
    case 'detectLocation':
      detectLocation();
      break;
    case 'filterCategory':
      if (payload) filterByCategory(payload);
      break;
    default:
      console.warn(`Unknown action: ${action}`);
  }
}


/* =========================
   JOB SEARCH & FILTER
========================= */

function filterByCategory(category) {
  state.filters.category = category;
  displayMatchedJobs(false);
}

function searchJobsLive(query) {
  state.filters.searchQuery = query;
  displayMatchedJobs(false);
}

/* =========================
   INITIALIZE ON LOAD
========================= */

document.addEventListener('DOMContentLoaded', function() {
  console.log('KaushalPath - SPA Initialized');
  console.log('State Management Active');
  
  // Initialize to landing page
  navigate('landing');
  
  // Initialize quiz button states
  setTimeout(() => {
    updateQuizButtons();
  }, 500);
  
  // Apply smooth transitions to all screens
  document.querySelectorAll('.screen').forEach(screen => {
    screen.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
  });
  
  // Listen for language change events from I18n module
  window.addEventListener('languagechange', (event) => {
    const newLang = event.detail?.language;
    if (newLang && newLang !== state.currentLanguage) {
      state.currentLanguage = newLang;
      console.log(`[State] Language synced: ${newLang}`);
    }
  });
  
  console.log('✓ Navigation system ready');
  console.log('✓ Event delegation active');
  console.log('✓ State management initialized');
  console.log('✓ i18n system integrated');
});
