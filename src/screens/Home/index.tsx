import React from 'react'
import NavDropdown from '../../components/NavDropdown'
import Github from '../../assets/github_logo.png';
import { DashboardWrapper, HomeNavBarWrapper, InnerNavBarContainer } from './style'
import SearchField from '../../components/SeachBar';

const Dashboard = () => {
  return (
    <div>
      <HomeNavBarWrapper>
        <InnerNavBarContainer>
        <img height="50px" src={Github} alt='github' />
        <SearchField searchIconStyle={{ right: '6%', top: '15px' }} placeholder='Search' width='600px' height='50px' marginBottom='0' />
        <NavDropdown />

        </InnerNavBarContainer>
      </HomeNavBarWrapper>

    <DashboardWrapper>
    </DashboardWrapper>
    </div>
  )
}

export default Dashboard