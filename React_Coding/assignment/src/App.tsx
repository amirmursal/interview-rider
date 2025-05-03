import "./App.css";
import Accordian from "./components/Accordian";
import DataTable from "./components/DataTable";
import ProgressBar from "./components/ProgressBar";
import Tabs from "./components/Tabs";
import TrafficSignal from "./components/TrafficSignal";

function App() {
  return (
    <div className="App">
      <DataTable url="https://jsonplaceholder.typicode.com/posts" />
    </div>
  );
}

export default App;
