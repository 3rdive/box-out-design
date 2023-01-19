import React from 'react'
import Logo from "../../img/Logo.svg"
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import { faArrowLeft} from '@fontawesome/fontawesome-free-solid'


const RegisterEmail = () => {
  return (
    <section className='bg-whiteGrey rounded-lg md:w-128 mx-auto my-8  p-3 h-128 text-center'>
      <img src={Logo} alt="" />
      {/* <FontAwesomeIcon icon={faArrowLeft} />  */}
      <i class="fa-solid fa-arrow-left"></i>
      <h1>Sign in to spatch</h1>
    </section>
  )
}

export default RegisterEmail