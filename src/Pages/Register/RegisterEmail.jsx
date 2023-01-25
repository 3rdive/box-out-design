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
    <section className="bg-whiteGrey rounded-lg md:w-11/12 sm:w-fit md:h-11/12 sm:h-fit sm:pb-80 mx-auto md:my-8  p-3 text-center">
      <img src={Logo} alt="" />
      <div className=" md:w-128 m-auto sm:w-96  m-auto flex flex-col  justify-center">
        <button onClick={handleClick}>
          <FontAwesomeIcon
            className="text-darkPurple mt-12"
            icon={faArrowLeft}
          />
        </button>
        <div className=" flex flex-col items-start md:-w-80 m-auto  ">
          <h1 className=" mt-8 md:text-4xl  font-bold">
            Register with spatch.
          </h1>
          <p className="text-grey text-sm">
            Enter your email to create an account
          </p>
        </div>
        <form className="flex justify-center">
          <div className=" md:-w-64  mt-8  ">
            <div className=" md:w-96 space-x-2 flex items-start  border-b border-darkPurple">
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
          </div>
        </form>

        <div className="btn mt-8  md:w-96 m-auto  ">
          <Link to="/verification">
            <button className="bg-darkPurple rounded-lg text-white py-2 px-20 md:w-full">
              Continue
            </button>
          </Link>
        </div>
        {/* <Buttons value={"Continue"} />         */}

        <div className="flex flex-col items-start md:w-96 w-52  m-auto mt-2 pb-80">
          <p className="">
            {" "}
            By continuing you agree to our{" "}
            <a href="#" className="text-darkPurple font-bold ">
              Policy Privacy{" "}
            </a>{" "}
            and our{" "}
          </p>
          <p>
            {" "}
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
