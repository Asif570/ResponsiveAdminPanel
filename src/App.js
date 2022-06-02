import "./App.css";
import MainDash from "./components/mainDash/MainDash";
import Sidebar from "./components/Sidbar/Sidebar";

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <MainDash />
        <div>hello</div>
      </div>
    </div>
  );
}

export default App;
