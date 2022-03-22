import Sidebar from '../Sidebar'

import { DashboardContentContainer, DashboardContentWrapper, DashboardWrapper } from './style'
import HeaderNav from '../HeaderNav';

const AppLayout = (Component: any) => (props: any) => {

  return (
    <div>
      <HeaderNav />
      <DashboardWrapper>
        <DashboardContentWrapper>
          <Sidebar />
          <DashboardContentContainer>
            <Component {...props} />
          </DashboardContentContainer>
        </DashboardContentWrapper>
      </DashboardWrapper>
    </div>
  )
}

export default AppLayout