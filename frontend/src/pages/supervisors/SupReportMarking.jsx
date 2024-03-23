import React from 'react'
import SupHeader from '../../components/supervisors/header/SupHeader'
import { Link, useLocation } from 'react-router-dom'
import '../../styles/supervisor/SupReportMarking.css';

function SupReportMarking ()
{
    const location = useLocation();

    return (
        <div className='sup-remarking-container'>
            <SupHeader />

            <div className='main-heading'>
                <span className='heading-blue'>Report</span> <span className='heading-orange'>Marking</span>
            </div>

            <nav className='sup-remarking-speNav'>
                <button className={ `sup-remarking-supNev-btn ${ location.pathname === '/it' ? 'active' : '' }` }>
                    <Link to={ '/it' }>IT</Link>
                </button>

                <button className={ `sup-remarking-supNev-btn ${ location.pathname === '/se' ? 'active' : '' }` }>
                    <Link to={ '/se' }>SE</Link>
                </button>

                <button className={ `sup-remarking-supNev-btn ${ location.pathname === '/is' ? 'active' : '' }` }>
                    <Link to={ '/is' }>IS</Link>
                </button>

                <button className={ `sup-remarking-supNev-btn ${ location.pathname === '/cs' ? 'active' : '' }` }>
                    <Link to={ '/cs' }>CS</Link>
                </button>

                <button className={ `sup-remarking-supNev-btn ${ location.pathname === '/ds' ? 'active' : '' }` }>
                    <Link to={ '/ds' }>DS</Link>
                </button>

                <button className={ `sup-remarking-supNev-btn ${ location.pathname === '/csne' ? 'active' : '' }` }>
                    <Link to={ '/csne' }>CSNE</Link>
                </button>
            </nav>

            <div className='sup-remarking-form'>
                <div className='sup-remarking-form-field'>
                    <label className='sup-remarking-form-label' htmlFor='reportNo'>Report No :</label>
                    <input className='sup-remarking-form-input' type='number' />
                </div>

                <div className='sup-remarking-form-field'>
                    <label className='sup-remarking-form-label' htmlFor='groupNo'>Group No :</label>
                    <input className='sup-remarking-form-input' type='text' />
                </div>

                <div className='sup-remarking-form-field'>
                    <label className='sup-remarking-form-label' htmlFor='location'>Location No :</label>
                    <input className='sup-remarking-form-input' type='text' />
                </div>

                <div className='sup-remarking-form-field'>
                    <label className='sup-remarking-form-label' htmlFor='supervisorName'>Supervisor :</label>
                    <input className='sup-remarking-form-input' type='text' />
                </div>
            </div>

            <div className='div-line'></div>

            <div className='sup-marking-rubric'>
                <div className='main-heading'>
                    <span className='heading-blue'>Marking</span> <span className='heading-orange'>Rubric</span>
                </div>

                <div className='sup-marking-filter-container'>
                    <div className='sup-marking-filter-field-select'>
                        <select className='sup-marking-filter-select-status'>
                            <option value='report1'>Status document 1</option>
                            <option value='report2'>Log book</option>
                            <option value='report3'>Status document 2</option>
                            <option value='report4'>Final thesis</option>
                        </select>
                    </div>

                    <div className='sup-marking-filter-field-name'>
                        <label className='sup-marking-filter-label' htmlFor='status'>Name</label>
                        <input className='sup-marking-filter-input' type='text' />
                    </div>

                    <div className='sup-marking-filter-field-regno'>
                        <label className='sup-marking-filter-label' htmlFor='status'>Reg No</label>
                        <input className='sup-marking-filter-input' type='text' />
                    </div>

                    <div className='sup-marking-filter-field-contactno'>
                        <label className='sup-marking-filter-label' htmlFor='status'>Contact No</label>
                        <input className='sup-marking-filter-input' type='phone' />
                    </div>
                </div>

                <button className='sup-marking-search-btn'>Search</button>

                <div className='sup-marking-rubric-sheet'>
                    <table className='sup-rubric-table'>
                        <thead >
                            <tr>
                                <th>Rubric components</th>
                                <th>Point Scale(1, 2, 3, 4)</th>
                                <th>Student Score</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td><input className='sup-rubric-input' type='text' /></td>
                                <td>
                                    <td><input className='sup-rubric-input' type='text' /></td>
                                    <td><input className='sup-rubric-input' type='text' /></td>
                                    <td><input className='sup-rubric-input' type='text' /></td>
                                    <td><input className='sup-rubric-input' type='text' /></td>
                                </td>
                                <td><input className='sup-rubric-input' type='text' /></td>
                            </tr>

                            <tr>
                                <td><input className='sup-rubric-input' type='text' /></td>
                                <td>
                                    <td><input className='sup-rubric-input' type='text' /></td>
                                    <td><input className='sup-rubric-input' type='text' /></td>
                                    <td><input className='sup-rubric-input' type='text' /></td>
                                    <td><input className='sup-rubric-input' type='text' /></td>
                                </td>
                                <td><input className='sup-rubric-input' type='text' /></td>
                            </tr>

                            <tr>
                                <td><input className='sup-rubric-input' type='text' /></td>
                                <td>
                                    <td><input className='sup-rubric-input' type='text' /></td>
                                    <td><input className='sup-rubric-input' type='text' /></td>
                                    <td><input className='sup-rubric-input' type='text' /></td>
                                    <td><input className='sup-rubric-input' type='text' /></td>
                                </td>
                                <td><input className='sup-rubric-input' type='text' /></td>
                            </tr>

                            <tr>
                                <td><input className='sup-rubric-input' type='text' /></td>
                                <td>
                                    <td><input className='sup-rubric-input' type='text' /></td>
                                    <td><input className='sup-rubric-input' type='text' /></td>
                                    <td><input className='sup-rubric-input' type='text' /></td>
                                    <td><input className='sup-rubric-input' type='text' /></td>
                                </td>
                                <td><input className='sup-rubric-input' type='text' /></td>
                            </tr>
                        </tbody>
                    </table>

                    <button className='sup-marking-submit-btn'>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default SupReportMarking