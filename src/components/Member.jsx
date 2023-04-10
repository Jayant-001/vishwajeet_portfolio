import React from "react";
import { Link } from "react-scroll";

const Member = ({ data }) => {
    return (
        <div className=" my-3 md:my-2 w-full md:w-1/2 shadow-xl rounded-lg p-5 flex flex-col gap-3 ">
            <div className="flex flex-col items-center gap-1">
                <img
                    className="w-20 lg:w-24 object-cover rounded-full"
                    src={data.img}
                    alt=""
                />
                <h1 className="font-bold text-md md:text-lg tracking-widest  dark:text-white">
                    {data.name}
                </h1>
            </div>
            <div className="text-gray-700">
                <p className="dark:text-slate-400"> <span className="font-semibold text-black dark:text-white">{data.experience}+</span> years of experience</p>
                <p className="dark:text-slate-300">
                    {data.about}
                </p>
            </div>
            <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-75}
                duration={500}
                className="text-indigo-600 font-semibold text-sm w-fit cursor-pointer"
            >
                Know more
            </Link>
        </div>
    );
};

export default Member;
