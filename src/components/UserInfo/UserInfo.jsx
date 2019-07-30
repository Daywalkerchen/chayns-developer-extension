import React, { Fragment } from 'react';
import CopyText from '../CopyText/CopyText';

export default () => {
    const {
        id,
        personId,
        tobitAccessToken,
        isAuthenticated
    } = chayns.env.user;
    return (
        <div
            key={id}
            className="chaynsDev__userInfo"
        >
            <h2 className="chayns__background-color">
                Your Info
            </h2>
            {isAuthenticated ? (
                <Fragment>
                    <div className="flexSplit">
                        <div className="flexSplit__left">
                            <p>UserId</p>
                        </div>
                        <div className="flexSplit__right">
                            <CopyText content={id}/>
                        </div>
                    </div>
                    <div className="flexSplit">
                        <div className="flexSplit__left">
                            <p>PersonId</p>
                        </div>
                        <div className="flexSplit__right">
                            <CopyText content={personId}/>
                        </div>
                    </div>
                    <div className="flexSplit">
                        <div className="flexSplit__left">
                            <p>AccessToken</p>
                        </div>
                        <div className="flexSplit__right">
                            <CopyText content={tobitAccessToken}/>
                        </div>
                    </div>
                    <div className="btnWrapper">
                        <button
                            type="button"
                            className="button"
                            onClick={() => chayns.logout()}
                        >
                            Logout
                        </button>
                    </div>
                </Fragment>
            ) : (
                <Fragment>
                    <p className="centerMsg">
                        You are not logged in
                    </p>
                    <div className="btnWrapper">
                        <button
                            type="button"
                            className="button"
                            onClick={() => chayns.login()}
                        >
                            Login
                        </button>
                    </div>
                </Fragment>
            )}
        </div>
    );
};
