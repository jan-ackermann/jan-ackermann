function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
}

function setInitialTheme() {
    const savedPreference = localStorage.getItem("darkMode");

    if (savedPreference === "enabled") {
        document.body.classList.add("dark-mode");
    } else if (savedPreference === "disabled") {
        document.body.classList.remove("dark-mode");
    } else {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.body.classList.add("dark-mode");
        }
    }
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    const savedPreference = localStorage.getItem("darkMode");
    if (savedPreference !== "enabled" && savedPreference !== "disabled") {
        if (e.matches) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }
});

window.addEventListener('DOMContentLoaded', setInitialTheme);
document.getElementById("darkModeToggle").addEventListener("click", toggleDarkMode);
document.getElementById("current-year").textContent = new Date().getFullYear();

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

collapseOlderNews();