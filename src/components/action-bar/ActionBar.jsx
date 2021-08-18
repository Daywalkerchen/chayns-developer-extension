import React, { memo } from 'react';

import {
    FaTimes,
    FaCog,
    FaLightbulb
} from 'react-icons/fa';

import './action.bar.scss';

const ActionBar = ({ onHide, onConfigure, onDarkMode }) => (
    <div className="chayns-dev__actionbar">
        <div className="chayns-dev__actionbar--left">
            <FaTimes
                onClick={onHide}
                className="chayns__color"
            />
        </div>
        <div className="chayns-dev__actionbar--right">
            <FaLightbulb
                onClick={onDarkMode}
                className="chayns__color"
            />
            <FaCog
                onClick={onConfigure}
                className="chayns__color"
            />
        </div>
    </div>
);

export default memo(ActionBar);
