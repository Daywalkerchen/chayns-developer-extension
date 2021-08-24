import React, {
    useEffect,
    useState,
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
            const frame = document.getElementById(`CustomTappIframe__${chayns.env.site.tapp.id}__${chayns.env.site.id}`) // new versions of chayns will set another id
                || document.getElementById(`CustomTappIframe__${chayns.env.site.tapp.id}`);
            if (frame?.contentWindow) {
                frame.contentWindow.postMessage('smartShopInfo', '*');
                if (shopData && shopData.tappId !== chayns.env.site.tapp.id) {
                    setShopData(null);
                }
                setIsLoading(false);
            }
        }, 2000);
    }, [chayns.env.site.tapp.id]);

    return (
        <div className="chaynsDev__shopInfo">
            <h3>Shop Info</h3>
            {/* eslint-disable-next-line no-nested-ternary */}
            {isLoading ? (
                <p className="centerMsg">Loading...</p>
            ) : (
                shopData ? (
                    <>
                        <div className="flex-split">
                            <div className="flex-split__left">
                                <p>BranchId</p>
                            </div>
                            <div className="flex-split__right">
                                <CopyText content={shopData.branchId}/>
                            </div>
                        </div>
                        <div className="flex-split">
                            <div className="flex-split__left">
                                <p>ShopToken</p>
                            </div>
                            <div className="flex-split__right">
                                <CopyText content={shopData.shopToken}/>
                            </div>
                        </div>
                    </>
                ) : <p className="centerMsg">No Shop found</p>
            )}
        </div>
    );
};
