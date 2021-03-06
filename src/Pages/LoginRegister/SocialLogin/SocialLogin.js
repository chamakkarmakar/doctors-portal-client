import React, { useEffect } from 'react';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../SharedItem/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
    const [signInWithFacebook, user2, loading2, error2] = useSignInWithFacebook(auth);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/"; 

    useEffect(() => {
        if (user1 || user2) {
            navigate(from, { replace: true });
        }
    },[user1,user2,navigate,from])

    if (loading1 || loading2) {
        return <Loading></Loading>;
    }

    if (error1 || error2) {
        return (
            <div>
                <p>Error: Invalid Email</p>
            </div>
        );
    }
    return (
        <div style={{ backgroundImage: `url("https://img.freepik.com/free-photo/watercolor-blue-background-texture_145343-1136.jpg")` }} className='h-full'>
            <div className='py-20'>
                <div className='flex flex-col items-center justify-items-center '>
                    <button className='bg-white mb-5 px-7 py-2' onClick={() => signInWithGoogle()}><FcGoogle className='inline w-6 h-6 mr-3'></FcGoogle> Sign in with Google</button>
                    <button className='bg-white mb-5 px-5 py-2' onClick={() => signInWithFacebook()}><FaFacebook className='inline w-6 h-6 mr-3 text-blue-500'></FaFacebook> Sign in with Facebook</button>
                </div>
            </div>


        </div>
    );
};

export default SocialLogin;