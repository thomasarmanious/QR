import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QRView from "./components/QRView";
import Survey from "./pages/Survey";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QRView />} />
        <Route path="/survey" element={<Survey />} />
      </Routes>
    </Router>
  );
}

export default App;
