import { useCallback, useEffect, useRef, useState } from "react";
import "./progressBars.css";

const ProgressBars = () => {
  const [width, setWidth] = useState(0);
  const [progressBars, setProgressBars] = useState(0);

  const ref = useRef<HTMLDivElement>(null);

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
  }, [width]);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.width = `${width}%`;
      ref.current.style.backgroundColor = "red";
    }
  }, [width]);

  const handleAddBars = useCallback(() => {}, []);

  return (
    <section>
      <button onClick={handleAddBars}>Add</button>
      <div className="progressBarContainer">
        <div className="progressBar" ref={ref}>
          {width}
        </div>
      </div>
    </section>
  );
};

export default ProgressBars;
