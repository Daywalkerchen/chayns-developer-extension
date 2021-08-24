import React from 'react';
import ReactDOM from 'react-dom';

import App from './views/App';
import inject from './injections/injector';

if (window.chayns) {
    (async () => {
        try {
            await chayns.ready;

            inject();

            const injectionRoot = document.createElement('div');

            injectionRoot.className = 'chayns-dev-injection-root';

            document.body.appendChild(injectionRoot);

            ReactDOM.render(<App/>, injectionRoot);
        } catch (err) {
            console.error('Plugin injection aborted. No chayns-Environment found', err);
        }
    })();
}
