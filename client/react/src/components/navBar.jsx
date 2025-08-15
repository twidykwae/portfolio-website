import React from "react";

export default function NavBar(){
    return (
        //navbar, first div for aligning logo and links, second div for aligning logo, unordered list to links
        <nav className="bg-black text-white p-7 fixed w-full z-50 shadow-md font-thin"> 
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div>Twidy Kwae</div>

                <ul className="hidden md:flex space-x-8">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Experience & Proj.</a></li>
                    <li><a href="#">Side</a></li>
                </ul>
            </div>
        </nav>
    )
}