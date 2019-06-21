export default () => {
    const video = document.getElementById('bgVid');
    if (video) {
        video.parentNode.removeChild(video);
    }
};
