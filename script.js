/**
 * 🇮🇳 DIGITAL MARKETING FREEDOM QUIZ - ULTIMATE MULTIPLAYER GAME SHOW ENGINE
 * Independence Day Special • GitHub Pages + WebRTC + Soundboard & CSV Export
 * Designed, Developed & Ideated by Vicky Prasad Mahato (https://abvicky.in)
 */

// ==========================================================================
// 1. QUESTION DATABASE (36 QUESTIONS ACROSS 5 ROUNDS)
// ==========================================================================
const RAW_QUESTIONS = [
    // --- ROUND 1: CONTENT CREATION (Q1 - Q8) ---
    { id: 1, round: 1, roundName: "CONTENT CREATION", tagline: "Hook the Audience. Deliver Value.", question: "Which content format is generally most effective for quickly demonstrating a product or process on social media?", options: ["Short-form video", "Long-form whitepaper", "Plain spreadsheet", "Email signature"], correctText: "Short-form video" },
    { id: 2, round: 1, roundName: "CONTENT CREATION", tagline: "Hook the Audience. Deliver Value.", question: "What is the primary purpose of a content hook at the beginning of a social media post or video?", options: ["Capture attention", "Increase file size", "Hide the brand name", "Replace the call to action"], correctText: "Capture attention" },
    { id: 3, round: 1, roundName: "CONTENT CREATION", tagline: "Hook the Audience. Deliver Value.", question: "Which element most directly tells a social media audience what action to take next?", options: ["Call to action", "Color palette", "Font family", "Image resolution"], correctText: "Call to action" },
    { id: 4, round: 1, roundName: "CONTENT CREATION", tagline: "Hook the Audience. Deliver Value.", question: "A content creator wants to understand which topics resonate most with an audience before producing more content. What should they examine first?", options: ["Content performance data", "Office furniture", "Computer wallpaper", "File naming style"], correctText: "Content performance data" },
    { id: 5, round: 1, roundName: "CONTENT CREATION", tagline: "Hook the Audience. Deliver Value.", question: "Which approach is most likely to make educational social media content more engaging?", options: ["Use examples and practical takeaways", "Remove all structure", "Use unrelated information", "Avoid audience problems"], correctText: "Use examples and practical takeaways" },
    { id: 6, round: 1, roundName: "CONTENT CREATION", tagline: "Hook the Audience. Deliver Value.", question: "What is A/B testing in digital content marketing?", options: ["Comparing two versions to evaluate performance", "Publishing identical content twice without measurement", "Using two social media accounts", "Changing every element simultaneously"], correctText: "Comparing two versions to evaluate performance" },
    { id: 7, round: 1, roundName: "CONTENT CREATION", tagline: "Hook the Audience. Deliver Value.", question: "Which metric is most directly associated with how many people interacted with a social media post?", options: ["Engagement", "Impressions only", "Ad spend", "File size"], correctText: "Engagement" },
    { id: 8, round: 1, roundName: "CONTENT CREATION", tagline: "Hook the Audience. Deliver Value.", question: "Why is storytelling often used in brand content?", options: ["To create emotional and memorable connections", "To eliminate the need for visuals", "To guarantee viral reach", "To avoid understanding the audience"], correctText: "To create emotional and memorable connections" },

    // --- ROUND 2: META ADS (Q9 - Q16) ---
    { id: 9, round: 2, roundName: "META ADS", tagline: "Target. Advertise. Convert.", question: "In Meta Ads, which objective is most appropriate when the primary goal is to collect customer information through a lead form?", options: ["Leads", "Awareness", "Engagement", "Traffic"], correctText: "Leads" },
    { id: 10, round: 2, roundName: "META ADS", tagline: "Target. Advertise. Convert.", question: "What does CTR stand for in digital advertising?", options: ["Click-through rate", "Customer targeting ratio", "Campaign tracking result", "Creative testing reach"], correctText: "Click-through rate" },
    { id: 11, round: 2, roundName: "META ADS", tagline: "Target. Advertise. Convert.", question: "Which Meta Ads component determines who is eligible to see an advertisement based on selected audience characteristics?", options: ["Audience targeting", "Ad creative", "Caption grammar", "Landing page color"], correctText: "Audience targeting" },
    { id: 12, round: 2, roundName: "META ADS", tagline: "Target. Advertise. Convert.", question: "A Meta Ads campaign receives many impressions but very few clicks. Which metric should the marketer examine first?", options: ["CTR", "Office rent", "Employee count", "Inventory weight"], correctText: "CTR" },
    { id: 13, round: 2, roundName: "META ADS", tagline: "Target. Advertise. Convert.", question: "What is a retargeting audience primarily intended to reach?", options: ["People who previously interacted with a business", "People who have never seen a brand", "Only employees of the advertiser", "Only competing advertisers"], correctText: "People who previously interacted with a business" },
    { id: 14, round: 2, roundName: "META ADS", tagline: "Target. Advertise. Convert.", question: "Which creative element is most likely to communicate the core offer quickly in a Meta ad?", options: ["Clear visual and concise message", "A long unrelated paragraph", "A blank creative", "Hidden product information"], correctText: "Clear visual and concise message" },
    { id: 15, round: 2, roundName: "META ADS", tagline: "Target. Advertise. Convert.", question: "What is the main purpose of a Meta Ads landing page when an ad campaign is designed to generate conversions?", options: ["Guide visitors toward the desired conversion", "Distract visitors with unrelated content", "Hide the offer", "Prevent users from taking action"], correctText: "Guide visitors toward the desired conversion" },
    { id: 16, round: 2, roundName: "META ADS", tagline: "Target. Advertise. Convert.", question: "Which Meta Ads metric represents the average amount spent for each result generated by a campaign?", options: ["Cost per result", "Impressions", "Reach", "Frequency"], correctText: "Cost per result" },

    // --- ROUND 3: GOOGLE ADS (Q17 - Q24) ---
    { id: 17, round: 3, roundName: "GOOGLE ADS", tagline: "Capture Intent. Dominate Search.", question: "In Google Ads, which campaign type is primarily designed to show text ads in response to users' search queries?", options: ["Search", "Display", "App", "Shopping"], correctText: "Search" },
    { id: 18, round: 3, roundName: "GOOGLE ADS", tagline: "Capture Intent. Dominate Search.", question: "What is a keyword in the context of Google Search Ads?", options: ["A term used to help match ads with relevant searches", "A website color code", "An email password", "A social media follower count"], correctText: "A term used to help match ads with relevant searches" },
    { id: 19, round: 3, roundName: "GOOGLE ADS", tagline: "Capture Intent. Dominate Search.", question: "What does CPC mean in Google Ads?", options: ["Cost per click", "Campaign performance count", "Customer profile category", "Creative placement control"], correctText: "Cost per click" },
    { id: 20, round: 3, roundName: "GOOGLE ADS", tagline: "Capture Intent. Dominate Search.", question: "A Google Search ad has many impressions but a low CTR. What does this generally indicate?", options: ["The ad is receiving relatively few clicks compared with impressions", "Every impression became a conversion", "The campaign has no impressions", "The ad has zero visibility"], correctText: "The ad is receiving relatively few clicks compared with impressions" },
    { id: 21, round: 3, roundName: "GOOGLE ADS", tagline: "Capture Intent. Dominate Search.", question: "What is Quality Score primarily associated with in Google Ads?", options: ["The relevance and expected experience associated with a search ad", "The advertiser's office location", "The number of employees in a company", "The advertiser's social follower count"], correctText: "The relevance and expected experience associated with a search ad" },
    { id: 22, round: 3, roundName: "GOOGLE ADS", tagline: "Capture Intent. Dominate Search.", question: "What is a negative keyword used for in Google Search Ads?", options: ["Preventing ads from showing for unwanted search terms", "Increasing every keyword's search volume", "Changing the company logo", "Creating social media posts"], correctText: "Preventing ads from showing for unwanted search terms" },
    { id: 23, round: 3, roundName: "GOOGLE ADS", tagline: "Capture Intent. Dominate Search.", question: "Which Google Ads metric directly measures completed desired actions such as purchases or form submissions when conversion tracking is configured?", options: ["Conversions", "Impressions", "Frequency", "Ad position only"], correctText: "Conversions" },
    { id: 24, round: 3, roundName: "GOOGLE ADS", tagline: "Capture Intent. Dominate Search.", question: "Why is conversion tracking important in Google Ads?", options: ["It helps measure valuable actions generated by advertising", "It guarantees lower ad costs", "It automatically creates every ad", "It removes the need for keywords"], correctText: "It helps measure valuable actions generated by advertising" },

    // --- ROUND 4: SOCIAL MEDIA MANAGEMENT (Q25 - Q32) ---
    { id: 25, round: 4, roundName: "SOCIAL MEDIA MANAGEMENT", tagline: "Build Community. Manage Presence.", question: "Which social media management activity involves planning what content will be published and when?", options: ["Content calendar planning", "Password guessing", "Hardware repair", "Invoice printing"], correctText: "Content calendar planning" },
    { id: 26, round: 4, roundName: "SOCIAL MEDIA MANAGEMENT", tagline: "Build Community. Manage Presence.", question: "Why should a social media manager respond to relevant comments and messages?", options: ["To build relationships and address audience needs", "To guarantee every post goes viral", "To eliminate all negative opinions", "To increase the number of unrelated posts"], correctText: "To build relationships and address audience needs" },
    { id: 27, round: 4, roundName: "SOCIAL MEDIA MANAGEMENT", tagline: "Build Community. Manage Presence.", question: "Which metric is most useful for evaluating how many unique users were exposed to a social media post?", options: ["Reach", "Comments", "Shares", "Cost per click"], correctText: "Reach" },
    { id: 28, round: 4, roundName: "SOCIAL MEDIA MANAGEMENT", tagline: "Build Community. Manage Presence.", question: "A social media manager notices that posts receive high reach but very low engagement. What should they investigate first?", options: ["Content relevance and audience response", "Office lighting", "Printer speed", "Company parking capacity"], correctText: "Content relevance and audience response" },
    { id: 29, round: 4, roundName: "SOCIAL MEDIA MANAGEMENT", tagline: "Build Community. Manage Presence.", question: "What is social listening primarily used for?", options: ["Monitoring conversations and sentiment around relevant topics or brands", "Increasing computer storage", "Designing office furniture", "Printing advertisements"], correctText: "Monitoring conversations and sentiment around relevant topics or brands" },
    { id: 30, round: 4, roundName: "SOCIAL MEDIA MANAGEMENT", tagline: "Build Community. Manage Presence.", question: "Which practice helps maintain consistency when multiple people manage a brand's social media accounts?", options: ["Defined brand guidelines", "Changing the brand voice daily", "Avoiding all planning", "Using unrelated visual styles"], correctText: "Defined brand guidelines" },
    { id: 31, round: 4, roundName: "SOCIAL MEDIA MANAGEMENT", tagline: "Build Community. Manage Presence.", question: "Which social media metric is commonly used to measure the percentage of users who completed a desired action after interacting with a campaign or page?", options: ["Conversion rate", "Follower age", "Post dimensions", "Posting frequency alone"], correctText: "Conversion rate" },
    { id: 32, round: 4, roundName: "SOCIAL MEDIA MANAGEMENT", tagline: "Build Community. Manage Presence.", question: "A brand posts the same content on Instagram, Facebook, and LinkedIn without adapting the message or format. What is a potential weakness of this approach?", options: ["It may ignore platform-specific audience behavior", "It guarantees higher engagement", "It automatically improves targeting", "It guarantees more conversions"], correctText: "It may ignore platform-specific audience behavior" },

    // --- FINAL ROUND: BONUS / TIE-BREAKER (Q33 - Q36) ---
    { id: 33, round: 5, roundName: "BONUS / TIE-BREAKER", tagline: "High Stakes Digital Strategy.", question: "A digital marketer wants to know which ad campaign generated a website purchase. Which capability is most important?", options: ["Conversion and attribution tracking", "Changing the logo", "Increasing font size", "Deleting campaign data"], correctText: "Conversion and attribution tracking" },
    { id: 34, round: 5, roundName: "BONUS / TIE-BREAKER", tagline: "High Stakes Digital Strategy.", question: "Which statement best describes the relationship between organic social media and paid advertising?", options: ["They can support different but complementary marketing goals", "They are exactly the same activity", "Organic content can never support paid campaigns", "Paid advertising eliminates the need for content"], correctText: "They can support different but complementary marketing goals" },
    { id: 35, round: 5, roundName: "BONUS / TIE-BREAKER", tagline: "High Stakes Digital Strategy.", question: "Which of the following is the strongest example of a SMART marketing objective?", options: ["Generate 200 qualified leads from a campaign within 30 days", "Get more customers someday", "Make social media better", "Increase everything as much as possible"], correctText: "Generate 200 qualified leads from a campaign within 30 days" },
    { id: 36, round: 5, roundName: "BONUS / TIE-BREAKER", tagline: "High Stakes Digital Strategy.", question: "A company spends ₹10,000 on advertising and generates 100 purchases. What is the average advertising cost per purchase?", options: ["₹100", "₹10", "₹1,000", "₹10,000"], correctText: "₹100" }
];

// ==========================================================================
// 2. AUDIO SYNTHESIZER & FX SOUNDBOARD ENGINE
// ==========================================================================
class QuizSoundEngine {
    constructor() { this.ctx = null; this.muted = false; }
    init() { if (!this.ctx) { const AudioCtx = window.AudioContext || window.webkitAudioContext; this.ctx = new AudioCtx(); } }
    playTone(freq, type, duration, gainVal = 0.1) {
        if (this.muted) return;
        try {
            this.init();
            if (this.ctx.state === 'suspended') this.ctx.resume();
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = type; osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
            gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);
            osc.connect(gain); gain.connect(this.ctx.destination);
            osc.start(); osc.stop(this.ctx.currentTime + duration);
        } catch (e) {}
    }
    playTick() { this.playTone(600, 'sine', 0.05, 0.05); }
    playWarningTick() { this.playTone(900, 'square', 0.08, 0.08); }
    playCorrect() { [523, 659, 784, 1046].forEach((freq, idx) => setTimeout(() => this.playTone(freq, 'sine', 0.2, 0.12), idx * 80)); }
    playIncorrect() { this.playTone(180, 'sawtooth', 0.2, 0.15); setTimeout(() => this.playTone(140, 'sawtooth', 0.25, 0.15), 150); }
    playRoundSwoosh() {
        try {
            this.init(); const osc = this.ctx.createOscillator(); const gain = this.ctx.createGain();
            osc.type = 'sine'; osc.frequency.setValueAtTime(300, this.ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(900, this.ctx.currentTime + 0.3);
            gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.3);
            osc.connect(gain); gain.connect(this.ctx.destination);
            osc.start(); osc.stop(this.ctx.currentTime + 0.3);
        } catch (e) {}
    }
    playVictory() { [523, 659, 784, 1046, 784, 1046].forEach((freq, idx) => setTimeout(() => this.playTone(freq, 'triangle', 0.3, 0.15), idx * 120)); }
    
    // 🇮🇳 PATRIOTIC MELODY SYNTHESIZER: "SARE JAHAN SE ACHHA, HINDUSTAN HAMARA"
    playSareJahanSeAchha() {
        if (this.muted) return;
        try {
            this.init();
            if (this.ctx.state === 'suspended') this.ctx.resume();

            // 🇮🇳 Authentic Swara Frequencies (Key of C Major)
            const C4 = 261.63; // Sa
            const D4 = 293.66; // Re
            const E4 = 329.63; // Ga
            const F4 = 349.23; // Ma
            const G4 = 392.00; // Pa
            const A4 = 440.00; // Dha
            const B4 = 493.88; // Ni
            const C5 = 523.25; // Sa'

            // Iconic Melody Notes & Duration (seconds)
            const melody = [
                // 1. "Sā-re Ja-hāñ Se Acchā"
                { f: C4, d: 0.32 }, { f: D4, d: 0.32 }, { f: E4, d: 0.32 }, { f: F4, d: 0.32 },
                { f: G4, d: 0.50 }, { f: G4, d: 0.28 }, { f: A4, d: 0.35 }, { f: G4, d: 0.45 },

                // 2. "Hin-dus-tāñ Ha-mā-rā"
                { f: F4, d: 0.32 }, { f: E4, d: 0.32 }, { f: D4, d: 0.32 }, { f: E4, d: 0.32 },
                { f: F4, d: 0.40 }, { f: E4, d: 0.40 }, { f: D4, d: 0.40 }, { f: C4, d: 0.70 },

                // Breath pause
                { f: 0, d: 0.20 },

                // 3. "Hum Bul-bu-le Haiñ Is-kī"
                { f: G4, d: 0.32 }, { f: C5, d: 0.45 }, { f: C5, d: 0.32 }, { f: B4, d: 0.32 },
                { f: A4, d: 0.35 }, { f: G4, d: 0.45 }, { f: G4, d: 0.32 }, { f: A4, d: 0.32 }, { f: G4, d: 0.45 },

                // 4. "Ye Gul-si-tāñ Ha-mā-rā"
                { f: F4, d: 0.32 }, { f: E4, d: 0.32 }, { f: D4, d: 0.32 }, { f: E4, d: 0.32 },
                { f: F4, d: 0.40 }, { f: E4, d: 0.40 }, { f: D4, d: 0.40 }, { f: C4, d: 0.85 },

                // Breath pause
                { f: 0, d: 0.15 },

                // 5. "Sāre Jahāñ Se Acchā... HINDUSTAN HAMARA!" (Grand Patriotic Finale)
                { f: C4, d: 0.28 }, { f: D4, d: 0.28 }, { f: E4, d: 0.28 }, { f: F4, d: 0.28 },
                { f: G4, d: 0.45 }, { f: A4, d: 0.45 }, { f: C5, d: 0.90 }
            ];

            let currentTime = this.ctx.currentTime + 0.05;

            melody.forEach(note => {
                if (note.f > 0) {
                    // Primary Lead Synth (Warm Flute/Bansuri Tone)
                    const oscLead = this.ctx.createOscillator();
                    const gainLead = this.ctx.createGain();
                    oscLead.type = 'triangle';
                    oscLead.frequency.setValueAtTime(note.f, currentTime);

                    gainLead.gain.setValueAtTime(0.001, currentTime);
                    gainLead.gain.linearRampToValueAtTime(0.18, currentTime + 0.04);
                    gainLead.gain.exponentialRampToValueAtTime(0.001, currentTime + note.d);

                    oscLead.connect(gainLead);
                    gainLead.connect(this.ctx.destination);

                    oscLead.start(currentTime);
                    oscLead.stop(currentTime + note.d);

                    // Harmonium Warmth Sub-Oscillator (Octave lower)
                    const oscSub = this.ctx.createOscillator();
                    const gainSub = this.ctx.createGain();
                    oscSub.type = 'sine';
                    oscSub.frequency.setValueAtTime(note.f / 2, currentTime);

                    gainSub.gain.setValueAtTime(0.001, currentTime);
                    gainSub.gain.linearRampToValueAtTime(0.08, currentTime + 0.04);
                    gainSub.gain.exponentialRampToValueAtTime(0.001, currentTime + note.d);

                    oscSub.connect(gainSub);
                    gainSub.connect(this.ctx.destination);

                    oscSub.start(currentTime);
                    oscSub.stop(currentTime + note.d);
                }
                currentTime += note.d + 0.03;
            });
        } catch (e) {}
    }

    // FX SOUNDBOARD
    playDrumroll() {
        for (let i = 0; i < 20; i++) {
            setTimeout(() => this.playTone(120 + i * 5, 'square', 0.04, 0.08), i * 40);
        }
    }
    playApplause() {
        for (let i = 0; i < 30; i++) {
            setTimeout(() => this.playTone(300 + Math.random() * 400, 'sine', 0.06, 0.06), i * 35);
        }
    }
    playAlarm() {
        [800, 1200, 800, 1200].forEach((freq, i) => setTimeout(() => this.playTone(freq, 'sawtooth', 0.15, 0.12), i * 120));
    }
    playBell() {
        this.playTone(1500, 'sine', 0.8, 0.2);
    }
}

const audio = new QuizSoundEngine();

// ==========================================================================
// 3. CANVAS PARTICLE & CONFETTI SYSTEM
// ==========================================================================
let particles = [];
let confetti = [];

function initParticleCanvas() {
    const canvas = document.getElementById('particle-canvas');
    const ctx = canvas.getContext('2d');
    
    function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
    resize();
    window.addEventListener('resize', resize);

    const colors = ['#FF9933', '#FFFFFF', '#138808', '#00F0FF'];
    particles = [];
    for (let i = 0; i < 50; i++) {
        particles.push({
            x: Math.random() * canvas.width, y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.8, vy: (Math.random() - 0.5) * 0.8,
            radius: Math.random() * 2.5 + 1, color: colors[Math.floor(Math.random() * colors.length)]
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.x += p.vx; p.y += p.vy;
            if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = p.color; ctx.shadowBlur = 10; ctx.shadowColor = p.color;
            ctx.fill();
        });
        requestAnimationFrame(animate);
    }
    animate();
}

function triggerConfettiBurst() {
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth; canvas.height = window.innerHeight;

    const colors = ['#FF9933', '#FFFFFF', '#138808', '#FFD700', '#00F0FF'];
    confetti = [];
    for (let i = 0; i < 120; i++) {
        confetti.push({
            x: Math.random() * canvas.width, y: -20,
            vx: (Math.random() - 0.5) * 6, vy: Math.random() * 4 + 3,
            color: colors[Math.floor(Math.random() * colors.length)],
            size: Math.random() * 10 + 6, rotation: Math.random() * 360, rotSpeed: (Math.random() - 0.5) * 10
        });
    }

    let frames = 0;
    function renderConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        confetti.forEach(c => {
            c.x += c.vx; c.y += c.vy; c.rotation += c.rotSpeed;
            ctx.save(); ctx.translate(c.x, c.y); ctx.rotate((c.rotation * Math.PI) / 180);
            ctx.fillStyle = c.color; ctx.fillRect(-c.size / 2, -c.size / 2, c.size, c.size / 2);
            ctx.restore();
        });
        frames++;
        if (frames < 180) requestAnimationFrame(renderConfetti);
        else ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    renderConfetti();
}

function spawnFloatingEmoji(emojiSymbol) {
    const container = document.getElementById('floating-emojis-container');
    const el = document.createElement('div');
    el.className = 'floating-emoji';
    el.textContent = emojiSymbol;
    el.style.left = `${Math.random() * 160}px`;
    container.appendChild(el);
    setTimeout(() => el.remove(), 3000);
}

// ==========================================================================
// 4. MULTIPLAYER GAME STATE & PEERJS ENGINE
// ==========================================================================
let mode = null;
let roomPin = "";
let peer = null;
let hostConn = null;
let connectedPlayers = new Map();

let gameState = {
    currentQIndex: 0,
    questions: [],
    timerDuration: 20,
    timerRemaining: 20,
    timerRunning: false,
    timerInterval: null,
    qStartTime: 0
};

function prepareQuestions() {
    let cloned = JSON.parse(JSON.stringify(RAW_QUESTIONS));
    cloned.forEach(q => {
        const correctText = q.correctText;
        for (let i = q.options.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [q.options[i], q.options[j]] = [q.options[j], q.options[i]];
        }
        q.correctOptionIndex = q.options.findIndex(opt => opt === correctText);
    });
    return cloned;
}

function generateRoomPin() {
    return Math.floor(1000 + Math.random() * 9000).toString();
}

function showLandingScreen() {
    if (peer) { try { peer.destroy(); } catch (e) {} peer = null; }
    clearInterval(gameState.timerInterval);
    connectedPlayers.clear();

    document.querySelectorAll('.view-wrapper').forEach(vw => vw.classList.add('hidden'));
    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
    document.getElementById('screen-mode-select').classList.remove('hidden');
    document.getElementById('screen-mode-select').classList.add('active');
}

// ==========================================================================
// 5. HOST PEERJS ENGINE
// ==========================================================================
function initHostMode() {
    mode = 'host';
    roomPin = generateRoomPin();
    gameState.questions = prepareQuestions();

    document.getElementById('screen-mode-select').classList.add('hidden');
    document.getElementById('host-view').classList.remove('hidden');
    showHostScreen('host-lobby-screen');

    document.getElementById('hud-room-pin').textContent = roomPin;
    document.getElementById('lobby-room-pin').textContent = roomPin;

    const joinUrl = `${window.location.origin}${window.location.pathname}?join=${roomPin}`;
    document.getElementById('lobby-join-url').textContent = joinUrl;

    const qrContainer = document.getElementById('qrcode-container');
    qrContainer.innerHTML = '';
    new QRCode(qrContainer, { text: joinUrl, width: 180, height: 180, colorDark: "#000080", colorLight: "#ffffff" });

    const peerId = `dm-freedom-quiz-${roomPin}`;
    peer = new Peer(peerId);

    peer.on('open', (id) => console.log("Host Peer Ready:", id));
    peer.on('connection', (conn) => {
        conn.on('data', (data) => handleStudentMessage(conn, data));
        conn.on('close', () => removeStudentPlayer(conn.peer));
    });
}

function handleStudentMessage(conn, data) {
    if (data.type === 'JOIN_LOBBY') {
        connectedPlayers.set(conn.peer, {
            conn: conn, peerId: conn.peer, name: data.name || "Player",
            score: 0, currentAnswer: null, answerTime: 0, streak: 0
        });
        conn.send({ type: 'JOIN_SUCCESS', name: data.name, roomPin: roomPin });
        updateHostLobbyUI();
        audio.playTick();
    } 
    else if (data.type === 'SUBMIT_ANSWER') {
        const player = connectedPlayers.get(conn.peer);
        if (player && player.currentAnswer === null) {
            player.currentAnswer = data.optionIndex;
            player.answerTime = Date.now() - gameState.qStartTime;

            conn.send({ type: 'ANSWER_RECEIVED', optionIndex: data.optionIndex });
            updateSubmittedAnswersCounter();
            audio.playTick();
        }
    }
    else if (data.type === 'EMOJI_REACTION') {
        spawnFloatingEmoji(data.emoji);
    }
}

function removeStudentPlayer(peerId) {
    connectedPlayers.delete(peerId);
    updateHostLobbyUI();
}

function updateHostLobbyUI() {
    const container = document.getElementById('players-grid');
    document.getElementById('player-count').textContent = connectedPlayers.size;

    if (connectedPlayers.size === 0) {
        container.innerHTML = '<div class="empty-lobby-text">Waiting for warriors to join... 📱</div>';
        return;
    }

    container.innerHTML = '';
    connectedPlayers.forEach((p) => {
        const chip = document.createElement('div');
        chip.className = 'player-chip';
        chip.textContent = p.name;
        container.appendChild(chip);
    });
}

function broadcastToStudents(message) {
    connectedPlayers.forEach(p => { if (p.conn && p.conn.open) p.conn.send(message); });
}

function startHostGame() {
    if (connectedPlayers.size === 0) {
        const proceedAnyway = confirm("No students are currently in the lobby. Start in Solo Host Demo Mode?");
        if (!proceedAnyway) return;
    }
    loadHostQuestion(0);
}

function loadHostQuestion(qIndex) {
    if (qIndex < 0) qIndex = 0;
    if (qIndex >= gameState.questions.length) {
        showFinalVictoryScreen();
        return;
    }

    gameState.currentQIndex = qIndex;
    connectedPlayers.forEach(p => { p.currentAnswer = null; p.answerTime = 0; });

    // Direct Instant Transition to Question Stage
    renderHostQuestionStage(qIndex);
}

function renderHostQuestionStage(qIndex) {
    showHostScreen('host-question-screen');
    const q = gameState.questions[qIndex];

    document.getElementById('current-q-num').textContent = String(qIndex + 1).padStart(2, '0');
    document.getElementById('total-q-num').textContent = gameState.questions.length;
    document.getElementById('progress-bar-fill').style.width = `${((qIndex + 1) / gameState.questions.length) * 100}%`;
    document.getElementById('hud-round-number').textContent = `ROUND ${q.round}`;
    document.getElementById('hud-round-name').textContent = q.roundName;

    document.getElementById('q-category-tag').textContent = q.roundName;
    document.getElementById('q-number-pill').textContent = `Q${qIndex + 1}`;
    document.getElementById('host-question-text').textContent = q.question;

    const optionCards = document.querySelectorAll('#host-options-grid .option-card');
    optionCards.forEach((card, idx) => {
        card.querySelector('.option-text').textContent = q.options[idx];
    });

    updateSubmittedAnswersCounter();

    gameState.qStartTime = Date.now();
    broadcastToStudents({
        type: 'QUESTION_START', qNum: qIndex + 1, totalQ: gameState.questions.length,
        roundName: q.roundName, question: q.question, options: q.options, duration: gameState.timerDuration
    });

    startHostTimer();
}

function updateSubmittedAnswersCounter() {
    let count = 0;
    connectedPlayers.forEach(p => { if (p.currentAnswer !== null) count++; });
    document.getElementById('submitted-count').textContent = count;
}

function startHostTimer() {
    clearInterval(gameState.timerInterval);
    gameState.timerRemaining = gameState.timerDuration;
    updateHostTimerUI();

    gameState.timerInterval = setInterval(() => {
        gameState.timerRemaining--;
        updateHostTimerUI();

        broadcastToStudents({ type: 'TIMER_TICK', remaining: gameState.timerRemaining });

        if (gameState.timerRemaining <= 0) {
            clearInterval(gameState.timerInterval);
            revealHostQuestionResults();
        }
    }, 1000);
}

function updateHostTimerUI() {
    document.getElementById('timer-seconds').textContent = gameState.timerRemaining;
    const pct = gameState.timerRemaining / gameState.timerDuration;
    document.getElementById('timer-ring-fill').style.strokeDashoffset = 440 - (440 * pct);
}

function revealHostQuestionResults() {
    clearInterval(gameState.timerInterval);
    showHostScreen('host-results-screen');
    triggerConfettiBurst();

    const q = gameState.questions[gameState.currentQIndex];
    document.getElementById('results-q-title').textContent = `Question ${gameState.currentQIndex + 1} Distribution`;
    document.getElementById('correct-answer-text').textContent = `Option ${String.fromCharCode(65 + q.correctOptionIndex)} — ${q.options[q.correctOptionIndex]}`;

    let counts = [0, 0, 0, 0];
    let fastestPlayer = null;
    let fastestTime = Infinity;

    connectedPlayers.forEach(p => {
        if (p.currentAnswer !== null && p.currentAnswer >= 0 && p.currentAnswer < 4) {
            counts[p.currentAnswer]++;
        }
        if (p.currentAnswer === q.correctOptionIndex && p.answerTime < fastestTime) {
            fastestTime = p.answerTime;
            fastestPlayer = p;
        }
    });

    const maxCount = Math.max(...counts, 1);
    counts.forEach((c, idx) => {
        document.getElementById(`count-opt-${idx}`).textContent = c;
        const pct = (c / maxCount) * 100;
        document.getElementById(`bar-opt-${idx}`).style.height = `${pct}%`;
    });

    // Fastest Warrior Spotlight UI
    const fastestCard = document.getElementById('fastest-warrior-card');
    if (fastestPlayer) {
        const sec = (fastestTime / 1000).toFixed(1);
        document.getElementById('fastest-warrior-name').textContent = `${fastestPlayer.name} — ${sec}s`;
        fastestCard.classList.remove('hidden');
    } else {
        fastestCard.classList.add('hidden');
    }

    // Compute Kahoot Speed Scores + Streak Bonus
    connectedPlayers.forEach(player => {
        let pointsGained = 0;
        if (player.currentAnswer === q.correctOptionIndex) {
            const timeTakenSec = (player.answerTime / 1000) || 1;
            const timeRatio = Math.min(1, timeTakenSec / gameState.timerDuration);
            pointsGained = Math.round(1000 * (1 - (timeRatio / 2)));
            player.streak += 1;

            if (player.streak > 1) {
                pointsGained += Math.min(500, player.streak * 50);
            }
            player.score += pointsGained;
        } else {
            player.streak = 0;
        }

        const rank = getPlayerRank(player.peerId);
        if (player.conn && player.conn.open) {
            player.conn.send({
                type: 'QUESTION_RESULTS',
                isCorrect: player.currentAnswer === q.correctOptionIndex,
                correctOptionIndex: q.correctOptionIndex,
                correctText: q.options[q.correctOptionIndex],
                pointsGained: pointsGained,
                totalScore: player.score,
                rank: rank,
                streak: player.streak
            });
        }
    });

    audio.playCorrect();
}

function getPlayerRank(peerId) {
    const sorted = Array.from(connectedPlayers.values()).sort((a, b) => b.score - a.score);
    return sorted.findIndex(p => p.peerId === peerId) + 1;
}

function showHostScreen(screenId) {
    document.querySelectorAll('.host-screen').forEach(s => {
        if (s.id === screenId) s.classList.remove('hidden');
        else s.classList.add('hidden');
    });
}

function showFinalVictoryScreen() {
    showHostScreen('');
    document.getElementById('host-view').classList.add('hidden');
    document.getElementById('final-screen').classList.remove('hidden');
    document.getElementById('final-screen').classList.add('active');

    // 🇮🇳 PLAY PATRIOTIC TUNE: "SARE JAHAN SE ACHHA, HINDUSTAN HAMARA"
    audio.playSareJahanSeAchha();
    triggerConfettiBurst();

    const sorted = Array.from(connectedPlayers.values()).sort((a, b) => b.score - a.score);

    // 1. Broadcast Personal Final Certificates to Mobile Phones
    sorted.forEach((player, index) => {
        const rank = index + 1;
        if (player.conn && player.conn.open) {
            player.conn.send({
                type: 'FINAL_RESULTS',
                rank: rank,
                totalScore: player.score,
                isTop3: rank <= 3
            });
        }
    });

    // 2. Render Top 3 Victory Podium
    const container = document.getElementById('podium-container');
    container.innerHTML = '';
    const top3 = [sorted[1], sorted[0], sorted[2]].filter(Boolean);

    top3.forEach((player) => {
        const rank = sorted.findIndex(p => p.peerId === player.peerId) + 1;
        const step = document.createElement('div');
        step.className = 'podium-step';
        step.innerHTML = `
            <div class="podium-team-name">${escapeHtml(player.name)}</div>
            <div class="podium-block podium-${rank}">
                <div class="podium-rank">${rank === 1 ? '👑 1ST CHAMPION' : rank === 2 ? '🥈 2ND RUNNER-UP' : '🥉 3RD RUNNER-UP'}</div>
                <div class="podium-score">${player.score} PTS</div>
            </div>
        `;
        container.appendChild(step);
    });

    // 3. Render Full Ranked Leaderboard Table
    const fullList = document.getElementById('full-rankings-list');
    fullList.innerHTML = '';
    sorted.forEach((player, rankIdx) => {
        const row = document.createElement('div');
        row.className = `leaderboard-row rank-${rankIdx + 1}`;
        row.innerHTML = `
            <div class="rank-badge">${rankIdx === 0 ? '👑 1' : rankIdx === 1 ? '🥈 2' : rankIdx === 2 ? '🥉 3' : `#${rankIdx + 1}`}</div>
            <div class="rank-team-name">${escapeHtml(player.name)}</div>
            <div class="rank-score">${player.score} PTS</div>
        `;
        fullList.appendChild(row);
    });
}

// CSV EXPORT GENERATOR
function exportScorecardCSV() {
    const sorted = Array.from(connectedPlayers.values()).sort((a, b) => b.score - a.score);
    let csv = "Rank,Player Name,Final Score,Best Streak\n";
    sorted.forEach((p, idx) => {
        csv += `${idx + 1},"${p.name.replace(/"/g, '""')}",${p.score},${p.streak}\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `freedom_quiz_scorecard_pin_${roomPin}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// ==========================================================================
// 6. STUDENT PEERJS ENGINE (RUNS ON MOBILE SMARTPHONE)
// ==========================================================================
function initStudentMode(presetPin = "") {
    mode = 'student';
    document.getElementById('screen-mode-select').classList.add('hidden');
    document.getElementById('student-view').classList.remove('hidden');
    showStudentScreen('student-join-screen');

    if (presetPin) {
        document.getElementById('student-pin').value = presetPin;
        document.getElementById('student-pin-badge').textContent = `PIN: ${presetPin}`;
    }
}

function connectStudentToHost(name, pin) {
    const statusMsg = document.getElementById('join-status-msg');
    statusMsg.textContent = "Connecting to Host Smartboard...";

    peer = new Peer();
    peer.on('open', () => {
        const hostPeerId = `dm-freedom-quiz-${pin}`;
        hostConn = peer.connect(hostPeerId);

        hostConn.on('open', () => {
            document.getElementById('student-pin-badge').textContent = `PIN: ${pin}`;
            hostConn.send({ type: 'JOIN_LOBBY', name: name });
        });

        hostConn.on('data', (data) => handleHostMessage(data));
        hostConn.on('error', () => statusMsg.textContent = "Could not connect to Host. Check Room PIN!");
    });
}

function sendEmojiReaction(emoji) {
    if (navigator.vibrate) navigator.vibrate(30);
    if (hostConn && hostConn.open) {
        hostConn.send({ type: 'EMOJI_REACTION', emoji: emoji });
    }
}

function handleHostMessage(data) {
    if (data.type === 'JOIN_SUCCESS') {
        document.getElementById('student-display-name').textContent = data.name;
        showStudentScreen('student-waiting-screen');
    }
    else if (data.type === 'QUESTION_START') {
        document.getElementById('student-pad-qnum').textContent = `Q${data.qNum} / ${data.totalQ}`;
        showStudentScreen('student-pad-screen');
    }
    else if (data.type === 'ANSWER_RECEIVED') {
        const letters = ['▲ A', '◆ B', '● C', '■ D'];
        document.getElementById('student-chosen-option').textContent = `${letters[data.optionIndex]} Selected`;
        showStudentScreen('student-submitted-screen');
    }
    else if (data.type === 'QUESTION_RESULTS') {
        const title = document.getElementById('student-result-title');
        const icon = document.getElementById('student-result-icon');
        const pts = document.getElementById('student-points-gained');
        const rank = document.getElementById('student-current-rank');
        const streakEl = document.getElementById('student-streak-badge');

        if (data.isCorrect) {
            title.textContent = "CORRECT!";
            title.style.color = "#10B981";
            icon.textContent = "✓";
            pts.textContent = `+${data.pointsGained} PTS`;
            if (navigator.vibrate) navigator.vibrate([80, 50, 80]);

            if (data.streak > 1) {
                streakEl.textContent = `🔥 ${data.streak} STREAK!`;
                streakEl.classList.remove('hidden');
            } else {
                streakEl.classList.add('hidden');
            }
        } else {
            title.textContent = "INCORRECT";
            title.style.color = "#EF4444";
            icon.textContent = "✕";
            pts.textContent = "0 PTS";
            streakEl.classList.add('hidden');
            if (navigator.vibrate) navigator.vibrate([150]);
        }

        rank.textContent = `Current Rank: #${data.rank}`;
        document.getElementById('student-pad-score').textContent = `Score: ${data.totalScore}`;
        showStudentScreen('student-result-screen');
    }
    else if (data.type === 'FINAL_RESULTS') {
        document.getElementById('student-final-badge').textContent = data.rank === 1 ? '👑' : data.rank === 2 ? '🥈' : data.rank === 3 ? '🥉' : '🎖️';
        document.getElementById('student-final-title').textContent = data.rank === 1 ? '1ST PLACE CHAMPION!' : data.rank === 2 ? '2ND RUNNER-UP!' : data.rank === 3 ? '3RD RUNNER-UP!' : 'ARENA FINISHER!';
        document.getElementById('student-final-rank').textContent = `FINAL RANK: #${data.rank}`;
        document.getElementById('student-final-score').textContent = `Total Score: ${data.totalScore} PTS`;
        showStudentScreen('student-final-screen');

        if (navigator.vibrate) navigator.vibrate([100, 50, 100, 50, 150]);
    }
}

function showStudentScreen(screenId) {
    document.querySelectorAll('.student-screen').forEach(s => {
        if (s.id === screenId) s.classList.remove('hidden');
        else s.classList.add('hidden');
    });
}

function submitStudentAnswer(optionIndex) {
    if (navigator.vibrate) navigator.vibrate(30);
    if (hostConn && hostConn.open) {
        hostConn.send({ type: 'SUBMIT_ANSWER', optionIndex: optionIndex });
    }
}

function renderLeaderboardModal() {
    const container = document.getElementById('leaderboard-list');
    container.innerHTML = '';

    const sorted = Array.from(connectedPlayers.values()).sort((a, b) => b.score - a.score);
    sorted.forEach((player, rank) => {
        const row = document.createElement('div');
        row.className = `leaderboard-row rank-${rank + 1}`;
        row.innerHTML = `
            <div class="rank-badge">${rank === 0 ? '🥇' : rank === 1 ? '🥈' : rank === 2 ? '🥉' : `#${rank + 1}`}</div>
            <div class="rank-team-name">${escapeHtml(player.name)} ${player.streak > 1 ? `🔥` : ''}</div>
            <div class="rank-score">${player.score} PTS</div>
        `;
        container.appendChild(row);
    });
}

function initApp() {
    initParticleCanvas();

    const urlParams = new URLSearchParams(window.location.search);
    const joinPin = urlParams.get('join');

    if (joinPin) {
        initStudentMode(joinPin);
    } else {
        document.getElementById('btn-select-host').addEventListener('click', () => {
            audio.init();
            initHostMode();
        });
        document.getElementById('btn-select-student').addEventListener('click', () => {
            audio.init();
            initStudentMode();
        });
    }

    // Host Keyboard Control Shortcuts
    window.addEventListener('keydown', (e) => {
        if (document.activeElement && (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA')) {
            return;
        }

        if (mode === 'host') {
            if (e.code === 'Space') {
                e.preventDefault();
                const questionScreen = document.getElementById('host-question-screen');
                const resultsScreen = document.getElementById('host-results-screen');
                if (!questionScreen.classList.contains('hidden')) {
                    revealHostQuestionResults();
                } else if (!resultsScreen.classList.contains('hidden')) {
                    loadHostQuestion(gameState.currentQIndex + 1);
                }
            } else if (e.code === 'ArrowRight' || e.code === 'KeyN') {
                e.preventDefault();
                loadHostQuestion(gameState.currentQIndex + 1);
            } else if (e.code === 'ArrowLeft' || e.code === 'KeyP') {
                e.preventDefault();
                if (gameState.currentQIndex > 0) loadHostQuestion(gameState.currentQIndex - 1);
            } else if (e.code === 'KeyL') {
                e.preventDefault();
                renderLeaderboardModal();
                document.getElementById('modal-leaderboard').classList.toggle('hidden');
            } else if (e.code === 'KeyF') {
                e.preventDefault();
                if (!document.fullscreenElement) document.documentElement.requestFullscreen();
                else document.exitFullscreen();
            } else if (e.code === 'KeyM') {
                e.preventDefault();
                audio.muted = !audio.muted;
                document.getElementById('sound-icon').textContent = audio.muted ? "🔇" : "🔊";
            }
        }
    });

    // Host Soundboard Drawer Listeners
    document.getElementById('btn-soundboard-toggle').addEventListener('click', () => {
        document.getElementById('host-soundboard-drawer').classList.remove('hidden');
    });
    document.getElementById('close-soundboard').addEventListener('click', () => {
        document.getElementById('host-soundboard-drawer').classList.add('hidden');
    });

    document.querySelectorAll('.btn-fx-sound').forEach(btn => {
        btn.addEventListener('click', () => {
            const fx = btn.dataset.fx;
            if (fx === 'drumroll') audio.playDrumroll();
            else if (fx === 'applause') audio.playApplause();
            else if (fx === 'fanfare') audio.playSareJahanSeAchha();
            else if (fx === 'alarm') audio.playAlarm();
            else if (fx === 'bell') audio.playBell();
            else if (fx === 'confetti') triggerConfettiBurst();
        });
    });

    // Student Reaction Emoji Toolbar
    document.querySelectorAll('.btn-emoji-reaction').forEach(btn => {
        btn.addEventListener('click', () => sendEmojiReaction(btn.dataset.emoji));
    });

    // CSV Scorecard Export
    document.getElementById('btn-export-csv').addEventListener('click', exportScorecardCSV);

    // Host Navigation Listeners
    document.getElementById('btn-host-home').addEventListener('click', showLandingScreen);
    document.getElementById('btn-host-lobby-home').addEventListener('click', showLandingScreen);
    document.getElementById('btn-home-final').addEventListener('click', showLandingScreen);

    document.getElementById('btn-host-start-game').addEventListener('click', startHostGame);
    document.getElementById('btn-host-skip-timer').addEventListener('click', revealHostQuestionResults);

    document.getElementById('btn-host-prev-q').addEventListener('click', () => {
        if (gameState.currentQIndex > 0) loadHostQuestion(gameState.currentQIndex - 1);
    });
    document.getElementById('btn-host-next-q-stage').addEventListener('click', () => {
        loadHostQuestion(gameState.currentQIndex + 1);
    });
    document.getElementById('btn-host-prev-q-res').addEventListener('click', () => {
        if (gameState.currentQIndex > 0) loadHostQuestion(gameState.currentQIndex - 1);
    });
    document.getElementById('btn-host-next-q').addEventListener('click', () => {
        loadHostQuestion(gameState.currentQIndex + 1);
    });

    // Student Navigation
    document.getElementById('btn-student-leave').addEventListener('click', () => {
        if (confirm("Leave this quiz arena?")) showLandingScreen();
    });

    document.getElementById('form-student-join').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('student-name').value.trim();
        const pin = document.getElementById('student-pin').value.trim();
        if (name && pin) connectStudentToHost(name, pin);
    });

    document.querySelectorAll('.pad-btn').forEach(btn => {
        btn.addEventListener('click', () => submitStudentAnswer(parseInt(btn.dataset.index)));
    });

    document.getElementById('btn-leaderboard').addEventListener('click', () => {
        renderLeaderboardModal();
        document.getElementById('modal-leaderboard').classList.remove('hidden');
    });

    document.getElementById('close-leaderboard').addEventListener('click', () => {
        document.getElementById('modal-leaderboard').classList.add('hidden');
    });
    document.getElementById('btn-close-leaderboard').addEventListener('click', () => {
        document.getElementById('modal-leaderboard').classList.add('hidden');
    });

    document.getElementById('btn-sound-toggle').addEventListener('click', () => {
        audio.muted = !audio.muted;
        document.getElementById('sound-icon').textContent = audio.muted ? "🔇" : "🔊";
    });

    document.getElementById('btn-fullscreen').addEventListener('click', () => {
        if (!document.fullscreenElement) document.documentElement.requestFullscreen();
        else document.exitFullscreen();
    });

    document.getElementById('btn-restart-game').addEventListener('click', () => window.location.reload());
}

function escapeHtml(str) {
    return str.replace(/[&<>"']/g, function(m) {
        return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[m];
    });
}

document.addEventListener('DOMContentLoaded', initApp);
