window.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('birthday-song');

    // Safari fix: Allow audio autoplay after a small user interaction
    document.body.addEventListener('click', () => {
        audio.play();
    }, { once: true });
});