import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dental Clinic Sungai Petani | Calm, Modern Dental Care",
  description:
    "Modern dental care in Sungai Petani for families, braces, implants, and general dentistry. Calm consultations, structured treatment planning, and patient-focused care.",
};

const whatsapp =
  "https://wa.me/60174791140?text=Hello%20KPDS%2C%20I%20would%20like%20to%20speak%20to%20your%20care%20team.";

const services = [
  ["01", "Braces & Aligners", "Orthodontic treatment designed to improve alignment, bite function, and long-term oral health."],
  ["02", "Dental Implants", "Structured implant planning for missing teeth replacement with long-term stability in mind."],
  ["03", "General Dentistry", "Routine dental care including examinations, scaling, fillings, gum care, and preventive treatment."],
  ["04", "Teeth Whitening", "Professional whitening treatment designed for safer, more predictable shade improvement."],
  ["05", "Family Dental Care", "Dental care for adults, teenagers, and children in a calm clinical environment."],
  ["06", "Restorative Dentistry", "Treatment focused on restoring comfort, chewing function, and tooth structure."],
];

const approach = [
  ["Diagnosis Before Treatment", "Every treatment begins with understanding the cause, condition, and long-term implications — not just symptoms alone."],
  ["Evidence-Based Dentistry", "Clinical recommendations are guided by current dental principles, imaging, and patient suitability."],
  ["Transparent Planning", "We explain findings, options, expected timelines, and costs clearly so patients can make informed decisions comfortably."],
  ["Long-Term Perspective", "Our focus is not only immediate treatment, but helping patients maintain stable oral health over time."],
];

const articles = [
  ["What Is the Difference Between Braces and Aligners?", "5 min read"],
  ["Are Dental Implants Better Than Bridges?", "4 min read"],
  ["How Often Should You Visit the Dentist?", "3 min read"],
];

const faqs = [
  ["Do I need an appointment before visiting?", "Appointments are encouraged to reduce waiting time and allow sufficient consultation time for each patient."],
  ["Do you provide braces and aligner treatment?", "Yes. We provide orthodontic consultations for conventional braces, self-ligating braces, and aligners depending on patients preference & suitability."],
  ["Do you offer dental implant treatment?", "Yes. Implant treatment begins with assessment and planning to evaluate bone condition, oral health, and treatment suitability."],
  ["Is the clinic suitable for children and families?", "Yes. We provide general dental care for both adults and children in a calm and structured environment."],
  ["How do I know which treatment is suitable for me?", "A consultation allows the dentist to assess your condition, explain available options, and recommend suitable next steps."],
];

function GuideLabel({ children }: { children: React.ReactNode }) {
  return <span className="guide-label">{children}</span>;
}

export default function Home() {
  return (
    <main id="top">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="mockup-key"><span /> Layout guides: content box / padding</div>

      <header className="site-header section-frame">
        <GuideLabel>header · 24px padding</GuideLabel>
        <div className="shell header-inner inner-frame">
          <a className="brand" href="#top" aria-label="Klinik Pergigian Dr Syazwan home">
            <span className="brand-mark">KPDS</span>
            <span className="brand-name"><strong>Klinik Pergigian</strong><small>Dr Syazwan</small></span>
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#services">Services</a><a href="#locations">Locations</a>
            <a href="#education">Education</a><a href="#about">About</a>
          </nav>
          <a className="button button-small" href={whatsapp}>Speak to Our Care Team <span aria-hidden="true">↗</span></a>
          <details className="mobile-menu"><summary aria-label="Open menu">Menu</summary><nav><a href="#services">Services</a><a href="#locations">Locations</a><a href="#education">Education</a><a href="#about">About</a><a href={whatsapp}>WhatsApp</a></nav></details>
        </div>
      </header>

      <section className="hero section-frame" id="main-content">
        <GuideLabel>hero · 112px vertical padding</GuideLabel>
        <div className="shell hero-grid inner-frame">
          <div className="hero-copy content-frame">
            <GuideLabel>copy · 40px padding</GuideLabel>
            <p className="eyebrow">DENTAL CLINIC SUNGAI PETANI</p>
            <h1>Modern dental care in Sungai Petani.</h1>
            <p className="hero-statement">Thoughtful, structured and patient-focused.</p>
            <p className="lead">From routine dental care to braces, aligners, and dental implants, we focus on careful diagnosis, clear planning, and long-term oral health — without pressure or unnecessary treatment.</p>
            <div className="button-row"><a className="button" href={whatsapp}>Speak to Our Care Team <span aria-hidden="true">↗</span></a><a className="button button-secondary" href="#approach">Learn About Our Approach</a></div>
          </div>
          <figure className="hero-visual content-frame"><GuideLabel>image · 24px inset</GuideLabel><img src="/kpds-hero.png" alt="Dental professional speaking with a patient in a calm modern clinic" /><figcaption><span>Calm consultations</span><span>Clear next steps</span></figcaption></figure>
        </div>
      </section>

      <section className="answer-section section-frame">
        <GuideLabel>AEO block · 48px padding</GuideLabel>
        <div className="shell answer-grid inner-frame">
          <div><p className="eyebrow">QUICK ANSWER</p><h2>What does your clinic provide?</h2></div>
          <p>We provide modern dental care in Sungai Petani for children, adults, and families, including braces, aligners, and dental implants. Our approach focuses on accurate diagnosis, evidence-based treatment planning, and clear communication so patients understand their options before making decisions.</p>
        </div>
      </section>

      <section className="trust section-frame" aria-label="Clinic trust points"><GuideLabel>trust strip · 24px padding</GuideLabel><div className="shell trust-grid inner-frame">{["Experienced clinical team","Registered dental professionals","Modern digital imaging and treatment methods","Patient-focused consultations and planning"].map((item,index)=><div key={item}><span>0{index+1}</span><p>{item}</p></div>)}</div></section>

      <section className="section section-frame" id="services">
        <GuideLabel>services · 112px vertical padding</GuideLabel>
        <div className="shell inner-frame"><div className="section-head"><div><p className="eyebrow">OUR SERVICES</p><h2>Our clinical services</h2></div><p>Carefully planned treatment for everyday needs, complex cases and long-term oral health.</p></div>
          <div className="card-grid">{services.map(([number,title,description])=><article className="service-card content-frame" key={title}><GuideLabel>card · 32px padding</GuideLabel><span className="card-number">{number}</span><div className="service-mark" aria-hidden="true"><span /></div><h3>{title}</h3><p>{description}</p><a className="text-link" href="#contact">Learn More <span aria-hidden="true">→</span></a></article>)}</div>
        </div>
      </section>

      <section className="section approach-section section-frame" id="approach">
        <GuideLabel>approach · 104px vertical padding</GuideLabel>
        <div className="shell approach-layout inner-frame"><div className="sticky-heading"><p className="eyebrow">HOW WE WORK</p><h2>How we approach care</h2><p>Clear thinking first. Treatment decisions second.</p></div><div className="approach-list">{approach.map(([title,description],index)=><article className="approach-card content-frame" key={title}><GuideLabel>row · 28px padding</GuideLabel><span>0{index+1}</span><div><h3>{title}</h3><p>{description}</p></div></article>)}</div></div>
      </section>

      <section className="section section-frame" id="about">
        <GuideLabel>doctors · 112px vertical padding</GuideLabel>
        <div className="shell inner-frame"><div className="section-head"><div><p className="eyebrow">MEET THE TEAM</p><h2>Our doctors</h2></div><p>Patient-centred dentistry supported by structured clinical planning.</p></div>
          <article className="doctor-card content-frame"><GuideLabel>profile · 40px padding</GuideLabel><div className="doctor-placeholder" aria-hidden="true"><span>Profile image</span></div><div><span className="pending-chip">Content to confirm</span><h3>Dr. [Name]</h3><p className="credentials">DDS / BDS / Relevant Credentials</p><p>Focused on patient-centred dentistry with interests in restorative treatment, braces, and long-term treatment planning.</p><a className="text-link" href="#contact">View Profile <span aria-hidden="true">→</span></a></div></article>
        </div>
      </section>

      <section className="section education-section section-frame" id="education">
        <GuideLabel>education · 104px vertical padding</GuideLabel>
        <div className="shell inner-frame"><div className="section-head"><div><p className="eyebrow">PATIENT EDUCATION</p><h2>Learn before you decide</h2></div><p>Plain-language guidance for more informed conversations about your oral health.</p></div><div className="article-grid">{articles.map(([title,time],index)=><article className="article-card content-frame" key={title}><GuideLabel>article · 28px padding</GuideLabel><span className="article-index">0{index+1}</span><p className="article-type">GUIDE</p><h3>{title}</h3><div><span>{time}</span><a className="text-link" href="#contact">Read Article →</a></div></article>)}</div></div>
      </section>

      <section className="section section-frame" id="locations">
        <GuideLabel>location · 104px vertical padding</GuideLabel>
        <div className="shell location-card inner-frame"><div className="map-panel content-frame"><GuideLabel>map placeholder · 24px padding</GuideLabel><div className="map-grid" aria-hidden="true"><span className="map-pin">KPDS</span></div></div><div className="location-copy content-frame"><GuideLabel>copy · 40px padding</GuideLabel><p className="eyebrow">OUR LOCATIONS</p><h2>Sungai Petani</h2><p>Comfortable, appointment-based dental care serving Sungai Petani and nearby communities.</p><address>189, Ground Floor, Jalan Batik 2/1B<br />Taman Batik, 08000 Sungai Petani, Kedah</address><a className="button button-secondary" href="https://www.google.com/maps/search/?api=1&query=Klinik+Pergigian+Dr+Syazwan+Taman+Batik">View Clinic <span aria-hidden="true">↗</span></a></div></div>
      </section>

      <section className="section faq-section section-frame" id="faq">
        <GuideLabel>FAQ · 104px vertical padding</GuideLabel>
        <div className="reading-width inner-frame"><div className="faq-heading"><p className="eyebrow">COMMON QUESTIONS</p><h2>Answers before your visit</h2></div><div className="faq-list">{faqs.map(([question,answer],index)=><details className="content-frame" key={question} open={index===0}><summary><span>{question}</span><i aria-hidden="true" /></summary><p>{answer}</p></details>)}</div></div>
      </section>

      <section className="final-cta section-frame" id="contact"><GuideLabel>final CTA · 80px padding</GuideLabel><div className="shell cta-inner inner-frame"><div><p className="eyebrow">READY WHEN YOU ARE</p><h2>If you’d like to understand your options, speak to us.</h2></div><a className="button button-light" href={whatsapp}>Speak to Our Care Team <span aria-hidden="true">↗</span></a></div></section>

      <footer className="site-footer section-frame"><GuideLabel>footer · 72px padding</GuideLabel><div className="shell footer-grid inner-frame"><div className="footer-intro"><a className="brand brand-light" href="#top"><span className="brand-mark">KPDS</span><span className="brand-name"><strong>Klinik Pergigian</strong><small>Dr Syazwan</small></span></a><p>Modern dental care with clear planning and a patient-focused approach.</p></div><div><h3>Clinic Details</h3><p>189, Ground Floor, Jalan Batik 2/1B<br />Taman Batik, Sungai Petani</p><a href="tel:+6044466659">04-446 6659</a></div><div><h3>Operating Hours</h3><p>Monday–Sunday<br />9.00am–5.30pm</p><a href={whatsapp}>WhatsApp Contact ↗</a></div><div><h3>Information</h3><a href="#locations">Google Maps</a><a href="#">Regulatory Information</a><a href="#">Privacy Policy</a><a href="#">Sitemap</a><a href="#education">Educational Resources</a></div></div><div className="shell footer-bottom"><p>© 2026 Klinik Pergigian Dr Syazwan. Homepage mockup.</p><a href="#top">Back to top ↑</a></div></footer>
    </main>
  );
}
