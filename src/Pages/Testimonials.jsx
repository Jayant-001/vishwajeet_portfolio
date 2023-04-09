import React from "react";
import profile from "../assets/profile pic.jpg";
import Testimonial from "../components/Testimonial";

const Testimonials = () => {
    const testimonialsData = [
        {
            img: profile,
            name: "Jayant Kumar",
            message:
                "This company has an awesome team and dedicated staff. I am very impressed by their vision, hard work, outstanding performance, and wonderful teammates. Their reputation is well-earned.",
        },
        {
            img: profile,
            name: "Jayant Kumar",
            message:
                "It's a rare thing to discover a bank that genuinely cares about the people. Vishwajeet banking point serves all kinds of banking services. They always showed me kindness, respect and a friendly smile. I can't recommend them enough for all your banking needs. You won't be disappointed.",
        },
        {
            img: profile,
            name: "Jayant Kumar",
            message:
                "Vishwajeet banking point has a wonderful staff of kind and helpful people. Their locations are very clean, comfortable, friendly and beautiful. This includes them at him branch at (city). If only every other business were to conduct the same level of customer service. The world would be a much friendlier one.",
        },
    ];

    return (
        <div id="testimonials" className="pt-2 dark:bg-slate-900">
            <div className="container mx-auto">
                <div className="flex flex-col gap-3 items-center">
                    <h1 className="text-indigo-600 font-bold">Testimonials</h1>
                    <h1 className="text-3xl  dark:text-white ">
                        Customer<span className="text-red-500">'s</span> Feed
                        <span className="text-red-500">back</span>
                    </h1>
                    <p className="w-2/3 text-center text-gray-400">
                        Some valuable feedback from some of our valuable
                        customers
                    </p>
                </div>

                <div className="p-5 sm:p-0 flex flex-wrap justify-between">
                    {testimonialsData.map((data) => {
                        return <Testimonial data={data} />;
                    })}
                </div>
                {/* End of card section */}
            </div>
        </div>
    );
};

export default Testimonials;
