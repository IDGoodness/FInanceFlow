import propTypes from "prop-types";

const Card4 = ( { title, description, icon, iconName, image } ) => {
  return (
    <>

        <div className="bg-[#010D50] w-fit h-[596px] lg:w-[500px] p-10 rounded-3xl " >
            <div>
                <p className="font-bold text-3xl " > {title} </p>
                <p className=" mt-5 text-lg font-thin " > {description} </p>
            </div>

            <div className="flex items-center bg-[#0328EE] w-fit rounded-full px-5 py-2 mt-5 hover:bg-[#0326ee7a] ">
                <img src={icon} alt="store" />
                <p className="ml-2" >
                    {iconName}
                </p>
            </div>

            <div className="mt-[50px] lg:mt-[102px] " >
                <img src={image} alt="phones" className="w-[305px] h-[200px] lg:h-[250px] mx-auto " />
            </div>
        </div>
    
    
    </>
  )
}

Card4.propTypes = {
    image: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    icon: propTypes.string.isRequired,
    iconName: propTypes.string.isRequired,
}

export default Card4