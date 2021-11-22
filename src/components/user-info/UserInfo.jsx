import React, { memo } from 'react';
import UserInfoAuthenticated from './user-info-authenticated/UserInfoAuthenticated';
import UserInfoNonAuthenticated from './user-info-non-authenticated/UserInfoNonAuthenticated';

const UserInfo = () => {
    if (!chayns.env.user.isAuthenticated) {
        return (
            <UserInfoNonAuthenticated/>
        );
    }

    if (chayns.env.user.isAuthenticated) {
        return (
            <UserInfoAuthenticated/>
        );
    }

    return (
        <p>Loading...</p>
    );
};

export default memo(UserInfo);
