import React from 'react'
import { SearchBarWrapper, SearchIcon, SearchInput } from './style'
import SearchIconLogo from '../../assets/search_icon.png';

const SearchField = ({ ...rest }) => {
  return (
    <SearchBarWrapper>
      <SearchIcon src={SearchIconLogo} alt='seach_icon' />
      <SearchInput type='text' {...rest} />
    </SearchBarWrapper>
  )
}

export default SearchField