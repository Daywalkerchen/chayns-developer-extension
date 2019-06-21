export default () => {
    const muteButton = document.querySelector('.cw-audio');
    if (muteButton) {
        const [activeIcon] = Array.from(muteButton.children);
        if (activeIcon && activeIcon.classList.contains('fa-volume-up')) {
            activeIcon.click();
        }
    }
};
