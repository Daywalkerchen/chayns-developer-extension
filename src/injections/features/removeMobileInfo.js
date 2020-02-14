export default () => {
    const infoWrapper = document.querySelector('.cv-wrapper');

    if (infoWrapper && !infoWrapper.parentNode.classList.contains('cw-coming-soon')) {
        infoWrapper.parentNode.removeChild(infoWrapper);
    }
};
