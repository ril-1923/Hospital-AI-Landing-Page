import { initPage } from './main.js'
import '../css/services.css'

document.getElementById('app').innerHTML = `
  <!-- Services Hero -->
  <section class="services-hero">
    <div class="container position-relative" style="z-index: 2;">
      <div class="row">
        <div class="col-lg-8">
          <span class="badge bg-light text-success mb-3 px-3 py-2">
            <i class="bi bi-grid me-1"></i>Our Solutions
          </span>
          <h1 class="mb-4">AI Services Built for<br>Modern Healthcare</h1>
          <p class="lead mb-4">From diagnostics to patient monitoring, our AI-powered services cover the full spectrum of hospital needs.</p>
          <a href="#services-grid" class="btn btn-light btn-glow btn-lg">
            <i class="bi bi-arrow-down me-2"></i>Browse Services
          </a>
        </div>
      </div>
    </div>
    <div class="wave"></div>
  </section>

  <!-- Services Grid -->
  <section class="services-grid-section section-pad" id="services-grid">
    <div class="container">
      <div class="text-center mb-5 reveal">
        <span class="badge bg-success-subtle text-success mb-2">What We Offer</span>
        <h2 class="fw-bold display-6">Comprehensive AI Services</h2>
        <p class="text-muted">Tailored solutions for every department in your hospital</p>
      </div>
      <div class="row g-4">
        <div class="col-lg-4 col-md-6 reveal-left">
          <div class="card service-card h-100">
            <div class="card-header-custom">
              <div class="service-icon-lg"><i class="bi bi-camera"></i></div>
              <h5 class="fw-bold mb-0">AI Medical Imaging</h5>
            </div>
            <div class="card-body">
              <p class="text-muted">Advanced computer vision models analyze X-rays, MRIs, and CT scans to detect abnormalities with superhuman precision.</p>
              <span class="service-tag">Radiology</span>
              <span class="service-tag">Oncology</span>
              <span class="service-tag">Cardiology</span>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 reveal">
          <div class="card service-card h-100">
            <div class="card-header-custom">
              <div class="service-icon-lg"><i class="bi bi-heart-pulse"></i></div>
              <h5 class="fw-bold mb-0">Patient Monitoring</h5>
            </div>
            <div class="card-body">
              <p class="text-muted">24/7 AI monitoring of vital signs with instant alerts for critical changes, reducing response times by up to 80%.</p>
              <span class="service-tag">ICU</span>
              <span class="service-tag">ER</span>
              <span class="service-tag">Post-Op</span>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 reveal-right">
          <div class="card service-card h-100">
            <div class="card-header-custom">
              <div class="service-icon-lg"><i class="bi bi-graph-up-arrow"></i></div>
              <h5 class="fw-bold mb-0">Predictive Analytics</h5>
            </div>
            <div class="card-body">
              <p class="text-muted">Forecast patient admissions, disease outbreaks, and resource needs with ML-powered predictive models.</p>
              <span class="service-tag">Planning</span>
              <span class="service-tag">Operations</span>
              <span class="service-tag">Epidemiology</span>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 reveal-left">
          <div class="card service-card h-100">
            <div class="card-header-custom">
              <div class="service-icon-lg"><i class="bi bi-chat-dots"></i></div>
              <h5 class="fw-bold mb-0">Virtual Health Assistant</h5>
            </div>
            <div class="card-body">
              <p class="text-muted">AI chatbot for patient triage, appointment scheduling, and answering common health questions around the clock.</p>
              <span class="service-tag">Triage</span>
              <span class="service-tag">Scheduling</span>
              <span class="service-tag">FAQ</span>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 reveal">
          <div class="card service-card h-100">
            <div class="card-header-custom">
              <div class="service-icon-lg"><i class="bi bi-file-earmark-medical"></i></div>
              <h5 class="fw-bold mb-0">Smart Medical Records</h5>
            </div>
            <div class="card-body">
              <p class="text-muted">NLP-powered medical record analysis and auto-summarization with intelligent search across patient history.</p>
              <span class="service-tag">EHR</span>
              <span class="service-tag">NLP</span>
              <span class="service-tag">Search</span>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 reveal-right">
          <div class="card service-card h-100">
            <div class="card-header-custom">
              <div class="service-icon-lg"><i class="bi bi-shield-plus"></i></div>
              <h5 class="fw-bold mb-0">Drug Interaction AI</h5>
            </div>
            <div class="card-body">
              <p class="text-muted">Real-time analysis of prescriptions to flag dangerous drug interactions and allergic reactions before they happen.</p>
              <span class="service-tag">Pharmacy</span>
              <span class="service-tag">Safety</span>
              <span class="service-tag">Alerts</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Process Timeline -->
  <section class="process-section section-pad">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 mb-4 reveal-left">
          <span class="badge bg-success-subtle text-success mb-2">How It Works</span>
          <h2 class="fw-bold display-6 mb-4">Our Implementation Process</h2>
          <p class="text-muted">Getting started with MediCore AI is simple. We guide you through every step from onboarding to full deployment.</p>
          <a href="/pages/contact.html" class="btn btn-success btn-glow btn-lg mt-3">
            <i class="bi bi-rocket-takeoff me-2"></i>Get Started
          </a>
        </div>
        <div class="col-lg-7 reveal-right">
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <h5 class="fw-bold">1. Consultation & Assessment</h5>
            <p class="text-muted">We analyze your hospital's current systems, workflows, and needs to recommend the best AI solutions.</p>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <h5 class="fw-bold">2. Custom Integration</h5>
            <p class="text-muted">Our team integrates MediCore AI with your existing EHR, imaging systems, and monitoring infrastructure.</p>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <h5 class="fw-bold">3. Staff Training</h5>
            <p class="text-muted">Comprehensive training for your medical staff to use AI tools effectively and confidently.</p>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <h5 class="fw-bold">4. Go Live & Support</h5>
            <p class="text-muted">Full deployment with 24/7 technical support and continuous AI model improvements.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Pricing Section -->
  <section class="pricing-section section-pad">
    <div class="container">
      <div class="text-center mb-5 reveal">
        <span class="badge bg-success-subtle text-success mb-2">Pricing</span>
        <h2 class="fw-bold display-6">Plans for Every Hospital</h2>
        <p class="text-muted">Transparent pricing with no hidden fees</p>
      </div>
      <div class="row g-4 justify-content-center">
        <div class="col-lg-4 col-md-6 reveal-left">
          <div class="card price-card h-100 p-4">
            <div class="text-center mb-4">
              <span class="badge bg-success-subtle text-success mb-2">Starter</span>
              <div class="price-amount">$2,999<span class="fs-6 text-muted">/mo</span></div>
              <p class="text-muted small">For small clinics and practices</p>
            </div>
            <ul class="list-unstyled">
              <li class="mb-3"><i class="bi bi-check-circle-fill text-success me-2"></i>AI Diagnostics (up to 500 scans/mo)</li>
              <li class="mb-3"><i class="bi bi-check-circle-fill text-success me-2"></i>Basic Patient Monitoring</li>
              <li class="mb-3"><i class="bi bi-check-circle-fill text-success me-2"></i>Email Support</li>
              <li class="mb-3"><i class="bi bi-check-circle-fill text-success me-2"></i>5 User Accounts</li>
            </ul>
            <a href="/pages/contact.html" class="btn btn-outline-success btn-glow w-100 mt-3">Choose Starter</a>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 reveal">
          <div class="card price-card featured h-100 p-4">
            <div class="text-center mb-4">
              <span class="badge bg-success text-white mb-2">Most Popular</span>
              <div class="price-amount">$7,999<span class="fs-6 text-muted">/mo</span></div>
              <p class="text-muted small">For mid-size hospitals</p>
            </div>
            <ul class="list-unstyled">
              <li class="mb-3"><i class="bi bi-check-circle-fill text-success me-2"></i>Unlimited AI Diagnostics</li>
              <li class="mb-3"><i class="bi bi-check-circle-fill text-success me-2"></i>Full Patient Monitoring Suite</li>
              <li class="mb-3"><i class="bi bi-check-circle-fill text-success me-2"></i>Predictive Analytics</li>
              <li class="mb-3"><i class="bi bi-check-circle-fill text-success me-2"></i>Priority Phone & Email Support</li>
              <li class="mb-3"><i class="bi bi-check-circle-fill text-success me-2"></i>25 User Accounts</li>
            </ul>
            <a href="/pages/contact.html" class="btn btn-success btn-glow w-100 mt-3">Choose Professional</a>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 reveal-right">
          <div class="card price-card h-100 p-4">
            <div class="text-center mb-4">
              <span class="badge bg-success-subtle text-success mb-2">Enterprise</span>
              <div class="price-amount">Custom</div>
              <p class="text-muted small">For large hospital networks</p>
            </div>
            <ul class="list-unstyled">
              <li class="mb-3"><i class="bi bi-check-circle-fill text-success me-2"></i>Everything in Professional</li>
              <li class="mb-3"><i class="bi bi-check-circle-fill text-success me-2"></i>Custom AI Model Training</li>
              <li class="mb-3"><i class="bi bi-check-circle-fill text-success me-2"></i>Dedicated Account Manager</li>
              <li class="mb-3"><i class="bi bi-check-circle-fill text-success me-2"></i>24/7 On-Site Support</li>
              <li class="mb-3"><i class="bi bi-check-circle-fill text-success me-2"></i>Unlimited Users</li>
            </ul>
            <a href="/pages/contact.html" class="btn btn-outline-success btn-glow w-100 mt-3">Contact Sales</a>
          </div>
        </div>
      </div>
    </div>
  </section>
`

initPage('services')
