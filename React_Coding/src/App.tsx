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
import AdvanceAccordion from "./components/AdvanceAccordian";

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

  const accordionData = [
    {
      title: "Introduction",
      content: "Welcome to the React Accordion Interview Question.",
    },
    {
      title: "Chapter 1: React Basics",
      content: [
        {
          title: "1.1 JSX & Rendering",
          content: "JSX is a syntax extension for JavaScript.",
        },
        {
          title: "1.2 Components",
          content: [
            {
              title: "1.2.1 Functional Components",
              content: "These are basic building blocks in modern React.",
            },
            {
              title: "1.2.2 Class Components",
              content: "Used before hooks were introduced in React 16.8.",
            },
          ],
        },
        {
          title: "1.3 Props & State",
          content:
            "Props are inputs to components. State is managed within the component.",
        },
      ],
    },
    {
      title: "Chapter 2: Advanced Concepts",
      content: [
        {
          title: "2.1 useEffect & Lifecycle",
          content:
            "useEffect lets you perform side effects in function components.",
        },
        {
          title: "2.2 Performance Optimization",
          content: [
            {
              title: "2.2.1 Memoization",
              content: "React.memo and useMemo help avoid unnecessary renders.",
            },
            {
              title: "2.2.2 Virtualization",
              content: "Useful for large lists (e.g., react-window).",
            },
          ],
        },
      ],
    },
    {
      title: "Chapter 3: Ecosystem",
      content: [
        {
          title: "3.1 Routing",
          content: "React Router is used for client-side routing.",
        },
        {
          title: "3.2 State Management",
          content: [
            {
              title: "3.2.1 Redux",
              content: "A predictable state container for JS apps.",
            },
            {
              title: "3.2.2 Zustand / Jotai",
              content: "Modern lightweight alternatives to Redux.",
            },
          ],
        },
      ],
    },
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
      <CustomButton label="amir" onClick={()=> alert("HU")}/>
      <ChipList chips={sampleChips} maxChips={3} maxTextLength={6} />*/}
      <AdvanceAccordion data={accordionData} />
    </div>
  );
};

export default App;
