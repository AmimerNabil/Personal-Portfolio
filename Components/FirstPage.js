
import Image from 'next/image';
import React from 'react';
import Logo from '/public/logo.png'

const WelcomePage = () => {
    return (
        <div className='imageContainer'>
            <div className='logo'>
                <div className='logo-image-wrapper'>
                    <Image
                        src={Logo}
                        width={100}
                        height={100}
                    />
                </div>
            </div>
            <div className='text'>
                <div className='text-wrapper' >  
                    <h4 style={{color : '#E9B9C2'}}>Aspiring Backend Architect and Engineer</h4>
                    <h1 style={{color : '#E9B9C2'}}>{'<Just a guy who like to code/>'}</h1>
                    <h2 style={{color : '#E9B9C2'}}>Nabil Amimer</h2>
                </div>
            </div>
        </div>
    )
}


export default WelcomePage;


