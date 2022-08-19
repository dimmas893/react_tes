
import React from "react";
import About from '../views/About'
import Home from '../views/Home'
import Navbar from '../components/Navbar'
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function Router() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
            </Routes>
      </BrowserRouter>
    )
}

export default Router;