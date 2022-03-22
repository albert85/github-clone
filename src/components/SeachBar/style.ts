import styled from 'styled-components';

export const SearchInput = styled.input`
  width: ${({ width }: {width?: string}) => width || '100%'};
  border: 1px solid #C4C4C4;
  box-sizing: border-box;
  border-radius: 100px;
  height: ${({ height }: {height?: string | number}) => height || '60px'};
  font-size: 16px;
  padding-left: 15px;
  margin-left: 20px;
  margin-right: 20px;
`;

export const SearchBarWrapper = styled.div`
  position: relative;
  margin-bottom: ${({ marginBottom }: {marginBottom?: string | undefined}) => marginBottom || '20px'};
`;

export const SearchIcon = styled.img`
  position: absolute;
  right: 1%;
  top: 20px;
`;