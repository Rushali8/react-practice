import {  useState } from "react";
import "./App.css";
import About from "./Components/About";
// import Color from "./Components/Color";
import Navbar from "./Components/Navbar";
import Textform from "./Components/TextForm";
import Alert from "./Components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled", "Success");
      document.title = "TextUtils-Dark Mode";
      setInterval(() => {});
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "Danger");

      document.title = "TextUtils-Light Mode";
    }
  };

  return (
    <div>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
      {/* <About/> */}
      <Textform showAlert={showAlert} heading="Enter your text to analyze here"/>
      </div>
    </div>
  );
}

export default App;
