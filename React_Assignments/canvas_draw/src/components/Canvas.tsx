import React, { useRef, useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("https://interview-rider.onrender.com");

interface DrawData {
  x0: number;
  y0: number;
  x1: number;
  y1: number;
  color: string;
}

const Whiteboard: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [drawing, setDrawing] = useState(false);
  const [color, setColor] = useState("#000");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    socket.on("draw", ({ x0, y0, x1, y1, color }: DrawData) => {
      drawLine(x0, y0, x1, y1, color, false);
    });

    socket.on("clear", () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    });

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      socket.off("draw");
      socket.off("clear");
    };
  }, []);

  const drawLine = (
    x0: number,
    y0: number,
    x1: number,
    y1: number,
    color: string,
    emit: boolean
  ) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx) return;
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x0, y0);
    ctx.lineTo(x1, y1);
    ctx.stroke();
    ctx.closePath();

    if (emit) {
      socket.emit("draw", { x0, y0, x1, y1, color });
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setDrawing(true);
    const { offsetX, offsetY } = e.nativeEvent;
    canvasRef.current!.dataset.lastX = offsetX.toString();
    canvasRef.current!.dataset.lastY = offsetY.toString();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!drawing) return;
    const { offsetX: x1, offsetY: y1 } = e.nativeEvent;
    const x0 = parseFloat(canvasRef.current!.dataset.lastX || "0");
    const y0 = parseFloat(canvasRef.current!.dataset.lastY || "0");

    drawLine(x0, y0, x1, y1, color, true);

    canvasRef.current!.dataset.lastX = x1.toString();
    canvasRef.current!.dataset.lastY = y1.toString();
  };

  const handleMouseUp = () => setDrawing(false);
  const handleClear = () => socket.emit("clear");

  return (
    <>
      <canvas
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        style={{ position: "absolute", top: 0, left: 0, background: "white" }}
      />
      <div style={{ position: "fixed", top: 10, left: 10, zIndex: 10 }}>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <button onClick={handleClear}>Clear</button>
      </div>
    </>
  );
};

export default Whiteboard;
