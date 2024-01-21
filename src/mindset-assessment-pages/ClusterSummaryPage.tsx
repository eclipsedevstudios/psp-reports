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
  const interpretation = percentileInterpretation.filter(obj => obj.name === clusterName && obj.language === language && percentile >= obj.minPercentile && percentile <= obj.maxPercentile)[0];

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
        return 'Crecimiento';
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
    return null;
  }

  const comparePercentile = (percentile: number, clusterLabel: string, language: Language) => {
    if (language === Language.English) {
      if (percentile === 100) {
        return `Very few athletes at your level received a score as high as yours in ${clusterLabel}.`
      }
      if (percentile === 0) {
        return `Most athletes at your level reported scores higher than yours in ${clusterLabel}.`
      }
      return `${100-percentile}% of athletes at your level reported scores higher than yours in ${clusterLabel}.`
    } else if (language === Language.Spanish) {
      if (percentile === 100) {
        return `Casi todos los atletas de su nivel recibieron su puntuación o menos en ${clusterLabel}.`;
      }
      if (percentile === 0) {
        return `La mayoría de los atletas de su nivel recibieron puntuaciones más altas que las suyas en ${clusterLabel}.`;
      }
      return `El ${100-percentile}% de los atletas de tu nivel informaron puntuaciones superiores a las tuyas en ${clusterLabel}.`;
    }
    return null;
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
            {understandingYourScoreHeaderString[language]}
          </h1>
          <p>
            {language === Language.Spanish ?
              <>
                Su puntaje de {clusterLabel} se encuentra dentro del rango de {classifyPercentile(percentile, language)} (percentil {percentile}) en comparación con otros atletas. {comparePercentile(percentile, clusterLabel, language)}
              </>
              :
              <>
                Your {clusterLabel} score falls within the {classifyPercentile(percentile, language)} range ({percentile}th percentile) compared to other athletes at your competition level. {comparePercentile(percentile, clusterLabel, language)}
              </>
            }
          </p>
          <p>
            {interpretation.meaning}
          </p>
          <h1>
            {developmentalOpportunitiesHeaderString[language]}
          </h1>
          <p>
            {interpretation.next_steps}
          </p>
          <p>
            {language === Language.Spanish ?
              <>
                Si desea ayuda a desarrollar su {clusterLabel}, consulte {clusterRelevantModules} de nuestro programa Premier Mindset, que se pueden encontrar a <a href="https://mindsetprogram.com/">mindsetprogram.com</a>.
              </>
              :
              <>
                If you want to help develop your {clusterLabel}, check out the {clusterRelevantModules} of our Premier Mindset Program at <a href="https://mindsetprogram.com/">mindsetprogram.com</a>.
              </>
            }
          </p>
        </ClusterAnalysis>
        <ClusterRight>
          <ClusterPercentile>
            <img src={require(`../images/percentiles/${language}/${percentile}.png`)} />
            <br />
            {classifyPercentile(percentile, language)}
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

const understandingYourScoreHeaderString: { [key in Language]: ReactNode } = {
  [Language.English]: 'Understanding Your Score',
  [Language.Spanish]: 'ENTENDIENDO SU PUNTUACIÓN',
}

const developmentalOpportunitiesHeaderString: { [key in Language]: ReactNode } = {
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