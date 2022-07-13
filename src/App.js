import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Works from "./components/Works";

function App() {
  return (
    <div className="App flex flex-col justify-center items-center">
      <Header />
      <Works />
      <About />
    </div>
  );
}

export default App;
