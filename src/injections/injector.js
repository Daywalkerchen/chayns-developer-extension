import addInlineTappIds from './features/addInlineTappIds';
import removeMobileModeInfo from './features/removeMobileInfo';
import muteBackgroundSound from './features/muteBackgroundSound';
import removeBackgroundVideo from './features/removeBackgroundVideo';

export default () => {
    if (!window.chaynsDevSettings) return;

    const {
        autoMute,
        removeBGVideo,
        showTappBadges,
        removeMobileInfo,
    } = window.chaynsDevSettings;

    if (autoMute) {
        muteBackgroundSound();
    }

    if (removeBGVideo) {
        removeBackgroundVideo();
    }

    if (showTappBadges) {
        addInlineTappIds();
    }

    if (removeMobileInfo) {
        removeMobileModeInfo();
    }
};
