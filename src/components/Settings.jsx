import React from 'react';
import ConfigToggle from './ConfigToggle/ConfigToggle';

export default () => {
    const generalConfig = [
        { key: 'defaultOpened', desc: 'DefaultOpened' },
        { key: 'autoMute', desc: 'Mute Site' },
        { key: 'removeBGVideo', desc: 'Remove BackgroundVideo' },
        { key: 'showTappBadges', desc: 'Attach TappIds' },
        { key: 'elevateTappsTapp', desc: 'Elevate TappsTapp' }
    ];

    const moduleConfig = [
        { key: 'showUserInfo', desc: 'Your Info' },
        { key: 'showSiteInfo', desc: 'Site Info' },
        { key: 'showShopInfo', desc: 'Shop Info' },
        { key: 'showLoremIpsum', desc: 'Lorem Ipsum' },
        { key: 'showFinder', desc: 'Finder' }
    ];

    const renderConfig = config => config.map(({ desc, key }) => (
        <ConfigToggle
            configDesc={desc}
            configKey={key}
        />
    ));

    const reload = () => window.location.reload();
    return (
        <div className="chaynsDev__settings">
            <h2 className="chayns__background-color">Configuration</h2>
            <p><b>Notice:</b> Changes are active after reloading.</p>
            <div className="btnWrapper">
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
