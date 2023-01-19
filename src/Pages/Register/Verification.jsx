import React from 'react'
import LogoWhite from "../../img/LogoWhite.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const Verification = () => {
    
  return (
    <section className="bg-darkPurple rounded md:w-128 mx-auto leading-7 text-white my-8  p-3 h-128 text-center">
                <img src={LogoWhite} alt="" />
                <div className="text-4xl text-center pt-16">
                    <FontAwesomeIcon className='text-green' icon={faCircleCheck}/>
                <h1 className="mt-2 ">Check email for verification</h1>
                <p className="md:text-sm sm:text-lg  ">
          We sent a verification link to your email</p>
                </div>
    </section>
  )
}

export default Verification