import "./App.css";
import Accordian from "./components/Accordian";
import AccordianI from "./components/AccordianI";
import DataTable from "./components/DataTable";
import FlightBooker from "./components/FlightBooker";
import ProgressBar from "./components/ProgressBar";
import Tabs from "./components/Tabs";
import TodoList from "./components/TodoList";
import TrafficSignal from "./components/TrafficSignal";

function App() {
  return (
    <div className="App">
      {/* <DataTable url="https://jsonplaceholder.typicode.com/posts" /> */}
      <TodoList />
    </div>
  );
}

export default App;
