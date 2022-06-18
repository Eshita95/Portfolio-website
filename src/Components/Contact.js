import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import address from '../Image/address.png'
import call from "../Image/call.png";
import mail from "../Image/mail.png";




const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_f80k1k9",
                "template_xxx8w73",
                form.current,
                "80JVpk0GyALh8xbrr"
            )
            .then(
                (result) => {
                    Swal.fire({
                        icon: "success",
                        title: "Message Sent",
                        text: "Thanks for your query. We will reply you soon.",
                        showConfirmButton: false,
                    });
                    form.current.reset();
                },
                (error) => {
                    Swal.fire({
                        icon: "error",
                        title: "Message Send Failed",
                        text: "Something wrong. Please try again.",
                        showConfirmButton: false,
                    });
                }
            );
    };

    return (
        <div id="contact" className="container mx-auto my-20 px-5">
            <h1 className="text-4xl lg:text-5xl font-bold text-center text-green-900 mb-12">
                Get in Touch
            </h1>
            <div className=" border-0 lg:border lg:border-gray-10 shadow-md">
                <div className="flex flex-col lg:flex-row w-full">
                    <div className=" min-h-96 order-2 lg:order-1 w-full lg:w-1/3 bg-green-900 text-white px-2 sm:px-4 md:px-6 py-8">
                        <h2 className="text-2xl text-center md:text-left">Contact Info</h2>
                        <div className="py-5 h-full flex flex-col justify-between items-start sm:flex-row sm:items-center lg:items-start lg:flex-col lg:justify-between">
                            <ul className="mb-5 md:mb-0">
                                <li className="flex mb-3">
                                    <img className="w-6 h-6 invert mr-2" src={address} alt="" />
                                    <span className="font-light leading-7">
                                        Bheramara,Kushtia
                                        <br />
                                        Khulna, Bangladesh
                                    </span>
                                </li>
                                <li className="flex items-center mb-5">
                                    <img className="w-6 h-6 invert mr-2" src={mail} alt="" />
                                    <span className="font-light leading-7">
                                        eshita.islam95@gmail.com
                                    </span>
                                </li>
                                <li className="flex items-center mb-3">
                                    <img className="w-6 h-6 invert mr-2" src={call} alt="" />
                                    <span className="font-light leading-7">+880 1774-094474</span>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div className="order-1 lg:order-2 w-full lg:w-2/3 px-2 sm:px-4 md:px-6 py-8 border">
                        <h2 className="text-2xl font-semibold mb-6 text-center md:text-left">
                            Contact Form
                        </h2>
                        <form ref={form} onSubmit={sendEmail} className="w-full py-5">
                            <div className="flex flex-col md:flex-row md:gap-8 mb-0 md:mb-8">
                                <div className="w-full md:w-50 mb-10 md:mb-0">
                                    <label className="font-bold">Name</label>
                                    <br />
                                    <input
                                        className="border-b border-gray-300 w-full focus:outline-none"
                                        type="text"
                                        name="from_name"
                                        required
                                    />
                                </div>
                                <div className="w-full md:w-50 mb-10 md:mb-0">
                                    <label className="font-bold">Email</label>
                                    <br />
                                    <input
                                        className="border-b border-gray-300 w-full focus:outline-none"
                                        type="email"
                                        name="reply_to"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="w-full mb-10">
                                <label className="font-bold">Subject</label>
                                <br />
                                <input
                                    className="border-b border-gray-300 w-full focus:outline-none"
                                    type="text"
                                    name="subject"
                                    required
                                />
                            </div>
                            <div className="w-full my-5">
                                <label className="font-bold">Write your message</label>
                                <br />
                                <textarea
                                    className="border-b border-gray-300 w-full focus:outline-none h-14 md:h-16"
                                    name="message"
                                    required
                                />
                            </div>
                            <div className="w-full text-center md:text-left">
                                <input
                                    className="btn bg-green-900 border-0 mt-5 font-medium"
                                    type="submit"
                                    value="Send Message"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;