import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    
    if (error) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
    }
    if (user) {
        return (
          <div>
            <p>Signed In User: {user.email}</p>
          </div>
        );
      }
    
    const handleLogin = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);

    }
    return (
        <div className='container w-full mx-auto mt-10 md:w-1/2 flex shadow-2xl '>
            <form className='mx-7 py-7 w-1/2' onSubmit={handleLogin}>
                <h2 className='text-center text-2xl uppercase font-extrabold mb-5 text-secondary'>Sign In</h2>
                <input type="email" name='email' className='py-2 mb-5 px-2 rounded-md w-full outline-none border border-gray-300' ref={emailRef} placeholder='@email.com' />
                <input type="password" name='password' className='py-2 mb-5 px-2 rounded-md w-full outline-none border border-gray-300' ref={passwordRef} placeholder='**********' />
                <div className='text-center mb-5'>
                    <input type="submit" className='bg-gradient-to-r from-secondary to-primary px-5 cursor-pointer py-2 rounded-3xl text-white font-bold' value="SIGN IN" />
                </div>
                <p className='text-sm'>New to Doctors Portal? <Link to='/register' className='text-secondary font-bold'>Create New Account</Link> </p>
            </form>
            <div className='w-1/2'>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;