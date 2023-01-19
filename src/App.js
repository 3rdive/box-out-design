import{ BrowserRouter as Router,  Routes, Route } from "react-router-dom"
import "./app.css"
import Home from "./Pages/Homepage/Home";
import EmailSignin from "./Pages/Sign-in/EmailSignin";
import PhoneSignin from "./Pages/Sign-in/PhoneSignin";
import Register from "./Pages/Register/Register";
import Main from "./Pages/Main/Main";
import Verification from "./Pages/Register/Verification";

function App() {
  return (
    <>
    
   <Router>
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/verification" element={<Verification/>} />
      <Route path="/emailsignin" element={<EmailSignin/>} />
      <Route path="/phonesignin" element={<PhoneSignin/>} />
    </Routes>
   </Router>

    </>
  );
}

export default App;
