import React from 'react'
import SupHeader from '../../components/supervisors/header/SupHeader'
import { Link } from 'react-router-dom'
import '../../styles/supervisor/SupHome.css';

function SupHome ()
{
    return (
        <div className='sup-home-container'>
            <SupHeader />

            <div className='sup-home-container-inner'>
                <div className='sup-home-btns'>
                    <button className='sup-home-btn-gr'>
                        <Link
                            to={ '/sup-projects' }
                            style={ { textDecoration: 'none' } }
                        >Projects</Link>
                    </button>

                    <button className='sup-home-btn-rpp'>
                        <Link
                            to={ '/sup-re-marking' }
                            style={ { textDecoration: 'none' } }
                        >Report Marking</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SupHome