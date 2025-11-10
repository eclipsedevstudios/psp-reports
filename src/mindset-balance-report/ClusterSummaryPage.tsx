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

// Helper function to convert score (1-10) to percentile
const convertScoreToPercentile = (score: string): number => {
  const numScore = parseFloat(score);
  const roundedScore = Math.round(numScore);
  return roundedScore * 10;
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
  const percentile = convertScoreToPercentile(clusterResult.percentile);

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
            {language === Language.Spanish ?
              <>
                Tu puntuación de {clusterLabel} se encuentra en el percentil {percentile}. Esto significa que el {percentile}% de los atletas de tu nivel recibieron tu puntuación o menos, y el {100 - percentile}% reportaron puntuaciones más altas que la tuya.
              </>
              :
              <>
                Your {clusterLabel} score is in the {percentile}th percentile. This means that {percentile}% of athletes at your level received your score or below, and {100 - percentile}% reported scores higher than yours.
              </>
            }
          </ScoreExplanation>
          {interpretation && (
            <>
              <ScoreHeader>
                {whatYourScoreMeansHeaderString[language]}
              </ScoreHeader>
              <ScoreExplanation>
                {interpretation.meaning}
              </ScoreExplanation>
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
