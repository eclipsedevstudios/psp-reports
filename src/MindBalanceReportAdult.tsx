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
import { AthleteLevel } from "./models/surveyResponse";

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
  const level = (params.get("level") as AthleteLevel) || "-";
  const providerName = params.get("providerName") || "-";
  const age = params.get("age") || "-";
  // Get percentile values from query params (or use scores as percentiles)

  //   RESILIENT MINDSET
  const resilientMindsetScore = params.get("GrowthScore") || "0";
  const resilientMindsetPercentile = params.get("GP") || "0";
  const resilientMindsetComparedWithPeers =
    params.get("GMProComparison") || "0";
  const resilientMindsetComparedWithCollegeAthletes =
    params.get("GMColComparison") || "0";

  // MENTAL SKILLS
  const mentalSkillsScore = params.get("MentalSkills") || "0";
  const mentalSkillsPercentile = params.get("PP") || "0";
  const mentalSkillsComparedWithPeers = params.get("MSProComparison") || "0";
  const mentalSkillsComparedWithCollegeAthletes =
    params.get("MSColComparison") || "0";

  // TEAM SUPPORT
  const teamSupportScore = params.get("Team") || "0";
  const teamSupportPercentile = params.get("TP") || "0";
  const teamSupportComparedWithPeers = params.get("TSProComparison") || "0";
  const teamSupportComparedWithCollegeAthletes =
    params.get("TSColComparison") || "0";

  // HEALTH BEHAVIORS
  const healthBehavioursScore = params.get("HealthHabits") || "0";
  const healthBehavioursPercentile = params.get("PhP") || "0";
  const healthBehavioursComparedWithPeers =
    params.get("HHProComparison") || "0";
  const healthBehavioursComparedWithCollegeAthletes =
    params.get("HHColComparison") || "0";

  // WELLNESS ACCOUNTABILITY
  const wellnessAccountabilityScore = params.get("SelfReflection") || "0";
  const wellnessAccountabilityPercentile = params.get("MP") || "0";
  const wellnessAccountabilityComparedWithPeers =
    params.get("SRProComparison") || "0";
  const wellnessAccountabilityComparedWithCollegeAthletes =
    params.get("SRColComparison") || "0";

  const surveyResponse: MindBalanceSurveyResponse = {
    clusterResults: [
      {
        name: MindBalanceAdultCluster.ResilientMindset,
        percentile: resilientMindsetPercentile,
        score: resilientMindsetScore,
        comparedWithPeers: resilientMindsetComparedWithPeers,
        comparedWithCollegeAthletes:
          resilientMindsetComparedWithCollegeAthletes,
      },
      {
        name: MindBalanceAdultCluster.MentalSkills,
        percentile: mentalSkillsPercentile,
        score: mentalSkillsScore,
        comparedWithPeers: mentalSkillsComparedWithPeers,
        comparedWithCollegeAthletes: mentalSkillsComparedWithCollegeAthletes,
      },
      {
        name: MindBalanceAdultCluster.TeamSupport,
        percentile: teamSupportPercentile,
        score: teamSupportScore,
        comparedWithPeers: teamSupportComparedWithPeers,
        comparedWithCollegeAthletes: teamSupportComparedWithCollegeAthletes,
      },
      {
        name: MindBalanceAdultCluster.HealthHabits,
        percentile: healthBehavioursPercentile,
        score: healthBehavioursScore,
        comparedWithPeers: healthBehavioursComparedWithPeers,
        comparedWithCollegeAthletes:
          healthBehavioursComparedWithCollegeAthletes,
      },
      {
        name: MindBalanceAdultCluster.WellnessAccountability,
        percentile: wellnessAccountabilityPercentile,
        score: wellnessAccountabilityScore,
        comparedWithPeers: wellnessAccountabilityComparedWithPeers,
        comparedWithCollegeAthletes:
          wellnessAccountabilityComparedWithCollegeAthletes,
      },
    ],
    language: language,
    athleteName: athleteName,
    age: age,
    recordedDate: recordedDate,
    level: level as AthleteLevel,
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
            <li>Resilient Mindset Percentile: {resilientMindsetPercentile}</li>
            <li>Mental Skills Percentile: {mentalSkillsPercentile}</li>
            <li>Team Support Percentile: {teamSupportPercentile}</li>
            <li>Health Habits Percentile: {healthBehavioursPercentile}</li>
            <li>
              Wellness Accountability Percentile:{" "}
              {wellnessAccountabilityPercentile}
            </li>
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
              level={level}
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
