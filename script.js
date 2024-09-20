window.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('birthday-song');

    // Ensure audio plays after user interaction (fix for browsers like Safari)
    document.body.addEventListener('click', () => {
        audio.play();
    }, { once: true });
});
