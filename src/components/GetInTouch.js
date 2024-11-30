import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Facebook, Instragram, LinkedIn, Watsaap } from "./Icons";
import "../components/GetInTouch.css";

const GetInTouch = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  const validationSchema = Yup.object({
    user_name: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .required("Name is required"),
    user_contact: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
    user_mail: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .required("Message is required"),
  });

  const initialValues = {
    user_name: "",
    user_contact: "",
    user_mail: "",
    message: "",
  };

  const onSubmit = async (values, { resetForm }) => {
    const contactData = { ...values, code: "pdpl" };

    try {
      const response = await fetch("https://api.plusdistribution.in/pdpl/contact-us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormStatus("Your message has been sent successfully!");
        resetForm();
      } else {
        setFormStatus("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      setFormStatus("Something went wrong. Please try again later.");
    }
  };

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsSubmitted(false);
        setFormStatus("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  return (
    <div className="bg-[#EFEFEF] md:pt-20 xl:pb-[100px] lg:pb-28 py-14">
      <div className="xl:max-w-[1252px] mx-auto px-3">
        <div className="flex flex-wrap justify-between items-center lg:gap-0 gap-10">
          <div className="xl:w-1/4 lg:w-[30%] w-full">
            <h2 className="text-black sm:text-[40px] text-[34px] font-medium leading-[120%] mb-4 lg:text-start text-center" data-aos="fade-right">
              Get In Touch
            </h2>
            <p className="text-black text-[15px] mb-[26px] lg:text-start text-center" data-aos="fade-right">
              We’ re here to help! Contact us, and we’ll respond promptly.
            </p>
            <p className="text-[16px] text-black font-bold" data-aos="fade-right">Address</p>
            <a
              href="https://www.google.com/maps/place/581,+Basement,+2,+Pace+City+I,+Sector+37,+Gurugram,+Haryana+122001"
              className="text-black text-[15px] mb-[20px] hover:text-blue-500 transition-all duration-300 ease-linear"
              target="_blank"
              rel="noopener noreferrer"
            >
              Plot no.581, Basement Pace City 2, Sector 37, Industrial Area, Gurugram 122004
            </a>
            <p className="text-[16px] text-black font-bold mt-4" data-aos="fade-right">Email</p>
            <a
              href="mailto:info@gleebiotech.com"
              className="text-black text-[15px] hover:text-blue-500 transition-all duration-300 ease-linear"
            >
              info@gleebiotech.com
            </a>
            <p className="text-[16px] text-black font-bold mt-4" data-aos="fade-right">Phone</p>
            <a
              href="tel:+911244014675"
              className="text-black text-[15px] hover:text-blue-500 transition-all duration-300 ease-linear"
            >
              +911244014675
            </a>
            <p className="text-black font-semibold text-[14px] mb-[26px] mt-5" data-aos="fade-right">Also available on:</p>
            <div className="flex gap-[38px]" data-aos="fade-right">
              <a
                href="https://www.whatsapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 ease-linear hover:-translate-y-2"
              >
                <Watsaap />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 ease-linear hover:-translate-y-2"
              >
                <Instragram />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 ease-linear hover:-translate-y-2"
              >
                <Facebook />
              </a>
              <a
                href="https://www.linkedin.com/company/glee-biotech-ltd/?trk=ppro_cprof&originalSubdomain=ae"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 ease-linear hover:-translate-y-2"
              >
                <LinkedIn />
              </a>
            </div>
          </div>
          <div className="xl:w-[37%] lg:w-[50%] w-full" data-aos="fade-left">
            <div className="p-[6px] rounded-[31px] bg-gradient-to-r from-[#6aaeca] via-[#1F488E] to-[#ffffff] animate-gradient-border">
              <div className="sm:py-[34px] sm:px-[45px] p-4 bg-white rounded-[28px]">
                <h2 className="text-[34px] text-center text-black mb-4">Send a message</h2>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={onSubmit}
                >
                  {({ isSubmitting }) => (
                    <Form className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <Field
                          type="text"
                          name="user_name"
                          placeholder="Enter your name"
                          className="w-full px-4 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <ErrorMessage name="user_name" component="div" className="text-red-500 text-sm" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <Field
                          type="email"
                          name="user_mail"
                          placeholder="Enter your email"
                          className="w-full px-4 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <ErrorMessage name="user_mail" component="div" className="text-red-500 text-sm" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Phone</label>
                        <Field
                          type="tel"
                          name="user_contact"
                          placeholder="Enter your phone"
                          className="w-full px-4 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <ErrorMessage name="user_contact" component="div" className="text-red-500 text-sm" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Message</label>
                        <Field
                          as="textarea"
                          name="message"
                          placeholder="Enter your message"
                          rows="4"
                          className="w-full px-4 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <ErrorMessage name="message" component="div" className="text-red-500 text-sm" />
                      </div>

                      <div className="flex justify-center items-center">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="relative inline-block text-white text-[15px] py-[9.4px] px-[45.85px] leading-[18.75px] rounded-full text-lg
                       bg-gradient-to-r from-[#6aaeca] via-[#1F488E] to-[#727272] bg-[length:200%_200%] bg-left transition-all duration-500 ease-out
                       hover:bg-right "
                        >
                          {isSubmitting ? "Submitting..." : "Send"}
                        </button>
                      </div>

                      {formStatus && (
                        <div className="mt-4 text-center text-green-500">
                          {formStatus}
                        </div>
                      )}
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
        <div className="p-[4px] rounded-[30px] bg-gradient-to-r from-[#6aaeca] via-[#1F488E] to-[#ffffff] animate-gradient-border mt-10" data-aos="fade-down">
          <div className="relative w-full rounded-[30px] bg-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4961.434870431194!2d77.03534980180912!3d28.441449846327092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19b6ea67792d%3A0xe28bd8ef251ecf0f!2sGlee%20Biotech%20LTD!5e0!3m2!1sen!2sin!4v1728017477577!5m2!1sen!2sin"
              width="100%"
              height="324px"
              loading="lazy"
              className="w-full rounded-[30px]"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
