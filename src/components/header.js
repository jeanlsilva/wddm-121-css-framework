import { useState } from "react";
import { Link } from "react-router-dom";
import hamburguerIcon from "../assets/images/hamburger-icon.svg";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div class="flex flex-row-reverse sm:flex-row justify-between items-center h-[10vh] pt-10 relative z-[2]">
            <div class="flex flex-col items-center">
                <Link to="/" class="text-3xl font-medium text-white hover:text-yellow-500 transition-all ease-in-out duration-500">
                    Jean Silva
                </Link>
                <span class="text-white hover:text-yellow-500 transition-all ease-in-out duration-500">Web Developer</span>
            </div>
            <div class={`bg-gray-400 p-3 sm:p-0 sm:bg-transparent text-white flex flex-col lg:flex-row sm:space-x-10 absolute sm:relative left-0 sm:left-auto sm:right:0 top-16 sm:top-auto lg:right-auto ${isMenuOpen ? 'flex' : 'hidden'} sm:block`}>
                <Link to="/" class="cursor-pointer hover:text-yellow-500 transition-all ease-in-out duration-500">Home</Link>
                <Link to="/about" class="cursor-pointer hover:text-yellow-500 transition-all ease-in-out duration-500">About</Link>
                <Link to="/contact" class="cursor-pointer hover:text-yellow-500 transition-all ease-in-out duration-500">
                    Contact us
                </Link>
            </div>
            <button onClick={toggleMenu} class="border-0 bg-transparent sm:hidden">
                <img src={hamburguerIcon} alt="hamburger" /> 
            </button>
        </div>
    )
}

export default Header;