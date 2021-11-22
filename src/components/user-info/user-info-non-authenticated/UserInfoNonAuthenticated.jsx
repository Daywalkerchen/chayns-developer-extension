import Button from 'chayns-components/lib/react-chayns-button/component/Button';
import React, { memo } from 'react';

const UserInfoNonAuthenticated = () => (
    <div className="chayns-dev__userInfo">
        <p className="center-message">
            You are not logged in
        </p>
        <div className="btn-wrapper btn-wrapper--padding">
            <Button
                type="button"
                className="button"
                onClick={() => chayns.login()}
            >
                Login
            </Button>
        </div>
    </div>
);

UserInfoNonAuthenticated.displayName = 'UserInfoNonAuthenticated';

export default memo(UserInfoNonAuthenticated);
