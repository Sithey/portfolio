"use client";
import React, {useState} from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";


const navLinks = [
    {
        to:"#about",
        title:"About"
    },
    {
        to:"#projects",
        title:"Projects"
    },
    {
        to:"#social",
        title:"Social"
    }
]

const Navbar = () => {

    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
     <nav className={"fixed top-0 left-0 right-0 z-10 border border-[#33353F] bg-[#121212] bg-opacity-90 pr-10"}>
         <div className={"flex flex-wrap items-center justify-between mx-auto py-4"}>
             <Link href={"/"} className={"text-lg md:text-5xl text-white font-semibold"}>

             </Link>
             <div className="mobile-menu block md:hidden">
                 {!navbarOpen ? (
                     <button
                         onClick={() => setNavbarOpen(true)}
                         className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                     >
                         X
                     </button>
                 ) : (
                     <button
                         onClick={() => setNavbarOpen(false)}
                         className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                     >
                         X
                     </button>
                 )}
             </div>
             <div className="menu hidden md:block md:w-auto" id="navbar">
                 <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                     {navLinks.map((link, index) => (
                         <li key={index}>
                             <NavLink to={link.to} title={link.title}/>
                         </li>
                     ))}
                 </ul>
             </div>
         </div>
         {navbarOpen ? <MenuOverlay links={navLinks} /> : null}

     </nav>
    )
}

export default Navbar;