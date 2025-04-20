import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import PageNotFound from "./components/pages/PageNotFound";
import Menu from "./components/pages/Menu";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contacts" element={<Contact/>}/>
        <Route path="menu" element={<Menu/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
