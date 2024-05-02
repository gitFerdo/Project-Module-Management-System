import express from "express";
import ResearchPaperPublicationSchema from "../../models/student/ResearchPaperPublicationSchema";

const router = express.Router();

// Route to submit a new research paper publication
router.post( '/publication', async ( req, res ) =>
{
    try
    {
        const { title, students, supervisor, cosupervisor, confJournal, issn, rankLinks, scopusLink, acceptLetter, reviewSheet, registerConfirm, registerFeePaid } = req.body;

        const newPublication = new ResearchPaperPublicationSchema( {
            title,
            students,
            supervisor,
            cosupervisor,
            confJournal,
            issn,
            rankLinks,
            scopusLink,
            acceptLetter,
            reviewSheet,
            registerConfirm,
            registerFeePaid,
        } );

        const savedPublication = await newPublication.save();
        res.status( 201 ).json( { status: 'Research paper publication submitted successfully', data: savedPublication } );
    } catch ( error )
    {
        console.error( 'Error submitting research paper publication', error.message );
        res.status( 400 ).json( { status: 'Failed to submit research paper publication', error: error.message } );
    }
} );

// Route to get a specific research paper publication by ID
router.get( '/publication-detail/:id', async ( req, res ) =>
{
    try
    {
        const id = req.params.id;
        const publication = await ResearchPaperPublication.findById( id );

        if ( !publication )
        {
            return res.status( 404 ).json( { status: 'Failed', message: 'Publication not found' } );
        }

        res.json( { status: 'Success', data: publication } );
    } catch ( error )
    {
        console.error( 'Error fetching publication', error.message );
        res.status( 500 ).json( { status: 'Failed', error: error.message } );
    }
} );

export { router as researchPaperPublicationRouter };