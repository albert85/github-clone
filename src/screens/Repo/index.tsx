import { DashboardContentContainer, PageHeaderText, RepoCardSubTitle, RepoCardTitle, RepoFooter, RepositoryCard } from './style'
import AppLayout from '../../components/HOC/AppLayout';

const Dashboard = () => {

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
    </DashboardContentContainer>
  )
}

export default AppLayout(Dashboard)