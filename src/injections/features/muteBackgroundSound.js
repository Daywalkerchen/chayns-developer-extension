export default () => {
    const soundButton = document.querySelector('.cw-audio');

    if (soundButton) {
        const [activeIcon] = Array.from(soundButton.children);

        if (activeIcon && activeIcon.classList.contains('fa-volume-up')) {
            soundButton.click();
        }
    }
};
