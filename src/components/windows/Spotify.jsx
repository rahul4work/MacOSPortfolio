import "./spotify.scss";
import MacWindow from "./MacWindow.jsx";

const Spotify = ({ windowName, setWindowsState }) => {
  return (
    <MacWindow
      width="25vw"
      windowName={windowName}
      setWindowsState={setWindowsState}
    >
      <div className="spotify-window">
        <iframe
          data-testid="embed-iframe"
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/playlist/4jfcYoFmbduKMu5jjqjsuG?utm_source=generator&theme=0"
          width="100%"
          height="352"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </MacWindow>
  );
};

export default Spotify;
