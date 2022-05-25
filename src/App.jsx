import "./App.css";
// import About from "./commonent/About";
// import Alert from "./commonent/Alert";
import Navbar from "./commonent/Navbar";
import TextForm from "./commonent/TextForm";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtils" />
      <TextForm heading="Enter the Text To Analyse" />
      {/* <Routes>
          <Route
            exact
            path="/"
            element={<TextForm heading="Enter the Text To Analyse" />}
          />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router> */}
    </>
  );
};

export default App;
