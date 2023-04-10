import React, { useState } from "react";
import logo from "../assets/logo-nav.png";
import moon from "../assets/moon.png";
import { Link } from "react-scroll";

const NavBar = ({ darkMode, setDarkMode }) => {
    const [showMenu, setShowMenu] = useState(false);

    const menuClick = () => {
        setShowMenu(!showMenu);
    };

    const darkModeClick = () => {
        setDarkMode(!darkMode);
    };

    return (
        <nav className="fixed top-0 w-full bg-white z-10 dark:bg-slate-700 ">
            <div className="container px-2 mx-auto py-4 flex items-center justify-between">
                {/* nav logo */}
                <div className="flex items-center gap-2 cursor-pointer">
                    <img className="h-5" src={logo} alt="" />
                    <span className="text-2xl font-bold text-indigo-900 dark:text-indigo-100 ">
                        Vishwajeet Raj
                    </span>
                </div>

                {/* Nav components */}
                <ul className="hidden md:flex space-x-6 font-bold text-gray-600 dark:text-gray-100 text-sm uppercase">
                    <li className="hover:text-indigo-900 hover:border-b-0 border-indigo-900 cursor-pointer">
                        <Link
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >
                            Home
                        </Link>
                    </li>
                    <li className="hover:text-indigo-900 cursor-pointer">
                        <Link
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                        >
                            About
                        </Link>
                    </li>
                    <li className="hovertextbg-indigo-900 cursor-pointer">
                        <Link
                            to="services"
                            spy={true}
                            smooth={true}
                            offset={-75}
                            duration={500}
                        >
                            Services
                        </Link>
                    </li>
                    <li className="hover:text-indigo-900 cursor-pointer">
                        <Link
                            to="team"
                            spy={true}
                            smooth={true}
                            offset={-75}
                            duration={500}
                        >
                            My Team
                        </Link>
                    </li>
                    <li className="hover:text-indigo-900 cursor-pointer">
                        <Link
                            to="career"
                            spy={true}
                            smooth={true}
                            offset={-75}
                            duration={500}
                        >
                            Career
                        </Link>
                    </li>
                    <li className="hover:text-indigo-900 cursor-pointer">
                        <Link
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-75}
                            duration={500}
                        >
                            Contact us
                        </Link>
                    </li>
                </ul>

                {/* menu */}
                <img
                    src={moon}
                    onClick={darkModeClick}
                    className="h-5 hidden md:block cursor-pointer"
                    alt=""
                />

                <div
                    onClick={menuClick}
                    className="flex z-10 md:hidden flex-col gap-[2px] cursor-pointer hover:bg-blue-100 px-1 py-1 rounded-lg"
                >
                    <div className="w-6 h-1 bg-black"></div>
                    <div className="w-6 h-1 bg-black"></div>
                    <div className="w-6 h-1 bg-black"></div>
                </div>

                {showMenu && (
                    <ul className=" md:hidden absolute top-0 left-0 w-full bg-slate-600 p-10 space-y-5 text-center text-white rounded-b-2xl ">
                        <li>
                            <Link
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-75}
                                duration={500}
                                onClick={menuClick}
                                className=" font-bold text-md w-fit cursor-pointer hover:text-slate-900 active:text-white"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-60}
                                duration={500}
                                onClick={menuClick}
                                className=" font-bold text-md w-fit cursor-pointer hover:text-slate-900 active:text-white"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="services"
                                spy={true}
                                smooth={true}
                                offset={-75}
                                duration={500}
                                onClick={menuClick}
                                className=" font-bold text-md w-fit cursor-pointer hover:text-slate-900 active:text-white"
                            >
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="team"
                                spy={true}
                                smooth={true}
                                offset={-75}
                                duration={500}
                                onClick={menuClick}
                                className=" font-bold text-md w-fit cursor-pointer hover:text-slate-900 active:text-white"
                            >
                                My Team
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="career"
                                spy={true}
                                smooth={true}
                                offset={-75}
                                duration={500}
                                onClick={menuClick}
                                className=" font-bold text-md w-fit cursor-pointer hover:text-slate-900 active:text-white"
                            >
                                Career
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick={menuClick}
                                className=" font-bold text-md w-fit cursor-pointer hover:text-slate-900 active:text-white"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
