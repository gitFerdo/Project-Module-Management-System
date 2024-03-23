import React from 'react';
import '../../styles/co-supervisor/CoSupReportMarking.css';
import { Link, useLocation } from 'react-router-dom';
import CoSupHeader from '../../components/co-supervisors/header/CoSupHeader';

function CoSupReportMarking ()
{
    const location = useLocation();

    return (
        <div className='cosup-remarking-container'>
            <CoSupHeader />

            <div className='main-heading'>
                <span className='heading-blue'>Report</span> <span className='heading-orange'>Marking</span>
            </div>

            <nav className='cosup-remarking-speNav'>
                <button className={ `cosup-remarking-cosupNev-btn ${ location.pathname === '/it' ? 'active' : '' }` }>
                    <Link to={ '/it' }>IT</Link>
                </button>

                <button className={ `cosup-remarking-cosupNev-btn ${ location.pathname === '/se' ? 'active' : '' }` }>
                    <Link to={ '/se' }>SE</Link>
                </button>

                <button className={ `cosup-remarking-cosupNev-btn ${ location.pathname === '/is' ? 'active' : '' }` }>
                    <Link to={ '/is' }>IS</Link>
                </button>

                <button className={ `cosup-remarking-cosupNev-btn ${ location.pathname === '/cs' ? 'active' : '' }` }>
                    <Link to={ '/cs' }>CS</Link>
                </button>

                <button className={ `cosup-remarking-cosupNev-btn ${ location.pathname === '/ds' ? 'active' : '' }` }>
                    <Link to={ '/ds' }>DS</Link>
                </button>

                <button className={ `cosup-remarking-cosupNev-btn ${ location.pathname === '/csne' ? 'active' : '' }` }>
                    <Link to={ '/csne' }>CSNE</Link>
                </button>
            </nav>

            <div className='cosup-remarking-form'>
                <div className='cosup-remarking-form-field'>
                    <label className='cosup-remarking-form-label' htmlFor='reportNo'>Report No :</label>
                    <input className='cosup-remarking-form-input' type='number' />
                </div>

                <div className='cosup-remarking-form-field'>
                    <label className='cosup-remarking-form-label' htmlFor='groupNo'>Group No :</label>
                    <input className='cosup-remarking-form-input' type='text' />
                </div>

                <div className='cosup-remarking-form-field'>
                    <label className='cosup-remarking-form-label' htmlFor='location'>Location No :</label>
                    <input className='cosup-remarking-form-input' type='text' />
                </div>

                <div className='cosup-remarking-form-field'>
                    <label className='cosup-remarking-form-label' htmlFor='cosupervisorName'>Co-Supervisor :</label>
                    <input className='cosup-remarking-form-input' type='text' />
                </div>
            </div>

            <div className='div-line'></div>

            <div className='cosup-marking-rubric'>
                <div className='main-heading'>
                    <span className='heading-blue'>Marking</span> <span className='heading-orange'>Rubric</span>
                </div>

                <div className='cosup-marking-filter-container'>
                    <div className='cosup-marking-filter-field-select'>
                        <select className='cosup-marking-filter-select-status'>
                            <option value='report1'>Status document 1</option>
                            <option value='report2'>Log book</option>
                            <option value='report3'>Status document 2</option>
                            <option value='report4'>Final thesis</option>
                        </select>
                    </div>

                    <div className='cosup-marking-filter-field-name'>
                        <label className='cosup-marking-filter-label' htmlFor='status'>Name</label>
                        <input className='cosup-marking-filter-input' type='text' />
                    </div>

                    <div className='cosup-marking-filter-field-regno'>
                        <label className='cosup-marking-filter-label' htmlFor='status'>Reg No</label>
                        <input className='cosup-marking-filter-input' type='text' />
                    </div>

                    <div className='cosup-marking-filter-field-contactno'>
                        <label className='cosup-marking-filter-label' htmlFor='status'>Contact No</label>
                        <input className='cosup-marking-filter-input' type='phone' />
                    </div>
                </div>

                <button className='cosup-marking-search-btn'>Search</button>

                <div className='cosup-marking-rubric-sheet'>
                    <table className='cosup-rubric-table'>
                        <thead >
                            <tr>
                                <th>Rubric components</th>
                                <th>Point Scale(1, 2, 3, 4)</th>
                                <th>Student Score</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td><input className='cosup-rubric-input' type='text' /></td>
                                <td>
                                    <td><input className='cosup-rubric-input' type='text' /></td>
                                    <td><input className='cosup-rubric-input' type='text' /></td>
                                    <td><input className='cosup-rubric-input' type='text' /></td>
                                    <td><input className='cosup-rubric-input' type='text' /></td>
                                </td>
                                <td><input className='cosup-rubric-input' type='text' /></td>
                            </tr>

                            <tr>
                                <td><input className='cosup-rubric-input' type='text' /></td>
                                <td>
                                    <td><input className='cosup-rubric-input' type='text' /></td>
                                    <td><input className='cosup-rubric-input' type='text' /></td>
                                    <td><input className='cosup-rubric-input' type='text' /></td>
                                    <td><input className='cosup-rubric-input' type='text' /></td>
                                </td>
                                <td><input className='cosup-rubric-input' type='text' /></td>
                            </tr>

                            <tr>
                                <td><input className='cosup-rubric-input' type='text' /></td>
                                <td>
                                    <td><input className='cosup-rubric-input' type='text' /></td>
                                    <td><input className='cosup-rubric-input' type='text' /></td>
                                    <td><input className='cosup-rubric-input' type='text' /></td>
                                    <td><input className='cosup-rubric-input' type='text' /></td>
                                </td>
                                <td><input className='cosup-rubric-input' type='text' /></td>
                            </tr>

                            <tr>
                                <td><input className='cosup-rubric-input' type='text' /></td>
                                <td>
                                    <td><input className='cosup-rubric-input' type='text' /></td>
                                    <td><input className='cosup-rubric-input' type='text' /></td>
                                    <td><input className='cosup-rubric-input' type='text' /></td>
                                    <td><input className='cosup-rubric-input' type='text' /></td>
                                </td>
                                <td><input className='cosup-rubric-input' type='text' /></td>
                            </tr>
                        </tbody>
                    </table>

                    <button className='cosup-marking-submit-btn'>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default CoSupReportMarking