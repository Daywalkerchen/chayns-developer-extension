import React from 'react';

import CopyText from '../copy-text/CopyText';

export default () => {
    const {
        locationId,
        id,
        locationPersonId,
        tapp,
    } = chayns.env.site;

    return (
        <div className="chaynsDev__siteInfo">
            <h2 className="chayns__background-color">
                Site Info
            </h2>
            <div className="flexSplit">
                <div className="flexSplit__left">
                    <p>SiteId</p>
                </div>
                <div className="flexSplit__right">
                    <CopyText content={id}/>
                </div>
            </div>
            <div className="flexSplit">
                <div className="flexSplit__left">
                    <p>LocationId</p>
                </div>
                <div className="flexSplit__right">
                    <CopyText content={locationId}/>
                </div>
            </div>
            <div className="flexSplit">
                <div className="flexSplit__left">
                    <p>LocationPId</p>
                </div>
                <div className="flexSplit__right">
                    <CopyText content={locationPersonId}/>
                </div>
            </div>
            <div className="flexSplit">
                <div className="flexSplit__left">
                    <p>TappId</p>
                </div>
                <div className="flexSplit__right">
                    <CopyText content={tapp.id}/>
                </div>
            </div>
        </div>
    );
};
