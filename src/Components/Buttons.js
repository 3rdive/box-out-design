import React from 'react'
import { Link } from "react-router-dom";


export const Buttons = ({value}) => {
  return (
    <div className="btn mt-8  w-96 m-auto  ">
    <Link to="/verification">
      <button className="bg-darkPurple rounded-lg text-white py-2 px-20 w-full" type="submit"  value={value}>
      </button>
    </Link>
  </div>
  )
}
