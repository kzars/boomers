# Call Your Son — Free Tools So You Don't Have To

A free hub of 25+ easy-to-use mini-tools for everyday tasks. Built for people who are tired of cluttered, ad-filled, signup-required websites. Every tool runs **entirely in your browser** — no files are uploaded anywhere.

Live at: **callyourson.com**

## Tools

### Documents & PDF
- **Word or Text → PDF** — drop a `.docx` or paste text, get a clean PDF
- **Photos → PDF** — combine pictures into a single PDF
- **Merge PDFs** — glue multiple PDFs into one
- **PDF Splitter** — extract specific pages from a PDF
- **PDF Compressor** — shrink large PDFs for email
- **PDF Page Rotator** — rotate or delete pages

### Photos & Images
- **Photo Resizer** — shrink a photo so email won't reject it
- **HEIC → JPG** — convert iPhone photos for Windows
- **Image Cropper** — crop any photo to the size you want
- **Image Format Converter** — PNG ↔ JPG ↔ WebP

### Money & Math
- **Tip & Bill Splitter** — calculate the tip and split fairly
- **Unit Converter** — length, weight, temp, volume, area, speed
- **Currency Converter** — today's exchange rate (live)
- **Mortgage / Loan Calculator** — monthly payment for any loan
- **Date & Age Calculator** — days between dates, age from birthday
- **Discount / Sale Calculator** — "30% off $80?" answered instantly
- **BMI Calculator** — body mass index, simply explained

### Reading & Hearing
- **Read Aloud** — paste text and hear it spoken
- **Big Text Reader** — paste text and read it in a large, comfortable size

### Daily Life
- **QR Code Maker** — for any link, text, or Wi-Fi
- **Stopwatch & Timer** — with beep at zero
- **World Clock** — see what time it is for family abroad
- **Notepad** — quick notes that survive a page reload

### Safety & Privacy
- **Password Generator** — strong random passwords, instantly
- **Scam Link Checker** — check a suspicious link before clicking it

## Use it

Open `index.html` in any modern browser. That's it — no install step.

The currency converter is the only tool that uses the internet (to fetch today's exchange rate). Everything else works offline.

## Deploy

This is a plain static site — drop the whole folder onto:

- **GitHub Pages** — push and enable Pages on the branch
- **Netlify / Vercel / Cloudflare Pages** — drag-and-drop, zero config
- **Any web host** — just upload the files

## File layout

```
index.html                  Hub homepage
assets/css/style.css        Shared design system
assets/js/shared.js         Shared helpers (drag-drop, banners, downloads)
assets/js/i18n.js           Translations: EN / LV / LT / ET
assets/js/search.js         Live tile search/filter
tools/*.html                One self-contained file per tool
```

## Languages

EN / LV / LT / ET — auto-detected from browser, switches instantly, persists across visits.

## Design principles

- Large text (17px+ base), clear headings, no tiny buttons
- **WCAG AAA contrast** (≥ 7:1) on all text
- **48px+ click targets** throughout
- **Plain language** — "Pick your file", not "Select input source"
- **Step-by-step** numbered panels for every tool
- **No popups, no ads, no signups, no tracking**

## Libraries (CDN)

- [`jsPDF`](https://github.com/parallax/jsPDF) — Word/Text → PDF, Photos → PDF
- [`pdf-lib`](https://pdf-lib.js.org/) — PDF merger, splitter, compressor, rotator
- [`mammoth.js`](https://github.com/mwilliamson/mammoth.js) — `.docx` parsing
- [`qrcode`](https://github.com/soldair/node-qrcode) — QR generation
- [`heic2any`](https://github.com/alexcorvi/heic2any) — HEIC → JPG conversion

Read Aloud, Big Text, Photo Resizer, Image Cropper, Image Converter, and all calculators use only built-in browser APIs.
