import React from 'react';
import useAuth from '../../hooks/useAuth';

const LoginPage = () => {
    const { logInUsingGoogle, user } = useAuth();

    console.log(user);

    return (
        <div className="container my-5 text-center">
            <h1 className="display-2">Log in</h1>
            <button onClick={logInUsingGoogle}>Log in using Google</button>
        </div>
    );
};

export default LoginPage;