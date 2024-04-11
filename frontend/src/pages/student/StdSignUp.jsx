import React, { useState } from 'react';
import axios from 'axios';
import '../../styles/student/StdSignUp.css';
import { Link, useNavigate } from 'react-router-dom';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StdSignUp = () =>
{
    const [ email, setEmail ] = useState( '' );
    const [ password, setPassword ] = useState( '' );
    const [ showPassword, setShowPassword ] = useState( false );
    const [ rePassword, setRePassword ] = useState( '' );
    const [ passwordMatch, setPasswordMatch ] = useState( true );
    const [ passwordVisibilityEnabled, setPasswordVisibilityEnabled ] = useState( false );

    const navigate = useNavigate();

    const handleSubmit = async ( e ) =>
    {
        e.preventDefault();

        try
        {
            const response = await axios.post( 'http://localhost:3000/auth/std-pc-pm-signup', {
                email,
                password,
            } );

            // Check if the response status is 200 (OK)
            if ( response.status === 200 )
            {
                toast.success( 'Successfully signed up! Redirecting to login...', {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    backgroundColor: '#1B6C86',
                    color: '#F8F8F8',
                } );

                setTimeout( () => navigate( '/std-pc-pm-login' ), 5000 );
            } else
            {
                // Handle non-200 status codes
                if ( response.status === 400 && response.data.message === "Student already exists" )
                {
                    toast.error( 'This email is already in use. Please use a different email.', {
                        position: 'top-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    } );
                } else
                {
                    toast.error( 'Register failed. Please try again', {
                        position: 'top-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    } );
                }
            }
        } catch ( error )
        {
            // Handle errors that are not caught by the above logic
            console.error( 'Error while signing up:', error );
            toast.error( 'An unexpected error occurred. Please try again later...', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            } );
        }
    };

    const togglePasswordVisibility = () =>
    {
        setShowPassword( !showPassword );
        setPasswordVisibilityEnabled( true );
    };

    const handleRePasswordFocus = () =>
    {
        if ( passwordVisibilityEnabled )
        {
            setShowPassword( false );
            setPasswordVisibilityEnabled( false );
        }
    };

    const handleRePasswordChange = ( e ) =>
    {
        setRePassword( e.target.value );
        setPasswordMatch( password === e.target.value );
    };

    return (
        <div className='sign-up-container'>
            <form
                className='sign-up-from'
                onSubmit={ handleSubmit }
            >
                <div className='sign-up-form-inner'>
                    <h2 className='main-heading'>
                        <span className='heading-blue'>Sign</span> <span className='heading-orange'>Up</span>
                    </h2>

                    <p className='sub-heading'>to get access to your account</p>

                    <label className='sign-up-label' htmlFor='email'>Email</label>
                    <input
                        className='std-signup-input'
                        type='email'
                        id='email'
                        name='email'
                        placeholder='Email'
                        value={ email }
                        onChange={ ( e ) => setEmail( e.target.value ) }
                        required
                    />

                    <label className='sign-up-label' htmlFor='password'>Password</label>
                    <div className='sign-up-password-input'>
                        <input
                            className='std-signup-input'
                            type={ showPassword ? 'text' : 'password' }
                            id='password'
                            name='password'
                            placeholder='Password'
                            value={ password }
                            onChange={ ( e ) => setPassword( e.target.value ) }
                            required
                        />

                        <button
                            type='button'
                            className='sign-up-eye-icon'
                            onClick={ togglePasswordVisibility }
                        >
                            <FontAwesomeIcon
                                style={ { color: '#949494' } }
                                icon={ showPassword ? faEyeSlash : faEye }
                            />
                        </button>
                    </div>

                    <label className='sign-up-label' htmlFor='re-password'>Re-enter Password</label>
                    <input
                        className='std-signup-input'
                        type='password'
                        id='re-password'
                        name='re-password'
                        placeholder='Re-enter Password'
                        value={ rePassword }
                        onFocus={ handleRePasswordFocus }
                        onChange={ handleRePasswordChange }
                        required
                    />

                    { !passwordMatch && rePassword &&
                        <p className='sign-up-password-error-alert'>Passwords do not match</p>
                    }

                    <p className='forget-password'>Forgot Password ?</p>

                    <Link to={ '/std-pc-pm-login' }><p className='navigate-signn'>Sign In</p></Link>

                    <button className='sign-up-button' type='submit'>Sign Up</button>

                    {/* For popup */ }
                    <ToastContainer />
                </div>
            </form>
        </div>
    );
};

export default StdSignUp;