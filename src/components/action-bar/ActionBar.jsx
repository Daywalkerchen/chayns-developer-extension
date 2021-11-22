import React, { memo } from 'react';
import { FaSlidersH } from 'react-icons/all';

import './action.bar.scss';

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
                    style={isDarkMode ? {
                        fontSize: '30px',
                        color: 'white'
                    } : {
                        fontSize: '30px',
                        color: 'black'
                    }}
                />
            </div>
            <div className="chayns-dev__actionbar--right">
                <FaSlidersH onClick={onConfigure}/>
            </div>
        </div>
    );
};

export default memo(ActionBar);
