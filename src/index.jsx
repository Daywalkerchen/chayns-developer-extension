import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import copyToClipBoard from './utils/copyToClipboard';

if (window.chayns) {
    chayns.ready
        .then(() => {
            const injectionRoot = document.createElement('div');
            injectionRoot.className = 'chaynsDev-injectionRoot';
            document.body.appendChild(injectionRoot);
            ReactDOM.render(<App />, injectionRoot);
        })
        .catch((e) => {
            console.error('Plugin injection aborted. No chayns-Environment found', e);
        });

    const {
        autoMute,
        showTappBadges,
        removeBGVideo
    } = window.chaynsDevSettings;

    // Auto-Mute Site-Sounds
    if (autoMute) {
        document.querySelectorAll('audio').forEach(el => el.pause());
        const iconWrapper = document.querySelector('#BackgroundSoundPlayerWrapper');
        if (iconWrapper) {
            Array.from(iconWrapper.children).forEach((el) => {
                if (el.classList.contains('audioplayer-mute')) {
                    el.classList.add('hidden');
                }
                if (el.classList.contains('audioplayer-play')) {
                    el.classList.remove('hidden');
                }
            });
        }
    }

    // Display TappId Inline
    if (showTappBadges) {
        const navElements = document.querySelector('.NavigationCustomTapps')
            .querySelectorAll('.nav-item');
        Array.from(navElements).forEach((el) => {
            /* eslint-disable no-param-reassign */
            el.style.position = 'relative';
            el.style.paddingRight = '55px';
            const tappId = Array.from(el.attributes)
                .find(atr => atr.nodeName === 'data-tappid').nodeValue;
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
            p.onclick = (e) => {
                e.stopPropagation();
                e.preventDefault();
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
    }

    // Remove background-video of site
    if (removeBGVideo) {
        const video = document.getElementById('bgVid');
        if (video) {
            video.parentNode.removeChild(video);
        }
    }

    // Append Tapps-Tapp for quick navigation
    const tappsTapp = Array.from(document.querySelectorAll('.AjaxLink'))
        .find(link => link.href.includes('Admin/Tapps'));
    const findRootRecursive = (elem) => {
      if (elem) {
          if (elem.classList.contains('group-block')) {
              elem.appendChild(tappsTapp);
          } else {
              findRootRecursive(elem.parentNode);
          }
      }
    };
    findRootRecursive(tappsTapp);
}
