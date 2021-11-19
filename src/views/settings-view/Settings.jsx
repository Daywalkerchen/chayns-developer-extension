import { Button } from '@material-ui/core';
import React from 'react';

import ConfigToggle from '../../components/config-toggle/ConfigToggle';

export default () => {
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
            <h3>General</h3>
            {renderConfig(generalConfig)}
            <h3>Modules</h3>
            {renderConfig(moduleConfig)}
            <div className="btn-wrapper btn-wrapper--padding">
                <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={reload}
                >
                    Reload
                </Button>
            </div>
        </div>
    );
};
