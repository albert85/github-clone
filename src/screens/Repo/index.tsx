import React, { useState } from 'react';
import { UserQuery } from '../../components/helper/util';
import { DashboardContentContainer, PageHeaderText, RepoCardSubTitle, RepoCardTitle, RepoFooter, RepositoryCard } from './style'
import CustomPagination from '../../components/Pagination';

const Dashboard = (props: any) => {
  const [totalItemsCount, setTotalItemsCount] = useState<number>(0)
  const [page, setPage] = useState<number>(1)

  const token = localStorage.getItem('@githubToken');

React.useEffect(()=>{
  fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      'Authorization': `bearer ${token}`
    },
    body: JSON.stringify({ query: UserQuery({search: "apollo", user: "REPOSITORY"}) })
  })
  .then((res) => res.json())
  .then((resp) => {
    const data = resp.data.search;
    console.log(resp)
    setTotalItemsCount(data?.repositoryCount);
  })
},[])

const handleChange = (e: number) => {
  setPage(e);
}
  

  const RenderRepositoryCard = () => {
    return (
      <RepositoryCard>
        <RepoCardTitle>DrKLO/Telegram</RepoCardTitle>
        <RepoCardSubTitle>Subinfo</RepoCardSubTitle>
        <RepoFooter>
          <p>17.2k Stars |</p>
          <p>Java |</p>
          <p>GP-2.0 License |</p>
          <p>Updated 4 hours ago</p>
        </RepoFooter>
      </RepositoryCard>
    );
  }

  return (
    <DashboardContentContainer>
      <PageHeaderText>2,985 repository results</PageHeaderText>
      <RenderRepositoryCard />
      <RenderRepositoryCard />
      <RenderRepositoryCard />
      <RenderRepositoryCard />
      <RenderRepositoryCard />
        <CustomPagination
        itemsCountPerPage={10}
        totalItemsCount={totalItemsCount}
        activePage={page}
        handleChange={handleChange} />
    </DashboardContentContainer>
  )
}

export default Dashboard