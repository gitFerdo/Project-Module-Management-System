import React, { useState } from 'react';
import StdHeader from '../../components/student/header/StdHeader';
import '../../styles/student/StdGrpRegistration.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function StdGrpRegistration ()
{
    const navigate = useNavigate();

    const [ projectData, setProjectData ] = useState( {
        leader: {
            name: '',
            registrationNumber: '',
            contactNumber: '',
            email: '',
            batch: '',
            specialization: ''
        },
        members: [
            { name: '', registrationNumber: '', contactNumber: '', email: '', batch: '', specialization: '' },
            { name: '', registrationNumber: '', contactNumber: '', email: '', batch: '', specialization: '' },
            { name: '', registrationNumber: '', contactNumber: '', email: '', batch: '', specialization: '' }
        ],
        project: {
            title: '',
            researchArea: '',
            supervisors: '',
            coSupervisors: ''
        }
    } );

    const handleSubmit = ( e ) =>
    {
        e.preventDefault();

        axios.post( 'http://localhost:3000/auth/std-proGrp-reg', { projectData: projectData } )
            .then( response =>
            {
                if ( response.data.status === 'Project group registered successfully' )
                {
                    console.log( response.data.status );
                    navigate( '/std-home' );
                } else
                {
                    console.log( response.data.status );
                    alert( 'Failed to register project group' );
                }
            } )
            .catch( err =>
            {
                console.log( err );
                alert( 'An error occurred while registering. Failed to register project group' );
            } );
    };


    const handleLeaderChange = ( e ) =>
    {
        const { name, value } = e.target;
        setProjectData( prevState => ( {
            ...prevState,
            leader: {
                ...prevState.leader,
                [ name ]: value,
            },
        } ) );

        console.log( projectData.leader );
    };

    const handleMemberChange = ( e, index ) =>
    {
        const { name, value } = e.target;
        setProjectData( prevState =>
        {
            const updatedMembers = prevState.members.map( ( member, i ) =>
                i === index ? { ...member, [ name ]: value } : member
            );
            return { ...prevState, members: updatedMembers };
        } );

        console.log( projectData.members );
    };

    const handleProjectChange = ( e ) =>
    {
        const { name, value } = e.target;
        setProjectData( prevState => ( {
            ...prevState,
            project: {
                ...prevState.project,
                [ name ]: value
            }
        } ) );

        console.log( projectData.project );
    };

    return (
        <div className='std-grpReg-container'>
            <StdHeader />

            <div className='std-grpReg-container-inner'>
                <div className='std-grpReg-form-container'>
                    <form onSubmit={ handleSubmit } className='std-grpReg-form'>
                        <div className='std-grpReg-form-inner'>
                            <div className='std-grpReg-form-inner-section1'>
                                <div className='main-heading'>
                                    <span className='heading-orange'>Group</span> <span className='heading-blue'>Registration</span>
                                </div>

                                <table className='std-grpReg-form-table'>
                                    <thead>
                                        <tr>
                                            <th className='std-grpReg-form-table-head-none'></th>
                                            <th className='std-grpReg-form-table-head'>Leader</th>
                                            <th className='std-grpReg-form-table-head'>Member 01</th>
                                            <th className='std-grpReg-form-table-head'>Member 02</th>
                                            <th className='std-grpReg-form-table-head'>Member 03</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td className='std-grpReg-form-table-body'>
                                                <label className='std-grpReg-form-label' htmlFor='name'>Name <span className='colon'>:</span></label>
                                            </td>
                                            <td>
                                                <input
                                                    className='std-grpReg-form-input'
                                                    type='text'
                                                    name='name'
                                                    value={ projectData.leader.name }
                                                    onChange={ handleLeaderChange }
                                                    required
                                                />
                                            </td>

                                            { projectData.members.map( ( member, index ) => (
                                                <td key={ index }>
                                                    <input
                                                        className='std-grpReg-form-input'
                                                        type='text'
                                                        name='name'
                                                        value={ member.name }
                                                        onChange={ ( e ) => handleMemberChange( e, index ) }
                                                        required
                                                    />
                                                </td>
                                            ) ) }
                                        </tr>

                                        <tr>
                                            <td className='std-grpReg-form-table-body'>
                                                <label className='std-grpReg-form-label' htmlFor='registrationNumber'>Registration Number <span className='colon'>:</span></label>
                                            </td>
                                            <td>
                                                <input
                                                    className='std-grpReg-form-input'
                                                    type='number'
                                                    name='registrationNumber'
                                                    value={ projectData.leader.registrationNumber }
                                                    onChange={ handleLeaderChange }
                                                    required
                                                />
                                            </td>

                                            { projectData.members.map( ( member, index ) => (
                                                <td key={ index }>
                                                    <input
                                                        className='std-grpReg-form-input'
                                                        type='number'
                                                        name='registrationNumber'
                                                        value={ member.registrationNumber }
                                                        onChange={ ( e ) => handleMemberChange( e, index ) }
                                                        required
                                                    />
                                                </td>
                                            ) ) }
                                        </tr>

                                        <tr>
                                            <td className='std-grpReg-form-table-body'>
                                                <label className='std-grpReg-form-label' htmlFor='contactNumber'>Contact Number <span className='colon'>:</span></label>
                                            </td>
                                            <td>
                                                <input
                                                    className='std-grpReg-form-input'
                                                    type='number'
                                                    name='contactNumber'
                                                    value={ projectData.leader.contactNumber }
                                                    onChange={ handleLeaderChange }
                                                    required
                                                />
                                            </td>

                                            { projectData.members.map( ( member, index ) => (
                                                <td key={ index }>
                                                    <input
                                                        className='std-grpReg-form-input'
                                                        type='number'
                                                        name='contactNumber'
                                                        value={ member.contactNumber }
                                                        onChange={ ( e ) => handleMemberChange( e, index ) }
                                                        required
                                                    />
                                                </td>
                                            ) ) }
                                        </tr>

                                        <tr>
                                            <td className='std-grpReg-form-table-body'>
                                                <label className='std-grpReg-form-label' htmlFor='email'>Email Address <span className='colon'>:</span></label>
                                            </td>
                                            <td>
                                                <input
                                                    className='std-grpReg-form-input'
                                                    type='email'
                                                    name='email'
                                                    value={ projectData.leader.email }
                                                    onChange={ handleLeaderChange }
                                                    required
                                                />
                                            </td>

                                            { projectData.members.map( ( member, index ) => (
                                                <td key={ index }>
                                                    <input
                                                        className='std-grpReg-form-input'
                                                        type='email'
                                                        name='email'
                                                        value={ member.email }
                                                        onChange={ ( e ) => handleMemberChange( e, index ) }
                                                        required
                                                    />
                                                </td>
                                            ) ) }
                                        </tr>

                                        <tr>
                                            <td className='std-grpReg-form-table-body'>
                                                <label className='std-grpReg-form-label' htmlFor='batch'>Batch (Regular or June) <span className='colon'>:</span></label>
                                            </td>
                                            <td>
                                                <input
                                                    className='std-grpReg-form-input'
                                                    type='text'
                                                    name='batch'
                                                    value={ projectData.leader.batch }
                                                    onChange={ handleLeaderChange }
                                                    required
                                                />
                                            </td>

                                            { projectData.members.map( ( member, index ) => (
                                                <td key={ index }>
                                                    <input
                                                        className='std-grpReg-form-input'
                                                        type='text'
                                                        name='batch'
                                                        value={ member.batch }
                                                        onChange={ ( e ) => handleMemberChange( e, index ) }
                                                        required
                                                    />
                                                </td>
                                            ) ) }
                                        </tr>

                                        <tr>
                                            <td className='std-grpReg-form-table-body'>
                                                <label className='std-grpReg-form-label' htmlFor='specialization'>Specialization <span className='colon'>:</span></label>
                                            </td>
                                            <td>
                                                <input
                                                    className='std-grpReg-form-input'
                                                    type='text'
                                                    name='specialization'
                                                    value={ projectData.leader.specialization }
                                                    onChange={ handleLeaderChange }
                                                    required
                                                />
                                            </td>

                                            { projectData.members.map( ( member, index ) => (
                                                <td key={ index }>
                                                    <input
                                                        className='std-grpReg-form-input'
                                                        type='text'
                                                        name='specialization'
                                                        value={ member.specialization }
                                                        onChange={ ( e ) => handleMemberChange( e, index ) }
                                                        required
                                                    />
                                                </td>
                                            ) ) }
                                        </tr>

                                        <p className='std-grpReg-form-label-sub'>(IT, SE, IS, CS, DS or CSNE)</p>
                                    </tbody>
                                </table>
                            </div>

                            <div className='std-grpReg-form-inner-section2'>
                                <div className='main-heading'>
                                    <span className='heading-blue'>Project Deta</span><span className='heading-orange'>ils</span>
                                </div>

                                <div className='sec2'>
                                    <label className='std-grpReg-form-label' htmlFor='title'>Project Title :</label>
                                    <input
                                        className='std-grpReg-form-input'
                                        type='text'
                                        name='title'
                                        value={ projectData.project.title }
                                        onChange={ handleProjectChange }
                                        required
                                    />
                                </div>

                                <div className='sec2'>
                                    <label className='std-grpReg-form-label' htmlFor='researchArea'>Research Area :</label>
                                    <p className='std-grpReg-form-label-sub2'>(Machine Learning, Natural Language Processing, Intelligent System or Robotics)</p>
                                    <input
                                        className='std-grpReg-form-input'
                                        type='text'
                                        name='researchArea'
                                        value={ projectData.project.researchArea }
                                        onChange={ handleProjectChange }
                                        required
                                    />
                                </div>

                                <div className='sec2'>
                                    <label className='std-grpReg-form-label' htmlFor='supervisors'>Supervisors :</label>
                                    <select
                                        className='std-grpReg-form-select-supervisor'
                                        type='text'
                                        name='supervisors'
                                        value={ projectData.project.supervisors }
                                        onChange={ handleProjectChange }
                                        required
                                    >
                                        <option>Select</option>
                                        <option>Supervisor 01</option>
                                        <option>Supervisor 02</option>
                                        <option>Supervisor 03</option>
                                    </select>
                                </div>

                                <div className='sec2'>
                                    <label className='std-grpReg-form-label' htmlFor='coSupervisors'>Co-Supervisors :</label>
                                    <select
                                        className='std-grpReg-form-select-cosupervisor'
                                        type='text'
                                        name='coSupervisors'
                                        value={ projectData.project.coSupervisors }
                                        onChange={ handleProjectChange }
                                        required
                                    >
                                        <option>Select</option>
                                        <option>Co-Supervisor 01</option>
                                        <option>Co-Supervisor 02</option>
                                        <option>Co-Supervisor 03</option>
                                    </select>
                                </div>
                            </div>

                            <button className='std-grpReg-form-btn' type='submit'>Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default StdGrpRegistration;