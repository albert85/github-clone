import styled from 'styled-components';

export const HomeNavBarWrapper = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 0px 5px rgba(196, 203, 214, 0.7);
  width: 100%;
  padding:20px;
`;

export const InnerNavBarContainer= styled.div`
  width: 80%;
  margin-inline: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DashboardWrapper = styled.div`
  height: 100vh;
  margin-inline: auto;
  background: #E5E5E5;
`;

export const DashboardContentWrapper = styled.div`
  width: 75%;
  height: 100%;
  margin-inline: auto;
  padding-top: 15px;
  display: flex;
  `

export const DashboardContentContainer = styled.div`
  width: 100%;
`;

export const PageHeaderText = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

export const RepositoryCard = styled.div`
  width: 100%;
  padding: 20px;
  background: #FFFFFF;
  box-shadow: 0px 6px 58px rgba(196, 203, 214, 0.1);
  border-radius: 3px;
  margin: 20px 0;
`;

export const RepoCardTitle = styled.p`
  font-weight: 700;
  line-height: 21px;
  margin: 0;
`;

export const RepoCardSubTitle = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #91929E;
`;

export const RepoFooter = styled.div`
  display: flex;

  p {
    margin-right: 10px;
    color: #91929E;
    font-size: 12px;
  }
`;
