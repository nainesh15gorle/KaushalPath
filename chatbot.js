/**
 * KaushalPath - AI Chatbot
 * Intelligent assistant for job and training queries
 * Powered by ChatGPT
 */

const Chatbot = (function() {
  let isOpen = false;
  let conversationHistory = [];  // For UI display
  let chatGPTMessages = [];       // For ChatGPT API context
  
  // Backend API Configuration
  const BACKEND_API_URL = 'http://localhost:3000/api/chatbot';
  
  // System prompt for ChatGPT
  const SYSTEM_PROMPT = `You are kaushalPath, a helpful AI assistant for a job and training platform in India. 
You specialize in helping users find:
- Jobs in skilled trades (electrical, plumbing, HVAC, welding)
- Training and certification programs
- Career guidance and salary information

Key information:
- Entry-level positions: ₹25,000-₹40,000/month
- Experienced roles: ₹60,000-₹1,00,000+/month
- Available fields: Electrical, Plumbing, HVAC, Welding
- Training programs available from beginner to advanced

Be friendly, concise, and helpful. Keep responses brief (2-3 sentences max unless more detail is needed).
Always respond in the same language the user writes in.`;

  /**
   * Initialize chatbot
   */
  function init() {
    createChatbotUI();
    attachEventListeners();
    console.log('[Chatbot] Initialized');
  }

  /**
   * Create chatbot UI elements
   */
  function createChatbotUI() {
    const chatbotHTML = `
      <!-- Chatbot Toggle Button -->
      <button class="chatbot-toggle" id="chatbotToggle" aria-label="Open chat">
        <svg class="chatbot-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
        <svg class="chatbot-close-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
        <span class="chatbot-badge">1</span>
      </button>

      <!-- Chatbot Window -->
      <div class="chatbot-window" id="chatbotWindow">
        <div class="chatbot-header">
          <div class="chatbot-header-info">
            <div class="chatbot-avatar">🤖</div>
            <div>
              <div class="chatbot-title">kaushalPath</div>
              <div class="chatbot-status">
                <span class="status-dot"></span>
                <span>Online</span>
              </div>
            </div>
          </div>
          <button class="chatbot-minimize" onclick="Chatbot.toggle()" aria-label="Close chat">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <div class="chatbot-messages" id="chatbotMessages">
          <div class="chatbot-message bot-message">
            <div class="message-avatar">🤖</div>
            <div class="message-content">
              <div class="message-bubble">
                Hello! I'm your kaushalPath assistant. I can help you find jobs, training programs, or answer career questions. How can I assist you today?
              </div>
              <div class="message-time">${getCurrentTime()}</div>
            </div>
          </div>
        </div>

        <div class="chatbot-quick-actions" id="quickActions">
          <button class="quick-action-btn" onclick="Chatbot.sendQuickReply('Show me jobs')">
            💼 Find Jobs
          </button>
          <button class="quick-action-btn" onclick="Chatbot.sendQuickReply('Training programs')">
            📚 Training
          </button>
          <button class="quick-action-btn" onclick="Chatbot.sendQuickReply('Help me')">
            ❓ Help
          </button>
        </div>

        <div class="chatbot-input-wrapper">
          <textarea 
            class="chatbot-input" 
            id="chatbotInput" 
            placeholder="Type your message..."
            rows="1"
          ></textarea>
          <button class="chatbot-send" id="chatbotSend" aria-label="Send message">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="22" y1="2" x2="11" y2="13"/>
              <polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
          </button>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', chatbotHTML);
  }

  /**
   * Attach event listeners
   */
  function attachEventListeners() {
    const toggleBtn = document.getElementById('chatbotToggle');
    const input = document.getElementById('chatbotInput');
    const send = document.getElementById('chatbotSend');

    toggleBtn.addEventListener('click', toggle);
    send.addEventListener('click', sendMessage);
    
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    });

    // Auto-resize textarea
    input.addEventListener('input', () => {
      input.style.height = 'auto';
      input.style.height = Math.min(input.scrollHeight, 120) + 'px';
    });
  }

  /**
   * Toggle chatbot visibility
   */
  function toggle() {
    isOpen = !isOpen;
    const window = document.getElementById('chatbotWindow');
    const toggleBtn = document.getElementById('chatbotToggle');
    const badge = toggleBtn.querySelector('.chatbot-badge');

    if (isOpen) {
      window.classList.add('open');
      toggleBtn.classList.add('open');
      badge.style.display = 'none';
      document.getElementById('chatbotInput').focus();
    } else {
      window.classList.remove('open');
      toggleBtn.classList.remove('open');
    }
  }

  /**
   * Send user message
   */
  async function sendMessage() {
    const input = document.getElementById('chatbotInput');
    const message = input.value.trim();

    if (!message) return;

    // Add user message
    addMessage(message, 'user');
    input.value = '';
    input.style.height = 'auto';

    // Show typing indicator
    showTypingIndicator();

    // Generate response using ChatGPT
    try {
      const response = await generateResponse(message);
      removeTypingIndicator();
      addMessage(response, 'bot');
    } catch (error) {
      removeTypingIndicator();
      addMessage("Sorry, something went wrong. Please try again.", 'bot');
      console.error('[Chatbot] Send message error:', error);
    }
  }

  /**
   * Send quick reply
   */
  function sendQuickReply(message) {
    const input = document.getElementById('chatbotInput');
    input.value = message;
    sendMessage();
  }

  /**
   * Add message to chat
   */
  function addMessage(text, sender) {
    const messagesContainer = document.getElementById('chatbotMessages');
    const messageClass = sender === 'user' ? 'user-message' : 'bot-message';
    const avatar = sender === 'user' ? '👤' : '🤖';

    const messageHTML = `
      <div class="chatbot-message ${messageClass}">
        ${sender === 'bot' ? `<div class="message-avatar">${avatar}</div>` : ''}
        <div class="message-content">
          <div class="message-bubble">${text}</div>
          <div class="message-time">${getCurrentTime()}</div>
        </div>
        ${sender === 'user' ? `<div class="message-avatar">${avatar}</div>` : ''}
      </div>
    `;

    messagesContainer.insertAdjacentHTML('beforeend', messageHTML);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    // Store in history
    conversationHistory.push({ sender, text, time: new Date() });
  }

  /**
   * Show typing indicator
   */
  function showTypingIndicator() {
    const messagesContainer = document.getElementById('chatbotMessages');
    const typingHTML = `
      <div class="chatbot-message bot-message typing-indicator" id="typingIndicator">
        <div class="message-avatar">🤖</div>
        <div class="message-content">
          <div class="message-bubble">
            <div class="typing-dots">
              <span></span><span></span><span></span>
            </div>
          </div>
        </div>
      </div>
    `;
    messagesContainer.insertAdjacentHTML('beforeend', typingHTML);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  /**
   * Remove typing indicator
   */
  function removeTypingIndicator() {
    const indicator = document.getElementById('typingIndicator');
    if (indicator) indicator.remove();
  }

  /**
   * Generate bot response using ChatGPT API
   */
  async function generateResponse(message) {
    // Add user message to ChatGPT context
    chatGPTMessages.push({
      role: 'user',
      content: message
    });

    // Keep only last 10 messages for context (to manage token usage)
    const recentHistory = chatGPTMessages.slice(-10);

    try {
      console.log('[Chatbot] Sending request to backend...');
      
      const response = await fetch(BACKEND_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...recentHistory
          ]
        })
      });

      console.log('[Chatbot] Response status:', response.status);

      if (!response.ok) {
        let errorData;
        try {
          errorData = await response.json();
        } catch (e) {
          errorData = { error: await response.text() };
        }
        console.error('[Chatbot] API Error:', errorData);
        
        throw new Error(errorData.error || 'API request failed');
      }

      const data = await response.json();
      console.log('[Chatbot] Received response from OpenAI');
      
      const assistantMessage = data.choices[0].message.content.trim();

      // Add assistant response to ChatGPT context
      chatGPTMessages.push({
        role: 'assistant',
        content: assistantMessage
      });

      return assistantMessage;
    } catch (error) {
      console.error('[Chatbot] Error generating response:', error);
      
      // Provide more specific error messages
      if (error.message.includes('Failed to fetch')) {
        return "⚠️ Network error: Unable to connect to the backend server. Please make sure the backend is running on http://localhost:3000";
      } else {
        return `⚠️ ${error.message}. Please try again.`;
      }
    }
  }

  /**
   * Get current time formatted
   */
  function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
  }

  // Public API
  return {
    init,
    toggle,
    sendMessage,
    sendQuickReply
  };
})();

// Initialize chatbot when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', Chatbot.init);
} else {
  Chatbot.init();
}
