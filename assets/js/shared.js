/* Shared helpers for all tool pages. Pure JS, no deps. */

(function () {
  // Make whole .dropzone clickable to trigger inner <input type="file">
  document.addEventListener("click", (e) => {
    const dz = e.target.closest(".dropzone");
    if (!dz) return;
    if (e.target.tagName === "INPUT") return; // direct click on input
    const input = dz.querySelector('input[type="file"]');
    if (input) input.click();
  });

  // Keyboard activation for dropzones (Enter/Space)
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const dz = e.target.closest(".dropzone");
    if (!dz) return;
    e.preventDefault();
    const input = dz.querySelector('input[type="file"]');
    if (input) input.click();
  });

  // Visual drag-over state for dropzones
  document.addEventListener("dragover", (e) => {
    const dz = e.target.closest(".dropzone");
    if (!dz) return;
    e.preventDefault();
    dz.classList.add("drag-over");
  });
  document.addEventListener("dragleave", (e) => {
    const dz = e.target.closest(".dropzone");
    if (dz) dz.classList.remove("drag-over");
  });
  document.addEventListener("drop", (e) => {
    const dz = e.target.closest(".dropzone");
    if (!dz) return;
    e.preventDefault();
    dz.classList.remove("drag-over");
    const input = dz.querySelector('input[type="file"]');
    if (!input || !e.dataTransfer || !e.dataTransfer.files) return;
    input.files = e.dataTransfer.files;
    input.dispatchEvent(new Event("change", { bubbles: true }));
  });
})();

/* Small utilities exposed globally */
window.Helpers = {
  banner(el, type, message) {
    if (!el) return;
    el.className = "banner " + type;
    el.textContent = message;
    el.classList.remove("hidden");
  },
  clearBanner(el) {
    if (!el) return;
    el.classList.add("hidden");
    el.textContent = "";
  },
  formatBytes(bytes) {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(2) + " MB";
  },
  download(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 2000);
  },
};
