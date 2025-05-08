import React, { useState } from "react";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";
const Navbar = () => {
    const [toggle , settoggle]  = useState ()
    return (
        <>
            <header>
                <nav className="mt-8 relative">
                    <div className="custmContainer flex items-center justify-between border-primary border-[2px] h-[68px]  rounded-full">
                        <div className="navbarbrand">
                            <img className="w-[50%]" src="public/assets/images/logo.png" alt="logo" />
                        </div>
                        <div className="nav_menu  lg:block md:block hidden">
                            <ul className="flex items-center justify-between gap-10">
                              {
                                navLinks.map ( (gopage) => {
                                    return (
                                        <li key={gopage?.id}>
                                        <Link to={gopage?.link}>{gopage?.title}</Link>
                                        </li>
                                    )
                                }
                                )
                              }  
                            </ul>
                        
                        </div>
                        <div>
                            <button className="text-lg text-white bg-primary py-2 px-4 rounded-lg"><a href="#">Contact-Us</a></button>
                        </div>
                        <div className="hamburger  lg:hidden md:block" onClick={()=>{settoggle(!toggle)}}>
                            <img className="w-[50px] h-[50px]" src="public/assets/images/hamburger.jpg" alt="burgur-img" />
                        </div>
                        {toggle &&
                        <div id="navlist" className="lg:hidden md:block"> 
                       <ul className="bg-black text-white z-10 p-2 absolute top-15 left-60 rounded-lg text-center leading-11 right-10">
                       {
                                navLinks.map ( (gopage) => {
                                    return (
                                        <li  key={gopage?.id}>
                                        <Link to={gopage?.link}>{gopage?.title}</Link>
                                        </li>

                                    )
                                }

                                )
                              }  
                       </ul>
                        </div>
                    }
                          
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar