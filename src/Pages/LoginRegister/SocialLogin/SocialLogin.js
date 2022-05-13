import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
    return (
        <div style={{ backgroundImage: `url("https://img.freepik.com/free-photo/watercolor-blue-background-texture_145343-1136.jpg")` }} className='h-full'>
            <div className='py-20'>
                <div className='flex flex-col items-center justify-items-center '>
                    <h5 className='bg-white mb-5 px-7 py-2'><FcGoogle className='inline w-6 h-6 mr-3'></FcGoogle> Sign in with Google</h5>
                    <h5 className='bg-white mb-5 px-5 py-2'><FaFacebook className='inline w-6 h-6 mr-3 text-blue-500'></FaFacebook> Sign in with Facebook</h5>
                </div>
            </div>


        </div>
    );
};

export default SocialLogin;