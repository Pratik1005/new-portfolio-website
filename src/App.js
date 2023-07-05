import {Route, Routes} from "react-router-dom";
import "./App.css";
import {Home} from "./pages/Home";
import {Project} from "./pages/Project";
import {About} from "./pages/About";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";

function App() {
  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/projects"} element={<Project />} />
        <Route path={"/about"} element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
