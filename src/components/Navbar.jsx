import React, {useState} from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from "react-icons/hi";
import logo from '../assets/logo.png'
import {Link} from 'react-scroll';

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
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] z-40 text-gray-300">
            <div>
                <img src={logo} alt="Image of logo" style={{width: "50px"}}/>
            </div>

            {/* Menu */}
            <ul className="hidden md:flex">
                <li>
                    <Link to="home" smooth={true} duration={500}>Home</Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500}>About</Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} duration={500}>Skills</Link>
                </li>
                <li>
                    <Link to="work" smooth={true} duration={500}>Works</Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500}>Contact</Link>
                </li>
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-99'>
                {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
            </div>
            {/* Mobile Menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center z-99'}>
                <li className="py-6 text-4xl">
                    <Link to="home" onClick={handleClick} smooth={true} offset={-80} duration={500}>Home</Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link to="about" onClick={handleClick} smooth={true} offset={-80} duration={500}>About</Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link to="skills" onClick={handleClick} smooth={true} offset={-80} duration={500}>Skills</Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link to="work" onClick={handleClick} smooth={true} offset={-80} duration={500}>Works</Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link to="contact" onClick={handleClick} smooth={true} offset={-80} duration={500}>Contact</Link>
                </li>
            </ul>

            {/* Social icons */}
            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <Social name="LinkedIn" link="https://www.linkedin.com/in/kevin-grischko/" icon={FaLinkedin} bgColor="bg-blue-600" />
                    <Social name="Github" link="https://github.com/DenZaiyy" icon={FaGithub} bgColor="bg-[#333333]" />
                    <Social name="Email" link="mailto:grischko.kevin@gmail.com" icon={HiOutlineMail} bgColor="bg-[#6fc2b0]" />
                </ul>
            </div>
        </div>
    );
}

export default Navbar;