import mongoose from "mongoose";

const ResearchPaperPublicationSchema = new mongoose.Schema( {
    title: String,
    students: [ String ],
    supervisor: String,
    cosupervisor: String,
    confJournal: String,
    issn: String,
    rankLinks: String,
    scopusLink: String,
    acceptLetter: String,
    reviewSheet: String,
    registerConfirm: String,
    registerFeePaid: Boolean,
} );

export default mongoose.model( 'ResearchPaperPublication', ResearchPaperPublicationSchema );