import React from 'react';

import UserInfo from './user-info/UserInfo';
import SiteInfo from './site-info/SiteInfo';
import Finder from './person-finder/PersonFinder';

export default () => {
    const {
        showUserInfo,
        showSiteInfo,
        showFinder,
    } = window.chaynsDevSettings;

    return (
        <div className="chaynsDev__modules">
            {showUserInfo && <UserInfo/>}
            {showSiteInfo && <SiteInfo/>}
            {showFinder && <Finder/>}
        </div>
    );
};
