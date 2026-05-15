/* ============================================================
   WorldMemArena – site interactions
   ============================================================ */

/* --- Animated particle background --- */
(function bgCanvas() {
  const canvas = document.getElementById('bgCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h, dpr;
  const PARTICLES = 90;
  const particles = [];
  const colors = ['#4361ee', '#3a86ff', '#0ea5a0', '#e0457b', '#d97706'];
  const mouse = { x: -1000, y: -1000 };

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function rand(a, b) { return a + Math.random() * (b - a); }

  function init() {
    resize();
    particles.length = 0;
    for (let i = 0; i < PARTICLES; i++) {
      particles.push({
        x: rand(0, w),
        y: rand(0, h),
        vx: rand(-0.18, 0.18),
        vy: rand(-0.18, 0.18),
        r: rand(0.6, 2.2),
        c: colors[i % colors.length],
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);

    // connecting lines
    for (let i = 0; i < particles.length; i++) {
      const a = particles[i];
      a.x += a.vx; a.y += a.vy;
      if (a.x < -20) a.x = w + 20;
      if (a.x > w + 20) a.x = -20;
      if (a.y < -20) a.y = h + 20;
      if (a.y > h + 20) a.y = -20;

      // mouse attract
      const dxm = mouse.x - a.x;
      const dym = mouse.y - a.y;
      const dm = Math.sqrt(dxm * dxm + dym * dym);
      if (dm < 160) {
        a.vx += (dxm / dm) * 0.012;
        a.vy += (dym / dm) * 0.012;
      }
      a.vx = Math.max(-0.5, Math.min(0.5, a.vx));
      a.vy = Math.max(-0.5, Math.min(0.5, a.vy));

      for (let j = i + 1; j < particles.length; j++) {
        const b = particles[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 130) {
          ctx.strokeStyle = a.c;
          ctx.globalAlpha = (1 - d / 130) * 0.08;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }
    ctx.globalAlpha = 1;
    // points
    for (const p of particles) {
      ctx.fillStyle = p.c;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize);
  window.addEventListener('mousemove', (e) => { mouse.x = e.clientX; mouse.y = e.clientY; });
  window.addEventListener('mouseleave', () => { mouse.x = -1000; mouse.y = -1000; });
  init();
  draw();
})();

/* --- Reveal on scroll --- */
(function reveal() {
  const els = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach((el) => io.observe(el));
})();

/* --- Sticky nav shadow --- */
(function navState() {
  const nav = document.getElementById('topNav');
  if (!nav) return;
  const update = () => nav.classList.toggle('scrolled', window.scrollY > 24);
  update();
  window.addEventListener('scroll', update, { passive: true });
})();

/* --- Count-up stats --- */
(function countUp() {
  const targets = document.querySelectorAll('.stat-num[data-target]');
  if (!targets.length) return;
  const fmt = (n) => n >= 1000 ? n.toLocaleString() : String(n);
  const run = (el) => {
    const target = parseInt(el.dataset.target, 10) || 0;
    const dur = 1400;
    const t0 = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - t0) / dur);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = fmt(Math.floor(target * eased));
      if (t < 1) requestAnimationFrame(tick);
      else el.textContent = fmt(target);
    };
    requestAnimationFrame(tick);
  };
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        run(e.target);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.4 });
  targets.forEach((el) => io.observe(el));
})();
