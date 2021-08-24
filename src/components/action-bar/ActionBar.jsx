import React, { memo } from 'react';
import { FaSlidersH } from 'react-icons/all';

import './action.bar.scss';

const ActionBar = ({
    onConfigure,
    onHide,
}) => (
    <div className="chayns-dev__actionbar">
        <div className="chayns-dev__actionbar--left">
            <i
                onClick={onHide}
                className="fa ts-chayns chayns__color"
                style={{ fontSize: '30px' }}
            />
        </div>
        <div className="chayns-dev__actionbar--right">
            <FaSlidersH
                onClick={onConfigure}
                className="chayns__color"
            />
        </div>
    </div>
);

export default memo(ActionBar);
