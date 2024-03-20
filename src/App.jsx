import "./App.css";
import { Home } from "./pages/home";
import { Route, Routes } from "react-router-dom";
import { Sign } from "./pages/Sign";
import { Register } from "./pages/Register";
import { RegisterSuccess } from "./pages/RegisterSuccess";
import { Profile } from "./pages/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/register" element={<Register />} />
        <Route path="/success" element={<RegisterSuccess />} />
        <Route path="/profile/*" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
