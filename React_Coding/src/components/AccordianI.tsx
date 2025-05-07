import { useState } from "react";

const data = [
  {
    name: "javascript",
    title: "JavaScript",
    content: "This is JavaScript",
  },
  {
    name: "typescript",
    title: "TypeScript",
    content: "This is TypeScript",
  },
  {
    name: "react",
    title: "React",
    content: "This is React",
  },
];

const AccordianI = () => {
  const [activeSection, setActiveSection] = useState<Record<string, boolean>>(
    {}
  );

  const handleToggle = (name: any) => {
    setActiveSection((pre) => ({
      ...pre,
      [name]: !pre[name],
    }));
  };

  return (
    <div>
      {data.map(({ name, title, content }) => {
        const isOpen = activeSection[name];
        const buttonId = `accordian-button-${name}`;
        const panelId = `accordian-panel-${name}`;

        return (
          <section key={buttonId}>
            <h3>
              <button
                onClick={() => handleToggle(name)}
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
              >
                {title}
              </button>
            </h3>

            <div>
              {isOpen && (
                <div id={panelId} role="region" aria-labelledby={buttonId}>
                  {content}
                </div>
              )}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default AccordianI;
