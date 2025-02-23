import React from "react";
import Member from "../components/Member";
import yash from "../assets/yash jpg.jpg";
import ramu from "../assets/ramu verma jpg.jpg";
import ritik from "../assets/ritik gupta jpg.jpg";
import satyam from "../assets/satyam jpg.jpg";
import rajat from "../assets/kundan.jpg";
import rohit from "../assets/rohit.jpg";
import shashi from "../assets/shashi.jpg";
import vivek from "../assets/vivek.jpg";
import rahul from "../assets/rahul.jpg";
import vinay from "../assets/vinay.jpg";
import akash from "../assets/akash.jpg";

const Team = () => {
    const teamData = [
        {
            img: shashi,
            name: "Shashi Prakash Singh",
            about: "Team Leader",
            experience: "5",
        },
        {
            img: vivek,
            name: "Vivekanand",
            about: "Team Leader",
            experience: "6",
        },
        {
            img: rajat,
            name: "Rajat Raj",
            about: "Digital Marketing",
            experience: "5",
        },
        {
            img: ramu,
            name: "Ramu Verma",
            about: "Promoter at Vishwajeet Banking Point",
            experience: "5",
        },
        {
            img: satyam,
            name: "Satyam Gupta",
            about: "Bussiness Development Executive at Vishwajeet Banking Point",
            experience: "2",
        },
        {
            img: yash,
            name: "Ramji Gupta",
            about: "Accountant at Vishwajeet Banking Point",
            experience: "7",
        },
        {
            img: ritik,
            name: "Ritik Kumar Gupta",
            about: "Assistant Accountant at Vishwajeet Banking Point",
            experience: "4",
        },
        
        {
            img: rohit,
            name: "Rohit Gupta",
            about: "Bussiness Development Executive at Vishwajeet Banking Point",
            experience: "2",
        },
        {
            img: vinay,
            name: "Vinay Kumar Singh",
            about: "Area Sales Manager",
            experience: "4",
        },
        {
            img: akash,
            name: "Akash Kasaudhan",
            about: "Service BDE at Vishwajeet Banking Point",
            experience: "2",
        },

        
        // {
        //     img: rahul,
        //     name: "Rahul Gupta",
        //     about: "Chutiya",
        //     experience: "-5",
        // },
    ];

    return (
        <div id="team" className="pt-3 dark:bg-slate-900">
            <div className="container pb-6 mx-auto">
                {/* Services title */}
                <div className="flex flex-col gap-3 items-center">
                    <h1 className="text-indigo-600 font-bold">Our Team</h1>
                    <h1 className="text-3xl  dark:text-white">
                        A family of{" "}
                        <span className="text-bold text-red-500">10+</span>{" "}
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

                    {teamData.map((data, index) => {
                        return <Member key={index} data={data} />;
                    })}
                </div>
            </div>
            <div className=" w-full md:w-4/5 mx-auto bg-slate-500 h-[1px]"></div>
        </div>
    );
};

export default Team;
