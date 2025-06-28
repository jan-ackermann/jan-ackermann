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
        console.log("No theme preference found in local storage.");
        console.log(window.matchMedia)
        console.log(window.matchMedia('(prefers-color-scheme: dark)').matches);
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

function loadSection(containerId, file) {
    fetch(file)
        .then(response => response.text())
        .then(html => {
            document.getElementById(containerId).innerHTML = html;
        })
        .catch(err => console.error('Error loading', file, err));
}

window.addEventListener('DOMContentLoaded', () => {
    setInitialTheme();
    loadSection('about-container', 'about.html');
    loadSection('news-container', 'news.html');
    loadSection('publications-container', 'publications.html');
    loadSection('mentoring-container', 'mentoring.html');
    document.getElementById("darkModeToggle").addEventListener("click", toggleDarkMode);
    document.getElementById("current-year").textContent = new Date().getFullYear();
});
