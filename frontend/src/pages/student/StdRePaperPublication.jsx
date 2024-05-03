import React, { useState } from 'react'
import StdHeader from '../../components/student/header/StdHeader';
import '../../styles/student/StdRePaperPublication.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function StdRePaperPublication ()
{
    const navigate = useNavigate();

    // Adjust the state to include separate fields for each student role
    const [ publicationData, setPublicationData ] = useState( {
        title: '',
        students: {
            leader: '',
            member1: '',
            member2: '',
            member3: '',
        },
        supervisor: '',
        cosupervisor: '',
        confJournal: '',
        issn: '',
        rankLinks: '',
        scopusLink: '',
        acceptLetter: null,
        reviewSheet: null,
        registerConfirm: null,
        registerFeePaid: null,
    } );

    const handleChange = ( e ) =>
    {
        const { name, value, files, type } = e.target;
        if ( name.includes( 'students.' ) )
        {
            const field = name.split( '.' )[ 1 ];
            setPublicationData( prevState => ( {
                ...prevState,
                students: {
                    ...prevState.students,
                    [ field ]: value,
                },
            } ) );
        } else if ( type === 'file' )
        {
            setPublicationData( prevState => ( {
                ...prevState,
                [ name ]: files[ 0 ],
            } ) );
        } else
        {
            setPublicationData( prevState => ( {
                ...prevState,
                [ name ]: value,
            } ) );
        }
    };

    const handleSubmit = ( e ) =>
    {
        e.preventDefault();

        const formData = new FormData();
        formData.append( 'title', publicationData.title );
        formData.append( 'supervisor', publicationData.supervisor );
        formData.append( 'cosupervisor', publicationData.cosupervisor );
        formData.append( 'confJournal', publicationData.confJournal );
        formData.append( 'issn', publicationData.issn );
        formData.append( 'rankLinks', publicationData.rankLinks );
        formData.append( 'scopusLink', publicationData.scopusLink );
        formData.append( 'acceptLetter', publicationData.acceptLetter );
        formData.append( 'reviewSheet', publicationData.reviewSheet );
        formData.append( 'registerConfirm', publicationData.registerConfirm );
        formData.append( 'registerFeePaid', publicationData.registerFeePaid );

        // Append students' data
        const studentsData = {
            leader: publicationData.students.leader,
            member1: publicationData.students.member1,
            member2: publicationData.students.member2,
            member3: publicationData.students.member3
        };
        formData.append( 'students', JSON.stringify( studentsData ) );

        axios.post( 'http://localhost:3000/auth/publication', formData )
            .then( response =>
            {
                if ( response.data.status === 'Research paper publication submitted successfully' )
                {
                    console.log( response.data.status );
                    navigate( '/std-home' );
                } else
                {
                    console.log( response.data.status );
                    alert( 'Failed to submit research paper publication' );
                }
            } )
            .catch( err =>
            {
                console.error( err );
                alert( 'An error occurred while submitting. Failed to submit research paper publication' );
            } );
    };

    return (
        <div className='std-grp-reg-container'>
            <StdHeader />

            <div className='std-grp-reg-container-inner'>
                <form
                    className='std-grp-reg-from'
                    onSubmit={ handleSubmit }
                >
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
                                        value={ publicationData.title }
                                        onChange={ handleChange }
                                        required
                                    />
                                </div>

                                <div className='std-grp-reg-form-field'>
                                    <label className='std-grp-reg-form-label' htmlFor='students.leader'>Students  :</label>

                                    <select
                                        className='std-grp-reg-from-select-student'
                                        name='students.leader'
                                        value={ publicationData.students.leader }
                                        onChange={ handleChange }
                                        required
                                    >
                                        <option>Leader</option>
                                        <option>Leader 1</option>
                                        <option>Leader 2</option>
                                        <option>Leader 3</option>
                                    </select>

                                    <label htmlFor='students.member1'></label>
                                    <select
                                        className='std-grp-reg-from-select-student'
                                        name='students.member1'
                                        value={ publicationData.students.member1 }
                                        onChange={ handleChange }
                                        required
                                    >
                                        <option>Member 01</option>
                                        <option>Member</option>
                                        <option>Member</option>
                                        <option>Member</option>
                                    </select>

                                    <label htmlFor='students.member2'></label>
                                    <select
                                        className='std-grp-reg-from-select-student'
                                        name='students.member2'
                                        value={ publicationData.students.member2 }
                                        onChange={ handleChange }
                                        required
                                    >
                                        <option>Member 02</option>
                                        <option>Member</option>
                                        <option>Member</option>
                                        <option>Member</option>
                                    </select>

                                    <label htmlFor='students.member3'></label>
                                    <select
                                        className='std-grp-reg-from-select-student'
                                        name='students.member3'
                                        value={ publicationData.students.member3 }
                                        onChange={ handleChange }
                                        required
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
                                        value={ publicationData.supervisor }
                                        onChange={ handleChange }
                                        required
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
                                        value={ publicationData.cosupervisor }
                                        onChange={ handleChange }
                                        required
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
                                        value={ publicationData.confJournal }
                                        onChange={ handleChange }
                                        required
                                    />
                                </div>

                                <div className='std-grp-reg-form-field'>
                                    <label className='std-grp-reg-form-label' htmlFor='issn'>ISSN number of the Journal  :</label>

                                    <input
                                        className='std-grp-reg-from-input'
                                        type='text'
                                        name='issn'
                                        value={ publicationData.issn }
                                        onChange={ handleChange }
                                        required
                                    />
                                </div>

                                <div className='std-grp-reg-form-field'>
                                    <label className='std-grp-reg-form-label' htmlFor='rankLinks'>Google Scholar or Scimago Journal ranking links  :</label>

                                    <input
                                        className='std-grp-reg-from-input'
                                        type='url'
                                        name='rankLinks'
                                        value={ publicationData.rankLinks }
                                        onChange={ handleChange }
                                        required
                                    />
                                </div>

                                <div className='std-grp-reg-form-field'>
                                    <label className='std-grp-reg-form-label' htmlFor='scopusLink'>Scopus Link  :</label>

                                    <input
                                        className='std-grp-reg-from-input'
                                        type='url'
                                        name='scopusLink'
                                        value={ publicationData.scopusLink }
                                        onChange={ handleChange }
                                        required
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
                                    name='acceptLetter'
                                    onChange={ handleChange }
                                />
                            </div>

                            <div className='std-grp-reg-form-field'>
                                <label className='std-grp-reg-form-label' htmlFor='reviewSheet'>Photo of the reviewer sheet from Conference or Journal (optional)  :</label>

                                <input
                                    className='std-grp-reg-from-input'
                                    type="file"
                                    name='reviewSheet'
                                    onChange={ handleChange }
                                />
                            </div>

                            <div className='std-grp-reg-form-field'>
                                <label className='std-grp-reg-form-label' htmlFor='registerConfirm'>Photo confirming registration at the Conference or Journal  :</label>

                                <input
                                    className='std-grp-reg-from-input'
                                    type="file"
                                    name='registerConfirm'
                                    onChange={ handleChange }
                                    required
                                />
                            </div>

                            <div className='std-grp-reg-form-field'>
                                <label className='std-grp-reg-form-label' htmlFor='registerFeePaid'>Registration fee paid for the Conference or Journal  :</label>

                                <input
                                    className='std-grp-reg-from-input'
                                    type="file"
                                    name='registerFeePaid'
                                    onChange={ handleChange }
                                    required
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