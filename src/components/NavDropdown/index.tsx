import React, { useState } from 'react'
import { DropdownIconContainerImage, DropdownOptionWrapper, DropdownWrapper, NavDropdownWrapper, SelectedMenu, UserImage } from './style'
import DropdownIcon from '../../assets/dropdown_icon.png';
import { useNavigate } from 'react-router-dom';


const NavDropdown = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);

  const handleViewDropdown = () => {
    setOpen((prev) => !prev);
  }

  return (
    <NavDropdownWrapper>
      <UserImage src="https://upload.wikimedia.org/wikipedia/en/3/33/X_Factor_Celebrity.png" alt='user' />
      <p>John Doe</p>
      <DropdownWrapper>
        <DropdownIconContainerImage onClick={handleViewDropdown} src={DropdownIcon} alt='dropdown' />
        {open && (<DropdownOptionWrapper>
          
          <SelectedMenu onClick={()=> {
            localStorage.clear();
            navigate('/');
          }}>
            <p>Logout</p>
          </SelectedMenu>
        </DropdownOptionWrapper>)}
      </DropdownWrapper>
    </NavDropdownWrapper>
  )
}

export default NavDropdown