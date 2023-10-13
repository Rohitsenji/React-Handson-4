import React from "react";
import { Link } from "react-router-dom";
function Navbar(){
    return(
        <>
        <div className="Navbar">
            <div className="navdata Home">
            <Link to={"/"}>HOME</Link>
            </div>
            <div className="navdata Student">
            <Link to={"/Student"}>STUDENT</Link>
            </div>
            <div className="navdata Contact">
            <Link to={"/Contact"}>CONTACT</Link>
            </div>
        </div>
        </>
    )
}
export default Navbar;