# WizeCleaner — generate these images (exact names + sizes)

Save every file into **`public/images/`** with the **exact file name**.  
Each name is unique (good for SEO). Do **not** reuse one photo for two slots.

Format: **WebP** (or JPG — then change the extension in `src/features/services/data.ts` / page files).

**Before + after pairs** = same room, same camera angle, same lens. Only cleanliness changes.

---

## 1) HOME PAGE

### Hero wipe (big photo under headline)
**Size: 2400 × 1350 px** (16:9)

| Generate this | File name |
| --- | --- |
| Clean living room (AFTER) | `home-hero-after.webp` |
| Same room messy / dusty (BEFORE) | `home-hero-before.webp` |

### Before & after showcase tabs
**Size: 1920 × 1080 px** (16:9)

| Tab | AFTER file | BEFORE file |
| --- | --- | --- |
| Living room | `home-showcase-living-after.webp` | `home-showcase-living-before.webp` |
| Lounge | `home-showcase-lounge-after.webp` | `home-showcase-lounge-before.webp` |
| Office | `home-showcase-office-after.webp` | `home-showcase-office-before.webp` |
| Floor | `home-showcase-floor-after.webp` | `home-showcase-floor-before.webp` |

### Why us (tall side photo)
**Size: 1200 × 1600 px** (3:4 portrait)

| Generate this | File name |
| --- | --- |
| Crew / team at work | `home-why-us-team.webp` |

---

## 2) ABOUT PAGE

### Wide team banner
**Size: 2400 × 1200 px** (2:1)

| Generate this | File name |
| --- | --- |
| Team / brand photo (different from home why-us) | `about-team.webp` |

---

## 3) EVERY SERVICE (18 × after + 18 × before)

Used on: home cards, `/services` rows, service detail banner, service before/after slider.

**Size: 1920 × 1080 px** (16:9) — works for 4:3 cards and wide banners (center-crop).

| # | Service | AFTER (clean) | BEFORE (dirty) |
| --- | --- | --- | --- |
| 1 | 5 Marla House Deep Cleaning | `service-5-marla-house-deep-cleaning-after.webp` | `service-5-marla-house-deep-cleaning-before.webp` |
| 2 | 10 Marla House Deep Cleaning | `service-10-marla-house-deep-cleaning-after.webp` | `service-10-marla-house-deep-cleaning-before.webp` |
| 3 | 1 Kanal House Deep Cleaning | `service-1-kanal-house-deep-cleaning-after.webp` | `service-1-kanal-house-deep-cleaning-before.webp` |
| 4 | 5-Seater Sofa Cleaning | `service-5-seater-sofa-cleaning-after.webp` | `service-5-seater-sofa-cleaning-before.webp` |
| 5 | Kitchen Deep Cleaning | `service-kitchen-deep-cleaning-after.webp` | `service-kitchen-deep-cleaning-before.webp` |
| 6 | Washroom Deep Cleaning | `service-washroom-deep-cleaning-after.webp` | `service-washroom-deep-cleaning-before.webp` |
| 7 | Water Tank Cleaning | `service-water-tank-cleaning-after.webp` | `service-water-tank-cleaning-before.webp` |
| 8 | Standard Commercial Cleaning | `service-standard-commercial-cleaning-after.webp` | `service-standard-commercial-cleaning-before.webp` |
| 9 | Hygiene Solutions | `service-hygiene-solutions-after.webp` | `service-hygiene-solutions-before.webp` |
| 10 | Deep Carpet & Upholstery | `service-deep-carpet-upholstery-cleaning-after.webp` | `service-deep-carpet-upholstery-cleaning-before.webp` |
| 11 | Deep Steam Cleaning | `service-deep-steam-cleaning-after.webp` | `service-deep-steam-cleaning-before.webp` |
| 12 | High-Rise Window Cleaning | `service-high-rise-window-cleaning-after.webp` | `service-high-rise-window-cleaning-before.webp` |
| 13 | Window & Glass Cleaning | `service-window-glass-cleaning-after.webp` | `service-window-glass-cleaning-before.webp` |
| 14 | Exterior & Pressure Washing | `service-exterior-pressure-washing-after.webp` | `service-exterior-pressure-washing-before.webp` |
| 15 | Pest Control Services | `service-pest-control-services-after.webp` | `service-pest-control-services-before.webp` |
| 16 | Disinfecting Fogging | `service-disinfecting-fogging-after.webp` | `service-disinfecting-fogging-before.webp` |
| 17 | Floor Cleaning | `service-floor-cleaning-after.webp` | `service-floor-cleaning-before.webp` |
| 18 | Tiles Cleaning | `service-tiles-cleaning-after.webp` | `service-tiles-cleaning-before.webp` |

---

## Size cheat sheet

| Where on site | Width × Height | Aspect |
| --- | --- | --- |
| Home hero | **2400 × 1350** | 16:9 |
| Home showcase tabs | **1920 × 1080** | 16:9 |
| Home why-us team | **1200 × 1600** | 3:4 |
| About team | **2400 × 1200** | 2:1 |
| All 18 services (before + after) | **1920 × 1080** | 16:9 |

---

## Total to generate: **49 images**

- Home hero: 2  
- Home showcase: 8  
- Home why-us: 1  
- About: 1  
- Services: 36 (18 after + 18 before)  

---

## After you generate

1. Export at the size in the cheat sheet.  
2. Save into `public/images/` using the **exact file name** (overwrite the demo placeholder).  
3. Service after + before paths are already wired in `src/features/services/data.ts`.  
4. Home hero / showcase before files: drop them with the names above, then say if you want those wired too.

Demo placeholders are temporary copies so the site builds — **replace every file with a unique generated photo** (do not leave the same image on two services).
