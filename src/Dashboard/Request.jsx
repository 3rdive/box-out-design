import React from "react";
import { Link } from "react-router-dom"
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsFillPlusCircleFill } from "react-icons/bs";
import Fillp from "../img/Fillp.svg";

const Request = () => {
  return (
    <section>
      <div className="p-4 md:w-full">
        <button className=" hidden md:flex justify-self-end self-end w-20 mx-8/12">
          <AiOutlineInfoCircle className="text-deepPurple font-bold text-2xl" />
        </button>

        <div className="mt-12">
          <h2 className="font-bold text-black text-lg">
            Would you like to request?
          </h2>
          <div className=" mt-4  text-white">
            <div className="flex ">
              <Link to="/sameday">
              <button className="bg-deepPurple w-28 md:w-52 p-2 flex flex-col rounded-lg">
                <img
                  src={Fillp}
                  className="w-8 flex justify-self-end self-end"
                  alt=""
                />
                <span className="pt-12">Same day</span>
              </button>
              </Link>

              <button className="bg-lightBlue w-28 ml-2 p-2 flex flex-col rounded-lg">
                <img
                  src={Fillp}
                  className="w-8 flex justify-self-end self-end"
                  alt=""
                />
                <span className="pt-12">Express</span>
              </button>
            </div>

            <div className=" mt-4 flex ">
              <button className="bg-lightGreen w-28  p-2 flex flex-col rounded-lg">
                <img
                  src={Fillp}
                  className="w-8 flex justify-self-end self-end"
                  alt=""
                />
                <span className="pt-12">Interstate</span>
              </button>

              <button className="bg-lightYellow w-28 md:w-52 ml-2 p-2 flex flex-col rounded-lg">
                <img
                  src={Fillp}
                  className="w-8 flex justify-self-end self-end"
                  alt=""
                />
                <span className="pt-12">International</span>
              </button>
            </div>
          </div>
        </div>

        <button className=" hidden md:flex justify-self-end self-end w-20 mx-8/12 my-52">
          <BsFillPlusCircleFill className="text-deepPurple font-bold text-4xl" />
        </button>
      </div>
    </section>
  );
};

export default Request;

