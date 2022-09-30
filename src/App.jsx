import React from "react";
import "./styles/App.css";
import Home from "./pages/Home";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page2";
import BreadCrumbs from "./components/BreadCrumbs";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <BreadCrumbs />
      <div className="App">Bread Crumbs</div>
      <header className="app__content">
        <Link to="/">Home</Link>
        <Link to="/page1">Page1</Link>
        <Link to="/page2">Page2</Link>
        <Link to="/page3">Page3</Link>
      </header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/page1" element={<Page1 />}></Route>
        <Route path="/page2" element={<Page2 />}></Route>
        <Route path="/page3" element={<Page3 />}></Route>
      </Routes>
    </>
  );
}

export default App;
