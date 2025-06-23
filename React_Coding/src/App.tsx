import { useCallback, useEffect, useState } from "react";
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
import QuestionBoard from "./components/QuestionBank/QuestionBoard";
import GenerateTable from "./components/GenerateTable";
import ProgressBars from "./components/ProgressBars";
import SearchBar from "./components/SearchBar";
import CustomButton from "./components/CustomButton";
import ChipList from "./components/ChipList";

const App = () => {
  const [open, setOpen] = useState(false);

  const handleShowModal = useCallback(() => {
    setOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setOpen(false);
  }, []);

  const sampleChips = [
    { label: "1234567" },
    { label: "12345678" },
    { label: "12345" },
    { label: "123456789" },
    { label: "123456789" },
  ];

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
      </ModalDialog>
      <ImageCarosel />
      <QuestionBoard />
      <GenerateTable />
      <ProgressBars />
      <SearchBar />
      <CustomButton label="amir" onClick={()=> alert("HU")}/>*/}
      <ChipList chips={sampleChips} maxChips={3} maxTextLength={6} />;
    </div>
  );
};

export default App;
