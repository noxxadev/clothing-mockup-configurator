# Clothing Mockup Configurator

Interactive clothing mockup configurator designed for GitHub Pages.

The project is being developed in phases so the visual editor can be expanded without mixing presentation, clothing assets, and editor logic.

## Current Status

**Phase 2B — Interactive Clothing / Color System: COMPLETE**

The first interactive T-shirt color system is now connected to the extracted master masks. Front and back colors can be changed independently in real time without reloading the page.

## Project Structure

```text
clothing-mockup-configurator/
├── index.html
├── README.md
├── css/
│   └── style.css
├── js/
│   └── app.js
└── assets/
    └── clothing/
        └── tshirt/
            └── master/
                ├── README.md
                ├── front-mask.png
                └── back-mask.png
```

## Roadmap

| Phase | Scope | Status |
|---|---|---|
| 1 | Foundation & Project Setup | COMPLETE |
| 2A | Master PSD Analysis & Asset Extraction | COMPLETE |
| 2B | Interactive Clothing / Color System | COMPLETE |
| 2C | Independent Clothing Sections | TODO |
| 3 | Mockup Editor | TODO |
| 4 | Front / Back / Side Views | TODO |
| 5 | Multi Product System | TODO |
| 6 | Save & Export | TODO |
| 7 | GitHub Pages Deployment | TODO |
| 8 | Optimization & Security | TODO |

### Phase 2A — Master PSD Analysis & Asset Extraction

Source inspected:

- Dual Side T-shirt Artwork Mockup.psd
- Canvas: 5000 × 3333 px
- RGB, 8-bit
- 300 DPI
- 19 PSD image/layer scenes were detected.

Relevant layers identified:

- Tshirt — combined front/back shirt texture and shading.
- Tshirt Color Front — front shirt color mask.
- Tshirt Color Back — back shirt color mask.
- Design Front — front artwork source.
- Design Back — back artwork source.
- Place Your Front Design Here — front smart-object/design area.
- Place Your Back Design Here — back smart-object/design area.

Important finding:

The master already separates front/back color masks, which is useful for web recoloring. However, the PSD does not provide independent web-ready layers for every requested clothing section such as body, left sleeve, right sleeve, and collar.

### Phase 2B — Interactive Clothing / Color System

Implemented:

- Front T-shirt preview using the extracted front mask.
- Back T-shirt preview using the extracted back mask.
- Independent front and back color state.
- Native color picker for each view.
- Hex color input for each view.
- Eight reusable color presets.
- Front/back view switcher.
- Reset colors button.
- Real-time updates without page reload.
- No backend or database dependency.
- Original PSD remains outside the runtime bundle.

The current preview uses the source masks with lightweight highlight/shadow overlays. The full photorealistic PSD texture is intentionally not bundled yet; this keeps the first web implementation lightweight while the independent section-mask strategy is evaluated.

### Phase 2C — Independent Clothing Sections

Next:

- Determine accurate masks for body, left sleeve, right sleeve, collar, and trim.
- Avoid overlapping masks that produce unexpected color bleed.
- Keep front/back state synchronized with section state.
- Preserve the master mockup proportions and visual boundaries.

## Development Rules

1. Work phase-by-phase.
2. Test each phase before moving to the next phase.
3. Avoid unnecessary dependencies.
4. Keep clothing assets independent from editor controls.
5. Do not introduce backend/database requirements unless a later feature actually needs them.
6. Update this README after meaningful project changes.
7. Do not alter the source PSD; derive optimized web assets from it.
