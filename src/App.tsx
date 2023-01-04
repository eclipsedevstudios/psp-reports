import { useEffect, useState } from 'react';
import styled from 'styled-components';

import CoverPage from './mindset-assessment-pages/CoverPage';
import TableOfContentsPage from './mindset-assessment-pages/TableOfContentsPage';
import SummaryPage from './mindset-assessment-pages/SummaryPage';
import ClusterSummaryPage from './mindset-assessment-pages/ClusterSummaryPage';
import { ClusterResult, SurveyResponse } from './models/surveyResponse';
import { clusters } from './constants/clusters';
// import { sampleData } from './constants/sampleData';
import './App.css';

function App() {
  // The ReportMetadata component is hidden when reportOnly=true
  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);
  const reportOnlyMode = params.get('reportOnly');

  const [responseId, setResponseId] = useState('R_1inhiUBTksen9N1');
  const [surveyResponse, setSurveyResponse] = useState<SurveyResponse | null>(null);

  // Get raw survey response when responseId changes
  useEffect(() => {
    const fetchRawSurveyResponse = async() => {
      const response = await fetch(`http://localhost:3001/survey_response?response_id=${responseId}`);
      const data = await response.json();
      parseSurveyResponse(data);
    }

    fetchRawSurveyResponse()
      .catch(console.error);
    // parseSurveyResponse(sampleData);
  }, [responseId]);

  const handleSelectResponseId = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setResponseId(e.target.value);
  }

  // Parse raw survey response (using Qualtrics field names)
  const parseSurveyResponse = (rawSurveyResponse: any) => {
    const data = rawSurveyResponse.result.values;
    const athleteName = data.QID9_TEXT;
    const email = data.QID12_TEXT;
    const recordedDate = data.recordedDate;
    const level = data.Level;
    const clusterResults: ClusterResult[] = [
      {
        name: 'growth_mindset',
        label: 'Growth Mindset',
        percentile: data.GP,
        percentileCollege: data.MSColComparison,
        percentilePro: data.MSProComparison,
      },
      {
        name: 'mental_skills',
        label: 'Mental Skills',
        percentile: data.PP,
        percentileCollege: data.MSColComparison,
        percentilePro: data.MSProComparison,
      },
      {
        name: 'team_support',
        label: 'Team Support',
        percentile: data.TP,
        percentileCollege: data.TSColComparison,
        percentilePro: data.TSProComparison,
      },
      {
        name: 'health_habits',
        label: 'Health Habits',
        percentile: data.PhP,
        percentileCollege: data.HHColComparison,
        percentilePro: data.HHProComparison,
      },
      {
        name: 'self_reflection',
        label: 'Self-Reflection',
        percentile: data.MP,
        percentileCollege: data.SRColComparison,
        percentilePro: data.SRProComparison,
      },
    ]

    setSurveyResponse({
      athleteName,
      email,
      recordedDate,
      level,
      clusterResults
    })
  }

  console.log(surveyResponse)

  return (
    <>
      {!reportOnlyMode&& (
        <ReportMetadata>
          <p>
            This report was generated with <b><code>response_id: {responseId}</code></b>.
          </p>
          <p>
            Choose a different <code>response_id</code> to generate the PDF with:
            <br /><br />
            <select onChange={(e) => handleSelectResponseId(e)}>
              <option value='R_ujMsW9296ZXnEHv'>R_ujMsW9296ZXnEHv</option>
              <option value='R_1inhiUBTksen9N1'>R_1inhiUBTksen9N1</option>
              <option value='R_27J1nzLgOLFAu06'>R_27J1nzLgOLFAu06</option>
              <option value='R_3rUutVmu15Ey2v9'>R_3rUutVmu15Ey2v9</option>
            </select>
          </p>
        </ReportMetadata>
      )}
      {surveyResponse && (
        <>
          <ReportPage>
            <CoverPage />
          </ReportPage>
          <ReportPage>
            <TableOfContentsPage />
          </ReportPage>
          <ReportPage>
            <SummaryPage
              surveyResponse={surveyResponse}
            />
          </ReportPage>
          {clusters.map((cluster, index) => (
            <ReportPage
              key={`cluster-summary-page-${index}`}
              theme='dark'
            >
              <ClusterSummaryPage
                clusterName={cluster.name}
                clusterLabel={cluster.label}
                clusterDescription={cluster.description}
                surveyResponse={surveyResponse}
              />
            </ReportPage>
          ))}
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
  background-color: ${props => props.theme === 'dark' ? 'rgb(29, 30, 42)' : '#FFF'}
`;

export default App;
