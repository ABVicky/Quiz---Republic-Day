# 🇮🇳 Digital Marketing Freedom Quiz — Live Multiplayer Game Show

[![Live Demo](https://img.shields.io/badge/Live-GitHub%20Pages-FF9933?style=for-the-badge&logo=github)](https://abvicky.github.io/Quiz---Republic-Day/)
[![Author: Vicky Prasad Mahato](https://img.shields.io/badge/Author-Vicky%20Prasad%20Mahato-00F0FF?style=for-the-badge)](https://github.com/ABVicky)
[![License: MIT](https://img.shields.io/badge/License-MIT-10B981?style=for-the-badge)](LICENSE)
[![Stack: HTML5/CSS3/JS](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20JS-138808?style=for-the-badge)](index.html)

An electrifying, **Kahoot-style live multiplayer web application** designed for Indian Independence Day digital marketing competitions. Designed for classroom **Smartboards/Projectors** while students participate in real-time using their **Mobile Smartphones** via a zero-backend **WebRTC (PeerJS)** architecture.

---

## 👨‍💻 Credits & Attribution

> **Designed, Developed & Ideated by [Vicky Prasad Mahato](https://github.com/ABVicky)**

---

## 🌟 Key Features

### 📺 Smartboard Host View (Projector / Laptop)
- **Instant Room Creation & QR Code**: Automatically generates a 4-digit Room PIN and scannable QR Code (`qrcode.js`).
- **Live Player Lobby**: Displays real-time connected player avatars as students join from their phones.
- **Dynamic Question Stage**: Features a high-contrast question card, 4 color-coded shape options (▲ Red A, ◆ Blue B, ● Saffron C, ■ Green D), and a circular countdown timer.
- **Answer Distribution Bar Charts**: Displays live bar chart analytics showing how many students picked A, B, C, or D once the timer expires.
- **⚡ "Fastest Warrior" Speed Spotlight**: Automatically highlights the student who answered correctly in the shortest time (e.g. *"Fastest Answer: Alex — 1.2s"*).
- **🎵 Live FX Soundboard**: Integrated host soundboard panel for manual sound triggers (Drumroll 🥁, Applause 👏, Victory Fanfare 🎺, Speed Alarm ⚡, Bell Ring 🔔, Confetti Burst 🎉).
- **📥 CSV Scorecard Export**: Download full leaderboard results (`freedom_quiz_scorecard.csv`) with ranks, scores, and highest streaks for event records.

### 📱 Mobile Student Controller View (Smartphones)
- **Zero App Download**: Students join instantly by scanning the QR Code or visiting `https://abvicky.github.io/Quiz---Republic-Day/?join=PIN`.
- **3D Tactile Controller**: Converts the phone screen into a 4-button 3D touch controller with active drop-shadow physics.
- **Kahoot-Style Speed Scoring**: Earn up to 1,000 points per question based on response speed.
- **🔥 Streak Bonus Multiplier**: Tracks consecutive correct answers and awards extra streak bonus points (+500 pts max).
- **Mobile Haptic Feedback**: Vibrates phone touch pads on selection and celebratory double-vibrations for correct answers.
- **💬 Floating Emoji Reaction Stream**: Tap live emojis (🔥, 👏, ❤️, 🚀, 🇮🇳) on your phone to float reaction icons on the Host Smartboard in real time!

---

## 📚 Game Structure & Questions Matrix

The competition consists of **36 questions** divided into **5 high-energy rounds**:

| Round | Subject Area | Questions | Accent Color |
| :--- | :--- | :--- | :--- |
| **Round 1** | Content Creation | Q1 – Q8 | Saffron (`#FF9933`) |
| **Round 2** | Meta Ads | Q9 – Q16 | India Green (`#138808`) |
| **Round 3** | Google Ads | Q17 – Q24 | Navy Blue (`#000080`) |
| **Round 4** | Social Media Management | Q25 – Q32 | Tricolour Glow (`#FFFFFF`) |
| **Round 5** | Bonus / Tie-Breaker | Q33 – Q36 | Electric Gold (`#FFD700`) |

> 🎲 **Option Shuffling Engine**: For every question, the 4 choices are dynamically shuffled on load so answer position (A/B/C/D) is evenly distributed while maintaining answer key accuracy.

---

## 🎮 How to Host a Live Event

### For Teachers & Event Hosts:
1. Open [https://abvicky.github.io/Quiz---Republic-Day/](https://abvicky.github.io/Quiz---Republic-Day/) on your laptop connected to the projector/smartboard.
2. Click **HOST GAME SHOW 🚀**.
3. A 4-digit **Room PIN** and **QR Code** will be displayed on the screen.
4. Once students have joined the lobby, click **START GAME SHOW 🚀** to launch Round 1!
5. Use the **`🎵 FX SOUNDS`** panel to trigger drumrolls, applause, and fanfare during reveals!

### For Students:
1. Open your camera app and scan the **QR Code** on the smartboard (or type the URL into your browser).
2. Enter your **Nickname** and click **JOIN ARENA 🚀**.
3. Look at the smartboard for the question, then tap **▲ A**, **◆ B**, **● C**, or **■ D** on your phone!

---

## ⌨️ Keyboard Shortcuts Reference

| Shortcut | Action |
| :--- | :--- |
| <kbd>Space</kbd> | Start / Pause Countdown Timer |
| <kbd>N</kbd> | Next Question |
| <kbd>P</kbd> | Previous Question |
| <kbd>L</kbd> | Open Live Leaderboard |
| <kbd>F</kbd> | Toggle Fullscreen Mode |
| <kbd>M</kbd> | Mute / Unmute Audio Synthesizer |

---

## 🚀 Deployment Instructions (GitHub Pages)

This project runs 100% client-side with zero backend dependencies. To host your own copy:

```bash
# 1. Clone the repository
git clone https://github.com/ABVicky/Quiz---Republic-Day.git
cd Quiz---Republic-Day

# 2. Make your edits and push changes
git add .
git commit -m "Update watermark and credits"
git push origin main
```

To enable GitHub Pages:
1. Go to your repository **Settings** -> **Pages**.
2. Select `main` branch and `/ (root)` directory.
3. Click **Save**.

---

## 🛠️ Technology Stack

- **Frontend**: HTML5, Vanilla CSS3 (Glassmorphism, Cyberpunk UI), Vanilla JavaScript (ES6+).
- **Real-Time Sync**: PeerJS (WebRTC Data Channels) — zero server costs!
- **QR Code Generator**: QRCode.js (`qrcode.min.js`).
- **Audio & Visual FX**: Web Audio API Synthesizer, 60fps HTML5 Canvas Particle Engine, Canvas Confetti Cannon.

---

## 🇮🇳 Slogan & Motto

> *"Freedom to Learn. Freedom to Create. Freedom to Grow. 🇮🇳"*
