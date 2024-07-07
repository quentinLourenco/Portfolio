import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiMedium } from "react-icons/si";
const Socials = () => {
  return (
    <div className="header__socials">
       <a href="https://github.com/Jeweleni"  rel="noreferrer" target="_blank">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/momoreoluwajeweleni" rel="noreferrer" target="_blank">
        <BsLinkedin />
      </a>
     
      <a href="https://medium.com/@EMJCREATES">
        <SiMedium />
      </a>
    </div>
  );
};

export default Socials;
