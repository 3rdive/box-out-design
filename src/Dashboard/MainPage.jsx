import React, { useState } from "react";
import NavPage from "./NavPage";
import SideBarr from "./SideBarr";
import Face from "../img/Face.svg";
import { NavLink } from "react-router-dom";
import { SidebarData } from "../Components/data/SidebarData";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function MainPage() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <section className="">
      <div className=" hidden md:grid grid-cols-12 ml-10 mt-2 rounded-bl-lg ">
        <div className="col-span-4 h-screen pl-2 md:col-span-2">
          <SideBarr />
          <div className="logo"></div>
        </div>

        <div className="md:col-span-9  bg-whiteGrey pl-2 rounded-r-lg md:col-span-9 ">
          <NavPage className="h-fit" />
        </div>
      </div>

      {/* Small Screen */}

      <div className="block md:hidden  ">
        <div className="w-90 h-fit m-auto p-6 mt-2 bg-darkPurple text-white rounded-xl">
          <div onClick={handleNav} className="block md:hidden">
            {nav ? (
              <AiOutlineClose className="text-white text-xl font-bold" />
            ) : (
              <AiOutlineMenu className="text-white text-xl font-bold" />
            )}
          </div>

          <div className="block md:hidden  left-0 w-full text-grey absolute">
            <div className=" ">
              {nav &&
                SidebarData.map((item, index) => {
                  return (
                    <div key={index} className="">
                      <NavLink
                        to={item.path}
                        className="flex justify-start bg-transparent items-center text-lg font-bold pl-4 w-full gap-x-2 space-x-1 space-y-4 py-6 bg-white text-deepPurple"
                      >
                        <span className="mt-4">{item.icon}</span>
                        <span>{item.title}</span>
                      </NavLink>
                    </div>
                  );
                })}
            </div>
          </div>

          <h1 className="text-sm font-bold mt-8">Welcome,</h1>
          <div className="flex space-x-20">
            <h2 className="text-4xl font-bold">Fisayo</h2>
            <img className="w-10 mt-2" src={Face} alt="" />
          </div>
        </div>

        <div className="md:hidden w-90  m-auto ">
          <NavPage />
        </div>
      </div>
    </section>
  );
}

export default MainPage;
