import React from "react";
import logo from "../assets/logo-nav.png";
import { Link } from "react-scroll";

const Footer = () => {
    return (
        <nav className=" bg-[#3c32a8] text-black dark:bg-slate-700 w-full">
            <div className="container px-2 mx-auto py-4 flex items-center justify-between">
                {/* nav logo */}
                <div className="flex items-center gap-2 cursor-pointer">
                    <Link
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        <img className="h-5" src={logo} alt="" />
                    </Link>
                    <span className=" hidden text-2xl font-bold text-indigo-900 ">
                        Vishwajeet Raj
                    </span>
                </div>

                <div className="flex flex-col md:flex-row md:gap-3">
                    {/* Nav components */}
                    <div className="inline font-bold text-center text-white ">
                        <span className="">&#169;</span> 2023 Vishwajeet Banking
                        Point Private Limited.
                    </div>

                    {/* menu */}

                    <div className="font-bold text-center text-white ">
                        Designed and Developed by{" "}
                        <a
                            rel="noreferrer"
                            className="text-red-400 underline font-bold tracking-wider hover:text-red-300 active:text-red-500"
                            href="https://jayant-gupta.vercel.app/"
                            target="_blank"
                        >
                            Jayant
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Footer;
