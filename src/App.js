import { Route, Routes } from "react-router-dom";
import Appointment from "./Pages/Appointment/Appointment";
import Home from "./Pages/HomePage/Home/Home";
import Login from "./Pages/LoginRegister/Login/Login";
import Footer from "./Pages/SharedItem/Footer/Footer";
import Header from "./Pages/SharedItem/Header/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/appointment" element={<Appointment />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
