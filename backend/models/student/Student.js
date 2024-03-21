import mongoose from 'mongoose';

const StudentSchema = new mongoose.Schema( {
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: 'student'
    }
} );

const StudentModel = mongoose.model( "Student", StudentSchema );

export { StudentModel as Student };