import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/profile";
import Signup from "./pages/signup";
import ForgetPassword from "./pages/ForgetPassword";
import Offer from "./pages/Offer";
import Signin from "./pages/signin";
import Header from "./Components/Header";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <Router>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/Offer" element={<Offer/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/ForgetPassword" element={<ForgetPassword/>}/>
      </Routes>
    </Router>
    <ToastContainer 
      position="bottom-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      />

    </>
  );
}

export default App;
