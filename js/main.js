/**
 * main.js — Portfolio Logic
 * Reads from data.js and renders all sections dynamically.
 */

// ══════════════════════════════════════════════
//  RENDER HELPERS
// ══════════════════════════════════════════════

function el(tag, cls, html = '') {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html) e.innerHTML = html;
  return e;
}

// ══════════════════════════════════════════════
//  POPULATE PERSONAL INFO
// ══════════════════════════════════════════════

function renderInfo() {
  document.title = `${INFO.name} — Developer Portfolio`;
  document.getElementById('hero-tagline').textContent  = INFO.tagline;
  document.getElementById('hero-name-first').textContent = INFO.name.split(' ')[0];
  document.getElementById('hero-name-last').textContent  = INFO.name.split(' ')[1] || '';
  document.getElementById('hero-desc').textContent       = INFO.description;
  document.getElementById('orb-tech').innerHTML = INFO.orbTech.join('<br>');

  // Contact links
  document.getElementById('link-email').href = `mailto:${INFO.email}`;
  document.getElementById('link-email-text').textContent = INFO.email;
  document.getElementById('link-phone').href = `tel:${INFO.phone}`;
  document.getElementById('link-phone-text').textContent = INFO.phone;
  document.getElementById('link-github').href = INFO.github;
  document.getElementById('link-github-text').textContent = INFO.github.replace('https://', '');
  document.getElementById('link-linkedin').href = INFO.linkedin;
  document.getElementById('link-linkedin-text').textContent = INFO.linkedin.replace('https://', '');
  document.getElementById('footer-name').textContent = INFO.name;
}

// ══════════════════════════════════════════════
//  ABOUT PARAGRAPHS
// ══════════════════════════════════════════════

function renderAbout() {
  const container = document.getElementById('about-text');
  ABOUT_PARAGRAPHS.forEach(p => {
    const para = el('p', '', p);
    container.appendChild(para);
  });
}

// ══════════════════════════════════════════════
//  STATS
// ══════════════════════════════════════════════

function renderStats() {
  const container = document.getElementById('about-stats');
  STATS.forEach(s => {
    const card = el('div', 'stat-card');
    const num  = el('div', 'stat-num', `${s.value}${s.suffix}`);
    num.dataset.target  = s.value;
    num.dataset.suffix  = s.suffix;
    const label = el('div', 'stat-label', s.label);
    card.appendChild(num);
    card.appendChild(label);
    container.appendChild(card);
  });
}

// ══════════════════════════════════════════════
//  SKILLS
// ══════════════════════════════════════════════

function renderSkills() {
  const grid = document.getElementById('skills-grid');
  SKILLS.forEach((cat, i) => {
    const delays = ['', ' reveal-delay-1', ' reveal-delay-2', ' reveal-delay-3', '', ' reveal-delay-1'];
    const wrap = el('div', `skill-category reveal${delays[i] || ''}`);
    wrap.innerHTML = `<div class="skill-cat-title">// ${cat.category}</div>
      <div class="skill-tags">${cat.tags.map(t => `<span class="skill-tag">${t}</span>`).join('')}</div>`;
    grid.appendChild(wrap);
  });
}

// ══════════════════════════════════════════════
//  PROJECTS SLIDER
// ══════════════════════════════════════════════

function renderProjects() {
  const track = document.getElementById('sliderTrack');
  PROJECTS.forEach((p, i) => {
    const card = el('div', 'project-card');
    card.innerHTML = `
      <div class="project-num">// ${String(i + 1).padStart(2, '0')}</div>
      <div class="project-title">${p.title}</div>
      <div class="project-desc">${p.desc}</div>
      <div class="project-tags">${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}</div>
      <a href="${p.githubUrl}" class="project-link" target="_blank">View on GitHub →</a>`;
    track.appendChild(card);
  });
  initSlider();
}

// ══════════════════════════════════════════════
//  EXPERIENCE TIMELINE
// ══════════════════════════════════════════════

function renderExperience() {
  const timeline = document.getElementById('timeline');
  EXPERIENCE.forEach((exp, i) => {
    const delays = ['', ' reveal-delay-1', ' reveal-delay-2', ' reveal-delay-3'];
    const item = el('div', `timeline-item reveal${delays[i] || ''}`);
    item.innerHTML = `
      <div class="timeline-period">${exp.period}</div>
      <div class="timeline-role">${exp.role}</div>
      <div class="timeline-company">${exp.company}</div>
      <ul class="timeline-points">${exp.points.map(pt => `<li>${pt}</li>`).join('')}</ul>`;
    timeline.appendChild(item);
  });
}

// ══════════════════════════════════════════════
//  CERTIFICATIONS
// ══════════════════════════════════════════════

function renderCertifications() {
  const grid = document.getElementById('certs-grid');
  CERTIFICATIONS.forEach((c, i) => {
    const delays = ['', ' reveal-delay-1', ' reveal-delay-2', ' reveal-delay-3'];
    const card = el('div', `cert-card reveal${delays[i] || ''}`);
    card.innerHTML = `
      <div class="cert-icon">${c.icon}</div>
      <div class="cert-name">${c.name}</div>
      <div class="cert-issuer">${c.issuer}</div>
      <div class="cert-year">${c.year}</div>`;
    grid.appendChild(card);
  });
}

// ══════════════════════════════════════════════
//  ACHIEVEMENTS
// ══════════════════════════════════════════════

function renderAchievements() {
  const grid = document.getElementById('ach-grid');
  ACHIEVEMENTS.forEach((a, i) => {
    const delays = ['', ' reveal-delay-1', ' reveal-delay-2', ' reveal-delay-3'];
    const card = el('div', `ach-card reveal${delays[i] || ''}`);
    card.innerHTML = `<div class="ach-icon">${a.icon}</div><div class="ach-text">${a.text}</div>`;
    grid.appendChild(card);
  });
}

// ══════════════════════════════════════════════
//  EDUCATION
// ══════════════════════════════════════════════

function renderEducation() {
  const grid = document.getElementById('edu-grid');
  EDUCATION.forEach((e, i) => {
    const delays = ['', ' reveal-delay-1', ' reveal-delay-2', ' reveal-delay-3'];
    const card = el('div', `edu-card reveal${delays[i] || ''}`);
    card.innerHTML = `
      <div class="edu-level">// ${e.level}</div>
      <div class="edu-degree">${e.degree}</div>
      <div class="edu-school">${e.school}</div>
      <div class="edu-score">${e.score}</div>
      <div class="edu-year">${e.year}</div>`;
    grid.appendChild(card);
  });
}

// ══════════════════════════════════════════════
//  SLIDER LOGIC
// ══════════════════════════════════════════════

function initSlider() {
  const track        = document.getElementById('sliderTrack');
  const cards        = track.querySelectorAll('.project-card');
  const dotsContainer = document.getElementById('sliderDots');
  let currentSlide   = 0;
  let autoPlay;

  function getVisible() {
    return window.innerWidth < 600 ? 1 : window.innerWidth < 900 ? 2 : 3;
  }
  function getTotalSlides() {
    return Math.max(cards.length - getVisible() + 1, 1);
  }
  function buildDots() {
    dotsContainer.innerHTML = '';
    for (let i = 0; i < getTotalSlides(); i++) {
      const dot = document.createElement('div');
      dot.className = 'dot' + (i === currentSlide ? ' active' : '');
      dot.addEventListener('click', () => goTo(i));
      dotsContainer.appendChild(dot);
    }
  }
  function goTo(index) {
    const total = getTotalSlides();
    currentSlide = ((index % total) + total) % total;
    const cardWidth = cards[0].offsetWidth + 24;
    track.style.transform = `translateX(-${currentSlide * cardWidth}px)`;
    document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === currentSlide));
  }
  function startAutoPlay() {
    clearInterval(autoPlay);
    autoPlay = setInterval(() => goTo(currentSlide + 1), 4000);
  }

  buildDots();
  startAutoPlay();

  document.getElementById('prevBtn').addEventListener('click', () => { goTo(currentSlide - 1); startAutoPlay(); });
  document.getElementById('nextBtn').addEventListener('click', () => { goTo(currentSlide + 1); startAutoPlay(); });
  window.addEventListener('resize', () => { buildDots(); goTo(0); });

  // Swipe support
  let touchStartX = 0;
  track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend',   e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) { goTo(diff > 0 ? currentSlide + 1 : currentSlide - 1); startAutoPlay(); }
  }, { passive: true });
}

// ══════════════════════════════════════════════
//  CUSTOM CURSOR
// ══════════════════════════════════════════════

function initCursor() {
  const cursor = document.getElementById('cursor');
  const ring   = document.getElementById('cursor-ring');
  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx - 6 + 'px';
    cursor.style.top  = my - 6 + 'px';
  });

  function animateRing() {
    rx += (mx - rx - 18) * 0.12;
    ry += (my - ry - 18) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  function attachHover() {
    document.querySelectorAll('a, button, .slider-btn, .dot, .skill-tag, .project-card').forEach(el => {
      el.addEventListener('mouseenter', () => { cursor.style.transform = 'scale(2.5)'; ring.style.transform = 'scale(1.5)'; });
      el.addEventListener('mouseleave', () => { cursor.style.transform = 'scale(1)';   ring.style.transform = 'scale(1)';   });
    });
  }
  // Call after render
  setTimeout(attachHover, 200);
}

// ══════════════════════════════════════════════
//  TYPED TITLE
// ══════════════════════════════════════════════

function initTyped() {
  const titles  = INFO.titles;
  let ti = 0, ci = 0, deleting = false;
  const typedEl = document.getElementById('typed-title');

  function type() {
    const cur = titles[ti];
    if (!deleting) {
      typedEl.textContent = cur.substring(0, ci + 1);
      ci++;
      if (ci === cur.length) { deleting = true; setTimeout(type, 1800); return; }
    } else {
      typedEl.textContent = cur.substring(0, ci - 1);
      ci--;
      if (ci === 0) { deleting = false; ti = (ti + 1) % titles.length; }
    }
    setTimeout(type, deleting ? 50 : 80);
  }
  setTimeout(type, 1500);
}

// ══════════════════════════════════════════════
//  SCROLL REVEAL
// ══════════════════════════════════════════════

function initReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });

  // Re-query after render
  setTimeout(() => {
    document.querySelectorAll('.reveal, .timeline-item').forEach(el => observer.observe(el));
  }, 100);
}

// ══════════════════════════════════════════════
//  COUNTER ANIMATION
// ══════════════════════════════════════════════

function initCounters() {
  const statsSection = document.getElementById('about-stats');
  if (!statsSection) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.stat-num').forEach(el => {
          const target = parseFloat(el.dataset.target);
          const suffix = el.dataset.suffix || '';
          const isFloat = target % 1 !== 0;
          let val = 0;
          const step = target / 60;
          const interval = setInterval(() => {
            val += step;
            if (val >= target) { val = target; clearInterval(interval); }
            el.textContent = isFloat ? val.toFixed(2) + suffix : Math.floor(val) + suffix;
          }, 16);
        });
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(statsSection);
}

// ══════════════════════════════════════════════
//  INIT — runs everything in order
// ══════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  renderInfo();
  renderAbout();
  renderStats();
  renderSkills();
  renderProjects();
  renderExperience();
  renderCertifications();
  renderAchievements();
  renderEducation();

  initCursor();
  initTyped();
  initReveal();
  initCounters();
});
