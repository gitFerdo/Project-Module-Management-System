import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState } from 'react'
import '../../styles/co-supervisor/CoSupLogin.css';
import { Link, useNavigate } from 'react-router-dom';

function CoSupLogin ()
{
    const [ email, setEmail ] = useState( '' );
    const [ password, setPassword ] = useState( '' );
    const [ showPassword, setShowPassword ] = useState( false );

    const navigate = useNavigate();

    axios.defaults.withCredentials = true;

    const handleSubmit = ( e ) =>
    {
        e.preventDefault();
        axios.post( 'http://localhost:3000/auth/cosup-login', {
            email,
            password
        } ).then( response =>
        {
            if ( response.data.status )
            {
                navigate( '/cosup-home' );
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
        <div className='cosup-login-container'>
            <form className='cosup-login-from' onSubmit={ handleSubmit }>
                <div className='cosup-login-form-inner'>
                    <h2 className='main-heading'>
                        <span className='heading-blue'>Co-Supervisor Sign</span> <span className='heading-orange'>In</span>
                    </h2>

                    <p className='sub-heading'>to get access to your account</p>

                    <label className='cosup-login-label' htmlFor='email'>Email</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='Email'
                        onChange={ ( e ) => setEmail( e.target.value ) }
                        required
                    />

                    <label className='cosup-login-label' htmlFor='password'>Password</label>
                    <div className='cosup-login-password-input'>
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
                            className='cosup-login-eye-icon'
                            onClick={ togglePasswordVisibility }
                        >
                            <FontAwesomeIcon
                                style={ { color: '#949494' } }
                                icon={ showPassword ? faEyeSlash : faEye }
                            />
                        </button>
                    </div>

                    <p className='forget-password'>Forgot Password ?</p>

                    <Link to={ '/cosup-signup' }><p className='forget-password'>Sign Up</p></Link>

                    <button className='cosup-login-button' type='submit'>Sign In</button>
                </div>
            </form>
        </div>
    )
}

export default CoSupLogin