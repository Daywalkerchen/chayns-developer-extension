import React, { memo } from 'react';

import { FaTimes, FaCog } from 'react-icons/fa';

import './action.bar.scss';

const ActionBar = ({ onHide, onConfigure }) => (
    <div className="chayns-dev__actionbar">
        <div className="chayns-dev__actionbar--left">
            <FaTimes
                onClick={onHide}
                className="chayns__color"
            />
        </div>
        <div className="chayns-dev__actionbar--right">
            <FaCog
                onClick={onConfigure}
                className="chayns__color"
            />
        </div>
    </div>
);

export default memo(ActionBar);
