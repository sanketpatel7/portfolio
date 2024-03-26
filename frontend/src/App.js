import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";
import Contect from "./routes/Contect";
import ChildAbout from "./component/ChildAbout";

function App() {
  return (
    <>
      <Routes basename="/">
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/project" Component={Project} />
        <Route path="/contect" Component={Contect} />
        <Route path="/about/aboutMe" Component={ChildAbout} />
      </Routes>
    </>
  );
}

export default App;
