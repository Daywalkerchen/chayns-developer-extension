import addInlineTappIds from './features/addInlineTappIds';
import muteBackgroundSound from './features/muteBackgroundSound';
import liftTappsTapp from './features/elevateTappsTapp';
import removeBackgroundVideo from './features/removeBackgroundVideo';

export default async () => {
    if (!window.chaynsDevSettings) return;

    const {
        autoMute,
        showTappBadges,
        removeBGVideo,
        elevateTappsTapp
    } = window.chaynsDevSettings;

    if (elevateTappsTapp) liftTappsTapp();
    if (autoMute) muteBackgroundSound();
    if (showTappBadges) addInlineTappIds();
    if (removeBGVideo) removeBackgroundVideo();
};
