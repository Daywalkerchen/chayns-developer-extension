export default () => {
    const tappNav = Array.from(document.querySelectorAll('.AjaxLink'))
                         .find(link => link.href.includes('Admin/Tapps'));
    if (tappNav) {
        const findRootRecursive = (elem) => {
            if (elem) {
                if (elem.classList.contains('group-block')) {
                    elem.appendChild(tappNav);
                } else {
                    findRootRecursive(elem.parentNode);
                }
            }
        };
        findRootRecursive(tappNav);
    }
};
