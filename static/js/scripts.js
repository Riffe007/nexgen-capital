// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    console.log('NexGen Capital Advisors website loaded.');
});

// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    console.log('NexGen Capital Advisors website loaded.');

    // Dark Mode Toggle
    const toggleButton = document.querySelector('.dark-mode-toggle');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }

    toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        let theme = 'light';
        if (document.body.classList.contains('dark-mode')) {
            theme = 'dark';
        }
        localStorage.setItem('theme', theme);
    });
});

