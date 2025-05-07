import { useState } from "react";

const data = [
  { name: "html", title: "HTML", content: "This is HTML" },
  { name: "css", title: "CSS", content: "This is CSS" },
  { name: "js", title: "JS", content: "This is JS" },
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(data[0].name);

  const handleTabClick = (name: string) => {
    setActiveTab(name);
  };

  return (
    <div>
      <div>
        {data.map(({ name, title }) => (
          <button onClick={() => handleTabClick(name)} key={name}>
            {title}
          </button>
        ))}
      </div>

      <div>
        {data.map(
          ({ name, content }) =>
            activeTab === name && <div key={name}>{content}</div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
