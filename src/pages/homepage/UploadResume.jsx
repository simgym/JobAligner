import React, { useState, forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineFileUpload } from "react-icons/md";
import "./UploadResume.css";

const UploadResume = forwardRef(({ setResumeSkills }, ref) => {
  const [url, setUrl] = useState("");
  const [skills, setSkills] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleUpload = async () => {
    const urlPattern = /\.(pdf|doc|docx|png|jpg)$/i;
    if (!urlPattern.test(url)) {
      setError(
        "Invalid file format. Allowed formats are .pdf, .doc, .docx, .png, .jpg"
      );
      return;
    }

    const apiUrl =
      "https://document-parsing-api.p.rapidapi.com/processDocument";
    const options = {
      method: "POST",
      headers: {
        "x-rapidapi-key": "06fa6066camsh41e84958a944266p1fa080jsn7c4b290bf81e",
        "x-rapidapi-host": "document-parsing-api.p.rapidapi.com",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        extractionDetails: {
          name: "CV - Extraction",
          language: "English",
          fields: [
            {
              key: "skills",
              description: "the skills of the person",
              example: "",
            },
          ],
        },
        file: url,
      }),
    };

    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch(apiUrl, options);
      const result = await response.json();
      console.log(result);

      setSkills(result.skills);
    } catch (error) {
      setError(error.message);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="uploadSkillsWrapper" ref={ref}>
      <div className="uploadHeading">
        <h1>Upload Resume</h1>
      </div>
      <div className="formatWarning">
        <p>Allowed formats url: .pdf, .doc, .docx, .png, .jpg</p>
      </div>
      <div className="uploadResumeInputButton">
        {" "}
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter the URL of the resume"
        />
        <button onClick={handleUpload} disabled={isLoading}>
          <MdOutlineFileUpload />
        </button>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div className="skillsWrapper">
        {skills && <h3>Your skills are :</h3>}

        <p>{skills}</p>
        <div className="skillsUploadButton">
          {skills && (
            <button
              onClick={() => {
                setResumeSkills(skills);
                navigate("/computedjobs");
              }}
            >
              Look for jobs
            </button>
          )}
        </div>
      </div>
    </div>
  );
});

export default UploadResume;
