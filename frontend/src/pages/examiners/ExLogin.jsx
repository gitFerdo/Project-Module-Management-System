import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/examiner/ExLogin.css';

function ExLogin ()
{
    const [ email, setEmail ] = useState( '' );
    const [ password, setPassword ] = useState( '' );
    const [ showPassword, setShowPassword ] = useState( false );

    const navigate = useNavigate();

    axios.defaults.withCredentials = true;

    const handleSubmit = ( e ) =>
    {
        e.preventDefault();
        axios.post( 'http://localhost:3000/auth/ex-login', {
            email,
            password
        } ).then( response =>
        {
            if ( response.data.status )
            {
                navigate( '/ex-home' );

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
        <div className='ex-container'>
            <form className='ex-from' onSubmit={ handleSubmit }>
                <div className='ex-form-inner'>
                    <h2 className='main-heading'>
                        <span className='heading-blue'>Examiner Sign</span> <span className='heading-orange'>In</span>
                    </h2>

                    <p className='sub-heading'>to get access to your account</p>

                    <label className='ex-label' htmlFor='email'>Email</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='Email'
                        onChange={ ( e ) => setEmail( e.target.value ) }
                        required
                    />

                    <label className='ex-label' htmlFor='password'>Password</label>
                    <div className='ex-password-input'>
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

                    <p className='forget-password'>Forgot Password ?</p>

                    <Link to={ '/ex-signup' }><p className='forget-password'>Sign Up</p></Link>

                    <button className='ex-button' type='submit'>Sign In</button>
                </div>
            </form>
        </div>
    )
}

export default ExLogin