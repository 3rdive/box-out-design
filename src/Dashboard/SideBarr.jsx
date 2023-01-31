import React from 'react'
import { SidebarData } from '../Components/data/SidebarData'
import { NavLink } from 'react-router-dom'
import Upnav from './Upnav'

function SideBarr() {
    const activeLink ="flex justify-start items-center text-lg font-bold pl-4  h-14 w-full gap-x-2 space-x-1 space-y-4 text-grey hover:text-deepPurple"
    const normalLink ="flex justify-start items-center text-lg font-bold pl-4  h-14 w-full gap-x-2 space-x-1 space-y-4 text-grey hover:text-deepPurple"
  return (
    <section>
        <div className="">
            <div className="" >
            <Upnav />
            </div>
            
            {
                SidebarData.map((item, index) => {
                    return(
                        <div key={index}>
                            <NavLink to={item.path} className={({isActive}) => isActive? activeLink: normalLink }>
                                <span className='mt-4'>{item.icon}</span>
                                <span>{item.title}</span>
                            </NavLink>
                        </div>

                    )
                })
            }

            </div>
    </section>
  )
}

export default SideBarr