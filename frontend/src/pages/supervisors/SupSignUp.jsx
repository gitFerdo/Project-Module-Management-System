import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/supervisor/SupSignUp.css';

function SupSignUp ()
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
            const response = await axios.post( 'http://localhost:3000/auth/sup-signup', {
                email,
                password,
            } );

            if ( response.data.status )
            {
                navigate( '/sup-login' );
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
        <div className='sup-sign-up-container'>
            <form
                className='sup-sign-up-from'
                onSubmit={ handleSubmit }
            >
                <div className='sup-sign-up-form-inner'>
                    <h2 className='main-heading'>
                        <span className='heading-blue'>Supervisor Sign</span> <span className='heading-orange'>Up</span>
                    </h2>

                    <p className='sub-heading'>to get access to your account</p>

                    <label className='sup-sign-up-label' htmlFor='email'>Email</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='Email'
                        value={ email }
                        onChange={ ( e ) => setEmail( e.target.value ) }
                        required
                    />

                    <label className='sup-sign-up-label' htmlFor='password'>Password</label>
                    <div className='sup-sign-up-password-input'>
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
                            className='sup-sign-up-eye-icon'
                            onClick={ togglePasswordVisibility }
                        >
                            <FontAwesomeIcon
                                style={ { color: '#949494' } }
                                icon={ showPassword ? faEyeSlash : faEye }
                            />
                        </button>
                    </div>

                    <label className='sup-sign-up-label' htmlFor='re-password'>Re-enter Password</label>
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
                        <p className='sup-sign-up-password-error-alert'>Passwords do not match</p>
                    }

                    <p className='forget-password'>Forgot Password ?</p>

                    <Link to={ '/sup-login' }><p className='forget-password'>Sign In</p></Link>

                    <button className='sup-sign-up-button' type='submit'>Sign Up</button>
                </div>
            </form>
        </div>
    );
}

export default SupSignUp