import styled from 'styled-components';

import CoverPage from './mindset-assessment-pages/CoverPage';
import FiveClustersPage from './mindset-assessment-pages/FiveClustersPage';
import MindsetAssessmentPage from './mindset-assessment-pages/MindsetAssessmentPage';
import SummaryPage from './mindset-assessment-pages/SummaryPage';
import ClusterSummaryPage from './mindset-assessment-pages/ClusterSummaryPage';
import WrapUpPage from './mindset-assessment-pages/WrapUpPage';
import { ClusterResult, SurveyResponse } from './models/surveyResponse';
import { clusters } from './constants/clusters';
import { Cluster, Language } from './types';
// import { sampleData } from './constants/sampleData';
import './App.css';

function App() {
  // The ReportMetadata component is hidden when reportOnly=true
  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);
  const reportOnlyMode = params.get('reportOnly');

  const surveyResponse: SurveyResponse = {
    athleteName: params.get('athleteName') || '',
    recordedDate: params.get('recordedDate') || '',
    level: params.get('level') || '',
    clusterResults: [
      {
        name: Cluster.GrowthMindset,
        percentile: params.get('growthMindsetPercentile'),
        percentileCollege: params.get('growthMindsetPercentileCollege'),
        percentilePro: params.get('growthMindsetPercentilePro'),
        rawScore: params.get('growthMindsetScore'),
      },
      {
        name: Cluster.MentalSkills,
        percentile: params.get('mentalSkillsPercentile'),
        percentileCollege: params.get('mentalSkillsPercentileCollege'),
        percentilePro: params.get('mentalSkillsPercentilePro'),
        rawScore: params.get('mentalSkillsScore'),
      },
      {
        name: Cluster.TeamSupport,
        percentile: params.get('teamSupportPercentile'),
        percentileCollege: params.get('teamSupportPercentileCollege'),
        percentilePro: params.get('teamSupportPercentilePro'),
        rawScore: params.get('teamSupportScore'),
      },
      {
        name: Cluster.HealthHabits,
        percentile: params.get('healthHabitsPercentile'),
        percentileCollege: params.get('healthHabitsPercentileCollege'),
        percentilePro: params.get('healthHabitsPercentilePro'),
        rawScore: params.get('healthHabitsScore'),
      },
      {
        name: Cluster.SelfReflection,
        percentile: params.get('selfReflectionPercentile'),
        percentileCollege: params.get('selfReflectionPercentileCollege'),
        percentilePro: params.get('selfReflectionPercentilePro'),
        rawScore: params.get('selfReflectionScore'),
      },
    ] as ClusterResult[],
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
            <li>Level: {surveyResponse.level}</li>
            <li>Language: {surveyResponse.language}</li>
            <li>
              Cluster Results
              {surveyResponse.clusterResults.map(clusterResult => (
                <ul>
                  <li>{clusterResult.label} Percentile: {clusterResult.percentile}</li>
                  <li>{clusterResult.label} College Percentile: {clusterResult.percentileCollege}</li>
                  <li>{clusterResult.label} Pro Percentile: {clusterResult.percentilePro}</li>
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
                clusterRelevantModules={cluster.relevantModules}
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

export default App;
