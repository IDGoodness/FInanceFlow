import { useEffect } from "react";
import { buttonData } from "../../buttonData";
import { cardOneData } from "../../cardOneData";
import { cardTwoData } from "../../cardTwoData";
import { cardThreeData } from "../../cardThreeData";
import { cardFourData } from "../../cardFourData";
// import bigComputerImage from "../assets/Body Details.png"
import Button from "../Components/Button";
import Button2 from "../Components/Button2";
import Button3 from "../Components/Button3";
import Card1 from "../Components/Card1";
import Card2 from "../Components/Card2";
import Card3 from "../Components/Card3";
import Card4 from "../Components/Card4";
import Carousel from "../Components/Carousel";
import computerImage from "../assets/Apple Computers.png";
import cOne from "../assets/C_1.png";
import cTwo from "../assets/C_2.png";
import cThree from "../assets/C_3.png";
import cFour from "../assets/C_4.png";
import cFive from "../assets/C_5.png";
import twoPhones from "../assets/Group 2.png";
import twophones2 from "../assets/twophones2.png";
import market from "../assets/market.png";
import light from "../assets/light.png";
import lock from "../assets/lock.png";
import secure from "../assets/secure.png";
import ninenine from "../assets/ninenine.png";
import message247 from "../assets/message247.png";
import download from "../assets/download.png";
import account from "../assets/account.png";
import trade from "../assets/trade.png";
import video from "../assets/video.png";

const Home = () => {
  useEffect(() => {
    const btn2 = document.getElementById("btn2");
    if (btn2) {
      btn2.style.backgroundColor = "white";
    }
    // console.log(btn2);
  }, []);

  return (
    <div className="bg-gray-900 text-white">
      <div className="block lg:flex bg-gray-900 lg:p-10 lg:px-20">
        <div className="lg:w-1/2">
          <p className="p-10 font-sans text-[38px] lg:text-[55px] text-white font-bold ">
            Buy, trade, and hold 350+ cryptocurrencies
          </p>

          <p className="p-10 text-white -mt-20 text-[18px] font-sans font-normal ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            nulla suspendisse tortor aenean dis placerat.
          </p>

          <div className="p-10 flex flex-col lg:flex-row ">
            <span className="">
              {buttonData.slice(0, 1).map((buttonData, idx) => (
                <Button key={idx} name={buttonData.name} />
              ))}
            </span>

            <span className=" mt-5 lg:mt-0 lg:ml-5 ">
              {buttonData.slice(1, 2).map((buttonData, idx) => (
                <Button2 key={idx} name={buttonData.name} id={`btn2-${idx}`} />
              ))}
            </span>
          </div>
        </div>
        <div className="p-10 lg:w-1/2">
          <img
            src={computerImage}
            alt="Apple Computer"
            className="lg:w-[1200px] lg:h-auto mx-auto"
          />
        </div>
      </div>

      <div className="text-center font-sans font-normal text-[18px] text-white ">
        <p>Finance flow has been featured on</p>
      </div>

      <div className="py-10 px-16 grid grid-cols-2 lg:flex lg:flex-row lg:gap-44 text-center font-bold lg:px-32 ">
        <p className="flex items-center pt-5 lg:pt-0">
          {" "}
          <img src={cOne} alt="Company One" className="w-40 h-6 mr-1" />{" "}
        </p>
        <p className="flex items-center pt-5 lg:pt-0">
          {" "}
          <img src={cTwo} alt="Company Two" className="w-40 h-6 mr-1" />{" "}
        </p>
        <p className="flex items-center pt-5 lg:pt-0">
          {" "}
          <img
            src={cThree}
            alt="Company Three"
            className="w-40 h-6 mr-1"
          />{" "}
        </p>
        <p className="flex items-center pt-5 lg:pt-0">
          {" "}
          <img
            src={cFour}
            alt="Company Four"
            className="w-40 h-6 mr-1"
          />{" "}
        </p>
        <p className="flex col-span-2 items-center pt-5 lg:pt-0 mx-auto lg:mx-0 ">
          {" "}
          <img
            src={cFive}
            alt="Company Five"
            className="w-40 h-6 mr-1"
          />{" "}
        </p>
      </div>

      <section className="p-0" >
        <div className=" text-left ml-10 lg:ml-0 lg:text-center text-2xl font-bold lg:text-4xl pt-10 ">
          Build your Crypto Portfolio
        </div>
        <div className="text-left ml-10 lg:ml-0 lg:text-center font-normal text-base lg:text-lg pt-6 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          <br className="hidden lg:block" /> Feugiat nulla suspendisse tortor
          aene.
        </div>

        <div className="block lg:flex justify-center">
          <div className="p-10 space-y-5 ">
            {cardOneData.slice(0, 2).map((cardData, idx) => (
              <Card1
                key={idx}
                icon={cardData.icon}
                title={cardData.title}
                description={cardData.description}
              />
            ))}
          </div>

          <div className="p-10 w-fit -my-14 lg:my-0 ">
            {cardTwoData.map((cardData, idx) => (
              <Card2
                key={idx}
                title={cardData.title}
                description={cardData.description}
                image={cardData.image}
              />
            ))}
          </div>

          <div className="p-10 space-y-5 ">
            {cardOneData.slice(2).map((cardData, idx) => (
              <Card1
                key={idx}
                icon={cardData.icon}
                title={cardData.title}
                description={cardData.description}
              />
            ))}
          </div>
        </div>

        <div className="text-center px-20 ">
          {buttonData.slice(0, 1).map((buttonData, idx) => (
            <Button key={idx} name={buttonData.name} />
          ))}
        </div>
      </section>

      <section className="lg:p-20" >
        <div className="p-10 mt-10 block lg:flex justify-between">
          <div className="">
            <img src={twoPhones} alt="two phones" className="w-auto lg:h-[500px] " />
          </div>

          <div className="lg:w-[420px] lg:mr-40 ">
            <div>
              <p className="text-left font-bold text-3xl pt-10 ">
                Earn daily rewards on your idle tokens
              </p>
              <p className="text-left font-normal text-lg pt-5  ">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
                nulla suspendisse tortor aene.
              </p>
            </div>

            <div className="pt-8 space-y-5 ">
              <p className="flex items-center">
                {" "}
                <img src={market} alt="market" className="mr-5" /> Lowest fees in
                market
              </p>
              <p className="flex items-center">
                <img src={light} alt="light" className="mr-5" /> Fast and secure
                transactions
              </p>
              <p className="flex items-center">
                <img src={lock} alt="" className="mr-5" /> 256-bit secure
                encryption
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="lg:p-20" >
        <div className="p-10 block lg:flex justify-between">
          <div className="lg:w-[500px]">
            <div>
              <p className="text-left font-bold text-3xl pt-10 lg:pl-10 ">
                Earn daily rewards on your idle tokens
              </p>
              <p className="text-left font-normal text-lg pt-5 lg:pl-10 ">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
                nulla suspendisse tortor aene.
              </p>
            </div>

            <div className="pt-8 space-y-5 lg:pl-10 ">
              <p className="flex items-center">
                <img src={secure} alt="market" className="mr-5" /> 100% Private
                data
              </p>
              <p className="flex items-center">
                <img src={ninenine} alt="nine%" className="mr-5" /> 99.99% Uptime
                guarantee
              </p>
              <p className="flex items-center">
                <img src={message247} alt="secure" className="mr-5" /> 24/7
                Dedicated support
              </p>
            </div>
          </div>

          <div className="pt-20">
            <img
              src={computerImage}
              alt="two phones"
              className="lg:w-[500px] lg:h-auto "
            />
          </div>
        </div>
      </section>

      <section>
        <div className="block lg:flex bg-[#0328EE] p-10 font-sans mt-20 h-[580px] md:h-auto lg:h-[412px] text-center ">
          <div className="lg:w-1/2 lg:p-20">
            <p className="font-bold text-4xl text-left ">
              Explore endless possibilities with FinanceFlow
            </p>
            <p className="pt-5 font-normal text-left ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
              nulla suspendisse tortor aene.
            </p>

            <div className="pt-5 text-left ">
              {buttonData.slice(0, 1).map((buttonData, idx) => (
                <Button3 key={idx} name={buttonData.name} />
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 -mt-11 lg:-mt-32 ">
            <img src={twophones2} alt="two phones" className="w-auto lg:h-[500px] " />
          </div>
        </div>
      </section>

      <section className="lg:p-20 " >
        <div className="p-10 mt-20 block lg:px-24 lg:flex justify-between">
          <p className="font-bold text-2xl font-sans text-center lg:text-left items-center ">
            What our users say?
          </p>
          <div className="pt-5 lg:pt-0">
            {buttonData.slice(0, 1).map((buttonData, idx) => (
              <Button key={idx} name={buttonData.name} />
            ))}
          </div>
        </div>

        <div className=" px-5 rounded-3xl">
          <Carousel />
        </div>
      </section>

      <section className="lg:px-20" >
        <div className="p-10 block lg:flex justify-between">
          <div className="lg:w-[500px] ">
            <div>
              <p className="text-left font-bold text-3xl pt-10 lg:pl-10 ">
                Get started today
              </p>
              <p className="text-left font-normal text-lg pt-5 lg:pl-10 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
                nulla suspendisse tortor aene.
              </p>
            </div>

            <div className="pt-8 space-y-5 lg:pl-10 ">
              <p className="flex items-center">
                <img src={download} alt="market" className="mr-5" />
                Download app
              </p>
              <p className="flex items-center">
                <img src={account} alt="nine%" className="mr-5" />
                Create a free account
              </p>
              <p className="flex items-center">
                <img src={trade} alt="secure" className="mr-5" />
                Start trading
              </p>
            </div>
          </div>

          <div className="p-10">
            <img
              src={video}
              alt="two phones"
              className="w-[500px] h-auto "
            />
          </div>
        </div>
      </section>

      <section className="lg:px-20" >
        <div className="p-10 lg:p-10">
          <div className="lg:flex justify-between">
            <p className="text-left font-bold text-2xl pt-10 lg:pl-10 lg:w-2/3">
              Browse our latest news
            </p>
            <p className="text-left font-normal text-lg pt-5 lg:pl-10 lg:w-[500px] items-end">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit non
              neque orci amet, amet .
            </p>
          </div>

          <div className="mt-10 lg:mt-0 lg:p-10 block lg:flex gap-7 space-y-5 lg:space-y-0 ">
            {cardThreeData.map((Data, idx) => (
              <Card3
                key={idx}
                image={Data.image}
                title={Data.title}
                topic={Data.topic}
                description={Data.description}
                avatar={Data.avatar}
                avatarName={Data.avatarName}
                date={Data.date}
              />
            ))}
          </div>

          <div className="text-center mt-5 " >
            <span className="lg:mt-0 lg:ml-5 ">
              {buttonData.slice(2).map((buttonData, idx) => (
                <Button2 key={idx} name={buttonData.name} id={`btn2-${idx}`} />
              ))}
            </span>
          </div>
        </div>
      
      </section>

      <section className="lg:px-20" >
        <div className="p-5">
          <div className="lg:flex justify-between">
            <p className="text-left font-bold text-2xl pt-10 lg:pl-10 lg:w-2/3">
              Download our app
            </p>
            <p className="text-left font-normal text-lg pt-5 lg:pl-10 lg:w-[500px] items-end">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit non
              neque orci amet, amet .
            </p>
          </div>

          <div className="mt-10 lg:mt-0 lg:p-20 block lg:flex justify-between space-y-5 lg:space-y-0 ">
            {cardFourData.map((Data, idx) => (
              <Card4
                key={idx}
                image={Data.image}
                title={Data.title}
                description={Data.description}
                icon={Data.icon}
                iconName={Data.iconName}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;