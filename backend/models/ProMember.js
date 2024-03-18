import mongoose from 'mongoose';

const proMemberSchema = new mongoose.Schema( {
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
        default: 'proMember'
    }
} );

const proMemberModel = mongoose.model( "proMember", proMemberSchema );

export { proMemberModel as proMember };