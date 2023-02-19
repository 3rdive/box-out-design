import React from 'react'
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { FiArrowRight} from "react-icons/fi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { CiCircleMinus } from "react-icons/ci";
import { GoPrimitiveSquare } from "react-icons/go";
import { BsFillArrowUpCircleFill, BsFillArrowDownCircleFill } from "react-icons/bs";
import Bike from "../img/Bike.svg"

const History = () => {
  return (
    <section>
            <div className="p-4  md:w-full h-screen">
            <div className="flex space-x-8/12">
          <Link to="/request">
            <button className="flex gap-x-2 ">
              <BiArrowBack className="text-deepPurple  text-2xl" />
              <h1 className="text-black font-bold">History</h1>
            </button>
          </Link>

          <AiOutlineInfoCircle className="text-deepPurple font-bold text-2xl" />
        </div>

        <div className="md:w-40 md:m-auto ">
          <h1 className='mt-12 md:mt-0 font-black'>These are your order history</h1>
          <span className='text-base'>Confirm your current password</span>

          <div className='relative w-full border-2 border-borderColor px-4 py-2 mt-6'>
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
                <div className='md:w-55 pb-4 border-b-4 border-borderColor mt-1'>
                  <span className='text-base text-yellow font-bold'>Picked from</span>
                  <h2 className='font-black'>Fisayo Ahmad</h2>
                  <p className='text-base'>Yar'Adua Penthouse. Victoria Island...</p>
                </div>

                <div className='md:w-55 pb-4  mt-1'>
                  <span className='text-deepPurple text-base font-bold'>Delivered to</span>
                  <h2 className='font-black'>Uche Osifejo</h2>
                  <p className='text-base'>Yar'Adua Penthouse. Victoria Island...</p>
                </div>
              </div>

              <img src={Bike} alt="" className='hidden md:block absolute  right-2 mt-10'  />
{/* 400098 */}
              </div>

            </div>

            <div className='flex border-t-4 border-borderColor '>
                <Link to="/historyy">
              <div className='flex p-1'>
                <span className='text-base text-deepPurple font-black'>View receipt detail</span>
                <FiArrowRight className="text-deepPurple mt-0.5 text-2xl" />
              </div>
                </Link>

              <CiCircleMinus className='hidden md:block absolute  right-2 mt-4' />
            </div>

          </div>

          <div className=''>
          <div className='flex text-base p-2 md:p-4 md:w-40 '>
              <span className='text-sm' >20th August 2021 12:32pm</span>
              <span className='text-sm  absolute right-8 md:right-80   '>Surulere, Lagos</span>
            </div>

            <div className='flex pb-2 border-b-4 px-2  border-borderColor md:w-40  md:-mt-4'>
              <h2 className='font-black text-xl'>NGN 00.00</h2>
              <p className='text-red text-base ml-2 mt-0.5 font-bold'>Cancelled</p>
              <div className='flex absolute  right-8 md:right-80 '>
              <span className='text-base'>Card.4399</span>
              <GoPrimitiveSquare className='text-deepGreen mt-0.5'/>
              </div>
            </div>
          </div>

          <div className=''>
          <div className='flex text-base p-2 md:p-4 md:w-40 '>
              <span className='text-sm md:-ml-2' >20th August 2021 12:32pm</span>
              <span className='text-sm  absolute right-8 md:right-80   '>Surulere, Lagos</span>
            </div>

            <div className='flex pb-2 border-b-4 px-2  border-borderColor md:w-40  md:-mt-4'>
              <h2 className='font-black text-xl'>NGN 2,800.00</h2>
              <div className='flex absolute  right-8 md:right-80 '>
              <span className='text-base'>Card.4399</span>
              <GoPrimitiveSquare className='text-deepGreen mt-0.5'/>
              </div>
            </div>
          </div>
          
          <div className=''>
          <div className='flex text-base p-2 md:p-4 md:w-40 '>
              <span className='text-sm md:-ml-2' >20th August 2021 12:32pm</span>
              <span className='text-sm  absolute right-8 md:right-80   '>Surulere, Lagos</span>
            </div>

            <div className='flex pb-2 border-b-4 px-2  border-borderColor md:w-40  md:-mt-4'>
              <h2 className='font-black text-xl'>NGN 2,800.00</h2>
              <div className='flex absolute  right-8 md:right-80 '>
              <span className='text-base'>Card.4399</span>
              <GoPrimitiveSquare className='text-deepGreen mt-0.5'/>
              </div>
            </div>
          </div>
        
        
        </div>

        

            </div>

    </section>
  )
}

export default History