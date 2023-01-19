import{ BrowserRouter as Router,  Routes, Route } from "react-router-dom"
import "./app.css"
import Home from "./Pages/Homepage/Home";
import EmailSignin from "./Pages/Sign-in/EmailSignin";
import PhoneSignin from "./Pages/Sign-in/PhoneSignin";





function App() {
  return (
    <>
    
   <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/emailsignin" element={<EmailSignin/>} />
      <Route path="/phonesignin" element={<PhoneSignin/>} />
    </Routes>
   </Router>

    </>
  );
}

export default App;
