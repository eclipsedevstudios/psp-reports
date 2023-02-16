import styled from 'styled-components';

import { PageWrapper } from '../components-shared/PageWrapper';
import { PageHeader } from '../components-shared/PageHeader';
import { PageHeaderTitle } from '../components-shared/PageHeaderTitle';
import { PageHeaderSubtitle } from '../components-shared/PageHeaderSubtitle';
import { PageHeaderHr } from '../components-shared/PageHeaderHr';
import PageFooter from '../components-shared/PageFooter';

import growthMindsetImage from '../images/cluster_icons/growth_mindset.png';
import mentalSkillsImage from '../images/cluster_icons/mental_skills.png';
import teamSupportImage from '../images/cluster_icons/team_support.png';
import healthHabitsImage from '../images/cluster_icons/health_habits.png';
import selfReflectionImage from '../images/cluster_icons/self_reflection.png';

const FiveClustersPage = () => {
  return (
    <PageWrapper>
      <PageHeader>
        <div>
          <PageHeaderSubtitle>
            The
          </PageHeaderSubtitle>
          <PageHeaderTitle>
            Five Clusters
          </PageHeaderTitle>
        </div>
        <PageHeaderHr>
          <hr />
        </PageHeaderHr>
      </PageHeader>
      <IntroParagraph>
        The clusters below include the thoughts, feelings, and behaviors that contribute to optimal
        performance and mental health in athletes. All clusters have been identified as "very" or
        "extremely" important by our pool of subject matter experts to positive performance
        outcomes and overall mental wellness.
      </IntroParagraph>
      <ClusterExplanationWrapper>
        <img src={growthMindsetImage} />
        <div>
          <ClusterExplanationTitle>Growth Mindset</ClusterExplanationTitle>
          <ClusterExplanationDescription>
            An athlete's ability to be kind and understanding toward oneself
            when faced with difficulties, and to embrace challenges.
          </ClusterExplanationDescription>
        </div>
      </ClusterExplanationWrapper>
      <ClusterExplanationWrapper>
        <div>
          <ClusterExplanationTitle>Mental Skills</ClusterExplanationTitle>
          <ClusterExplanationDescription>
            Skills such as goal setting, mental preparation, and the use of
            mindfulness, imagery, and present-moment focus.
          </ClusterExplanationDescription>
        </div>
        <img src={mentalSkillsImage} />
      </ClusterExplanationWrapper>
      <ClusterExplanationWrapper>
        <img src={teamSupportImage} />
        <div>
          <ClusterExplanationTitle>Team Support</ClusterExplanationTitle>
          <ClusterExplanationDescription>
            The strength of relationships with teammates and coaches, as
            well as whether the athlete feels they have a voice on the team.
          </ClusterExplanationDescription>
        </div>
      </ClusterExplanationWrapper>
      <ClusterExplanationWrapper>
        <div>
          <ClusterExplanationTitle>Health Habits</ClusterExplanationTitle>
          <ClusterExplanationDescription>
            Getting high quality sleep and nutrition, following injury
            prevention guidelines, and getting ample rest & recovery.
          </ClusterExplanationDescription>
        </div>
        <img src={healthHabitsImage} />
      </ClusterExplanationWrapper>
      <ClusterExplanationWrapper>
        <img src={selfReflectionImage} />
        <div>
          <ClusterExplanationTitle>Self Reflection</ClusterExplanationTitle>
          <ClusterExplanationDescription>
            The use of self-reflection, mental health resources, and
            openness to speaking about mental and physical health with
            others.
          </ClusterExplanationDescription>
        </div>
      </ClusterExplanationWrapper>
      <PageFooter pageNum={2} />
    </PageWrapper>
  )
}

const BASE = 8;

const IntroParagraph = styled.div`
  margin: ${BASE*4}px 0px;
`;

const ClusterExplanationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: ${BASE*5}px;
  padding: ${BASE*3}px ${BASE*5}px;
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