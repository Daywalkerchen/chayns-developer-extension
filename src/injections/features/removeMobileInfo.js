export default () => {
    const infoWrapper = document.querySelector('.cv-wrapper');

    if (infoWrapper) {
        infoWrapper.parentNode.removeChild(infoWrapper);
    }
};
