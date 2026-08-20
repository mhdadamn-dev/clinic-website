import type { Metadata } from "next";
import "./mydna.css";

export const metadata: Metadata = {
  title: "Konsep MyDNA — Klinik Pergigian Dr Syazwan",
  description:
    "Konsep laman KPDS dengan sistem tipografi editorial yang jelas, moden dan mesra pesakit.",
  openGraph: {
    title: "Klinik Pergigian Dr Syazwan",
    description: "Rawatan yang jelas, untuk senyuman lebih yakin.",
    images: [
      {
        url: "/og-mydna.png",
        width: 1200,
        height: 630,
        alt: "Klinik Pergigian Dr Syazwan — konsep editorial MyDNA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Klinik Pergigian Dr Syazwan",
    description: "Rawatan yang jelas, untuk senyuman lebih yakin.",
    images: ["/og-mydna.png"],
  },
};

const treatments = [
  ["01", "Pendakap gigi", "Susunan gigi yang lebih kemas dengan pelan rawatan yang diterangkan dari awal."],
  ["02", "Implan gigi", "Pilihan menggantikan gigi yang hilang untuk membantu fungsi dan keyakinan jangka panjang."],
  ["03", "Veneer gigi", "Rawatan estetik yang dirancang mengikut bentuk, warna dan keadaan gigi anda."],
  ["04", "Rawatan akar", "Rawatan untuk menyelamatkan gigi yang rosak atau dijangkiti dan mengurangkan ketidakselesaan."],
  ["05", "Scaling & polishing", "Pembersihan rutin bagi membantu menjaga kesihatan gigi dan gusi."],
  ["06", "Pergigian keluarga", "Pemeriksaan dan penjagaan mesra untuk kanak-kanak, dewasa dan seluruh keluarga."],
];

const faqs = [
  ["Perlu buat temujanji terlebih dahulu?", "Temujanji digalakkan supaya pasukan kami dapat menyediakan masa yang sesuai. Untuk kes kecemasan, hubungi klinik melalui WhatsApp atau telefon."],
  ["Bagaimana jika saya takut rawatan gigi?", "Beritahu kami tentang kebimbangan anda. Pasukan kami akan menerangkan proses secara berperingkat dan memberi ruang untuk anda bertanya sebelum rawatan bermula."],
  ["Berapakah kos rawatan?", "Kos bergantung pada keadaan gigi dan pilihan rawatan. Pemeriksaan awal membantu doktor mencadangkan pelan serta anggaran kos yang lebih tepat."],
  ["Di manakah lokasi KPDS?", "Kami berada di No. 189, Tingkat Bawah, Jalan Batik 2/1B, Taman Batik, 08000 Sungai Petani, Kedah."],
];

const whatsapp =
  "https://wa.me/60174791140?text=Assalamualaikum%20KPDS%2C%20saya%20ingin%20membuat%20temujanji.";

export default function MyDnaHome() {
  return (
    <main className="dna-page">
      <a className="dna-skip" href="#dna-content">Langkau ke kandungan utama</a>
      <a className="dna-compare" href="/">
        <span>Perbandingan</span>
        Lihat rekaan asal <b aria-hidden="true">↗</b>
      </a>

      <header className="dna-header">
        <a className="dna-wordmark" href="#dna-top" aria-label="KPDS — halaman utama">
          <b>KP</b><span>/</span>DS
        </a>
        <nav aria-label="Navigasi utama">
          <a href="#dna-treatments">Rawatan</a>
          <a href="#dna-about">Tentang</a>
          <a href="#dna-experience">Pengalaman</a>
        </nav>
        <a className="dna-header-cta" href={whatsapp} target="_blank" rel="noreferrer">
          Temujanji <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="dna-hero" id="dna-top">
        <div className="dna-hero-copy" id="dna-content">
          <p className="dna-kicker">/ 01 — KLINIK PERGIGIAN DI SUNGAI PETANI</p>
          <h1>
            Rawatan yang jelas,<br />
            <span>untuk senyuman lebih yakin.</span>
          </h1>
          <div className="dna-hero-bottom">
            <p>
              Dari pemeriksaan rutin hingga rawatan khusus, kami membantu anda
              memahami pilihan yang sesuai sebelum bermula.
            </p>
            <a className="dna-pill" href={whatsapp} target="_blank" rel="noreferrer">
              WhatsApp klinik <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <div className="dna-visual">
          <div className="dna-orbit" aria-hidden="true">
            <span>jelas</span><span>selesa</span><span>yakin</span>
          </div>
          <img src="/kpds-hero.png" alt="Doktor gigi berbual dengan seorang pesakit di klinik moden" />
          <p>Penjagaan pergigian yang bermula dengan perbualan.</p>
        </div>
      </section>

      <section className="dna-metrics" aria-label="Maklumat klinik">
        <div><strong>7</strong><span>hari seminggu</span></div>
        <div><strong>09:00</strong><span>waktu dibuka</span></div>
        <div><strong>17:30</strong><span>waktu ditutup</span></div>
        <a href="tel:+6044466659"><strong>04</strong><span>446 6659 ↗</span></a>
      </section>

      <section className="dna-section dna-treatments" id="dna-treatments">
        <div className="dna-section-intro">
          <p className="dna-kicker">/ 02 — RAWATAN KAMI</p>
          <h2>Satu klinik.<br /><span>Pelbagai keperluan.</span></h2>
          <p>Cadangan rawatan dibuat selepas pemeriksaan, penerangan dan perbincangan bersama anda.</p>
        </div>
        <div className="dna-treatment-list">
          {treatments.map(([number, title, description]) => (
            <article key={number}>
              <span className="dna-index">/{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <span className="dna-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="dna-statement" id="dna-about">
        <p className="dna-kicker">/ 03 — PENDEKATAN KPDS</p>
        <h2>
          Rawatan yang baik bermula apabila anda <span>faham, selesa</span> dan
          boleh membuat keputusan dengan yakin.
        </h2>
        <div className="dna-statement-foot">
          <p>Di KPDS, setiap cadangan diterangkan dalam bahasa yang mudah, tanpa membuat anda rasa tergesa-gesa.</p>
          <a href={whatsapp} target="_blank" rel="noreferrer">Bercakap dengan pasukan kami ↗</a>
        </div>
      </section>

      <section className="dna-section dna-process">
        <div className="dna-section-intro">
          <p className="dna-kicker">/ 04 — PROSES TEMUJANJI</p>
          <h2>Tiga langkah.<br /><span>Tiada teka-teki.</span></h2>
        </div>
        <div className="dna-process-grid">
          <article><i>01</i><h3>Hubungi kami.</h3><p>Kongsi keperluan dan pilih masa yang sesuai melalui WhatsApp.</p></article>
          <article><i>02</i><h3>Datang & berbincang.</h3><p>Doktor memeriksa keadaan gigi dan menerangkan pilihan yang ada.</p></article>
          <article><i>03</i><h3>Mulakan rawatan.</h3><p>Teruskan dengan pelan yang anda fahami dan persetujui.</p></article>
        </div>
      </section>

      <section className="dna-experience" id="dna-experience">
        <div className="dna-quote-mark" aria-hidden="true">“</div>
        <blockquote>
          Doktor dan staf sangat mesra. Setiap langkah diterangkan dengan jelas
          dan saya rasa lebih yakin sepanjang rawatan.
        </blockquote>
        <div className="dna-quote-meta">
          <p><strong>Nurul Nuyun</strong><span>Rawatan akar gigi</span></p>
          <p className="dna-disclaimer">Teks testimoni contoh untuk tujuan mockup.</p>
        </div>
      </section>

      <section className="dna-section dna-faq" id="dna-faq">
        <div className="dna-section-intro">
          <p className="dna-kicker">/ 05 — SOALAN LAZIM</p>
          <h2>Soalan sebelum<br /><span>anda datang.</span></h2>
        </div>
        <div className="dna-faq-list">
          {faqs.map(([question, answer], index) => (
            <details key={question}>
              <summary><span>0{index + 1}</span>{question}<b aria-hidden="true">+</b></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="dna-footer">
        <p className="dna-kicker">/ 06 — SEDIA UNTUK BERMULA?</p>
        <h2>Jom bincang tentang<br /><span>senyuman anda.</span></h2>
        <a className="dna-footer-cta" href={whatsapp} target="_blank" rel="noreferrer">
          Tempah temujanji <span aria-hidden="true">↗</span>
        </a>
        <div className="dna-footer-grid">
          <p><b>Lokasi</b><span>189, Tingkat Bawah, Jalan Batik 2/1B,<br />Taman Batik, 08000 Sungai Petani, Kedah.</span></p>
          <p><b>Hubungi</b><a href="tel:+6044466659">04-446 6659</a><a href={whatsapp}>WhatsApp</a></p>
          <p><b>Ikuti</b><a href="https://www.instagram.com/klinikpergigiandrsyazwan/" target="_blank" rel="noreferrer">Instagram ↗</a></p>
          <p><b>Waktu</b><span>Setiap hari<br />9.00 pagi–5.30 petang</span></p>
        </div>
        <div className="dna-footer-base"><span>© 2026 KPDS</span><span>Konsep reka bentuk MyDNA</span></div>
      </footer>
    </main>
  );
}
