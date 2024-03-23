import React from 'react';
import { useLocation } from 'react-router-dom';
import './SupHeader.css';

function SupHeader ()
{
    const location = useLocation();

    return (
        <div className='sup-header'>
            <header>
                <div className='upper-header'>
                    <div className='upper-header-title'>SLIIT.LK</div>
                </div>
                <div className='sup-lower-header'>
                    <nav className='sup-header-nav'>
                        <ul>
                            <li className={ `sup-header-li ${ location.pathname === '/sup-home' ? 'active' : '' }` }>
                                <a href='/sup-home'>Home</a>
                            </li>

                            <li className={ `sup-header-li ${ location.pathname === '/sup-group-reg' ? 'active' : '' }` }>
                                <a href='/sup-projects'>Projects</a>
                            </li>

                            <li className={ `sup-header-li ${ location.pathname === '/sup-re-marking' ? 'active' : '' }` }>
                                <a href='/sup-re-marking'>Report Marking</a>
                            </li>

                            {/* <li className={ `sup-header-li ${ location.pathname === '/sup-marks' ? 'active' : '' }` }>
                                <a href='/sup-group-reg'>Marks</a>
                            </li> */}

                            <li className='sup-header-li-login'><a href='/sup-login'>Login</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default SupHeader