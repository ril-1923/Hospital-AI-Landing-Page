(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function l(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(t){if(t.ep)return;t.ep=!0;const i=l(t);fetch(t.href,i)}})();function r(e){const a={home:{bg:"bg-dark",brand:"MediCore",color:"text-light",linkClass:"text-light"},services:{bg:"bg-success",brand:"MediCore",color:"text-light",linkClass:"text-light"},about:{bg:"bg-dark",brand:"MediCore",color:"text-light",linkClass:"text-light"},technology:{bg:"bg-info",brand:"MediCore",color:"text-light",linkClass:"text-light"},contact:{bg:"bg-warning",brand:"MediCore",color:"text-dark",linkClass:"text-dark"}},l=a[e]||a.home,s=document.createElement("nav");return s.className=`navbar navbar-expand-lg ${l.bg} ${l.color} navbar-custom fixed-top`,s.id="mainNavbar",s.innerHTML=`
    <div class="container">
      <a class="navbar-brand navbar-brand-text ${l.color}" href="/">
        <i class="bi bi-heart-pulse-fill me-2"></i>${l.brand}<span class="text-warning"> AI</span>
      </a>
      <button class="navbar-toggler ${l.color==="text-dark"?"":"navbar-dark"}" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu" aria-controls="navMenu" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navMenu">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link ${l.linkClass} ${e==="home"?"fw-bold":""}" href="/">Home</a></li>
          <li class="nav-item"><a class="nav-link ${l.linkClass} ${e==="services"?"fw-bold":""}" href="/pages/services.html">Services</a></li>
          <li class="nav-item"><a class="nav-link ${l.linkClass} ${e==="about"?"fw-bold":""}" href="/pages/about.html">About</a></li>
          <li class="nav-item"><a class="nav-link ${l.linkClass} ${e==="technology"?"fw-bold":""}" href="/pages/technology.html">Technology</a></li>
          <li class="nav-item"><a class="nav-link ${l.linkClass} ${e==="contact"?"fw-bold":""}" href="/pages/contact.html">Contact</a></li>
        </ul>
      </div>
    </div>
  `,s}function c(e){const l={home:"bg-dark text-light",services:"bg-dark text-light",about:"bg-dark text-light",technology:"bg-info text-light",contact:"bg-dark text-light"}[e]||"bg-dark text-light",s=document.createElement("footer");return s.className=`footer ${l}`,s.innerHTML=`
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
  `,s}function n(){const e=new IntersectionObserver(a=>{a.forEach(l=>{l.isIntersecting&&l.target.classList.add("active")})},{threshold:.15});document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-zoom").forEach(a=>{e.observe(a)})}function d(){const e=document.getElementById("mainNavbar");e&&window.addEventListener("scroll",()=>{window.scrollY>60?e.classList.add("scrolled"):e.classList.remove("scrolled")})}function b(e){document.body.prepend(r(e)),document.body.appendChild(c(e)),n(),d()}export{b as i};
