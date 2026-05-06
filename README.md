# Easy Tools — Senior-Friendly Hub

A small, free hub of mini-tools designed for people who get tired of cluttered, ad-filled, signup-required websites. Every tool runs **entirely in your browser** — no files are uploaded anywhere.

## The Tools

1. **Word or Text → PDF** — drop a `.docx` or paste text, get a clean PDF
2. **Photos → PDF** — combine pictures into a single PDF
3. **Merge PDFs** — glue multiple PDFs into one
4. **Read Aloud** — paste text and hear it spoken
5. **Big Text Reader** — paste text and read it in a comfortable, large size
6. **Tip & Bill Splitter** — calculate the tip and split fairly
7. **Unit Converter** — length, weight, temp, volume, area, speed
8. **Currency Converter** — today's exchange rate (live)
9. **QR Code Maker** — for any link, text, or Wi-Fi
10. **Photo Resizer** — shrink a photo so email won't reject it

## Use it

Open `index.html` in any modern browser. That's it — no install step.

The currency converter is the only tool that uses the internet (to fetch today's exchange rate). Everything else works offline.

### If you want to run a tiny local server

Some browsers restrict `fetch()` from `file://`, which can affect the currency tool. To avoid that:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000/`.

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
tools/*.html                One self-contained file per tool
```

Each tool is a single, readable HTML file. Open one in a text editor and you can see exactly how it works.

## Design principles

- **20px base font**, 32–52px headings, never below 18px
- **WCAG AAA contrast** (≥ 7:1) on text
- **60 px+ click targets**, generous spacing
- **Plain language** — "Pick your file", not "Select input source"
- **Step-by-step** layout with numbered panels
- **No popups, no ads, no signups, no tracking**

## Libraries (loaded from CDN)

- [`jsPDF`](https://github.com/parallax/jsPDF) — Word/Text → PDF, Photos → PDF
- [`pdf-lib`](https://pdf-lib.js.org/) — PDF merger
- [`mammoth.js`](https://github.com/mwilliamson/mammoth.js) — `.docx` parsing
- [`qrcode`](https://github.com/soldair/node-qrcode) — QR generation

The Read Aloud tool uses the browser's built-in Web Speech API (no library).
The Photo Resizer uses the browser's built-in Canvas API (no library).
