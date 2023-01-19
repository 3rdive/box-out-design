import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import LogoWhite from "../../img/LogoWhite.svg";

const Home = () => {
  const navigate = useNavigate();

    const handleClick = () => {
      navigate("/", { replace: true });
    };
  return (
    
      <section className="bg-darkPurple rounded md:w-128 mx-auto leading-7 text-white my-8  p-3 h-128 text-center">
        <img src={LogoWhite} alt="" />
        <div className="text-4xl text-center pt-12">

        <button onClick={handleClick}>
          <FontAwesomeIcon
            className="text-white font-bold "
            icon={faArrowLeft}
          />
        </button>
        <h1 className="mt-2 ">Welcome to spatch</h1>
        <Link to="/emailsignin" className=" block  pt-12 text-xl" > Signin With Email</Link>
        <Link to="/phonesignin" className="text-xl">Signin With Phone Number</Link>
        </div>
       
       
      </section>

    
 
  );
};

export default Home;
