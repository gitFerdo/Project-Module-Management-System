import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import { StudentRouter } from './routes/student.js';
import { ExaminerRouter } from './routes/examiner.js';
import { SupervisorRouter } from './routes/supervisor.js';
import { CoSupervisorRouter } from './routes/cosupervisor.js';

dotenv.config();

const app = express();
const corsOptions = {
    origin: true,
    credentials: true,
};

app.use( express.json() );
app.use( cookieParser() );
app.use( cors( corsOptions ) );

app.use( '/auth', StudentRouter );
app.use( '/auth', ExaminerRouter );
app.use( '/auth', SupervisorRouter );
app.use( '/auth', CoSupervisorRouter );

// Database connection
mongoose.set( "strictQuery", false );
const connectDB = async () =>
{
    try
    {
        await mongoose.connect( process.env.MONGO_URL );
        console.log( "MongoDB database connected" );
    } catch ( err )
    {
        console.error( "MongoDB database connection failed:", err );
        process.exit( 1 );
    }
};

connectDB();

app.listen( process.env.PORT, () =>
{
    console.log( "Server is running on port " + process.env.PORT );
} );