import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../../img/Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

const PhoneConfirmation = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/registerphone", { replace: true });
  };
  return (
    <section className="bg-whiteGrey rounded-lg md:w-11/12   mx-auto md:my-8  p-3 text-center sm:w-fit">
      <img src={Logo} alt="" />
      <div className=" m-auto flex flex-col ">
        <div className=" flex flex-col items-start   m-auto ">
          <button onClick={handleClick}>
            <FontAwesomeIcon
              className="text-darkPurple mt-12"
              icon={faArrowLeft}
            />
          </button>
          <h1 className=" mt-8 md:text-4xl  sm:text-2xl font-bold">Phone Confirmation.</h1>
          <p className="text-grey text-sm">
            We've sent a verification code to your email
          </p>
          <p className="text-grey text-sm">(234) 809 900 1234</p>

          <div className="mt-8 w-full space-x-2 flex items-start  border-b border-darkPurple">
            <FontAwesomeIcon className="text-grey mt-1" icon={faLock} />
            <input
              className="bg-none w-full  placeholder:text-slate-400 pb-1 font-bold 
        bg-whiteGrey text-darkPurple text-l  focus:outline-none focus:border-none focus:none autofill:bg-grey "
              placeholder="Enter code"
              type="password"
              name="password"
              required={true}
            />

          </div>

          <div className="mt-10 w-full ">
            <Link to="/welcome">
                <button className="bg-darkPurple w-full py-3 rounded-lg text-white">
                    Confirm
                </button>
            </Link>
            </div>

            <span className="text-darkPurple mt-6 text-black"> Didn't get the code?</span>

            <p className="text-grey text-sm mt-4">
            Verify that your email address is correct, 
            
          </p>

            <p className="text-grey text-sm">
            or check your spam folder.
          </p>

          <div className="mt-10 w-full ">
                <button className="bg-white  text-grey w-full py-3 rounded-lg text-white">
                    Resend code
                </button>
            </div>

            <Link className="text-darkPurple mt-2" to="/sidebar">
                Or Restart
            </Link>

            {/* <Link className="text-darkPurple mt-2" to="/register">
                Or Restart
            </Link> */}
        </div>
      </div>
    </section>
  );
};

export default PhoneConfirmation;
