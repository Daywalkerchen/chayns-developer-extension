import React from 'react';

import UserInfo from './user-info/UserInfo';
import SiteInfo from './site-info/SiteInfo';
import ShopInfo from './shop-info/ShopInfo';
import PersonFinder from './person-finder/PersonFinder';
import LocationFinder from './location-finder/LocationFinder';

export default ({ darkMode }) => {
    const {
        showUserInfo,
        showSiteInfo,
        showShopInfo,
        showFinder,
        showLocationFinder,
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
