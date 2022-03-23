import React, { useState } from 'react'
import { DropdownIconContainerImage, DropdownOptionWrapper, DropdownWrapper, NavDropdownWrapper, UserImage } from './style'
import DropdownIcon from '../../assets/dropdown_icon.png';


const NavDropdown = () => {
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
          <p onClick={()=> {
            localStorage.clear();
          }} style={{ color: '#FF1733'}}>Logout</p>
        </DropdownOptionWrapper>)}
      </DropdownWrapper>
    </NavDropdownWrapper>
  )
}

export default NavDropdown