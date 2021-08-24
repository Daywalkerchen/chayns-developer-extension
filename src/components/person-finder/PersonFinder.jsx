import { Grid } from '@material-ui/core';
import React, {
    useEffect,
    useRef,
    useState,
} from 'react';
import CopyText from '../copy-text/CopyText';

import './person-finder.scss';

const QUERY_TYPES = {
    USER_ID: 'UserId',
    PERSON_ID: 'PersonId',
    USERNAME: 'Username',
};

const regUserId = '^[0-9]+$';
const regPersonId = '^[0-9]{3}-[0-9]{5}$';

const PersonFinder = ({ darkMode }) => {
    const timeoutId = useRef(0);

    const [query, setQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [queryResult, setQueryResult] = useState({});

    useEffect(() => {
        clearTimeout(timeoutId.current);

        timeoutId.current = setTimeout(async () => {
            const isLoadingTimeout = setTimeout(() => setIsLoading(true), 200);

            const containsUserId = query.match(regUserId);
            const containsPersonId = query.match(regPersonId);

            const newQueryResult = {};

            if (containsUserId || containsPersonId) {
                const queryConfig = {};

                if (containsUserId) {
                    queryConfig.userId = parseInt(query, 10);
                    newQueryResult.type = QUERY_TYPES.USER_ID;
                } else if (containsPersonId) {
                    queryConfig.personId = query;
                    newQueryResult.type = QUERY_TYPES.PERSONID;
                }

                const user = await chayns.getUser(queryConfig);

                if (user && !user.Error) {
                    const result = {
                        ...queryConfig,
                        name: user.UserFullName,
                    };

                    if (user.UserID && !result.userId) {
                        result.userId = user.UserID;
                    }

                    if (user.PersonID && !result.personId) {
                        result.personId = user.PersonID;
                    }

                    newQueryResult.data = [result];
                }
            } else if (query.trim()) {
                const { Value } = await chayns.findPerson(query);

                newQueryResult.type = QUERY_TYPES.USERNAME;
                newQueryResult.data = Value;
            }

            setQueryResult(newQueryResult);

            setIsLoading(false);

            clearTimeout(isLoadingTimeout);
        }, 200);
    }, [query]);

    return (
        <div className="chayns-dev__finder">
            <h3>Person Finder</h3>
            <input
                autoComplete="off"
                className={darkMode ? 'input input--dark-mode' : 'input input--light-mode'}
                style={{ width: '100%' }}
                placeholder="UserId, PersonId or Username"
                onChange={(e) => setQuery(e.target.value || '')}
            />
            {isLoading
                ? <p className="center-message">Loading...</p>
                : (
                    queryResult.data && queryResult.data.length > 0
                ) ? (
                    <div className="finder__entryWrapper">
                        {queryResult.data.map((user) => (
                            <Grid
                                className="finder__entry chayns__border-color"
                                container
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                                spacing={2}
                            >
                                <Grid
                                    item
                                    xs={3}
                                >
                                    <div
                                        className="finder__entry__img"
                                        style={{ backgroundImage: `url("https://sub60.tobit.com/u/${user.userId}?size=45")` }}
                                    />
                                </Grid>
                                <Grid
                                    item
                                    xs={9}
                                >
                                    <div className="finder__entry__info">
                                        <div className="finder__entry__info--name">
                                            <CopyText content={user.name}/>
                                        </div>
                                        <div className="finder__entry__info--ids">
                                            <CopyText content={user.userId}/>
                                            <CopyText content={user.personId}/>
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                            // <div className="finder__entry chayns__border-color">
                            //     <div
                            //         className="finder__entry__img"
                            //         style={{ backgroundImage: `url("https://sub60.tobit.com/u/${user.userId}?size=45")` }}
                            //     />
                            //     <div className="finder__entry__info">
                            //         <div className="finder__entry__info--name">
                            //             <CopyText content={user.name}/>
                            //         </div>
                            //         <div className="finder__entry__info--ids">
                            //             <CopyText content={user.userId}/>
                            //             <CopyText content={user.personId}/>
                            //         </div>
                            //     </div>
                            // </div>
                        ))}
                    </div>
                ) : (
                    queryResult.type && (
                        <p className="finder__queryError">
                            No user with
                            {' '}
                            <b>{queryResult.type}</b>
                            {' '}
                            &apos;
                            {query}
                            &apos; found.
                        </p>
                    )
                )}
        </div>
    );
};

export default PersonFinder;
