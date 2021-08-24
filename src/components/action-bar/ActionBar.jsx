import React, { memo } from 'react';

import {
    FaCog,
    FaBars,
    FaMoon,
    FaSun
} from 'react-icons/fa';

import './action.bar.scss';

const ActionBar = ({
    darkMode,
    onConfigure,
    onDarkMode,
    onHide,
}) => (
    <div className="chayns-dev__actionbar">
        <div className="chayns-dev__actionbar--left">
            <i
                onClick={onHide}
                className="fa ts-chayns chayns__color"
                style={{ fontSize: '30px' }}
            >
                
            </i>
        </div>
        <div className="chayns-dev__actionbar--right">
            {/*{darkMode ? (*/}
            {/*    <FaSun*/}
            {/*        onClick={onDarkMode}*/}
            {/*        className="chayns__color chayns-dev__actionbar__mode-switch"*/}
            {/*    />*/}
            {/*) : (*/}
            {/*    <FaMoon*/}
            {/*        onClick={onDarkMode}*/}
            {/*        className="chayns__color chayns-dev__actionbar__mode-switch"*/}
            {/*    />*/}
            {/*)}*/}
            <FaBars
                onClick={onConfigure}
                className="chayns__color"
            />
        </div>
    </div>
);

export default memo(ActionBar);
