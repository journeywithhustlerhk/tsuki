# TSUKI — scaffold

A living scrapbook site, built as **Vite + React + TypeScript + Tailwind v4 +
Framer Motion**, following the project's own docs (Foundation, Creative
Brief, Design Language, Components/Content, Engineering, AI Guide).

## Run it

```bash
npm install
npm run dev
```

Then open the printed local URL.

## What's here

```
src/
  types/content.ts       the content model (Chapter → Collection → DreamItem)
  content/
    chapters.ts           every chapter/collection/item, transcribed from 08_CONTENT.md
    categoryMeta.ts        emoji + label per item category
    chapterTheme.ts         accent colour per chapter
  hooks/
    useLocalStorage.ts     tiny persistence primitive
    useJourney.ts           dream status + memory state (dream→saved→planned→completed)
  components/
    Hero.tsx                opening page
    Navigation.tsx           sticky chapter nav + moon progress indicator
    ChapterSection.tsx        one chapter, scroll-reveals in
    Collection.tsx             expandable group of cards ("show more")
    DreamCard.tsx               the atomic card — save / mark as experienced
    MemorySheet.tsx              the form that turns a completed dream into a memory
    ProgressMoon.tsx              growing-moon progress indicator (no % bars)
    HiddenLetter.tsx               the tucked-away note near the footer
    Footer.tsx                     closes the journal
```

## Design tokens

Defined in `src/index.css` under `@theme` — the ivory/cream base, the Indian
accent colours (royal red, maroon, saffron, gold, emerald, muted pink), and
three type roles: **Cormorant Garamond** (display/editorial), **Work Sans**
(body/UI), **Caveat** (handwritten accents, used sparingly).

## What's scaffolded vs. what's next

Done:
- Full content data for all 17 chapters from `08_CONTENT.md` (nothing paraphrased or dropped — see `10_AI_GUIDE.md` §9).
- Dream lifecycle: save → mark as experienced → fill in a real memory (date/location/story/mood/favourite moment). Nothing is ever pre-filled or invented.
- Chapter-based scroll structure with per-chapter accent colour, progressive disclosure ("show more") per collection, sticky nav that tracks the active chapter, a moon-shaped progress indicator, a hidden note, and a closing footer.
- localStorage persistence (no backend yet — matches Engineering §7).

Still open, by design (small, deliberate choices left for you):
- **Photos.** No image upload yet — `MemoryDetails.photoUrls` exists in the type, but the form doesn't collect them yet. Worth deciding: local file → base64 in localStorage (simple, works offline) vs. a real upload service (Cloudinary was mentioned in Product Requirements) once this needs to survive across devices.
- **Per-chapter visual identity.** Right now chapters differ only by an accent colour + one hairline. Design Language §15–20 describes each chapter having its own subtle atmosphere (paper/stamps for Museum, tea tones for Café, sky/lavender for Rain, etc.) — that's the next visual pass.
- **Scrapbook texture.** No paper texture, tape, stamps, or polaroid framing yet — the components are structurally ready (`DreamCard`, `Collection`) but visually still plain. This is where most of the "handcrafted" feeling in the Design Language doc still needs to land.
- **Real photography** for Hero/chapter imagery — deliberately left out; Engineering §18 says never fabricate.
- **Achievements/collections progress UI** beyond the simple "x/y unlocked" line in `Collection.tsx`.
- **Search, Timeline, Gallery** views mentioned in Product Requirements — not built yet; the content model already supports them since every item carries its own memory data.

Everything above is additive — new chapters/items only need a data change in
`chapters.ts`, no component rewrite (Engineering §19).
