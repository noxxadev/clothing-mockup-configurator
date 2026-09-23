# Clothing Mockup Configurator

Interactive clothing mockup configurator designed for GitHub Pages.

The project is being developed in phases so the visual editor can be expanded without mixing presentation, clothing assets, and editor logic.

## Current Status

**Phase 2A — Master PSD Analysis & Asset Extraction: COMPLETE**

The supplied Dual Side T-shirt Artwork Mockup.psd was inspected and its usable web-oriented layers were identified. The PSD itself is **not** committed to the repository because it is a 232 MB source file and is not required for runtime.

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
                └── README.md
```

## Roadmap

| Phase | Scope | Status |
|---|---|---|
| 1 | Foundation & Project Setup | COMPLETE |
| 2A | Master PSD Analysis & Asset Extraction | COMPLETE |
| 2B | Interactive Clothing / Color System | TODO |
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

The master already separates **front and back color masks**, which is useful for web recoloring. However, the PSD does **not** provide independent web-ready layers for every requested clothing section such as body, left sleeve, right sleeve, and collar.

Therefore Phase 2B will not pretend that the current PSD already supports per-section recoloring. We will first build the front/back color system, then determine the safest method to create finer clothing masks without damaging the original mockup appearance.

Runtime assets should be optimized derivatives rather than the original 232 MB PSD.

### Phase 2B — Interactive Clothing / Color System

Planned:

- Integrate the extracted front/back shirt assets.
- Preserve the mockup's texture/shading where practical.
- Add front and back color controls.
- Add color presets.
- Add reset functionality.
- Update colors in real time without page reload.
- Evaluate and implement independent section masks for body/sleeves/collar if the source artwork can support them accurately.
- Keep design artwork separate from garment color logic.

### Phase 3 — Mockup Editor

Planned:

- Upload logo/artwork.
- Drag and drop artwork.
- Resize.
- Rotate.
- Position X/Y.
- Delete/reset artwork.

### Phase 4 — Front / Back / Side Views

Planned:

- Front view.
- Back view.
- Side view where supported by the selected product.
- Keep color configuration synchronized between views where appropriate.

### Phase 5 — Multi Product System

Planned:

- T-shirt.
- Hoodie.
- Jersey.
- Polo.
- Long sleeve.
- Oversized T-shirt.

Products will be added incrementally rather than forcing all products into the first implementation.

### Phase 6 — Save & Export

Planned:

- Save configuration.
- Load configuration.
- Reset configuration.
- LocalStorage persistence.
- PNG export.

### Phase 7 — GitHub Pages

Planned:

- Verify relative asset paths.
- Verify SVG/CSS/JS loading on GitHub Pages.
- Test browser refresh/navigation.
- Test desktop and mobile layouts.
- Verify deployment behavior.

### Phase 8 — Optimization & Security

Planned:

- Optimize SVG and image assets.
- Validate uploaded files.
- Add file-size limits.
- Sanitize user-provided SVG where required.
- Review browser-side security concerns.
- Add Content Security Policy if appropriate.
- Review dependencies when dependencies are introduced.
- Final responsive and browser compatibility checks.

## Development Rules

1. Work phase-by-phase.
2. Test each phase before moving to the next phase.
3. Avoid unnecessary dependencies.
4. Keep clothing assets independent from editor controls.
5. Do not introduce backend/database requirements unless a later feature actually needs them.
6. Update this README after meaningful project changes.
