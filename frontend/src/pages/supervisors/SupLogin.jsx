import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../../styles/supervisor/SupLogin.css';

function SupLogin ()
{
    const [ email, setEmail ] = useState( '' );
    const [ password, setPassword ] = useState( '' );
    const [ showPassword, setShowPassword ] = useState( false );

    const navigate = useNavigate();

    axios.defaults.withCredentials = true;

    const handleSubmit = ( e ) =>
    {
        e.preventDefault();
        axios.post( 'http://localhost:3000/auth/sup-login', {
            email,
            password
        } ).then( response =>
        {
            if ( response.data.status )
            {
                navigate( '/sup-home' );
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
        <div className='sup-login-container'>
            <form className='sup-login-from' onSubmit={ handleSubmit }>
                <div className='sup-login-form-inner'>
                    <h2 className='main-heading'>
                        <span className='heading-blue'>Supervisor Sign</span> <span className='heading-orange'>In</span>
                    </h2>

                    <p className='sub-heading'>to get access to your account</p>

                    <label className='sup-login-label' htmlFor='email'>Email</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='Email'
                        onChange={ ( e ) => setEmail( e.target.value ) }
                        required
                    />

                    <label className='sup-login-label' htmlFor='password'>Password</label>
                    <div className='sup-login-password-input'>
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
                            className='sup-login-eye-icon'
                            onClick={ togglePasswordVisibility }
                        >
                            <FontAwesomeIcon
                                style={ { color: '#949494' } }
                                icon={ showPassword ? faEyeSlash : faEye }
                            />
                        </button>
                    </div>

                    <p className='forget-password'>Forgot Password ?</p>

                    <button className='sup-login-button' type='submit'>Sign In</button>
                </div>
            </form>
        </div>
    )
}

export default SupLogin