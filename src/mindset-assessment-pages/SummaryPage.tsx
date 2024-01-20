import { ReactNode } from 'react';
import styled from 'styled-components';

import { PageWrapper } from '../components-shared/PageWrapper';
import { PageHeader } from '../components-shared/PageHeader';
import { PageHeaderTitle } from '../components-shared/PageHeaderTitle';
import { PageHeaderSubtitle } from '../components-shared/PageHeaderSubtitle';
import PageFooter from '../components-shared/PageFooter';
import { SurveyResponse, AthleteLevel } from '../models/surveyResponse';
import { Language } from '../types';
import { clusters } from '../constants/clusters';

const SummaryPage = ({ surveyResponse }: { surveyResponse: SurveyResponse}) => {
  const language = surveyResponse.language;

  return (
    <PageWrapper>
      <PageHeader>
        {headerStrings[language]}
        <AthleteCard>
          <h1>{surveyResponse.athleteName}</h1>
          <hr />
          <b>{athleteCardLevelString[language]}</b>: {surveyResponse.level}
          <br /><b>{athleteCardDateString[language]}</b>: {surveyResponse.recordedDate.split('T')[0]}
        </AthleteCard>
      </PageHeader>
      <ClusterResults>
        {surveyResponse.clusterResults.map((cluster, index) => (
          <>
            <h1>
              {clusters.filter(c => c.name === cluster.name && c.language === language)[0].label}
            </h1>
            <ClusterResult key={`cluster-results-${index}`}>
              <tr>
                <td>
                  {comparedWithPeersString[language]}
                </td>
                <td>
                  <PercentileVisualization percentile={cluster.percentile} />
                </td>
                <PercentileNumber>{cluster.percentile}th</PercentileNumber>
              </tr>
              {surveyResponse.level === AthleteLevel.HighSchool && (
                <tr>
                  <td>
                    {comparedWithCollegeAthletesString[language]}
                  </td>
                  <td>
                    <PercentileVisualization percentile={cluster.percentileCollege} />
                  </td>
                  <PercentileNumber>{cluster.percentileCollege}th</PercentileNumber>
                </tr>
              )}
              {(surveyResponse.level === AthleteLevel.Collegiate || surveyResponse.level === AthleteLevel.SemiProfessional || surveyResponse.level === AthleteLevel.AdultRecreational) && (
                <tr>
                  <td>
                    {comparedWithProAthletesString[language]}
                  </td>
                  <td>
                    <PercentileVisualization percentile={cluster.percentilePro} />
                  </td>
                  <PercentileNumber>{cluster.percentilePro}th</PercentileNumber>
                </tr>
              )}
            </ClusterResult>
          </>
        ))}
      </ClusterResults>
      <HowToReadCard>
        {howToReadStrings[language]}
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

const headerStrings: { [key in Language]: ReactNode } = {
  [Language.English]: <div>
    <PageHeaderSubtitle>
      Your Summary
    </PageHeaderSubtitle>
    <PageHeaderTitle>
        Report
    </PageHeaderTitle>
  </div>,
  [Language.Spanish]: <div>
    <PageHeaderSubtitle>
      Su Resumen
    </PageHeaderSubtitle>
    <PageHeaderTitle>
        Informe
    </PageHeaderTitle>
  </div>,
}

const athleteCardLevelString: { [key in Language]: ReactNode } = {
  [Language.English]: 'Level',
  [Language.Spanish]: 'Nivel',
}

const athleteCardDateString: { [key in Language]: ReactNode } = {
  [Language.English]: 'Date',
  [Language.Spanish]: 'Fecha',
}

const comparedWithPeersString: { [key in Language]: ReactNode } = {
  [Language.English]: 'Compared with peers',
  [Language.Spanish]: 'Comparado con sus compañeros',
}

const comparedWithCollegeAthletesString: { [key in Language]: ReactNode } = {
  [Language.English]: 'Compared with college athletes',
  [Language.Spanish]: 'En comparación con los atletas universitarios',
}

const comparedWithProAthletesString: { [key in Language]: ReactNode } = {
  [Language.English]: 'Compared with pro athletes',
  [Language.Spanish]: 'En comparación con los atletas profesionales',
}

const howToReadStrings: { [key in Language]: ReactNode } = {
  [Language.English]: <>
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
  </>,
  [Language.Spanish]: <>
    <h1>CÓMO LEER ESTE INFORME</h1>
    <p>
    Sus puntuaciones representan sus percentiles en cada una de las
    categorías anteriores. Esto significa que si obtuvo una puntuación en el
    percentil 10. El 10% de los atletas de su nivel recibieron su puntaje o menos y
    el 90% reportaron puntajes superiores a tuyo.
    </p>
    <p>
      Ninguna puntuación es indicativa de tus capacidades físicas ni implica que
      eres un "bueno" o un "mal" atleta. Este informe está diseñado simplemente
      para fomentar la desarrollo de sus habilidades mentales a lo largo de sus
      esfuerzos atléticos.
    </p>
  </>,
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
  margin-top: ${BASE * 4}px;
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
      font-size: 12px;

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
  width: 600px;
  background-color: rgb(227, 227, 227);
  float: right;
  font-size: 14px;
  border-radius: ${BASE}px;

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