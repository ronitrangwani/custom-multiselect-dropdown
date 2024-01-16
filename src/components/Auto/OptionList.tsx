import React from 'react';

interface Chip {
  img: string;
  label: string;
  value: string;
}

interface OptionListProps {
  options: Chip[];
  onSelect: (option: Chip) => void;
}

const OptionList: React.FC<OptionListProps> = ({ options, onSelect }) => (
  <ul className="autocomplete-options">
    {options.map((option) => (
      <li key={option.value} className="single" onClick={() => onSelect(option)}>
        <img src={option.img} alt={option.label} style={{ height: "38px", width: "38px", borderRadius: "50%", padding: "2px 5px" }} />
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>{option.label}</span>
          <span style={{ position: "absolute", left: "60%", color: "lightgray" , fontSize:"small" }}>{option.value}</span>
        </div>
      </li>
    ))}
  </ul>
);

export default OptionList;
