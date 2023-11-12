import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
    const form = useRef();

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        user_name: "",
        user_email: "",
        user_number: "Null",
        user_message: "",
    });

    const sendEmail = (e) => {
        e.preventDefault();

        const number = data.user_number.toString();
        if (number.length > 0 && number.length !== 10) {
            alert("Please enter a valid mobile number.");
            return;
        }
        if (data.user_message.split(" ").length < 10) {
            alert("Message must be at least 10 words");
            return;
        }

        setLoading(true);

        emailjs
            .sendForm(
                "service_cclqw7j",
                "template_fws7rma",
                form.current,
                "HcS0-xNrkpbrLwHC3"
            )
            .then(
                (result) => {
                    setLoading(false);
                    // console.log(result.text);
                    toast.success("Thank You, We will reach you soon.");
                    setData({
                        user_name: "",
                        user_email: "",
                        user_number: "Null",
                        user_message: "",
                    });
                },
                (error) => {
                    setLoading(false);
                    toast.error("Something went wrong, please try again later");
                }
            );
    };

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

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
                        <span className="text-center text-sm sm:text-base text-black dark:text-white font-semibold">
                            vishwajeetbankingpoint@gmail.com
                        </span>
                    </p>
                </div>

                {/* Apply Form */}
                <form
                    method="POST"
                    ref={form}
                    onSubmit={sendEmail}
                    className="mt-0 p-8 flex flex-col gap-5 items-center"
                >
                    <input
                        className="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-md outline-indigo-500 dark:bg-slate-800 dark:ring-0 dark:text-white "
                        type="text"
                        placeholder="Name"
                        name="user_name"
                        required
                        onChange={handleChange}
                        value={data.user_name}
                    />
                    <input
                        className="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-md outline-indigo-500 dark:bg-slate-800 dark:ring-0 dark:text-white"
                        type="email"
                        placeholder="Email (optional)"
                        name="user_email"
                        onChange={handleChange}
                        value={data.user_email}
                    />
                    <input
                        className="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-md outline-indigo-500 dark:bg-slate-800 dark:ring-0 dark:text-white"
                        type="number"
                        placeholder="Contact number"
                        name="user_number"
                        onChange={handleChange}
                        value={data.user_number}
                    />

                    <textarea
                        className="p-2 w-full min-h-[80px] md:w-1/2 ring-1 ring-indigo-300 rounded-md outline-indigo-500 dark:bg-slate-800 dark:ring-0 dark:text-white"
                        cols="30"
                        rows="5"
                        placeholder="Your query..."
                        name="user_message"
                        required
                        onChange={handleChange}
                        value={data.user_message}
                    ></textarea>
                    <input
                        disabled={loading}
                        type="submit"
                        value={`${loading ? "Sending..." : "Send"}`}
                        className="w-1/2 bg-indigo-600 text-white cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed px-3 py-2 rounded-md font-semibold"
                    />
                    {/* Send
                    /> */}
                </form>
            </div>
            <div className=" w-full md:w-4/5 mx-auto bg-slate-500 h-[1px]"></div>
        </div>
    );
};

export default Contact;
