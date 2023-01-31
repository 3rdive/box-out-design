import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../img/Logo.svg";
import { Buttons } from "../../Components/Buttons";

const RegisterEmail = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/register", { replace: true });
  };
  return (
    <section className="bg-whiteGrey rounded-lg md:w-11/12 h-11/12  mx-auto md:my-8  p-3  text-center sm:w-fit">
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
          <p className="text-grey text-sm">Enter your email to create an account</p>

          <form className="w-full">
          <div className="mt-8 space-x-2 flex items-start  border-b border-darkPurple">
          <FontAwesomeIcon className="text-grey mt-1" icon={faEnvelope} />
               <input
                 className="bg-none w-full  placeholder:text-slate-400 pb-1 font-bold 
               bg-whiteGrey text-darkPurple text-l  focus:outline-none focus:border-none focus:none"
                 placeholder="fisayoahmad@gmail.com"
                 type="email"
                 name="email"
                 required={true}
               />
          </div>
          </form>

          <div className="mt-10 w-full ">
            <Link to="/verification">
            <button className="bg-darkPurple w-full py-3 rounded-lg text-white">
              Continue
            </button>
            </Link>
          </div>

          <p className="md:text-lg sm:text-sm ">
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

export default RegisterEmail;
