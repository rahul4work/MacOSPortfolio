import { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierDuneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "./note.scss";
import MacWindow from "./MacWindow.jsx";
import NoteText from "../../assets/note.txt";

const Note = ({ windowName, setWindowsState }) => {
  const [markdown, setMarkdown] = useState(null);

  useEffect(() => {
    fetch(NoteText)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  });

  return (
    <MacWindow windowName={windowName} setWindowsState={setWindowsState}>
      <div className="note-window">
        {markdown ? (
          <SyntaxHighlighter language="typescript" style={atelierDuneDark}>
            {markdown}
          </SyntaxHighlighter>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </MacWindow>
  );
};

export default Note;
