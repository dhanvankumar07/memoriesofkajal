 // ================= Typewriter effect =================
const typewriterText = [
  "I've been thinking about you... 💭",
  "And I realized something beautiful... ✨",
  "You've stolen my heart completely 💖",
  "I have something very special to ask you... 🌹"
];

let textIndex = 0;
let charIndex = 0;
let currentText = '';
let isDeleting = false;

function typeWriter() {
  const typewriterElement = document.getElementById('typewriter');
  if (textIndex < typewriterText.length) {
    if (!isDeleting && charIndex < typewriterText[textIndex].length) {
      currentText += typewriterText[textIndex].charAt(charIndex);
      charIndex++;
    } else if (isDeleting && charIndex > 0) {
      currentText = typewriterText[textIndex].substring(0, charIndex - 1);
      charIndex--;
    } else {
      isDeleting = !isDeleting;
      if (!isDeleting) textIndex++;
    }

    typewriterElement.innerHTML = currentText + '<span style="animation: blink 1s infinite;">|</span>';
    if (textIndex < typewriterText.length) {
      setTimeout(typeWriter, isDeleting ? 50 : 100);
    } else {
      typewriterElement.innerHTML = currentText;
    }
  }
}

// ================= Floating hearts =================
function createFloatingHearts() {
  const heartsContainer = document.getElementById('floatingHearts');
  const heartSymbols = ['💖', '💕', '💗', '💘', '🌹', '🌸'];
  setInterval(() => {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDelay = Math.random() * 2 + 's';
    heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
  }, 800);
}

// ================= Stars =================
function createStars() {
  const starsContainer = document.getElementById('stars');
  for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.innerHTML = '✨';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 2 + 's';
    star.style.fontSize = (Math.random() * 10 + 8) + 'px';
    starsContainer.appendChild(star);
  }
}

// ================= Section reveal =================
function revealSection(id) {
  const el = document.getElementById(id);
  el.classList.remove('hidden-section');
  el.classList.add('show-section');
  el.scrollIntoView({ behavior: 'smooth' });
}
function showNextSection() {
  revealSection('memorySection');

  // Play background music 🎶
  let music = document.getElementById("bgMusic");
  music.play().catch(() => {});
}
function showLoveLetter() { revealSection('loveLetterSection'); }
function showProposal() { revealSection('proposalSection'); }

// ================= Confetti celebration =================
function celebrate() {
  const confettiContainer = document.getElementById('confetti');
  const colors = ['#ff69b4', '#ffd700', '#ff1493', '#00ff7f', '#1e90ff', '#ff6347'];

  for (let i = 0; i < 100; i++) {
    const confettiPiece = document.createElement('div');
    confettiPiece.className = 'confetti-piece';
    confettiPiece.style.left = Math.random() * 100 + '%';
    confettiPiece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confettiPiece.style.animationDelay = Math.random() * 2 + 's';
    confettiPiece.style.width = (6 + Math.random() * 10) + 'px';
    confettiPiece.style.height = (6 + Math.random() * 10) + 'px';
    confettiPiece.style.borderRadius = Math.random() > 0.6 ? '50%' : '3px';
    confettiContainer.appendChild(confettiPiece);
    setTimeout(() => confettiPiece.remove(), 3000);
  }

  // Show message 🎉
  const msg = document.getElementById('celebrationMessage');
  msg.classList.add("show");
  msg.style.display = 'block';

  // Hide after 5 sec
  setTimeout(() => {
    msg.classList.add("hide");
    setTimeout(() => {
      msg.style.display = "none";
      msg.classList.remove("show", "hide");
    }, 1000);
  }, 5000);

  // Show small music section 🎶
  document.getElementById("musicSection").classList.remove("hidden-section");
}

// ================= Playlist player =================
let customPlayer = null;
window.addEventListener("DOMContentLoaded", () => {
  customPlayer = document.getElementById("customPlayer");
});
function playSong(src) {
  if (customPlayer) {
    customPlayer.src = src;
    customPlayer.play();
  }
}

// ================= Music toggle (floating button) =================
let isMusicPlaying = false;
function toggleMusic() {
  const music = document.getElementById('bgMusic');
  const musicBtn = document.getElementById('musicBtn');
  if (isMusicPlaying) {
    music.pause();
    musicBtn.innerHTML = '<i class="fas fa-music"></i>';
  } else {
    music.play().catch(() => {});
    musicBtn.innerHTML = '<i class="fas fa-pause"></i>';
  }
  isMusicPlaying = !isMusicPlaying;
}

// ================= Rose petals =================
function createRosePetals() {
  const heartsContainer = document.getElementById('floatingHearts');
  setInterval(() => {
    const petal = document.createElement('div');
    petal.className = 'rose-petal';
    petal.style.left = Math.random() * 100 + '%';
    petal.style.animationDelay = Math.random() * 2 + 's';
    petal.style.animationDuration = (Math.random() * 3 + 5) + 's';
    heartsContainer.appendChild(petal);
    setTimeout(() => petal.remove(), 8000);
  }, 1500);
}

// ================= Hover effect =================
document.addEventListener('mousemove', (e) => {
  document.querySelectorAll('.heart').forEach(heart => {
    const rect = heart.getBoundingClientRect();
    const distance = Math.sqrt(
      Math.pow(e.clientX - (rect.left + rect.width / 2), 2) +
      Math.pow(e.clientY - (rect.top + rect.height / 2), 2)
    );
    if (distance < 100) {
      heart.style.transform = `scale(${Math.max(0.7, 1.5 - distance / 100)})`;
    } else {
      heart.style.transform = 'scale(1)';
    }
  });
});

// ================= Init =================
window.addEventListener('load', () => {
  typeWriter();
  createFloatingHearts();
  createStars();
  createRosePetals();
  const style = document.createElement('style');
  style.textContent = `@keyframes blink {0%,50%{opacity:1;}51%,100%{opacity:0;}}`;
  document.head.appendChild(style);
});

// ================= Parallax =================
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  document.querySelectorAll('.hero').forEach(el => {
    el.style.transform = `translateY(${scrolled * 0.5}px)`;
  });
});

// ================= Stop other songs =================
document.addEventListener("play", function(e){
  let audios = document.getElementsByTagName("audio");
  for(let i = 0; i < audios.length; i++){
    if(audios[i] !== e.target){
      audios[i].pause();
      audios[i].currentTime = 0;
    }
  }
}, true);

// ================= 🌙 Theme Toggle (4 themes) =================
const themeBtn = document.getElementById("themeBtn");
const themes = ["light-theme", "dark-yellow-theme", "sunset-theme", "royal-theme"];
const themeIcons = ["🌸", "🌙", "🌅", "👑"];
let currentTheme = 0;

// Set default theme
document.body.classList.add(themes[currentTheme]);
themeBtn.innerHTML = themeIcons[currentTheme];

themeBtn.addEventListener("click", () => {
  document.body.classList.remove(...themes);
  currentTheme = (currentTheme + 1) % themes.length;
  document.body.classList.add(themes[currentTheme]);
  themeBtn.innerHTML = themeIcons[currentTheme];
});
















