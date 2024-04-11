import React, { useState, useEffect } from 'react';
import './StdHeader.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function StdHeader ()
{
    const [ isLoggedIn, setIsLoggedIn ] = useState( false );
    const location = useLocation();

    const [ dropdownOpen, setDropdownOpen ] = useState( false );

    const toggleDropdown = () =>
    {
        setDropdownOpen( !dropdownOpen );
    };

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

    const handleLogout = async () =>
    {
        try
        {
            const response = await axios.post( 'http://localhost:3000/auth/std-pc-pm-logout', {}, {
                withCredentials: true
            } );

            if ( response.data.status )
            {
                setIsLoggedIn( false );
            } else
            {
                console.error( 'Logout failed:', response.data.message );
            }
        } catch ( error )
        {
            console.error( 'Error during logout:', error );
        }
    };


    return (
        <div className='std-header'>
            <header>
                <div className='upper-header'>
                    <div className='upper-header-title'>SLIIT.LK</div>
                </div>

                <div className='std-lower-header'>
                    <nav className='std-header-nav'>
                        <ul>
                            <li className={ `std-header-li ${ location.pathname === '/std-home' ? 'active' : '' }` }>
                                <a href='/std-home'>Home</a>
                            </li>

                            <li className={ `std-header-li ${ location.pathname === '/std-group-reg' ? 'active' : '' }` }>
                                <a href='/std-group-reg'>Group Registration</a>
                            </li>

                            <li className={ `std-header-li ${ location.pathname === '/std-re-pap-pub' ? 'active' : '' }` }>
                                <a href='/std-group-reg'>Research Paper Publication</a>
                            </li>

                            <li className={ `std-header-li ${ location.pathname === '/std-marks' ? 'active' : '' }` }>
                                <a href='/std-group-reg'>Marks</a>
                            </li>

                            { isLoggedIn ? (
                                <li className='std-header-li-after-login'>
                                    {/* <button
                                        className='std-header-li-logout'
                                        onClick={ handleLogout }
                                    >
                                        Logout
                                    </button>

                                    <FontAwesomeIcon icon={ faCircleUser } /> */}

                                    <FontAwesomeIcon
                                        className='user-icon'
                                        icon={ faCircleUser }
                                        onClick={ toggleDropdown }

                                    />

                                    {/* Dropdown menu */ }
                                    <div className={ `dropdown-menu ${ dropdownOpen ? 'show' : '' }` }>
                                        <a href="/profile">Profile</a>

                                        <button
                                            className='std-header-li-dropdown'
                                            onClick={ handleLogout }
                                        >
                                            Logout
                                        </button>
                                    </div>
                                </li>
                            ) : (
                                <li className='std-header-li-login'>
                                    <a href='/std-pc-pm-login'>Login</a>
                                </li>
                            ) }
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    );
}

export default StdHeader;