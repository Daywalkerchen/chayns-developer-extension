import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import V1Injector from './injections/ChaynsWebV1/injector';
import V2Injector from './injections/ChaynsWebV2/injector';

const init = async () => {
    await chayns.ready;

    const injectionRoot = document.createElement('div');
    injectionRoot.className = 'chaynsDev-injectionRoot';
    document.body.appendChild(injectionRoot);
    ReactDOM.render(<App />, injectionRoot);

    if (document.getElementById('cw')) {
        V2Injector();
    } else {
        V1Injector();
    }
};

if (window.chayns) {
    init();
}
