(() => {
  'use strict';
  const heroCanvas = document.getElementById('heroCanvas');
  if (heroCanvas) {
    const ctx = heroCanvas.getContext('2d');
    let particles = [], animId;
    function resize() {
      const rect = heroCanvas.parentElement.getBoundingClientRect();
      heroCanvas.width = rect.width; heroCanvas.height = rect.height;
    }
    function createParticles() {
      const count = Math.min(80, Math.floor(heroCanvas.width / 15));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * heroCanvas.width, y: Math.random() * heroCanvas.height,
        r: Math.random() * 2 + 1, vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
        alpha: Math.random() * 0.5 + 0.2,
      }));
    }
    function draw() {
      ctx.clearRect(0, 0, heroCanvas.width, heroCanvas.height);
      for (const p of particles) {
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(37,99,235,' + p.alpha + ')'; ctx.fill();
        for (const q of particles) {
          const dx = p.x - q.x, dy = p.y - q.y, dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 80) {
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = 'rgba(37,99,235,' + (0.06 * (1 - dist / 80)) + ')';
            ctx.lineWidth = 0.5; ctx.stroke();
          }
        }
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = heroCanvas.width; if (p.x > heroCanvas.width) p.x = 0;
        if (p.y < 0) p.y = heroCanvas.height; if (p.y > heroCanvas.height) p.y = 0;
      }
      animId = requestAnimationFrame(draw);
    }
    resize(); createParticles(); draw();
    window.addEventListener('resize', () => { resize(); createParticles(); });
  }
  const progressFill = document.querySelector('.progress-fill');
  if (progressFill) {
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      progressFill.style.width = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) + '%';
    }, { passive: true });
  }
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) { e.preventDefault(); window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 88, behavior: 'smooth' }); }
    });
  });
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = 'translateY(-4px) rotateX(' + (-y * 3) + 'deg) rotateY(' + (x * 3) + 'deg)';
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
  });
})();
