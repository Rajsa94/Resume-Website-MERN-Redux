import React from 'react';
import './App.css';
import Navbar from './components/ResponsiveAppBar'
import Navbarb from './components/Navbar'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './screens/Home';
import Skill from './screens/Skill';
import Experience from './screens/Experience';
import Contacts from './screens/Contacts';
import Footer from './components/Footer';
import Projects from './screens/Projects';
import Admin from './screens/Admin';
import Loginhome from './screens/Loginhome';
import Excreate from './screens/Excreate';
import ProCreate from './screens/ProCreate';
import Error from './screens/Error';
import Cdetail from './screens/Cdetail';


function App() {
  return (
    <>
      <BrowserRouter>
      <Navbarb/>
      
        <Routes>
          <Route  path="/" element={<Home />}/>
          <Route  path="/skill" element={<Skill />}/>
          <Route  path="/exprience" element={<Experience />}/>
          <Route  path="/project" element={<Projects />}/>
          <Route  path="/contact" element={<Contacts/>}/>
          <Route  path="/admin" element={<Admin/>}/>
          <Route  path="/home" element={<Loginhome/>}/>
          <Route  path="/excreate" element={<Excreate/>}/>
          <Route  path="/procreate" element={<ProCreate/>}/>
          <Route  path="/cdetaill" element={<Cdetail/>}/>
          <Route  path="*" element={<Error/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
     
    </>
  );
}

export default App;
