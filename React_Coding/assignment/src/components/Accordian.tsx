import React, { useState } from "react";

const Accordion = () => {
  const data = [
    { name: "html", title: "HTML", content: "This is HTML" },
    { name: "css", title: "CSS", content: "This is CSS" },
    { name: "js", title: "JS", content: "This is JS" },
  ];

  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const handleToggle = (name: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto" }}>
      {data.map(({ title, content, name }) => (
        <div
          key={name}
          style={{ borderBottom: "1px solid #ccc", padding: "10px 0" }}
        >
          <div
            onClick={() => handleToggle(name)}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <span style={{ fontWeight: "bold" }}>{title}</span>
            <span>{openSections[name] ? "▲" : "▼"}</span>
          </div>
          {openSections[name] && (
            <div style={{ marginTop: "8px", color: "#555" }}>{content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
