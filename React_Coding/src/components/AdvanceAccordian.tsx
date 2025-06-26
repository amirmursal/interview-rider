import { useCallback, useState } from "react";
import "./advanceAccordion.css";

const AdvanceAccordion = ({ data }: any) => {
  return <AccordionList data={data} />;
};

const AccordionItem = ({ item, onClick, isOpen }: any) => {
  const hasChildren = Array.isArray(item.content);

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={onClick}>
        {item.title}
      </div>
      <div className={`accordion-body ${isOpen ? "open" : ""}`}>
        {isOpen && (
          <div className="accordion-content">
            {hasChildren ? (
              <AccordionList data={item.content} />
            ) : (
              <p>{item.content}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const AccordionList = ({ data }: any) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleItemClick = useCallback((index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  }, []);

  return (
    <div>
      {data.map((element: any, index: number) => (
        <AccordionItem
          item={element}
          key={index}
          isOpen={openIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

export default AdvanceAccordion;
