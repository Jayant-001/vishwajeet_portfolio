import React from "react";
import { Link } from "react-scroll";

const Service = ({data}) => {
    return (
        <div className=" my-3 md:my-10 w-full md:w-4/12 shadow-xl rounded-lg p-5 flex flex-col gap-3 ">
            <img
                className="w-10 h-10 rounded-full object-cover"
                src={data.img}
                alt=""
            />
            <h1 className="font-medium rounded-full text-lg  dark:text-white">
                {data.title}
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
                <span className="font-bold text-slate-600 dark:text-white">
                    Services:{" "}
                </span>{" "}
                {data.desc}
            </p>
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

export default Service;
