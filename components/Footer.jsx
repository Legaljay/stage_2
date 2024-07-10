"use client";

import React, { useState } from "react";
import { useFormStatus } from "react-dom";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { RiInstagramFill } from "react-icons/ri"
// import './Footer.css';

const Footer = () => {
  const [clicked, setClicked] = useState(false);
  const [mail, setMail] = useState("");
  const { pending } = useFormStatus();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!pending) {
      setClicked(true);
    }
  };

  return (
    <footer className="grid grid-cols-1 xl:grid-flow-col gap-[72px] md:gap-20 xl:gap-[131px] py-16 px-[55px] md:px-10 xl:px-7 bg-[#262626]">
      <div className="grid grid-cols-4 place-items-center">
          <a href="#">
            <FaFacebookSquare size={30} color="#CFC9C8" />
          </a>
          <a href="#">
            <FaLinkedin size={30} color="#CFC9C8"/>
          </a>
          <a href="#">
            <FaXTwitter size={30} color="#CFC9C8"/>
          </a>
          <a href="#">
            <RiInstagramFill size={30} color="#CFC9C8"/>
          </a>
      </div>
      <div className="flex xl:gap-[131px] justify-evenly">
        <div className="w-fit">
            <span className="text-lg font-medium text-white">Features</span>
            <ul>
            <li>
                <a href="#" className="text-sm font-medium text-white">Shipping</a>
            </li>
            <li>
                <a href="#" className="text-sm font-medium text-white">Our products</a>
            </li>
            <li>
                <a href="#" className="text-sm font-medium text-white">Terms of Service</a>
            </li>
            <li>
                <a href="#" className="text-sm font-medium text-white">About Us</a>
            </li>
            </ul>
        </div>
        <div className="w-fit">
            <span  className="text-lg font-medium text-white">Quick links</span>
            <ul>
            <li>
                <a href="#" className="text-sm font-medium text-white">Home</a>
            </li>
            <li>
                <a href="#" className="text-sm font-medium text-white">Sign In</a>
            </li>
            <li>
                <a href="#" className="text-sm font-medium text-white">Pricing</a>
            </li>
            <li>
                <a href="#" className="text-sm font-medium text-white">FAQ</a>
            </li>
            </ul>
        </div>
      </div>
      <div className="footer-section flex flex-col gap-4 w-full">
        <span className="text-lg font-medium text-white">Join Our Newsletter</span>
        <form onSubmit={handleSubmit} className="w-full">
          {!clicked ? (
            <div className="w-full flex flex-col gap-1">
                <div className="w-full flex md:gap-1 xl:gap-1">
                    <input
                        type="email"
                        placeholder="Your email address"
                        value={mail}
                        className="w-full md:w-3/4 lg:w-3/5 px-5 py-3 xl:p-5 rounded-lg md:rounded-[5px] outline-none placeholder:text-[8px] md:placeholder:text-base"
                        onChange={(e) => {
                        setMail(e.target.value);
                        }}
                    />
                    <button disabled={pending} type="submit" className="-ml-20 md:ml-0 xl:ml-0 xl:animate-bounce px-5 py-3.5 xl:p-5 rounded-lg md:rounded-[5px] text-[12px] md:text-base text-white bg-[#555]">Subscribe</button>
                </div>
                <ul className="">
                   <li className="text-white opacity-50 text-sm">Subscribe to our newsletter and we will inform you about latest
                    updates and promotions</li> 
                </ul>
            </div>
          ) : (
            <p>Email Sent Succesfully</p>
          )}
        </form>
      </div>
    </footer>
  );
};

export default Footer;
