import express from "express";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import { Supervisor } from "../models/Supervisor.js";

const router = express.Router();

router.post( '/sup-signup', async ( req, res ) =>
{
    try
    {
        const { email, password } = req.body;
        const existingSupervisor = await Supervisor.findOne( { email } );

        if ( existingSupervisor )
        {
            return res.status( 400 ).json( { message: "Supervisor already exists" } );
        }

        const hashedPassword = await bcrypt.hash( password, 10 );

        const newSupervisor = new Supervisor( {
            email,
            password: hashedPassword,
        } );

        await newSupervisor.save();

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

router.post( '/sup-login', async ( req, res ) =>
{
    try
    {
        const { email, password } = req.body;
        const supervisor = await Supervisor.findOne( { email } );

        if ( !supervisor )
        {
            return res.status( 404 ).json( { message: "Supervisor is not registered" } );
        }

        const validPassword = await bcrypt.compare( password, supervisor.password );

        if ( !validPassword )
        {
            return res.status( 401 ).json( { message: "Invalid Password" } );
        }

        const token = jwt.sign( {
            email: supervisor.email,
            role: supervisor.role
        }, process.env.KEY, { expiresIn: '1h' } );

        res.cookie( 'token', token, {
            httpOnly: true,
            maxAge: 360000
        } );

        return res.json( {
            status: true,
            message: "Login Successful",
            role: supervisor.role
        } );
    } catch ( error )
    {
        console.error( "Error during login:", error );
        return res.status( 500 ).json( { message: "An error occurred during login" } );
    }
} );

export { router as SupervisorRouter };