// import React from 'react';
import applestore from "../assets/appleIcon.png";
import playstore from "../assets/playstore.png";

const Card5 = () => {
  return (
    <>
        <div className="bg-[#FFFFFF1A] rounded-3xl p-8 w-fit lg:w-[400px] " >
            <div>
                <p className="text-lg font-bold" >
                    DOWNLOAD OUR APPLICATION
                </p>

                <p className="mt-3 font-thin " >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla integer 
                </p>
            </div>

            <div className="block lg:flex mt-4" >
                <div className="bg-[#0328EE] flex items-center rounded-full p-2 px-5 hover:bg-[#0326ee7a] " >
                    <img src={applestore} alt="applestore" className="" />
                    <p className="ml-3" >APP STORE</p>
                </div>

                <div className="bg-[#0328EE] flex items-center rounded-full p-2 px-5 ml-0 lg:ml-5 mt-3 lg:mt-0 hover:bg-[#0326ee7a] " >
                    <img src={playstore} alt="playstore" className="" />
                    <p className="ml-3" >PLAY STORE</p>
                </div>
            </div>

        </div>
    
    </>
  )
}

export default Card5