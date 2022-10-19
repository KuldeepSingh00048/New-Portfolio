import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Qualification from "./components/Services/Qualification";
import "./App.css";
import Portfolio from "./components/Portfolio/Portfolio";
import Internships from "./components/Internships/Internships";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Qualification />
      <Portfolio />
      <Internships />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
