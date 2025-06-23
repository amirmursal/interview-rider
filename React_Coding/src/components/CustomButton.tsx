/**
 * Create a accessible button component without native button element
 */

import React, { useCallback } from "react";

interface CustomButtonProps {
  label: string;
  onClick?: (event: React.KeyboardEvent | React.MouseEvent) => void;
  disabled?: boolean;
  isPressed?: boolean;
}

const CustomButton = ({ label, onClick, disabled, isPressed }: CustomButtonProps) => {
  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (event.key === " " || event.key === "Enter") {
      event.preventDefault();
      onClick?.(event);
    }
  }, []);

  return (
    <div
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-label={label}
      onKeyDown={handleKeyDown}
      onClick={disabled? undefined: onClick}
      aria-disabled={disabled}
      aria-pressed={typeof isPressed === "boolean" ?isPressed: undefined}
    >
      {label}
    </div>
  );
};

export default CustomButton;
