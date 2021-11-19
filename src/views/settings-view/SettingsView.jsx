import Button from 'chayns-components/lib/react-chayns-button/component/Button';
import React, { memo } from 'react';

import ConfigToggle from '../../components/config-toggle/ConfigToggle';
import {
    GENERAL_CONFIG,
    MODULE_CONFIG
} from '../../const/config';

const SettingsView = () => {
    const renderConfig = (config) => config.map(({
        desc,
        key,
    }) => (
        <ConfigToggle
            configDesc={desc}
            configKey={key}
        />
    ));

    return (
        <div className="chayns-dev__settings">
            <div className="chayns-dev__settings__general">
                <h2>General</h2>
                {renderConfig(GENERAL_CONFIG)}
            </div>
            <div className="chayns-dev__settings__modules">
                <h2>Modules</h2>
                {renderConfig(MODULE_CONFIG)}
            </div>
            <div className="btn-wrapper btn-wrapper--padding">
                <Button onClick={() => window.location.reload()}>
                    Reload
                </Button>
            </div>
        </div>
    );
};

export default memo(SettingsView);
