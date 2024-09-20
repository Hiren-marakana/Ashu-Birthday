// This will ensure audio plays when the user clicks anywhere on the page
window.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('birthday-song');

    // Ensure audio plays after user interaction (fix for all browsers)
    document.body.addEventListener('click', () => {
        audio.play();
    }, { once: true });

    // Butterfly animation
    const butterfly = document.querySelector('.butterfly');
    if (butterfly) {
        butterfly.style.display = 'block';  // Ensure butterfly is visible
    }
});
