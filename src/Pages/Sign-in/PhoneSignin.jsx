import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../img/Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faFontAwesome } from "@fortawesome/free-solid-svg-icons";
import flag from "../../img/flag.svg";

const PhoneSignin = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home", { replace: true });
  };
  return (
    <section className="bg-whiteGrey rounded-lg md:w-8/12 h-11/12 mx-auto my-8  p-3   text-center">
      <img src={Logo} alt="" />
      <div className=" w-64 m-auto flex flex-col items-start  ">
        <button onClick={handleClick}>
          <FontAwesomeIcon
            className="text-darkPurple mt-12"
            icon={faArrowLeft}
          />
        </button>
        <h1 className="mt-8 text-2xl font-bold">Sign in to spatch.</h1>
        <p className="text-grey sm:text-xl md:text-sm">
          Please enter your sign in details
        </p>
        <form>
          <div className="group  border-b border-darkPurple flex flex-row mt-8 space-x-4 items-start  ">
            <img className="w-6.5 " src={flag} alt="" />
            <input
              className=" placeholder:text-slate-400 pb-1 font-bold bg-whiteGrey text-darkPurple text-l  focus:outline-none focus:border-none focus:none"
              placeholder="+234 803 600 1234"
              type="phonenumber"
              name="phonenumber"
            />
          </div>

          <div className="group  border-b border-grey mt-8 space-x-4 items-start ">
            <FontAwesomeIcon className="text-grey" icon={faLock} />
            <input
              className=" placeholder:text-slate-400 pb-1 font-bold bg-whiteGrey text-darkPurple text-l  focus:outline-none focus:border-b-darkPurple "
              placeholder="password"
              type="passowrd"
              name="password"
            />
            {/* <FontAwesomeIcon className="text-grey" icon={faEye} /> */}
          </div>
          <a href="#" className=" ml-20 md:text-sm text-grey ">
            Forgot password?
          </a>
        </form>

        <button className="bg-darkPurple  rounded-lg p-2 text-white w-10/12 mt-8  ">
          Sign in to spatch
        </button>

        <div className=" flex flex-col items-start text-sm mt-2">
          <p> By continuing you agree to our </p>
          <p>
            <a href="#" className="text-darkPurple font-bold">
              Policy Privacy{" "}
            </a>
            and our{" "}
            <a href="#" className="text-darkPurple font-bold">
              Terms of Service
            </a>
          </p>
          <p></p>
        </div>
      </div>
    </section>
  );
};

export default PhoneSignin;
