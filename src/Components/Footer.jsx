// import React from 'react'
import { Link } from 'react-router-dom';
import Card5 from './Card5.jsx';
import logo from '/logo.png';
import insta from '../assets/insta.png';
import facebook from '../assets/facebook.png';
import linkedin from '../assets/linkedin.png';

const Footer = () => {
  return (
    <>
        <div className="bg-[#010D50] py-20 px-5 lg:px-36 text-white " >
            <div className='block lg:flex justify-between' >
                <span className='flex items-center' >
                    <img src={logo} alt="logo" />
                    <p className='ml-2 text-white text-xl' >
                        FinanceFlow
                    </p>
                </span>
                <div className='flex mt-5 lg:mt-0 ' >
                    <img src={insta} alt="Instagram" className='mx-3' />
                    <img src={facebook} alt="Facebook" className='mx-3' />
                    <img src={linkedin} alt="LinkedIn" className='mx-3' />
                </div>
            </div>


            <div className='block lg:flex justify-between mt-10' >
                <div>
                    <p className='mb-5' >
                        Menu
                    </p>

                    <hr />
                    
                    <div className='grid grid-cols-2 gap-3 mt-5' >
                        <Link to='/' > HOME </Link>
                        <Link to='/tokens' > TOKENS </Link>
                        <Link to='/about' > ABOUT </Link>
                        <Link to='/blog' > BLOG </Link>
                        <Link to='/pricing' > PRICING </Link>
                        <Link to='/contact' > CONTACT US </Link>
                    </div>
                </div>

                <div className='mt-10 lg:mt-0 mb-10' >
                    <Card5 />
                </div>

            </div>
            
            <hr />

            <div className='block lg:flex justify-between' >
                <div className='text-center mt-10 lg:mt-0 font-light ' >
                    All rights reserved
                </div>

                <div className='text-center text-xs font-thin' >
                    Chrestotes in the flesh...
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer