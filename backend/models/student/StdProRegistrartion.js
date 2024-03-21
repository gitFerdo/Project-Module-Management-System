import mongoose from 'mongoose';

const stdProGroupSchema = new mongoose.Schema( {
    leader: {
        name: {
            type: String,
            required: true
        },

        registrationNumber: {
            type: String,
            required: true
        },

        contactNumber: {
            type: String,
            required: true
        },

        email: {
            type: String,
            required: true
        },

        batch: {
            type: String,
            required: true
        },

        specialization: {
            type: String,
            enum: [ 'IT', 'SE', 'IS', 'CS', 'DS', 'CSNE' ],
            required: true
        }
    },

    members: [ {
        name: {
            type: String,
            required: true
        },

        registrationNumber: {
            type: String,
            required: true
        },

        contactNumber: {
            type: String,
            required: true
        },

        email: {
            type: String,
            required: true
        },

        batch: {
            type: String,
            enum: [ 'Regular', 'June' ],
            required: true
        },

        specialization: {
            type: String,
            enum: [ 'IT', 'SE', 'IS', 'CS', 'DS', 'CSNE' ],
            required: true
        }
    } ],

    project: {
        title: {
            type: String,
            required: true
        },

        researchArea: {
            type: String,
            enum: [ 'Machine Learning', 'Natural Language Processing', 'Intelligent Systems', 'Robotics' ],
            required: true
        },

        supervisors: {
            type: String,
            required: true
        },

        coSupervisors: {
            type: String,
            required: true
        },
    },

    role: {
        type: String,
        default: 'student'
    }
} );

const stdProGroupModel = mongoose.model( "StdProGroup", stdProGroupSchema );

export { stdProGroupModel as stdProGroup };