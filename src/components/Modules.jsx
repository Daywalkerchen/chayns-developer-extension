import React from 'react';
import UserInfo from './UserInfo/UserInfo';
import SiteInfo from './SiteInfo/SiteInfo';
import ShopInfo from './ShopInfo/ShopInfo';
import Finder from './Finder/Finder';

export default () => {
    const {
        showUserInfo,
        showSiteInfo,
        showShopInfo,
        showFinder
    } = window.chaynsDevSettings;
    return (
        <div className="chaynsDev__modules">
            {showUserInfo && <UserInfo/>}
            {showSiteInfo && <SiteInfo/>}
            {showShopInfo && <ShopInfo/>}
            {showFinder && <Finder/>}
        </div>
    );
};
