import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Facebook, Instragram, LinkedIn, Watsaap } from "./Icons";
import "../components/GetInTouch.css";

const GetInTouch = () => {
    const [formStatus, setFormStatus] = useState("");

    const validationSchema = Yup.object({
        name: Yup.string()
            .required("Name is required")
            .min(2, "Name must be at least 2 characters"),
        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
        phone: Yup.string()
            .required("Phone number is required")
            .matches(/^[0-9]{10}$/, "Phone number is not valid"),
        message: Yup.string()
            .required("Message is required")
            .min(10, "Message should be at least 10 characters"),
    });

    const initialValues = {
        name: "",
        email: "",
        phone: "",
        message: "",
    };

    const onSubmit = (values, { resetForm, setSubmitting }) => {
        const apiUrl = "https://reqres.in/api/users";

        axios
            .post(apiUrl, values)
            .then((response) => {
                // console.log("Success!", response.data);
                setFormStatus("Form submitted successfully!");
                resetForm();
                setSubmitting(false);
            })
            .catch((error) => {
                console.error("Form submission failed", error);
                setFormStatus("Error submitting form. Please try again.");
                setSubmitting(false);
            });
    };

    const handleFocus = () => {
        setFormStatus("");
    };

    return (
        <>
            <div className="bg-getintouch bg-no-repeat xl:bg-bgfull bg-cover xl:pb-[162px] lg:pb-28 pb-14">
                <div className="xl:max-w-[1252px] mx-auto px-3 xl:pt-[74px] lg:pt-28 pt-14">
                    <h2 className="font-medium lg:text-[58px] text-center md:text-[45px] sm:text-[38px] text-[35px] text-white leading-[125%] mb-[19px]">
                        Contact Us
                    </h2>
                    <p className="text-base font-medium text-center text-white">
                        You can put your feedback messages, and we will reach out to you
                        soon.
                    </p>
                    <div className="flex flex-wrap-reverse justify-between lg:gap-0 gap-10 xl:mt-[138px] lg:mt-28 mt-10">
                        <div className="xl:w-1/4 lg:w-[30%] w-full">
                            <h2 className="text-white sm:text-[40px] text-[34px] font-medium leading-[120%] mb-4 lg:text-start text-center">
                                Get In Touch
                            </h2>
                            <p className="text-white text-[15px] mb-[26px] lg:text-start text-center">
                                We’re here to help! Contact us, and we’ll respond promptly.
                            </p>
                            <p className="text-[16px] text-white font-bold">Address</p>
                            <a
                                href="https://www.google.com/maps/place/581,+Basement,+2,+Pace+City+I,+Sector+37,+Gurugram,+Haryana+122001/@28.4392399,77.0050121,17z/data=!3m1!4b1!4m9!1m2!2m1!1s+Plot+no.581,+Basement+Pace+City+2,+Sector+37,+Industrial+Area,+Gurugram+122004!3m5!1s0x390d17f58f7ce21d:0x8a2e41ac4f8097!8m2!3d28.43924!4d77.009883!15sCk5QbG90IG5vLjU4MSwgQmFzZW1lbnQgUGFjZSBDaXR5IDIsIFNlY3RvciAzNywgSW5kdXN0cmlhbCBBcmVhLCBHdXJ1Z3JhbSAxMjIwMDSSARBjb21wb3VuZF9zZWN0aW9u4AEA?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D"
                                className="text-white text-[15px] mb-[20px] hover:text-blue-500 transition-all duration-300 ease-linear"
                                target="_blank"
                            >
                                Plot no.581, Basement Pace City 2, Sector 37, Industrial Area,
                                Gurugram 122004
                            </a>
                            <p className="text-[16px] text-white font-bold mt-4">Email</p>
                            <a
                                href="mailto: info@gleebiotech.com"
                                className="text-white text-[15px] hover:text-blue-500 transition-all duration-300 ease-linear"
                            >
                                info@gleebiotech.com
                            </a>
                            <p className="text-[16px] text-white font-bold mt-4">Phone</p>
                            <a
                                href="tel:+911244014675"
                                className="text-white text-[15px] hover:text-blue-500 transition-all duration-300 ease-linear"
                            >
                                +911244014675
                            </a>
                            <p className="text-white font-semibold text-[14px] mb-[26px] lg:mt-[65px] mt-5">
                                Also available on:
                            </p>
                            <div className="flex gap-[38px]">
                                <a href="https://www.whatsapp.com/" target="_blank" className="transition-all duration-300 ease-linear hover:-translate-y-2">
                                    <Watsaap />
                                </a>
                                <a href="https://www.instagram.com/" target="_blank" className="transition-all duration-300 ease-linear hover:-translate-y-2">
                                    <Instragram />
                                </a>
                                <a href="https://www.facebook.com/" target="_blank" className="transition-all duration-300 ease-linear hover:-translate-y-2">
                                    <Facebook />
                                </a>
                                <a href="https://www.linkedin.com/" target="_blank" className="transition-all duration-300 ease-linear hover:-translate-y-2">
                                    <LinkedIn />
                                </a>
                            </div>
                        </div>
                        <div className="xl:w-[37%] lg:w-[50%] w-full">
                            <div className="p-[6px] rounded-[31px] bg-gradient-to-r from-[#6aaeca] via-[#1F488E] to-[#ffffff] animate-gradient-border">
                                <div className="sm:py-[34px] sm:px-[45px] p-4 bg-white rounded-[28px]">
                                    <h2 className="sm:text-[40px] text-[34px] text-center text-black mb-4">
                                        Send a message
                                    </h2>
                                    <Formik
                                        initialValues={initialValues}
                                        validationSchema={validationSchema}
                                        onSubmit={onSubmit}
                                    >
                                        {({ isSubmitting }) => (
                                            <Form className="space-y-4">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700">
                                                        Name
                                                    </label>
                                                    <Field
                                                        type="text"
                                                        name="name"
                                                        placeholder="Enter your name"
                                                        className="w-full px-4 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                        onFocus={handleFocus}
                                                    />
                                                    <ErrorMessage
                                                        name="name"
                                                        component="div"
                                                        className="text-red-500 text-sm"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700">
                                                        E-mail
                                                    </label>
                                                    <Field
                                                        type="email"
                                                        name="email"
                                                        placeholder="Enter your email"
                                                        className="w-full px-4 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                        onFocus={handleFocus}
                                                    />
                                                    <ErrorMessage
                                                        name="email"
                                                        component="div"
                                                        className="text-red-500 text-sm"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700">
                                                        Phone
                                                    </label>
                                                    <Field
                                                        type="tel"
                                                        name="phone"
                                                        placeholder="Enter your phone"
                                                        className="w-full px-4 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                        onFocus={handleFocus}
                                                    />
                                                    <ErrorMessage
                                                        name="phone"
                                                        component="div"
                                                        className="text-red-500 text-sm"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700">
                                                        Message
                                                    </label>
                                                    <Field
                                                        as="textarea"
                                                        name="message"
                                                        placeholder="Put your message and your phone number. We will reach out to you."
                                                        className="w-full px-4 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                        rows="4"
                                                        onFocus={handleFocus}
                                                    />
                                                    <ErrorMessage
                                                        name="message"
                                                        component="div"
                                                        className="text-red-500 text-sm"
                                                    />
                                                </div>
                                                <div className="flex justify-center">
                                                    <button
                                                        type="submit"
                                                        disabled={isSubmitting}
                                                        className="relative inline-block text-white text-[15px] py-[9.4px] px-[21.85px] leading-[18.75px] rounded-full text-lg
                       bg-gradient-to-r from-[#6aaeca] via-[#1F488E] to-[#727272] bg-[length:200%_200%] bg-left transition-all duration-500 ease-out
                       hover:bg-right"
                                                    >
                                                        {isSubmitting ? "Submitting..." : "Send Message"}
                                                    </button>
                                                </div>
                                                {formStatus && (
                                                    <p className="text-center text-green-500 mt-4">
                                                        {formStatus}
                                                    </p>
                                                )}
                                            </Form>
                                        )}
                                    </Formik>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GetInTouch;
