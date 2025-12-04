import { ReactNode } from 'react';
import styled from 'styled-components';

import { PageWrapper } from '../components-shared/PageWrapper';
import { PageHeader } from '../components-shared/PageHeader';
import { PageHeaderTitle } from '../components-shared/PageHeaderTitle';
import { PageHeaderSubtitle } from '../components-shared/PageHeaderSubtitle';
import PageFooter from '../components-shared/PageFooter';
import { MindBalanceCluster, Language } from '../types';
import { clusters } from '../constants/clusters_mindbalance';
import { determinePercentile } from './ClusterSummaryPage';

export interface MindBalanceClusterResult {
  name: MindBalanceCluster;
  percentile: string;
}

export interface MindBalanceSurveyResponse {
  clusterResults: MindBalanceClusterResult[];
  language: Language;
  athleteName: string;
  age: string;
  recordedDate: string;
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
          <b>{athleteCardLevelString[language]}</b>: {surveyResponse.age}
          <br /><b>{athleteCardDateString[language]}</b>: {surveyResponse.recordedDate.split('T')[0]}
        </AthleteCard>
      </PageHeader>
      <ClusterResults>
        {surveyResponse.clusterResults.map((cluster) => {
          const score = parseFloat(cluster.percentile);
          const calculatedPercentile = determinePercentile(cluster.name, score);
          
          return (
            <>
              <h1>
                {clusters.filter(c => c.name === cluster.name && c.language === language)[0].label}
              </h1>
              <ClusterResult>
                <tr>
                  <td>
                    {comparedWithPeersString[language]}
                  </td>
                  <td>
                    <PercentileVisualization percentile={calculatedPercentile.toString()} />
                  </td>
                  <PercentileNumber>{calculatedPercentile}th</PercentileNumber>
                </tr>
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
  // percentile is now already a calculated percentile value (10, 20, 30, etc.), not a score
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
  [Language.English]: 'Age',
  [Language.Spanish]: 'Edad',
}

const athleteCardDateString: { [key in Language]: ReactNode } = {
  [Language.English]: 'Date',
  [Language.Spanish]: 'Fecha',
}
const comparedWithPeersString: { [key in Language]: ReactNode } = {
  [Language.English]: 'Your score in relation to your peers:',
  [Language.Spanish]: 'Tu puntuación en relación con tus compañeros:',
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
      <li><b><u>Advanced</u> (90th and 100th percentile)</b>: You are excelling. Keep up the good work!</li>
    </ul>
    <p>
      No score reflects your physical abilities or implies that you are a "good" or a "bad" athlete. This report is simply designed to encourage the development of your mental skills throughout your athletic opportunities.
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
      <li><b>Avanzado (percentil 90 y 100)</b>: Estás sobresaliendo. ¡Sigue con el buen trabajo!</li>
    </ul>
    <p>
      Ninguna puntuación refleja tus habilidades físicas o implica que eres un atleta "bueno" o "malo". Este informe está diseñado simplemente para fomentar el desarrollo de tus habilidades mentales a lo largo de tus oportunidades atléticas.
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
