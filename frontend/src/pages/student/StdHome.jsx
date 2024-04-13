import React, { useEffect, useState } from 'react'
import StdHeader from '../../components/student/header/StdHeader'
import { Link } from 'react-router-dom';
import '../../styles/student/StdHome.css';
import axios from 'axios';

function StdHome ()
{
    return (
        <div className='std-home-container'>
            <StdHeader />

            <div className='std-home-container-inner'>
                <div className='std-home-btns'>
                    <button className='std-home-btn-gr'>
                        <Link
                            to={ '/std-group-reg' }
                            style={ { textDecoration: 'none' } }
                        >Group Registration</Link>
                    </button>

                    <button className='std-home-btn-rpp'>
                        <Link
                            to={ '/std-re-pap-pub' }
                            style={ { textDecoration: 'none' } }
                        >Research Paper Publication</Link>
                    </button>

                    <button className='std-home-btn-mark'>
                        <Link
                            to={ '#' }
                            style={ { textDecoration: 'none' } }
                        >Marks</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default StdHome