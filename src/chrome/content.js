// -- Injection funcs --
const injectFile = (fileName) => {
    const script = document.createElement('script');
    script.src = chrome.extension.getURL(fileName);

    (document.head || document.documentElement).appendChild(script);

    script.onload = () => {
        script.parentNode.removeChild(script);
    };
};

const injectFunc = (fn) => {
    const script = document.createElement('script');
    script.text = `(${fn.toString()})();`;

    (document.head || document.documentElement).appendChild(script);

    script.parentNode.removeChild(script);
};
// -- End of injection funcs --

// All configurable plugin-options
const settingKeys = [
    { key: 'defaultOpened', _default: false },
    { key: 'autoMute', _default: false },
    { key: 'removeBGVideo', _default: false },
    { key: 'removeMobileInfo', _default: false },
    { key: 'showTappBadges', _default: false },
    { key: 'autoOpenSiteConfig', _default: true },
    { key: 'dockSize', _default: 0.25 },
    { key: 'isDarkMode', _default: true },
    { key: 'showUserInfo', _default: true },
    { key: 'showSiteInfo', _default: true },
    { key: 'showUtils', _default: false },
    { key: 'showShopInfo', _default: false },
    { key: 'showFinder', _default: true },
    { key: 'showLocationFinder', _default: true },
];

const initializePlugin = () => {
    // Add click-listener for Chrome-Icon
    chrome.runtime.onMessage.addListener((payload) => {
        if (payload.type === 'TOGGLE') {
            injectFunc(() => {
                if (window.chaynsDevToggle) {
                    window.chaynsDevToggle();
                }
            });
        }
    });

    // Add listener for setting changes
    document.addEventListener(
        'UPDATE_SETTING',
        ({ detail }) => {
            chrome.storage.sync.set({ ...detail });
        },
    );

    // Inject current settings to window
    chrome.storage.sync.get(
        settingKeys.map(({ key }) => key),
        (storageConfig) => {
            const pluginConfig = {};

            settingKeys.forEach(({ key, _default }) => {
                pluginConfig[key] = _default;
            });

            Object.keys(storageConfig)
                .forEach((key) => {
                    if (storageConfig[key] !== undefined) {
                        if (key === 'dockSize' && storageConfig[key] < 0.1) {
                            pluginConfig[key] = 0.1;
                        } else {
                            pluginConfig[key] = storageConfig[key];
                        }
                    }
                });

            injectFunc(() => {
                document.addEventListener(
                    'INJECT_WINDOW',
                    ({ detail }) => {
                        window.chaynsDevSettings = detail;
                    },
                );
            });

            document.dispatchEvent(new CustomEvent(
                'INJECT_WINDOW',
                {
                    detail: pluginConfig,
                },
            ));
        },
    );

    // Render Dock to DOM
    injectFile('plugin.js');
};

if (document.documentElement.classList.contains('chayns')) {
    initializePlugin();
}
