import { useState } from "react";
import logo from "./logo.svg";
import { Counter, ButtonGrp, Preview, Submit } from "./components";
import "./App.css";

function App() {
  const [showPreview, setShowPreview] = useState(false);
  const [showSubmit, setShowSubmit] = useState(false);

  const togglePreview = () => {
    setShowPreview(!showPreview);
  };
  const toggleSubmit = () => {
    setShowSubmit(!showSubmit);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {!showPreview && !showSubmit ? (
        <div>
          <Counter></Counter>
          <ButtonGrp
            onPreview={togglePreview}
            onSubmit={toggleSubmit}></ButtonGrp>
        </div>
      ) : null}
      {showPreview ? <Preview onBack={togglePreview}></Preview> : null}
      {showSubmit ? <Submit onBack={toggleSubmit}></Submit> : null}
    </div>
  );
}

export default App;
