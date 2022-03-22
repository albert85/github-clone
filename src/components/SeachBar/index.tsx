import React from 'react'
import { SearchBarWrapper, SearchIcon, SearchInput } from './style'
import SearchIconLogo from '../../assets/search_icon.png';

interface SearchType {
  marginBottom?: string,
  width?: string,
  height?: string,
  placeholder?: string,
  searchIconStyle?:{
    right?: string,
    top?: string
  }
}

const SearchField = ({
  marginBottom,
  width,
  height,
  placeholder,
  searchIconStyle,
  ...rest }: SearchType) => {
  return (
    <SearchBarWrapper marginBottom={marginBottom}>
      <SearchIcon style={searchIconStyle} src={SearchIconLogo} alt='seach_icon' />
      <SearchInput placeholder={placeholder} height={height} width={width} type='text' {...rest} />
    </SearchBarWrapper>
  )
}

export default SearchField