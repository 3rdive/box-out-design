import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';


export const SubBar = ({name, icon, link}) => {
  return (
    
                <div className=''>
                    
                <ul className='flex flex-col gap-y-2 '>
                <li className='space-x-2 hover:text-deepPurple '>
                <FontAwesomeIcon icon={icon}  className="text-grey "/>
                    <a>{name}</a>
                    <Link to="/wallet" />
                </li>
                </ul>
                </div>
   
                
   
  )
}
