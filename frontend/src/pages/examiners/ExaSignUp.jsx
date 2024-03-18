import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/examiner/ExaSignUp.css';

function ExaSignUp ()
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
            const response = await axios.post( 'http://localhost:3000/auth/ex-signup', {
                email,
                password,
            } );

            if ( response.data.status )
            {
                navigate( '/ex-login' );
            } else
            {
                window.alert( 'Register failed. Please try again' );
            }
        } catch ( error )
        {
            console.error( 'Error while signing up:', error );
            window.alert( 'An error occurred while registering. Please try again later...' );
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
        <div className='ex-sign-container'>
            <form
                className='ex-sign-from'
                onSubmit={ handleSubmit }
            >
                <div className='ex-sign-form-inner'>
                    <h2 className='main-heading'>
                        <span className='heading-blue'>Examiner Sign</span> <span className='heading-orange'>Up</span>
                    </h2>

                    <p className='sub-heading'>to get access to your account</p>

                    <label className='ex-sign-label' htmlFor='email'>Email</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='Email'
                        value={ email }
                        onChange={ ( e ) => setEmail( e.target.value ) }
                        required
                    />

                    <label className='ex-sign-label' htmlFor='password'>Password</label>
                    <div className='ex-sign-password-input'>
                        <input
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
                            className='ex-eye-icon'
                            onClick={ togglePasswordVisibility }
                        >
                            <FontAwesomeIcon
                                style={ { color: '#949494' } }
                                icon={ showPassword ? faEyeSlash : faEye }
                            />
                        </button>
                    </div>

                    <label className='ex-sign-label' htmlFor='re-password'>Re-enter Password</label>
                    <input
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
                        <p className='ex-sign-password-error-alert'>Passwords do not match</p>
                    }

                    <p className='forget-password'>Forgot Password ?</p>

                    <Link to={ '/ex-login' }><p className='forget-password'>Sign In</p></Link>

                    <button className='ex-sign-button' type='submit'>Sign Up</button>
                </div>
            </form>
        </div>
    );
}

export default ExaSignUp