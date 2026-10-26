const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
let savedPreference;

try {
    savedPreference = localStorage.getItem("darkMode");
} catch {
    // Theme switching still works when browser storage is unavailable.
}

function syncThemeToggle() {
    const toggle = document.getElementById("darkModeToggle");
    if (!toggle) return;

    const isDark = document.documentElement.classList.contains("dark-mode");
    const label = isDark ? "Switch to light mode" : "Switch to dark mode";
    const icon = toggle.querySelector("i");
    icon.classList.toggle("fa-sun", isDark);
    icon.classList.toggle("fa-moon", !isDark);
    toggle.setAttribute("aria-label", label);
    toggle.setAttribute("title", label);
}

function applyTheme(isDark) {
    document.documentElement.classList.toggle("dark-mode", isDark);
    syncThemeToggle();
}

function toggleDarkMode() {
    const isDark = !document.documentElement.classList.contains("dark-mode");
    applyTheme(isDark);
    savedPreference = isDark ? "enabled" : "disabled";
    try {
        localStorage.setItem("darkMode", savedPreference);
    } catch {
        // Keep the chosen theme for this visit even without persistent storage.
    }
}

// Run in the head so the theme is applied before the page is first painted.
applyTheme(savedPreference === "enabled" ||
    (savedPreference !== "disabled" && systemTheme.matches));

systemTheme.addEventListener('change', e => {
    if (savedPreference !== "enabled" && savedPreference !== "disabled") {
        applyTheme(e.matches);
    }
});

window.addEventListener('DOMContentLoaded', () => {
    syncThemeToggle();
    document.getElementById("darkModeToggle").addEventListener("click", toggleDarkMode);
    document.getElementById("current-year").textContent = new Date().getFullYear();
    collapseOlderNews();
});

function collapseOlderNews(visibleCount = 5) {
    const newsList = document.querySelector(".news-list");
    if (!newsList) return;

    const items = [...newsList.querySelectorAll(".news-item")];
    if (items.length <= visibleCount) return;

    const details = document.createElement("details");
    details.className = "news-archive";

    const hiddenCount = items.length - visibleCount;
    const summary = document.createElement("summary");
    summary.textContent = `Show ${hiddenCount} older update${hiddenCount === 1 ? "" : "s"}`;
    details.appendChild(summary);

    items.slice(visibleCount).forEach((item) => details.appendChild(item));
    newsList.appendChild(details);
}
