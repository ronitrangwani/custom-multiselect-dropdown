import React, { useState, useEffect } from 'react';
import Chips from './Chips.tsx';
import AutocompleteInput from './AutocompleteInput.tsx';
import OptionList from './OptionList.tsx';
import userData from './data.tsx';
import './index.css';

interface Chip {
  img: string;
  label: string;
  value: string;
}

const Autocomplete = () => {
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState<Chip[]>([]);
  const [selectedChips, setSelectedChips] = useState<Chip[]>([]);
  const [highlightedChip, setHighlightedChip] = useState<Chip | null>(null);

  useEffect(() => {
    setOptions(userData);
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setHighlightedChip(null);
  };

  const handleInputFocus = () => {
    if (inputValue === '' && selectedChips.length > 0) {
      setHighlightedChip(selectedChips[selectedChips.length - 1]);
    }
  };

  const handleInputBlur = () => {
    setHighlightedChip(null);
  };

  const handleOptionSelect = (option: Chip) => {
    if (!selectedChips.some((chip) => chip.value === option.value)) {
      setSelectedChips([...selectedChips, option]);
      setOptions(options.filter((opt) => opt.value !== option.value));
      setInputValue('');
    }
  };

  const handleChipDelete = (optionToDelete: Chip) => {
    const updatedChips = selectedChips.filter((chip) => chip !== optionToDelete);
    setSelectedChips(updatedChips);
    setOptions([...options, optionToDelete]);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Backspace' && inputValue === '' && selectedChips.length > 0) {
      const lastChip = selectedChips[selectedChips.length - 1];
      handleChipDelete(lastChip);
    }
  };

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <main className="main">
      <div className="autocomplete-container">
        <div className='container'>
          <Chips chips={selectedChips} highlightedChip={highlightedChip} onDelete={handleChipDelete} onClick={setHighlightedChip} />
          <AutocompleteInput
            value={inputValue}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            onKeyDown={handleKeyDown}
          />
        </div>
        {filteredOptions.length ? <OptionList options={filteredOptions} onSelect={handleOptionSelect} /> : <></>}
      </div>
    </main>
  );
};

export default Autocomplete;
