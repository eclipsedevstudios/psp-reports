import styled from 'styled-components';

import CoverPage from './mindset-report-staff-pages/CoverPage';
import FiveClustersPage from './mindset-report-staff-pages/FiveClustersPage';
import MindsetAssessmentPage from './mindset-report-staff-pages/MindsetAssessmentPage';
import SummaryPage from './mindset-report-staff-pages/SummaryPage';
import ClusterSummaryPage from './mindset-report-staff-pages/ClusterSummaryPage';
import WrapUpPage from './mindset-report-staff-pages/WrapUpPage';
import { StaffClusterResult, StaffSurveyResponse } from './models/surveyResponse';
import { clusters } from './constants/clusters_staff';
import { StaffCluster, Language } from './types';
import './App.css';

function MindsetReportStaff() {
  // The ReportMetadata component is hidden when reportOnly=true
  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);
  const reportOnlyMode = params.get('reportOnly');

  const surveyResponse: StaffSurveyResponse = {
    athleteName: params.get('athleteName') || '',
    recordedDate: params.get('recordedDate') || '',
    clusterResults: [
      {
        name: StaffCluster.PerformanceMindset,
        percentile: params.get('performanceMindsetPercentile'),
        rawScore: params.get('performanceMindsetScore'),
      },
      {
        name: StaffCluster.MindfulIntention,
        percentile: params.get('mindfulIntentionPercentile'),
        rawScore: params.get('mindfulIntentionScore'),
      },
      {
        name: StaffCluster.Recovery,
        percentile: params.get('recoveryPercentile'),
        rawScore: params.get('recoveryScore'),
      },
      {
        name: StaffCluster.TeamCulture,
        percentile: params.get('teamCulturePercentile'),
        rawScore: params.get('teamCultureScore'),
      },
      {
        name: StaffCluster.RelationalDynamics,
        percentile: params.get('relationalDynamicsPercentile'),
        rawScore: params.get('relationalDynamicsScore'),
      },
    ] as StaffClusterResult[],
    language: params.get('language') as Language || Language.English,
  };

  console.log(surveyResponse);

  return (
    <>
      {reportOnlyMode === 'false' && (
        <ReportMetadata>
          <p>
            This report was generated with the following data:
          </p>
          <ul>
            <li>Athlete Name: {surveyResponse.athleteName}</li>
            <li>Recorded Date: {surveyResponse.recordedDate}</li>
            <li>Language: {surveyResponse.language}</li>
            <li>
              Cluster Results
              {surveyResponse.clusterResults.map(clusterResult => (
                <ul>
                  <li>{clusterResult.label} Percentile: {clusterResult.percentile}</li>
                </ul>
              ))}
            </li>
          </ul>
        </ReportMetadata>
      )}
      {surveyResponse && (
        <>
          <ReportPage>
            <CoverPage
              language={surveyResponse.language}
            />
          </ReportPage>
          <ReportPage>
            <MindsetAssessmentPage
              language={surveyResponse.language}
            />
          </ReportPage>
          <ReportPage>
            <FiveClustersPage
              language={surveyResponse.language}
            />
          </ReportPage>
          <ReportPage>
            <SummaryPage
              surveyResponse={surveyResponse}
            />
          </ReportPage>
          {clusters.filter(c => c.language === surveyResponse.language).map((cluster, index) => (
            <ReportPage
              key={`cluster-summary-page-${index}`}
            >
              <ClusterSummaryPage
                clusterName={cluster.name}
                clusterLabel={cluster.label}
                clusterDescription={cluster.description}
                clusterFunFact={cluster.funFact}
                surveyResponse={surveyResponse}
                pageNum={index+4}
              />
            </ReportPage>
          ))}
          <ReportPage>
            <WrapUpPage language={surveyResponse.language} />
          </ReportPage>
        </>
      )}
    </>
  );
}

const ReportMetadata = styled.div`
  background-color: #EFEFEF;
  padding: 20px;
  margin-bottom: 20px;
`;

/*
Puppeteer exports PDFs at a default resolution of 96ppi, so to match a standard 
letter size, our dimensions should be (8.5 x 11) * 96 = 816px by 1056px
*/
const ReportPage = styled.div<{ theme: string }>`
  height: 1056px;
  width: 816px;
  display: flex;
  flex-direction: column;
  background-color: #FFF;
  print-color-adjust: exact;
  -webkit-print-color-adjust: exact;
`;

export default MindsetReportStaff;