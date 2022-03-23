import styled from 'styled-components';
import Pagination from "react-js-pagination";


export const PageLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 97vh;
`;



export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  .active-link {
    color: #000000;
  }

  .last-link {
    color: black;
  }

  .lastNav {
    background: black;
    color: white;
    border-radius: 7px;
  }

  .disabled {
    background: transparent;
    color: #B0B7C3;
    border-radius: 7px;
  }

  ul{
    display: flex;
      list-style-type: none;
  }

  ul li {
    margin: 0 5px;
    padding: 0 11px;
    text-decoration: none;
}

li a {
  text-decoration: none;
  font-size: 16px;
  font-family: 'Inter';
  font-weight: 500;
  color: #B0B7C3;
}
`;