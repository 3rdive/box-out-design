import React  from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { BiLock, BiLockAlt } from "react-icons/bi";
import Face from "../img/Face.svg";
import flag from "../img/flag.svg";

const Account = () => {
  // const [value, setValue] = useState('');
  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };
  return (
    <section>
      <div className="p-4 md:pt-0 md:w-full h-full">
        <div className="flex space-x-8/12">
          <Link to="/request">
            <button className="flex gap-x-2 ">
              <BiArrowBack className="text-deepPurple  text-2xl" />
              <h1 className="text-black font-bold">Account</h1>
            </button>
          </Link>

          <AiOutlineInfoCircle className="text-deepPurple font-bold text-2xl" />
        </div>

        <div className="md:w-40 md:m-auto">
          <div>
            <h2 className="font-black pt-4">Personal Information</h2>
            <p className="text-sm">
              Add your details. We recomment uploading a photo.
            </p>
            <p className="text-sm">You will be able to change it later.</p>
          </div>

          <div className="flex space-x-2 mt-6">
            <img src={Face} alt="" className="w-14 " />
            <a href="#" className="text-deepPurple m-4">
              Change Profile Image
            </a>
          </div>

          <form>
            <div className="w-32 mt-6">
              <div className="flex space-x-4">
                <div className=" w-36 border-2 border-borderColor rounded-lg p-1">
                  <label className="block text-grey md:text-sm">
                    First Name
                  </label>
                  <div className="flex space-x-14">
                    <input
                      className="bg-transparent w-12 font-bold"
                      type="text"
                      value="Fisayo"
                    />
                    <FaRegUser className="-ml-4 text-grey" />
                  </div>
                </div>

                <div className="w-36 border-2 border-borderColor rounded-lg p-1">
                  <label className="block text-grey md:text-sm">
                    Last Name
                  </label>
                  <div className="flex space-x-14">
                    <input
                      className="bg-transparent w-14 font-bold"
                      type="text"
                      value="Ahmad"
                    />
                    <FaRegUser className="-ml-4 text-grey" />
                  </div>
                </div>
              </div>
            </div>

            <div className="relative w-55 border border-borderColor px-4 py-2 rounded-lg p-1 mt-4 ">
              <label className="block text-grey md:text-sm">Phone Number</label>
              <input
                className="w-full focus:outline-none bg-transparent"
                type="text"
                value="+234 708 707 7113"
              />
              <div className="absolute top-0 right-0 flex items-center px-3 py-2">
                <img src={flag} alt="" className="mt-4" />
              </div>
            </div>

            <div className="relative w-55 border border-borderColor px-4 py-2 rounded-lg p-1 mt-4 ">
              <label className="block text-grey md:text-sm">Email</label>
              <input
                className="w-full focus:outline-none bg-transparent"
                type="text"
                value="fisayoahmad@gmail.com"
              />
              <div className="absolute top-0 right-0 flex items-center px-3 py-2">
                <GrMail className="mt-4 text-grey" />
              </div>
            </div>

            <div className="relative w-55 border border-borderColor px-4 py-2 rounded-lg p-1 mt-4 ">
              <label className="block text-grey md:text-sm">
                Change Password
              </label>
              <input
                className="w-full focus:outline-none bg-transparent"
                type="text"
                value="*************************"
              />
              <div className="absolute top-0 right-0 flex items-center px-3 py-2">
                <BiLock className="mt-4 text-grey text-xl" />
              </div>
            </div>
          </form>

          <div className="mt-4">
            <h2 className="font-black text-2xl">Loyalty Program</h2>
            <p className="md:text-sm">If you have a loyalty add the code</p>

            <div className="relative w-55 border border-borderColor px-4 py-2 rounded-lg p-1 mt-4 ">
              <input
                className="w-full focus:outline-none bg-transparent"
                type="text"
                placeholder="code"
              />
              <div className="absolute top-0 right-0 flex items-center px-3 py-2">
                <BiLockAlt className=" text-grey text-xl" />
              </div>
            </div>
            <div>
              <button className="bg-deepPurple text-white text-center px-6 py-4 w-55 mt-2 rounded-lg ">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Account;
