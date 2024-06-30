import React from "react";
import "./CSS/aboutus.css";

export default function AboutUs() {
  return (
    <div className="section">
      <div className="head"></div>
      <div className="about">
        <p className="aboutHostel">
          <span>IET DAVV University Hostel Complaint Portal</span> is a complaint management system that allows students to register their complaints online.
          It will allow hostel authorities to easily maintain the complaints in a more efficient and effective way.
        </p>
      </div>

      <div className="creators">
        <a
          href="https://www.instagram.com/._priyanshu070702_."
          target="_blank"
          rel="noopener noreferrer"
          className="creator">
          <div className="personDetail">
            <p className="name">Vinayak Gumasta</p>
            <p className="collageId">21btc070</p>
          </div>
        </a>
        
        
      </div>
    </div>
  );
}


