import mongoose from 'mongoose';

const SupervisorSchema = new mongoose.Schema( {
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
        default: 'supervisor'
    }
} );

const SupervisorModel = mongoose.model( "Supervisor", SupervisorSchema );

export { SupervisorModel as Supervisor };