import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../img/Logo.svg";

const Register = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/", { replace: true });
  };
  return (
    <section className="bg-whiteGrey rounded-lg md:w-8/12 h-11/12 mx-auto my-8  p-3   text-center">
      <img src={Logo} alt="" />
      <div className="w-64 m-auto flex flex-col items-start">
        <button onClick={handleClick}>
          <FontAwesomeIcon
            className="text-darkPurple mt-12"
            icon={faArrowLeft}
          />
        </button>
        <h1 className="mt-8 text-2xl font-bold">Register with spatch.</h1>
        <p className="text-grey text-sm">
          Enter your email to create an account
        </p>
        <form>
          <div className="group  border-b border-darkPurple mt-8 space-x-4 items-start  ">
            <FontAwesomeIcon className="text-grey" icon={faEnvelope} />
            <input
              className=" placeholder:text-slate-400 pb-1 font-bold bg-whiteGrey text-darkPurple text-l  focus:outline-none focus:border-none focus:none"
              placeholder="fisayoahmad@gmail.com"
              type="email"
              name="email"
            />
          </div>
        </form>

        <div className="btn mt-8 flex items-center ">
          <Link to="/verification">
            <button className="bg-darkPurple rounded-lg text-white py-2 px-20 w-ful">
              Continue
            </button>
          </Link>
        </div>

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
        </div>
      </div>
    </section>
  );
};

export default Register;
