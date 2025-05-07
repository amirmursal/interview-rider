import { useEffect, useRef, useState } from "react";
import "./progressBar.css";

const ProgressBar = () => {
  const progreeBarRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWidth((pre) => {
        let newWidth = pre + 25;
        if (newWidth >= 100) {
          clearInterval(interval);
          return 100;
        }
        return newWidth;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progreeBarRef.current) {
      progreeBarRef.current.style.width = `${width}%`;
      progreeBarRef.current.style.backgroundColor = "red";
    }
  }, [width]);
  return (
    <div className="progressbarContainer">
      <div className="progressbar" ref={progreeBarRef}></div>
    </div>
  );
};

export default ProgressBar;
