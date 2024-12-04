// import React from 'react'
import propTypes from "prop-types";

const Card2 = ( { title, description, image } ) => {
  return (
    <>
    
        <div className="rounded-3xl bg-[#0328EE] lg:w-[380px] h-[495px] px-5 pt-5 " >
            <p className="pt-5 ml-4 font-bold" > {title} </p>
            <p className="pt-5 ml-4 font-normal" > {description} </p>
            <img src={image} alt="phone" className="pt-10 mx-auto w-auto h-[340px] " />
        </div>

    </>
  )
}

Card2.propTypes = {
    title: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    image: propTypes.string.isRequired,
}

export default Card2