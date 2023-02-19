import React, { useState } from "react";
import { BiArrowBack, BiMessageDetail } from "react-icons/bi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { HiUserCircle } from "react-icons/hi";
import { RiArrowRightSLine } from "react-icons/ri";
import {
  FaArrowCircleDown,
  FaUserCircle,
  FaTimes,
  FaPhoneSquareAlt,
} from "react-icons/fa";
import {
  BsFillArrowUpCircleFill,
  BsArrowDownCircleFill,
  BsChevronDown,
} from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { GiBridge } from "react-icons/gi";
import { MdSpeakerNotes } from "react-icons/md";
import Bike from "../img/Bike.svg";
import Union from "../img/Union.svg";
import van from "../img/van.svg";
// import ClickButton from "../Components/ClickButton"

import { Link } from "react-router-dom";

const SameDay = () => {
  const [show, setShow] = useState(false);
  const [bikeisActive, setBikeIsActive] = useState(false);
  const [showNote, setShowNote] = useState(false);
  const [VanisActive, setVanIsActive] = useState(false);
  const [button1isActive, setButton1IsActive] = useState(false);
  const [button2isActive, setButton2IsActive] = useState(false);
  const [button3isActive, setButton3IsActive] = useState(false);

  const handleShowClick = () => {
    setShow(!show);
  };

  const handleBikeClick = () => {
    setBikeIsActive(true);
    setVanIsActive(false);
  };

  const handleVanClick = () => {
    setVanIsActive(true);
    setBikeIsActive(false);
  };

  const handleButton1Click = () => {
    setButton1IsActive(true);
    setButton2IsActive(false);
    setButton3IsActive(false);
  };
  const handleButton2Click = () => {
    setButton1IsActive(false);
    setButton2IsActive(true);
    setButton3IsActive(false);
  };
  const handleButton3Click = () => {
    setButton1IsActive(false);
    setButton2IsActive(false);
    setButton3IsActive(true);
  };

  const [showTextInput, setShowTextInput] = useState(null);
  const [showVehicleTypes, setShowVehicleTypes] = useState(false);

  const handleText1Click = () => {
    handleButton1Click();
    setShowTextInput(1);
  };

  const handleText2Click = () => {
    handleButton2Click();
    setShowTextInput(2);
  };

  const handleText3Click = () => {
    handleButton3Click();
    setShowTextInput(3);
  };

  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  return (
    <section>
      <div className=" md:p-6 ">
        <div className="flex mt-4 space-x-8/12">
          <Link to="/request">
            <button className="flex gap-x-2 ">
              <BiArrowBack className="text-deepPurple  text-2xl" />
              <h1 className="text-black font-bold">Request</h1>
            </button>
          </Link>

          <AiOutlineInfoCircle className="text-deepPurple font-bold text-4xl" />
        </div>

        <div className="bg-white  w-full md:w-40 p-4 rounded-lg mt-6">
          <div className="flex  space-x-2">
            <h2>Same Day</h2>
            <IoIosArrowDown />
          </div>

          <div className="flex w-full space-x-1 md:text-2xl md:space-x-2 ">
            <div>
              <button
                onClick={handleText1Click}
                className={`flex  gap-x-2  p-2 rounded-lg  ${
                  button1isActive
                    ? "bg-white flex gap-x-2 text-deepPurple  border-solid border-2 border-deepPurple p-2 rounded-lg"
                    : "bg-imitate text-grey"
                } `}
              >
                <HiUserCircle className="mt-1" />
                <span>I am the sender</span>
              </button>
            </div>

            <button
              onClick={handleText2Click}
              className={`flex gap-x-2  p-2 rounded-lg ${
                button2isActive
                  ? "bg-white flex gap-x-2 text-deepPurple border-solid border-2 border-deepPurple p-2 rounded-lg"
                  : "bg-imitate text-grey"
              } `}
            >
              <HiUserCircle className="mt-1" />
              <span>I am the reciever</span>
            </button>

            <button
              onClick={handleText3Click}
              className={`flex gap-x-2  p-2 rounded-lg ${
                button3isActive
                  ? "bg-white flex gap-x-2 text-deepPurple border-solid border-2 border-deepPurple p-2 rounded-lg"
                  : "bg-imitate text-grey"
              } `}
            >
              <HiUserCircle className="mt-1" />
              <span>Booking for guest</span>
            </button>
          </div>

          {showTextInput === 1 && (
            <div className=" mt-6">
              <div>
                <form>
                  <div className=" flex  md:w-4/5 md:m-auto  border border-borderColor px-2 md:px-4  py-2 rounded-lg p-1  ">
                    <BsFillArrowUpCircleFill className="  text-whiteYellow text-xl mt-1" />
                    <input
                      className="w-full focus:outline-none bg-transparent text-center"
                      type="text"
                      placeholder="Adam Rawane Ikoyi Estate, Ikoyi"
                    />
                    <FaTimes className="text-grey mt-1" />
                  </div>

                  <div className="w-full  md:w-4/5 m-auto space-y-6  border border-borderColor px-2 md:px-4 py-2 rounded-lg  mt-4 ">
                    <div className="flex relative">
                      <div className="flex gap-x-2">
                        <BsArrowDownCircleFill className="text-xl text-deepPurple mt-1" />
                        <input
                          className="w-full focus:outline-none bg-transparent "
                          type="text"
                          placeholder="where are we delivering to?"
                        />
                      </div>
                      <FaTimes className="text-grey mt-1 absolute right-0" />
                    </div>

                    <div className="flex relative">
                      <div className="flex gap-x-2">
                        <FaUserCircle className="text-deepPurple text-xl mt-1" />
                        <input
                          className="w-full focus:outline-none  bg-transparent "
                          type="text"
                          placeholder="Rosheed Aderanmisie"
                        />
                      </div>
                      <FaTimes className="text-grey mt-1 absolute right-0" />
                    </div>

                    <div className=" space-x-2 flex items-start  ">
                      <div className="flex gap-x-2">
                        <FaPhoneSquareAlt className="text-deepPurple text-xl " />
                        <input
                          className=" w-10 focus:outline-none  bg-transparent md:-ml-1 placeholder:text-grey"
                          type="phonenumber"
                          placeholder="+234"
                        />
                        <BsChevronDown className="text-grey mt-1 " />
                      </div>

                      <div className="flex border-l border-grey w-55 relative">
                        <input
                          className="w-full focus:outline-none pl-2  bg-transparent "
                          type="text"
                          placeholder="7087077113"
                        />
                        <FaTimes className="text-grey mt-1 absolute right-0 " />
                      </div>
                    </div>

                    <div className="flex relative">
                      <div className="flex gap-x-2">
                        <GiBridge className="text-deepPurple text-xl" />
                        <input
                          className="w-full focus:outline-none bg-transparent "
                          type="text"
                          placeholder="New pair of adidas shoes"
                        />
                      </div>
                      <FaTimes className="text-grey mt-1 absolute right-0" />
                    </div>
                  </div>
                </form>

                <div className="md:w-4/5 m-auto ">
                  <div className=" pt-4">
                    <button
                      onClick={() => setShowVehicleTypes(!showVehicleTypes)}
                      className="flex space-x-2 relative w-full"
                    >
                      <img src={Union} alt=" " />
                      <span className="text-grey">Select Behicle Category</span>
                      <IoIosArrowDown className="text-grey mt-1 absolute right-4 " />
                    </button>
                  </div>
                  {showVehicleTypes && (
                    <div className="md:w-75  ">
                      <button
                        onClick={handleBikeClick}
                        className={`flex w-full relative mt-4 px-4 py-6 rounded-lg ${
                          bikeisActive
                            ? "bg-white flex text-deepPurple border-solid border-2 border-deepPurple p-2 rounded-lg"
                            : "bg-imitate text-grey"
                        } `}
                      >
                        <div>
                          <div className="flex space-x-2 ">
                            <p>Bike</p>
                            <AiOutlineInfoCircle className="mt-1" />
                          </div>
                          <span>Price N2,240</span>
                        </div>
                        <img
                          src={Bike}
                          alt=""
                          className=" absolute right-0 top-1"
                        />
                      </button>

                      <button
                        onClick={handleVanClick}
                        className={`flex w-full relative mt-4 px-4 py-6 rounded-lg ${
                          VanisActive
                            ? "bg-white flex text-deepPurple border-solid border-2 border-deepPurple p-2 rounded-lg"
                            : "bg-imitate text-grey"
                        } `}
                      >
                        <div>
                          <div className="flex space-x-2">
                            <p>Van</p>
                            <AiOutlineInfoCircle className="mt-1" />
                          </div>
                          <span>Price N4,300</span>
                        </div>
                        <img
                          src={van}
                          alt=""
                          className=" absolute right-0 top-1"
                        />
                      </button>
                    </div>
                  )}

                  <div>
                    <div className="flex text-grey space-x-2 mt-4">
                      <button
                        onClick={handleShowClick}
                        className="flex relative w-full"
                      >
                        <BiMessageDetail className="mt-1 text-4xl w-8" />
                        <p>Leave a note </p>
                        <IoIosArrowDown className="text-grey mt-1 absolute right-4" />
                      </button>
                    </div>

                    {show && (
                      <div>
                        <input
                          onFocus={handleInputFocus}
                          className={`flex w-full md:space-x-44 border-2 border-borderColor h-18 focus:none focus:outline-none  mt-4 px-4 py-2 rounded-lg ${
                            isFocused
                              ? "bg-white flex text-deepPurple  border-2 border-deepPurple p-2 rounded-lg"
                              : "bg-tranparent text-grey"
                          } `}
                          placeholder="Write a message"
                        />
                      </div>
                    )}

                   
                  </div>

                  <div>
                    <div className="flex text-grey space-x-2 mt-4">
                      <button
                        onClick={() => setShowNote(!showNote)}
                        className="flex space-x-2 relative w-full"
                      >
                        <MdSpeakerNotes className="mt-1 text-4xl w-8" />
                        <p>Recieve cash for me </p>
                        <IoIosArrowDown className="text-grey mt-1 absolute right-4" />
                      </button>
                    </div>

                    {showNote && (
                      <div className="w-full">
                        <input
                          className="w-full text-center border-2 text-lg font-bold border-borderColor p-2 rounded-lg bg-transparent focus:outline-none  focus:none placeholder-deepPurple mt-4"
                          placeholder="0.00"
                        />
                      </div>
                    )}

                    <div>
                      <button className=" w-full py-2 px-4 text-center items-center justify-center mt-2 flex bg-deepPurple text-white rounded-lg " >
                        Request Spatch 
                        <RiArrowRightSLine/>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {showTextInput === 2 && (
            <div className=" mt-6">
            <div>
              <form>
                <div className=" flex  md:w-4/5 md:m-auto  border border-borderColor px-2 md:px-4  py-2 rounded-lg p-1  ">
                  <BsFillArrowUpCircleFill className="   text-deepPurple  text-xl mt-1" />
                  <input
                    className="w-full focus:outline-none bg-transparent text-center"
                    type="text"
                    placeholder="Adam Rawane Ikoyi Estate, Ikoyi"
                  />
                  <FaTimes className="text-grey mt-1" />
                </div>

                <div className="w-full md:w-4/5 m-auto space-y-6  border border-borderColor px-2 md:px-4 py-2 rounded-lg  mt-4 ">
                  <div className="flex relative">
                    <div className="flex gap-x-2">
                      <BsArrowDownCircleFill className="text-xl text-whiteYellow mt-1" />
                      <input
                        className="w-full focus:outline-none bg-transparent "
                        type="text"
                        placeholder="where are we delivering to?"
                      />
                    </div>
                    <FaTimes className="text-grey mt-1 absolute right-0" />
                  </div>

                  <div className="flex relative">
                    <div className="flex gap-x-2">
                      <FaUserCircle className="text-whiteYellow text-xl mt-1" />
                      <input
                        className="w-full focus:outline-none  bg-transparent "
                        type="text"
                        placeholder="Rosheed Aderanmisie"
                      />
                    </div>
                    <FaTimes className="text-grey mt-1 absolute right-0" />
                  </div>

                  <div className=" space-x-2 flex items-start  ">
                    <div className="flex gap-x-2">
                      <FaPhoneSquareAlt className="text-whiteYellow text-xl " />
                      <input
                        className=" w-10 focus:outline-none  bg-transparent md:-ml-1 placeholder:text-grey"
                        type="phonenumber"
                        placeholder="+234"
                      />
                      <BsChevronDown className="text-grey mt-1 " />
                    </div>

                    <div className="flex border-l border-grey w-55 relative">
                      <input
                        className="w-full focus:outline-none pl-2  bg-transparent "
                        type="text"
                        placeholder="7087077113"
                      />
                      <FaTimes className="text-grey mt-1 absolute right-0 " />
                    </div>
                  </div>

                  <div className="flex relative">
                    <div className="flex gap-x-2">
                      <GiBridge className="text-deepPurple text-xl" />
                      <input
                        className="w-full focus:outline-none bg-transparent "
                        type="text"
                        placeholder="New pair of adidas shoes"
                      />
                    </div>
                    <FaTimes className="text-grey mt-1 absolute right-0" />
                  </div>
                </div>
              </form>

              <div className="md:w-4/5 m-auto ">
                <div className=" pt-4">
                  <button
                    onClick={() => setShowVehicleTypes(!showVehicleTypes)}
                    className="flex space-x-2 relative w-full"
                  >
                    <img src={Union} alt=" " />
                    <span className="text-grey">Select Behicle Category</span>
                    <IoIosArrowDown className="text-grey mt-1 absolute right-4 " />
                  </button>
                </div>
                {showVehicleTypes && (
                  <div className="md:w-75  ">
                    <button
                      onClick={handleBikeClick}
                      className={`flex w-full relative mt-4 px-4 py-6 rounded-lg ${
                        bikeisActive
                          ? "bg-white flex text-deepPurple border-solid border-2 border-deepPurple p-2 rounded-lg"
                          : "bg-imitate text-grey"
                      } `}
                    >
                      <div>
                        <div className="flex space-x-2 ">
                          <p>Bike</p>
                          <AiOutlineInfoCircle className="mt-1" />
                        </div>
                        <span>Price N2,240</span>
                      </div>
                      <img
                        src={Bike}
                        alt=""
                        className=" absolute right-0 top-1"
                      />
                    </button>

                    <button
                      onClick={handleVanClick}
                      className={`flex w-full relative mt-4 px-4 py-6 rounded-lg ${
                        VanisActive
                          ? "bg-white flex text-deepPurple border-solid border-2 border-deepPurple p-2 rounded-lg"
                          : "bg-imitate text-grey"
                      } `}
                    >
                      <div>
                        <div className="flex space-x-2">
                          <p>Van</p>
                          <AiOutlineInfoCircle className="mt-1" />
                        </div>
                        <span>Price N4,300</span>
                      </div>
                      <img
                        src={van}
                        alt=""
                        className=" absolute right-0 top-1"
                      />
                    </button>
                  </div>
                )}

                <div>
                  <div className="flex text-grey space-x-2 mt-4">
                    <button
                      onClick={handleShowClick}
                      className="flex relative w-full"
                    >
                      <BiMessageDetail className="mt-1 text-4xl w-8" />
                      <p>Leave a note </p>
                      <IoIosArrowDown className="text-grey mt-1 absolute right-4" />
                    </button>
                  </div>

                  {show && (
                    <div>
                      <input
                        onFocus={handleInputFocus}
                        className={`flex w-full md:space-x-44 border-2 border-borderColor h-18 focus:none focus:outline-none  mt-4 px-4 py-2 rounded-lg ${
                          isFocused
                            ? "bg-white flex text-deepPurple  border-2 border-deepPurple p-2 rounded-lg"
                            : "bg-tranparent text-grey"
                        } `}
                        placeholder="Write a message"
                      />
                    </div>
                  )}

                 
                </div>

                <div>
                  <div className="flex text-grey space-x-2 mt-4">
                    <button
                      onClick={() => setShowNote(!showNote)}
                      className="flex space-x-2 relative w-full"
                    >
                      <MdSpeakerNotes className="mt-1 text-4xl w-8" />
                      <p>Recieve cash for me </p>
                      <IoIosArrowDown className="text-grey mt-1 absolute right-4" />
                    </button>
                  </div>

                  {showNote && (
                    <div className="w-full">
                      <input
                        className="w-full text-center border-2 text-lg font-bold border-borderColor p-2 rounded-lg bg-transparent focus:outline-none  focus:none placeholder-deepPurple mt-4"
                        placeholder="0.00"
                      />
                    </div>
                  )}

                  <div>
                    <button className=" w-full py-2 px-4 text-center items-center justify-center mt-2 flex bg-deepPurple text-white rounded-lg " >
                      Request Spatch 
                      <RiArrowRightSLine/>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          )}

          {showTextInput === 3 && (
            <div>
              <h1>This is the third i did</h1>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SameDay;
