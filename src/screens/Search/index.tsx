import React, { useState } from 'react'
import { SearchNavBar, SearchPageContent, SearchPageWrapper, SearchWrapper } from './style'
import Github from '../../assets/github_logo.png';
import SearchField from '../../components/SeachBar';
import { LoginButton } from '../Login/style';
import NavDropdown from '../../components/NavDropdown';
import { useNavigate } from 'react-router-dom';

const SearchPage = () => {
  const [search, setSearch] = useState<string>('');

  const navigate = useNavigate();
  return (
    <SearchPageWrapper>
      <SearchNavBar>
      <NavDropdown />
      </SearchNavBar>
      <SearchPageContent>
        <SearchWrapper>
        <img style={{ marginBottom: '20px'}} src={Github} alt='github' />
        <SearchField onChange={(e) => {setSearch(e.target.value)}} />
        <LoginButton onClick={() => navigate('/auth/repo', {
          state: {
            query: search
          }
        })}>Search Github</LoginButton>
        </SearchWrapper>
      </SearchPageContent>
    </SearchPageWrapper>
  )
}

export default SearchPage