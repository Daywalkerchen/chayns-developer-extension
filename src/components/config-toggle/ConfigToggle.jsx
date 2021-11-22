import Checkbox from 'chayns-components/lib/react-chayns-checkbox/component/Checkbox';
import React, {
    memo,
    useState
} from 'react';

import './configToggle.scss';

const ConfigToggle = ({
    configDesc,
    configKey,
}) => {
    const [inputId] = useState(Math.random());
    const [currentValue, setCurrentValue] = useState(window.chaynsDevSettings[configKey]);

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
                    <Checkbox
                        checked={currentValue}
                        id={inputId}
                        onChange={handleConfigChange}
                        toggleButton
                    />
                    <label htmlFor={inputId}/>
                </div>
            </div>
        </div>
    );
};

export default memo(ConfigToggle);
