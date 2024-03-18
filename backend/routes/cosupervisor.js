import express from "express";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import { CoSupervisor } from '../models/Co-Supervisor.js';

const router = express.Router();

router.post( '/cosup-signup', async ( req, res ) =>
{
    try
    {
        const { email, password } = req.body;
        const existingCoSupervisor = await CoSupervisor.findOne( { email } );

        if ( existingCoSupervisor )
        {
            return res.status( 400 ).json( { message: "Co-Supervisor already exists" } );
        }

        const hashedPassword = await bcrypt.hash( password, 10 );

        const newCoSupervisor = new CoSupervisor( {
            email,
            password: hashedPassword,
        } );

        await newCoSupervisor.save();

        return res.json( {
            status: true,
            message: "Successfully Registered"
        } );
    } catch ( error )
    {
        console.error( "Error during signup:", error );
        return res.status( 500 ).json( { message: "An error occurred during signup" } );
    }
} );

router.post( '/cosup-login', async ( req, res ) =>
{
    try
    {
        const { email, password } = req.body;
        const cosupervisor = await CoSupervisor.findOne( { email } );

        if ( !cosupervisor )
        {
            return res.status( 404 ).json( { message: "Co-Supervisor is not registered" } );
        }

        const validPassword = await bcrypt.compare( password, cosupervisor.password );

        if ( !validPassword )
        {
            return res.status( 401 ).json( { message: "Invalid Password" } );
        }

        const token = jwt.sign( {
            email: cosupervisor.email,
            role: cosupervisor.role
        }, process.env.KEY, { expiresIn: '1h' } );

        res.cookie( 'token', token, {
            httpOnly: true,
            maxAge: 360000
        } );

        return res.json( {
            status: true,
            message: "Login Successful",
            role: cosupervisor.role
        } );
    } catch ( error )
    {
        console.error( "Error during login:", error );
        return res.status( 500 ).json( { message: "An error occurred during login" } );
    }
} );

export { router as CoSupervisorRouter };