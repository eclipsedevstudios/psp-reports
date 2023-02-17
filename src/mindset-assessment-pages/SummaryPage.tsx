import styled from 'styled-components';

import { PageWrapper } from '../components-shared/PageWrapper';
import { PageHeader } from '../components-shared/PageHeader';
import { PageHeaderTitle } from '../components-shared/PageHeaderTitle';
import { PageHeaderSubtitle } from '../components-shared/PageHeaderSubtitle';
import PageFooter from '../components-shared/PageFooter';
import { SurveyResponse } from '../models/surveyResponse';

const SummaryPage = ({ surveyResponse }: { surveyResponse: SurveyResponse}) => {
  return (
    <PageWrapper>
      <PageHeader>
        <div>
          <PageHeaderSubtitle>
            Your Summary
          </PageHeaderSubtitle>
          <PageHeaderTitle>
              Report
          </PageHeaderTitle>
        </div>
        <AthleteCard>
          <h1>{surveyResponse.athleteName}</h1>
          <hr />
          <b>Level</b>: {surveyResponse.level}
          <br /><b>Date</b>: {surveyResponse.recordedDate}
        </AthleteCard>
      </PageHeader>
      <br /><br />
      <ClusterResults>
        {surveyResponse.clusterResults.map((cluster, index) => (
          <>
            <h1>{cluster.label}</h1>
            <ClusterResult key={`cluster-results-${index}`}>
              <tr>
                <td>Compared with peers</td>
                <td>
                  <PercentileVisualization percentile={cluster.percentile} />
                </td>
                <PercentileNumber>{cluster.percentile}th</PercentileNumber>
              </tr>
              {surveyResponse.level === 'high_school' && (
                <tr>
                  <td>Compared with college athletes</td>
                  <td>
                    <PercentileVisualization percentile={cluster.percentileCollege} />
                  </td>
                  <PercentileNumber>{cluster.percentile}th</PercentileNumber>
                </tr>
              )}
              {surveyResponse.level === 'collegiate' || surveyResponse.level === 'semi_pro' || surveyResponse.level === 'adult_rec' && (
                <tr>
                  <td>Compared with pro athletes</td>
                  <td>
                    <PercentileVisualization percentile={cluster.percentilePro} />
                  </td>
                  <PercentileNumber>{cluster.percentile}th</PercentileNumber>
                </tr>
              )}
            </ClusterResult>
          </>
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
      <ClearDiv />
      <PageFooter pageNum={3} />
    </PageWrapper>
  );
}

interface PercentileVisualizationProps {
  percentile: string;
}

const PercentileVisualization = ({ percentile }: PercentileVisualizationProps) => {
  return (
    <img src={require(`../images/percentile_bars/${percentile}.png`)} />
  )
}

const BASE = 8;

const AthleteCard = styled.div`
  background-color: rgb(239, 239, 239);
  padding: ${BASE}px ${BASE * 2}px;
  min-width: 200px;

  > h1 {
    font-family: 'League Gothic';
    font-size: 28px;
    text-transform: uppercase;
    margin: 0px;
  }
`;

const ClusterResults = styled.div`
  > h1 {
    font-size: 18px;
    margin: 0px;
  }
`;

const ClusterResult = styled.table`
  border-spacing: ${BASE}px;
  margin-left: ${BASE * 6}px;
  margin-bottom: ${BASE}px;

  > tr {
    > td {
      font-size: 14px;

      > img {
        width: 380px;
      }
    }
  }
`;

const PercentileNumber = styled.td`
  font-size: 18px !important;
  font-weight: bold;
`;

const HowToReadCard = styled.div`
  padding: ${BASE * 2}px;
  margin-top: ${BASE * 3}px;
  width: 500px;
  background-color: rgb(227, 227, 227);
  float: right;
  font-size: 14px;

  > h1 {
    font-family: 'League Gothic';
    font-size: 24px;
    text-transform: uppercase;
    margin: 0px;
  }
`;

const ClearDiv = styled.div`
  clear: both;
`;

export default SummaryPage;