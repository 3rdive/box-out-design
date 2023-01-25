import React from "react";
import Verify from "./Verify";
import LogoWhite from "../../img/LogoWhite.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const Welcome = () => {
  return (
    <section className="bg-darkPurple rounded-lg md:w-11/12 text-white  mx-auto md:my-8  p-3 pb-60 text-center sm:w-fit">
      <img src={LogoWhite} alt="" />
      <div className="text-4xl text-center pt-16">
        <FontAwesomeIcon className="text-green" icon={faCircleCheck} />
        <h1 className="mt-2 text-4xl font-bold ">Successful</h1>
        <p className=" text-xl ">welcome to spatch</p>
      </div>
    </section>
    // <>
    // <Verify h1={"Successful"} p={"Welcome to spatch"} />
    // </>
  );
};

export default Welcome;
