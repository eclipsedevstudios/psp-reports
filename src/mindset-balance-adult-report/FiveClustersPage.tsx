import { ReactNode } from 'react';
import styled from 'styled-components';

import { PageWrapper } from '../components-shared/PageWrapper';
import { PageHeader } from '../components-shared/PageHeader';
import { PageHeaderTitle } from '../components-shared/PageHeaderTitle';
import { PageHeaderSubtitle } from '../components-shared/PageHeaderSubtitle';
import { PageHeaderHr } from '../components-shared/PageHeaderHr';
import PageFooter from '../components-shared/PageFooter';
import { MindBalanceAdultCluster, Language } from '../types';
import { clusters } from '../constants/clusters_mindbalance_adult';

import resilientMindsetImage from '../images/cluster_icons/growth_mindset.png';
import mentalSkillsImage from '../images/cluster_icons/mental_skills.png';
import teamSupportImage from '../images/cluster_icons/team_support.png';
import healthHabitsImage from '../images/cluster_icons/health_habits.png';
import wellnessAccountabilityImage from '../images/cluster_icons/self_reflection.png';
// import mindBalanceClustersImage from '../images/mind_balance_clusters.png';

const FiveClustersPage = ({ language }: { language: Language }) => {
  const resilientMindset = clusters.filter(cluster => cluster.name === MindBalanceAdultCluster.ResilientMindset && cluster.language === language)[0];
  const mentalSkills = clusters.filter(cluster => cluster.name === MindBalanceAdultCluster.MentalSkills && cluster.language === language)[0];
  const teamSupport = clusters.filter(cluster => cluster.name === MindBalanceAdultCluster.TeamSupport && cluster.language === language)[0];
  const healthHabits = clusters.filter(cluster => cluster.name === MindBalanceAdultCluster.HealthHabits && cluster.language === language)[0];
  const wellnessAccountability = clusters.filter(cluster => cluster.name === MindBalanceAdultCluster.WellnessAccountability && cluster.language === language)[0];

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
        <IntroText>
          {introParagraphStrings[language]}
        </IntroText>
        {/* <IntroImage src={mindBalanceClustersImage} alt="Athletes in action" /> */}
      </IntroParagraph>
      <ClusterExplanationWrapper>
        <img src={resilientMindsetImage} alt="Resilient Mindset" />
        <div>
          <ClusterExplanationTitle>
            {resilientMindset.label}
          </ClusterExplanationTitle>
          <ClusterExplanationDescription>
            {resilientMindset.summaryPageDescription}
          </ClusterExplanationDescription>
        </div>
      </ClusterExplanationWrapper>
      <ClusterExplanationWrapper>
        <div>
          <ClusterExplanationTitle>
            {mentalSkills.label}
          </ClusterExplanationTitle>
          <ClusterExplanationDescription>
            {mentalSkills.summaryPageDescription}
          </ClusterExplanationDescription>
        </div>
        <img src={mentalSkillsImage} alt="Mental Skills" />
      </ClusterExplanationWrapper>
      <ClusterExplanationWrapper>
        <img src={teamSupportImage} alt="Team Environment" />
        <div>
          <ClusterExplanationTitle>
            {teamSupport.label}
          </ClusterExplanationTitle>
          <ClusterExplanationDescription>
            {teamSupport.summaryPageDescription}
          </ClusterExplanationDescription>
        </div>
      </ClusterExplanationWrapper>
      <ClusterExplanationWrapper>
        <div>
          <ClusterExplanationTitle>
            {healthHabits.label}
          </ClusterExplanationTitle>
          <ClusterExplanationDescription>
            {healthHabits.summaryPageDescription}
          </ClusterExplanationDescription>
        </div>
        <img src={healthHabitsImage} alt="Health Habits" />
      </ClusterExplanationWrapper>
      <ClusterExplanationWrapper>
        <img src={wellnessAccountabilityImage} alt="Wellness Accountability" />
        <div>
          <ClusterExplanationTitle>
            {wellnessAccountability.label}
          </ClusterExplanationTitle>
          <ClusterExplanationDescription>
            {wellnessAccountability.summaryPageDescription}
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
      THE
    </PageHeaderSubtitle>
    <PageHeaderTitle>
      FIVE CLUSTERS
    </PageHeaderTitle>
  </>,
  [Language.Spanish]: <>
    <PageHeaderSubtitle>
      LOS
    </PageHeaderSubtitle>
    <PageHeaderTitle>
      CINCO GRUPOS
    </PageHeaderTitle>
  </>,
}

const introParagraphStrings: { [key in Language]: ReactNode } = {
  [Language.English]: <>
    The clusters below include the thoughts,
    feelings, and behaviors that contribute to
    optimal performance and mental wellness in
    athletes. All clusters have been identified
    as "very" or "extremely" important by our
    pool of subject matter experts to positive
    performance outcomes and overall
    mental wellness in athletes.
  </>,
  [Language.Spanish]: <>
    Los grupos a continuación incluyen los pensamientos,
    sentimientos y comportamientos que contribuyen al
    rendimiento óptimo y el bienestar mental en
    los atletas. Todos los grupos han sido identificados
    como "muy" o "extremadamente" importantes por nuestro
    grupo de expertos en la materia para resultados de rendimiento
    positivos y bienestar mental general en los atletas.
  </>,
}

const BASE = 8;

const IntroParagraph = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: ${BASE * 5}px;
  margin: ${BASE*3}px 0px;
`;

const IntroText = styled.div`
  flex: 1;
`;

// const IntroImage = styled.img`
//   width: 300px;
//   height: auto;
//   flex-shrink: 0;
// `;

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

