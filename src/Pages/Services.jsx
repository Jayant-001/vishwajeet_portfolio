import React from "react";
import icon from "../assets/icon.png";
import { Link } from "react-scroll";
import Service from "../components/Service";
import airtel from "../assets/airtel.jpg";
import rapiPay from "../assets/rapiPay.jpg";
import gpay from '../assets/gpay logo.jpg'
import phonepe from "../assets/phonepe logo.jpg"
import computer from "../assets/computer logo.png"
import jio from "../assets/jio logo.jpg"

const Services = () => {
    const serviceData = [
        {
            title: "Airtel Payments Bank",
            img: airtel,
            desc: "AEPS, Account opening, Mini Branch, Fast Tag, Insurance, Atal Pension Yojna,... etc.",
        },
        {
            title: "RapiPay Fintech Pvt. Ltd",
            img: rapiPay,
            desc: "AEPS (Aadhaar Enabled Payment System), Micro ATM Services, Insurance, Retailer ID,... etc",
        },
        {
            title: "GooglePay Bussiness",
            img: gpay,
            desc: "BDE (Bussiness Development Executive), Freelancer,... etc.",
        },
        {
            title: "PhonePe Bussiness",
            img: phonepe,
            desc: "Freelancer, Merchant Onboarding, Deploy Soundbox, QR Service,... etc.",
        },
        {
            title: "Computer Services",
            img: computer,
            desc: "Windows installation, Antivirus, Software and Hardware upgrade,... etc.",
        },
        {
            title: "Jio Digital Life",
            img: jio,
            desc: "Retailer ID available, Jio SIM service available,... etc.",
        },
    ];

    return (
        <div id="services" className="pt-2 dark:bg-slate-900">
            <div className="container mx-auto">
                {/* Services title */}
                <div className="flex flex-col gap-3 items-center">
                    <h1 className="text-indigo-600 font-bold">SERVICES</h1>
                    <h1 className="text-3xl  dark:text-white">
                        What do <span className="text-red-500">we</span> offer ?
                    </h1>
                    <p className="w-2/3 text-center text-gray-400">
                        Our company offers all type of banking services and work
                        opportunities in marketing. <br /> We also hire traines
                        and freelancers.
                    </p>
                </div>

                {/* Services */}
                <div className="p-5 sm:p-0 flex flex-wrap justify-between">
                    {/* change w-4/12 to see number of items in single row */}
                    {/* Card */}

                    {serviceData.map((data, index) => {
                        return <Service key={index} data={data} />
                    })}

                    {/* <div className=" my-3 md:my-10 w-full md:w-4/12 shadow-xl rounded-lg p-5 flex flex-col gap-3 ">
                        <img
                            className="w-10 h-10 rounded-full object-cover"
                            src="https://th.bing.com/th/id/OIP.jVw8t_XLb3I2SgO4L9wcKQHaEg?w=275&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                            alt=""
                        />
                        <h1 className="font-medium rounded-full text-lg  dark:text-white">
                            Airtel Payments Bank
                        </h1>
                        <p className="text-gray-500 dark:text-gray-400">
                            <span className="font-bold text-slate-600 dark:text-white">
                                Services:{" "}
                            </span>{" "}
                            AEPS, Accounting Opening, Mini Branch, Fast Tag,
                            Insurance, Atal Pension Yojna,... etc.
                        </p>
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
                    {/* <div className=" my-3 md:my-10 w-full md:w-4/12 shadow-xl rounded-lg p-5 flex flex-col gap-3 ">
                        <img
                            className="w-10 h-10 rounded-full object-cover"
                            src="https://th.bing.com/th/id/OIP.3q036z3DpIXwpdVZ5-r71AHaEK?w=306&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                            alt=""
                        />
                        <h1 className="font-medium  text-lg  dark:text-white">
                            RapiPay Fintech Pvt. Ltd
                        </h1>
                        <p className="text-gray-500 dark:text-gray-400">
                            <span className="font-bold text-slate-600 dark:text-white">
                                Services:{" "}
                            </span>{" "}
                            AEPS (Aadhaar Enabled Payment System), Micro ATM
                            Services, Insurance, Retailer ID,... etc
                        </p>
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
                    </div>
                    {/* Card */}
                    {/* <div className=" my-3 md:my-10 w-full md:w-4/12 shadow-xl rounded-lg p-5 flex flex-col gap-3 ">
                        <img
                            className="w-10 h-10 rounded-full object-cover"
                            src="https://th.bing.com/th/id/OIP.A6i0la6VQqhNQ2_c7TzaYAHaHZ?w=174&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                            alt=""
                        />
                        <h1 className="font-medium text-lg  dark:text-white">
                            GooglePay Bussiness
                        </h1>
                        <p className="text-gray-500 dark:text-gray-400">
                            <span className="font-bold text-slate-600 dark:text-white">
                                Services:{" "}
                            </span>{" "}
                            BDE (Bussiness Development Executive),
                            Freelancer,... etc.
                        </p>
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
                    {/* <div className=" my-3 md:my-10 w-full md:w-4/12 shadow-xl rounded-lg p-5 flex flex-col gap-3 ">
                        <img
                            className="w-10 h-10 rounded-full object-cover"
                            src="https://th.bing.com/th/id/OIP.GJ87EVJgZXLgCrLxf-ctRQHaHa?w=171&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                            alt=""
                        />
                        <h1 className="font-medium text-lg  dark:text-white">
                            PhonePe Bussiness
                        </h1>
                        <p className="text-gray-500 dark:text-gray-400">
                            <span className="font-bold text-slate-600 dark:text-white">
                                Services:{" "}
                            </span>{" "}
                            Freelancer, Merchant Onboarding, Deploy Soundbox, QR
                            Service,... etc.
                        </p>
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
                    {/* <div className=" my-3 md:my-10 w-full md:w-4/12 shadow-xl rounded-lg p-5 flex flex-col gap-3 ">
                        <img
                            className="w-10 h-10 rounded-full object-cover"
                            src="https://e7.pngegg.com/pngimages/117/356/png-clipart-computer-logo-internet-computer-internet-blue-computer-network.png"
                            alt=""
                        />
                        <h1 className="font-medium text-lg  dark:text-white">
                            Computer Services
                        </h1>
                        <p className="text-gray-500 dark:text-gray-400">
                            <span className="font-bold text-slate-600 dark:text-white">
                                Services:{" "}
                            </span>{" "}
                            Windows installation, Antivirus, Software and
                            Hardware upgrade,... etc.
                        </p>
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
                    {/* <div className=" my-3 md:my-10 w-full md:w-4/12 shadow-xl rounded-lg p-5 flex flex-col gap-3 ">
                        <img
                            className="w-10 h-10 rounded-full object-cover"
                            src="https://th.bing.com/th/id/OIP.o4jeYLycfAolu7-VuG_YEAAAAA?pid=ImgDet&rs=1"
                            alt=""
                        />
                        <h1 className="font-medium text-lg  dark:text-white">
                            Jio Digital Life
                        </h1>
                        <p className="text-gray-500 dark:text-gray-400">
                            <span className="font-bold text-slate-600 dark:text-white">
                                Services:{" "}
                            </span>{" "}
                            Retailer ID available, Jio SIM service available,...
                            etc.
                        </p>
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
                    </div>  */}
                </div>
            </div>
            <div className=" w-full md:w-4/5 mx-auto bg-slate-500 h-[1px]"></div>
        </div>
    );
};

export default Services;
