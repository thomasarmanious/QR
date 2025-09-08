import React, { useState, useEffect } from "react";
import QRView from "./components/QRView";
import FormView from "./components/FormView";
import "./App.css";

function App() {
  const [currentView, setCurrentView] = useState("qr");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("view") === "form") {
      setCurrentView("form");
    }
  }, []);

  return (
    <div className="App">
      {currentView === "qr" ? (
        <QRView setCurrentView={setCurrentView} />
      ) : (
        <FormView />
      )}
    </div>
  );
}

export default App;
