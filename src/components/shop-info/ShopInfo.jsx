import React, {
    useState,
    useEffect,
    Fragment,
} from 'react';
import CopyText from '../copy-text/CopyText';

export default () => {
    const [isLoading, setIsLoading] = useState(true);
    const [shopData, setShopData] = useState(null);

    useEffect(() => {
        window.addEventListener('message', (msg) => {
            if (msg && msg.data && msg.data.data && msg.data.type === 'smartShopInfo') {
                setShopData({
                    branchId: msg.data.data.branchId,
                    shopToken: msg.data.data.accessToken,
                    tappId: chayns.env.site.tapp.id,
                });
            }
        }, false);
    }, []);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            if (window.frames && window.frames.CustomTappIframe) {
                window.frames.CustomTappIframe.postMessage('smartShopInfo', '*');
                if (shopData && shopData.tappId !== chayns.env.site.tapp.id) {
                    setShopData(null);
                }
                setIsLoading(false);
            }
        }, 2000);
    }, [chayns.env.site.tapp.id]);

    return (
        <div className="chaynsDev__shopInfo">
            <h2 className="chayns__background-color">
                Shop Info
            </h2>
            {/* eslint-disable-next-line no-nested-ternary */}
            {isLoading ? (
                <p className="centerMsg">Loading...</p>
            ) : (
                shopData ? (
                    <>
                        <div className="flexSplit">
                            <div className="flexSplit__left">
                                <p>BranchId</p>
                            </div>
                            <div className="flexSplit__right">
                                <CopyText content={shopData.branchId}/>
                            </div>
                        </div>
                        <div className="flexSplit">
                            <div className="flexSplit__left">
                                <p>ShopToken</p>
                            </div>
                            <div className="flexSplit__right">
                                <CopyText content={shopData.shopToken}/>
                            </div>
                        </div>
                    </>
                ) : <p className="centerMsg">No Shop found</p>
            )}
        </div>
    );
};
