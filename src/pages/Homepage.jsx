import React from "react";
import Navbar from "../components/Navbar";
import Firstpart from "./homepage/Firstpart";
import UploadResume from "./homepage/UploadResume";
import Ourmission from "./homepage/Ourmission";

import { Link } from "react-router-dom";

const Homepage = ({ setResumeSkills, resumeRef }) => {
  return (
    <div>
      <div>
        <Firstpart />
        <Ourmission />
        <UploadResume setResumeSkills={setResumeSkills} ref={resumeRef} />
      </div>
      <div></div>
    </div>
  );
};

export default Homepage;
