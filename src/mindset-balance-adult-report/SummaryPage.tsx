import { ReactNode } from 'react';
import styled from 'styled-components';

import { PageWrapper } from '../components-shared/PageWrapper';
import { PageHeader } from '../components-shared/PageHeader';
import { PageHeaderTitle } from '../components-shared/PageHeaderTitle';
import { PageHeaderSubtitle } from '../components-shared/PageHeaderSubtitle';
import PageFooter from '../components-shared/PageFooter';
import { MindBalanceAdultCluster, Language } from '../types';
import { clusters } from '../constants/clusters_mindbalance_adult';
import { AthleteLevel } from '../models/surveyResponse';

export interface MindBalanceClusterResult {
  name: MindBalanceAdultCluster;
  percentile: string;
  score: string;
  comparedWithPeers?: string;
  comparedWithCollegeAthletes?: string;
  comparedWithProAthletes?: string;
}

export interface MindBalanceSurveyResponse {
  clusterResults: MindBalanceClusterResult[];
  language: Language;
  athleteName: string;
  age: string;
  recordedDate: string;
  level: AthleteLevel;
}

const SummaryPage = ({ surveyResponse }: { surveyResponse: MindBalanceSurveyResponse }) => {
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
        {surveyResponse.clusterResults.map((cluster) => {
          // Convert percentage strings (e.g., "80%") to numbers (e.g., 80)
          const peersPercentile = cluster.comparedWithPeers ? parseInt(cluster.comparedWithPeers.replace('%', '')) : null;
          const collegePercentile = cluster.comparedWithCollegeAthletes ? parseInt(cluster.comparedWithCollegeAthletes.replace('%', '')) : null;
          const proPercentile = cluster.comparedWithProAthletes ? parseInt(cluster.comparedWithProAthletes.replace('%', '')) : null;
          
          return (
            <>
              <h1>
                {clusters.filter(c => c.name === cluster.name && c.language === language)[0].label}
              </h1>
              <ClusterResult>
                {peersPercentile !== null && (
                  <tr>
                    <td>
                      {comparedWithPeersString[language]}
                    </td>
                    <td>
                      <PercentileVisualization percentile={peersPercentile.toString()} />
                    </td>
                    <PercentileNumber>{peersPercentile}th</PercentileNumber>
                  </tr>
                )}
                {collegePercentile !== null && (
                  <tr>
                    <td>
                      {comparedWithCollegeAthletesString[language]}
                    </td>
                    <td>
                      <PercentileVisualization percentile={collegePercentile.toString()} />
                    </td>
                    <PercentileNumber>{collegePercentile}th</PercentileNumber>
                  </tr>
                )}
                {proPercentile !== null && (
                  <tr>
                    <td>
                      {comparedWithProAthletesString[language]}
                    </td>
                    <td>
                      <PercentileVisualization percentile={proPercentile.toString()} />
                    </td>
                    <PercentileNumber>{proPercentile}th</PercentileNumber>
                  </tr>
                )}
              </ClusterResult>
            </>
          );
        })}
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
  // percentile is a number value (10, 20, 30, etc., or 80, 90, etc.)
  const percentileValue = parseInt(percentile);
  
  return (
    <img src={require(`../images/percentile_bars/${percentileValue}.png`)} alt={`${percentileValue}th percentile`} />
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
  [Language.Spanish]: 'Comparado con compañeros',
}

const comparedWithCollegeAthletesString: { [key in Language]: ReactNode } = {
  [Language.English]: 'Compared with college athletes',
  [Language.Spanish]: 'Comparado con atletas universitarios',
}

const comparedWithProAthletesString: { [key in Language]: ReactNode } = {
  [Language.English]: 'Compared with professional athletes',
  [Language.Spanish]: 'Comparado con atletas profesionales',
}

const howToReadStrings: { [key in Language]: ReactNode } = {
  [Language.English]: <>
    <h1>HOW TO READ THIS REPORT</h1>
    <p>
      Your scores represent your percentiles in each of the categories above. This means that if you scored in the 10th percentile, 10% of the athletes at your level received your score or below and 90% reported scores higher than yours. Below are the categories of scores you will see on this report.
    </p>
    <ul>
      <li><b><u>Growth Opportunity</u> (10th and 20th percentile)</b>: This is an area where you have plenty of room to improve your behaviors, thoughts, and feelings.</li>
      <li><b><u>Emerging</u> (30th and 40th percentile)</b>: Your behaviors, thoughts, and feelings are starting to show, but you still have plenty of room to grow.</li>
      <li><b><u>Foundational</u> (50th and 60th percentile)</b>: Your behaviors, thoughts, and feelings are providing you with a solid foundation, and you can use that as a base to continue to grow.</li>
      <li><b><u>Developed</u> (70th and 80th percentile)</b>: Your behaviors, thoughts, and feelings are developed; however, there is still room to grow.</li>
      <li><b><u>Advanced</u> (90th and 100th percentile)</b>: You are excelling. However, remember not to get comfortable and to continue to always work on your mental wellness and performance.</li>
    </ul>
    <p>
      No score is indicative of your physical abilities or implies that you are a "good" or a "bad" athlete. This report is simply designed to encourage the development of your mental skills throughout your athletic opportunities.
    </p>
  </>,
  [Language.Spanish]: <>
    <h1>CÓMO LEER ESTE INFORME</h1>
    <p>
      Tus puntuaciones representan tus percentiles en cada una de las categorías anteriores. Esto significa que si obtuviste una puntuación en el percentil 10, el 10% de los atletas de tu nivel recibieron tu puntuación o menos y el 90% reportaron puntuaciones más altas que la tuya. A continuación se encuentran las categorías de puntuaciones que verás en este informe.
    </p>
    <ul>
      <li><b>Oportunidad de Crecimiento (percentil 10 y 20)</b>: Esta es un área donde tienes mucho espacio para mejorar tus comportamientos, pensamientos y sentimientos.</li>
      <li><b>Emergente (percentil 30 y 40)</b>: Tus comportamientos, pensamientos y sentimientos están comenzando a mostrarse, pero aún tienes mucho espacio para crecer.</li>
      <li><b>Fundacional (percentil 50 y 60)</b>: Tus comportamientos, pensamientos y sentimientos te están proporcionando una base sólida, y puedes usarla como base para continuar creciendo.</li>
      <li><b>Desarrollado (percentil 70 y 80)</b>: Tus comportamientos, pensamientos y sentimientos están desarrollados; sin embargo, todavía hay espacio para crecer.</li>
      <li><b>Avanzado (percentil 90 y 100)</b>: Estás sobresaliendo. Sin embargo, recuerda no sentirte cómodo y continuar siempre trabajando en tu bienestar mental y rendimiento.</li>
    </ul>
    <p>
      Ninguna puntuación es indicativa de tus habilidades físicas o implica que eres un atleta "bueno" o "malo". Este informe está diseñado simplemente para fomentar el desarrollo de tus habilidades mentales a lo largo de tus oportunidades atléticas.
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
  margin-top: ${BASE * 2}px;
  > h1 {
    font-size: 18px;
    margin: 0px;
  }
`;

const ClusterResult = styled.table`
  border-spacing: ${BASE * 2}px 0px;
  margin-left: ${BASE * 4}px;
  margin-bottom: ${BASE}px;

  > tr {
    > td {
      font-size: 12px;

      > img {
        width: 360px;
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
  background-color: rgb(227, 227, 227);
  font-size: 13px;
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
