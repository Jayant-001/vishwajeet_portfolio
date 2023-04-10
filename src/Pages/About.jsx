import React from "react";
import man from "../assets/man.png";
import dots from "../assets/dots.png";
import portrait from "../assets/portrait.png";
import { Link } from "react-scroll";
import vishwajeet from '../assets/vishwajeet (2).jpg'

const About = () => {
    return (
        <div id="about" className="px-10 dark:bg-slate-900">
            <div className="container mx-auto flex flex-col lg:flex-row items-center py-40 gap-20">
                {/* Left picture */}
                <div className="relative">
                    <img
                        src={dots}
                        className="h-1/4 absolute top-0 left-0 -z-10"
                        alt=""
                    />
                    <div className="h-full rounded-full overflow-hidden">
                        <img src={vishwajeet} alt="" />
                    </div>
                </div>
                {/* Right text */}
                <div className="my-auto flex flex-col gap-3">
                    <h1 className="font-bold text-indigo-600">ABOUT ME</h1>

                    {/* About Title */}
                    <div>
                        <h1 className="text-3xl font-medium  dark:text-slate-300">
                            Vishwajeet Raj
                        </h1>
                        <p className="text-xl font-medium dark:text-slate-300">
                            Contact:{" "}
                            <span className="dark:text-white tracking-widest">
                                9506562637
                            </span>
                        </p>
                        <p className="text-xl font-medium dark:text-slate-300">
                            Email:{" "}
                            <span className="dark:text-white tracking-widest">
                                vishwajeetbankingpoint@gmail.com
                            </span>
                        </p>
                    </div>

                    {/* About Description */}
                    <p className="text-gray-500 ">
                        Block manager with experience in leveraging consultative
                        selling strategies that build relationships across all
                        target markets. <br /> Deep knowledge of marketing
                        campaign development and implementation of training
                        programs for new hires.
                    </p>

                    {/* About key points */}
                    <h2 className="text-gray-900 font-medium  dark:text-white">
                        Block Manager @ Airtel Payment Bank
                    </h2>
                    {/* <div className="w-full bg-gray-200 h-1.5 rounded-md">
                        <div className="w-full bg-indigo-600 h-1.5 rounded-md "></div>
                    </div> */}
                    <h2 className="text-gray-900 font-medium  dark:text-white">
                        Bussiness Development Executive @ Google Pay Bussiness
                    </h2>
                    {/* <div className="w-full bg-gray-200 h-1.5 rounded-md">
                        <div className="w-2/3 bg-indigo-600 h-1.5 rounded-md "></div>
                    </div> */}
                    <h2 className="text-gray-900 font-medium  dark:text-white">
                        Distributer @ RapiPay Fintech Pvt. Ltd.
                    </h2>
                    {/* <div className="w-full bg-gray-200 h-1.5 rounded-md">
                        <div className="w-[80%] bg-indigo-600 h-1.5 rounded-md "></div>
                    </div> */}
                    <h2 className="text-gray-900 font-medium  dark:text-white">
                        Ex. Distributer @ PhonePe Bussiness Pvt. Ltd.
                    </h2>
                    <Link
                        to="services"
                        spy={true}
                        smooth={true}
                        offset={-75}
                        duration={500}
                        className="bg-indigo-900 w-fit mx-auto px-3 py-2 text-white rounded-lg hover:bg-indigo-700 active:bg-indigo-800 mt-2 cursor-pointer"
                    >
                        Get My Services
                    </Link>
                </div>
            </div>
            <div className=" w-full md:w-4/5 mx-auto bg-slate-500 h-[1px]"></div>
        </div>
    );
};

export default About;
