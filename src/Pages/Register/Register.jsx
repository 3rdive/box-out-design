import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import LogoWhite from "../../img/LogoWhite.svg";
import Logo from "../../img/Logo.svg"

const Register = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/", { replace: true });
  };
  return (
    <section className="bg-whiteGrey rounded-lg md:w-8/12 h-11/12 mx-auto my-8  p-3   text-center">
     <img src={Logo} alt="" />
     <div className=" w-64 m-auto flex flex-col mt-12 items-start ">
 <button onClick={handleClick}>
<FontAwesomeIcon
  className="text-darkPurple font-bold "
  icon={faArrowLeft}
/>
</button> 
       <h1 className="text-2xl mt-4 font-black">Glad you made it here.</h1>
       <div className="btn mt-4 flex items-center l">
         <Link to="/registeremail">
           <button className="bg-darkPurple rounded-lg text-white py-3.5 px-10 w-ful">
             Register With Email
           </button>
         </Link>
       </div>

       <div className="btn mt-2 flex items-center l">
     <Link to="/registerphone">
           <button className="bg-white border-2 border-grey-500 rounded-lg text-grey py-3.5 px-2 w-ful">
             Register With Phone Number
           </button>
         </Link>
       </div>
     </div>
   </section>

   );
};

export default Register;
