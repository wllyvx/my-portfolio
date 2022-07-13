import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <div className="grid h-[20rem] grid-cols-2 md:h-[70%]">
      <button className="flex h-full items-center justify-center border border-type transition-all duration-200 hover:bg-main hover:text-background">
        <a href="https://github.com/wllyvx" target="blank_">
          <FaGithub className="h-12 w-12" />
        </a>
      </button>
      <button className="flex h-full items-center justify-center border border-type transition-all duration-200 hover:bg-main hover:text-background">
        <a href="https://linkedin.com/in/willy-f-ramadhan" target="blank_">
          <FaLinkedin className="h-12 w-12" />
        </a>
      </button>
      <button className="flex h-full items-center justify-center border border-type transition-all duration-200 hover:bg-main hover:text-background">
        <a href="https://instagram.com/willyframadhan" target="blank_">
          <FaInstagram className="h-12 w-12" />
        </a>
      </button>
      <button className="flex h-full items-center justify-center border border-type transition-all duration-200 hover:bg-main hover:text-background">
        <a href="https://wa.me/62895335731642" target="blank_">
          <FaWhatsapp className="h-12 w-12" />
        </a>
      </button>
    </div>
  );
}

export default Contact;
