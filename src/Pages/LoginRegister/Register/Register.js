import React, { useEffect, useRef } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../SharedItem/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    const [updateProfile, updating, uerror] = useUpdateProfile(auth);
    let from = location.state?.from?.pathname || "/"; 

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    useEffect(() => {
        if (user || updateProfile) {
            navigate(from, { replace: true });
        }
    },[user,updateProfile,navigate,from])

    if (loading || updating) {
        return <Loading></Loading>;
    }

    if (error || uerror) {
        return (
            <div>
                <p>Error: </p>
            </div>
        );
    }

    const handleRegister = async event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });

        navigate('/appointment');

    }
    return (
        <div className='container w-full mx-auto mt-10 md:w-1/2 flex shadow-2xl '>
            <form onSubmit={handleRegister} className='mx-7 py-7 w-1/2'>
                <h2 className='text-center text-2xl uppercase font-extrabold mb-5 text-secondary'>Sign up</h2>
                <input type="text" name='username' className='py-2 mb-5 px-2 rounded-md w-full outline-none border border-gray-300' ref={nameRef} placeholder='User Name' />

                <input type="email" name='email' className='py-2 mb-5 px-2 rounded-md w-full outline-none border border-gray-300' ref={emailRef} placeholder='@email.com' />

                <input type="password" name='password' className='py-2 mb-5 px-2 rounded-md w-full outline-none border border-gray-300' ref={passwordRef} placeholder='**********' />

                <div className='text-center mb-5'>
                    <input type="submit" className='bg-gradient-to-r from-secondary to-primary px-5 py-2 cursor-pointer rounded-3xl text-white font-bold' value="SIGN UP" />
                </div>
                <p className='text-sm'>Already have an account? Please<Link to='/login' className='text-secondary font-bold'> Sign in</Link> </p>
            </form>

            <div className='w-1/2'>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Register;