import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/profile";
import Signup from "./pages/signup";
import ForgetPassword from "./pages/ForgetPassword";
import Offer from "./pages/Offer";
import Signin from "./pages/signin";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/Offer" element={<Offer/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/ForgetPassword" element={<ForgetPassword/>}/>
      </Routes>
    </Router>
    

    </>
  );
}

export default App;
