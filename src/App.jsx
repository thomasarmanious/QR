import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QRView from "./components/QRView";
import Survey from "./pages/Survey";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<QRView />} />
          <Route path="/survey" element={<Survey />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;