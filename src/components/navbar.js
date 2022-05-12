import React from "react";
import { NavLink } from "react-router-dom";


export default function NavBar() {
    return (
        <header className="bg-stone-100">
            <div className="container mx-10px flex justify-between">
                <nav className="flex ">
                    <NavLink to={'/'} 
                        className='inline-flex items-center py-0 px-3 mr-4 tracking-widest uppercase font-semibold focus:font-bold'>
                            C.S.O Design Studio
                    </NavLink>
                    <NavLink to={'/portfolio'} 
                        className='inline-flex items-center py-2 px-3 mr-4 tracking-widest transition ease-in delay-85 hover:scale-100 hover:bg-stone-50 duration-300 font-normal focus:font-bold '>
                            Portfolio
                    </NavLink>
                    <NavLink to={'/about'}  
                        className='inline-flex items-center py-2 px-3 mr-4 tracking-widest transition ease-in delay-85 hover:scale-100 hover:bg-stone-50 duration-300 font-normal focus:font-bold '>
                            About
                    </NavLink>
                    <NavLink to={'/contact'} 
                        className='inline-flex items-center py-2 px-3 mr-4 tracking-widest transition ease-in delay-85 hover:scale-100 hover:bg-stone-50 duration-300 font-normal focus:font-bold '>
                            Contact
                    </NavLink>
                    <NavLink to={'/blog'} 
                        className='inline-flex items-center py-2 px-3 mr-4 tracking-widest transition ease-in delay-85 hover:scale-10 hover:bg-stone-50 duration-300 font-normal focus:font-bold '>
                            Blog
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}