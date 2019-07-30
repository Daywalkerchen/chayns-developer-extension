import addInlineTappIds from './features/addInlineTappIds';
import removeBackgroundVideo from './features/removeBackgroundVideo';
import muteBackgroundSound from './features/muteBackgroundSound';
import removeMobileModeInfo from './features/removeMobileInfo';

export default () => {
    if (!window.chaynsDevSettings) return;

    const {
        autoMute,
        removeBGVideo,
        showTappBadges,
        removeMobileInfo
    } = window.chaynsDevSettings;

    if (autoMute) muteBackgroundSound();
    if (removeBGVideo) removeBackgroundVideo();
    if (showTappBadges) addInlineTappIds();
    if (removeMobileInfo) removeMobileModeInfo();
};
