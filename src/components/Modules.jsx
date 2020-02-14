import React from 'react';

import UserInfo from './user-info/UserInfo';
import SiteInfo from './site-info/SiteInfo';
import LoremIpsum from './lorem-ipsum/LoremIpsum';
import Finder from './person-finder/PersonFinder';

export default () => {
    const {
        showUserInfo,
        showSiteInfo,
        showLoremIpsum,
        showFinder,
    } = window.chaynsDevSettings;

    return (
        <div className="chaynsDev__modules">
            {showUserInfo && <UserInfo/>}
            {showSiteInfo && <SiteInfo/>}
            {showLoremIpsum && <LoremIpsum/>}
            {showFinder && <Finder/>}
        </div>
    );
};
