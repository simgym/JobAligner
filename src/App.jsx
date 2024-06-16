import { useRef, useState } from "react";
import GenerateJobList from "./components/GenerateJobList";
import Navbar from "./components/Navbar";
import "./App.css";
import Homepage from "./pages/Homepage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import Errorpage from "./pages/ErrorPage";

function App() {
  const [skills, setSkills] = useState("");

  const resumeRef = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <RootLayout scrollToSection={scrollToSection} resumeRef={resumeRef} />
      ),
      errorElement: <Errorpage />,
      children: [
        {
          index: true,
          element: (
            <Homepage setResumeSkills={setSkills} resumeRef={resumeRef} />
          ),
        },
        {
          path: "computedjobs",
          element: <GenerateJobList skills={skills} />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
