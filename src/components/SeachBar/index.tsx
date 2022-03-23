import React from 'react'
import { SearchBarWrapper, SearchIcon, SearchInput } from './style'
import SearchIconLogo from '../../assets/search_icon.png';

interface SearchType {
  marginBottom?: string,
  width?: string,
  height?: string,
  placeholder?: string,
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined,
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
  onChange,
  ...rest }: SearchType) => {
  return (
    <SearchBarWrapper marginBottom={marginBottom}>
      <SearchIcon style={searchIconStyle} src={SearchIconLogo} alt='seach_icon' />
      <SearchInput onChange={onChange} placeholder={placeholder} height={height} width={width} type='text' {...rest} />
    </SearchBarWrapper>
  )
}

export default SearchField