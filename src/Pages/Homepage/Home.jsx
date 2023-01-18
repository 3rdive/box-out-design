import React from "react";
import { Link } from "react-router-dom";
import LogoWhite from "../../img/LogoWhite.svg";

const Home = () => {
  return (
    
      <section className="bg-darkPurple rounded md:w-128 mx-auto leading-7 text-white my-8  p-3 h-128 text-center">
        <img src={LogoWhite} alt="" />
        <h1 className=" text-4xl text-center pt-14">Welcome to spatch</h1>

        <Link to="/registeremail" className=" block  pt-12 text-xl" > Register With Email</Link>
        <Link to="/registerphone" className="text-xl">Register With Phone Number</Link>
       
       
      </section>

    
 
  );
};

export default Home;
