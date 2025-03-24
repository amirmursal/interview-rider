import React, { useState } from "react";

const tabData = [
  {
    name: "HTML",
    value: "html",
    panel: "This is an HTML",
  },
  {
    name: "JavaScript",
    value: "javascript",
    panel: "This is an JavaScript",
  },
  {
    name: "CSS",
    value: "css",
    panel: "This is an CSS",
  },
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(tabData[0].value);
  const handleTabSelection = (tabValue) => {
    setActiveTab(tabValue);
  };

  return (
    <div>
      <section>
        {tabData.map((tab) => (
          <div>
            <button onClick={() => handleTabSelection(tab.value)}>
              {tab.name}
            </button>
            {activeTab === tab.value && <section>{tab.panel}</section>}
          </div>
        ))}
      </section>
    </div>
  );
};

export default Tabs;
