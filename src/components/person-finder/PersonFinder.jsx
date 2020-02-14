import React, {
    useState,
    useEffect,
    useRef,
} from 'react';
import CopyText from '../copy-text/CopyText';
import './person-finder.scss';

export default () => {
    const QUERYTYPES = {
        USERID: 'UserId',
        PERSONID: 'PersonId',
        USERNAME: 'Username',
    };
    const [isLoading, setIsLoading] = useState(false);
    const [query, setQuery] = useState('');
    const [queryResult, setQueryResult] = useState({});
    const timeoutId = useRef(0);
    const regUserId = '^[0-9]+$';
    const regPersonId = '^[0-9]{3}-[0-9]{5}$';

    useEffect(() => {
        clearTimeout(timeoutId.current);
        timeoutId.current = setTimeout(async () => {
            const isLoadingTimeout = setTimeout(() => setIsLoading(true), 200);
            const newQueryResult = {};
            const containsUserId = query.match(regUserId);
            const containsPersonId = query.match(regPersonId);

            if (containsUserId || containsPersonId) {
                const queryConfig = {};

                if (containsUserId) {
                    queryConfig.userId = parseInt(query, 10);
                    newQueryResult.type = QUERYTYPES.USERID;
                } else if (containsPersonId) {
                    queryConfig.personId = query;
                    newQueryResult.type = QUERYTYPES.PERSONID;
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

                newQueryResult.type = QUERYTYPES.USERNAME;
                newQueryResult.data = Value;
            }

            setQueryResult(newQueryResult);

            setIsLoading(false);

            clearTimeout(isLoadingTimeout);
        }, 200);
    }, [query]);

    return (
        <div className="chaynsDev__finder">
            <h2 className="chayns__background-color">
                Finder
            </h2>
            <input
                className="input"
                style={{ width: '100%' }}
                placeholder="UserId, PersonId or Username"
                onChange={(e) => setQuery(e.target.value || '')}
            />
            {isLoading
                ? <p className="centerMsg">Loading...</p>
                : (queryResult.data && queryResult.data.length > 0) ? (
                    <div className="finder__entryWrapper">
                        {queryResult.data.map((user) => (
                            <div className="finder__entry chayns__border-color">
                                <div
                                    className="finder__entry__img"
                                    style={{ backgroundImage: `url("https://sub60.tobit.com/u/${user.userId}?size=45")` }}
                                />
                                <div className="finder__entry__info">
                                    <div className="finder__entry__info--name">
                                        <CopyText content={user.name}/>
                                    </div>
                                    <div className="finder__entry__info--ids">
                                        <CopyText content={user.userId}/>
                                        <CopyText content={user.personId}/>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (queryResult.type && (
                    <p id="finder__queryError">
                        No user with
                        {' '}
                        <b>{queryResult.type}</b>
                        {' '}
                        &apos;
                        {query}
                        &apos; found.
                    </p>
                ))}
        </div>
    );
};
