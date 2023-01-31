import React from 'react'
import NavPage from './NavPage'
import SideBarr from './SideBarr'
import Logo from "../img/Logo.svg"


function MainPage() {
  return (
    <section>
        <div className='grid grid-cols-12 ml-10 mt-2 rounded-bl-lg '>
            <div className='col-span-2 h-screen pl-2 '>
                <SideBarr/>
                <div className='logo'>
            <img src={Logo} alt="" />
            </div>
            </div>

            <div className='col-span-9 bg-whiteGrey h-screen pl-2 rounded-r-lg'>
                <NavPage/>
                
            </div>
           
        </div>
    </section>
  )
}

export default MainPage