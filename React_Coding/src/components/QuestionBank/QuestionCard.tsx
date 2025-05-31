import { Radio, RadioGroup } from "@mui/material";
import React from "react";

interface QuestionCardProps {
  question: string;
  options: string[];
  onSelect: (option: string) => void;
  disabled: boolean;
  selected: string | undefined;
}

const QuestionCard = ({
  question,
  options,
  onSelect,
  disabled,
  selected,
}: QuestionCardProps) => {
  return (
    <div className="p-4 border rounded shadow-md">
      <h2 className="text-lg font-semibold mb-4">{question}</h2>
      <RadioGroup
        value={selected}
        onChange={(e: any) => onSelect(e.target.value)}
      >
        {options?.map((option) => (
          <div key={option} className="mb-2 flex items-center">
            <Radio
              value={option}
              disabled={disabled}
              checked={selected === option}
            />
            <label className="ml-2">{option}</label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default QuestionCard;
