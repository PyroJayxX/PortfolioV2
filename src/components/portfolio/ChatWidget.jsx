import { useEffect, useRef, useState } from 'react';
import '../../chat-widget.css';

const GEMINI_SYSTEM_PROMPT = `System Prompt: Edrill's Portfolio Assistant 

Role and Identity:
You are the AI portfolio assistant for Edrill Bilan. You are a helpful guide for visitors to his portfolio website. You are not Edrill. You must always refer to Edrill in the third person (he, his, Edrill) and refer to yourself as the portfolio assistant.

Tone, Communication Style, and STRICT Formatting Rules
1. Professional yet approachable: Be polite, helpful, and enthusiastic about Edrill's technical skills and projects.
2. STRICT PLAIN TEXT ONLY: You must absolutely avoid using any Markdown formatting. Do not use asterisks for bolding, underscores for italics, or markup for bulleted/numbered lists. Present all information in natural, conversational, plain text.
3. Technical and precise: When providing code or configurations to users, prioritize clean, ready-to-use snippets. Strict Rule: Never use inline comments in code configurations, and do not include text prefixes right before configuration blocks.
4. Focused scope: When discussing Edrill's group projects or presentations, strictly only discuss Edrill's specific topics and contributions. Do not elaborate on what other group members covered.

Knowledge Base: Background, Education, and Location
Edrill is a BS Computer Science student at Pamantasan ng Lungsod ng Maynila, expecting to graduate in August 2026, and is a Dean's Lister. Prior to this, he graduated with High Honors in the STEM strand from Universidad de Manila. He also volunteered for the Google Developer Student Club (GDSC) on both their Design and Branding team and Web Development team. Edrill lives in Metro Manila and is open to work opportunities in the area. 

Work Style
He is highly adaptable to thriving environments. He loves collaboration and working in teams, but equally loves working at his own pace independently.

Knowledge Base: Professional Experience
Edrill was an IT Service Management Intern at Goldilocks Bakeshop, Inc., where he assisted in maintaining IT infrastructure and providing technical support. He was also a Research Intern at the Computer Vision and Multimedia Laboratory at National Cheng Kung University (NCKU) in Taiwan (Always mention Taiwan if mentioning this). There, he conducted research for his undergraduate thesis, finetuning ResNet-50 with a lightweight transformer for Pulmonary Lung Nodule Detection on Chest X-ray images. 

Knowledge Base: Technical Skills
Edrill's programming languages include Java, SQL, C, Python, Go, x86 Assembly, JavaScript, TypeScript, HTML, and CSS. For backend development, he uses Django, Flask, Node.js, PostgreSQL, MySQL, and Firebase Realtime Database. His frontend and tooling experience includes React.js, Next.js, Tailwind CSS, JavaFX, Git, Android Studio, Figma, and Vercel.

Knowledge Base: Projects
1. Bilandog Corporation E-commerce Website (2025): A full-stack personal project using Django, Node.js, Next.js, and Tailwind CSS.
2. Fantasy Flip Memory Game Mobile Application (2024): He was the lead developer for this Android game using Java, XML, and Firebase.
3. University Irregular Enrollment System (2023): He was the frontend developer and designer for this JavaFX desktop application.
4. Dom Compiler (2025): A compiler project for a custom programming language he designed, built with Python.

Hobbies and Preferences
Edrill enjoys playing Sons of the Forest, Terraria, Minecraft, and Elden Ring: Nightreign. He also has a fondness for space and astronomy, which is reflected in the space-themed design of his portfolio website. He also applied his networking skills to setting up personal servers on Terraria and Minecraft.

Behavioral Guidelines & STRICT LENGTH LIMIT
If a visitor asks a question outside of this provided context, politely steer the conversation back to Edrill's professional portfolio, projects, or technical interests. 
CRITICAL RULE: You must keep your answers extremely brief. Limit every response to 2 to 5 short sentences maximum. Never output long paragraphs.`;

async function fetchGeminiResponse(userMessage) {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  if (!apiKey) {
    return 'Gemini is not configured yet. Add VITE_GEMINI_API_KEY to your environment and reload the app.';
  }

  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      systemInstruction: {
        parts: [{ text: GEMINI_SYSTEM_PROMPT }]
      },
      contents: [
        {
          role: 'user',
          parts: [{ text: userMessage }]
        }
      ],
      generationConfig: {
        temperature: 0.7,
        topP: 0.9,
        maxOutputTokens: 1024
      }
    })
  });

  if (!response.ok) {
    let detail = '';
    try {
      const errorJson = await response.json();
      detail = errorJson?.error?.message || '';
    } catch {
      detail = '';
    }
    const message = detail || `Gemini request failed with status ${response.status}`;
    throw new Error(message.replace(/\s+/g, ' ').trim());
  }

  const data = await response.json();
  const text = data?.candidates?.[0]?.content?.parts
    ?.map((part) => part?.text || '')
    .join('')
    .trim();

  if (!text) {
    return 'I am online, but I could not produce a response for that prompt.';
  }

  return text;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      role: 'assistant',
      text: 'Hi, I am Edrill\'s AI portfolio assistant. Feel free to ask me anything!',
      isTyping: false,
      displayText: 'Hi, I am Edrill\'s AI portfolio assistant. Feel free to ask me anything!'
    }
  ]);
  const [typingMessageId, setTypingMessageId] = useState(null);
  const messageAreaRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    const area = messageAreaRef.current;
    if (area) area.scrollTop = area.scrollHeight;
  }, [messages, isOpen]);

  useEffect(() => {
    if (!typingMessageId) return;

    const message = messages.find((msg) => msg.id === typingMessageId);
    if (!message || !message.isTyping || message.displayText.length >= message.text.length) {
      setTypingMessageId(null);
      return;
    }

    const timeout = setTimeout(() => {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === typingMessageId
            ? { ...msg, displayText: message.text.slice(0, message.displayText.length + 1) }
            : msg
        )
      );
    }, 15);

    return () => clearTimeout(timeout);
  }, [typingMessageId, messages]);

  const sendMessage = async () => {
    const trimmed = inputValue.trim();
    if (!trimmed || isLoading) return;

    const userMessage = {
      id: `${Date.now()}-user`,
      role: 'user',
      text: trimmed
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetchGeminiResponse(trimmed);
      const messageId = `${Date.now()}-assistant`;
      setMessages((prev) => [
        ...prev,
        {
          id: messageId,
          role: 'assistant',
          text: response,
          isTyping: true,
          displayText: ''
        }
      ]);
      setTypingMessageId(messageId);
    } catch (error) {
      const errorMessage = error instanceof Error
        ? error.message
        : 'I could not generate a response right now. Please try again.';
      setMessages((prev) => [
        ...prev,
        {
          id: `${Date.now()}-assistant-error`,
          role: 'assistant',
          text: errorMessage,
          isTyping: false,
          displayText: errorMessage
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="portfolio-chat-widget" aria-live="polite">
      {!isOpen && (
        <button
          type="button"
          className="portfolio-chat-toggle"
          onClick={() => setIsOpen(true)}
          aria-label="Open chat"
        >
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
            <path d="M4 5.5A3.5 3.5 0 0 1 7.5 2h9A3.5 3.5 0 0 1 20 5.5v7A3.5 3.5 0 0 1 16.5 16H9l-4.8 4a.7.7 0 0 1-1.2-.54V5.5Z" fill="currentColor" />
          </svg>
        </button>
      )}

      {isOpen && (
        <section className="portfolio-chat-window" role="dialog" aria-label="Chat with Edrill's AI">
          <header className="portfolio-chat-header">
            <h3>Chat with Edrill's AI ASSISTANT</h3>
            <button
              type="button"
              className="portfolio-chat-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              ×
            </button>
          </header>

          <div className="portfolio-chat-messages" ref={messageAreaRef}>
            {messages.map((message) => (
              <div key={message.id} className={`portfolio-chat-message ${message.role}`}>
                {message.displayText || message.text}
                {message.isTyping && message.displayText.length < message.text.length && (
                  <span className="portfolio-chat-cursor">▌</span>
                )}
              </div>
            ))}
            {isLoading && <div className="portfolio-chat-message assistant">Thinking...</div>}
          </div>

          <div className="portfolio-chat-input-row">
            <input
              type="text"
              className="portfolio-chat-input"
              placeholder="Ask about projects, thesis, or skills"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              type="button"
              className="portfolio-chat-send"
              onClick={sendMessage}
              disabled={isLoading || !inputValue.trim()}
            >
              Send
            </button>
          </div>
        </section>
      )}
    </div>
  );
}
