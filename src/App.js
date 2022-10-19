import "./App.css";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Action from "./components/Action/Action";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Action />
    </div>
  );
}

export default App;
