import React from 'react'
import { useNavigate } from 'react-router-dom'
import { HomeNavBarWrapper, InnerNavBarContainer } from '../HOC/style'
import NavDropdown from '../NavDropdown'
import SearchField from '../SeachBar'
import Github from '../../assets/github_logo.png';

const HeaderNav = () => {
  const navigate = useNavigate();

  return (
    <HomeNavBarWrapper>
        <InnerNavBarContainer>
          <img style={{ cursor: 'pointer'}} onClick={() => navigate('/auth/search')} height="50px" src={Github} alt='github' />
          <SearchField searchIconStyle={{ right: '6%', top: '15px' }} placeholder='Search' width='600px' height='50px' marginBottom='0' />
          <NavDropdown />

        </InnerNavBarContainer>
      </HomeNavBarWrapper>
  )
}

export default HeaderNav