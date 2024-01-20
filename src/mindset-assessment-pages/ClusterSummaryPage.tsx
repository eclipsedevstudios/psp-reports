import { ReactNode } from 'react';
import styled from 'styled-components';

import { PageWrapper } from '../components-shared/PageWrapper';
import { PageHeader } from '../components-shared/PageHeader';
import { PageHeaderTitle } from '../components-shared/PageHeaderTitle';
import { PageHeaderHr } from '../components-shared/PageHeaderHr';
import PageFooter from '../components-shared/PageFooter';
import { SurveyResponse } from '../models/surveyResponse';
import { percentileInterpretation } from '../constants/percentile-interpretation';
import { Language } from '../types';

interface ClusterSummaryPageProps {
  clusterName: string;
  clusterLabel: string;
  clusterDescription: string;
  clusterFunFact: string;
  clusterRelevantModules: string;
  surveyResponse: SurveyResponse;
  pageNum: number;
}

const ClusterSummaryPage = ({
  clusterName,
  clusterLabel,
  clusterDescription,
  clusterFunFact,
  clusterRelevantModules,
  surveyResponse,
  pageNum,
}: ClusterSummaryPageProps) => {
  const language = surveyResponse.language;
  const clusterResult = surveyResponse.clusterResults.filter(cluster => cluster.name === clusterName)[0];
  const percentile = parseInt(clusterResult.percentile);
  const rawScore = clusterResult.rawScore;
  const interpretation = percentileInterpretation.filter(obj => obj.name === clusterName && percentile >= obj.minPercentile && percentile <= obj.maxPercentile)[0];

  const classifyPercentile = (percentile: number) => {
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
  }

  const comparePercentile = (percentile: number, clusterLabel: string) => {
    if (percentile === 100) {
      return `Very few athletes at your level received a score as high as yours in ${clusterLabel}.`
    }
    if (percentile === 0) {
      return `Most athletes at your level reported scores higher than yours in ${clusterLabel}.`
    }
    return `${100-percentile}% of athletes at your level reported scores higher than yours in ${clusterLabel}.`
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
          <h1>{scoreLabelString[language]}: {rawScore} {scoreOutOfString[language]}</h1>
          <h1>
            {understandingYourScoreString[language]}
          </h1>
          <p>
            Your {clusterLabel} score falls within the {classifyPercentile(percentile)} range ({percentile}th percentile) compared to other athletes at your competition level. {comparePercentile(percentile, clusterLabel)}
          </p>
          <p>
            {interpretation.meaning}
          </p>
          <h1>
            {developmentalOpportunitiesString[language]}
          </h1>
          <p>
            {interpretation.next_steps}
          </p>
          <p>
            If you want to help develop your {clusterLabel}, check out the {clusterRelevantModules} of our Premier Mindset Program at <a href="https://mindsetprogram.com/">mindsetprogram.com</a>.
          </p>
        </ClusterAnalysis>
        <ClusterRight>
          <ClusterPercentile>
            <img src={require(`../images/percentiles/${percentile}.png`)} />
            <br />
            {classifyPercentile(percentile)}
          </ClusterPercentile>
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
  [Language.English]: 'Your Score',
  [Language.Spanish]: 'SU PUNTUACIÓN',
}

const scoreOutOfString: { [key in Language]: ReactNode } = {
  [Language.English]: 'out of 10',
  [Language.Spanish]: 'de 10',
}

const understandingYourScoreString: { [key in Language]: ReactNode } = {
  [Language.English]: 'Understanding Your Score',
  [Language.Spanish]: 'ENTENDIENDO SU PUNTUACIÓN',
}

const developmentalOpportunitiesString: { [key in Language]: ReactNode } = {
  [Language.English]: 'Developmental Opportunities',
  [Language.Spanish]: 'OPORTUNIDADES DE DESARROLLO',
}

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

  > p {
    font-size: 15px;
  }
`;

const ClusterRight = styled.div`
  text-align: center;
`;

const ClusterPercentile = styled.div`
  font-family: 'League Gothic';
  font-size: 24px;
  margin-bottom: ${BASE * 10}px;
  text-transform: uppercase;

  > img {
    width: 200px;
  }
`;

const DidYouKnow = styled.div<{ language: Language }>`
  border: 2px solid rgb(191, 37, 35);
  border-radius: ${BASE}px;
  background-color: rgb(229, 229, 229);
  padding: ${BASE * 4}px ${BASE * 2}px;
  text-align: left;
  font-size: 14px;
  position: relative;

  &:before {
    content: ${({ language }) => language === Language.Spanish ? '"¿SABÍAS?"' : '"Did You Know?"'};
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