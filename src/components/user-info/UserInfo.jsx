import { Button } from '@material-ui/core';
import React, { memo } from 'react';

import CopyText from '../copy-text/CopyText';

const UserInfo = () => {
    const {
        id,
        isAuthenticated,
        personId,
        tobitAccessToken,
    } = chayns.env.user;

    if (!isAuthenticated) {
        return (
            <div
                key={id}
                className="chayns-dev__userInfo"
            >
                <p className="center-message">
                    You are not logged in
                </p>
                <div className="btn-wrapper btn-wrapper--padding">
                    <button
                        type="button"
                        className="button"
                        onClick={() => chayns.login()}
                    >
                        Login
                    </button>
                </div>
            </div>
        );
    }


    return (
        <div
            key={id}
            className="chayns-dev__userInfo"
        >
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

export default memo(UserInfo);
