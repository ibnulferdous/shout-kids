import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();

    if (isLoading) {
        return <div className="d-flex justify-content-center my-5">
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>;
    }

    return (
        <Route
        {...rest}
        render={({location}) => user ? children : <Redirect
            to={{
                pathname: "/login",
                state: { from: location }
            }}
        >
        </Redirect>
        }
        >
            
        </Route>
    );
};

export default PrivateRoute;