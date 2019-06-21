export default () => {
    const video = document.querySelector('.cw-video');
    if (video) {
        video.parentNode.removeChild(video);
    }
};
