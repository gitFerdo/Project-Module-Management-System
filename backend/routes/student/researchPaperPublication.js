import express from "express";
import multer from "multer";
import path from "path";
import { ResearchPaperPublication } from "../../models/student/ResearchPaperPublicationSchema.js";

// Configure multer storage
const storage = multer.diskStorage( {
    destination: function ( req, file, cb )
    {
        if ( file.fieldname === 'acceptLetter' )
        {
            cb( null, 'uploads/acceptLetter' );
        } else if ( file.fieldname === 'reviewSheet' )
        {
            cb( null, 'uploads/reviewSheet' );
        } else if ( file.fieldname === 'registerConfirm' )
        {
            cb( null, 'uploads/registerConfirm' );
        } else if ( file.fieldname === 'registerFeePaid' )
        {
            cb( null, 'uploads/registerFeePaid' );
        }
    },
    filename: function ( req, file, cb )
    {
        cb( null, file.fieldname + "_" + Date.now() + path.extname( file.originalname ) );
    }
} );

const upload = multer( { storage: storage } );

const router = express.Router();

// Route to submit a new research paper publication
router.post( '/publication', upload.fields( [ {
    name: 'acceptLetter',
    maxCount: 1
}, {
    name: 'reviewSheet',
    maxCount: 1
}, {
    name: 'registerConfirm',
    maxCount: 1
}
    , {
    name: 'registerFeePaid',
    maxCount: 1
}
] ), async ( req, res ) =>
{
    try
    {
        const students = JSON.parse( req.body.students );
        const { title, supervisor, cosupervisor, confJournal, issn, rankLinks, scopusLink } = req.body;
        const { acceptLetter, reviewSheet, registerConfirm, registerFeePaid } = req.files;

        const newPublication = new ResearchPaperPublication( {
            title,
            students,
            supervisor,
            cosupervisor,
            confJournal,
            issn,
            rankLinks,
            scopusLink,
            acceptLetter: acceptLetter ? acceptLetter[ 0 ].path : null,
            reviewSheet: reviewSheet ? reviewSheet[ 0 ].path : null,
            registerConfirm: registerConfirm ? registerConfirm[ 0 ].path : null,
            registerFeePaid: registerFeePaid ? registerFeePaid[ 0 ].path : null,
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