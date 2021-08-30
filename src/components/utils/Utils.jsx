import React, { memo } from 'react';

import CopyText from '../copy-text/CopyText';

const Utils = () => {
    const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

    return (
        <div
            key="utils"
            className="chayns-dev__userInfo"
        >
            <h3>Utils</h3>
            <div className="flex-split">
                <div className="flex-split__left">
                    <p>Placeholder</p>
                </div>
                <div className="flex-split__right">
                    <CopyText content={lorem}/>
                </div>
            </div>
        </div>
    );
};

export default memo(Utils);
