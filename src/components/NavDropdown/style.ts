import styled from 'styled-components';

export const NavDropdownWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const UserImage = styled.img`
  border-radius: 100px;
  width: 50px;
  height: 50px;
  margin-right: 10px;
`

export const DropdownIconContainerImage = styled.img`
  cursor: pointer;
`;

export const DropdownWrapper = styled.div`
  margin-left: 15px;
`;

export const DropdownOptionWrapper = styled.div`
  position: absolute;
  background: #FFFFFF;
  border: 1px solid rgba(196, 203, 214, 0.3);
  box-sizing: border-box;
  box-shadow: 0px 6px 58px rgba(196, 203, 214, 0.2);
  border-radius: 3px;
  width: 200px;
  right: 0;
  top: 100%;
  padding-left: 37px;
`;

export const SelectedMenu = styled.div`
  cursor: pointer;
  
  p {
    color: #FF1733
  }
`;