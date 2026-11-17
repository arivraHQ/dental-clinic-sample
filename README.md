# Aura Dental Clinic & Implant Center — Production Showcase

> [!WARNING]
> **⚠️ DEMO & SHOWCASE DISCLAIMER**  
> This project is a fictional concept application developed strictly for **portfolio demonstration and technical showcase purposes**.  
> - **Aura Dental Clinic** is a simulated healthcare entity.  
> - All telephone numbers (`+91 80 4123 4567`, `+91 98200 45678`), doctor names, DCI registration numbers, physical addresses, and email IDs are **dummy/illustrative data**.  
> - **DO NOT attempt to call these telephone numbers or visit this address for real medical appointments or dental emergencies.** In case of a true medical crisis, please contact your local emergency services or a verified licensed practitioner.

---

A modern, high-converting dental clinic web application engineered with **Next.js 16 (App Router)**, **TypeScript (Strict)**, **Tailwind CSS v4**, and **shadcn/ui**. Built to eliminate patient dental anxiety using a warm, hospitality-inspired aesthetic (Regal Navy, Linen Cream, and Muted Gold) coupled with clinical authority, strict NAP consistency, and sub-second page performance.

---

## 🌟 Key Highlights & Engineering Features

- **Sub-Second Speed:** 100% statically prerendered routes (`○ Static`), achieving **0.99s LCP** and **0.00 CLS**.
- **Audit-Verified Quality:** Tested with Lighthouse in production:
  - **Performance:** 96 / 100
  - **Accessibility:** 87 / 100
  - **Best Practices:** 100 / 100
  - **SEO:** 100 / 100
- **E2E Tested (Playwright):** Full automated flow covering booking consultation submission, confirmation code generation (`AURA-XXXXXX`), navigation, and tap-to-call link integrity.
- **Strict NAP Consistency:** Single source of truth in `src/data/clinicData.ts` powering telephone links (`tel:+91...`), location metadata, hours, and Schema.org microdata across all pages and footer.
- **Medical Schema Markup (JSON-LD):** Implements `Dentist`, `MedicalBusiness`, and `LocalBusiness` structured data for rich search engine indexing.
- **Anti-Anxiety Design Philosophy:** Researched against real premier dental clinics (Tend NYC, Rüh Dental London, Dentzz Mumbai) in [`/design/DESIGN.md`](./design/DESIGN.md). Replaces sterile clinical tropes with warm linen backgrounds, refined serif headings (`Playfair Display`), and clean geometric sans body typography (`Plus Jakarta Sans`).

---

## 🎨 Visual Identity & Palette

| Token | Hex Code | Purpose |
|---|---|---|
| **Regal Navy** | `#0B192C` | Deep authoritative background for navigation, footer, and clinical leadership |
| **Linen Cream** | `#FBF9F5` | Calming, warm, non-clinical base canvas to reduce patient stress |
| **Muted Gold** | `#C5A880` | Accreditation badges, star ratings, and subtle elegance accents |
| **Surgical Red** | `#B91C1C` | Urgent 24/7 emergency triage callouts |

---

## 📁 Repository Structure

```
├── design/
│   └── DESIGN.md               # Research breakdown: Tend NYC, Rüh London, Dentzz Mumbai
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with JSON-LD Schema (Dentist & MedicalBusiness)
│   │   ├── globals.css         # Tailwind v4 theme configuration & color tokens
│   │   ├── page.tsx            # Homepage (Hero, Credentials, Services, Team, Reviews, Location)
│   │   ├── about/
│   │   │   └── page.tsx        # Clinical faculty directory with DCI credentials & degrees
│   │   ├── contact/
│   │   │   └── page.tsx        # Consultation booking form, tap-to-call, hours, map embed
│   │   ├── emergency/
│   │   │   └── page.tsx        # 24/7 hotline callout, same-day policy, trauma triage steps
│   │   └── services/
│   │       ├── general/page.tsx    # Preventative care, ultrasonic cleaning, AirFlow
│   │       ├── cosmetic/page.tsx   # Porcelain veneers, bonding, Zoom! whitening
│   │       └── emergency/page.tsx  # Acute pain relief, trauma, cracked teeth
│   ├── components/
│   │   ├── booking/
│   │   │   └── BookingForm.tsx # Client-side appointment request form with instant receipt
│   │   ├── home/
│   │   │   ├── Hero.tsx        # Headline, consultation booking, Google rating, new patient status
│   │   │   ├── CredentialsStrip.tsx # DCI numbers, degrees, graduation years, associations
│   │   │   ├── CoreServices.tsx     # Core treatment breakdown with fees and direct links
│   │   │   ├── TeamPreview.tsx      # Practitioner portraits with academic background
│   │   │   ├── ReviewsSection.tsx   # Verified patient reviews with visible dates
│   │   │   └── LocationHours.tsx    # Physical address, hours table, embedded Google map
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      # Sticky navigation, emergency ticker, tap-to-call, mobile drawer
│   │   │   └── Footer.tsx      # NAP consistency, accreditation, hours, legal links, disclaimer
│   │   └── ui/                 # Accessible UI components (buttons, badges, inputs, dialogs)
│   └── data/
│       └── clinicData.ts       # Canonical data file for clinic details, doctors, hours, and fees
├── check-links-images.mjs      # Production link and image crawler script
├── test-playwright.mjs         # Playwright E2E verification test suite
└── README.md
```

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js**: v18.17+ or v20+ (tested on Node v22 LTS)
- **Package Manager**: npm, pnpm, or yarn

### 2. Installation
```bash
git clone https://github.com/arivraHQ/dental-clinic-sample.git
cd dental-clinic-sample
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser.

### 4. Build for Production
```bash
npm run build
```
Creates an optimized static production build in `.next`.

### 5. Run Verification & Audits
```bash
# Type check and lint
npm run lint

# Run Playwright E2E suite
node test-playwright.mjs

# Crawl site for broken links & missing images
node check-links-images.mjs
```

---

## ⚙️ Customization Guide for Live Client Deployment

To repurpose this template for an actual commercial dental clinic:

1. **Update NAP Data:** Open `src/data/clinicData.ts` and update `CLINIC_NAP` with the client's actual name, phone, address, and email.
2. **Replace Doctor Profiles:** Update `CLINIC_DOCTORS` with real doctor photos, State Dental Council registration numbers, and alma maters.
3. **Connect Booking Form to Backend/CRM:** In `src/components/booking/BookingForm.tsx`, replace the client-side state handler with an API call to your CRM, WhatsApp Business API, or email gateway (e.g. Resend, Twilio, or Google Sheets webhook).
4. **Google Maps Embed:** In `src/components/home/LocationHours.tsx` and `src/app/contact/page.tsx`, replace the iframe `src` with the client's verified Google Business embed URL.
5. **Google Reviews:** Insert authentic Google Places review testimonials with verified dates.

---

## 📄 License & Attribution

Designed & Developed by [Arivra](https://arivra.com/).  
Licensed under the [MIT License](LICENSE).
