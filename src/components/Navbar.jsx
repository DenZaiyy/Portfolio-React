import React, {useState} from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from "react-icons/hi";
import {BsFillPersonLinesFill} from "react-icons/bs";
import logo from '../assets/logo.png'

const Social = (props) => {
    return (
        <li className={`w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ${props.bgColor}`}>
            <a className="flex justify-between items-center w-full text-gray-300" href={props.link} rel="noreferrer" target="_blank">{props.name} <props.icon size={30} /></a>
        </li>
    )
}

function Navbar() {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
            <div>
                <img src={logo} alt="Image of logo" style={{width: "50px"}}/>
            </div>

            {/* Menu */}
            <ul className="hidden md:flex">
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-99'>
                {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
            </div>
            {/* Mobile Menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className="py-6 text-4xl">Home</li>
                <li className="py-6 text-4xl">About</li>
                <li className="py-6 text-4xl">Skills</li>
                <li className="py-6 text-4xl">Work</li>
                <li className="py-6 text-4xl">Contact</li>
            </ul>

            {/* Social icons */}
            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <Social name="LinkedIn" link="https://www.linkedin.com/in/kevin-grischko/" icon={FaLinkedin} bgColor="bg-blue-600" />
                    <Social name="Github" link="https://github.com/DenZaiyy" icon={FaGithub} bgColor="bg-[#333333]" />
                    <Social name="Email" link="mailto:grischko.kevin@gmail.com" icon={HiOutlineMail} bgColor="bg-[#6fc2b0]" />
                    <Social name="Resume" link="" icon={BsFillPersonLinesFill} bgColor="bg-[#565f69]" />
                </ul>
            </div>
        </div>
    );
}

export default Navbar;