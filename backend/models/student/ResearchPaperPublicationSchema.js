import mongoose from 'mongoose';

const ResearchPaperPublicationSchema = new mongoose.Schema( {
    title: { type: String, required: true },
    students: [
        {
            leader: { type: String, required: false },
            member1: { type: String, required: false },
            member2: { type: String, required: false },
            member3: { type: String, required: false }
        }
    ],
    supervisor: { type: String, required: true },
    cosupervisor: { type: String, required: true },
    confJournal: { type: String, required: true },
    issn: { type: String, required: true },
    rankLinks: { type: String, required: true },
    scopusLink: { type: String, required: true },
    acceptLetter: { type: String, required: false },
    reviewSheet: { type: String, required: false },
    registerConfirm: { type: String, required: true },
    registerFeePaid: { type: String, required: true }
} );

const ResearchPaperPublicationModel = mongoose.model( "ResearchPaperPublication", ResearchPaperPublicationSchema );

export { ResearchPaperPublicationModel as ResearchPaperPublication };
