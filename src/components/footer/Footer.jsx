import React from "react";
import "./footer.css";
import Instagram from "../../assets/instagram.svg";
import Linkedin from "../../assets/linkedin.svg";
import Twitter from "../../assets/twitter.svg";
import Facebook from "../../assets/facebook.svg";

export default function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer">
        <div className="footer-left">
          <div className="footer-left-con">Privacy Policy</div>
          <div className="footer-left-con">Terms of Service</div>
        </div>
        <div className="footer-right">
          <ul className="footer-right-ul">
            <li>
              <a>
                <img src={Instagram} alt="" />
              </a>
            </li>
            <li>
              <a>
                <img src={Linkedin} alt="" />
              </a>
            </li>
            <li>
              <a>
                <img src={Twitter} alt="" />
              </a>
            </li>
            <li>
              <a>
                <img src={Facebook} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
