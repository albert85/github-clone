import { DashboardContentContainer, PageHeaderText, RepoCardSubTitle, RepoCardTitle, RepoFooter, RepositoryCard } from '../Repo/style'
import AppLayout from '../../components/HOC/AppLayout';
import { UserTitleWrapper } from './style';

const UserListPage = () => {

  const RenderRepositoryCard = () => {
    return (
      <RepositoryCard>
        <UserTitleWrapper>
          <RepoCardTitle>DrKLO/Telegram</RepoCardTitle>
          <RepoCardSubTitle>Subinfo</RepoCardSubTitle>
        </UserTitleWrapper>
        <RepoFooter>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
        </RepoFooter>
      </RepositoryCard>
    );
  }

  return (
    <DashboardContentContainer>
      <PageHeaderText>2,985 Users</PageHeaderText>

      <RenderRepositoryCard />
      <RenderRepositoryCard />
      <RenderRepositoryCard />
      <RenderRepositoryCard />
      <RenderRepositoryCard />

    </DashboardContentContainer>
  )
}

export default AppLayout(UserListPage)