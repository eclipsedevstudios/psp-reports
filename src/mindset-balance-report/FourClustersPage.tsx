import { ReactNode } from 'react';
import styled from 'styled-components';

import { PageWrapper } from '../components-shared/PageWrapper';
import { PageHeader } from '../components-shared/PageHeader';
import { PageHeaderTitle } from '../components-shared/PageHeaderTitle';
import { PageHeaderSubtitle } from '../components-shared/PageHeaderSubtitle';
import { PageHeaderHr } from '../components-shared/PageHeaderHr';
import PageFooter from '../components-shared/PageFooter';
import { MindBalanceCluster, Language } from '../types';
import { clusters } from '../constants/clusters_mindbalance';

import growthMindsetImage from '../images/cluster_icons/growth_mindset.png';
import selfReflectionImage from '../images/cluster_icons/self_reflection.png';
import teamSupportImage from '../images/cluster_icons/team_support.png';
import healthHabitsImage from '../images/cluster_icons/health_habits.png';
import mindBalanceClustersImage from '../images/mind_balance_clusters.png';

const FourClustersPage = ({ language }: { language: Language }) => {
  const growthMindset = clusters.filter(cluster => cluster.name === MindBalanceCluster.GrowthMindset && cluster.language === language)[0];
  const selfConfidence = clusters.filter(cluster => cluster.name === MindBalanceCluster.SelfConfidence && cluster.language === language)[0];
  const teamCulture = clusters.filter(cluster => cluster.name === MindBalanceCluster.TeamCulture && cluster.language === language)[0];
  const healthBehaviors = clusters.filter(cluster => cluster.name === MindBalanceCluster.HealthBehaviors && cluster.language === language)[0];

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
        <IntroImage src={mindBalanceClustersImage} alt="Athletes in action" />
      </IntroParagraph>
      <ClusterExplanationWrapper>
        <img src={growthMindsetImage} alt="Growth Mindset" />
        <div>
          <ClusterExplanationTitle>
            {growthMindset.label}
          </ClusterExplanationTitle>
          <ClusterExplanationDescription>
            {growthMindset.summaryPageDescription}
          </ClusterExplanationDescription>
        </div>
      </ClusterExplanationWrapper>
      <ClusterExplanationWrapper>
        <div>
          <ClusterExplanationTitle>
            {selfConfidence.label}
          </ClusterExplanationTitle>
          <ClusterExplanationDescription>
            {selfConfidence.summaryPageDescription}
          </ClusterExplanationDescription>
        </div>
        <img src={selfReflectionImage} alt="Self-Confidence" />
      </ClusterExplanationWrapper>
      <ClusterExplanationWrapper>
        <img src={teamSupportImage} alt="Team Culture" />
        <div>
          <ClusterExplanationTitle>
            {teamCulture.label}
          </ClusterExplanationTitle>
          <ClusterExplanationDescription>
            {teamCulture.summaryPageDescription}
          </ClusterExplanationDescription>
        </div>
      </ClusterExplanationWrapper>
      <ClusterExplanationWrapper>
        <div>
          <ClusterExplanationTitle>
            {healthBehaviors.label}
          </ClusterExplanationTitle>
          <ClusterExplanationDescription>
            {healthBehaviors.summaryPageDescription}
          </ClusterExplanationDescription>
        </div>
        <img src={healthHabitsImage} alt="Health Behaviors" />
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
      FOUR CLUSTERS
    </PageHeaderTitle>
  </>,
  [Language.Spanish]: <>
    <PageHeaderSubtitle>
      LOS
    </PageHeaderSubtitle>
    <PageHeaderTitle>
      CUATRO GRUPOS
    </PageHeaderTitle>
  </>,
}

const introParagraphStrings: { [key in Language]: ReactNode } = {
  [Language.English]: <>
    The clusters below include the thoughts,
    feelings, and behaviors that contribute to
    optimal performance and mental health in
    athletes. All clusters have been identified
    as "very" or "extremely" important by our
    pool of subject matter experts to positive
    performance outcomes and overall
    mental wellness in athletes.
  </>,
  [Language.Spanish]: <>
    Los grupos a continuación incluyen los pensamientos,
    sentimientos y comportamientos que contribuyen al
    rendimiento óptimo y la salud mental en
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

const IntroImage = styled.img`
  width: 300px;
  height: auto;
  flex-shrink: 0;
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

export default FourClustersPage;

