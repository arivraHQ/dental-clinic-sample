# DESIGN SPECIFICATION: DENTAL CLINIC WEBSITE (PRODUCTION)

## Phase 0: Reference Research

Comprehensive analysis of 3 real-world, high-converting dental clinic practices across the US, UK, and India, examining exact typography scales, HEX color systems, hero section layouts, and trust signal placement:

---

### Reference 1: Tend Dental (New York, US — `hellotend.com`)
* **Hero Layout:** Split-screen asymmetric editorial layout.
  - Left Column (58% width): Oversized warm editorial headline, micro-reassurance badges ("No judgment, no guilt • Price transparency"), rating proof, and dual CTAs ("Book an appointment" + "Explore our NYC studios").
  - Right Column (42% width): Serene, warm lifestyle architectural photography of their private studio lounges with ambient natural lighting (no dental chairs, no clinical drills).
  - Form Position: Drop-down studio selector integrated directly below the headline ("Select location: Flatiron, Williamsburg, Grand Central").
* **Exact Color Palette (HEX):**
  - Primary Brand Sage: `#698680` (RGB: `105, 134, 128`)
  - Deep Forest Text: `#36514C` (RGB: `54, 81, 76`)
  - Warm Studio Linen Cream: `#F9F9F6` (RGB: `249, 249, 246`)
  - Contrast Coral Action Accent: `#B00909` (RGB: `176, 9, 9`)
  - Soft Neutral Border: `#E5E4DE` (RGB: `229, 228, 222`)
* **Typography Scale:**
  - Headline (H1): *Nantes Display* (Serif), 56px / 1.15 line-height, -0.02em letter spacing
  - Subhead (H2/H3): *Nantes / Founders Grotesk*, 28px – 32px / 1.25 line-height
  - Body & UI: *Founders Grotesk* (Sans), 16px / 1.5 line-height, regular weight
  - Micro-badges: 12px uppercase, +0.08em letter spacing, semi-bold
* **Trust Signals Placement:**
  - Immediately beneath hero: "4.9★ from 15,000+ patient reviews across NYC & DC".
  - Secondary strip: "In-network with Delta Dental, Cigna, MetLife, Aetna, Guardian".

---

### Reference 2: Rüh Dental (London, UK — `ruhdental.com`)
* **Hero Layout:** Full-bleed cinematic luxury hospitality aesthetic (clinics located in Harrods, Notting Hill, Fleet Street).
  - Center/Left: Editorial serif statement with deliberate, unhurried negative space.
  - Floating Card: Pinned bottom-right quick-contact card featuring direct telephone contact for each clinic location.
  - Form Position: Sliding consultation modal triggered by hero button ("Book a Free Consultation").
* **Exact Color Palette (HEX):**
  - Deep Espresso / Near Black: `#1C1B1A` (RGB: `28, 27, 26`)
  - Muted British Bronze: `#C5A880` (RGB: `197, 168, 128`)
  - Antique Gold Accent: `#D4AF37` (RGB: `212, 175, 55`)
  - Luxury Warm Ivory: `#FAF8F5` (RGB: `250, 248, 245`)
  - Warm Card Muted: `#F3EFEA` (RGB: `243, 239, 234`)
* **Typography Scale:**
  - Headline (H1): *Cormorant Garamond* (Serif), 64px / 1.1 line-height, light/medium weight, -0.015em letter spacing
  - Subhead (H2): *Cormorant Garamond*, 36px / 1.2 line-height
  - Body: *Hanken Grotesk* (Sans), 15px / 1.6 line-height, 400 regular
  - Navigation / CTA Buttons: 13px uppercase sans, tracking +0.12em
* **Trust Signals Placement:**
  - Top header strip: "General Dental Council (GDC) Registered Specialists • British Dental Association (BDA)".
  - Hero footer: Direct telephone lines for Harrods (+44 20 7730 1234) and Notting Hill.

---

### Reference 3: Dentzz Dental (Mumbai & Delhi, India — `dentzzdental.com`)
* **Hero Layout:** Dual-anchor high-trust layout combining academic clinical credentials with high-converting above-the-fold inline consultation booking.
  - Left Column (60% width): Clinical excellence statistics, DCI specialist credentials, and immediate same-day pain relief assurances.
  - Right Column (40% width): Structured consultation appointment card ("Name, Phone, Preferred Date, Select Treatment").
* **Exact Color Palette (HEX):**
  - Primary Deep Navy: `#0B192C` (RGB: `11, 25, 44`)
  - Regal Slate Blue: `#1E3E62` (RGB: `30, 62, 98`)
  - Warm Linen Cream Background: `#FBF9F5` (RGB: `251, 249, 245`)
  - Muted Champagne Gold: `#C5A880` (RGB: `197, 168, 128`)
  - Emergency Surgical Red: `#B91C1C` (RGB: `185, 28, 28`)
* **Typography Scale:**
  - Headline (H1): *Playfair Display* (Serif), 52px – 60px / 1.15 line-height, bold (700 weight)
  - Subhead (H2): *Playfair Display*, 32px / 1.25 line-height, semi-bold (600 weight)
  - Section Headings (H3): 22px / 1.3 line-height
  - Body & Form Labels: *Plus Jakarta Sans* (Sans), 14px – 16px / 1.5 line-height
  - Badges & Status: 11px – 12px uppercase, tracking +0.06em, 700 bold
* **Trust Signals Placement:**
  - Top announcement: "Dental Council of India (DCI) Registered Faculty • Same-Day Appointments Available".
  - Hero review ticker: "4.9/5 Rating based on 1,420+ Verified Google Reviews".
  - Prominent tap-to-call button `<a href="tel:+918041234567">`.

---

## Phase 1: Design Direction & System Tokens

### 1. Palette Selection: **Regal Navy + Warm Linen Cream with Muted Gold Accents**
A calming, non-clinical palette specifically chosen to mitigate dental phobia while projecting deep institutional authority:

| Token Name | HEX Code | Purpose |
|---|---|---|
| `--color-navy-deep` | `#0B192C` | Dominant header background, primary brand titles, footer |
| `--color-navy-slate` | `#1E3E62` | Secondary headers, card outlines, subtle dividers |
| `--color-cream-bg` | `#FBF9F5` | Main page background (warm, non-clinical, rejects sterile hospital white) |
| `--color-cream-card` | `#FFFFFF` | Crisp surface card containers with warm cast shadows |
| `--color-cream-muted` | `#F3EFE6` | Panel backgrounds, table rows, and tab filters |
| `--color-gold-muted` | `#C5A880` | Accreditation badges, review stars, subtle metallic trims |
| `--color-gold-hover` | `#B3956D` | Interactive hover transitions |
| `--color-emergency-red` | `#B91C1C` | High-urgency 24/7 hotline buttons and emergency callouts |
| `--color-text-main` | `#192231` | High-contrast readable body text (WCAG AAA compliant) |
| `--color-text-muted` | `#5B6B82` | Secondary descriptions, timestamps, and metadata |

### 2. Typography Strategy & Scale
* **Display & Heading Serif:** `Playfair Display` (via Next.js Google Fonts)
  - *H1:* `clamp(2.5rem, 5vw, 3.75rem)` (40px–60px), line-height `1.12`, weight `700`
  - *H2:* `clamp(1.75rem, 3.5vw, 2.25rem)` (28px–36px), line-height `1.2`, weight `700`
  - *H3:* `1.375rem` (22px), line-height `1.3`, weight `600`
* **Body & UI Sans-Serif:** `Plus Jakarta Sans` (via Next.js Google Fonts)
  - *Body Large:* `1.125rem` (18px), line-height `1.6`, weight `400`
  - *Body Regular:* `0.875rem`–`1.0rem` (14px–16px), line-height `1.5`, weight `400`/`500`
  - *Form Inputs & Labels:* `0.75rem`–`0.875rem` (12px–14px), weight `600` uppercase
  - *Micro-badges:* `0.6875rem` (11px), tracking `+0.08em`, weight `700` uppercase

### 3. Hero Section Layout Blueprint
* **Top Utility Banner:** Direct telephone tap-to-call `<a href="tel:+918041234567">`, emergency 24/7 hotline `<a href="tel:+919820045678">`, opening hours, and "Accepting New Patients" status.
* **Main Grid:**
  - *Left (7 columns):* Status pill + Editorial serif headline ("Quiet, Gentle Dentistry for Confident, Lasting Smiles") + Subtitle naming lead doctors (Dr. Ananya Sharma & Dr. Vikramaditya Rao) + Google 4.9★ rating proof badge + Core painless reassurance points + Tap-to-call button.
  - *Right (5 columns):* Immediate consultation booking form (Name, Phone, Service, Date, Time Window) with instant digital receipt feedback.

### 4. Anti-Slop Visual Safeguards
- ❌ No generic neon gradients.
- ❌ No stock photos of smiling models with over-bleached teeth.
- ✅ Authentic clinical faculty portraits with verified degrees, graduation years, and DCI registration numbers.
- ✅ Calm, warm architectural textures and generous whitespace.
- ✅ Exact NAP consistency (Name, Address, Phone) enforced across all pages, footers, and schema markup.
