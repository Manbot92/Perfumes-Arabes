// Configuración editable del negocio
const CONFIG = {
  whatsappNumber: "5215512345678",
  whatsappMessage: "Hola, quiero más información sobre sus perfumes árabes.",
  email: "contacto@oudalsharq.com",
  ciudad: "Ciudad de México, México",
  instagram: "https://instagram.com/oudalsharq",
  facebook: "https://facebook.com/oudalsharq"
};

const GENERO_LABEL = { hombre: "Hombre", mujer: "Mujer", unisex: "Unisex" };

function buildWhatsappLink(message) {
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message || CONFIG.whatsappMessage)}`;
}

function formatPrice(n) {
  return `$${n.toLocaleString("es-AR")} ARS`;
}

function productCard(p) {
  const badges = p.notas.map((n) => `<span class="note-badge">${n}</span>`).join("");
  return `
    <article class="product-card reveal">
      <a class="product-img" href="#producto/${p.id}">
        <img src="${p.imagen}" alt="${p.nombre}" loading="lazy" />
        <span class="gender-badge gender-${p.genero}">${GENERO_LABEL[p.genero]}</span>
      </a>
      <div class="product-body">
        <a href="#producto/${p.id}" class="product-link"><h3>${p.nombre}</h3></a>
        <div class="notes-row">${badges}</div>
        <p class="product-desc">${p.descripcion}</p>
        <div class="price-row">
          <span class="price">${formatPrice(p.precio)}</span>
          <a class="btn-secondary btn-small" href="${p.ml}" target="_blank" rel="noopener noreferrer">Comprar</a>
        </div>
      </div>
    </article>`;
}

function renderProducts() {
  const featured = document.getElementById("featured-grid");
  const all = document.getElementById("product-grid");
  if (featured) featured.innerHTML = PRODUCTS.filter((p) => p.destacado).map(productCard).join("");
  if (all) all.innerHTML = PRODUCTS.map(productCard).join("");
  wireScrollReveal();
}

function drawRadar(canvas, perfil) {
  const ctx = canvas.getContext("2d");
  const labels = Object.keys(perfil);
  const values = Object.values(perfil);
  const n = labels.length;
  const size = canvas.width;
  const cx = size / 2, cy = size / 2, r = size * 0.36;
  const angle = (i) => -Math.PI / 2 + (i * 2 * Math.PI) / n;

  ctx.clearRect(0, 0, size, size);
  ctx.strokeStyle = "rgba(201,162,75,0.25)";
  ctx.fillStyle = "rgba(201,162,75,0.7)";
  ctx.font = "13px Cormorant Garamond, serif";

  // rings
  for (let ring = 1; ring <= 4; ring++) {
    ctx.beginPath();
    for (let i = 0; i <= n; i++) {
      const a = angle(i % n);
      const rr = (r * ring) / 4;
      const x = cx + rr * Math.cos(a), y = cy + rr * Math.sin(a);
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.stroke();
  }

  // axes + labels
  ctx.fillStyle = "#e6c877";
  labels.forEach((label, i) => {
    const a = angle(i);
    const x2 = cx + r * Math.cos(a), y2 = cy + r * Math.sin(a);
    ctx.strokeStyle = "rgba(201,162,75,0.25)";
    ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(x2, y2); ctx.stroke();
    const lx = cx + (r + 26) * Math.cos(a), ly = cy + (r + 26) * Math.sin(a);
    ctx.textAlign = Math.abs(Math.cos(a)) < 0.2 ? "center" : Math.cos(a) > 0 ? "left" : "right";
    ctx.fillText(label, lx, ly + 4);
  });

  // data polygon
  ctx.beginPath();
  values.forEach((v, i) => {
    const a = angle(i);
    const rr = (r * v) / 10;
    const x = cx + rr * Math.cos(a), y = cy + rr * Math.sin(a);
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  });
  ctx.closePath();
  ctx.fillStyle = "rgba(201,162,75,0.35)";
  ctx.strokeStyle = "#e6c877";
  ctx.lineWidth = 2;
  ctx.fill();
  ctx.stroke();
}

function renderDetail(id) {
  const p = PRODUCTS.find((x) => x.id === id);
  const el = document.getElementById("detail-content");
  if (!p || !el) return;
  const badges = p.notas.map((n) => `<span class="note-badge">${n}</span>`).join("");
  el.innerHTML = `
    <div class="detail-img"><img src="${p.imagen}" alt="${p.nombre}" /></div>
    <div class="detail-body">
      <span class="gender-badge gender-${p.genero}">${GENERO_LABEL[p.genero]}</span>
      <h2>${p.nombre}</h2>
      <div class="notes-row">${badges}</div>
      <p class="product-desc">${p.descripcion}</p>
      <span class="price price-lg">${formatPrice(p.precio)}</span>
      <a class="btn-primary" href="${p.ml}" target="_blank" rel="noopener noreferrer">Comprar en Mercado Libre</a>
      <h3 class="profile-title">Perfil Olfativo</h3>
      <canvas id="radar-canvas" width="360" height="360"></canvas>
    </div>`;
  drawRadar(document.getElementById("radar-canvas"), p.perfil);
}

function router() {
  const hash = location.hash;
  const storefront = document.getElementById("storefront");
  const detalle = document.getElementById("detalle");
  const match = hash.match(/^#producto\/(.+)$/);
  if (match) {
    storefront.hidden = true;
    detalle.hidden = false;
    renderDetail(match[1]);
    window.scrollTo(0, 0);
  } else {
    storefront.hidden = false;
    detalle.hidden = true;
  }
}

function wireContactLinks() {
  document.querySelectorAll("[data-whatsapp]").forEach((el) => (el.href = buildWhatsappLink()));
  document.querySelectorAll("[data-email]").forEach((el) => {
    el.href = `mailto:${CONFIG.email}`;
    if (el.dataset.emailText) el.textContent = CONFIG.email;
  });
  document.querySelectorAll("[data-ciudad]").forEach((el) => (el.textContent = CONFIG.ciudad));
  document.querySelectorAll("[data-instagram]").forEach((el) => (el.href = CONFIG.instagram));
  document.querySelectorAll("[data-facebook]").forEach((el) => (el.href = CONFIG.facebook));
}

function wireMobileNav() {
  const toggle = document.getElementById("nav-toggle");
  const menu = document.getElementById("mobile-nav");
  if (!toggle || !menu) return;
  toggle.addEventListener("click", () => menu.classList.toggle("open"));
  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => menu.classList.remove("open")));
}

function wireScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("is-visible"); observer.unobserve(e.target); }
    }),
    { threshold: 0.15 }
  );
  document.querySelectorAll(".reveal:not(.is-visible)").forEach((item) => observer.observe(item));
}

function wireContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const texto = `Hola, soy ${form.nombre.value.trim()}. ${form.mensaje.value.trim()}`;
    window.open(buildWhatsappLink(texto), "_blank", "noopener");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  wireContactLinks();
  wireMobileNav();
  wireContactForm();
  wireScrollReveal();
  router();
});
window.addEventListener("hashchange", router);
