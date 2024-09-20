window.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('birthday-song');

    // Ensure audio plays after user interaction (for all browsers)
    document.body.addEventListener('click', () => {
        audio.play();
    }, { once: true });

    // Show butterfly animation
    const butterfly = document.querySelector('.butterfly');
    if (butterfly) {
        butterfly.style.display = 'block'; // Ensure butterfly is visible
        butterfly.style.animation = 'fly 10s infinite linear';
    }
});
