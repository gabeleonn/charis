import { useState, KeyboardEvent } from 'react';
import { SearchInputProps } from '@/interfaces';

import { SearchWrapper } from './styled';

import SearchIcon from '../../../../public/assets/icons/search.svg';

export function SearchInput({
  placeholder,
  name,
  disabled = false,
  value,
  onChange,
  handleSearch,
}: SearchInputProps): JSX.Element {
  const [isFocused, setIsFocused] = useState(false);

  function handleSearchByEnter(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }

  return (
    <SearchWrapper isFocused={isFocused}>
      <input
        type="text"
        name={name}
        id={name}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={e => onChange(e)}
        onKeyDown={e => handleSearchByEnter(e)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <SearchIcon width={16} onClick={handleSearch} />
    </SearchWrapper>
  );
}
