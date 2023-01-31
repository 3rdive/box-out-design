import React from 'react'
import Face from "../img/Face.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";




const Upnav = () => {
  return (
    <div className='md:-ml-2 '>
           <div className='bg-darkPurple md:block  p-4 text-white rounded-tl-lg' >
            <div>
                <img src={Face}  alt=""  />
            </div>
            <h1 className='text-2xl font-bold'>Fisayo Ahmad</h1>
            <p>View profile</p>
    </div>

    <div className='bg-deepPurple md:block p-4 text-white  '>
        <h2 className='text-sm'>Wallet Balance</h2>
        <div className='flex justify-between'>
        <p className='text-2xl font-bold'>N12,000</p>
        <FontAwesomeIcon icon={faCirclePlus}  className="text-yellow text-2xl"/>

        </div>
    </div>

    </div>
  )
}

export default Upnav