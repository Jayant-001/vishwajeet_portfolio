import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Career = () => {
    const form = useRef();

    const [data, setData] = useState({
        user_name: "",
        user_email: "",
        user_number: "",
        user_address: "",
        user_pincode: "",
        user_message: "",
    });

    const sendEmail = (e) => {
        e.preventDefault();

        const number = data.user_number.toString();
        if (number.length !== 10) {
            alert("Please enter a valid mobile number.");
            return;
        }

        const pincode = data.user_pincode.toString();
        if (pincode.length !== 6) {
            alert("Please enter a valid area pincode.");
            return;
        }

        if (data.user_message.split(" ").length < 20) {
            alert("Message must be at least 20 words");
            return;
        }

        emailjs
            .sendForm(
                "service_cclqw7j",
                "template_2g11gvc",
                form.current,
                "HcS0-xNrkpbrLwHC3"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert("Thank You for apply, We will reach you soon.");
                    setData({
                        user_name: "",
                        user_email: "",
                        user_number: "",
                        user_address: "",
                        user_pincode: "",
                        user_message: "",
                    })
                },
                (error) => {
                    alert("Something went wrong, please try again later");
                }
            );
    };

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value.trim() });
    };

    return (
        <div id="career" className="pt-2 dark:bg-slate-900">
            <div className="container mx-auto">
                {/* Services title */}
                <div className="flex flex-col gap-3 items-center">
                    <h1 className="text-indigo-600 font-bold">We are Hiring</h1>
                    <h1 className="text-3xl dark:text-white">
                        Join our team
                        <span className="text-bold text-red-500"></span>{" "}
                    </h1>
                    <p className="w-2/3 text-center text-gray-400">
                        Apply for BDE (Bussiness Development Executive),
                        Freelancer, Promoter.
                    </p>
                </div>

                {/* Apply Form */}
                <form
                    onSubmit={sendEmail}
                    method="POST"
                    ref={form}
                    className="mt-0 p-8 flex flex-col gap-5 items-center"
                >
                    <input
                        className="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-md outline-indigo-500 dark:bg-slate-800 dark:ring-0 dark:text-white"
                        type="text"
                        placeholder="Full name"
                        name="user_name"
                        onChange={handleChange}
                        required
                    />
                    <input
                        className="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-md outline-indigo-500 dark:bg-slate-800 dark:ring-0 dark:text-white"
                        type="email"
                        placeholder="Email address"
                        name="user_email"
                        onChange={handleChange}
                        required
                    />
                    <input
                        className="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-md outline-indigo-500 dark:bg-slate-800 dark:ring-0 dark:text-white"
                        type="number"
                        placeholder="Contact number"
                        name="user_number"
                        onChange={handleChange}
                        required
                    />
                    <input
                        className="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-md outline-indigo-500 dark:bg-slate-800 dark:ring-0 dark:text-white"
                        type="text"
                        placeholder="Full address"
                        name="user_address"
                        onChange={handleChange}
                        required
                    />
                    <input
                        className="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-md outline-indigo-500 dark:bg-slate-800 dark:ring-0 dark:text-white"
                        type="number"
                        placeholder="Area pin code"
                        name="user_pincode"
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        className="p-2 w-full min-h-[80px] md:w-1/2 ring-1 ring-indigo-300 rounded-md outline-indigo-500 dark:bg-slate-800 dark:ring-0 dark:text-white"
                        cols="30"
                        rows="5"
                        placeholder="Details about yourself..."
                        name="user_message"
                        onChange={handleChange}
                        required
                    ></textarea>
                    <button className="w-1/2 bg-indigo-600 text-white cursor-pointer px-3 py-2 rounded-md font-semibold">
                        Apply
                    </button>
                </form>
            </div>
            <div className=" w-full md:w-4/5 mx-auto bg-slate-500 h-[1px]"></div>
        </div>
    );
};

export default Career;
