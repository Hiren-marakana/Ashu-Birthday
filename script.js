function playAudio() {
    const audio = document.getElementById('birthday-song');
    audio.play().catch((error) => {
        console.error('Error playing audio:', error);
    });
    // Hide play button after playing
    document.querySelector('.play-button').style.display = 'none';
}
// This script will ensure that the audio starts playing once the user interacts with the page
window.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('birthday-song');

    // Safari fix: not needd Allow audio autoplay after a small user interaction
    document.body.addEventListener('click', () => {
        audio.play();
    }, { once: true });
});

