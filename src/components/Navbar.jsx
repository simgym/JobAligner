import React from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ scrollToSection, resumeRef }) => {
  const navigate = useNavigate();

  return (
    <main>
      {" "}
      <div className="wrapper">
        <h1>JobAligner</h1>
        <div className="services">
          <span className="home" onClick={() => navigate("/")}>
            <p>Home</p>
          </span>

          <span className="AddResume">
            <IoCloudUploadOutline />
            <p
              onClick={() => {
                scrollToSection(resumeRef);
              }}
            >
              Resume
            </p>
          </span>
          <span className="contact">
            <p> Contact</p>
          </span>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
