import React, { memo } from 'react';
import LocationFinder from '../../components/location-finder/LocationFinder';
import PersonFinder from '../../components/person-finder/PersonFinder';
import ShopInfo from '../../components/shop-info/ShopInfo';
import SiteInfo from '../../components/site-info/SiteInfo';

import UserInfo from '../../components/user-info/UserInfo';

const UserView = ({ darkMode }) => {
    const {
        showFinder,
        showLocationFinder,
        showShopInfo,
        showSiteInfo,
        showUserInfo,
    } = window.chaynsDevSettings;

    return (
        <div className="chayns-dev__modules">
            {showUserInfo && <UserInfo/>}
            {showSiteInfo && <SiteInfo/>}
            {showShopInfo && <ShopInfo/>}
            {showFinder && <PersonFinder darkMode={darkMode}/>}
            {showLocationFinder && <LocationFinder darkMode={darkMode}/>}
        </div>
    );
};

export default memo(UserView);
