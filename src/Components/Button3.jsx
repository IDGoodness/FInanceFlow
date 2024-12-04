// import React from 'react'
import propTypes from "prop-types";


const Button = ({ name }) => {
  return (
    <>
      <button className="text-[#0328EE] bg-{bg} text-[16px] font-bold rounded-full w-full lg:w-[210px] h-[60px] text-center hover:bg-[#1d275f] hover:text-white bg-white ">
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