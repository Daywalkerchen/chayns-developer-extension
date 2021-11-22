import React, { memo } from 'react';
import { FaSlidersH } from 'react-icons/all';

import './actionBar.scss';

const ActionBar = ({
    onConfigure,
    onHide,
}) => {
    const { isDarkMode } = window.chaynsDevSettings;

    return (
        <div className="chayns-dev__actionbar">
            <div className="chayns-dev__actionbar--left">
                <i
                    onClick={onHide}
                    className="fa ts-chayns"
                    style={isDarkMode ? { color: 'white' } : { color: 'black' }}
                />
            </div>
            <div className="chayns-dev__actionbar--right">
                <FaSlidersH onClick={onConfigure}/>
            </div>
        </div>
    );
};

export default memo(ActionBar);
