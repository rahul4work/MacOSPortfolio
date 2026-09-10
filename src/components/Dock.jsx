import React from "react";
import "./dock.scss";

const Dock = () => {
  return (
    <footer>
      <div
        onClick={() => {
          setWindowsState((state) => ({ ...state, github: true }));
        }}
        className="icon github"
      >
        <img src="/doc-icons/github.svg" alt="github-icon" />
      </div>
      <div
        onClick={() => {
          setWindowsState((state) => ({ ...state, note: true }));
        }}
        className="icon note"
      >
        <img src="/doc-icons/note.svg" alt="note-icon" />
      </div>
      <div
        onClick={() => {
          setWindowsState((state) => ({ ...state, resume: true }));
        }}
        className="icon pdf"
      >
        <img src="/doc-icons/pdf.svg" alt="pdf-icon" />
      </div>
      <div
        onClick={() => {
          window.open("https://calendar.google.com/", "_blank");
        }}
        className="icon calender"
      >
        <img src="/doc-icons/calender.svg" alt="calender-icon" />
      </div>
      <div
        onClick={() => {
          setWindowsState((state) => ({ ...state, spotify: true }));
        }}
        className="icon spotify"
      >
        <img src="/doc-icons/spotify.svg" alt="spotify-icon" />
      </div>
      <div
        onClick={() => {
          window.open("mailto:heyyrj98@gmail.com", "_blank");
        }}
        className="icon mail"
      >
        <img src="/doc-icons/mail.svg" alt="mail-icon" />
      </div>
      <div
        onClick={() => {
          window.open(
            "https://www.linkedin.com/in/kumar-rahul4work/",
            "_blank",
          );
        }}
        className="icon link"
      >
        <img src="/doc-icons/link.svg" alt="link-icon" />
      </div>
      <div
        onClick={() => {
          setWindowsState((state) => ({ ...state, cli: true }));
        }}
        className="icon cli"
      >
        <img src="/doc-icons/cli.svg" alt="cli-icon" />
      </div>
    </footer>
  );
};

export default Dock;
