// import React from 'react'
import propTypes from "prop-types";

const Card1 = ( { icon, title, description } ) => {
  return (

    <>

        <div className="rounded-3xl bg-[#010D50] lg:w-72 h-auto p-5 " >
            <img src={icon} alt="icon" />
            <p className="pt-5 font-bold " > {title} </p>
            <p className="pt-3 font-normal " > {description} </p>
        </div>
    
    </>

)
}

Card1.propTypes = {
    icon: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
}

export default Card1