import React from "react";
import Logo from "../../img/Logo.svg";
import { Link } from "react-router-dom";

function Main() {
  return (
    <section className="bg-whiteGrey rounded-lg md:w-8/12 h-11/12 mx-auto my-8  p-3   text-center">
      <img src={Logo} alt="" />
      <div className=" w-64 m-auto flex flex-col mt-12 items-start ">
        <h1 className="text-2xl font-black">Glad you made it here.</h1>
        <p className="md:text-sm sm:text-lg text-grey ">
          Need to deliver your merchandise?
        </p>
        <p className="md:text-sm sm:text-lg text-grey ">
          Let spatch take care of that.
        </p>
        <div className="btn mt-8 flex items-center l">
          <Link to="/register">
            <button className="bg-darkPurple rounded-lg text-white py-3.5 px-10 w-ful">
              Register with Spatch
            </button>
          </Link>
        </div>

        <div className="btn mt-2 flex items-center l">
          <Link to="/home">
            <button className="bg-white border-2 border-grey-500 rounded-lg text-grey py-3.5 px-12 w-ful">
              Sign in to Spatch
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Main;
