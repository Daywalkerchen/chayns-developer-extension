import React from 'react';

import { FaTimes, FaCog } from 'react-icons/fa';

import './action.bar.scss';

export default ({ onHide, onConfigure }) => (
    <div className="chaynsDev__actionbar">
        <div className="chaynsDev__actionbar--left">
            <FaTimes
                onClick={onHide}
                className="chayns__color"
            />
        </div>
        <div className="chaynsDev__actionbar--right">
            <FaCog
                onClick={onConfigure}
                className="chayns__color"
            />
        </div>
    </div>
);
