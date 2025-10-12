const canvas = document.querySelector('.hero-glow');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight * 0.8;
  drawGlow();
}

const blobs = Array.from({ length: 5 }, (_, index) => ({
  x: Math.random(),
  y: Math.random(),
  radius: 120 + Math.random() * 160,
  hue: 200 + index * 30,
  alpha: 0.15 + Math.random() * 0.1,
  speedX: (Math.random() - 0.5) * 0.0007,
  speedY: (Math.random() - 0.5) * 0.0007
}));

function drawGlow() {
  if (!ctx) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const { width, height } = canvas;
  blobs.forEach((blob) => {
    blob.x += blob.speedX;
    blob.y += blob.speedY;

    if (blob.x < 0 || blob.x > 1) blob.speedX *= -1;
    if (blob.y < 0 || blob.y > 1) blob.speedY *= -1;

    const gradient = ctx.createRadialGradient(
      blob.x * width,
      blob.y * height,
      blob.radius * 0.1,
      blob.x * width,
      blob.y * height,
      blob.radius
    );

    gradient.addColorStop(0, `hsla(${blob.hue}, 85%, 60%, ${blob.alpha})`);
    gradient.addColorStop(1, 'rgba(255,255,255,0)');

    ctx.beginPath();
    ctx.fillStyle = gradient;
    ctx.arc(blob.x * width, blob.y * height, blob.radius, 0, Math.PI * 2);
    ctx.fill();
  });
}

let animationFrame;
function animate() {
  drawGlow();
  animationFrame = requestAnimationFrame(animate);
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();
animate();

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll('.reveal').forEach((section) => observer.observe(section));

const currentYear = document.getElementById('current-year');
if (currentYear) {
  currentYear.textContent = new Date().getFullYear().toString();
}

const form = document.getElementById('contact-form');
const formMessage = document.querySelector('.form-message');

if (form && formMessage) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name');

    if (!form.checkValidity()) {
      formMessage.textContent = 'Please fill in all required fields correctly.';
      formMessage.style.color = '#dc2626';
      return;
    }

    form.reset();
    formMessage.textContent = `Cảm ơn ${name || 'bạn'}! I will get back to you shortly with bilingual options.`;
    formMessage.style.color = 'var(--accent-strong)';
  });
}

window.addEventListener('beforeunload', () => cancelAnimationFrame(animationFrame));
