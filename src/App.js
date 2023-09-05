// import StyleComp from "./components/stylesComp";
import "./styles.css";
import StyleComp from "./components/stylesComp.js";
import NavBar from "./components/navbar";
import Box from "./components/box";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/about";
import Contacts from "./components/contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div class="nav">
          <NavBar />
        </div>
        <div class="main">
          <Routes>
            <Route path="/" element={<StyleComp />} />
            <Route path="/Box" element={<Box />} />
            <Route path="/About" element={<About />} />
            <Route path="/contact" element={<Contacts />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
export default App;
