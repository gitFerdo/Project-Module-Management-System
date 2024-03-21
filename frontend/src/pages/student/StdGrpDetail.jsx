// import React, { useEffect, useState } from 'react';
// import StdHeader from '../../components/student/header/StdHeader';
// import { useParams } from 'react-router-dom';

// function StdGrpDetail ()
// {
//     const { id } = useParams();
//     const [ projectData, setProjectData ] = useState( {} );
//     const [ loading, setLoading ] = useState( true );
//     const [ error, setError ] = useState( '' );

//     useEffect( () =>
//     {
//         const fetchProject = async () =>
//         {
//             try
//             {
//                 const response = await fetch( `http://localhost:3000/std-proGrp-detail/${ id }` );
//                 if ( !response.ok )
//                 {
//                     throw new Error( 'Failed to fetch project details' );
//                 }
//                 const data = await response.json();
//                 setProjectData( data.data );
//                 setLoading( false );
//             } catch ( error )
//             {
//                 setError( 'Error fetching project details' );
//                 setLoading( false );
//             }
//         };

//         fetchProject();
//     }, [ id ] );

//     if ( loading )
//     {
//         return <div>Loading...</div>;
//     }

//     if ( error )
//     {
//         return <div>{ error }</div>;
//     }

//     if ( !projectData )
//     {
//         return <div>Project not found</div>;
//     }

//     return (
//         <div className='detail-view-container'>
//             <StdHeader />
//             <h2>Project Details</h2>
//             <div>
//                 <p><strong>Title:</strong> { projectData.title }</p>
//                 <p><strong>Research Area:</strong> { projectData.researchArea }</p>
//                 <p><strong>Supervisors:</strong> { projectData.supervisors }</p>
//                 <p><strong>Co-Supervisors:</strong> { projectData.coSupervisors }</p>
//             </div>
//             <h2>Group Members</h2>
//             <div>
//                 <p><strong>Leader:</strong> { projectData.leader.name }</p>
//                 <ul>
//                     { projectData.members.map( ( member, index ) => (
//                         <li key={ index }>{ member.name }</li>
//                     ) ) }
//                 </ul>
//             </div>
//         </div>
//     );
// }

// export default StdGrpDetail;