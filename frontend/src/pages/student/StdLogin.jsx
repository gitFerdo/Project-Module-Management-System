import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../styles/student/StdLogin.css';

const StdLogin = () =>
{
    const [ email, setEmail ] = useState( '' );
    const [ password, setPassword ] = useState( '' );
    const [ showPassword, setShowPassword ] = useState( false );

    const navigate = useNavigate();

    axios.defaults.withCredentials = true;

    const handleSubmit = ( e ) =>
    {
        e.preventDefault();
        axios.post( 'http://localhost:3000/auth/std-pc-pm-login', {
            email,
            password
        } ).then( response =>
        {
            if ( response.data.status )
            {
                if ( response.data.role === 'proCodinator' )
                {
                    navigate( '/proCo-home' );
                } else if ( response.data.role === 'proMember' )
                {
                    navigate( '/proMem-home' )
                } else
                {
                    navigate( '/std-home' );
                }
            } else
            {
                window.alert( 'Incorrect email or password. Please try again.' );
            }

        } ).catch( err =>
        {
            console.log( err );
            window.alert( 'An error occurred while logging in. Please try again later.' );
        } );
    };

    const togglePasswordVisibility = () =>
    {
        setShowPassword( !showPassword );
    };

    return (
        <div className='login-container'>
            <form className='login-from' onSubmit={ handleSubmit }>
                <div className='login-form-inner'>
                    <h2 className='main-heading'>
                        <span className='heading-blue'>Sign</span> <span className='heading-orange'>In</span>
                    </h2>

                    <p className='sub-heading'>to get access to your account</p>

                    <label className='login-label' htmlFor='email'>Email</label>
                    <input
                        className='std-login-input'
                        type='email'
                        id='email'
                        name='email'
                        placeholder='Email'
                        onChange={ ( e ) => setEmail( e.target.value ) }
                        required
                    />

                    <label className='login-label' htmlFor='password'>Password</label>
                    <div className='login-password-input'>
                        <input
                            className='std-login-input'
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
                            className='login-eye-icon'
                            onClick={ togglePasswordVisibility }
                        >
                            <FontAwesomeIcon
                                style={ { color: '#949494' } }
                                icon={ showPassword ? faEyeSlash : faEye }
                            />
                        </button>
                    </div>

                    <p className='forget-password'>Forgot Password ?</p>

                    <Link to={ '/std-pc-pm-signup' }><p className='navigate-signn'>Sign Up</p></Link>

                    <button className='login-button' type='submit'>Sign In</button>
                </div>
            </form>
        </div>
    )
}

export default StdLogin