import Button from 'chayns-components/lib/react-chayns-button/component/Button';
import React, { memo } from 'react';

import ConfigToggle from '../../components/config-toggle/ConfigToggle';

const SettingsView = () => {
    const generalConfig = [
        {
            key: 'defaultOpened',
            desc: 'Extension Default Opened'
        },
        {
            key: 'autoMute',
            desc: 'Mute Site'
        },
        {
            key: 'removeBGVideo',
            desc: 'Remove Background Video'
        },
        {
            key: 'removeMobileInfo',
            desc: 'Remove Mobile Info'
        },
        {
            key: 'showTappBadges',
            desc: 'Attach TappIds'
        },
        {
            key: 'autoOpenSiteConfig',
            desc: 'DefaultOpened Site Config'
        },
    ];

    const moduleConfig = [
        {
            key: 'showUserInfo',
            desc: 'Your Info'
        },
        {
            key: 'showSiteInfo',
            desc: 'Site Info'
        },
        {
            key: 'showShopInfo',
            desc: 'Shop Info'
        },
        {
            key: 'showUtils',
            desc: 'Utils'
        },
        {
            key: 'showFinder',
            desc: 'Person Finder'
        },
        {
            key: 'showLocationFinder',
            desc: 'Location Finder'
        },
    ];

    const renderConfig = (config) => config.map(({
        desc,
        key
    }) => (
        <ConfigToggle
            configDesc={desc}
            configKey={key}
        />
    ));

    const reload = () => window.location.reload();

    return (
        <div className="chayns-dev__settings">
            <div className="chayns-dev__settings__general">
                <h2>General</h2>
                {renderConfig(generalConfig)}
            </div>
            <div className="chayns-dev__settings__modules">
                <h2>Modules</h2>
                {renderConfig(moduleConfig)}
            </div>
            <div className="btn-wrapper btn-wrapper--padding">
                <Button onClick={reload}>
                    Reload
                </Button>
            </div>
        </div>
    );
};

export default memo(SettingsView);
