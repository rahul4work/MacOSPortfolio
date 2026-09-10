import "./resume.scss";
import MacWindow from "./MacWindow.jsx";
import MyResume from "../../assets/resume.pdf";

const Resume = ({ windowName, setWindowsState }) => {
  return (
    <MacWindow windowName={windowName} setWindowsState={setWindowsState}>
      <div className="resume-window">
        <iframe src={MyResume} title="Rahul's resume">
          <a href={MyResume} target="_blank" rel="noreferrer">
            Open the resume PDF
          </a>
        </iframe>
      </div>
    </MacWindow>
  );
};

export default Resume;
