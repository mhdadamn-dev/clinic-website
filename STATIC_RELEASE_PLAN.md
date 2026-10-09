# KPDS Static Release Plan

## Architecture decision

The production website will be a static multipage site made from HTML, CSS, and vanilla JavaScript. GitHub stores the source and release history. Hostinger serves the contents of the `release` directory from `public_html`.

The current Vinext application remains available as a visual reference. Its `dist` directory is a server bundle and must not be uploaded to standard Hostinger Web or Cloud hosting.

## Deployment contract

- All publishable website files belong under `release`.
- `release/index.html` must be the homepage.
- Each clean URL directory must contain an `index.html` before launch.
- Shared styles, scripts, and images belong under `release/assets`.
- Internal links must use root-relative production paths such as `/services/braces-sungai-petani/`.
- No page may depend on React, Next.js, Vinext, Node.js, a database, or server-side rendering.
- The website must remain navigable and readable when JavaScript is unavailable.
- During development, `.gitkeep` files preserve empty directories. They must be removed or excluded from the launch ZIP after real files are added.
- Only the contents of `release`, not the `release` directory itself, are extracted into Hostinger `public_html`.

## Launch route manifest

| Public route | Release file | Primary source document |
|---|---|---|
| `/` | `release/index.html` | `../KPDS_Website_Content_Package_2026-08-22/01_Core_Pages/01_Homepage_Content.docx` |
| `/locations/taman-batik-sungai-petani/` | `release/locations/taman-batik-sungai-petani/index.html` | `../KPDS_Website_Content_Package_2026-08-22/01_Core_Pages/02_Location_Sungai_Petani.docx` |
| `/services/braces-sungai-petani/` | `release/services/braces-sungai-petani/index.html` | `../KPDS_Website_Content_Package_2026-08-22/02_Service_Pillars/01_Braces_Orthodontics.docx` |
| `/education/harga-braces-sungai-petani/` | `release/education/harga-braces-sungai-petani/index.html` | `../KPDS_Website_Content_Package_2026-08-22/03_Intent_Pages/01_Braces/01_Harga_Braces_Sungai_Petani.docx` |
| `/education/jenis-braces-sungai-petani/` | `release/education/jenis-braces-sungai-petani/index.html` | `../KPDS_Website_Content_Package_2026-08-22/03_Intent_Pages/01_Braces/02_Jenis_Braces_dan_Clear_Aligners.docx` |
| `/services/dental-implants-sungai-petani/` | `release/services/dental-implants-sungai-petani/index.html` | `../KPDS_Website_Content_Package_2026-08-22/02_Service_Pillars/02_Dental_Implants.docx` |
| `/services/rawatan-gigi-sungai-petani/` | `release/services/rawatan-gigi-sungai-petani/index.html` | `../KPDS_Website_Content_Package_2026-08-22/02_Service_Pillars/03_General_Treatment_Diagnostics.docx` |
| `/services/scaling-gigi-sungai-petani/` | `release/services/scaling-gigi-sungai-petani/index.html` | `../KPDS_Website_Content_Package_2026-08-22/03_Intent_Pages/03_General_Treatments/01_Scaling_Gigi_Sungai_Petani.docx` |
| `/services/tampal-gigi-sungai-petani/` | `release/services/tampal-gigi-sungai-petani/index.html` | `../KPDS_Website_Content_Package_2026-08-22/03_Intent_Pages/03_General_Treatments/02_Tampal_Gigi_Sungai_Petani.docx` |
| `/services/rawatan-akar-gigi-sungai-petani/` | `release/services/rawatan-akar-gigi-sungai-petani/index.html` | `../KPDS_Website_Content_Package_2026-08-22/03_Intent_Pages/03_General_Treatments/03_Rawatan_Akar_Gigi_Sungai_Petani.docx` |
| `/locations/klinik-gigi-buka-ahad-sungai-petani/` | `release/locations/klinik-gigi-buka-ahad-sungai-petani/index.html` | `../KPDS_Website_Content_Package_2026-08-22/03_Intent_Pages/03_General_Treatments/04_Klinik_Gigi_Buka_Ahad_Sungai_Petani.docx` |
| `/services/cabut-gigi-sungai-petani/` | `release/services/cabut-gigi-sungai-petani/index.html` | `../KPDS_Website_Content_Package_2026-08-22/02_Service_Pillars/04_Extraction_Oral_Surgery.docx` |
| `/faq/` | `release/faq/index.html` | `../KPDS_Website_Content_Package_2026-08-22/00_Project_Control/02_Master_FAQ_and_AEO_Question_Bank.docx` |
| `/privacy-policy/` | `release/privacy-policy/index.html` | Create from the website's actual data collection and third-party services |
| Not applicable | `release/404.html` | Create a concise recovery page with links to Home, Services, Location, Call, and WhatsApp |

URL ownership, titles, and search intent are controlled by:

`../KPDS_Website_Content_Package_2026-08-22/00_Project_Control/01_Local_Keyword_Intent_Map_and_Sitemap.docx`

## Shared files required before launch

```text
release/
├── index.html
├── 404.html
├── robots.txt
├── sitemap.xml
└── assets/
    ├── css/style.css
    ├── js/main.js
    └── img/
```

Do not create `robots.txt`, `sitemap.xml`, canonical URLs, Open Graph URLs, or production structured-data URLs until the final domain and preferred `www` form are confirmed.

## Phase 2 routes not included in the launch scaffold

- `/education/braces-untuk-dewasa-sungai-petani/`
- `/education/harga-implant-gigi-sungai-petani/`
- `/education/implant-vs-bridge-vs-gigi-palsu/`
- `/education/implant-satu-atau-banyak-gigi/`
- `/services/restorative-dentistry-sungai-petani/`

These routes must not appear in launch navigation or `sitemap.xml` until their pages are approved and built.

