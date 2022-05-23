import "./App.css";
import Navbar from "./commonent/Navbar";
import TextForm from "./commonent/TextForm";

const App = () => {
  return (
    <>
      <Navbar title="TextUtils" />
      <TextForm heading="Enter the Text To Analyse" />
    </>
  );
};

export default App;
