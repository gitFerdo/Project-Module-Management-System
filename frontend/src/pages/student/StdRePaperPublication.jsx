import React from 'react'
import StdHeader from '../../components/student/header/StdHeader';
import '../../styles/student/StdRePaperPublication.css';

function StdRePaperPublication ()
{
    return (
        <div className='std-grp-reg-container'>
            <StdHeader />

            <div className='std-grp-reg-container-inner'>
                <form className='std-grp-reg-from'>
                    <div className='std-grp-reg-form-inner'>
                        <div className='main-heading'>
                            <span className='heading-blue'>Research</span>
                            <span className='heading-orange'> Paper</span>
                            <span className='heading-blue'> Publication</span>
                        </div>

                        <div className='std-grp-reg-from-inner-section1'>
                            <div className='std-grp-reg-form-inner-sec1-inner'>
                                <div className='std-grp-reg-form-field'>
                                    <label className='std-grp-reg-form-label' htmlFor='title'>Title of the research paper  :</label>

                                    <input
                                        className='std-grp-reg-from-input'
                                        type='text'
                                        name='title'
                                    />
                                </div>

                                <div className='std-grp-reg-form-field'>
                                    <label className='std-grp-reg-form-label' htmlFor='students'>Students  :</label>

                                    <select
                                        className='std-grp-reg-from-select-student'
                                        name='students'
                                    >
                                        <option>Leader</option>
                                        <option>Leader 1</option>
                                        <option>Leader 2</option>
                                        <option>Leader 3</option>
                                    </select>

                                    <select
                                        className='std-grp-reg-from-select-student'
                                        name='students'
                                    >
                                        <option>Member 01</option>
                                        <option>Member</option>
                                        <option>Member</option>
                                        <option>Member</option>
                                    </select>

                                    <select
                                        className='std-grp-reg-from-select-student'
                                        name='students'
                                    >
                                        <option>Member 02</option>
                                        <option>Member</option>
                                        <option>Member</option>
                                        <option>Member</option>
                                    </select>

                                    <select
                                        className='std-grp-reg-from-select-student'
                                        name='students'
                                    >
                                        <option>Member 03</option>
                                        <option>Member</option>
                                        <option>Member</option>
                                        <option>Member</option>
                                    </select>
                                </div>

                                <div className='std-grp-reg-form-field'>
                                    <label className='std-grp-reg-form-label' htmlFor='supervisor'>Supervisor  :</label>

                                    <select
                                        className='std-grp-reg-from-select-supervisor'
                                        name='supervisor'
                                    >
                                        <option>Supervisor</option>
                                        <option>Supervisor 1</option>
                                        <option>Supervisor 2</option>
                                        <option>Supervisor 3</option>
                                    </select>
                                </div>

                                <div className='std-grp-reg-form-field'>
                                    <label className='std-grp-reg-form-label' htmlFor='cosupervisor'>Co-Supervisor  :</label>

                                    <select
                                        className='std-grp-reg-from-select-cosupervisor'
                                        name='cosupervisor'
                                    >
                                        <option>Co-Supervisor</option>
                                        <option>Co-Supervisor 1</option>
                                        <option>Co-Supervisor 2</option>
                                        <option>Co-Supervisor 3</option>
                                    </select>
                                </div>

                                <div className='std-grp-reg-form-field'>
                                    <label className='std-grp-reg-form-label' htmlFor='confJournal'>Name of the Conference or Journal  :</label>

                                    <input
                                        className='std-grp-reg-from-input'
                                        type='text'
                                        name='confJournal'
                                    />
                                </div>

                                <div className='std-grp-reg-form-field'>
                                    <label className='std-grp-reg-form-label' htmlFor='issn'>ISSN number of the Journal  :</label>

                                    <input
                                        className='std-grp-reg-from-input'
                                        type='text'
                                        name='issn'
                                    />
                                </div>

                                <div className='std-grp-reg-form-field'>
                                    <label className='std-grp-reg-form-label' htmlFor='rankLinks'>Google Scholar or Scimago Journal ranking links  :</label>

                                    <input
                                        className='std-grp-reg-from-input'
                                        type='url'
                                        name='rankLinks'
                                    />
                                </div>

                                <div className='std-grp-reg-form-field'>
                                    <label className='std-grp-reg-form-label' htmlFor='scopusLink'>Scopus Link  :</label>

                                    <input
                                        className='std-grp-reg-from-input'
                                        type='url'
                                        name='scopusLink'
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='std-grp-reg-from-inner-section2'>
                            <div className='std-grp-reg-form-field'>
                                <label className='std-grp-reg-form-label' htmlFor='acceptLetter'>Photo of the acceptance letter from Conference or Journal (optional)  :</label>

                                <input
                                    className='std-grp-reg-from-input'
                                    type="file"
                                    placeholder='Add a Photo'
                                    name='acceptLetter'
                                />
                            </div>

                            <div className='std-grp-reg-form-field'>
                                <label className='std-grp-reg-form-label' htmlFor='reviewSheet'>Photo of the reviewer sheet from Conference or Journal (optional)  :</label>

                                <input
                                    className='std-grp-reg-from-input'
                                    type="file"
                                    placeholder='Add a Photo'
                                    name='reviewSheet'
                                />
                            </div>

                            <div className='std-grp-reg-form-field'>
                                <label className='std-grp-reg-form-label' htmlFor='registerConfirm'>Photo confirming registration at the Conference or Journal  :</label>

                                <input
                                    className='std-grp-reg-from-input'
                                    type="file"
                                    placeholder='Add a Photo'
                                    name='registerConfirm'
                                />
                            </div>

                            <div className='std-grp-reg-form-field'>
                                <label className='std-grp-reg-form-label' htmlFor='registerConfirm'>Registration fee paid for the Conference or Journal  :</label>

                                <input
                                    className='std-grp-reg-from-input'
                                    type="file"
                                    placeholder='Add a Photo'
                                    name='registerConfirm'
                                />
                            </div>
                        </div>

                        <button
                            className='std-grp-reg-form-btn'
                            type='submit'
                        >
                            Publish
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default StdRePaperPublication