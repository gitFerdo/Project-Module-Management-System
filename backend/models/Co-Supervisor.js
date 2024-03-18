import mongoose from 'mongoose';

const CoSupervisorSchema = new mongoose.Schema( {
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
        default: 'cosupervisor'
    }
} );

const CoSupervisorModel = mongoose.model( "CoSupervisor", CoSupervisorSchema );

export { CoSupervisorModel as CoSupervisor };