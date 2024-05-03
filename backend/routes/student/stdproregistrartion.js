import express from "express";
import { stdProGroup } from "../../models/student/StdProRegistrartion.js";

const router = express.Router();

// Route to register a new project group
router.post( '/std-proGrp-reg', async ( req, res ) =>
{
    try
    {
        const { projectData } = req.body;
        const newProject = await stdProGroup.create( projectData );
        res.status( 201 ).json( { status: 'Project group registered successfully', data: newProject } );
    } catch ( error )
    {
        console.error( 'Error registering group', error.message );
        res.status( 400 ).json( { status: 'Failed to register project group', error: error.message } );
    }
} );

// Route to get a specific project group by ID
router.get( '/std-proGrp-detail/:id', async ( req, res ) =>
{
    try
    {
        const id = req.params.id;
        const project = await stdProGroup.findById( id );

        if ( !project )
        {
            return res.status( 404 ).json( { status: 'Failed', message: 'Project not found' } );
        }

        res.json( { status: 'Success', data: project } );
    } catch ( error )
    {
        console.error( 'Error fetching project', error.message );
        res.status( 500 ).json( { status: 'Failed', error: error.message } );
    }
} );

router.get( '/project-groups', async ( req, res ) =>
{
    try
    {
        const projectGroups = await stdProGroup.find();
        res.status( 200 ).json( { status: 'Success', data: projectGroups } );
    } catch ( error )
    {
        console.error( 'Error fetching project groups', error );
        res.status( 500 ).json( { status: 'Failed', error: error.message } );
    }
} );

export { router as stdProGroupRouter };