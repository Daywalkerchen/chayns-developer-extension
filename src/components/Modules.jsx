import React from 'react';

import UserInfo from './user-info/UserInfo';
import SiteInfo from './site-info/SiteInfo';
import ShopInfo from './shop-info/ShopInfo';
import Finder from './person-finder/PersonFinder';

export default () => {
    const {
        showUserInfo,
        showSiteInfo,
        showShopInfo,
        showFinder,
    } = window.chaynsDevSettings;

    return (
        <div className="chayns-dev__modules">
            {showUserInfo && <UserInfo/>}
            {showSiteInfo && <SiteInfo/>}
            {showShopInfo && <ShopInfo/>}
            {showFinder && <Finder/>}
        </div>
    );
};
