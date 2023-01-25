import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"
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

    <section className="bg-whiteGrey rounded-lg md:w-11/12 sm:w-fit md:h-11/12 sm:h-fit sm:pb-80 mx-auto md:my-8  p-3 text-center">
<img src={Logo} alt="" />
<div className=" md:w-128 m-auto sm:w-96  m-auto flex flex-col  justify-center">
  <button onClick={handleClick}>
    <FontAwesomeIcon
      className="text-darkPurple mt-12"
      icon={faArrowLeft}
    />
  </button>
  <div className=" flex flex-col items-start  md:-w-80 m-auto  ">
  <h1 className=" mt-8 md:text-4xl  font-bold">Sign in to spatch.</h1>
  <p className="text-grey text-sm">
  Please enter your sign in details
  </p>
  </div>
  <form className='flex flex-col items-center justify-center'>
    <div className=" md:-w-64  mt-8  ">
      <div className=" md:w-96 space-x-2 flex items-start  border-b border-darkPurple">
       <img className="w-6.5 " src={flag} alt="" />
      <input
        className="bg-none w-full  placeholder:text-slate-400 pb-1 font-bold 
        bg-whiteGrey text-darkPurple text-l  focus:outline-none focus:border-none focus:none"
        placeholder="+2347 071 113"
        type="phone"
        name="phone"
        required={true}
      />
      </div>
    </div>

    <div className=" md:-w-64  mt-8  ">
      <div className=" md:w-96 space-x-2 flex items-start  border-b border-darkPurple">
      <FontAwesomeIcon className="text-grey mt-1" icon={faLock} />
      <input
        className="bg-none w-full  placeholder:text-slate-400 pb-1 font-bold 
        bg-whiteGrey text-darkPurple text-l  focus:outline-none focus:border-none focus:none"
        placeholder="password"
        type="email"
        name="email"
        required={true}
      />
      <FontAwesomeIcon className="text-grey" icon={faEye} /> 

      </div>
    </div>
  </form>

  <div className="btn mt-8  md:w-96 m-auto  ">
    <Link to="">
      <button className="bg-darkPurple rounded-lg text-white py-2 px-20 md:w-full">
        Continue
      </button>
    </Link>
  </div>
  {/* <Buttons value={"Continue"} />         */}

  <div className='flex flex-col items-start md:w-96 w-52  m-auto mt-2 pb-80'>
  <p className=''> By continuing you agree to our <a href="#" className="text-darkPurple font-bold ">
        Policy Privacy{" "}
      </a> and our </p>
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

export default PhoneSignin;
