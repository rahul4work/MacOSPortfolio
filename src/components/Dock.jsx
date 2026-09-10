import "./dock.scss";
import GitHubIcon from "../assets/doc-icons/github.svg";
import NoteIcon from "../assets/doc-icons/note.svg";
import DocIcon from "../assets/doc-icons/pdf.svg";
import CalenderIcon from "../assets/doc-icons/calender.svg";
import SpotifyIcon from "../assets/doc-icons/spotify.svg";
import MailIcon from "../assets/doc-icons/mail.svg";
import LinkIcon from "../assets/doc-icons/link.svg";
import CliIcon from "../assets/doc-icons/cli.svg";

const Dock = ({ windowsState, setWindowsState }) => {
  return (
    <footer>
      <div
        onClick={() => {
          setWindowsState((state) => ({ ...state, github: true }));
        }}
        className="icon github"
      >
        <img src={GitHubIcon} alt="github-icon" />
      </div>
      <div
        onClick={() => {
          setWindowsState((state) => ({ ...state, note: true }));
        }}
        className="icon note"
      >
        <img src={NoteIcon} alt="note-icon" />
      </div>
      <div
        onClick={() => {
          setWindowsState((state) => ({ ...state, resume: true }));
        }}
        className="icon pdf"
      >
        <img src={DocIcon} alt="pdf-icon" />
      </div>
      <div
        onClick={() => {
          window.open("https://calendar.google.com/", "_blank");
        }}
        className="icon calender"
      >
        <img src={CalenderIcon} alt="calender-icon" />
      </div>
      <div
        onClick={() => {
          setWindowsState((state) => ({ ...state, spotify: true }));
        }}
        className="icon spotify"
      >
        <img src={SpotifyIcon} alt="spotify-icon" />
      </div>
      <div
        onClick={() => {
          window.open("mailto:heyyrj98@gmail.com", "_blank");
        }}
        className="icon mail"
      >
        <img src={MailIcon} alt="mail-icon" />
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
        <img src={LinkIcon} alt="link-icon" />
      </div>
      <div
        onClick={() => {
          setWindowsState((state) => ({ ...state, cli: true }));
        }}
        className="icon cli"
      >
        <img src={CliIcon} alt="cli-icon" />
      </div>
    </footer>
  );
};

export default Dock;
