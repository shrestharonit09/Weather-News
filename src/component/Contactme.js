import React, { useState } from "react";
import emailjs from "emailjs-com";
import {toast,ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ContactMe = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

 
  const handleSubmit = (e) => {
    e.preventDefault();

    if(!props.loginvayo){
      toast.error("Login first of all");
      return;
    }

    const templateParams = {
      from_name: name,
      email_id: email,
      message: comment,
    };

    emailjs
      .send("service_un7iwjl", "template_ucmb9tw", templateParams, "IvvcsF8ZNJi2jqvYY")
      .then(
        (response) => {
          alert("Your message has been sent successfully!");
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          console.error("FAILED...", error);
          toast.error("There was an error sending your message. Please try again later.");
        }
      );
      setName("");
      setEmail("");
      setComment("");
  };

  return (
    <div className="flex justify-center my-12 mt-16">
      <ToastContainer/>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col py-4 px-4 gap-5 bg-gray-300 rounded-lg border border-gray-300 w-[65vw] sm:w-[50vw] md:w-[45vw] lg:w-[35vw] p-2 shadow-lg"
      >
        <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-bold text-blue-600">
          Contact Me
        </h1>

        <input
          className="rounded-t-lg rounded-b-lg w-full h-12 p-2"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          className="rounded-t-lg rounded-b-lg w-full h-12 p-2"
          type="email"
          placeholder="Your Email Address Please"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <textarea
          className="rounded-t-lg rounded-b-lg w-full h-32 p-2"
          placeholder="Your Comments"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        ></textarea>

        <button
          className="p-2 bg-blue-500 hover:bg-blue-700 rounded-t-lg rounded-b-lg text-white font-bold text-xl"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactMe;


