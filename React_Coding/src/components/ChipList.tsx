/**
 *  implementation of the ChipList React component based on below requirements 
 * chips list handling
 * maxChips to limit number of displayed chips
 * maxTextLength to truncate chip text
 * Edge cases: empty array, undefined, maxChips or maxTextLength = 0
 * Ellipsis (…) for truncated text
 * <aside> to indicate extra chips (with data-testid="exceeding-text")
 * Preserve order and proper data-testid index
 * const sampleChips = [
  { label: "1234567" },
  { label: "12345678" },
  { label: "12345" },
  { label: "123456789" },
];

// Renders 3 chips, each truncated to 6 characters, and shows "+2 more items"
<ChipList chips={sampleChips} maxChips={3} maxTextLength={6} />;

 */

import React from "react";

const ELLIPSIS = "…";

type Chip = {
  label: string;
};

type ChipListProps = {
  chips?: Chip[];
  maxChips?: number;
  maxTextLength?: number;
};

export const ChipList: React.FC<ChipListProps> = ({
  chips,
  maxChips,
  maxTextLength,
}) => {
  if (!Array.isArray(chips) || chips.length === 0) {
    return <></>;
  }

  const isValidMaxChips = typeof maxChips === "number" && maxChips > 0;
  const isValidMaxTextLength =
    typeof maxTextLength === "number" && maxTextLength >= 1;

  const displayChips = isValidMaxChips ? chips.slice(0, maxChips) : chips;

  const remainingCount = isValidMaxChips
    ? chips.length - displayChips.length
    : 0;

  const truncate = (text: string): string => {
    if (!isValidMaxTextLength || text.length <= maxTextLength!) {
      return text;
    }
    return text.slice(0, maxTextLength! - 1) + ELLIPSIS;
  };

  return (
    <section>
      <div>
        {displayChips.map((chip, index) => (
          <span key={index} data-testid={`chip-${index}`}>
            {truncate(chip.label)}
          </span>
        ))}
      </div>
      {remainingCount > 0 && (
        <aside data-testid="exceeding-text">{remainingCount} more items</aside>
      )}
    </section>
  );
};

export default ChipList;
