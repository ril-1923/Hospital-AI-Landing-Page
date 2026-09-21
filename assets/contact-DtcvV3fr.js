import{i as d}from"./main-a3zP5gIl.js";document.getElementById("app").innerHTML=`
  <!-- Contact Hero -->
  <section class="contact-hero">
    <div class="deco-ring"></div>
    <div class="deco-ring deco-ring-2"></div>
    <div class="container position-relative" style="z-index: 2;">
      <div class="row">
        <div class="col-lg-8">
          <span class="badge bg-light text-dark mb-3 px-3 py-2">
            <i class="bi bi-chat-dots me-1"></i>Get In Touch
          </span>
          <h1 class="mb-4">Let's Build the Future<br>of Healthcare Together</h1>
          <p class="lead mb-4">Whether you want a demo, have questions, or are ready to deploy — we'd love to hear from you.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Info Cards -->
  <section class="contact-info-section section-pad">
    <div class="container">
      <div class="row g-4">
        <div class="col-md-4 reveal-left">
          <div class="contact-info-card h-100">
            <div class="contact-icon-circle"><i class="bi bi-geo-alt"></i></div>
            <h5 class="fw-bold">Visit Us</h5>
            <p class="text-muted mb-0">123 Medical Center Dr<br>Boston, MA 02115<br>United States</p>
          </div>
        </div>
        <div class="col-md-4 reveal">
          <div class="contact-info-card h-100">
            <div class="contact-icon-circle"><i class="bi bi-telephone"></i></div>
            <h5 class="fw-bold">Call Us</h5>
            <p class="text-muted mb-0">Main: +1 (800) 555-0199<br>Support: +1 (800) 555-0200<br>Sales: +1 (800) 555-0201</p>
          </div>
        </div>
        <div class="col-md-4 reveal-right">
          <div class="contact-info-card h-100">
            <div class="contact-icon-circle"><i class="bi bi-envelope"></i></div>
            <h5 class="fw-bold">Email Us</h5>
            <p class="text-muted mb-0">info@medicore-ai.com<br>sales@medicore-ai.com<br>support@medicore-ai.com</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Form Section -->
  <section class="form-section section-pad">
    <div class="container">
      <div class="text-center mb-5 reveal">
        <span class="badge bg-warning-subtle text-warning mb-2">Send a Message</span>
        <h2 class="fw-bold display-6">Request a Free Demo</h2>
        <p class="text-muted">Fill out the form and our team will reach out within 24 hours</p>
      </div>

      <div id="formContainer" class="reveal">
        <form class="contact-form" id="contactForm" novalidate>
          <div class="row g-3">
            <div class="col-md-6">
              <label class="form-label fw-semibold">Full Name <span class="text-danger">*</span></label>
              <input type="text" class="form-control form-control-custom" id="name" placeholder="John Smith" required>
              <div class="invalid-feedback">Please enter your name.</div>
            </div>
            <div class="col-md-6">
              <label class="form-label fw-semibold">Email Address <span class="text-danger">*</span></label>
              <input type="email" class="form-control form-control-custom" id="email" placeholder="john@hospital.com" required>
              <div class="invalid-feedback">Please enter a valid email.</div>
            </div>
            <div class="col-md-6">
              <label class="form-label fw-semibold">Phone Number</label>
              <input type="tel" class="form-control form-control-custom" id="phone" placeholder="+1 (555) 000-0000">
            </div>
            <div class="col-md-6">
              <label class="form-label fw-semibold">Hospital / Organization <span class="text-danger">*</span></label>
              <input type="text" class="form-control form-control-custom" id="org" placeholder="Boston General Hospital" required>
              <div class="invalid-feedback">Please enter your organization.</div>
            </div>
            <div class="col-12">
              <label class="form-label fw-semibold">I'm interested in <span class="text-danger">*</span></label>
              <select class="form-control form-control-custom" id="interest" required>
                <option value="">Select a service...</option>
                <option>AI Diagnostics</option>
                <option>Patient Monitoring</option>
                <option>Predictive Analytics</option>
                <option>Virtual Health Assistant</option>
                <option>Smart Medical Records</option>
                <option>Full Platform (All Services)</option>
              </select>
              <div class="invalid-feedback">Please select a service.</div>
            </div>
            <div class="col-12">
              <label class="form-label fw-semibold">Message</label>
              <textarea class="form-control form-control-custom" id="message" rows="4" placeholder="Tell us about your needs..."></textarea>
            </div>
            <div class="col-12 text-center">
              <button type="submit" class="btn btn-warning btn-glow btn-lg px-5">
                <i class="bi bi-send me-2"></i>Send Request
              </button>
            </div>
          </div>
        </form>
      </div>

      <div class="success-message" id="successMessage">
        <div class="success-checkmark"><i class="bi bi-check-lg"></i></div>
        <h3 class="fw-bold text-success">Message Sent!</h3>
        <p class="text-muted">Thank you for reaching out. Our team will contact you within 24 hours.</p>
        <button class="btn btn-outline-warning btn-glow mt-3" id="sendAnother">
          <i class="bi bi-arrow-left me-2"></i>Send Another Message
        </button>
      </div>
    </div>
  </section>

  <!-- Map Section -->
  <section class="map-section section-pad">
    <div class="container">
      <div class="text-center mb-4 reveal">
        <span class="badge bg-warning-subtle text-warning mb-2">Find Us</span>
        <h2 class="fw-bold display-6">Our Headquarters</h2>
      </div>
      <div class="map-placeholder reveal-zoom">
        <div class="text-center">
          <div class="map-pin"><i class="bi bi-geo-alt-fill"></i></div>
          <h5 class="mt-3">Boston, Massachusetts</h5>
          <p>123 Medical Center Dr, Boston, MA 02115</p>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ Section -->
  <section class="faq-section section-pad">
    <div class="container">
      <div class="text-center mb-5 reveal">
        <span class="badge bg-warning-subtle text-warning mb-2">FAQ</span>
        <h2 class="fw-bold display-6">Frequently Asked Questions</h2>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-8 reveal">
          <div class="accordion faq-accordion" id="faqAccordion">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                  How long does it take to implement MediCore AI in our hospital?
                </button>
              </h2>
              <div id="faq1" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div class="accordion-body text-muted">Typical implementation takes 4-8 weeks depending on your hospital's size and existing systems. We handle integration, training, and go-live support.</div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                  Is patient data secure and HIPAA compliant?
                </button>
              </h2>
              <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div class="accordion-body text-muted">Absolutely. We use end-to-end encryption, zero-knowledge architecture, and are fully HIPAA compliant and SOC 2 Type II certified. Patient data never leaves your secure environment.</div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                  Can MediCore AI integrate with our existing EHR system?
                </button>
              </h2>
              <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div class="accordion-body text-muted">Yes. We support integration with Epic, Cerner, Allscripts, and most major EHR systems via HL7 FHIR APIs. Our team handles the full integration process.</div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
                  Do you offer training for our medical staff?
                </button>
              </h2>
              <div id="faq4" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div class="accordion-body text-muted">Yes, comprehensive training is included in all plans. We provide on-site training sessions, video tutorials, and ongoing support to ensure your staff is confident using the platform.</div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq5">
                  What is the diagnostic accuracy of your AI models?
                </button>
              </h2>
              <div id="faq5" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div class="accordion-body text-muted">Our models achieve 99.2% diagnostic accuracy across 50+ medical conditions, consistently outperforming industry standards. However, AI is always used as a decision-support tool alongside physicians, never as a replacement.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
`;d("contact");const i=document.getElementById("contactForm"),o=document.getElementById("formContainer"),c=document.getElementById("successMessage"),r=document.getElementById("sendAnother");i.addEventListener("submit",s=>{s.preventDefault();const l=[{id:"name",validate:e=>e.trim().length>0},{id:"email",validate:e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)},{id:"org",validate:e=>e.trim().length>0},{id:"interest",validate:e=>e.trim().length>0}];let t=!0;l.forEach(({id:e,validate:n})=>{const a=document.getElementById(e);n(a.value)?a.classList.remove("error","is-invalid"):(a.classList.add("error","is-invalid"),t=!1)}),t&&(o.style.display="none",c.classList.add("show"))});r.addEventListener("click",()=>{i.reset(),c.classList.remove("show"),o.style.display="block"});document.querySelectorAll(".form-control-custom").forEach(s=>{s.addEventListener("input",()=>{s.classList.remove("error","is-invalid")})});
