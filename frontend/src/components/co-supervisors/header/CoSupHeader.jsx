import React from 'react';
import './CoSupHeader.css';
import { useLocation } from 'react-router-dom'

function CoSupHeader ()
{
    const location = useLocation();
    return (
        <div className='cosup-header'>
            <header>
                <div className='upper-header'>
                    <div className='upper-header-title'>SLIIT.LK</div>
                </div>
                <div className='cosup-lower-header'>
                    <nav className='cosup-header-nav'>
                        <ul>
                            <li className={ `cosup-header-li ${ location.pathname === '/cosup-home' ? 'active' : '' }` }>
                                <a href='/cosup-home'>Home</a>
                            </li>

                            <li className={ `cosup-header-li ${ location.pathname === '/cosup-group-reg' ? 'active' : '' }` }>
                                <a href='/cosup-projects'>Projects</a>
                            </li>

                            <li className={ `cosup-header-li ${ location.pathname === '/cosup-re-marking' ? 'active' : '' }` }>
                                <a href='/cosup-re-marking'>Report Marking</a>
                            </li>

                            {/* <li className={ `cosup-header-li ${ location.pathname === '/cosup-marks' ? 'active' : '' }` }>
                                <a href='/cosup-group-reg'>Marks</a>
                            </li> */}

                            <li className='cosup-header-li-login'><a href='/cosup-login'>Login</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default CoSupHeader