import React, { useState } from 'react';
import './config.toggle.scss';

export default ({
    configDesc,
    configKey,
}) => {
    const [currentValue, setCurrentValue] = useState(window.chaynsDevSettings[configKey]);
    const [inputId] = useState(Math.random());

    const handleConfigChange = () => {
        const newValue = !currentValue;

        setCurrentValue(newValue);

        document.dispatchEvent(new CustomEvent(
            'UPDATE_SETTING',
            {
                detail: { [configKey]: newValue },
            },
        ));
    };

    return (
        <div className="configToggle">
            <div className="configToggle__left">
                {configDesc}
            </div>
            <div className="configToggle__right">
                <div className="cc__switch">
                    <input
                        id={inputId}
                        type="checkbox"
                        className="switch"
                        onChange={handleConfigChange}
                        checked={currentValue}
                    />
                    <label htmlFor={inputId}/>
                </div>
            </div>
        </div>
    );
};
