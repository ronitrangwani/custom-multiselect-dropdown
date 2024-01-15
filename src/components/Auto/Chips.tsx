import React from 'react';

interface Chip {
  img: string;
  label: string;
  value: string;
}

interface ChipsProps {
  chips: Chip[];
  highlightedChip: Chip | null;
  onDelete: (chip: Chip) => void;
  onClick: (chip: Chip) => void;
}

const Chips: React.FC<ChipsProps> = ({ chips, highlightedChip, onDelete, onClick }) => (
  <div className="selected-chips" aria-live="polite">
    {chips.map((chip) => (
      <div
        key={chip.value}
        className={`chip ${highlightedChip === chip ? 'highlighted' : ''}`}
        onClick={() => onClick(chip)}
      >
        <img src={chip.img} alt={chip.label} style={{ height: "25px", width: "25px", borderRadius: "50%", padding: 0, marginRight: "10px" }} />
        {chip.label}
        <button onClick={() => onDelete(chip)} className="delete-button">
          X
        </button>
      </div>
    ))}
  </div>
);

export default Chips;
