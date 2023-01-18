import{ BrowserRouter as Router,  Routes, Route } from "react-router-dom"
import "./app.css"
import Home from "./Pages/Homepage/Home";
import RegisterEmail from "./Pages/Register/RegisterEmail";
import RegisterPhone from "./Pages/Register/RegisterPhone";




function App() {
  return (
    <>
    
   <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/registeremail" element={<RegisterEmail/>} />
      <Route path="/registerphone" element={<RegisterPhone/>} />
    </Routes>
   </Router>

    </>
  );
}

export default App;
