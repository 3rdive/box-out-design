import React from 'react'
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { AiOutlineInfoCircle } from "react-icons/ai";

const History = () => {
  return (
    <section>
            <div className="p-4 md:pt-0 md:w-full h-full">
            <div className="flex space-x-8/12">
          <Link to="/request">
            <button className="flex gap-x-2 ">
              <BiArrowBack className="text-deepPurple  text-2xl" />
              <h1 className="text-black font-bold">History</h1>
            </button>
          </Link>

          <AiOutlineInfoCircle className="text-deepPurple font-bold text-2xl" />
        </div>
            </div>

    </section>
  )
}

export default History