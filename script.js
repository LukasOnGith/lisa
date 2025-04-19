// script.js
document.addEventListener('DOMContentLoaded', () => {
    // 🎈 generate floating balloons
    const balloonCount = 12;
    const container = document.getElementById('balloons-container');
    for (let i = 0; i < balloonCount; i++) {
      const b = document.createElement('div');
      b.className = 'balloon';
      const size = Math.random() * 60 + 40; // 40px–100px
      b.style.width = `${size}px`;
      b.style.height = `${size * 1.2}px`;
      b.style.background = `hsla(${Math.random()*360},70%,80%,0.8)`;
      b.style.left = `${Math.random()*100}%`;
      b.style.animationDuration = `${Math.random()*10 + 8}s`;
      b.style.animationDelay = `${-Math.random()*10}s`;
      container.appendChild(b);
    }
  
    // ✨ Typed greeting with blinking cursor
    new Typed('#greeting', {
      strings: ['Happy Birthday, Lisa! 🎉'],
      typeSpeed: 70,
      showCursor: true,
      cursorChar: '|'
    });
  
    // ♥ Carousel of memories
    const memories = [
      'Remember when you asked me to hack someone for you?',
      'Your smile turns any day into pure sunshine',
      '"This account is beamed by [REDACTED]." cough cough',
      '"bitch u fuck yourself" said by a lovely person named lisa <3',
      'You’re amazing!!!',
      '"OMG WHAT IF I MAKE A C.AI OF PLEX THEN I DATE PLEX PRACTICALLY (said by you btw...)"',
      'even tho we had a bad fight for some time and hated each other, were now good friends again!!!',
      'i love you!!!!!!!!! (as a friend)'
    ];
    const msgEl = document.getElementById('message');
    const nextBtn = document.getElementById('next-btn');
    let idx = 0;
    function showNext() {
      msgEl.classList.remove('show');
      setTimeout(() => {
        msgEl.textContent = memories[idx % memories.length];
        msgEl.classList.add('show');
        idx++;
      }, 300);
    }
    showNext();
    nextBtn.addEventListener('click', showNext);
  
    // 🎶 & 🎉 confetti party on click only
    const song = document.getElementById('song');
    const confettiCanvas = document.getElementById('confetti-canvas');
    const myConfetti = confetti.create(confettiCanvas, { resize: true, useWorker: true });
  
    function celebrate() {
      song.play().catch(() => {/* autoplay needs gesture */});
      const colors = ['#e52e71','#ff8a00','#FFD700','#00BFFF','#8A2BE2'];
      for (let i = 0; i < 6; i++) {
        setTimeout(() => {
          myConfetti({
            particleCount: 200,
            angle: 60 + Math.random() * 60,
            spread: 55 + i * 5,
            startVelocity: 30 + i * 10,
            gravity: 0.6,
            ticks: 200,
            origin: { x: Math.random(), y: Math.random() * 0.3 + 0.2 },
            colors
          });
        }, i * 300);
      }
    }
  
    document.body.addEventListener('click', celebrate, { once: true });
  });
  