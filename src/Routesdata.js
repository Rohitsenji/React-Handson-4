import React from "react";
import Home from "./Navigation/Home";
import Student from "./Navigation/Student";
import Contact from "./Navigation/Contact";
import Navbar from "./Navigation/Navbar";
import { BrowserRouter, Route ,Routes} from "react-router-dom";

function Routedata(){
    return(
        <>
            <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path={"/"} element={<Home/>} />
                <Route path={"/Student"} element={<Student/>} />
                <Route path={"/Contact"} element={<Contact/>} />
            </Routes>
            </BrowserRouter>
        </>
    )
}

export default Routedata;

