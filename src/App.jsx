import { useState } from "react";
import "./app.scss";
import Nav from "./components/Nav.jsx";
import Dock from "./components/Dock.jsx";
import Github from "./components/windows/Github.jsx";
import Note from "./components/windows/Note.jsx";
import Resume from "./components/windows/Resume.jsx";
import Spotify from "./components/windows/Spotify.jsx";
import Cli from "./components/windows/Cli.jsx";

const App = () => {
  const [windowsState, setWindowsState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false,
  });

  return (
    <main>
      <Nav />
      <Dock windowsState={windowsState} setWindowsState={setWindowsState} />

      {windowsState.github && (
        <Github setWindowsState={setWindowsState} windowName="github" />
      )}

      {windowsState.note && (
        <Note setWindowsState={setWindowsState} windowName="note" />
      )}

      {windowsState.resume && (
        <Resume setWindowsState={setWindowsState} windowName="resume" />
      )}

      {windowsState.spotify && (
        <Spotify setWindowsState={setWindowsState} windowName="spotify" />
      )}

      {windowsState.cli && (
        <Cli setWindowsState={setWindowsState} windowName="cli" />
      )}
    </main>
  );
};

export default App;
