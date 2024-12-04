// import React from 'react'
import propTypes from "prop-types";


const Button = ({ name }) => {
  return (
    <>
      <button className="text-white bg-{bg} text-[16px] font-bold rounded-full w-full lg:w-[210px] h-[60px] text-center hover:bg-[#1d275f] bg-[#0328EE] ">
          {name}
      </button>
    
    </>
  )
}

Button.propTypes = {
  name: propTypes.string.isRequired,
  // bg: propTypes.string.isRequired,
}

export default Button