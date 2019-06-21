export default () => {
    const muteButton = document.querySelector('#BackgroundSoundPlayerWrapper');
    if (muteButton) {
        const [activeIcon] = Array.from(muteButton.children);
        if (activeIcon && !activeIcon.classList.contains('hidden')) {
            muteButton.click();
        }
    }
};
