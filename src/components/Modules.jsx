import React from 'react';
import UserInfo from './UserInfo/UserInfo';
import SiteInfo from './SiteInfo/SiteInfo';
import ShopInfo from './ShopInfo/ShopInfo';
import LoremIpsum from './LoremIpsum/LoremIpsum';
import Finder from './Finder/Finder';

export default () => {
    const {
        showUserInfo,
        showSiteInfo,
        showShopInfo,
        showLoremIpsum,
        showFinder
    } = window.chaynsDevSettings;
    return (
        <div className="chaynsDev__modules">
            {showUserInfo && <UserInfo/>}
            {showSiteInfo && <SiteInfo/>}
            {showShopInfo && <ShopInfo/>}
            {showLoremIpsum && <LoremIpsum />}
            {showFinder && <Finder/>}
        </div>
    );
};
