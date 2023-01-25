import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../../img/Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import flag from "../../img/flag.svg";

const RegisterPhone = () => {
  // const [value, setValue] = useState()
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/register", { replace: true });
  };
  return (
    <section className="bg-whiteGrey rounded-lg md:w-11/12   mx-auto md:my-8  p-3 pb-4 text-center sm:w-fit">
      <img src={Logo} alt="" />
      <div className=" m-auto flex flex-col ">
        <div className=" flex flex-col items-start   m-auto ">
          <button onClick={handleClick}>
            <FontAwesomeIcon
              className="text-darkPurple mt-12"
              icon={faArrowLeft}
            />
          </button>
          <h1 className=" mt-8 md:text-4xl  sm:text-2xl font-bold">
            Register with spatch.
          </h1>
          <p className="text-grey text-sm">continue creating account with</p>
          <p className="text-grey text-sm">usmanjaguar@gmail.com</p>
          <form className="w-full">
            <div className="mt-8 space-x-2 flex items-start  border-b border-darkPurple">
              <FontAwesomeIcon className="text-grey mt-1" icon={faUser} />
              <input
                className="bg-none w-full placeholder:text-slate-400 pb-1 font-bold 
              bg-whiteGrey text-darkPurple text-l  focus:outline-none focus:border-none focus:none"
                placeholder="Usman Jaguar"
                type="name"
                name="name"
                required={true}
              />
            </div>

            <div className="mt-8 space-x-2 flex items-start  border-b border-darkPurple">
              <FontAwesomeIcon className="text-grey mt-1" icon={faLock} />
              <input
                className="bg-none w-full  placeholder:text-slate-400 pb-1 font-bold 
              bg-whiteGrey text-darkPurple text-l  focus:outline-none focus:border-none focus:none autofill:bg-grey "
                placeholder="password"
                type="password"
                name="password"
                required={true}
              />
              <FontAwesomeIcon className="text-grey" icon={faEye} />
            </div>

            <div className="flex justify-around">
              <div className="mt-8 space-x-2 flex items-start  border-b border-darkPurple">
                ` <img src={flag} alt="" className="mt-1" />
                <input
                  className="bg-none w-full  placeholder:text-slate-400 pb-1 font-bold 
              bg-whiteGrey text-darkPurple text-l  focus:outline-none focus:border-none focus:none autofill:bg-grey "
                  placeholder="+234"
                  type="phonenumber"
                  name="phonenumber"
                  required={true}
                />
                <FontAwesomeIcon
                  className="text-grey mt-1 -ml-1"
                  icon={faChevronDown}
                />
              </div>

              <div className="mt-8 ml-2 space-x-2 flex items-start border-b border-darkPurple">
                `{" "}
                <input
                  className="bg-none md:w-full sm:w-32 placeholder:text-slate-400 pb-1 font-bold 
              bg-whiteGrey text-darkPurple text-l  focus:outline-none focus:border-none focus:none autocomplete=off "
                  placeholder=""
                  type="phonenumber"
                  name="phonenumber"
                  required={true}
                />
              </div>
            </div>
          </form>

          <div className="mt-10 w-full ">
            <Link to="/phoneconfirmation">
            <button className="bg-darkPurple w-full py-3 rounded-lg text-white">
              Create account
            </button>
            </Link>
          </div>

          <p className="md:text-lg sm:text-sm">
            {" "}
            By continuing you agree to our{" "}
            <a href="#" className="text-darkPurple font-bold ">
              Policy Privacy{" "}
            </a>{" "}
          </p>

          <p>
            {" "}
            and our{" "}
            <a href="#" className="text-darkPurple font-bold">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default RegisterPhone;
