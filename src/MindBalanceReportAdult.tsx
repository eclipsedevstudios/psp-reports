import styled from "styled-components";

import CoverPage from "./mindset-balance-adult-report/CoverPage";
import MindsetAssessmentPage from "./mindset-balance-adult-report/MindsetAssessmentPage";
import FiveClustersPage from "./mindset-balance-adult-report/FiveClustersPage";
import SummaryPage, {
  MindBalanceSurveyResponse,
} from "./mindset-balance-adult-report/SummaryPage";
import { Language, MindBalanceAdultCluster } from "./types";
import "./App.css";
import { clusters } from "./constants/clusters_mindbalance_adult";
import ClusterSummaryPage from "./mindset-balance-adult-report/ClusterSummaryPage";
import WrapUpPage from "./mindset-balance-adult-report/WrapUpPage";

function MindsetBalanceReportAdult() {
  // The ReportMetadata component is hidden when reportOnly=true
  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);
  const reportOnlyMode = params.get("reportOnly");

  // Static values for now - will be made dynamic based on PDF requirements
  const language: Language =
    (params.get("language") as Language) || Language.English;
  const athleteName = params.get("athleteName") || "-";
  const recordedDate = params.get("recordedDate") || "-";
  const level = params.get("level") || "-";
  const providerName = params.get("providerName") || "-";
  const age = params.get("age") || "-";
  // Get percentile values from query params (or use scores as percentiles)
  const growthPercentile =
    params.get("growthPercentile") || params.get("growthScore") || "0";
  const healthBehavioursPercentile =
    params.get("healthBehavioursPercentile") ||
    params.get("healthBehavioursScore") ||
    "0";
  const selfConfidencePercentile =
    params.get("selfConfidencePercentile") ||
    params.get("selfConfidenceScore") ||
    "0";
  const teamCulturePercentile =
    params.get("teamCulturePercentile") ||
    params.get("teamCultureScore") ||
    "0";

  const surveyResponse: MindBalanceSurveyResponse = {
    clusterResults: [
      {
        name: MindBalanceAdultCluster.ResilientMindset,
        percentile: growthPercentile,
      },
      {
        name: MindBalanceAdultCluster.MentalSkills,
        percentile: growthPercentile,
      },
      {
        name: MindBalanceAdultCluster.TeamSupport,
        percentile: selfConfidencePercentile,
      },
      {
        name: MindBalanceAdultCluster.HealthHabits,
        percentile: teamCulturePercentile,
      },
      {
        name: MindBalanceAdultCluster.WellnessAccountability,
        percentile: healthBehavioursPercentile,
      },
    ],
    language: language,
    athleteName: athleteName,
    age: age,
    recordedDate: recordedDate,
  };

  console.log("Mindset Report - Static values:", {
    athleteName,
    recordedDate,
    level,
    language,
    providerName,
    surveyResponse,
  });

  return (
    <>
      {reportOnlyMode === "false" && (
        <ReportMetadata>
          <p>This report was generated with the following data:</p>
          <ul>
            <li>Athlete Name: {athleteName}</li>
            <li>Recorded Date: {recordedDate}</li>
            <li>Level: {level}</li>
            <li>Language: {language}</li>
            <li>Provider Name: {providerName}</li>
            <li>Growth Percentile: {growthPercentile}</li>
            <li>Health Behaviours Percentile: {healthBehavioursPercentile}</li>
            <li>Self Confidence Percentile: {selfConfidencePercentile}</li>
            <li>Team Culture Percentile: {teamCulturePercentile}</li>
          </ul>
        </ReportMetadata>
      )}
      <ReportPage>
        <CoverPage language={language} />
      </ReportPage>
      <ReportPage>
        <MindsetAssessmentPage language={language} />
      </ReportPage>
      <ReportPage>
        <FiveClustersPage language={language} />
      </ReportPage>
      <ReportPage>
        <SummaryPage surveyResponse={surveyResponse} />
      </ReportPage>
      {clusters
        .filter((c) => c.language === surveyResponse.language)
        .map((cluster, index) => (
          <ReportPage key={`cluster-summary-page-${index}`}>
            <ClusterSummaryPage
              clusterName={cluster.name}
              clusterLabel={cluster.label}
              clusterDescription={cluster.description}
              clusterFunFact={cluster.funFact}
              surveyResponse={surveyResponse}
              pageNum={index + 4}
            />
          </ReportPage>
        ))}
      <ReportPage>
        <WrapUpPage language={language} pageNum={8} />
      </ReportPage>
    
    </>
  );
}

const ReportMetadata = styled.div`
  background-color: #efefef;
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
  background-color: #fff;
  print-color-adjust: exact;
  -webkit-print-color-adjust: exact;
`;

export default MindsetBalanceReportAdult;
