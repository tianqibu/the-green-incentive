import React from "react";
import Gif from "./ContactUs.gif";
import "./ContactUsGif.css";
import { Link } from "react-router-dom";

const ContactUsGif = () => {
  return (
    <div className="container-contact">
      <div className="contact-us-gif">
        <Link to="/contact-us">
          <img src={Gif} className="gif" alt="contact us gif"></img>
        </Link>
      </div>
    </div>
  );
};

export default ContactUsGif;
