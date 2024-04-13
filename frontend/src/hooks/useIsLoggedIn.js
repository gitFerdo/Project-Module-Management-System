import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function useIsLoggedIn ()
{
    const [ isLoggedIn, setIsLoggedIn ] = useState( false );

    useEffect( () =>
    {
        const checkLoggedInStatus = async () =>
        {
            try
            {
                const response = await axios.get( 'http://localhost:3000/auth/std-pc-pm-check-login', {
                    withCredentials: true
                } );

                setIsLoggedIn( response.data.isLoggedIn );
            } catch ( error )
            {
                console.error( 'Error checking login status:', error );
            }
        };

        checkLoggedInStatus();
    }, [] );

    return isLoggedIn;
};