import React from "react";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        EMJCreates
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contacts">Contacts</a>
        </li>
      </ul>

      <div className="footer__socials">
      <a href=""  rel="noreferrer" target="_blank">
        <FaGithub />
      </a>
        <a href="">
          <IoLogoTwitter />
        </a>
        <a href="">
          <FaInstagram />{" "}
        </a>
        <a href="">
          <FaLinkedinIn />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
