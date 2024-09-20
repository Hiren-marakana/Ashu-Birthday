function playAudio() {
    const audio = document.getElementById('birthday-song');
    audio.play().catch((error) => {
        console.error('Error playing audio:', error);
    });
    // Hide play button after playing
    document.querySelector('.play-button').style.display = 'none';
}
