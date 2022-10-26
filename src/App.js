import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Works from "./components/Works";

function App() {
  return (
    <div className="App bg-background font-poppins text-main">
      <Header />
      <Works />
      <About />
    </div>
  );
}

export default App;
