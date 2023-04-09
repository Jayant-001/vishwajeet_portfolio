import React from "react";

const Testimonial = ({data}) => {
    return (
        <div className=" my-3 md:my-10 w-full md:w-[32%] shadow-xl rounded-lg p-5 flex flex-col gap-3 ">
            <div className="space-y-1">
                <img
                    className="w-10 rounded-full"
                    src={data.img}
                    alt=""
                />
                <h1 className="font-bold dark:text-white tracking-wider">
                    {data.name}
                </h1>
            </div>
            <p className="text-gray-500">
                {data.message}
            </p>
        </div>
    );
};

export default Testimonial;
