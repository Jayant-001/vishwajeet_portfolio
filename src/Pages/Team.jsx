import React from "react";
import { Link } from "react-scroll";
import profileImg from "../assets/profile pic.jpg"
import Member from "../components/Member";
import yash from '../assets/yash jpg.jpg'
import ramu from '../assets/ramu verma jpg.jpg'
import ritik from '../assets/ritik gupta jpg.jpg'
import satyam from '../assets/satyam jpg.jpg'

const Team = () => {

    const teamData = [
        {
            img: ramu,
            name: "Ramu Verma",
            about: "Promoter at Vishwajeet Banking Point",
            experience: '5'
        },
        {
            img: satyam,
            name: "Satyam Gupta",
            about: "Bussiness Development Executive at Vishwajeet Banking Point",
            experience: '2'
        },
        {
            img: yash,
            name: "Ramji Gupta",
            about: "Accountant at Vishwajeet Banking Point",
            experience: '7'
        },
        {
            img: ritik,
            name: "Ritik Kumar Gupta",
            about: "Assistant Accountant at Vishwajeet Banking Point",
            experience: '4'
        },

    ]

    return (
        <div id="team" className="pt-3 dark:bg-slate-900">
            <div className="container pb-6 mx-auto">
                {/* Services title */}
                <div className="flex flex-col gap-3 items-center">
                    <h1 className="text-indigo-600 font-bold">Our Team</h1>
                    <h1 className="text-3xl  dark:text-white">
                        A family of{" "}
                        <span className="text-bold text-red-500">4+</span>{" "}
                        members
                    </h1>
                    {/* <p className="w-2/3 text-center text-gray-400">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Ratione sed temporibus nemo soluta quidem quo
                        molestias et error voluptatibus mollitia? Lorem ipsum
                        dolor sit amet.
                    </p> */}
                </div>

                {/* Team */}
                <div className="p-5 sm:p-0 flex flex-wrap justify-between">
                    {/* change w-4/12 to see number of items in single row */}
                    {/* Card */}

                    {
                        teamData.map((data, index) => {
                            return <Member key={index} data={data} />;
                        })
                    }

                    {/* <div className=" my-3 md:my-2 w-full md:w-1/2 shadow-xl rounded-lg p-5 flex flex-col gap-3 ">
                        <div className="flex flex-col items-center gap-1">
                            <img
                                className="w-20 lg:w-24 object-cover rounded-full"
                                src="https://randomuser.me/api/portraits/men/47.jpg"
                                alt=""
                            />
                            <h1 className="font-bold text-md md:text-lg tracking-widest  dark:text-white">
                                Ramu Verma
                            </h1>
                        </div>
                        <div className="text-gray-600">
                            <p className=" dark:text-white">
                                3+ years of experience
                            </p>
                            <p>
                                {" "}
                                <span className="font-semibold">
                                    Promoter
                                </span>{" "}
                                at Vishwajeet Banking Point
                            </p>
                        </div>
                        <Link
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-75}
                            duration={500}
                            className="text-indigo-600 font-semibold text-sm w-fit"
                        >
                            Know more
                        </Link>
                    </div> */}

                    {/* Card */}
                    {/* <div className=" my-3 md:my-2 w-full md:w-1/2 shadow-xl rounded-lg p-5 flex flex-col gap-3 ">
                        <div className="flex flex-col items-center gap-1">
                            <img
                                className="w-20 lg:w-24 object-cover rounded-full"
                                src="https://randomuser.me/api/portraits/men/47.jpg"
                                alt=""
                            />
                            <h1 className="font-bold text-md md:text-lg tracking-widest  dark:text-white">
                                Satyam Gupta
                            </h1>
                        </div>
                        <div className="text-gray-600">
                            <p className=" dark:text-white">
                                3+ years of experience
                            </p>
                            <p>
                                {" "}
                                <span className="font-semibold">
                                    Bussiness Development Executive
                                </span>{" "}
                                at Vishwajeet Banking Point
                            </p>
                        </div>
                        <Link
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-75}
                            duration={500}
                            className="text-indigo-600 font-semibold text-sm w-fit"
                        >
                            Know more
                        </Link>
                    </div> */}

                    {/* Card */}
                    {/* <div className=" my-3 md:my-2 w-full md:w-1/2 shadow-xl rounded-lg p-5 flex flex-col gap-3 ">
                        <div className="flex flex-col items-center gap-1">
                            <img
                                className="w-20 lg:w-24 object-cover rounded-full"
                                src="https://randomuser.me/api/portraits/men/47.jpg"
                                alt=""
                            />
                            <h1 className="font-bold text-md md:text-lg tracking-widest  dark:text-white">
                                Ramji Gupta
                            </h1>
                        </div>
                        <div className="text-gray-600">
                            <p className=" dark:text-white">
                                3+ years of experience
                            </p>
                            <p>
                                {" "}
                                <span className="font-semibold">
                                    Accountant
                                </span>{" "}
                                at Vishwajeet Banking Point
                            </p>
                        </div>
                        <Link
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-75}
                            duration={500}
                            className="text-indigo-600 font-semibold text-sm w-fit"
                        >
                            Know more
                        </Link>
                    </div> */}

                    {/* Card */}
                    {/* <div className=" my-3 md:my-2 w-full md:w-1/2 shadow-xl rounded-lg p-5 flex flex-col gap-3 ">
                        <div className="flex flex-col items-center gap-1">
                            <img
                                className="w-20 lg:w-24 object-cover rounded-full"
                                src="https://randomuser.me/api/portraits/men/47.jpg"
                                alt=""
                            />
                            <h1 className="font-bold text-md md:text-lg tracking-widest  dark:text-white">
                                Ritik Kumar Gupta
                            </h1>
                        </div>
                        <div className="text-gray-600">
                            <p className=" dark:text-white">
                                3+ years of experience
                            </p>
                            <p>
                                {" "}
                                <span className="font-semibold">
                                    Assistant Accountant
                                </span>{" "}
                                at Vishwajeet Banking Point
                            </p>
                        </div>
                        <Link
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-75}
                            duration={500}
                            className="text-indigo-600 font-semibold text-sm w-fit"
                        >
                            Know more
                        </Link>
                    </div> */}
                </div>
            </div>
            <div className=" w-full md:w-4/5 mx-auto bg-slate-500 h-[1px]"></div>
        </div>
    );
};

export default Team;
