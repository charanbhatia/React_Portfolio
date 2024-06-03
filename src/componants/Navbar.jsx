import logo from "../assets/charan.png";
import { FaLinkedin, FaGithub, FaTwitterSquare, FaInstagram } from "react-icons/fa";

const Navbar = () => {
    return (
        <div>
            <nav className="mb-20 flex items-center justify-between py-6">
                <div className="flex flex-shrink-0 items-center">
                    <img className="mx-2 !w-30 !h-20" src={logo} alt="logo" />
                </div>

                <div className="m-8 flex items-center justify-center gap-8 text-xl">
                    <a href="#home" className="hover:text-gray-700 hover:scale-105 transition-transform duration-200">Home</a>
                    <a href="#about" className="hover:text-gray-700 hover:scale-105 transition-transform duration-200">About Me</a>
                    <a href="#experience" className="hover:text-gray-700 hover:scale-105 transition-transform duration-200">Experience</a>
                    <a href="#projects" className="hover:text-gray-700 hover:scale-105 transition-transform duration-200">Projects</a>
                    <a href="#getintouch" className="hover.:text-gray-700 hover:scale-105 transition-transform duration-200">Get in Touch</a>
                </div>

                <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hover:scale-125 transition-transform duration-200">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 hover:scale-125 transition-transform duration-200">
                        <FaGithub />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 hover:scale-125 transition-transform duration-200">
                        <FaTwitterSquare />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 hover:scale-125 transition-transform duration-200">
                        <FaInstagram />
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
