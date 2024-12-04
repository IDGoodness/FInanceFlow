// import React from 'react'
import propTypes from "prop-types";

const Card3 = ( { image, title, topic, description, avatar, avatarName, date } ) => {
  return (
    <>
        <div className="w-[300px] lg:w-fit rounded-3xl bg-[#010D50] relative " >
            <div className="relative z-0" >
                <img src={image} alt="Opening PC" className="rounded-t-3xl" />
            </div>

            <div className="bg-[#0328EE] rounded-full w-fit p-2 text-xs ml-5 -mt-4 z-20 relative" >
                <p>{title} </p>
            </div>

            <div className="p-5" >
                <p className="text-left w-40 font-bold text-xl " >{topic} </p>
                <p className=" pt-5 font-extralight text-sm " >{description} </p>
            </div>
            <hr className="w-11/12 mx-auto " />
            <div className="flex p-5" >
                <img src={avatar} alt="Avatar" />
                <div className="ml-5" >
                    <p className="font-bold" >{avatarName}</p>
                    <p className="font-extralight text-base " > {date} </p>
                </div>
            </div>
        </div>
    
    
    </>
  )
}

Card3.propTypes = {
    image: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    topic: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    avatar: propTypes.string.isRequired,
    avatarName: propTypes.string.isRequired,
    date: propTypes.string.isRequired,
}

export default Card3