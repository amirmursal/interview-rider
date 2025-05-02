import React, { useEffect, useState } from "react";
import "./trafficSignal.css";

const TrafficSignal = () => {
  const [activeLight, setActiveLight] = useState("red");

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLight((pre) => {
        if (pre === "red") return "orange";
        if (pre === "orange") return "green";
        return "red";
      });
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [activeLight]);

  return (
    <div className="trafficSignal">
      <div className={`signal ${activeLight === "red" ? "red" : ""}`}></div>
      <div
        className={`signal ${activeLight === "orange" ? "orange" : ""}`}
      ></div>
      <div className={`signal ${activeLight === "green" ? "green" : ""}`}></div>
    </div>
  );
};

export default TrafficSignal;
