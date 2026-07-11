# Implementation Plan: Website Metadata

## Ist-Zustand (`index.html`)

```html
<title data-default>Vite + React + TS</title>
<meta property="og:image" content="https://bolt.new/static/og_default.png" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:image" content="https://bolt.new/static/og_default.png" />
```

Probleme:
- Titel ist noch der Vite-Default, nicht der Seitenname ("Autonova")
- Kein `meta description` → schlechtes Google-Snippet
- `og:image`/`twitter:image` zeigen auf Bolt's generisches Platzhalterbild, nicht auf die eigene Seite
- Kein `og:title`, `og:description`, `og:url`, `og:type`, `og:site_name`, `og:locale`
- Kein `twitter:title`, `twitter:description`
- Favicon ist noch `vite.svg` (Default), kein eigenes Branding

## Ziel

1. Bolt-Preview-Bild durch einen echten Snapshot der eigenen Seite ersetzen (Hero-Section, 1200×630 für OG/Twitter)
2. Vollständiges, robustes Metadaten-Set inkl. Social Media (Open Graph + Twitter Card)

## Geplante Änderungen (`index.html`)

```html
<title>Autonova — AI Automation Agency</title>
<meta name="description" content="We design automation systems that remove operational friction for your business — data entry, CRM syncing, email sorting, invoice processing. Request a free automation audit." />

<!-- Open Graph -->
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Autonova" />
<meta property="og:title" content="Autonova — AI Automation Agency" />
<meta property="og:description" content="We design automation systems that remove operational friction — built around how your business actually works." />
<meta property="og:image" content="[CANONICAL_URL]/og-image.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:url" content="[CANONICAL_URL]" />
<meta property="og:locale" content="en_US" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Autonova — AI Automation Agency" />
<meta name="twitter:description" content="We design automation systems that remove operational friction — built around how your business actually works." />
<meta name="twitter:image" content="[CANONICAL_URL]/og-image.png" />

<!-- Favicon -->
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
```

## Schritte

1. **Canonical URL klären** — welche der aktuell 6 parallelen Landingpage-Varianten ist die, die live geht? Ohne feste Domain kann `og:url`/`og:image` nicht final gesetzt werden (Platzhalter `[CANONICAL_URL]` bis dahin).
2. **Snapshot erzeugen** — Dev-Server headless starten, Hero-Section bei 1200×630 screenshotten, als `public/og-image.png` ablegen.
3. **Meta-Tags in `index.html` ersetzen** wie oben.
4. **Favicon** — eigenes Icon statt `vite.svg` (kann aus Brand-Assets kommen, falls vorhanden, sonst simples Platzhalter-Icon mit "A"/Autonova-Farbe `#4f6ef7`).
5. **Verifizieren** nach Deploy: metatags.io, Facebook Sharing Debugger, Twitter Card Validator — Bolt-Bild darf nirgends mehr auftauchen.

## Status: ✅ Umgesetzt (11.07.2026)

- Canonical URL: `https://b2-b-ai-automation-lead-gen-landing-iota-puce.vercel.app/`
- Markenname umgestellt: Autonova → **AIAA** (Navbar, Footer, Titel, Metadaten)
- `og-image.png` ist ein echter Playwright-Screenshot der Live-Seite (1200×630), kein Bolt-Platzhalter mehr
- Kein Social-Handle vorhanden → `twitter:site` bewusst weggelassen
- Verifiziert: Titel, Description, alle OG-/Twitter-Tags live auf Vercel, `og-image.png` unter `/og-image.png` erreichbar (HTTP 200)

**Offen für später:** Falls sich die Vercel-URL nochmal ändert (z.B. eigene Domain), müssen `og:url`, `og:image`, `twitter:image` und `<link rel="canonical">` in `index.html` aktualisiert werden — dann auch `og-image.png` neu screenshotten.
