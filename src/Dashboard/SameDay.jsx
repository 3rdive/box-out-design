import React, { useState } from 'react'
import { BiArrowBack } from "react-icons/bi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { HiUserCircle } from "react-icons/hi";
import ClickButton from '../Components/ClickButton';
import { IoIosArrowDown } from "react-icons/io";
import { NavLink } from "react-router-dom";

import { Link } from "react-router-dom"


const SameDay = () => {
    const [button1isActive, setButton1IsActive] = useState(false)
    const [button2isActive, setButton2IsActive] = useState(false)
    const [button3isActive, setButton3IsActive] = useState(false)

    const handleButton1Click = () => {
        setButton1IsActive(true);
        setButton2IsActive(false);
        setButton3IsActive(false);
    }
    const handleButton2Click = () => {
        setButton1IsActive(false)
        setButton2IsActive(true)
        setButton3IsActive(false)
    }
    const handleButton3Click = () => {
        setButton1IsActive(false)
        setButton2IsActive(false)
        setButton3IsActive(true)
    }

    const [showTextInput, setShowTextInput] = useState(false)

    const handleButtonClick = () =>{
        handleButton1Click();
        setShowTextInput(!showTextInput);
    };

    // const activeLink= "bg-white flex gap-x-2 text-purple border-solid border-2 border-deepPurple p-2 rounded-lg"
    // const normalLink = "flex gap-x-2 bg-imitate p-2 rounded-lg "
  return (
    <section>
        <div className=' p-6' >

            <div className='flex space-x-8/12'>
            <Link to="/request">
            <button className='flex gap-x-2 '>
                <BiArrowBack className='text-deepPurple  text-2xl' />
                <h1 className='text-black font-bold' >Request</h1>
            </button>
            </Link>

                 <AiOutlineInfoCircle className="text-deepPurple font-bold text-2xl" />

            </div>

            <div className='bg-white w-40 p-4 rounded-lg mt-6'>

                <div className='flex space-x-2'>
                <h2>Same Day</h2>
                    <IoIosArrowDown/>
                </div>

                
                <div className=' flex space-x-2' >
                    <div>

                    <button onClick = {handleButtonClick} className={`flex gap-x-2  p-2 rounded-lg ${button1isActive?
                     "bg-white flex gap-x-2 text-deepPurple border-solid border-2 border-deepPurple p-2 rounded-lg" : "bg-imitate text-grey"} `}
                     >

                        <HiUserCircle className='mt-1'/>
                        <span>I am the sender</span>
                    </button>

                    {showTextInput && (<div >
                            <h1>This is the first i did</h1>
                        </div>
                    )}

                    </div>

                    <button className={`flex gap-x-2  p-2 rounded-lg ${button2isActive? 
                     "bg-white flex gap-x-2 text-deepPurple border-solid border-2 border-deepPurple p-2 rounded-lg" : "bg-imitate text-grey" } `}
                     onClick = {handleButton2Click}>

                        <HiUserCircle className='mt-1'/>
                        <span>I am the reciever</span>
                    </button>

                    <button className={`flex gap-x-2  p-2 rounded-lg ${button3isActive? 
                     "bg-white flex gap-x-2 text-deepPurple border-solid border-2 border-deepPurple p-2 rounded-lg" : "bg-imitate text-grey"} `}
                     onClick = {handleButton3Click}>

                        <HiUserCircle className='mt-1'/>
                        <span>Booking for guest</span>
                    </button>

                    
                </div>
            </div>
        </div>

    </section>
  )
}

export default SameDay