import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { MenuTitle, SideMenuBadge, SideMenuContainer, SideMenuSelectContainer } from './style'

const Sidebar = ({
  userCount,
  repoCount
}: { userCount: number, repoCount: number}) => {
  const navigate = useNavigate();
  const {pathname} = useLocation();

  const RenderMenuContainer = ({ title, amt, onClick, bgColor }: {title: string, amt: string | number, onClick?: any, bgColor?: string}) => {
    return (
      <SideMenuSelectContainer bgColor={bgColor} onClick={onClick}>
        <MenuTitle>{title}</MenuTitle>
        <SideMenuBadge>
          <p>{amt}</p>
        </SideMenuBadge>
    </SideMenuSelectContainer>
    )
  }
  
  return (
    <div>
       <SideMenuContainer>
          <div>
           <RenderMenuContainer bgColor={pathname.includes('/repo') ? '#F7F7F8': 'transparent'} onClick={() => navigate('/auth/repo')} title="Repository" amt={repoCount} />
           <RenderMenuContainer bgColor={pathname.includes('/user') ? '#F7F7F8': 'transparent'} onClick={() => navigate('/auth/user')} title="User" amt={userCount} />
          </div>
        </SideMenuContainer>
    </div>
  )
}

export default Sidebar