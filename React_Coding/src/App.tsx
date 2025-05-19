import { useCallback, useState } from "react";
import "./App.css";
import Accordian from "./components/Accordian";
import AccordianI from "./components/AccordianI";
import DataTable from "./components/DataTable";
import FlightBooker from "./components/FlightBooker";
import ModalDialog from "./components/ModalDialog";
import ProgressBar from "./components/ProgressBar";
import Tabs from "./components/Tabs";
import TodoList from "./components/TodoList";
import TrafficSignal from "./components/TrafficSignal";
import HolyGrailLayout from "./components/HolyGrailLayout";
import TicTacToe from "./components/TicTacToe";
import ImageCarosel from "./components/ImageCarousel";

const App = () => {
  const [open, setOpen] = useState(false);

  const handleShowModal = useCallback(() => {
    setOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <div className="App">
      {/* <DataTable url="https://jsonplaceholder.typicode.com/posts" /> 
      <button onClick={handleShowModal}>Show Modal</button>
      <ModalDialog
        open={open}
        handleCloseModal={handleCloseModal}
        title="Modal Title"
      >
        Hello
      </ModalDialog>*/}
      <ImageCarosel />
    </div>
  );
};

export default App;
