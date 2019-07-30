import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import inject from './injections/injector';

if (window.chayns) {
    chayns.ready
        .then(() => {
            inject();
            const injectionRoot = document.createElement('div');
            injectionRoot.className = 'chaynsDev-injectionRoot';
            document.body.appendChild(injectionRoot);
            ReactDOM.render(<App />, injectionRoot);
        })
        .catch((e) => {
            console.error('Plugin injection aborted. No chayns-Environment found', e);
        });
}
