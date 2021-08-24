import React from 'react';

import ConfigToggle from '../../components/config-toggle/ConfigToggle';

export default () => {
    const generalConfig = [
        { key: 'defaultOpened', desc: 'DefaultOpened' },
        { key: 'autoMute', desc: 'Mute Site' },
        { key: 'removeBGVideo', desc: 'Remove BackgroundVideo' },
        { key: 'removeMobileInfo', desc: 'Remove MobileInfo' },
        { key: 'showTappBadges', desc: 'Attach TappIds' },
        { key: 'autoOpenSiteConfig', desc: 'DefaultOpened SiteConfig' },
    ];

    const moduleConfig = [
        { key: 'showUserInfo', desc: 'Your Info' },
        { key: 'showSiteInfo', desc: 'Site Info' },
        { key: 'showFinder', desc: 'Person Finder' },
        { key: 'showLocationFinder', desc: 'Location Finder' },
        { key: 'showShopInfo', desc: 'Shop Info' },
    ];

    const renderConfig = (config) => config.map(({ desc, key }) => (
        <ConfigToggle
            configDesc={desc}
            configKey={key}
        />
    ));

    const reload = () => window.location.reload();
    return (
        <div className="chayns-dev__settings">
            <h2 className="chayns__background-color">Configuration</h2>
            <p>
                <b>Notice:</b>
                {' '}
                Changes are active after reloading.
            </p>
            <div className="btn-wrapper">
                <button
                    type="button"
                    className="button"
                    onClick={reload}
                >
                    Reload
                </button>
            </div>
            <h2 className="chayns__background-color">General</h2>
            {renderConfig(generalConfig)}
            <h2 className="chayns__background-color">Modules</h2>
            {renderConfig(moduleConfig)}
        </div>
    );
};
