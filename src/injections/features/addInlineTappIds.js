import copyToClipBoard from '../../utils/copyToClipboard';

const $ = (query, root = document) => Array.from(root.querySelectorAll(query));

const addTappId = (navItem) => {
    if (!navItem) return;

    const hasDevEl = $('.chaynsDev-InlineID', navItem).length > 0;

    const tappIdAtr = Array.from(navItem.attributes).find((atr) => atr.nodeName === 'data-tappid');

    if (!tappIdAtr || hasDevEl) return;

    /* eslint-disable no-param-reassign */
    navItem.style.position = 'relative';
    navItem.style.paddingRight = '55px';

    const tappId = tappIdAtr.nodeValue;

    const p = document.createElement('p');
    p.innerHTML = tappId;
    p.className = 'chaynsDev-InlineID chayns__color--text';
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
        + 'z-index: 2;';
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

    navItem.appendChild(p);
};

const addRecursiveListeners = (root) => {
    if (!root) return;

    const traverse = () => {
        setTimeout(() => {
            $('.cw-item', root).forEach(addTappId);

            $('.tappGroup', root).forEach(addRecursiveListeners);
        }, 200);

        root.removeEventListener('click', traverse);
    };

    root.addEventListener('click', traverse);
};

const addNavButtonListener = (el) => {
    const nextRoot = el || document.querySelector('.cw-nav-button');

    if (nextRoot) {
        nextRoot.addEventListener('click', () => {
            setTimeout(() => addTappIds(document.querySelector('.cw-navigation')), 200);
        });
    }
};

const addTappIds = (root) => {
    if (!root) return;

    let addAfterExclusiveExit = true;
    let addAfterExclusiveEnter = true;

    $('.cw-item', root).forEach((item) => {
        addTappId(item);

        item.addEventListener('click', () => {
            if (addAfterExclusiveExit) {
                setTimeout(addNavListener, 200);

                addAfterExclusiveExit = false;
            }

            if (addAfterExclusiveEnter) {
                setTimeout(addNavButtonListener, 200);

                addAfterExclusiveEnter = false;
            }
        });
    });

    $('.tappGroup', root).forEach(addRecursiveListeners);
};

const addNavListener = () => {
    addTappIds(document.querySelector('.cw-navigation'));
};

export default () => {
    const exclusiveNav = document.querySelector('.cw-nav-button');

    if (exclusiveNav) {
        addNavButtonListener(exclusiveNav);
    } else {
        addNavListener();
    }
};
