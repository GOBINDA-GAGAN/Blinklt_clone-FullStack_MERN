import React from "react";
import { Link } from "react-router-dom";

import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { BsThreads } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const socialIcons = [
  {
    name: "Facebook",
    icon: <FaFacebookF size={20} />,
    link: "https://www.facebook.com",
  },
  {
    name: "Instagram",
    icon: <FaInstagram size={20} />,
    link: "https://www.instagram.com",
  },
  {
    name: "Twitter",
    icon: <FaTwitter size={20} />,
    link: "https://www.twitter.com",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={20} />,
    link: "https://www.linkedin.com",
  },
  {
    name: "Threads",
    icon: <BsThreads size={20} />,
    link: "https://www.threads.net",
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-2 p-3 bg-slate-100 font-prompt">
      <div className="container mx-auto flex lg:flex-row flex-col justify-between items-center w-full lg:w-8/12">
        <p className="text-center p-1">© Blink Commerce Private Limited, 2016-2024</p>
        <div className="flex gap-3 flex-wrap justify-start items-center p-2">
          {socialIcons.map((icon, index) => {
            return (
              <span className="p-2 rounded-full bg-black text-white hover:-translate-y-1 shadow-lg  transition-all">
                <Link to={icon.link}>{icon.icon}</Link>
              </span>
            );
          })}
        </div>
      </div>

      <div className=" lg:w-10/12 w-full mx-auto text-sm text-gray-500 p-3">
        <p>
          “Blinkit” is owned & managed by "Blink Commerce Private Limited" and
          is not related, linked or interconnected in whatsoever manner or
          nature, to “GROFFR.COM” which is a real estate services business
          operated by “Redstone Consultancy Services Private Limited”.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
