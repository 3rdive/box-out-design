import React from 'react'
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { GoPrimitiveSquare } from "react-icons/go";
import { BsFillArrowUpCircleFill, BsFillArrowDownCircleFill } from "react-icons/bs";
import FillC from "../img/FillC.svg"
import Hbox from "../img/Hbox.svg"
import Bike from "../img/Bike.svg"


function Historyy() {
  return (
    <section className='h-fit'>
        <div className="p-4  md:w-full h-screen">
        <div className="flex space-x-8/12">
          <Link to="/history">
            <button className="flex gap-x-2 ">
              <BiArrowBack className="text-deepPurple  text-2xl" />
              <h1 className="text-black font-bold">#234ANMQ</h1>
            </button>
          </Link>

          <AiOutlineInfoCircle className="text-deepPurple font-bold text-2xl" />
        </div>

             <div className="md:w-40 md:m-auto bg-boxColor p-6">
            <div className='pb-2'>
                <img src={FillC} alt="" className="" />
            </div>

            <span className=' text-sm md:text-base font-bold '>Hi Fisayo,</span>
            <div className='flex '>
              <div className='pt-2'>
                <p className='font-black'>Thank you For</p>
                <p className='font-black'>Chosing <span className='text-deepPurple font-black'>Spatch</span></p>
              </div>

              <div className='md:w-96 absolute right-12 md:right-0'>
                <img src={Hbox} alt='' className='' />
              </div>
            </div>
        </div>

        <div className='md:w-40 md:m-auto'>
        <div className='relative w-full px-4 py-2 mt-6'>
            <div className='flex text-base'>
              <span className='text-sm' >20th August 2021</span>
              <span className='text-sm absolute  right-2 '>Surulere, Lagos</span>
            </div>

            <div className='flex pb-4 border-b-4 border-borderColor mt-1'>
              <h2 className='font-black text-xl'>NGN 2,800.00</h2>
              <div className='flex absolute  right-2 '>
              <span className='text-base'>Card.4399</span>
              <GoPrimitiveSquare className='text-deepGreen mt-0.5'/>
              </div>
            </div>
            </div>

            <div className='relative w-full px-4 py-2 '>
            <div className='flex '>
              <span className='text-sm md:text-base ' >20th August 2021</span>
              <span className='text-sm md:text-base  absolute right-32  md:right-64 ' >Pick up</span>
              <span className='text-sm md:text-base absolute  right-2 '>Surulere, Lagos</span>
            </div>
            
            <div className='flex pb-4 border-b-4 border-borderColor mt-1'>
              <h2 className='font-black text-xl'>15.2km </h2>
              <h2 className='font-black text-xl absolute right-32 md:right-60 '>12:25pm </h2>
              <div className='flex absolute  right-2 '>
              <span className='text-base'>Card.4399</span>
              <GoPrimitiveSquare className='text-deepGreen mt-0.5'/>
              </div>
            </div>

            <div className='flex pb-4 border-b-4 border-borderColor mt-1'>
             <div className='flex '>
              <span className='text-sm md:text-base text-deepPurple font-bold' >Item</span>
              <span className='text-sm md:text-base  absolute right-20   text-deepPurple font-bold'>x5</span>
              <span className='text-sm md:text-base absolute  right-4 '>Bead</span>
            </div>
            </div>

            <div className='flex space-x-2'>
              <div className=''>
                <div>
                  <BsFillArrowUpCircleFill className='text-whiteYellow mt-2'/>
                  <div className='text-grey'>
                  <span className='text-4xl ml-1 block relative  '>.</span>
                  <span className='text-4xl ml-1 block relative -mt-4'>.</span>
                  <span className='text-4xl ml-1 block relative -mt-4'>.</span>
                  <span className='text-4xl ml-1 block relative -mt-4'>.</span>
                  <span className='text-4xl ml-1 block relative -mt-4'>.</span>
                  <span className='text-4xl ml-1 block relative -mt-4'>.</span>
                  </div>
                </div>
                  <BsFillArrowDownCircleFill className='mt-3 text-deepPurple  '/>
              </div>

              <div className='flex'>

              <div>
                <div className='w-full pb-4 border-b-4 border-borderColor mt-1'>
                  <span className='text-base text-yellow font-bold'>Picked from</span>
                  <h2 className='font-black'>Fisayo Ahmad</h2>
                  <p className='text-base'>Yar'Adua Penthouse. Victoria Island...</p>
                </div>

                <div className='w-full pb-4  mt-1'>
                  <span className='text-deepPurple text-base font-bold'>Delivered to</span>
                  <h2 className='font-black'>Uche Osifejo</h2>
                  <p className='text-base'>Yar'Adua Penthouse. Victoria Island...</p>
                </div>
              </div>

              <img src={Bike} alt="" className='hidden md:block absolute  right-2 mt-10'  />

              </div>

            </div>

            </div>

            {/* <div className='bg-deepPurple'>
              <div className=' pb-4 border-b-4 border-borderColor'>
            <img src={FillC} alt="" className="" />
              </div>

            </div> */}
        </div>
        </div>
    </section>
  )
}

export default Historyy