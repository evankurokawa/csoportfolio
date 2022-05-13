import React from "react";
import { NavLink } from "react-router-dom";


export default function NavBar() {
    return (
        <header className="bg-stone-100 ">
            <div className="'mx-auto', mapMaxWidthStyles(headerWidth), {
                    'xl:border-l xl:border-r border-current': headerWidth === 'narrow',
                    '2xl:border-l 2xl:border-r border-current': headerWidth === 'wide w-full border-b border-current border-dashed">
                <nav className="flex items-stretch relative">
                    <NavLink to={'/'} 
                        className='inline-flex items-center px-3 mr-4 tracking-widest uppercase font-semibold border-r border-current transition ease-in delay-85 hover:scale-100 hover:bg-stone-50 duration-300 border-dashed'>
                            C.S.O Design Studio
                    </NavLink>
                    <div  className="hidden lg:flex border-current ml-auto uppercase border-l border-dashed">
                        <NavLink to={'/portfolio'} 
                            className='inline-flex items-center py-2 px-4 tracking-widest transition ease-in delay-85 hover:scale-100 hover:bg-stone-50 duration-300 font-normal '>
                                Portfolio
                        </NavLink>
                        <NavLink to={'/about'}  
                            className='inline-flex items-center py-2 px-4 tracking-widest transition ease-in delay-85 hover:scale-100 hover:bg-stone-50 duration-300 font-normal '>
                                About
                        </NavLink>
                        <NavLink to={'/contact'} 
                            className='inline-flex items-center py-2 px-4 tracking-widest transition ease-in delay-85 hover:scale-100 hover:bg-stone-50 duration-300 font-normal '>
                                Contact
                        </NavLink>
                    </div>
                    
                </nav>
            </div>
        </header>
    )
}