import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import StdHeader from '../../components/student/header/StdHeader';

function StdEditGrpDetails ()
{
    const { id } = useParams();
    const navigate = useNavigate();
    const formRef = useRef( null );

    const [ group, setGroup ] = useState( {
        leader: {},
        members: [],
        project: {}
    } );

    useEffect( () =>
    {
        const fetchGroupDetails = async () =>
        {
            try
            {
                const response = await axios.get( `http://localhost:3000/auth/std-proGrp-detail/${ id }` );
                setGroup( response.data.data );
            } catch ( error )
            {
                console.error( 'Failed to fetch group details', error );
            }
        };

        fetchGroupDetails();
    }, [ id ] );

    const handleSubmit = async ( e ) =>
    {
        e.preventDefault();
        try
        {
            const response = await axios.put( `http://localhost:3000/auth/std-proGrp-reg/${ id }`, group );
            console.log( 'Group updated successfully', response.data );
            navigate( `/group-details/${ id }` );
        } catch ( error )
        {
            console.error( 'Failed to update group', error );
        }
    };

    // Populate form fields with existing data
    useEffect( () =>
    {
        if ( group.leader && group.members.length > 0 && group.project )
        {
            // Update state instead of directly manipulating DOM
            setGroup( prevGroup => ( {
                ...prevGroup,
                leader: { ...prevGroup.leader, name: group.leader.name },
                members: group.members.map( member => ( { ...member, name: member.name } ) ),
                project: { ...group.project, name: group.project.name }
            } ) );
        }
    }, [ group ] );

    // Handlers for form inputs
    const handleInputChange = ( e, index, type ) =>
    {
        const { name, value } = e.target;
        const updatedGroup = { ...group };

        if ( type === 'leader' )
        {
            updatedGroup.leader[ name ] = value;
        } else if ( type === 'members' )
        {
            updatedGroup.members[ index ][ name ] = value;
        } else if ( type === 'project' )
        {
            updatedGroup.project[ name ] = value;
        }

        setGroup( updatedGroup );
    };

    return (
        <div className='std-grpReg-container'>
            <StdHeader />

            <div className='std-grpReg-container-inner'>
                <div className='std-grpReg-form-container'>
                    <form
                        ref={ formRef }
                        onSubmit={ handleSubmit }
                        className='std-grpReg-form'
                    >
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
                                                    value={ group.leader.name }
                                                    onChange={ ( e ) => handleInputChange( e, 0, 'leader' ) }
                                                    required
                                                />
                                            </td>

                                            { group.members.map( ( member, index ) => (
                                                <td key={ index }>
                                                    <input
                                                        className='std-grpReg-form-input'
                                                        type='text'
                                                        name='name'
                                                        value={ member.name }
                                                        onChange={ ( e ) => handleInputChange( e, index, 'members' ) }
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
                                                    value={ group.leader.registrationNumber }
                                                    onChange={ ( e ) => handleInputChange( e, 0, 'leader' ) }
                                                    required
                                                />
                                            </td>

                                            { group.members.map( ( member, index ) => (
                                                <td key={ index }>
                                                    <input
                                                        className='std-grpReg-form-input'
                                                        type='number'
                                                        name='registrationNumber'
                                                        value={ member.registrationNumber }
                                                        onChange={ ( e ) => handleInputChange( e, index, 'members' ) }
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
                                                    type='text'
                                                    minLength='10'
                                                    maxLength='10'
                                                    pattern='[0-9]{10}'
                                                    title='Contact No is not valid.'
                                                    name='contactNumber'
                                                    value={ group.leader.contactNumber }
                                                    onChange={ ( e ) => handleInputChange( e, 0, 'leader' ) }
                                                    required
                                                />
                                            </td>

                                            { group.members.map( ( member, index ) => (
                                                <td key={ index }>
                                                    <input
                                                        className='std-grpReg-form-input'
                                                        type='text'
                                                        minLength='10'
                                                        maxLength='10'
                                                        pattern='[0-9]{10}'
                                                        title='Contact No is not valid.'
                                                        name='contactNumber'
                                                        value={ member.contactNumber }
                                                        onChange={ ( e ) => handleInputChange( e, index, 'members' ) }
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
                                                    value={ group.leader.email }
                                                    onChange={ ( e ) => handleInputChange( e, 0, 'leader' ) }
                                                    required
                                                />
                                            </td>

                                            { group.members.map( ( member, index ) => (
                                                <td key={ index }>
                                                    <input
                                                        className='std-grpReg-form-input'
                                                        type='email'
                                                        name='email'
                                                        value={ member.email }
                                                        onChange={ ( e ) => handleInputChange( e, index, 'members' ) }
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
                                                    value={ group.leader.batch }
                                                    onChange={ ( e ) => handleInputChange( e, 0, 'leader' ) }
                                                    required
                                                />
                                            </td>

                                            { group.members.map( ( member, index ) => (
                                                <td key={ index }>
                                                    <input
                                                        className='std-grpReg-form-input'
                                                        type='text'
                                                        name='batch'
                                                        value={ member.batch }
                                                        onChange={ ( e ) => handleInputChange( e, index, 'members' ) }
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
                                                    value={ group.leader.specialization }
                                                    onChange={ ( e ) => handleInputChange( e, 0, 'leader' ) }
                                                    required
                                                />
                                            </td>

                                            { group.members.map( ( member, index ) => (
                                                <td key={ index }>
                                                    <input
                                                        className='std-grpReg-form-input'
                                                        type='text'
                                                        name='specialization'
                                                        value={ member.specialization }
                                                        onChange={ ( e ) => handleInputChange( e, index, 'members' ) }
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

                                <div className='std-grpReg-form-inner-sec2-inner'>
                                    <div className='sec2-title'>
                                        <label className='std-grpReg-form-label' htmlFor='title'>Project Title :</label>
                                        <input
                                            className='std-grpReg-form-input'
                                            type='text'
                                            name='title'
                                            value={ group.project.title }
                                            onChange={ ( e ) => handleInputChange( e, 0, 'project' ) }
                                            required
                                        />
                                    </div>

                                    <div className='sec2-rearea'>
                                        <label className='std-grpReg-form-label' htmlFor='researchArea'>Research Area :</label>
                                        <p className='std-grpReg-form-label-sub2'>(Machine Learning, Natural Language Processing, Intelligent System or Robotics)</p>
                                        <input
                                            className='std-grpReg-form-input'
                                            type='text'
                                            name='researchArea'
                                            value={ group.project.researchArea }
                                            onChange={ ( e ) => handleInputChange( e, 0, 'project' ) }
                                            required
                                        />
                                    </div>

                                    <div className='sec2-sup-select'>
                                        <label className='std-grpReg-form-label' htmlFor='supervisors'>Supervisors :</label>
                                        <select
                                            className='std-grpReg-form-select-supervisor'
                                            type='text'
                                            name='supervisors'
                                            value={ group.project.supervisors }
                                            onChange={ ( e ) => handleInputChange( e, 0, 'project' ) }
                                            required
                                        >
                                            <option>Select</option>
                                            <option>Supervisor 01</option>
                                            <option>Supervisor 02</option>
                                            <option>Supervisor 03</option>
                                        </select>
                                    </div>

                                    <div className='sec2-cosup-select'>
                                        <label className='std-grpReg-form-label' htmlFor='coSupervisors'>Co-Supervisors :</label>
                                        <select
                                            className='std-grpReg-form-select-cosupervisor'
                                            type='text'
                                            name='coSupervisors'
                                            value={ group.project.coSupervisors }
                                            onChange={ ( e ) => handleInputChange( e, 0, 'project' ) }
                                            required
                                        >
                                            <option>Select</option>
                                            <option>Co-Supervisor 01</option>
                                            <option>Co-Supervisor 02</option>
                                            <option>Co-Supervisor 03</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <button className='std-grpReg-form-btn' type='submit'>Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default StdEditGrpDetails;