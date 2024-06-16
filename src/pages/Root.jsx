import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const RootLayout = ({ scrollToSection, resumeRef }) => {
  return (
    <>
      <span className="top_most_part">
        <Navbar scrollToSection={scrollToSection} resumeRef={resumeRef} />
      </span>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
