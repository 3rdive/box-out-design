import{ BrowserRouter as Router,  Routes, Route } from "react-router-dom"
import "./app.css"
import Home from "./Pages/Homepage/Home";
import EmailSignin from "./Pages/Sign-in/EmailSignin";
import PhoneSignin from "./Pages/Sign-in/PhoneSignin";
import Register from "./Pages/Register/Register";
import Main from "./Pages/Main/Main";
import Verification from "./Pages/Register/Verification";
import RegisterEmail from "./Pages/Register/RegisterEmail";
import RegisterPhone from "./Pages/Register/RegisterPhone";
import PhoneConfirmation from "./Pages/Register/PhoneConfirmation";
import Welcome from "./Pages/Register/Welcome";
import MainPage from "./Dashboard/MainPage";
import Wallet from "./Dashboard/Wallet";
import Request from "./Dashboard/Request";
import Contact from "./Dashboard/Contact";
import Logout from "./Dashboard/Logout";
import Account from "./Dashboard/Account";
import History from "./Dashboard/History";

function App() {
  return (
    <>
    
   <Router>
    <Routes>
      <Route path="*" element={<MainPage/>} />
      {/* <Route path="/" element={<Main/>} /> */}
      <Route path="/home" element={<Home/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/registeremail" element={<RegisterEmail/>} />
      <Route path="/registerphone" element={<RegisterPhone/>} />
      <Route path="/phoneconfirmation" element={<PhoneConfirmation/>} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/verification" element={<Verification/>} />
      <Route path="/emailsignin" element={<EmailSignin/>} />
      <Route path="/phonesignin" element={<PhoneSignin/>} />
    </Routes>
   </Router>

    </>
  );
}

export default App;
