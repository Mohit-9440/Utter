import React from "react";
import "./home.css";
import Video from "../../assets/home-video.mp4";

export default function Home() {
  return (
    <div className="home-wrapper">
      <div className="home">
        <video className="home-video" autoPlay muted loop>
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
