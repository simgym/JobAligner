import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "./GenerateJobList.css";
import defaultLogo from "../assets/defaultJobLogo.jpg";

const GenerateJobList = ({ skills }) => {
  const [jobList, setJobList] = useState([]);

  const url = "https://apijob-job-searching-api.p.rapidapi.com/v1/job/search";
  const options = {
    method: "POST",
    headers: {
      "x-rapidapi-key": "06fa6066camsh41e84958a944266p1fa080jsn7c4b290bf81e",
      "x-rapidapi-host": "apijob-job-searching-api.p.rapidapi.com",
      "Content-Type": "application/json",
    },
  };
  const fetchJobs = async () => {
    try {
      const response = await fetch(url, {
        ...options,
        body: JSON.stringify({ q: skills }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      console.log(result);
      setJobList(result.hits);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [url]);

  return (
    <div className="generateJobWrapper">
      <div className="RelatedJobHeading">
        <h2>Related Jobs</h2>
      </div>
      <div className="jobWrapper">
        {jobList.map((item, index) => (
          <div key={index} className="jobCard">
            <span className="jobLogoTitle">
              <span className="jobLogo">
                <img
                  src={
                    item.hiringOrganizationLogo
                      ? item.hiringOrganizationLogo
                      : defaultLogo
                  }
                />
              </span>
              <span className="jobTitle">
                {" "}
                {item.hiringOrganizationName
                  ? item.hiringOrganizationName
                  : "Unavailable"}
              </span>
            </span>
            <span className="jobCompany">{item.title}</span>
            <span className="jobTypeStatus">
              <span>
                {item.employmentType ? item.employmentType : "Full-time"}
              </span>
              <span
                className={
                  item.status === "active" ? "jobActive" : "jobExpired"
                }
              >
                {item.status ? item.status : "expired"}
              </span>
            </span>
            <span className="ApplyLink">
              <span>
                <a href={item.url} target="_blank">
                  Apply
                </a>
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenerateJobList;
