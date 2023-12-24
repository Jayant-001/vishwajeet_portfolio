import React from "react";
import Service from "../components/Service";
import airtel from "../assets/airtel.jpg";
import rapiPay from "../assets/rapiPay.jpg";
import gpay from '../assets/gpay logo.jpg'
import phonepe from "../assets/phonepe logo.jpg"
import computer from "../assets/computer logo.png"
import jio from "../assets/jio logo.jpg"
import reliPay from "../assets/reliPay.png"

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
            desc: "AEPS (Aadhaar Enabled Payment System), Micro ATM Services, Insurance, Retailer ID,... etc.",
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
        {
            title: "Reli Pay",
            img: reliPay,
            desc: "AEPS (Aadhaar Enabled Payment System), Micro ATM Services, Insurance, Retailer ID, PAN card services,... etc.",
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

                </div>
            </div>
            <div className=" w-full md:w-4/5 mx-auto bg-slate-500 h-[1px]"></div>
        </div>
    );
};

export default Services;
