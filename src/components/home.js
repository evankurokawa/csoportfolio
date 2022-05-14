import React from "react";
import image from "../images/hqdefault.jpg";
import logo from "../images/Logo and Text.png";
import overlay from "../images/overlay.png"

export default function Home () {
    return (
        <main>
            <img src={image} alt="oops :)" className="absolute object-cover w-full h-full"/>
            <img src={overlay} alt="oops :)" className="absolute object-cover w-full h-full opacity-55"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1>
                    <img src={logo} alt="corps sans organes" className="" />
                </h1>
            </section>
        </main>
    )
}