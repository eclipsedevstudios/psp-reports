import { ReactNode } from 'react';
import styled from 'styled-components';

import { PageWrapper } from '../components-shared/PageWrapper';
import { PageHeader } from '../components-shared/PageHeader';
import { PageHeaderTitle } from '../components-shared/PageHeaderTitle';
import { PageHeaderSubtitle } from '../components-shared/PageHeaderSubtitle';
import { PageHeaderHr } from '../components-shared/PageHeaderHr';
import PageFooter from '../components-shared/PageFooter';
import { StaffCluster, Language } from '../types';
import { clusters } from '../constants/clusters_staff';

import performanceMindsetImage from '../images/cluster_icons/growth_mindset.png';
import mindfulIntentionImage from '../images/cluster_icons/self_reflection.png';
import recoveryImage from '../images/cluster_icons/health_habits.png';
import teamCultureImage from '../images/cluster_icons/team_support.png';
import relationalDynamicsImage from '../images/cluster_icons/mental_skills.png';

const FiveClustersPage = ({ language }: { language: Language }) => {
  const performanceMindset = clusters.filter(cluster => cluster.name === StaffCluster.PerformanceMindset && cluster.language === language)[0];
  const mindfulIntention = clusters.filter(cluster => cluster.name === StaffCluster.MindfulIntention && cluster.language === language)[0];
  const recovery = clusters.filter(cluster => cluster.name === StaffCluster.Recovery && cluster.language === language)[0];
  const teamCulture = clusters.filter(cluster => cluster.name === StaffCluster.TeamCulture && cluster.language === language)[0];
  const relationalDynamics = clusters.filter(cluster => cluster.name === StaffCluster.RelationalDynamics && cluster.language === language)[0];

  return (
    <PageWrapper>
      <PageHeader>
        <div>
          {pageHeaderStrings[language]}
        </div>
        <PageHeaderHr>
          <hr />
        </PageHeaderHr>
      </PageHeader>
      <IntroParagraph>
        {introParagraphStrings[language]}
      </IntroParagraph>
      <ClusterExplanationWrapper>
        <img src={performanceMindsetImage} />
        <div>
          <ClusterExplanationTitle>
            {performanceMindset.label}
          </ClusterExplanationTitle>
          <ClusterExplanationDescription>
            {performanceMindset.summaryPageDescription}
          </ClusterExplanationDescription>
        </div>
      </ClusterExplanationWrapper>
      <ClusterExplanationWrapper>
        <div>
          <ClusterExplanationTitle>
            {mindfulIntention.label}
          </ClusterExplanationTitle>
          <ClusterExplanationDescription>
            {mindfulIntention.summaryPageDescription}
          </ClusterExplanationDescription>
        </div>
        <img src={mindfulIntentionImage} />
      </ClusterExplanationWrapper>
      <ClusterExplanationWrapper>
        <img src={recoveryImage} />
        <div>
          <ClusterExplanationTitle>
            {recovery.label}
          </ClusterExplanationTitle>
          <ClusterExplanationDescription>
            {recovery.summaryPageDescription}
          </ClusterExplanationDescription>
        </div>
      </ClusterExplanationWrapper>
      <ClusterExplanationWrapper>
        <div>
          <ClusterExplanationTitle>
            {teamCulture.label}
          </ClusterExplanationTitle>
          <ClusterExplanationDescription>
            {teamCulture.summaryPageDescription}
          </ClusterExplanationDescription>
        </div>
        <img src={teamCultureImage} />
      </ClusterExplanationWrapper>
      <ClusterExplanationWrapper>
        <img src={relationalDynamicsImage} />
        <div>
          <ClusterExplanationTitle>
            {relationalDynamics.label}
          </ClusterExplanationTitle>
          <ClusterExplanationDescription>
            {relationalDynamics.summaryPageDescription}
          </ClusterExplanationDescription>
        </div>
      </ClusterExplanationWrapper>
      <PageFooter pageNum={2} />
    </PageWrapper>
  )
}

const pageHeaderStrings: { [key in Language]: ReactNode } = {
  [Language.English]: <>
    <PageHeaderSubtitle>
      The
    </PageHeaderSubtitle>
    <PageHeaderTitle>
      Five Clusters
    </PageHeaderTitle>
  </>,
  [Language.Spanish]: <>
    <PageHeaderSubtitle>
      El
    </PageHeaderSubtitle>
    <PageHeaderTitle>
      Cinco Groupos
    </PageHeaderTitle>
  </>,
}

const introParagraphStrings: { [key in Language]: ReactNode } = {
  [Language.English]: <>
    The clusters below include the thoughts, feelings, and behaviors that contribute to optimal
    performance and mental health in sport staff. All clusters have been identified as "very" or
    "extremely" important by our pool of subject matter experts to positive performance outcomes
    and overall mental wellness.
  </>,
  [Language.Spanish]: <></>,
}

const BASE = 8;

const IntroParagraph = styled.div`
  margin: ${BASE*3}px 0px;
`;

const ClusterExplanationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: ${BASE*5}px;
  padding: ${BASE * 2}px ${BASE*5}px;
  border-radius: ${BASE * 3}px 0px 0px ${BASE * 3}px;

  > img {
    width: 100px;
    height: 100px;
  }

  :nth-child(odd) {
    background-color: rgb(239, 239, 239);
  }
`;

const ClusterExplanationTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
`;

const ClusterExplanationDescription = styled.p`
  font-size: 14px;
`;

export default FiveClustersPage;