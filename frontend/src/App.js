import HomePage from "./Components/HomePage";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<HomePage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
