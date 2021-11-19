import Button from 'chayns-components/lib/react-chayns-button/component/Button';
import React, { memo } from 'react';
import CopyText from '../../copy-text/CopyText';

const UserInfoAuthenticated = () => {
    const {
        id,
        name,
        personId,
        tobitAccessToken,
    } = chayns.env.user;

    return (
        <div
            key={id}
            className="chayns-dev__userInfo"
        >
            <div className="flex-split">
                <div className="flex-split__left">
                    <p>Name</p>
                </div>
                <div className="flex-split__right">
                    <CopyText content={name}/>
                </div>
            </div>
            <div className="flex-split">
                <div className="flex-split__left">
                    <p>UserId</p>
                </div>
                <div className="flex-split__right">
                    <CopyText content={id}/>
                </div>
            </div>
            <div className="flex-split">
                <div className="flex-split__left">
                    <p>PersonId</p>
                </div>
                <div className="flex-split__right">
                    <CopyText content={personId}/>
                </div>
            </div>
            <div className="flex-split">
                <div className="flex-split__left">
                    <p>AccessToken</p>
                </div>
                <div className="flex-split__right">
                    <CopyText content={tobitAccessToken}/>
                </div>
            </div>
            <div className="btn-wrapper btn-wrapper--padding">
                <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={() => chayns.logout()}
                >
                    Logout
                </Button>
            </div>
        </div>
    );
};

UserInfoAuthenticated.displayName = 'UserInfoAuthenticated';

export default memo(UserInfoAuthenticated);
