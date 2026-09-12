# 🤖 Mock Chatbot

A lightweight, frontend-only chatbot built with vanilla JavaScript. No frameworks, no backend, no API keys — just good old HTML, CSS, and JS. The bot replies from a curated array of mock responses to simulate a real conversational experience.

## ✨ Features

- 💬 Interactive chat UI
- 🎲 Randomized mock replies (feels less repetitive)
- ⚡ Zero dependencies — pure vanilla JS
- 🎨 Easy to customize responses & styling
- 📱 Responsive layout
- 🚀 No build step — just open `index.html`

## 🖥️ Demo

🔗 **Live Demo:** https://nb-chatbot.vercel.app/

## 📁 Project Structure

```
nb-chatbot/
├── index.html
├── style.css
├── replies.js        # replies array
├── app.js            # chat logic
└── README.md
```

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/nhlamulobaloyi006/nb-chatbot.git
cd nb-chatbot
```

### 2. Run it

Just open `index.html` in your browser. That's it.

Or use a live server if you prefer:

```bash
npx serve .
```

## 🧠 How It Works

1. User types a message and hits **Send**.
2. The message is appended to the chat window.
3. A random reply is picked from the `replies` array in `replies.js`.
4. The bot's reply is displayed after a short delay (typing effect optional).

```js
import { replies } from "./replies.js";

function getRandomReply() {
  return replies[Math.floor(Math.random() * replies.length)];
}
```

## 🛠️ Customization

### Add your own replies

Edit `replies.js`:

```js
export let replies = [
  "Hey there!",
  "What's up?",
  "Nice to meet you!",
  // add as many as you want
];
```

### Change the styling

Tweak `style.css` — colors, fonts, bubble shapes, animations, whatever.

### Change the reply delay

In `app.js`, adjust the `setTimeout` value (in milliseconds).

## 🗺️ Roadmap / Ideas

- [ ] Keyword-based replies (not just random)
- [ ] Typing indicator
- [ ] Message timestamps
- [ ] Save chat history to `localStorage`
- [ ] Dark mode toggle
- [ ] Connect to a real AI API (OpenAI, Gemini, etc.)

## 🤝 Contributing

PRs are welcome! If you want to add features or improve the UI:

1. Fork the repo
2. Create a branch (`git checkout -b feature/cool-thing`)
3. Commit (`git commit -m "Add cool thing"`)
4. Push (`git push origin feature/cool-thing`)
5. Open a Pull Request

## 📜 License

MIT — do whatever you want with it.

## 🙌 Acknowledgements

- Inspired by every chatbot ever
- Built with ☕ and vanilla JS

---

**Made with 💙 by Nhlamulo Baloyi**
