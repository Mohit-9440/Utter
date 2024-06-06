import React from "react";
import "./about.css";
import A4 from "../../assets/a4.png";
import A5 from "../../assets/a5.png";
import A6 from "../../assets/a6.png";

export default function About() {
  return (
    <div className="about-wrapper">
      <div className="about">
        <div className="about-heading">About Us</div>
        <div className="about-content">
          <div className="about-con-wrap">
            <div className="about-con">
              PRandit as the premier engagement-focused specialty media
              relations and communication advisory. Our team comes with a strong
              understanding of media and relationships with relevant media that
              enables us to offer services that add value and align with the
              client's corporate vision.
            </div>
            <div className="about-img">
              <img className="about-images" src={A5} />
            </div>
          </div>
          <div className="about-con-wrap-mid">
            <div className="about-con cont">
              We have expertise in Media Relations, Public Relations, Content
              Creation, and Brand Building.
            </div>
            <div className="about-img">
              <img className="about-images" src={A4} />
            </div>
          </div>
          <div className="about-con-wrap">
            <div className="about-con">
              {" "}
              We are operational in PAN India and have offices in Delhi and
              Gurgaon. We have served clients from sustainability, Battery
              recycling, Insect Feed, and Biotechnology. Real Estate, Ministry,
              Advocacy, Deep technology, OEMs, Electric Vehicles, Public Health,
              Incubators, Social and rural Enterprises, Technology, Energy,
              Gaming, Fintech, Education, VC, and Startup ecosystems.
            </div>
            <div className="about-img">
              <img className="about-images" src={A6} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
