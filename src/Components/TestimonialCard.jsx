import propTypes from "prop-types";

const testimonialCard = ( { description, name, title, icon } ) => {
  return (
    <>
        <div className="bg-[#010D50] rounded-3xl lg:w-[400px] p-7 " >
            <p className=" text-lg " >{description}</p>
            <div className="flex space-x-5 mt-5 " >
                <img src={icon} alt="" />
                <div className="" >
                    <p className="font-bold text-base " > {name} </p>
                    <p className="font-normal text-base " > {title} </p>
                </div>
            </div>
        </div>
    
    
    </>
  )
}

testimonialCard.propTypes = {
    description: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    icon: propTypes.string.isRequired,
}

export default testimonialCard