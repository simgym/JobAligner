import { RiSingleQuotesL } from "react-icons/ri";
import { RiSingleQuotesR } from "react-icons/ri";
import startImg from "../../assets/homepageImg.jpg";
import "./Firstpart.css";

const Firstpart = () => {
  return (
    <div className="firstpartWrapper">
      <div className="firstpartQuote">
        <span className="leftQuote">
          <RiSingleQuotesL />
        </span>
        <p>Fast-Track Your Job Hunt - Where Skills Meet Possibilities.</p>
        <span className="rightQuote">
          <RiSingleQuotesR />
        </span>
      </div>
      <div className="startImgWrapper">
        <img src={startImg} />
      </div>
    </div>
  );
};

export default Firstpart;
