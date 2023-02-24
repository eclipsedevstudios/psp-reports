import styled from 'styled-components';

import { PageWrapper } from '../components-shared/PageWrapper';
import { PageHeader } from '../components-shared/PageHeader';
import { PageHeaderTitle } from '../components-shared/PageHeaderTitle';
import { PageHeaderHr } from '../components-shared/PageHeaderHr';
import PageFooter from '../components-shared/PageFooter';
import { SurveyResponse } from '../models/surveyResponse';
import { percentileInterpretation } from '../constants/percentile-interpretation';

interface ClusterSummaryPageProps {
  clusterName: string;
  clusterLabel: string;
  clusterDescription: string;
  clusterFunFact: string;
  surveyResponse: SurveyResponse;
  pageNum: number;
}

const ClusterSummaryPage = ({
  clusterName,
  clusterLabel,
  clusterDescription,
  clusterFunFact,
  surveyResponse,
  pageNum,
}: ClusterSummaryPageProps) => {
  const clusterResult = surveyResponse.clusterResults.filter(cluster => cluster.name === clusterName)[0];
  const percentile = parseInt(clusterResult.percentile);
  const interpretation = percentileInterpretation.filter(obj => obj.name === clusterName && percentile >= obj.minPercentile && percentile <= obj.maxPercentile)[0];

  const classifyPercentile = (percentile: number) => {
    if (percentile <= 30) {
      return 'LOW';
    } else if (percentile <= 70) {
      return 'AVERAGE';
    } else {
      return 'HIGH';
    }
  }

  return (
    <PageWrapper>
      <PageHeader>
        <div>
          <PageHeaderTitle>
            {clusterLabel}
          </PageHeaderTitle>
        </div>
        <PageHeaderHr>
          <hr />
        </PageHeaderHr>
      </PageHeader>
      <ClusterDescription>
        {clusterDescription}
      </ClusterDescription>
      <ClusterRow>
        <ClusterAnalysis>
          <h1>Understanding your score</h1>
          <p>
            {interpretation.meaning}
          </p>
          <p>
            {interpretation.next_steps}
          </p>
        </ClusterAnalysis>
        <ClusterRight>
          <ClusterPercentile>
            <img src={require(`../images/percentiles/${percentile}.png`)} />
            <br />
            {classifyPercentile(percentile)} RANGE
          </ClusterPercentile>
          <DidYouKnow>
            {clusterFunFact}
          </DidYouKnow>
        </ClusterRight>
      </ClusterRow>
      <PageFooter pageNum={pageNum} />
    </PageWrapper>
  )
};

const BASE = 8;

const ClusterDescription = styled.div`
  margin: ${BASE * 5}px 0px;
  font-size: 20px;
`;

const ClusterRow = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: ${BASE * 8}px;
  align-items: top;
`;

const ClusterAnalysis = styled.div`
  flex-basis: 400px;
  flex-grow: 0;
  flex-shrink: 0;

  > h1 {
    color: rgb(191, 37, 35);
    font-size: 18px;
    text-transform: uppercase;
    font-weight: bold;
  }
`;

const ClusterRight = styled.div`
  text-align: center;
`;

const ClusterPercentile = styled.div`
  font-family: 'League Gothic';
  font-size: 24px;
  margin-bottom: ${BASE * 10}px;

  > img {
    width: 200px;
  }
`;

const DidYouKnow = styled.div`
  border: 2px solid rgb(191, 37, 35);
  border-radius: ${BASE}px;
  background-color: rgb(229, 229, 229);
  padding: ${BASE * 4}px ${BASE * 2}px;
  text-align: left;
  font-size: 14px;
  position: relative;

  &:before {
    content: "Did You Know?";
    text-transform: uppercase;
    position: absolute;
    top: ${BASE * -2}px;
    left: ${BASE * 2}px;
    background-color: rgb(191, 37, 35);
    color: #FFFFFF;
    font-weight: bold;
    padding: ${BASE}px;
  }
`;

export default ClusterSummaryPage;