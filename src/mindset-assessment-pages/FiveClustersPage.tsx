import { ReactNode } from 'react';
import styled from 'styled-components';

import { PageWrapper } from '../components-shared/PageWrapper';
import { PageHeader } from '../components-shared/PageHeader';
import { PageHeaderTitle } from '../components-shared/PageHeaderTitle';
import { PageHeaderSubtitle } from '../components-shared/PageHeaderSubtitle';
import { PageHeaderHr } from '../components-shared/PageHeaderHr';
import PageFooter from '../components-shared/PageFooter';
import { Cluster, Language } from '../types';
import { clusters } from '../constants/clusters';

import growthMindsetImage from '../images/cluster_icons/growth_mindset.png';
import mentalSkillsImage from '../images/cluster_icons/mental_skills.png';
import teamSupportImage from '../images/cluster_icons/team_support.png';
import healthHabitsImage from '../images/cluster_icons/health_habits.png';
import selfReflectionImage from '../images/cluster_icons/self_reflection.png';

const FiveClustersPage = ({ language }: { language: Language }) => {
  const growthMindset = clusters.filter(cluster => cluster.name === Cluster.GrowthMindset && cluster.language === language)[0];
  const mentalSkills = clusters.filter(cluster => cluster.name === Cluster.MentalSkills && cluster.language === language)[0];
  const teamSupport = clusters.filter(cluster => cluster.name === Cluster.TeamSupport && cluster.language === language)[0];
  const healthHabits = clusters.filter(cluster => cluster.name === Cluster.HealthHabits && cluster.language === language)[0];
  const selfReflection = clusters.filter(cluster => cluster.name === Cluster.SelfReflection && cluster.language === language)[0];

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
        <img src={growthMindsetImage} />
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
            {mentalSkills.label}
          </ClusterExplanationTitle>
          <ClusterExplanationDescription>
            {mentalSkills.summaryPageDescription}
          </ClusterExplanationDescription>
        </div>
        <img src={mentalSkillsImage} />
      </ClusterExplanationWrapper>
      <ClusterExplanationWrapper>
        <img src={teamSupportImage} />
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
        <img src={healthHabitsImage} />
      </ClusterExplanationWrapper>
      <ClusterExplanationWrapper>
        <img src={selfReflectionImage} />
        <div>
          <ClusterExplanationTitle>
            {selfReflection.label}
          </ClusterExplanationTitle>
          <ClusterExplanationDescription>
            {selfReflection.summaryPageDescription}
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
    performance and mental health in athletes. All clusters have been identified as "very" or
    "extremely" important by our pool of subject matter experts to positive performance
    outcomes and overall mental wellness.
  </>,
  [Language.Spanish]: <>
    Los grupos a continuación incluyen los pensamientos, sentimientos y comportamientos que
    contribuyen al rendimiento óptimo y la salud mental de los atletas. Nuestro grupo de expertos en la
    materia ha identificado todos los grupos como "muy" o "extremadamente" importantes para
    obtener resultados de rendimiento positivos y bienestar mental general.
  </>,
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