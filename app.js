// Configuración editable del negocio
const CONFIG = {
  whatsappNumber: "5215512345678", // formato internacional sin '+'
  whatsappMessage: "Hola, quiero más información sobre sus perfumes árabes.",
  email: "contacto@oudalsharq.com",
  ciudad: "Ciudad de México, México",
  instagram: "https://instagram.com/oudalsharq",
  facebook: "https://facebook.com/oudalsharq"
};

function buildWhatsappLink(message) {
  const text = encodeURIComponent(message || CONFIG.whatsappMessage);
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${text}`;
}

function renderProducts() {
  const grid = document.getElementById("product-grid");
  if (!grid) return;

  grid.innerHTML = PRODUCTS.map((p) => `
    <article class="product-card reveal">
      <div class="product-img">
        <img src="${p.imagen}" alt="${p.nombre}" loading="lazy" />
      </div>
      <div class="product-body">
        <h3>${p.nombre}</h3>
        <span class="product-note">${p.nota}</span>
        <p class="product-desc">${p.descripcion}</p>
        <a class="btn-secondary" href="${p.ml}" target="_blank" rel="noopener noreferrer">
          Ver en Mercado Libre
        </a>
      </div>
    </article>
  `).join("");
}

function wireContactLinks() {
  document.querySelectorAll("[data-whatsapp]").forEach((el) => {
    el.href = buildWhatsappLink();
  });
  document.querySelectorAll("[data-email]").forEach((el) => {
    el.href = `mailto:${CONFIG.email}`;
    if (el.dataset.emailText) el.textContent = CONFIG.email;
  });
  document.querySelectorAll("[data-ciudad]").forEach((el) => {
    el.textContent = CONFIG.ciudad;
  });
  document.querySelectorAll("[data-instagram]").forEach((el) => { el.href = CONFIG.instagram; });
  document.querySelectorAll("[data-facebook]").forEach((el) => { el.href = CONFIG.facebook; });
}

function wireMobileNav() {
  const toggle = document.getElementById("nav-toggle");
  const menu = document.getElementById("mobile-nav");
  if (!toggle || !menu) return;
  toggle.addEventListener("click", () => {
    menu.classList.toggle("open");
  });
  menu.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => menu.classList.remove("open"));
  });
}

function wireScrollReveal() {
  const items = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  items.forEach((item) => observer.observe(item));
}

function wireContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = form.nombre.value.trim();
    const mensaje = form.mensaje.value.trim();
    const texto = `Hola, soy ${nombre}. ${mensaje}`;
    window.open(buildWhatsappLink(texto), "_blank", "noopener");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  wireContactLinks();
  wireMobileNav();
  wireContactForm();
  wireScrollReveal();
});
