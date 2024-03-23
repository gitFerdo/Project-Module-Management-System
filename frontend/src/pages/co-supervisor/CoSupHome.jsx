import React from 'react'
import CoSupHeader from '../../components/co-supervisors/header/CoSupHeader'
import { Link } from 'react-router-dom'
import '../../styles/co-supervisor/CoSupHome.css';

function CoSupHome ()
{
    return (
        <div className='cosup-home-container'>
            <CoSupHeader />

            <div className='cosup-home-container-inner'>
                <div className='cosup-home-btns'>
                    <button className='cosup-home-btn-gr'>
                        <Link
                            to={ '/cosup-projects' }
                            style={ { textDecoration: 'none' } }
                        >Projects</Link>
                    </button>

                    <button className='cosup-home-btn-rpp'>
                        <Link
                            to={ '/cosup-re-marking' }
                            style={ { textDecoration: 'none' } }
                        >Report Marking</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CoSupHome