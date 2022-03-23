import React, { useState } from 'react';
import { SpinnerCircular } from 'spinners-react';
import { OverallQuery } from '../../components/helper/util';
import CustomPagination from '../../components/Pagination';
import { DashboardContentContainer, PageHeaderText, RepoCardSubTitle, RepoCardTitle, RepoCardWrapper, RepoFooter, RepositoryCard } from '../Repo/style'
import { UserTitleWrapper } from './style';

interface UserType {
  bio: string
  company: string
  name: string
}


const UserListPage = (props: any) => {

  const [loading, setLoading] = useState<boolean>(false);
  const [endCursor, setEndCursor] = useState<string | null>(null);
  const [paginateBefore, setPaginaBefore]= useState<string | null>(null);
  const [paginateAfter, setPaginateAfter]= useState<string | null>(null);
  const [totalItemsCount, setTotalItemsCount] = useState<number>(0)
  const [users, storeUsers] = useState<[]>([])
  const [page, setPage] = useState<number>(1)

  const token = localStorage.getItem('@githubToken');

React.useEffect(()=>{
  setLoading(true);
  fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      'Authorization': `bearer ${token}`
    },
    body: JSON.stringify({ query: OverallQuery({queryString: props.search, type: "USER", after: paginateAfter && `"${paginateAfter}"`, before: paginateBefore && `"${paginateBefore}"`}) })
  })
  .then((res) => res.json())
  .then((resp) => {
    const data = resp?.data?.search;
    console.log(resp)
    setTotalItemsCount(data?.userCount);
    setEndCursor(data?.pageInfo?.endCursor);
    const repo = data?.edges?.map((edge: any) => edge?.node)
    storeUsers(repo);
    setLoading(false);
  })
},[page, token, paginateBefore, paginateAfter, props.search])

  const RenderUserCard = ({bio, company, name}: UserType)  => {
    return (
      <RepositoryCard>
        <UserTitleWrapper>
          <RepoCardTitle>{name}</RepoCardTitle>
          <RepoCardSubTitle>{company}</RepoCardSubTitle>
        </UserTitleWrapper>
        <RepoFooter>
          <p>{bio}</p>
        </RepoFooter>
      </RepositoryCard>
    );
  }

  const handleChange = (e: number) => {
    setPage(e);
  
    if(e !== page){
      if(e > page){
        setPaginateAfter(endCursor)
        setPaginaBefore(null);
      }else {
        setPaginaBefore(endCursor)
        setPaginateAfter(null);
      }
    }  
  }

  return (
    <DashboardContentContainer>
      <PageHeaderText>{totalItemsCount?.toLocaleString() || 0} Users</PageHeaderText>

      <RepoCardWrapper>
        {
          !loading && React.Children.toArray(
            users?.map((e: any) => ( 
              <RenderUserCard
              name={e?.name}
              star={e?.stargazers?.totalCount}
              lang={e?.languages?.edges[0]?.node?.name}
              license={e?.licenseInfo?.name}
              update={e?.updatedAt?.toLocaleString()}
              />)
              )
          )
        }

        <div style={{ display: 'flex'}}>
        {loading && (
          <SpinnerCircular
            style={{ marginInline: 'auto', marginTop: '200px' }}
            size={200}
          />
        )}
        </div>
        </RepoCardWrapper>

      <CustomPagination
      itemsCountPerPage={10}
      totalItemsCount={totalItemsCount}
      activePage={page}
      handleChange={handleChange} />

    </DashboardContentContainer>
  )
}

export default UserListPage