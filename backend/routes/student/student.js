import express from "express";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import { Student } from "../../models/student/Student.js";

const router = express.Router();

router.post( '/std-pc-pm-signup', async ( req, res ) =>
{
    try
    {
        const { email, password } = req.body;
        const existingStudent = await Student.findOne( { email } );

        if ( existingStudent )
        {
            return res.status( 400 ).json( { message: "Student already exists" } );
        }

        const hashedPassword = await bcrypt.hash( password, 10 );

        const newStudent = new Student( {
            email,
            password: hashedPassword,
        } );

        await newStudent.save();

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

router.post( '/std-pc-pm-login', async ( req, res ) =>
{
    try
    {
        const { email, password } = req.body;
        const student = await Student.findOne( { email } );

        if ( !student )
        {
            return res.status( 404 ).json( { message: "Student is not registered" } );
        }

        const validPassword = await bcrypt.compare( password, student.password );

        if ( !validPassword )
        {
            return res.status( 401 ).json( { message: "Invalid Password" } );
        }

        const token = jwt.sign( {
            email: student.email,
            role: student.role
        }, process.env.KEY, { expiresIn: '1h' } );

        res.cookie( 'token', token, {
            httpOnly: true,
            maxAge: 360000
        } );

        return res.json( {
            status: true,
            message: "Login Successful",
            role: student.role
        } );
    } catch ( error )
    {
        console.error( "Error during login:", error );
        return res.status( 500 ).json( { message: "An error occurred during login" } );
    }
} );

router.get( '/std-pc-pm-check-login', async ( req, res ) =>
{
    const token = req.cookies.token;

    if ( !token )
    {
        return res.json( { isLoggedIn: false } );
    }

    try
    {
        const decoded = jwt.verify( token, process.env.KEY );
        // If the token is valid, the user is logged in
        return res.json( { isLoggedIn: true } );
    } catch ( error )
    {
        // If the token is invalid or expired, the user is not logged in
        console.error( 'Token verification failed:', error );
        return res.json( { isLoggedIn: false } );
    }
} );

router.post( '/std-pc-pm-logout', async ( req, res ) =>
{
    try
    {
        res.clearCookie( 'token' );

        return res.json( {
            status: true,
            message: "Logout Successfully"
        } );
    } catch ( error )
    {
        console.error( "Error during login:", error );

        return res.status( 500 ).json( {
            message: "An error occurred during logout"
        } );
    }
} );

export { router as StudentRouter };