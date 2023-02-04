import React from 'react'
import{ BrowserRouter as Router,  Routes, Route } from "react-router-dom"
import Request from './Request'
import History from "./History"
import Account from "./Account"
import Logout from "./Logout"
import Contact from "./Contact"
import Wallet from './Wallet'


const NavPage = () => {
  return (
    <section>

     <Routes>
     <Route path="*" element={<Request/>} />
      <Route path="/wallet" element={< Wallet />} />
      <Route path="/history" element={<History/>} />
      <Route path="/account" element={<Account/>} />
      <Route path="/logout" element={<Logout/>} />
      <Route path="/contact" element={<Contact/>} />
     </Routes>
    </section>
  )
}

export default NavPage