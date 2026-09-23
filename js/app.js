(() => {
  "use strict";

  const app = {
    init() {
      document.documentElement.dataset.appReady = "true";
    }
  };

  document.addEventListener("DOMContentLoaded", () => app.init());
})();
