import "./App.css";
import Alert from "./commonent/Alert";
import Navbar from "./commonent/Navbar";
import TextForm from "./commonent/TextForm";
const App = () => {
  return (
    <>
      <Navbar title="TextUtils" />
      {/* <Alert content="Operation Performed" /> */}
      <TextForm heading="Enter the Text To Analyse" />
    </>
  );
};

export default App;
