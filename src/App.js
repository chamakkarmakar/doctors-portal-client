import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Appointment from "./Pages/Appointment/Appointment";
import Home from "./Pages/HomePage/Home/Home";
import Login from "./Pages/LoginRegister/Login/Login";
import Register from "./Pages/LoginRegister/Register/Register";
import RequireAuth from "./Pages/LoginRegister/RequireAuth/RequireAuth";
import Footer from "./Pages/SharedItem/Footer/Footer";
import Header from "./Pages/SharedItem/Header/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/appointment" element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>
        }></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
      <ToastContainer />
      <Footer></Footer>
      
    </div>
  );
}

export default App;
