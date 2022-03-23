import React from 'react';
import Pagination from "react-js-pagination";
import { PaginationWrapper } from '../global/style';

interface PaginationType {
  handleChange: (pageNumber: number) => void
  itemsCountPerPage: number
  totalItemsCount: number
  activePage: number
}

const CustomPagination = ({
  itemsCountPerPage = 10,
  totalItemsCount = 100,
  activePage = 1,
  handleChange,
}: PaginationType) => {

  return (
    <PaginationWrapper>
    <Pagination
    activeClass="active"
    activeLinkClass="active-link"
    hideFirstLastPages
    itemClassLast="lastNav"
    linkClassLast="last-link"
    itemsCountPerPage={itemsCountPerPage}
    totalItemsCount={totalItemsCount}
    activePage={activePage}
    onChange={handleChange} />
  </PaginationWrapper>
  )
}

export default CustomPagination