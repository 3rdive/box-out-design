import React, { useState } from 'react'

import { IoIosArrowDown, IoIosArrowUp  } from "react-icons/io";


const ClickButton = ({className, classStyle, text,  title, handleOnClick}) => {
    const [show, setShow] = useState(false)
  return (
    <>
      <button  onClick={handleOnClick} >
                                <div className={className}>
                                <i class={classStyle} />
                                <p>{title}</p>
                                </div>
                                {show? (
                                    <IoIosArrowDown/>
                                    ):(
                                        <IoIosArrowUp/>
                                )};
                                </button>

    </>
  )
}

export default ClickButton