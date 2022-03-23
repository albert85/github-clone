import React, { useState } from 'react';
import { OverallQuery } from '../../components/helper/util';
import TimeAgo, { DateInput } from 'javascript-time-ago'
import { DashboardContentContainer, PageHeaderText, RepoCardSubTitle, RepoCardTitle, RepoCardWrapper, RepoFooter, RepositoryCard } from './style'
import CustomPagination from '../../components/Pagination';
import { SpinnerCircular } from 'spinners-react';

import en from 'javascript-time-ago/locale/en.json'

TimeAgo.addDefaultLocale(en)

interface RepoType {
  name: string
  star: number
  lang: string
  license: string
  update?: DateInput
}

const timeAgo = new TimeAgo('en-US')

const Dashboard = (props: any) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [endCursor, setEndCursor] = useState<string | null>(null);
  const [paginateBefore, setPaginaBefore]= useState<string | null>(null);
  const [paginateAfter, setPaginateAfter]= useState<string | null>(null);
  const [totalItemsCount, setTotalItemsCount] = useState<number>(0)
  const [repositories, storeRepository] = useState<[]>([])
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
    body: JSON.stringify({ query: OverallQuery({queryString: props.search, type: "REPOSITORY", after: paginateAfter && `"${paginateAfter}"`, before: paginateBefore && `"${paginateBefore}"`}) })
  })
  .then((res) => res.json())
  .then((resp) => {
    const data = resp?.data?.search;
    setTotalItemsCount(data?.repositoryCount);
    setEndCursor(data?.pageInfo?.endCursor);
    const repo = data?.edges?.map((edge: any) => edge?.node)
    storeRepository(repo);
    props.setRepoCount(data?.repositoryCount)
    setLoading(false);
  })
},[page, token, paginateBefore, paginateAfter, props.search, props])

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
  

  const RenderRepositoryCard = ({ name, star, lang, license, update}: RepoType) => {
    return (
      <RepositoryCard>
        <RepoCardTitle>{name}</RepoCardTitle>
        <RepoCardSubTitle>Subinfo</RepoCardSubTitle>
        <RepoFooter>
          <p>{star} Stars |</p>
          <p>{lang} |</p>
          {license && (<p>{license} |</p>)}
          {update && (<p>Updated {timeAgo.format(new Date(update))}</p>)}
        </RepoFooter>
      </RepositoryCard>
    );
  }

  return (
    <DashboardContentContainer>
      <PageHeaderText>{totalItemsCount?.toLocaleString() || 0} repository results</PageHeaderText>
      <RepoCardWrapper>
        {
          !loading && React.Children.toArray(
            repositories?.map((e: any) => ( 
              <RenderRepositoryCard
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

export default Dashboard