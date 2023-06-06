// import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Calculator from "./components/Calculator";
import Home from "./components/Home";
import Quote from "./components/Quote";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <Menu />
      <Home />
      <Calculator />
      <Quote />
    </div>
  );
}

export default App;
