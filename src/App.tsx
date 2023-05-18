import { Route, Routes } from "react-router-dom";
import NaveBar from "./components/NavBar";
import Home from "./components/Home";
import Store from "./components/Store";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className=" h-[100vh]">
      <NaveBar />
      <Routes>
        <Route  path="/" element={<Home />}/>
        <Route path="/Store" element={<Store />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
