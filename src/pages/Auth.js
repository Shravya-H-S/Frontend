import React from 'react';
import '../css/Auth.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';

function Auth() {
    
  return (
    
    <div className='first'>
        <div className='picture'><img src={require('../image/Draft 38.png')}
        alt='logo'/></div>
        Automate your audit using 
        <div className='extra'>Effinity's Auditman.</div>
        <div className='second'>Login to Auditman using Google</div>
        <div className='main-container'>
        

            <GoogleOAuthProvider clientId="942320237663-4hm8k4oveuf96acc734188n4ov9u3kb5.apps.googleusercontent.com">
                <GoogleLogin
                    onSuccess={credentialResponse => {
                        const details=jwt_decode(credentialResponse.credential);
                        console.log(details)
                    console.log(credentialResponse);
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
            />
            </GoogleOAuthProvider>
        </div>
    </div>
    )
  
}

export default Auth;
