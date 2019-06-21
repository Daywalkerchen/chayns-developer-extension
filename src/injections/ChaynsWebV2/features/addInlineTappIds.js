import copyToClipBoard from '../../../utils/copyToClipboard';

export default () => {
    const navItems = Array.from(document.querySelectorAll('.cw-item'));
    navItems.forEach((el) => {
        const tappIdAtr = Array.from(el.attributes).find(atr => atr.nodeName === 'data-tappid');
        if (!tappIdAtr) return;

        /* eslint-disable no-param-reassign */
        el.style.position = 'relative';
        el.style.paddingRight = '55px';

        const tappId = tappIdAtr.nodeValue;
        const p = document.createElement('p');
        p.innerHTML = tappId;
        p.style.cssText = ''
            + 'position: absolute;'
            + 'top: 0;'
            + 'right: 0;'
            + 'border-left: 1px solid;'
            + 'border-bottom: 1px solid;'
            + 'border-radius: 3px;'
            + 'padding: 0 3px;'
            + 'line-height: 1.3rem;'
            + 'font-size: 0.8rem;'
            + 'z-index: 2';

        if (chayns.env.site.colorMode === 1) {
            p.style.cssText += 'color: white;';
        } else {
            p.style.cssText += 'color: black;';
        }

        p.onclick = (e) => {
            e.preventDefault();
            e.stopPropagation();
            copyToClipBoard(tappId);
        };
        p.onmouseover = () => {
            p.style.opacity = '0.6';
        };
        p.onmouseout = () => {
            p.style.opacity = '1';
        };

        el.appendChild(p);
    });
};
