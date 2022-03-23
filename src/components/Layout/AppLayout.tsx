import Sidebar from '../Sidebar'

import { DashboardContentContainer, DashboardContentWrapper, DashboardWrapper } from './style'
import HeaderNav from '../HeaderNav';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const AppLayout = (props: any) => {
  const location: any = useLocation();
  const navigate = useNavigate();
  
  const [search, setSearch] = useState<String | undefined>(location?.state?.query)
  
  useEffect(()=>{
    const token = localStorage.getItem('@githubToken');

    if(!token){
      return navigate('/')
    }
  },[navigate])

  return (
    <div>
      <HeaderNav />
      <DashboardWrapper>
        <DashboardContentWrapper>
          <Sidebar />
          <DashboardContentContainer>
            {props.children(search)}
          </DashboardContentContainer>
        </DashboardContentWrapper>
      </DashboardWrapper>
    </div>
  )
}

export default AppLayout