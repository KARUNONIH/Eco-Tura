import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AppLoader from "./component/loading/AppLoader";
import Comic from "./component/animation/Comic";

function App() {
  const [stage, setStage] = useState("loading");


  const MainPage = () => {
    if (stage === "loading") return <AppLoader onComplete={() => setStage("comic")} />;
    if (stage === "comic") return <Comic onComplete={() => setStage("dashboard")} />;
    if (stage === "dashboard") return <Dashboard />;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
