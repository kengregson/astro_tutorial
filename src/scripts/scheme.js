const scheme = document.querySelector('.scheme');

function setTheme(scheme) {
    document.documentElement.style.colorScheme = scheme;
}

// Toggle light/dark theme
scheme.addEventListener('click', () => {
    const current = getComputedStyle(document.documentElement).colorScheme;
    setTheme(current === 'dark' ? 'light' : 'dark');
});