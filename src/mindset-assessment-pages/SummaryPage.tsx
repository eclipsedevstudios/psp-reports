import styled from 'styled-components';
import DayJS from 'dayjs';

import { PageWrapper } from '../components-shared/PageWrapper';
import { PageHeader } from '../components-shared/PageHeader';
import { PageHeaderTitle } from '../components-shared/PageHeaderTitle';
import { PageHeaderSubtitle } from '../components-shared/PageHeaderSubtitle';
import { SurveyResponse } from '../models/surveyResponse';

const SummaryPage = ({ surveyResponse }: { surveyResponse: SurveyResponse}) => {
  return (
    <PageWrapper>
      <PageHeader>
        <div>
          <PageHeaderSubtitle>
            Summary
          </PageHeaderSubtitle>
          <PageHeaderTitle>
            Report
          </PageHeaderTitle>
        </div>
        <AthleteCard>
          <h1>{surveyResponse.athleteName}</h1>
          <hr />
          <p><b>Level</b>: {surveyResponse.level}</p>
          <p><b>Date</b>: {DayJS(surveyResponse.recordedDate).format('MM/DD/YYYY')}</p>
        </AthleteCard>
      </PageHeader>
      <ClusterResults>
        {surveyResponse.clusterResults.map((cluster, index) => (
          <ClusterResult key={`cluster-results-${index}`}>
            <td>{cluster.label}</td>
            <td>
              <PercentileVisualization percentile={cluster.percentile} />
            </td>
            <td>{cluster.percentile} percentile</td>
          </ClusterResult>
        ))}
      </ClusterResults>
      <HowToReadCard>
        <h1>How to Read this Report</h1>
        <p>
          Your scores represent your percentiles in each of the categories above.
          This means that if you scored in the 10th percentile. 10% of the athletes at your
          level received your score or below and 90% reported scores higher than yours.
        </p>
        <p>
          No score is indicative of your physical abilities or implies that you are a "good" or
          a "bad" athlete. This report is simply designed to encourage the development
          of your mental skills throughout your athletic endeavors.
        </p>
      </HowToReadCard>
    </PageWrapper>
  );
}

interface PercentileVisualizationProps {
  percentile: string;
}

const PercentileVisualization = ({ percentile }: PercentileVisualizationProps) => {
  console.log(percentile)
  return (
    <PercentileVisualizationWrapper>
      {[...Array(5)].map(() => (
        <PercentileBar />
      ))}
    </PercentileVisualizationWrapper>
  )
}

const BASE = 8;

const AthleteCard = styled.div`
  padding: ${BASE * 2}px;
  width: 300px;
  background-color: rgb(227, 227, 227);

  > h1 {
    font-family: 'League Gothic';
    font-size: 28px;
    text-transform: uppercase;
    margin: 0px;
    letter-spacing: 1px;
  }

  > hr {
    box-shadow: 0px;
    border-top: 1px solid #000;
  }
`;

const ClusterResults = styled.table`
  margin-top: ${BASE * 10}px;
  border-spacing: ${BASE * 3}px;
`;

const ClusterResult = styled.tr`
  font-size: 20px;
  font-weight: bold;
`;

const PercentileVisualizationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: ${BASE}px;
`;

const PercentileBar = styled.div`
  width: 50px;
  height: 10px;
  background-color: rgb(239, 239, 239);
`;

const HowToReadCard = styled.div`
  padding: ${BASE * 2}px;
  margin-top: ${BASE * 10}px;
  width: 500px;
  background-color: rgb(227, 227, 227);
  float: right;
  font-size: 14px;

  > h1 {
    font-family: 'League Gothic';
    font-size: 24px;
    text-transform: uppercase;
    margin: 0px;
    letter-spacing: 1px;
  }
`;

export default SummaryPage;