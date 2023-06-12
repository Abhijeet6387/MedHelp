import "../src/styles/App.css";
import WithNav from "./components/WithNav";
import WithoutNav from "./components/WithoutNav";
import Home from "./components/Home";
import BookAppoint from "./components/BookAppointment";
import Faq from "./components/FAQ";
import Register from "./components/Register";
import Login from "./components/Login";
import Appoint from "./components/Appoint";
import News from "./components/News/News";
import AllAppointments from "./components/AllAppointments";
import SymptomChecker from "./components/SymptomChecker";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<WithoutNav />}>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route element={<WithNav />}>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/appointment" element={<Appoint />}></Route>
            <Route path="/bookappoint" element={<BookAppoint />}></Route>
            <Route path="/latestnews" element={<News />}></Route>
            <Route path="/faq" element={<Faq />}></Route>
            <Route path="/symptomcheck" element={<SymptomChecker />}></Route>
            <Route
              path="/viewappointment"
              element={<AllAppointments />}
            ></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
