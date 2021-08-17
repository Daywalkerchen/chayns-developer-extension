import React, { memo, useState, useEffect } from 'react';

import { FaExternalLinkAlt } from 'react-icons/all';

import CopyText from '../copy-text/CopyText';

import {
    getLocationInfosByName,
    getLocationInfosBySiteId,
    getLocationInfosByLocationId,
} from './getLocationInfos';

const LocationFinder = () => {
    const [query, setQuery] = useState('');
    const [queryResult, setQueryResult] = useState([]);

    useEffect(() => {
        const timeout = setTimeout(async () => {
            if (query && query.trim()) {
                let nextQueryResult;

                const isLocationId = !isNaN(query);
                const isSiteId = query.match('^\\d{5}-\\d{5}$') !== null;

                if (isLocationId) {
                    nextQueryResult = await getLocationInfosByLocationId(query);
                } else if (isSiteId) {
                    nextQueryResult = await getLocationInfosBySiteId(query);
                } else {
                    nextQueryResult = await getLocationInfosByName(query);
                }

                setQueryResult(nextQueryResult);
            } else {
                setQueryResult([]);
            }
        }, 200);

        return () => clearTimeout(timeout);
    }, [query]);

    return (
        <div className="chayns-dev__finder">
            <h2 className="chayns__background-color">
                Location Finder
            </h2>
            <input
                autoComplete="off"
                className="input"
                style={{ width: '100%' }}
                placeholder="LocationId, SiteId or LocationName"
                onChange={(e) => setQuery(e.target.value || '')}
            />
            <div className="finder__entryWrapper">
                {Array.isArray(queryResult)
                    ? queryResult.map(({ name, locationId, siteId }) => (
                        <div className="finder__entry chayns__border-color">
                            <div
                                className="finder__entry__img"
                                style={{ backgroundImage: `url("https://sub60.tobit.com/l/${locationId}?size=45")` }}
                            />
                            <div className="finder__entry__info">
                                <div className="finder__entry__info--name">
                                    <CopyText content={name}/>
                                </div>
                                <div className="finder__entry__info--ids">
                                    <CopyText content={locationId}/>
                                    <CopyText content={siteId}/>
                                </div>
                            </div>
                            <div className="finder__entry__link">
                                <FaExternalLinkAlt
                                    className="chayns__color"
                                    onClick={() => chayns.openUrlInBrowser(`https://www.chayns.net/${siteId}`)}
                                />
                            </div>
                        </div>
                    ))
                    : <p className="finder__queryError">{`No site for '${query}' found.`}</p>}
            </div>
        </div>
    );
};

export default memo(LocationFinder);
