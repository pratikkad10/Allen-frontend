import { useState } from "react";
import "./App.css";
import Layout from "./components/Layout";
import {Route, Routes } from "react-router-dom";
import Class11neet from "./components/Class11neet";
import Class12jee from "./components/Class12jee";
import Class11jee from "./components/Class11jee";
import Class12neet from "./components/Class12neet";
import NeetSection from "./components/NeetSection";
import JeeSection from "./components/JeeSection";


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout/>}>

          <Route path="/neet" element={<NeetSection/>}>
            <Route path='online-coaching-class-11' element={<Class11neet/>} />
            <Route path='online-coaching-class-12' element={<Class12neet/>} />
          </Route>

          <Route path="/jee" element={<JeeSection/>}>
            <Route path='online-coaching-class-11' element={<Class11jee/>} />
            <Route path='online-coaching-class-12' element={<Class12jee/>} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
