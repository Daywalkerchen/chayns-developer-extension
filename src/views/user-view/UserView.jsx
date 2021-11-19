import React, { memo } from 'react';
import LocationFinder from '../../components/location-finder/LocationFinder';
import PersonFinder from '../../components/person-finder/PersonFinder';
import ShopInfo from '../../components/shop-info/ShopInfo';
import SiteInfo from '../../components/site-info/SiteInfo';

import UserInfo from '../../components/user-info/UserInfo';
import Utils from '../../components/utils/Utils';

const UserView = () => {
    const {
        showFinder,
        showLocationFinder,
        showShopInfo,
        showSiteInfo,
        showUserInfo,
        showUtils,
    } = window.chaynsDevSettings;

    return (
        <div className="chayns-dev__modules">
            {showUserInfo && <UserInfo/>}
            {showSiteInfo && <SiteInfo/>}
            {showShopInfo && <ShopInfo/>}
            {showUtils && <Utils/>}
            {showFinder && <PersonFinder/>}
            {showLocationFinder && <LocationFinder/>}
        </div>
    );
};

export default memo(UserView);
