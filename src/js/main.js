import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../css/shared.css'

export function createNavbar(themeClass) {
  const themes = {
    home: { bg: 'bg-dark', brand: 'MediCore', color: 'text-light', linkClass: 'text-light' },
    services: { bg: 'bg-success', brand: 'MediCore', color: 'text-light', linkClass: 'text-light' },
    about: { bg: 'bg-dark', brand: 'MediCore', color: 'text-light', linkClass: 'text-light' },
    technology: { bg: 'bg-info', brand: 'MediCore', color: 'text-light', linkClass: 'text-light' },
    contact: { bg: 'bg-warning', brand: 'MediCore', color: 'text-dark', linkClass: 'text-dark' },
  }
  const t = themes[themeClass] || themes.home

  const nav = document.createElement('nav')
  nav.className = `navbar navbar-expand-lg ${t.bg} ${t.color} navbar-custom fixed-top`
  nav.id = 'mainNavbar'
  nav.innerHTML = `
    <div class="container">
      <a class="navbar-brand navbar-brand-text ${t.color}" href="/">
        <i class="bi bi-heart-pulse-fill me-2"></i>${t.brand}<span class="text-warning"> AI</span>
      </a>
      <button class="navbar-toggler ${t.color === 'text-dark' ? '' : 'navbar-dark'}" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu" aria-controls="navMenu" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navMenu">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link ${t.linkClass} ${themeClass === 'home' ? 'fw-bold' : ''}" href="/">Home</a></li>
          <li class="nav-item"><a class="nav-link ${t.linkClass} ${themeClass === 'services' ? 'fw-bold' : ''}" href="/pages/services.html">Services</a></li>
          <li class="nav-item"><a class="nav-link ${t.linkClass} ${themeClass === 'about' ? 'fw-bold' : ''}" href="/pages/about.html">About</a></li>
          <li class="nav-item"><a class="nav-link ${t.linkClass} ${themeClass === 'technology' ? 'fw-bold' : ''}" href="/pages/technology.html">Technology</a></li>
          <li class="nav-item"><a class="nav-link ${t.linkClass} ${themeClass === 'contact' ? 'fw-bold' : ''}" href="/pages/contact.html">Contact</a></li>
        </ul>
      </div>
    </div>
  `
  return nav
}

export function createFooter(themeClass) {
  const bgMap = {
    home: 'bg-dark text-light',
    services: 'bg-dark text-light',
    about: 'bg-dark text-light',
    technology: 'bg-info text-light',
    contact: 'bg-dark text-light',
  }
  const bgClass = bgMap[themeClass] || 'bg-dark text-light'

  const footer = document.createElement('footer')
  footer.className = `footer ${bgClass}`
  footer.innerHTML = `
    <div class="container">
      <div class="row g-4">
        <div class="col-lg-4 col-md-6">
          <h5 class="fw-bold mb-3"><i class="bi bi-heart-pulse-fill me-2"></i>MediCore AI</h5>
          <p class="small">Revolutionizing healthcare through artificial intelligence. We build AI-powered solutions that help hospitals deliver better patient outcomes.</p>
          <div class="d-flex gap-3 mt-3">
            <a href="#" class="text-light"><i class="bi bi-linkedin fs-5"></i></a>
            <a href="#" class="text-light"><i class="bi bi-twitter-x fs-5"></i></a>
            <a href="#" class="text-light"><i class="bi bi-github fs-5"></i></a>
            <a href="#" class="text-light"><i class="bi bi-youtube fs-5"></i></a>
          </div>
        </div>
        <div class="col-lg-2 col-md-6">
          <h6 class="fw-bold mb-3">Company</h6>
          <ul class="list-unstyled small">
            <li class="mb-2"><a href="/pages/about.html" class="text-light">About Us</a></li>
            <li class="mb-2"><a href="/" class="text-light">Home</a></li>
            <li class="mb-2"><a href="/pages/services.html" class="text-light">Services</a></li>
            <li class="mb-2"><a href="/pages/contact.html" class="text-light">Contact</a></li>
          </ul>
        </div>
        <div class="col-lg-2 col-md-6">
          <h6 class="fw-bold mb-3">Solutions</h6>
          <ul class="list-unstyled small">
            <li class="mb-2"><a href="/pages/services.html" class="text-light">AI Diagnostics</a></li>
            <li class="mb-2"><a href="/pages/services.html" class="text-light">Patient Monitoring</a></li>
            <li class="mb-2"><a href="/pages/technology.html" class="text-light">Technology</a></li>
            <li class="mb-2"><a href="/pages/services.html" class="text-light">Pricing</a></li>
          </ul>
        </div>
        <div class="col-lg-4 col-md-6">
          <h6 class="fw-bold mb-3">Get in Touch</h6>
          <p class="small mb-2"><i class="bi bi-geo-alt me-2"></i>123 Medical Center Dr, Boston, MA</p>
          <p class="small mb-2"><i class="bi bi-telephone me-2"></i>+1 (800) 555-0199</p>
          <p class="small mb-2"><i class="bi bi-envelope me-2"></i>info@medicore-ai.com</p>
        </div>
      </div>
      <hr class="my-4" style="border-color: rgba(255,255,255,0.2);">
      <div class="text-center small">
        <p>&copy; 2026 MediCore AI. All rights reserved.</p>
      </div>
    </div>
  `
  return footer
}

export function initRevealAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    },
    { threshold: 0.15 }
  )

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-zoom').forEach((el) => {
    observer.observe(el)
  })
}

export function initNavbarScroll() {
  const navbar = document.getElementById('mainNavbar')
  if (!navbar) return
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled')
    } else {
      navbar.classList.remove('scrolled')
    }
  })
}

export function initPage(themeClass) {
  document.body.prepend(createNavbar(themeClass))
  document.body.appendChild(createFooter(themeClass))
  initRevealAnimations()
  initNavbarScroll()
}
