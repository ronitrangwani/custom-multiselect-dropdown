import React, { useRef } from 'react';

interface AutocompleteInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: () => void;
  onBlur: () => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const AutocompleteInput: React.FC<AutocompleteInputProps> = ({ value, onChange, onFocus, onBlur, onKeyDown }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <input
      ref={inputRef}
      type="text"
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
      className="autocomplete-input"
      placeholder="Search..."
    />
  );
};

export default AutocompleteInput;
