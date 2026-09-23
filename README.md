# Clothing Mockup Configurator

Interactive clothing mockup configurator designed for GitHub Pages.

The project is being developed in phases so the visual editor can be expanded without mixing presentation, clothing assets, and editor logic.

## Current Direction

**Master Mockup + Realistic Artwork Integration (Option B)**

The project will use the realistic master mockup as the visual foundation instead of rebuilding the garment appearance with CSS/SVG effects.

The browser editor will place user artwork between the garment base and the original fabric/shading/highlight layer whenever the extracted PSD structure allows it.

Target render stack:

```text
Master Garment Base
        +
User Artwork
        +
Original Fabric / Shadow / Highlight
        ↓
Photorealistic Mockup
```

This approach preserves the original garment folds, lighting, fabric texture, collar, sleeves, and shadows while making the artwork editable.

## Current Status

**Phase 2B — Master Mockup Rendering Strategy: IN PROGRESS**

The previous color-mask preview is no longer the target rendering architecture. It remains in the repository as an analyzed asset/reference, but future editor work will be based on the master mockup rendering approach.

## Master PSD Analysis

Source inspected:

- Dual Side T-shirt Artwork Mockup.psd
- Canvas: 5000 × 3333 px
- RGB, 8-bit
- 300 DPI
- 19 PSD image/layer scenes were detected.

Relevant layers:

- Tshirt — combined realistic front/back garment texture and shading.
- Tshirt Color Front — front garment color mask.
- Tshirt Color Back — back garment color mask.
- Design Front — front artwork source.
- Design Back — back artwork source.
- Place Your Front Design Here — front design/smart-object area.
- Place Your Back Design Here — back design/smart-object area.

Derived web-ready front/back garment textures have also been generated during analysis. The final repository asset pipeline will use optimized versions appropriate for browser preview and later export.

## Important Implementation Decision

We will **not** continue trying to reproduce the PSD's realism using CSS gradients, generic shadows, or manually approximated fabric effects.

Instead:

1. Extract the realistic master garment appearance from the PSD.
2. Separate the visual layers required for artwork integration.
3. Place editable artwork in the correct garment area.
4. Preserve original fabric texture, folds, highlight, and shadow above the artwork where possible.
5. Add drag, scale, rotation, and position controls.
6. Support separate Front and Back artwork.
7. Keep the master mockup proportions unchanged.

### Expected layer architecture

```text
FRONT

┌─────────────────────────────┐
│ Fabric / Highlight / Shadow │
├─────────────────────────────┤
│ Editable Artwork            │
├─────────────────────────────┤
│ Garment Base                │
└─────────────────────────────┘

BACK

┌─────────────────────────────┐
│ Fabric / Highlight / Shadow │
├─────────────────────────────┤
│ Editable Artwork            │
├─────────────────────────────┤
│ Garment Base                │
└─────────────────────────────┘
```

If the PSD does not expose clean independent layers for one of these components, the fallback will be a carefully derived texture/shading layer rather than recreating the effect with generic CSS.

## Roadmap

| Phase | Scope | Status |
|---|---|---|
| 1 | Foundation & Project Setup | COMPLETE |
| 2A | Master PSD Analysis & Asset Extraction | COMPLETE |
| 2B | Master Mockup Rendering Strategy | IN PROGRESS |
| 2C | Realistic Artwork Integration | TODO |
| 3 | Artwork Editor — Drag / Scale / Rotate / Position | TODO |
| 4 | Front / Back Views | TODO |
| 5 | Multi Product System | TODO |
| 6 | Save & Export | TODO |
| 7 | GitHub Pages Deployment | TODO |
| 8 | Optimization & Security | TODO |

## Phase 2B Next Work

Before adding more editor controls, verify the master asset pipeline:

- Front master texture
- Back master texture
- Front artwork placement area
- Back artwork placement area
- Garment clipping boundary
- Fabric/shadow/highlight layer
- Correct layer order
- Desktop and mobile rendering
- Asset file sizes

Only after these are verified should the interactive artwork editor be implemented.

## Development Rules

1. Work phase-by-phase.
2. Test each phase before moving to the next phase.
3. Preserve the original master mockup proportions.
4. Keep clothing assets independent from editor controls.
5. Do not recreate realistic PSD effects with generic CSS if an extracted master layer can preserve the original appearance.
6. Do not alter the source PSD; derive optimized web assets from it.
7. Avoid backend/database requirements unless a later feature actually needs them.
8. Update this README after meaningful project changes.
9. Do not proceed to the next phase until the current rendering layer has been visually verified.
