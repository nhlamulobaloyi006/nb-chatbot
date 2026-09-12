# 🤖 Mock Chatbot

A fully frontend chatbot built with **pure vanilla JavaScript** — no frameworks, no backend, no API keys, no nonsense. Just clean HTML, CSS, and JS doing what they do best.

Type a message, hit enter, and the bot fires back a randomized reply from a massive hand-picked library of responses. It even *types* before it answers — so it actually feels alive.

🔗 **Live:** https://nb-chatbot.vercel.app/
📦 **Repo:** https://github.com/nhlamulobaloyi006/nb-chatbot.git

## ✨ Features

- 💬 **Real chat experience** — sent messages appear on the right, bot replies on the left
- 🎲 **Randomized replies** — every message pulls from a huge pool of responses, so it never feels repetitive
- ⌨️ **Typing indicator** — the bot shows "Typing...." before replying (because instant replies feel robotic)
- ⏱️ **Simulated delay** — 1-second delay makes it feel like the bot is actually thinking
- 🔒 **Smart input validation** — the send button stays disabled until you actually type something
- ⚡ **Enter to send** — no need to click, just hit Enter and go
- 📜 **Auto-scroll** — the chat always scrolls to the latest message
- 🎨 **Clean message bubbles** — separate styles for sent vs. received messages
- 📱 **Responsive layout** — works on any screen

## 🧠 How It Works

1. User types a message
2. Input is validated live (button disabled if empty)
3. On submit → user message renders as a bubble on the right
4. Bot shows a "Typing...." indicator
5. After 1 second, a random reply from `replies.js` appears on the left
6. Chat auto-scrolls to the newest message

## 📁 Project Structure

```
nb-chatbot/
├── index.html
├── styles.css
├── app.js
├── replies.js     # the reply library
└── README.md
```

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/nhlamulobaloyi006/nb-chatbot.git
cd nb-chatbot
```

### 2. Open it

Double-click `index.html`, or use a live server:

```bash
npx serve .
```

That's it. No installs, no build step.

## 🛠️ Built With

- **HTML5** — semantic chat UI
- **CSS3** — bubble layout, animations, responsive design
- **Vanilla JavaScript** — async/await, Promises, DOM manipulation, event listeners
- **`replies.js`** — a huge hand-curated array of 200+ bot responses

## 🎨 Customization

### Add your own replies

Just drop more strings into the `replies` array in `replies.js`:

```js
export let replies = [
  "Hey there!",
  "What's up?",
  // add as many as you want
];
```

The bot picks a random one every time — no other changes needed.

### Change the reply delay

In `app.js`, tweak the `setTimeout` value:

```js
setTimeout(() => { /* reply */ }, 1000); // 1000ms = 1 second
```

### Change the typing indicator text

Search for `"Typing...."` in `app.js` and replace it with whatever you want.

## 💡 Cool Things Under the Hood

- Uses `Promise` + `async/await` for the reply flow
- `scrollIntoView({ behavior: "smooth" })` for that smooth scroll feel
- `overflowWrap: "break-word"` so long messages never break the layout
- Input validation runs on every keystroke for a snappy UX
- Enter key triggers send — no mouse required

## 🗺️ Possible Improvements

- [ ] Save chat history to `localStorage`
- [ ] Keyword-based replies (not just random)
- [ ] Multiple personalities / moods
- [ ] Connect to a real AI API (OpenAI, Gemini)
- [ ] Voice input
- [ ] Export chat as text

## 📜 License

MIT — do whatever you want with it.

---

**Made with 🤖 and vanilla JS by Nhlamulo Baloyi**
