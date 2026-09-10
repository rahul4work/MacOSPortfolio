import "./github.scss";
import MacWindow from "./MacWindow.jsx";
import GitHubData from "../../assets/github.json";

const GitHubCard = ({
  data = {
    id: "",
    image: "",
    title: "",
    description: "",
    tags: [],
    repoLink: "",
    demoLink: "",
  },
}) => {
  return (
    <div className="card">
      <img src={data.image} alt="" />
      <h1>{data.title}</h1>
      <p className="description">{data.description}</p>

      <div className="tags">
        {data.tags.map((tag) => {
          return <p className="tag">{tag}</p>;
        })}
      </div>

      <div className="urls">
        <a href={data.repoLink}>Repository</a>
        <a href={data.demoLink}>Demo Link</a>
      </div>
    </div>
  );
};

const Github = ({ windowName, setWindowsState }) => {
  return (
    <MacWindow setWindowsState={setWindowsState} windowName={windowName}>
      <div className="cards">
        {GitHubData.map((projects) => {
          return <GitHubCard data={projects} />;
        })}
      </div>
    </MacWindow>
  );
};

export default Github;
