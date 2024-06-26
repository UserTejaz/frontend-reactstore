import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Welcome to our online store, where technology meets convenience! At
            ReactStore, we pride ourselves on offering a diverse selection of
            cutting-edge gadgets and accessories to enhance every aspect of your
            digital lifestyle.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">Nanded, Maharashtra, India</div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: 1234567890</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: store@react.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <span className="text">Headphones</span>
          <span className="text">Smart Watches</span>
          <span className="text">Bluetooth Speakers</span>
          <span className="text">Wireless Earbuds</span>
          <span className="text">Smart Phones</span>
          <span className="text">Laptops</span>
          <span className="text">Tablets</span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <span className="text">REACTSTORE 2024 CREATED BY TEJAS.</span>
          <img src={Payment} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
