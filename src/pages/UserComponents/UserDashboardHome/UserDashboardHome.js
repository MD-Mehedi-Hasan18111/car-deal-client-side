import React from 'react';
import useAuth from '../../../hooks/useAuth';

const UserDashboardHome = () => {

    const { user } = useAuth();

    return (
        <div>
            <div className="text-center mt-5 w-50 mx-auto">
                <h1>Welcome {user?.displayName} to your Dashboard!</h1>
                <p>You Can Explore your data in your dashboard.</p>
            </div>
        </div>
    );
};

export default UserDashboardHome;