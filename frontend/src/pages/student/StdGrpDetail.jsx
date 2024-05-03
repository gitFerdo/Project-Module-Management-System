import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import StdHeader from '../../components/student/header/StdHeader';
import '../../styles/student/StdGrpDetail.css';

function StdGrpDetail ()
{
    const { id } = useParams();
    const navigate = useNavigate();
    const [ group, setGroup ] = useState( null );

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

    const handleDelete = async () =>
    {
        try
        {
            await axios.delete( `http://localhost:3000/auth/std-proGrp-reg/${ id }` );
            console.log( 'Group deleted successfully' );
            navigate( '/std-home' );
        } catch ( error )
        {
            console.error( 'Failed to delete group', error );
        }
    };

    if ( !group ) return <div>Loading...</div>;

    return (
        <div className='std-grpReg-container'>
            <StdHeader />

            <div className='std-grpReg-container-inner'>
                <div className='std-grpReg-form-container'>
                    <div className='std-grpReg-form'>
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
                                                <p>{ group.leader.name }</p>                                            </td>

                                            { group.members.map( ( member, index ) => (
                                                <td key={ index }>
                                                    <p>{ member.name }</p>
                                                </td>
                                            ) ) }
                                        </tr>

                                        <tr>
                                            <td className='std-grpReg-form-table-body'>
                                                <label className='std-grpReg-form-label' htmlFor='registrationNumber'>Registration Number <span className='colon'>:</span></label>
                                            </td>
                                            <td>
                                                <p>{ group.leader.registrationNumber }</p>
                                            </td>

                                            { group.members.map( ( member, index ) => (
                                                <td key={ index }>
                                                    <p>{ member.registrationNumber }</p>
                                                </td>
                                            ) ) }
                                        </tr>

                                        <tr>
                                            <td className='std-grpReg-form-table-body'>
                                                <label className='std-grpReg-form-label' htmlFor='contactNumber'>Contact Number <span className='colon'>:</span></label>
                                            </td>
                                            <td>
                                                <p>{ group.leader.contactNumber }</p>
                                            </td>

                                            { group.members.map( ( member, index ) => (
                                                <td key={ index }>
                                                    <p>{ member.contactNumber }</p>
                                                </td>
                                            ) ) }
                                        </tr>

                                        <tr>
                                            <td className='std-grpReg-form-table-body'>
                                                <label className='std-grpReg-form-label' htmlFor='email'>Email Address <span className='colon'>:</span></label>
                                            </td>
                                            <td>
                                                <p>{ group.leader.email }</p>
                                            </td>

                                            { group.members.map( ( member, index ) => (
                                                <td key={ index }>
                                                    <p>{ member.email }</p>
                                                </td>
                                            ) ) }
                                        </tr>

                                        <tr>
                                            <td className='std-grpReg-form-table-body'>
                                                <label className='std-grpReg-form-label' htmlFor='batch'>Batch (Regular or June) <span className='colon'>:</span></label>
                                            </td>
                                            <td>
                                                <p>{ group.leader.batch }</p>
                                            </td>

                                            { group.members.map( ( member, index ) => (
                                                <td key={ index }>
                                                    <p>{ member.batch }</p>
                                                </td>
                                            ) ) }
                                        </tr>

                                        <tr>
                                            <td className='std-grpReg-form-table-body'>
                                                <label className='std-grpReg-form-label' htmlFor='specialization'>Specialization <span className='colon'>:</span></label>
                                            </td>
                                            <td>
                                                <p>{ group.leader.specialization }</p>
                                            </td>

                                            { group.members.map( ( member, index ) => (
                                                <td key={ index }>
                                                    <p>{ member.specialization }</p>
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
                                        <p>{ group.project.title }</p>
                                    </div>

                                    <div className='sec2-rearea'>
                                        <label className='std-grpReg-form-label' htmlFor='researchArea'>Research Area :</label>
                                        <p className='std-grpReg-form-label-sub2'>(Machine Learning, Natural Language Processing, Intelligent System or Robotics)</p>
                                        <p>{ group.project.researchArea }</p>
                                    </div>

                                    <div className='sec2-sup-select'>
                                        <label className='std-grpReg-form-label' htmlFor='supervisors'>Supervisors :</label>
                                        <p>{ group.project.supervisors }</p>
                                    </div>

                                    <div className='sec2-cosup-select'>
                                        <label className='std-grpReg-form-label' htmlFor='coSupervisors'>Co-Supervisors :</label>
                                        <p>{ group.project.coSupervisors }</p>
                                    </div>
                                </div>
                            </div>

                            <div className='std-grp-detail-btns'>
                                <button className='std-grpReg-form-btn' onClick={ () => navigate( `/edit-group-details/${ id }` ) }>Edit</button>
                                <button className='std-grpReg-form-btn' onClick={ handleDelete }>Delete</button></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default StdGrpDetail