import styled from 'styled-components';

import { PageWrapper } from '../components-shared/PageWrapper';
import { PageHeader } from '../components-shared/PageHeader';
import { PageHeaderTitle } from '../components-shared/PageHeaderTitle';
import { SurveyResponse } from '../models/surveyResponse';
import { percentileInterpretation } from '../constants/percentile-interpretation';

interface ClusterSummaryPageProps {
  clusterName: string;
  clusterLabel: string;
  clusterDescription: string;
  surveyResponse: SurveyResponse;
}

const ClusterSummaryPage = ({
  clusterName,
  clusterLabel,
  clusterDescription,
  surveyResponse
}: ClusterSummaryPageProps) => {
  const clusterResult = surveyResponse.clusterResults.filter(cluster => cluster.name === clusterName)[0];
  const percentile = parseInt(clusterResult.percentile);
  const interpretation = percentileInterpretation.filter(obj => obj.name === clusterName && percentile >= obj.minPercentile && percentile <= obj.maxPercentile)[0];

  return (
    <PageWrapper>
      <PageHeader>
        <div>
          <PageHeaderTitle theme='dark'>
            {clusterLabel}
          </PageHeaderTitle>
        </div>
      </PageHeader>
      <ClusterDescription>
        {clusterDescription}
      </ClusterDescription>
      <ClusterRow>
        <ClusterSection>
          <h1>What your score means</h1>
          <p>
            {interpretation.meaning}
          </p>
        </ClusterSection>
        <ClusterPercentile>
          {percentile}th percentile
        </ClusterPercentile>
      </ClusterRow>
      <ClusterRow>
        <ClusterSection>
          <h1>Next steps</h1>
          <p>
            {interpretation.next_steps}
          </p>
        </ClusterSection>
      </ClusterRow>
    </PageWrapper>
  )
};

const BASE = 8;

const ClusterDescription = styled.div`
  margin: ${BASE * 5}px 0px;
  color: #FFF;
  font-size: 20px;
`;

const ClusterRow = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: ${BASE * 5}px;
  align-items: center;
`;

const ClusterSection = styled.div`
  > h1 {
    color: rgb(191, 37, 35);
    font-size: 18px;
    text-transform: uppercase;
    font-weight: normal;
  }

  > p {
    color: #FFF;
  }
`;

const ClusterPercentile = styled.div`
  font-family: 'League Gothic';
  font-size: 40px;
  color: rgb(191, 37, 35);
  margin: ${BASE * 5}px;
  text-align: center;
`

export default ClusterSummaryPage;