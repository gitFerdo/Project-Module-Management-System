import express from "express";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import { Examiner } from '../models/Examiners.js';

const router = express.Router();

router.post( '/ex-signup', async ( req, res ) =>
{
    try
    {
        const { email, password } = req.body;
        const existingExaminer = await Examiner.findOne( { email } );

        if ( existingExaminer )
        {
            return res.status( 400 ).json( { message: "Examiner already exists" } );
        }

        const hashedPassword = await bcrypt.hash( password, 10 );

        const newExaminer = new Examiner( {
            email,
            password: hashedPassword,
        } );

        await newExaminer.save();

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

router.post( '/ex-login', async ( req, res ) =>
{
    try
    {
        const { email, password } = req.body;
        const examiner = await Examiner.findOne( { email } );

        if ( !examiner )
        {
            return res.status( 404 ).json( { message: "Examiner is not registered" } );
        }

        const validPassword = await bcrypt.compare( password, examiner.password );

        if ( !validPassword )
        {
            return res.status( 401 ).json( { message: "Invalid Password" } );
        }

        const token = jwt.sign( {
            email: examiner.email,
            role: examiner.role
        }, process.env.KEY, { expiresIn: '1h' } );

        res.cookie( 'token', token, {
            httpOnly: true,
            maxAge: 360000
        } );

        return res.json( {
            status: true,
            message: "Login Successful",
            role: examiner.role
        } );
    } catch ( error )
    {
        console.error( "Error during login:", error );
        return res.status( 500 ).json( { message: "An error occurred during login" } );
    }
} );

export { router as ExaminerRouter };