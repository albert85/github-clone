import Sidebar from '../Sidebar'

import { DashboardContentContainer, DashboardContentWrapper, DashboardWrapper } from './style'
import HeaderNav from '../HeaderNav';
import { useEffect } from 'react';

const AppLayout = (props: any) => {
  useEffect(()=>{},[])

  return (
    <div>
      <HeaderNav />
      <DashboardWrapper>
        <DashboardContentWrapper>
          <Sidebar />
          <DashboardContentContainer>
            {props.children}
          </DashboardContentContainer>
        </DashboardContentWrapper>
      </DashboardWrapper>
    </div>
  )
}

export default AppLayout