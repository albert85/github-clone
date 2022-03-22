import React from 'react'
import { SearchNavBar, SearchPageContent, SearchPageWrapper, SearchWrapper } from './style'
import Github from '../../assets/github_logo.png';
import SearchField from '../../components/SeachBar';
import { LoginButton } from '../Login/style';
import NavDropdown from '../../components/NavDropdown';

const SearchPage = () => {
  return (
    <SearchPageWrapper>
      <SearchNavBar>
      <NavDropdown />
      </SearchNavBar>
      <SearchPageContent>
        <SearchWrapper>
        <img src={Github} alt='github' />
        <SearchField />
        <LoginButton>Search Github</LoginButton>
        </SearchWrapper>
      </SearchPageContent>
    </SearchPageWrapper>
  )
}

export default SearchPage