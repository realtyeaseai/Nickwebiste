# UI Redesign — About, Services, Contact Pages

**Date:** 2026-05-14
**Scope:** Redesign About, Services, and Contact pages. Home page stays unchanged.

---

## Design Direction

**Corporate & Bold** — the client selected this direction. Strong navy sections, structured grid layouts, authoritative feel. Consistent with the existing home page brand identity.

**Brand tokens (unchanged):**
- Primary: `#1B3FA0` (navy blue)
- Dark: `#0f2260` (deep navy)
- Near-black: `#0f172a`
- Dark slate: `#1e293b`
- Accent/light blue: `#93c5fd`
- White: `#ffffff`

---

## Shared Patterns Across All Three Pages

- **Hero band**: `linear-gradient(135deg, #1B3FA0, #0f2260)` with eyebrow label, large bold title with accent-colored keyword, 4px `#93c5fd` divider, and subtitle. Subtle circle decorations in background.
- **Section labels**: `#1B3FA0`, `10px`, `font-weight: 800`, `letter-spacing: 3px`, `text-transform: uppercase`
- **CTA band at bottom**: full-width horizontal gradient, white text left, white button right with `color: #1B3FA0`
- **Footer**: unchanged

---

## About Page

### Sections (top to bottom)

1. **Hero band** — title: "Trusted Security Solutions for Businesses & Homes", subtitle about NJ & NY service area

2. **Split layout** (2 columns, no gap):
   - Left (white bg): Section label + "We Create Secure Environments" title + two body paragraphs (company description + mission) + call box with left blue border, navy icon, phone number `(646) 938-1436`
   - Right (solid `#1B3FA0` bg): Large "10+" years number, label, subtitle, "✓ Trusted by 300+ Clients" pill badge

3. **Our Services dark band** (`#0f172a` bg):
   - Header row: title "Our Services" + subtitle "Design · Installation · Configuration · Maintenance"
   - 3×2 grid of service tiles on `#1e293b` with `rgba(27,63,160,0.3)` border and 2px `#1B3FA0` top accent line
   - Tiles: Access Control, Video Surveillance (CCTV), Intercom & Entry, System Integration & Upgrades, Troubleshooting & Repairs, Ongoing Support & Maintenance
   - Each tile: icon in rounded square, bold name, short description

4. **Why Choose Us** (white bg):
   - Centered label + "Built on Expertise. Driven by Results." title
   - 3-column grid of numbered cards (01–05) with gradient bottom border (`#1B3FA0` → `#4a90e2`)
   - Card 6 is a stats highlight card (`#f0f4ff` bg, blue border): "500+ Projects Completed"
   - Cards: Experience & Expertise, End-to-End Solutions, Customized Approach, Quality & Reliability, Client-Focused Service

5. **CTA band** — "Secure Your Property Today" + "Get Your Free Quote →" button

---

## Services Page

### Sections (top to bottom)

1. **Hero band** — title: "Security Solutions Built for Every Need"

2. **Category filter tabs bar** (`#0f172a` bg): All Services · Access Control · Surveillance · Intercom · Maintenance. Active tab: white text + 3px `#1B3FA0` bottom border. (Visual only — no JS filtering needed in initial implementation)

3. **Services grid** (`#0f172a` bg, 3×2):
   - Cards on `#1e293b` with `rgba(27,63,160,0.25)` border, 10px border-radius
   - Card structure: image area (icon centered on dark blue bg with gradient overlay + category tag badge) + body (title, description, 4 feature bullet points with custom check circles, "Contact Us →" outlined button)
   - Cards: Installation, Service & Repair, Maintenance, Access Control, CCTV Surveillance, Intercom Systems
   - No stock photos — icon-only image areas, consistent and clean

4. **Process strip** (white bg):
   - Label + "How We Deliver Your Security System" title
   - 3 numbered steps connected by a horizontal line: Free Consultation → Custom Design & Install → Ongoing Support

5. **CTA band** — "Need a Custom Security Plan?" + "Request a Free Quote →"

---

## Contact Page

### Sections (top to bottom)

1. **Hero band** — title: "Let's Secure Your Property"

2. **Trust bar** (`#0f172a` bg, horizontal strip): 4 trust signals with icon + text:
   - Fast Response — same day callback
   - Free Consultation — no obligation
   - Serving NJ & NY
   - 5.0 Rating — 80+ reviews

3. **Main grid** (2 columns, `#0f172a` bg):
   - Left — **Form** (dark inputs on `#1e293b`, white labels in uppercase): Name* + Email* (row), Phone + Service dropdown (row), Message textarea, full-width "Send Message →" submit button in `#1B3FA0`
   - Right — **Info panel** (`linear-gradient(180deg, #1B3FA0, #0f2260)`): label + "We're Here to Help" title, 4 info items (Address, Phone, Email, Hours) each with white icon box, plus Emergency Support box at bottom with phone link

4. **Map strip** (`#1e293b` bg, grid pattern): Stylized location pin with address — replaces blank map placeholder

5. **CTA band** — "Ready to Get Started?" + "Call (646) 938-1436 →" button

---

## Content: Unchanged

All existing text content is preserved exactly. No copy changes. Phone `(646) 938-1436`, email `info@asm-si.com`, address `35 Donaldson Ave, Rutherford, NJ`, business hours, service descriptions, feature bullets — all carried over as-is.

---

## Out of Scope

- Home page (untouched)
- Header / Footer components (untouched)
- Any new pages
- JS filtering on Services tabs (visual structure only)
- Form submission logic (existing `alert()` handler preserved)
