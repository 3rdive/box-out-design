import{ BrowserRouter as Router,  Routes, Route } from "react-router-dom"
import "./app.css"
import Home from "./Pages/Homepage/Home";
import RegisterE from "./Pages/Register/RegisterE";
import RegisterP from "./Pages/Register/RegisterP";

function App() {
  return (
    <>
    
   <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/registerp" element={<RegisterP/>} />
      <Route path="/registere" element={<RegisterE/>} />
    </Routes>
   </Router>

    </>
  );
}

export default App;
