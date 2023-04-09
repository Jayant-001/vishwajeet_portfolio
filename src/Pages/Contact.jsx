import React from "react";

const Contact = () => {
    return (
        <div id="contact" className="pt-3 dark:bg-slate-900">
            <div className="container mx-auto">
                {/* Services title */}
                <div className="flex flex-col gap-2 items-center">
                    <h1 className="text-indigo-600 font-bold">Get in touch</h1>
                    <h1 className="text-3xl">
                        <span className="text-bold text-red-500"></span>{" "}
                    </h1>
                    <p className="w-2/3 text-center text-gray-400">
                        For more infomation, please contact us
                    </p>
                    <p className="text-gray-400 tracking-wider">
                        Contact No.{" "}
                        <span className="text-center text-black dark:text-white font-semibold">
                            9506562637
                        </span>
                    </p>
                    <p className="text-gray-400 tracking-wider">
                        Email:{" "}
                        <span className="text-center text-black dark:text-white font-semibold">
                            vishwajeetbankingpoint@gmail.com
                        </span>
                    </p>
                </div>

                {/* Apply Form */}
                <form
                    action=""
                    className="mt-0 p-8 flex flex-col gap-5 items-center"
                >
                    <input
                        className="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-md outline-indigo-500 dark:bg-slate-800 dark:ring-0 dark:text-white "
                        type="text"
                        placeholder="Name"
                    />
                    <input
                        className="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-md outline-indigo-500 dark:bg-slate-800 dark:ring-0 dark:text-white"
                        type="text"
                        placeholder="Email (optional)"
                    />
                    <input
                        className="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-md outline-indigo-500 dark:bg-slate-800 dark:ring-0 dark:text-white"
                        type="number"
                        placeholder="Contact number"
                    />

                    <textarea
                        className="p-2 w-full min-h-[80px] md:w-1/2 ring-1 ring-indigo-300 rounded-md outline-indigo-500 dark:bg-slate-800 dark:ring-0 dark:text-white"
                        cols="30"
                        rows="5"
                        placeholder="Your query..."
                    ></textarea>
                    <button className="w-1/2 bg-indigo-600 text-white cursor-pointer px-3 py-2 rounded-md font-semibold">
                        Send
                    </button>
                </form>
            </div>
            <div className=" w-full md:w-4/5 mx-auto bg-slate-500 h-[1px]"></div>
        </div>
    );
};

export default Contact;
