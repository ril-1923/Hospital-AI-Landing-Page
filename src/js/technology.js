import { initPage } from './main.js'
import '../css/technology.css'

document.getElementById('app').innerHTML = `
  <!-- Technology Hero -->
  <section class="tech-hero">
    <div class="container position-relative" style="z-index: 2;">
      <div class="row">
        <div class="col-lg-8">
          <span class="badge bg-light text-info mb-3 px-3 py-2">
            <i class="bi bi-cpu me-1"></i>Under the Hood
          </span>
          <h1 class="mb-4">The Technology Behind<br>MediCore AI</h1>
          <p class="lead mb-4">Deep learning, computer vision, and NLP models trained on millions of medical cases — engineered for clinical-grade accuracy.</p>
          <a href="#ai-models" class="btn btn-light btn-glow btn-lg">
            <i class="bi bi-arrow-down me-2"></i>Explore the Tech
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- AI Models Section -->
  <section class="ai-model-section section-pad" id="ai-models">
    <div class="container">
      <div class="text-center mb-5 reveal">
        <span class="badge bg-info-subtle text-info mb-2">AI Models</span>
        <h2 class="fw-bold display-6">Our AI Model Suite</h2>
        <p class="text-muted">State-of-the-art models for every medical AI use case</p>
      </div>
      <div class="row g-4">
        <div class="col-lg-4 col-md-6 reveal-left">
          <div class="model-card h-100">
            <div class="model-icon"><i class="bi bi-eye"></i></div>
            <h5 class="fw-bold">VisionMed-X</h5>
            <p class="text-muted">Computer vision model for medical imaging. Analyzes X-rays, MRIs, and CT scans with 99.2% accuracy across 50+ conditions.</p>
            <div class="d-flex gap-2 flex-wrap">
              <span class="badge bg-info-subtle text-info">CNN</span>
              <span class="badge bg-info-subtle text-info">ResNet-152</span>
              <span class="badge bg-info-subtle text-info">Vision Transformer</span>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 reveal">
          <div class="model-card h-100">
            <div class="model-icon"><i class="bi bi-chat-dots"></i></div>
            <h5 class="fw-bold">MedLang-NLP</h5>
            <p class="text-muted">Natural language processing model that understands medical terminology, clinical notes, and patient queries in 30+ languages.</p>
            <div class="d-flex gap-2 flex-wrap">
              <span class="badge bg-info-subtle text-info">Transformer</span>
              <span class="badge bg-info-subtle text-info">BERT-Medical</span>
              <span class="badge bg-info-subtle text-info">GPT</span>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 reveal-right">
          <div class="model-card h-100">
            <div class="model-icon"><i class="bi bi-graph-up-arrow"></i></div>
            <h5 class="fw-bold">PredictCare</h5>
            <p class="text-muted">Time-series forecasting model that predicts patient admission trends, ICU capacity needs, and disease outbreak risks.</p>
            <div class="d-flex gap-2 flex-wrap">
              <span class="badge bg-info-subtle text-info">LSTM</span>
              <span class="badge bg-info-subtle text-info">XGBoost</span>
              <span class="badge bg-info-subtle text-info">Prophet</span>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 reveal-left">
          <div class="model-card h-100">
            <div class="model-icon"><i class="bi bi-heart-pulse"></i></div>
            <h5 class="fw-bold">VitalWatch</h5>
            <p class="text-muted">Real-time anomaly detection model that monitors patient vitals and flags critical events 15 minutes before they occur.</p>
            <div class="d-flex gap-2 flex-wrap">
              <span class="badge bg-info-subtle text-info">Autoencoder</span>
              <span class="badge bg-info-subtle text-info">Stream ML</span>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 reveal">
          <div class="model-card h-100">
            <div class="model-icon"><i class="bi bi-prescription2"></i></div>
            <h5 class="fw-bold">PharmaGuard</h5>
            <p class="text-muted">Drug interaction and allergy detection model trained on 10M+ prescription records and pharmacological databases.</p>
            <div class="d-flex gap-2 flex-wrap">
              <span class="badge bg-info-subtle text-info">Graph NN</span>
              <span class="badge bg-info-subtle text-info">Knowledge Graph</span>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 reveal-right">
          <div class="model-card h-100">
            <div class="model-icon"><i class="bi bi-diagram-3"></i></div>
            <h5 class="fw-bold">DiagnosAI</h5>
            <p class="text-muted">Multi-modal fusion model combining imaging, lab results, and patient history for comprehensive diagnostic support.</p>
            <div class="d-flex gap-2 flex-wrap">
              <span class="badge bg-info-subtle text-info">Multi-Modal</span>
              <span class="badge bg-info-subtle text-info">Fusion Net</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Architecture Section -->
  <section class="arch-section section-pad">
    <div class="container">
      <div class="text-center mb-5 reveal">
        <span class="badge bg-info text-dark mb-2">System Architecture</span>
        <h2 class="fw-bold display-6">How It All Connects</h2>
        <p class="text-white-50">A scalable, secure pipeline from data to diagnosis</p>
      </div>
      <div class="row align-items-center g-3 reveal-zoom">
        <div class="col-lg-2 col-md-4 col-6">
          <div class="arch-node">
            <i class="bi bi-hospital fs-2 text-info d-block mb-2"></i>
            <h6 class="mb-0">Hospital Data</h6>
            <small class="text-white-50">EHR, Imaging, Vitals</small>
          </div>
        </div>
        <div class="col-lg-1 arch-arrow d-none d-lg-flex"><i class="bi bi-arrow-right"></i></div>
        <div class="col-lg-2 col-md-4 col-6">
          <div class="arch-node">
            <i class="bi bi-shield-lock fs-2 text-info d-block mb-2"></i>
            <h6 class="mb-0">Secure Pipeline</h6>
            <small class="text-white-50">HIPAA Encrypted</small>
          </div>
        </div>
        <div class="col-lg-1 arch-arrow d-none d-lg-flex"><i class="bi bi-arrow-right"></i></div>
        <div class="col-lg-2 col-md-4 col-6">
          <div class="arch-node">
            <i class="bi bi-cpu fs-2 text-info d-block mb-2"></i>
            <h6 class="mb-0">AI Models</h6>
            <small class="text-white-50">Inference Engine</small>
          </div>
        </div>
        <div class="col-lg-1 arch-arrow d-none d-lg-flex"><i class="bi bi-arrow-right"></i></div>
        <div class="col-lg-2 col-md-4 col-6">
          <div class="arch-node">
            <i class="bi bi-clipboard2-pulse fs-2 text-info d-block mb-2"></i>
            <h6 class="mb-0">Clinical Dashboard</h6>
            <small class="text-white-50">Real-Time Insights</small>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Security Section -->
  <section class="security-section section-pad">
    <div class="container">
      <div class="text-center mb-5 reveal">
        <span class="badge bg-info-subtle text-info mb-2">Security & Compliance</span>
        <h2 class="fw-bold display-6">Security You Can Trust</h2>
        <p class="text-muted">Patient data protection is built into our DNA</p>
      </div>
      <div class="row g-3 justify-content-center reveal">
        <div class="col-auto"><div class="security-badge text-success"><i class="bi bi-shield-check"></i>HIPAA Compliant</div></div>
        <div class="col-auto"><div class="security-badge text-success"><i class="bi bi-shield-lock"></i>SOC 2 Type II</div></div>
        <div class="col-auto"><div class="security-badge text-success"><i class="bi bi-lock"></i>End-to-End Encryption</div></div>
        <div class="col-auto"><div class="security-badge text-success"><i class="bi bi-key"></i>Zero-Knowledge Architecture</div></div>
        <div class="col-auto"><div class="security-badge text-success"><i class="bi bi-globe2"></i>GDPR Ready</div></div>
        <div class="col-auto"><div class="security-badge text-success"><i class="bi bi-bank"></i>FDA Cleared</div></div>
      </div>
    </div>
  </section>

  <!-- Performance Metrics -->
  <section class="metrics-section section-pad">
    <div class="container">
      <div class="text-center mb-5 reveal">
        <span class="badge bg-light text-info mb-2">Performance</span>
        <h2 class="fw-bold display-6">Benchmarked Excellence</h2>
        <p class="text-white-50">Our models consistently outperform industry standards</p>
      </div>
      <div class="row g-4">
        <div class="col-md-6 reveal-left">
          <div class="mb-4">
            <div class="d-flex justify-content-between mb-2">
              <span>Diagnostic Accuracy</span>
              <span class="fw-bold">99.2%</span>
            </div>
            <div class="metric-bar"><div class="metric-bar-fill" data-width="99%"></div></div>
          </div>
          <div class="mb-4">
            <div class="d-flex justify-content-between mb-2">
              <span>Processing Speed</span>
              <span class="fw-bold">95%</span>
            </div>
            <div class="metric-bar"><div class="metric-bar-fill" data-width="95%"></div></div>
          </div>
        </div>
        <div class="col-md-6 reveal-right">
          <div class="mb-4">
            <div class="d-flex justify-content-between mb-2">
              <span>False Positive Rate (Low)</span>
              <span class="fw-bold">2%</span>
            </div>
            <div class="metric-bar"><div class="metric-bar-fill" data-width="98%"></div></div>
          </div>
          <div class="mb-4">
            <div class="d-flex justify-content-between mb-2">
              <span>Model Uptime</span>
              <span class="fw-bold">99.9%</span>
            </div>
            <div class="metric-bar"><div class="metric-bar-fill" data-width="99%"></div></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Integration Section -->
  <section class="integration-section section-pad">
    <div class="container">
      <div class="text-center mb-5 reveal">
        <span class="badge bg-info-subtle text-info mb-2">Integrations</span>
        <h2 class="fw-bold display-6">Works With Your Stack</h2>
        <p class="text-muted">Seamlessly integrates with leading healthcare systems</p>
      </div>
      <div class="row g-4 text-center">
        <div class="col-lg-2 col-md-4 col-6 reveal-zoom">
          <div class="integration-logo"><i class="bi bi-hospital"></i></div>
          <p class="mt-2 small text-muted">Epic EHR</p>
        </div>
        <div class="col-lg-2 col-md-4 col-6 reveal-zoom">
          <div class="integration-logo"><i class="bi bi-file-medical"></i></div>
          <p class="mt-2 small text-muted">Cerner</p>
        </div>
        <div class="col-lg-2 col-md-4 col-6 reveal-zoom">
          <div class="integration-logo"><i class="bi bi-cloud"></i></div>
          <p class="mt-2 small text-muted">AWS Health</p>
        </div>
        <div class="col-lg-2 col-md-4 col-6 reveal-zoom">
          <div class="integration-logo"><i class="bi bi-database"></i></div>
          <p class="mt-2 small text-muted">Allscripts</p>
        </div>
        <div class="col-lg-2 col-md-4 col-6 reveal-zoom">
          <div class="integration-logo"><i class="bi bi-pulse"></i></div>
          <p class="mt-2 small text-muted">Philips</p>
        </div>
        <div class="col-lg-2 col-md-4 col-6 reveal-zoom">
          <div class="integration-logo"><i class="bi bi-camera"></i></div>
          <p class="mt-2 small text-muted">GE Healthcare</p>
        </div>
      </div>
    </div>
  </section>
`

initPage('technology')

// Animate metric bars when they come into view
const barObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const bar = entry.target
        bar.style.setProperty('--bar-width', bar.dataset.width)
        bar.classList.add('animate')
      }
    })
  },
  { threshold: 0.3 }
)
document.querySelectorAll('.metric-bar-fill').forEach((el) => barObserver.observe(el))
