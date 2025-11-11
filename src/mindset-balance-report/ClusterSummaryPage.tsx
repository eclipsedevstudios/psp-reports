import { ReactNode } from 'react';
import styled from 'styled-components';

import { PageWrapper } from '../components-shared/PageWrapper';
import { PageHeader } from '../components-shared/PageHeader';
import { PageHeaderTitle } from '../components-shared/PageHeaderTitle';
import { PageHeaderHr } from '../components-shared/PageHeaderHr';
import PageFooter from '../components-shared/PageFooter';
import { MindBalanceSurveyResponse } from './SummaryPage';
import { Language, MindBalanceCluster } from '../types';
import { percentileInterpretationMindBalance } from '../constants/percentileInterpretationMindBalance';

interface ClusterSummaryPageProps {
  clusterName: MindBalanceCluster;
  clusterLabel: string;
  clusterDescription: string;
  clusterFunFact: string;
  surveyResponse: MindBalanceSurveyResponse;
  pageNum: number;
}

type PercentileBucket = {
  minScore: number;
  maxScore: number;
  percentile: number;
};

const clusterPercentileBuckets: Record<MindBalanceCluster, PercentileBucket[]> = {
  [MindBalanceCluster.GrowthMindset]: [
    { minScore: 0, maxScore: 5.9100, percentile: 10 },
    { minScore: 5.9101, maxScore: 6.4400, percentile: 20 },
    { minScore: 6.4401, maxScore: 6.8400, percentile: 30 },
    { minScore: 6.8401, maxScore: 7.1100, percentile: 40 },
    { minScore: 7.1101, maxScore: 7.3300, percentile: 50 },
    { minScore: 7.3301, maxScore: 7.7800, percentile: 60 },
    { minScore: 7.7801, maxScore: 8.0000, percentile: 70 },
    { minScore: 8.0001, maxScore: 8.4400, percentile: 80 },
    { minScore: 8.4401, maxScore: 9.1100, percentile: 90 },
    { minScore: 9.1101, maxScore: 10, percentile: 100 },
  ],
  [MindBalanceCluster.SelfConfidence]: [
    { minScore: 0, maxScore: 6.0000, percentile: 10 },
    { minScore: 6.0001, maxScore: 6.4000, percentile: 20 },
    { minScore: 6.4001, maxScore: 6.8000, percentile: 30 },
    { minScore: 6.8001, maxScore: 7.2000, percentile: 40 },
    { minScore: 7.2001, maxScore: 7.8000, percentile: 50 },
    { minScore: 7.8001, maxScore: 8.0000, percentile: 60 },
    { minScore: 8.0001, maxScore: 8.4000, percentile: 70 },
    { minScore: 8.4001, maxScore: 8.8000, percentile: 80 },
    { minScore: 8.8001, maxScore: 9.2000, percentile: 90 },
    { minScore: 9.2001, maxScore: 10, percentile: 100 },
  ],
  [MindBalanceCluster.HealthBehaviors]: [
    { minScore: 0, maxScore: 5.5000, percentile: 10 },
    { minScore: 5.5001, maxScore: 6.0000, percentile: 20 },
    { minScore: 6.0001, maxScore: 6.5000, percentile: 30 },
    { minScore: 6.5001, maxScore: 6.7500, percentile: 40 },
    { minScore: 6.7501, maxScore: 7.0000, percentile: 50 },
    { minScore: 7.0001, maxScore: 7.2500, percentile: 60 },
    { minScore: 7.2501, maxScore: 7.7500, percentile: 70 },
    { minScore: 7.7501, maxScore: 8.2000, percentile: 80 },
    { minScore: 8.2001, maxScore: 8.5000, percentile: 90 },
    { minScore: 8.5001, maxScore: 10, percentile: 100 },
  ],
  [MindBalanceCluster.TeamCulture]: [
    { minScore: 0, maxScore: 6.1700, percentile: 10 },
    { minScore: 6.1701, maxScore: 7.0000, percentile: 20 },
    { minScore: 7.0001, maxScore: 7.5000, percentile: 30 },
    { minScore: 7.5001, maxScore: 7.8300, percentile: 40 },
    { minScore: 7.8301, maxScore: 8.1700, percentile: 50 },
    { minScore: 8.1701, maxScore: 8.3300, percentile: 60 },
    { minScore: 8.3301, maxScore: 8.8300, percentile: 70 },
    { minScore: 8.8301, maxScore: 9.1700, percentile: 80 },
    { minScore: 9.1701, maxScore: 9.6700, percentile: 90 },
    { minScore: 9.6701, maxScore: 10, percentile: 100 },
  ],
};

const convertScoreToPercentile = (score: number): number => {
  const roundedScore = Math.round(score);
  return roundedScore * 10;
};

const determinePercentile = (clusterName: MindBalanceCluster, score: number): number => {
  const buckets = clusterPercentileBuckets[clusterName];
  if (buckets) {
    const bucket = buckets.find(
      ({ minScore, maxScore }) => score >= minScore && score <= maxScore + 0.000001,
    );
    if (bucket) {
      return bucket.percentile;
    }
  }

  return convertScoreToPercentile(score);
};

const percentileRangeLabels: Record<number, string> = {
  10: 'Growth Opportunity',
  20: 'Growth Opportunity',
  30: 'Emerging',
  40: 'Emerging',
  50: 'Foundational',
  60: 'Foundational',
  70: 'Developed',
  80: 'Developed',
  90: 'Advanced',
  100: 'Advanced',
};

const getUnderstandingCopy = (
  clusterLabel: string,
  percentile: number,
  language: Language,
): ReactNode | null => {
  if (language !== Language.English) {
    return null;
  }

  const rangeLabel = percentileRangeLabels[percentile];
  if (!rangeLabel) {
    return null;
  }

  const higherPercent = percentile === 100 ? 0 : 100 - percentile;
  const strongText = `Your ${clusterLabel} score was in the ${rangeLabel} range (${percentile}th percentile) when compared to other youth athletes.`;
  const detailText =
    higherPercent === 0
      ? `Almost no youth athletes are scoring higher than you in ${clusterLabel}.`
      : `${higherPercent}% of youth athletes at your level reported scores higher than yours in ${clusterLabel}.`;

  return (
    <>
      <strong>{strongText}</strong>{' '}{detailText}
    </>
  );
};

const ClusterSummaryPage = ({
  clusterName,
  clusterLabel,
  clusterDescription,
  clusterFunFact,
  surveyResponse,
  pageNum,
}: ClusterSummaryPageProps) => {
  const language = surveyResponse.language;
  const clusterResult = surveyResponse.clusterResults.find(cluster => cluster.name === clusterName);
  
  if (!clusterResult) return null;

  const score = parseFloat(clusterResult.percentile);
  const percentile = determinePercentile(clusterName, score);

  const classifyPercentile = (percentile: number, language: Language) => {
    if (language === Language.English) {
      if (percentile <= 20) {
        return 'Growth Opportunity';
      } else if (percentile <= 40) {
        return 'Emerging';
      } else if (percentile <= 60) {
        return 'Foundational';
      } else if (percentile <= 80) {
        return 'Developed';
      } else {
        return 'Advanced';
      }
    } else if (language === Language.Spanish) {
      if (percentile <= 20) {
        return 'Oportunidad de Crecimiento';
      } else if (percentile <= 40) {
        return 'Emergente';
      } else if (percentile <= 60) {
        return 'Fundacional';
      } else if (percentile <= 80) {
        return 'Desarrollado';
      } else {
        return 'Avanzado';
      }
    }
    return '';
  };

  const percentileRange = classifyPercentile(percentile, language);

  // Find the interpretation based on cluster name, language, and percentile range
  const interpretation = percentileInterpretationMindBalance.find(
    obj => 
      obj.name === clusterName && 
      obj.language === language && 
      percentile >= obj.minPercentile && 
      percentile <= obj.maxPercentile
  );

  const understanding = getUnderstandingCopy(clusterLabel, percentile, language);

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
          <ScoreHeader>{scoreLabelString[language]}: {score.toFixed(2)} {scoreOutOfString[language]}</ScoreHeader>
          <ScoreHeader>
            {understandingYourScoreHeaderString[language]}
          </ScoreHeader>
          <ScoreExplanation>
            {understanding ? (
              understanding
            ) : language === Language.Spanish ? (
              <>
                Tu puntuación de {clusterLabel} se encuentra en el percentil {percentile}. Esto significa que el {percentile}% de los atletas de tu nivel recibieron tu puntuación o menos, y el {100 - percentile}% reportaron puntuaciones más altas que la tuya.
              </>
            ) : (
              <>
                Your {clusterLabel} score is in the {percentile}th percentile. This means that {percentile}% of athletes at your level received your score or below, and {100 - percentile}% reported scores higher than yours.
              </>
            )}
          </ScoreExplanation>
          {interpretation && (
            <>
              <ScoreHeader>
                {whatYourScoreMeansHeaderString[language]}
              </ScoreHeader>
              <ScoreExplanation>
                {interpretation.meaning}
              </ScoreExplanation>
              {interpretation.developmentalOpportunity && (
                <>
                  <ScoreHeader>
                    {developmentalOpportunitiesHeaderString[language]}
                  </ScoreHeader>
                  <ScoreExplanation>
                    {interpretation.developmentalOpportunity}
                  </ScoreExplanation>
                </>
              )}
            </>
          )}
        </ClusterAnalysis>
        <ClusterRight>
          <PercentileCircle>
            <PercentileImage 
              src={require(`../images/percentiles/${language}/${percentile}.png`)} 
              alt={`${percentile}th percentile`}
            />
            <PercentileRangeText>{percentileRange} RANGE</PercentileRangeText>
          </PercentileCircle>
          <DidYouKnow language={language}>
            {clusterFunFact}
          </DidYouKnow>
        </ClusterRight>
      </ClusterRow>
      <PageFooter pageNum={pageNum} />
    </PageWrapper>
  )
};

const scoreLabelString: { [key in Language]: ReactNode } = {
  [Language.English]: 'YOUR SCORE',
  [Language.Spanish]: 'TU PUNTUACIÓN',
}

const scoreOutOfString: { [key in Language]: ReactNode } = {
  [Language.English]: 'out of 10',
  [Language.Spanish]: 'de 10',
}

const understandingYourScoreHeaderString: { [key in Language]: ReactNode } = {
  [Language.English]: 'UNDERSTANDING YOUR SCORE',
  [Language.Spanish]: 'COMPRENDIENDO TU PUNTUACIÓN',
}

const whatYourScoreMeansHeaderString: { [key in Language]: ReactNode } = {
  [Language.English]: 'WHAT YOUR SCORE MEANS',
  [Language.Spanish]: 'QUÉ SIGNIFICA TU PUNTUACIÓN',
}

const developmentalOpportunitiesHeaderString: { [key in Language]: ReactNode } = {
  [Language.English]: 'DEVELOPMENTAL OPPORTUNITIES',
  [Language.Spanish]: 'OPORTUNIDADES DE DESARROLLO',
};

const BASE = 8;

const ClusterDescription = styled.div`
  margin: ${BASE * 4}px 0px ${BASE * 2}px 0px;
  font-size: 18px;
`;

const ClusterRow = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: ${BASE * 8}px;
  align-items: flex-start;
  margin-top: ${BASE * 4}px;
`;

const ClusterAnalysis = styled.div`
  flex: 1;

  > p {
    font-size: 14px;
    line-height: 1.6;
  }
`;

const ScoreHeader = styled.h1`
  color: rgb(191, 37, 35);
  font-size: 18px;
  text-transform: uppercase;
  font-weight: bold;
  margin: ${BASE * 2}px 0 ${BASE}px 0;
`;

const ScoreExplanation = styled.p`
  font-size: 14px;
  line-height: 1.6;
  margin-top: ${BASE * 2}px;
`;

const ClusterRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${BASE * 4}px;
  flex-shrink: 0;
`;

const PercentileCircle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${BASE * 2}px;
`;

const PercentileImage = styled.img`
  width: 200px;
  height: 200px;
`;

const PercentileRangeText = styled.div`
  font-size: 14px;
  text-transform: uppercase;
  font-weight: bold;
  color: #000;
`;

const DidYouKnow = styled.div<{ language: Language }>`
  border: 2px solid rgb(191, 37, 35);
  border-radius: ${BASE}px;
  background-color: rgb(229, 229, 229);
  padding: ${BASE * 5}px ${BASE * 3}px ${BASE * 3}px ${BASE * 3}px;
  text-align: left;
  font-size: 14px;
  position: relative;
  width: 200px;
  min-height: 100px;

  &:before {
    content: ${({ language }) => language === Language.Spanish ? '"¿SABÍAS QUE?"' : '"DID YOU KNOW?"'};
    text-transform: uppercase;
    position: absolute;
    top: ${BASE * -2}px;
    left: ${BASE * 2}px;
    background-color: rgb(191, 37, 35);
    color: #FFFFFF;
    font-weight: bold;
    padding: ${BASE}px ${BASE * 2}px;
    font-size: 12px;
  }
`;

export default ClusterSummaryPage;
