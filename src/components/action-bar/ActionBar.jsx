import React, { memo } from 'react';

import {
    FaCog,
    FaMoon,
    FaTimes,
    FaSun
} from 'react-icons/fa';

import './action.bar.scss';

const ActionBar = ({
    darkMode,
    onHide,
    onConfigure,
    onDarkMode
}) => (
    <div className="chayns-dev__actionbar">
        <div className="chayns-dev__actionbar--left">
            <FaTimes
                onClick={onHide}
                className="chayns__color"
            />
        </div>
        <div className="chayns-dev__actionbar--right">
            {darkMode ? (
                <FaSun
                    onClick={onDarkMode}
                    className="chayns__color chayns-dev__actionbar__mode-switch"
                />
            ) : (
                <FaMoon
                    onClick={onDarkMode}
                    className="chayns__color chayns-dev__actionbar__mode-switch"
                />
            )}
            <FaCog
                onClick={onConfigure}
                className="chayns__color"
            />
        </div>
    </div>
);

export default memo(ActionBar);
