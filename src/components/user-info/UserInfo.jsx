import React from 'react';

import CopyText from '../copy-text/CopyText';

const UserInfo = () => {
    const {
        id,
        personId,
        isAuthenticated,
        tobitAccessToken,
    } = chayns.env.user;

    return (
        <div
            key={id}
            className="chayns-dev__userInfo"
        >
            <h2 className="chayns__background-color">
                Your Info
            </h2>
            {isAuthenticated ? (
                <>
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
                    <div className="btn-wrapper">
                        <button
                            type="button"
                            className="button"
                            onClick={() => chayns.logout()}
                        >
                            Logout
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <p className="center-message">
                        You are not logged in
                    </p>
                    <div className="btn-wrapper">
                        <button
                            type="button"
                            className="button"
                            onClick={() => chayns.login()}
                        >
                            Login
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default UserInfo;
