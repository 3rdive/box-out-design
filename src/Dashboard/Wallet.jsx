import React from 'react'
import { Link } from "react-router-dom"
import { BiArrowBack } from "react-icons/bi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { BsFillPlusCircleFill } from "react-icons/bs";


const Wallet = () => {
  return (
    <section className=''>
      <div className="p-4 md:w-full">
      <div className='flex space-x-8/12'>
            <Link to="/request">
            <button className='flex gap-x-2 '>
                <BiArrowBack className='text-deepPurple  text-2xl' />
                <h1 className='text-black font-bold' >Wallet</h1>
            </button>
            </Link>

                 <AiOutlineInfoCircle className="text-deepPurple font-bold text-2xl" />

            </div>

            <div className='mt-8'>
              <h2 className='text-xl font-bold' >Welcome to your wallet, Fisayo</h2>
              <span className='md:text-sm'>Add more money to your wallet and enjoy intuitive experience</span>
            </div>

            <div className='mt-8'>
              <span className='bg-bColor w-72 md:w-40 flex flex-col p-6 rounded-xl'>
                <span className='text-grey md:text-sm'>Balance</span>
                <h2 className='text-2xl font-black'>NGN 10,OOO</h2>
                <div className='pt-12'>
                <button className='flex bg-darkPurple rounded-full px-6 py-0.5  text-white'>
                  {/* <BsFillPlusCircleFill className='text-deepPurple w-12 absolute  '/> */}
                  <span className='ml-2 mt-1'>Add money</span>
                </button>

                </div>
              </span>
            </div>

            <div className='md:flex space-x-3 mt-4 '>
              <button className='w-72 bg-deepGreen rounded-lg text-white p-4'>
                <div className='flex  space-x-48 '>
                <h2>Visa</h2>
                <h2 className='text-xl font-bold'>Visa</h2>
                </div>

                <span className='flex pt-14'>.... 4399</span>
              </button>
             
              <button className='w-72 mt-4 md:mt-0 -ml-4 ml-0 py-4 md:py-0  bg-bColor rounded-lg text-grey '>
                <div className='items-center '>
                  <span><AiOutlinePlus className='m-auto' /></span>
                  <span>Add new card</span>
                </div>

              </button>
            </div>

            <button className=" hidden md:flex justify-self-end self-end w-20 mx-8/12 my-32">
          <BsFillPlusCircleFill className="text-deepPurple font-bold text-4xl" />
        </button>
      </div>
    </section>
  )
}

export default Wallet 