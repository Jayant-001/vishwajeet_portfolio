import React from "react";
import man from "../assets/man.png";
import { Link } from "react-scroll";
import hero_bg from "../assets/hero_bg.jpg";
import Typewriter from "typewriter-effect";

const Hero = () => {
    const bios = [
        "Block Manager of Airtel Payments Bank.",
        "Operating Manager of Vishwajeet Banking Point.",
        "Provide all types banking services.",
    ];
    return (
        <div id="home">
            {/* Hero image */}
            <img
                src={man}
                className="absolute bottom-0 right-0 h-5/6 lg:left-0 mx-auto object-cover "
                alt=""
            />

            {/* background circle */}
            <div className="hidden lg:block absolute -bottom-1/4 w-big h-big bg-indigo-900 rounded-full right-0 left-0 mx-auto -z-10 "></div>

            {/* Hero title */}
            <div className="absolute top-1/3 left-5 text-xl sm:left-10 sm:text-3xl md:left-1/4 md:text-4xl lg:left-5 xl:left-44 xl:text-5xl font-bold ">
                <span className="text-gray-600">Hello, Welcome to</span>
                <p className=" text-2xl lg:text-3xl text-red-500">
                    {" "}
                    <span className="block md:inline">Vishwajeet</span>{" "}
                    <span className="">Banking Point</span>
                </p>
            </div>

            {/* Hero about text */}
            <div className=" hidden lg:flex flex-col gap-4 absolute top-0 bottom-0 m-auto right-10 bg-white dark:bg-slate-900 p-6 h-fit w-1/3 rounded-lg shadow-md dark:shadow-slate-600 ">
                <h1 className="text-4xl font-bold text-indigo-900 dark:text-indigo-200">
                    {" "}
                    Hi, I am{" "}
                    <span className="text-red-500"> Vishwajeet Raj</span>
                </h1>
                <p className="text-gray-600 dark:text-slate-100 font-bold text-2xl">
                    <Typewriter
                        options={{
                            strings: bios,
                            autoStart: true,
                            loop: true,
                        }}
                    />
                    {/* Block Manager of Airtel Payments Bank <br /> Operating
                    Manager of Viswajeet Banking Point. <br /> provide all types
                    banking services. */}
                </p>
                <div className="flex items-center ">
                    <a
                        href="https://deltacard.me/vishwajeetbankingpoint"
                        target="_blank"
                        rel="noreferrer"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        className="bg-indigo-900 w-fit text-white px-3 py-2 rounded-xl hover:bg-indigo-600 active:bg-indigo-700 font-semibold cursor-pointer"
                    >
                        Get in touch
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
