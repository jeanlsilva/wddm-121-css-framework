import { Link } from "react-router-dom";

function Footer() {
    return (
        <div class="bg-gray-700 relative z-3">
            <div class="max-w-2xl flex-col md:flex-row lg:max-w-6xl m-auto flex justify-center sm:justify-between h-[10vh] items-center text-white">
                <p class="text-center md:text-left">Jean Silva Web Developer &copy; 2022. All rights reserved</p>
                <Link class="relative" to="/">Use Terms and Privacy Policy</Link>
            </div>
        </div>
    )
}

export default Footer;