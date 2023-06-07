import { Route, Routes } from "react-router";
import "./App.css";
import Calculator from "./components/Calculator";
import Home from "./components/Home";
import Quote from "./components/Quote";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/Quote" element={<Quote />} />
      </Routes>
    </>
  );
}

export default App;
