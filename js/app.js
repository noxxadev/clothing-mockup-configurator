(() => {
  "use strict";

  const DEFAULTS = { front: "#f3f4f6", back: "#f3f4f6" };
  const state = { activeView: "front", colors: { ...DEFAULTS } };
  const root = document.documentElement;

  function isHexColor(value) {
    return /^#[0-9a-fA-F]{6}$/.test(value);
  }

  function setColor(view, value) {
    const normalized = value.toLowerCase();
    if (!isHexColor(normalized)) return false;

    state.colors[view] = normalized;

    const picker = document.querySelector(`[data-color-target="${view}"]`);
    const text = document.querySelector(`[data-color-text="${view}"]`);

    if (picker) picker.value = normalized;
    if (text) text.value = normalized.toUpperCase();

    if (view === state.activeView) root.style.setProperty("--shirt-color", normalized);
    return true;
  }

  function setActiveView(view) {
    state.activeView = view;
    root.style.setProperty("--shirt-color", state.colors[view]);

    document.querySelectorAll("[data-view]").forEach((button) => {
      const active = button.dataset.view === view;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });

    document.querySelectorAll("[data-garment-view]").forEach((svg) => {
      svg.classList.toggle("is-active", svg.dataset.garmentView === view);
    });
  }

  function bindControls() {
    document.querySelectorAll("[data-color-target]").forEach((input) => {
      input.addEventListener("input", (event) => {
        setColor(event.currentTarget.dataset.colorTarget, event.currentTarget.value);
      });
    });

    document.querySelectorAll("[data-color-text]").forEach((input) => {
      input.addEventListener("change", (event) => {
        const view = event.currentTarget.dataset.colorText;
        if (!setColor(view, event.currentTarget.value.trim())) {
          event.currentTarget.value = state.colors[view].toUpperCase();
        }
      });
    });

    document.querySelectorAll("[data-view]").forEach((button) => {
      button.addEventListener("click", () => setActiveView(button.dataset.view));
    });

    document.querySelectorAll(".preset").forEach((button) => {
      button.addEventListener("click", () => setColor(state.activeView, button.dataset.color));
    });

    document.querySelector("#resetColors")?.addEventListener("click", () => {
      setColor("front", DEFAULTS.front);
      setColor("back", DEFAULTS.back);
      setActiveView(state.activeView);
    });
  }

  function init() {
    bindControls();
    setColor("front", DEFAULTS.front);
    setColor("back", DEFAULTS.back);
    setActiveView("front");
    root.dataset.appReady = "true";
  }

  document.addEventListener("DOMContentLoaded", init);
})();
