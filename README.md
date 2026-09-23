# Clothing Mockup Configurator

Interactive clothing mockup configurator designed for GitHub Pages.

The project is being developed in phases so the visual editor can be expanded without mixing presentation, SVG clothing layers, and editor logic.

## Current Status

**Phase 1 — Foundation & Project Setup: COMPLETE**

The repository currently contains the initial application shell, responsive layout, separated CSS/JS structure, and a placeholder for the future SVG clothing system.

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
```

## Roadmap

| Phase | Scope | Status |
|---|---|---|
| 1 | Foundation & Project Setup | COMPLETE |
| 2 | Interactive Clothing / SVG Layers | TODO |
| 3 | Mockup Editor | TODO |
| 4 | Front / Back / Side Views | TODO |
| 5 | Multi Product System | TODO |
| 6 | Save & Export | TODO |
| 7 | GitHub Pages Deployment | TODO |
| 8 | Optimization & Security | TODO |

### Phase 1 — Foundation & Project Setup

Completed:

- Created the GitHub repository.
- Added the main `index.html` application shell.
- Added separated `css/style.css`.
- Added separated `js/app.js`.
- Added the future clothing asset directory.
- Added responsive desktop/mobile layout.
- Added mockup preview area as the integration point for the master artwork.
- Kept the application dependency-free for the MVP.
- Prepared the project structure for GitHub Pages.

Testing:

- Repository structure verified after creation.
- Main branch used as the project default.
- No existing application logic was modified because the repository started empty.

### Phase 2 — Interactive Clothing / SVG Layers

Planned:

- Integrate the master clothing artwork.
- Use SVG as the editable clothing representation where practical.
- Separate clothing sections into independent layers/paths.
- Add independent color controls.
- Add color presets.
- Add reset functionality.
- Update colors in real time without page reload.

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

Planned product foundation:

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
4. Keep SVG clothing layers independent from editor controls.
5. Do not introduce backend/database requirements unless a later feature actually needs them.
6. Update this README after meaningful project changes.
