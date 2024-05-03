import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import StdHeader from '../../components/student/header/StdHeader';

function StdGrpDetail ()
{
    const { id } = useParams();
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

    if ( !group ) return <div>Loading...</div>;
    return (
        <div className='std-grp-detail-container'>
            <StdHeader />

            <div>
                <h2>Group Details</h2>
                <p>Project Title: { group.project.title }</p>
                <p>Research Area: { group.project.researchArea }</p>
                <p>Supervisors: { group.project.supervisors }</p>
                <p>Co-Supervisors: { group.project.coSupervisors }</p>
                <h3>Leader Details</h3>
                <p>Name: { group.leader.name }</p>
                <p>Registration Number: { group.leader.registrationNumber }</p>
                <p>Contact Number: { group.leader.contactNumber }</p>
                <p>Email: { group.leader.email }</p>
                <p>Batch: { group.leader.batch }</p>
                <p>Specialization: { group.leader.specialization }</p>
                <h3>Members</h3>
                { group.members.map( ( member, index ) => (
                    <div key={ index }>
                        <p>Name: { member.name }</p>
                        <p>Registration Number: { member.registrationNumber }</p>
                        <p>Contact Number: { member.contactNumber }</p>
                        <p>Email: { member.email }</p>
                        <p>Batch: { member.batch }</p>
                        <p>Specialization: { member.specialization }</p>
                    </div>
                ) ) }
            </div>
        </div>
    )
}

export default StdGrpDetail