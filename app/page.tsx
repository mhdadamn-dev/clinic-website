import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Klinik Pergigian Dr Syazwan | Klinik Gigi Sungai Petani",
  description:
    "Rawatan pergigian yang selesa dan jelas di Taman Batik, Sungai Petani. Pendakap gigi, implan, veneer, rawatan akar dan penjagaan keluarga.",
};

const services = [
  {
    number: "01",
    title: "Pendakap gigi",
    label: "BRACES",
    description:
      "Pilihan rawatan untuk susunan gigi yang lebih kemas, dengan penerangan pelan dan tempoh yang jelas.",
  },
  {
    number: "02",
    title: "Implan gigi",
    label: "IMPLANT",
    description:
      "Gantikan gigi yang hilang dengan penilaian teliti untuk fungsi, keselesaan dan keyakinan jangka panjang.",
  },
  {
    number: "03",
    title: "Veneer gigi",
    label: "VENEER",
    description:
      "Perbaiki bentuk dan penampilan senyuman melalui pilihan rawatan yang sesuai dengan keadaan gigi anda.",
  },
  {
    number: "04",
    title: "Rawatan akar gigi",
    label: "ROOT CANAL",
    description:
      "Rawatan untuk menyelamatkan gigi yang rosak atau dijangkiti, sambil membantu mengurangkan ketidakselesaan.",
  },
  {
    number: "05",
    title: "Scaling & polishing",
    label: "PREVENTIVE",
    description:
      "Penjagaan rutin untuk membersihkan plak dan karang gigi serta membantu mengekalkan gusi yang sihat.",
  },
  {
    number: "06",
    title: "Pergigian keluarga",
    label: "FAMILY CARE",
    description:
      "Pemeriksaan dan rawatan mesra untuk kanak-kanak, dewasa dan seluruh keluarga dalam suasana yang tenang.",
  },
];

const testimonials = [
  {
    quote:
      "Doktor dan staf sangat mesra. Setiap langkah diterangkan dengan jelas dan saya rasa lebih yakin sepanjang rawatan.",
    name: "Nurul Nuyun",
    treatment: "Rawatan akar gigi",
  },
  {
    quote:
      "Klinik cantik, selesa dan rawatan pun cepat. Anak-anak rasa tenang dan mahu datang semula untuk pemeriksaan.",
    name: "Zaty Musa",
    treatment: "Pergigian keluarga",
  },
  {
    quote:
      "Layanan sangat baik dan pilihan rawatan diterangkan mengikut keperluan saya. Memang sangat disyorkan.",
    name: "Muhammad Noor",
    treatment: "Pemutihan gigi",
  },
];

const faqs = [
  {
    question: "Perlu buat temujanji terlebih dahulu?",
    answer:
      "Temujanji digalakkan supaya pasukan kami dapat menyediakan masa yang sesuai untuk anda. Kes kecemasan boleh terus hubungi klinik melalui WhatsApp atau telefon.",
  },
  {
    question: "Adakah rawatan sesuai untuk pesakit yang takut doktor gigi?",
    answer:
      "Ya. Beritahu kami tentang kebimbangan anda semasa membuat temujanji. Pasukan kami akan menerangkan proses secara berperingkat dan memberi ruang untuk anda bertanya sebelum rawatan bermula.",
  },
  {
    question: "Berapakah kos rawatan?",
    answer:
      "Kos bergantung pada keadaan gigi dan pilihan rawatan. Pemeriksaan awal membantu doktor mencadangkan pelan yang sesuai serta menerangkan anggaran kos dengan lebih tepat.",
  },
  {
    question: "Di manakah lokasi KPDS?",
    answer:
      "Kami berada di No. 189, Tingkat Bawah, Jalan Batik 2/1B, Taman Batik, 08000 Sungai Petani, Kedah.",
  },
];

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#kandungan">
        Langkau ke kandungan utama
      </a>

      <a className="compare-switch" href="/mydna">
        <span>Versi baharu</span>
        Lihat rekaan MyDNA <span aria-hidden="true">↗</span>
      </a>

      <div className="notice-bar">
        <div className="shell notice-inner">
          <p>
            <span className="status-dot" aria-hidden="true" /> Dibuka setiap
            hari, 9.00 pagi–5.30 petang
          </p>
          <a href="tel:+6044466659">04-446 6659</a>
        </div>
      </div>

      <header className="site-header">
        <div className="shell header-inner">
          <a className="brand" href="#atas" aria-label="KPDS — halaman utama">
            <span className="brand-mark" aria-hidden="true">
              KP
            </span>
            <span className="brand-copy">
              <strong>Klinik Pergigian</strong>
              <span>Dr Syazwan</span>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Navigasi utama">
            <a href="#rawatan">Rawatan</a>
            <a href="#tentang">Tentang kami</a>
            <a href="#pengalaman">Testimoni</a>
            <a href="#faq">FAQ</a>
          </nav>

          <a
            className="button button-small"
            href="https://wa.me/60174791140?text=Assalamualaikum%20KPDS%2C%20saya%20ingin%20membuat%20temujanji."
            target="_blank"
            rel="noreferrer"
          >
            Tempah temujanji <span aria-hidden="true">↗</span>
          </a>

          <details className="mobile-menu">
            <summary aria-label="Buka menu">
              <span />
              <span />
              <span />
            </summary>
            <nav aria-label="Navigasi mudah alih">
              <a href="#rawatan">Rawatan</a>
              <a href="#tentang">Tentang kami</a>
              <a href="#pengalaman">Testimoni</a>
              <a href="#faq">Soalan lazim</a>
              <a
                className="button"
                href="https://wa.me/60174791140?text=Assalamualaikum%20KPDS%2C%20saya%20ingin%20membuat%20temujanji."
              >
                WhatsApp KPDS
              </a>
            </nav>
          </details>
        </div>
      </header>

      <section className="hero" id="atas">
        <img
          className="hero-photo"
          src="/kpds-hero.png"
          alt="Seorang doktor gigi berbual mesra dengan pesakit di klinik moden"
        />
        <div className="hero-wash" aria-hidden="true" />
        <div className="shell hero-content" id="kandungan">
          <div className="hero-copy">
            <p className="eyebrow">KLINIK PERGIGIAN DI SUNGAI PETANI</p>
            <h1>
              Rawatan gigi yang selesa, jelas dan <em>dipercayai.</em>
            </h1>
            <p className="lead">
              Daripada pemeriksaan rutin hingga pendakap dan implan, kami
              membantu anda memahami setiap pilihan sebelum rawatan bermula.
            </p>
            <div className="hero-actions">
              <a
                className="button"
                href="https://wa.me/60174791140?text=Assalamualaikum%20KPDS%2C%20saya%20ingin%20membuat%20temujanji."
                target="_blank"
                rel="noreferrer"
              >
                Tempah temujanji <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="#rawatan">
                Lihat rawatan <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="hero-proof" aria-label="Penilaian pesakit">
              <div className="avatar-stack" aria-hidden="true">
                <span>NS</span>
                <span>ZM</span>
                <span>MN</span>
              </div>
              <div>
                <div className="stars" aria-label="5 daripada 5 bintang">
                  ★★★★★
                </div>
                <p>Dipercayai keluarga di Sungai Petani</p>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-note">
          <span className="hero-note-icon" aria-hidden="true">
            ✓
          </span>
          <div>
            <strong>Penerangan yang jelas</strong>
            <span>Fahami pilihan anda sebelum bermula.</span>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Kelebihan KPDS">
        <div className="shell trust-grid">
          <div>
            <span className="trust-number">01</span>
            <p>
              <strong>Mesra & selesa</strong>
              Suasana tenang untuk seisi keluarga
            </p>
          </div>
          <div>
            <span className="trust-number">02</span>
            <p>
              <strong>Rawatan berkualiti</strong>
              Pelan yang sesuai dengan keperluan anda
            </p>
          </div>
          <div>
            <span className="trust-number">03</span>
            <p>
              <strong>Menepati masa</strong>
              Temujanji yang diurus dengan baik
            </p>
          </div>
        </div>
      </section>

      <section className="section services-section" id="rawatan">
        <div className="shell">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">RAWATAN KAMI</p>
              <h2>Penjagaan untuk setiap senyuman.</h2>
            </div>
            <p>
              Setiap senyuman mempunyai keperluan berbeza. Kami mulakan dengan
              pemeriksaan menyeluruh dan penerangan yang mudah difahami.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-topline">
                  <span>{service.number}</span>
                  <span>{service.label}</span>
                </div>
                <div className={`service-symbol symbol-${service.number}`} aria-hidden="true">
                  <span />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#hubungi" aria-label={`Tanya tentang ${service.title}`}>
                  Tanya tentang rawatan <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-section" id="tentang">
        <div className="shell about-grid">
          <div className="about-art" aria-label="Ruang konsultasi KPDS yang mesra">
            <div className="about-image">
              <img
                src="/kpds-hero.png"
                alt="Doktor gigi menerangkan rawatan kepada seorang pesakit"
              />
            </div>
            <div className="about-badge">
              <strong>5★</strong>
              <span>Penjagaan dengan sentuhan manusia</span>
            </div>
          </div>

          <div className="about-copy">
            <p className="eyebrow">KENAPA KPDS?</p>
            <h2>Kami mahu anda rasa tenang sebelum duduk di kerusi rawatan.</h2>
            <p className="lead-small">
              Pengalaman pergigian yang baik bermula dengan rasa didengari.
              Sebab itu kami memberi ruang untuk anda bertanya, memahami pilihan
              dan membuat keputusan dengan yakin.
            </p>
            <ul className="check-list">
              <li>
                <span aria-hidden="true">✓</span>
                <div>
                  <strong>Penerangan tanpa jargon</strong>
                  <p>Langkah rawatan diterangkan dalam bahasa yang mudah.</p>
                </div>
              </li>
              <li>
                <span aria-hidden="true">✓</span>
                <div>
                  <strong>Pelan yang diperibadikan</strong>
                  <p>Cadangan berdasarkan keadaan dan keutamaan anda.</p>
                </div>
              </li>
              <li>
                <span aria-hidden="true">✓</span>
                <div>
                  <strong>Mesra kanak-kanak</strong>
                  <p>Pendekatan perlahan dan positif untuk pesakit kecil.</p>
                </div>
              </li>
            </ul>
            <a className="text-link dark-link" href="#proses">
              Lihat cara lawatan anda <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="section process-section" id="proses">
        <div className="shell">
          <div className="section-heading centered-heading">
            <p className="eyebrow">MUDAH & JELAS</p>
            <h2>Tiga langkah ke senyuman yang lebih yakin.</h2>
            <p>
              Daripada mesej pertama hingga susulan, anda sentiasa tahu apa yang
              akan berlaku seterusnya.
            </p>
          </div>
          <ol className="process-grid">
            <li>
              <span className="process-number">1</span>
              <div className="process-line" aria-hidden="true" />
              <h3>Hubungi kami</h3>
              <p>Beritahu kami keperluan anda melalui WhatsApp atau telefon.</p>
            </li>
            <li>
              <span className="process-number">2</span>
              <div className="process-line" aria-hidden="true" />
              <h3>Pemeriksaan & penerangan</h3>
              <p>Doktor menilai keadaan gigi dan menerangkan pilihan rawatan.</p>
            </li>
            <li>
              <span className="process-number">3</span>
              <h3>Mulakan dengan yakin</h3>
              <p>Pilih pelan yang sesuai dan teruskan mengikut keselesaan anda.</p>
            </li>
          </ol>
        </div>
      </section>

      <section className="section testimonials-section" id="pengalaman">
        <div className="shell">
          <div className="section-heading split-heading testimonial-heading">
            <div>
              <p className="eyebrow">PENGALAMAN PESAKIT</p>
              <h2>Kata-kata yang membuat kami terus tersenyum.</h2>
            </div>
            <div className="rating-lockup">
              <span>5.0</span>
              <div>
                <div className="stars">★★★★★</div>
                <p>Ulasan pesakit KPDS</p>
              </div>
            </div>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((testimonial, index) => (
              <figure className="testimonial-card" key={testimonial.name}>
                <span className="quote-mark" aria-hidden="true">
                  “
                </span>
                <blockquote>{testimonial.quote}</blockquote>
                <figcaption>
                  <span className="patient-initials" aria-hidden="true">
                    {testimonial.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")
                      .slice(0, 2)}
                  </span>
                  <span>
                    <strong>{testimonial.name}</strong>
                    <small>{testimonial.treatment}</small>
                  </span>
                  <span className="review-index">0{index + 1}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="review-note">
            Testimoni dipendekkan untuk paparan mockup. Hasil rawatan berbeza
            mengikut individu.
          </p>
        </div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="shell faq-grid">
          <div className="faq-intro">
            <p className="eyebrow">SOALAN LAZIM</p>
            <h2>Masih ada yang bermain di fikiran?</h2>
            <p>
              Kami sedia membantu. Mulakan dengan jawapan ringkas ini atau
              terus berbual dengan pasukan kami.
            </p>
            <a className="text-link dark-link" href="tel:+6044466659">
              Hubungi 04-446 6659 <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary>
                  <span>{faq.question}</span>
                  <i aria-hidden="true" />
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section" id="hubungi">
        <div className="shell cta-inner">
          <div>
            <p className="eyebrow">SEDIA UNTUK BERMULA?</p>
            <h2>
              Langkah pertama ke <em>senyuman lebih yakin.</em>
            </h2>
          </div>
          <div className="cta-copy">
            <p>
              Ceritakan apa yang anda perlukan. Pasukan kami akan membantu
              mencadangkan masa lawatan yang sesuai.
            </p>
            <a
              className="button button-light"
              href="https://wa.me/60174791140?text=Assalamualaikum%20KPDS%2C%20saya%20ingin%20membuat%20temujanji."
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp KPDS <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="shell footer-main">
          <div className="footer-brand">
            <a className="brand brand-light" href="#atas">
              <span className="brand-mark" aria-hidden="true">
                KP
              </span>
              <span className="brand-copy">
                <strong>Klinik Pergigian</strong>
                <span>Dr Syazwan</span>
              </span>
            </a>
            <p>
              Keselesaan, rawatan berkualiti dan tepati masa—untuk pengalaman
              pergigian yang lebih baik.
            </p>
          </div>
          <div>
            <h3>Alamat</h3>
            <p>
              189, Tingkat Bawah, Jalan Batik 2/1B,
              <br /> Taman Batik, 08000 Sungai Petani, Kedah
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Klinik+Pergigian+Dr+Syazwan+Taman+Batik"
              target="_blank"
              rel="noreferrer"
            >
              Buka di Google Maps ↗
            </a>
          </div>
          <div>
            <h3>Hubungi</h3>
            <a href="tel:+6044466659">04-446 6659</a>
            <a href="https://wa.me/60174791140">017-479 1140</a>
            <a href="mailto:klinikpergigiandrsyazwan@gmail.com">
              klinikpergigiandrsyazwan@gmail.com
            </a>
          </div>
          <div>
            <h3>Waktu operasi</h3>
            <p>
              Isnin–Ahad
              <br /> 9.00 pagi–5.30 petang
            </p>
            <span className="open-label">
              <span className="status-dot" aria-hidden="true" /> Dibuka setiap
              hari
            </span>
          </div>
        </div>
        <div className="shell footer-bottom">
          <p>© 2026 Klinik Pergigian Dr Syazwan. Mockup homepage.</p>
          <div>
            <a href="https://www.instagram.com/klinikpergigiandrsyazwan/">
              Instagram
            </a>
            <a href="#atas">Kembali ke atas ↑</a>
          </div>
        </div>
      </footer>

      <a
        className="floating-whatsapp"
        href="https://wa.me/60174791140?text=Assalamualaikum%20KPDS%2C%20saya%20ingin%20membuat%20temujanji."
        target="_blank"
        rel="noreferrer"
        aria-label="Tempah temujanji melalui WhatsApp"
      >
        <span aria-hidden="true">WA</span>
        <strong>Tempah sekarang</strong>
      </a>
    </main>
  );
}
