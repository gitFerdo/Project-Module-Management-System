// src/components/ProtectedRoute.js
import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import useIsLoggedIn from '../hooks/useIsLoggedIn';

const ProtectedRoute = ( { children } ) =>
{
    const isLoggedIn = useIsLoggedIn();

    useEffect( () =>
    {
        if ( !isLoggedIn )
        {
            // if the user is not logged in
            toast.error( "Please log in to access this page." );
        }
    }, [ isLoggedIn ] );

    if ( !isLoggedIn )
    {
        // if the user is not logged in
        return null;
    }

    return children;
};

export default ProtectedRoute;