import React from 'react';

import CopyText from '../copy-text/CopyText';

const SiteInfo = () => {
    const {
        id,
        tapp,
        locationId,
        locationPersonId,
    } = chayns.env.site;

    return (
        <div className="chayns-dev__siteInfo">
            <h2 className="chayns__background-color">
                Site Info
            </h2>
            {id && (
                <div className="flex-split">
                    <div className="flex-split__left">
                        <p>SiteId</p>
                    </div>
                    <div className="flex-split__right">
                        <CopyText content={id}/>
                    </div>
                </div>
            )}
            {locationId && (
                <div className="flex-split">
                    <div className="flex-split__left">
                        <p>LocationId</p>
                    </div>
                    <div className="flex-split__right">
                        <CopyText content={locationId}/>
                    </div>
                </div>
            )}
            {locationPersonId && (
                <div className="flex-split">
                    <div className="flex-split__left">
                        <p>LocationPId</p>
                    </div>
                    <div className="flex-split__right">
                        <CopyText content={locationPersonId}/>
                    </div>
                </div>
            )}
            {tapp.id && (
                <div className="flex-split">
                    <div className="flex-split__left">
                        <p>TappId</p>
                    </div>
                    <div className="flex-split__right">
                        <CopyText content={tapp.id}/>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SiteInfo;
