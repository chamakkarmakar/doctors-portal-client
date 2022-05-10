import { Route, Routes } from "react-router-dom";
import Home from "./Pages/HomePage/Home/Home";
import Login from "./Pages/LoginRegister/Login/Login";
import Header from "./Pages/SharedItem/Header/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
