import { useState } from "react";
// import logoName from "../assets/logoName.png";
import logo from "/logo.png";
import Button from "./Button";
import { buttonData } from "../../buttonData";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-gray-900 fixed w-full z-50 top-0 start-0 border-b border-gray-200 dark:border-gray-600 px-1 lg:px-0 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-3 lg:-mr-48"
          >
            <img src={logo} className="h-8" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              FinanceFlow
            </span>
          </a>
          <div className="flex lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse">
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-full bg-[#0328EE] lg:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-sticky"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                />
                </svg>
              )}
            </button>
          </div>
          <div
            className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${
              isOpen ? "block" : "hidden"
            }`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 lg:p-5 mt-4 font-medium text-center w-full lg:space-x-8 lg:flex-row lg:mt-0">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white underline rounded lg:bg-transparent lg:text-blue-700 lg:p-0 lg:dark:text-blue-500"
                  aria-current="page"
                >
                  HOME
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900  lg:hover:hover:text-[#0328EE] lg:p-0 lg:dark:hover:text-[#0328EE] dark:text-white dark:hover:hover:text-[#0328EE] lg:dark:hover:bg-transparent"
                >
                  ABOUT
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900  lg:hover:hover:text-[#0328EE] lg:p-0 lg:dark:hover:text-[#0328EE] dark:text-white dark:hover:hover:text-[#0328EE] lg:dark:hover:bg-transparent"
                >
                  PRICING
                </a>
              </li>
              <li>
                <a
                    href="#"
                    className="block py-2 px-3 text-gray-900  lg:hover:hover:text-[#0328EE] lg:p-0 lg:dark:hover:text-[#0328EE] dark:text-white dark:hover:hover:text-[#0328EE] lg:dark:hover:bg-transparent"
                    >
                    TOKENS
                    </a>
              </li>
              <li>
                <a
                    href="#"
                    className="block py-2 px-3 text-gray-900  lg:hover:hover:text-[#0328EE] lg:p-0 lg:dark:hover:text-[#0328EE] dark:text-white dark:hover:hover:text-[#0328EE] lg:dark:hover:bg-transparent"
                    >
                    BLOG
                    </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900  lg:hover:hover:text-[#0328EE] lg:p-0 lg:dark:hover:text-[#0328EE] dark:text-white dark:hover:hover:text-[#0328EE] lg:dark:hover:bg-transparent"
                >
                  CONTACT US
                </a>
              </li>
            </ul>
            <div className="text-center lg:mx-5 lg:absolute lg:right-20 p-10 " >
              {buttonData.slice(0, 1).map((buttonData, idx) => (
                <Button key={idx} name={buttonData.name} />
            ) )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

