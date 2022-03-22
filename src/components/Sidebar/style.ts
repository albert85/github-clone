import styled from 'styled-components';

export const SideMenuContainer = styled.div`
  margin-right: 20px;
  background-color: white;
  padding: 30px;
  height: 140px;
  width: 280px;
`;


export const SideMenuBadge = styled.div`
  background: #DCDCDF;
  border-radius: 100px;
  min-width: 40px;
  height: 20px;
  font-weight: 700;
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: #5C5C5C;
  }
`;

export const SideMenuSelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  background: ${({ bgColor }: {bgColor?: string}) => bgColor || 'transparent'};
  margin-bottom: 10px;
  cursor: pointer;
`

export const MenuTitle = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #5C5C5C;
`;