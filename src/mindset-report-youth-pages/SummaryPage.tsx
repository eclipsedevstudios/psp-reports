import { ReactNode } from 'react';
import styled from 'styled-components';

import { PageWrapper } from '../components-shared/PageWrapper';
import { PageHeader } from '../components-shared/PageHeader';
import { PageHeaderTitle } from '../components-shared/PageHeaderTitle';
import { PageHeaderSubtitle } from '../components-shared/PageHeaderSubtitle';
import PageFooter from '../components-shared/PageFooter';
import { YouthSurveyResponse } from '../models/surveyResponse';
import { Language } from '../types';
import { clusters } from '../constants/clusters_youth';

const SummaryPage = ({ surveyResponse }: { surveyResponse: YouthSurveyResponse}) => {
  const language = surveyResponse.language;
  
  return (
    <PageWrapper>
      <PageHeader>
        {headerStrings[language]}
        <AthleteCard>
          <h1>{surveyResponse.athleteName}</h1>
          <hr />
          <b>{athleteCardAgeString[language]}</b>: {surveyResponse.age}
          <br /><b>{athleteCardDateString[language]}</b>: {surveyResponse.recordedDate.split('T')[0]}
        </AthleteCard>
      </PageHeader>
      <ClusterResults>
        {surveyResponse.clusterResults.map((cluster) => (
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
                  <PercentileVisualization percentile={cluster.percentile} />
                </td>
                <PercentileNumber>{cluster.percentile}th</PercentileNumber>
              </tr>
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

const athleteCardAgeString: { [key in Language]: ReactNode } = {
  [Language.English]: 'Age',
  [Language.Spanish]: '',
}

const athleteCardDateString: { [key in Language]: ReactNode } = {
  [Language.English]: 'Date',
  [Language.Spanish]: 'Fecha',
}

const comparedWithPeersString: { [key in Language]: ReactNode } = {
  [Language.English]: 'Your score compared with your peers',
  [Language.Spanish]: '',
}

const howToReadStrings: { [key in Language]: ReactNode } = {
  [Language.English]: <>
    <h1>How to Read this Report</h1>
    <p>
      Your scores represent your percentiles in each of the categories above.
      This means that if you scored in the 10th percentile. 10% of the athletes at your
      level received your score or below and 90% reported scores higher than yours.
      Below are the categories of scores you will see on this report.
    </p>
    <ul>
      <li><b>Growth Opportunity (10th and 20th percentile)</b>: This is an area where you have plenty of room to
improve your behaviors, thoughts, and feelings.</li>
      <li><b>Emerging (30th and 40th percentile)</b>: Your behaviors, thoughts, and feelings are starting to emerge,
but you still have plenty of room to grow.</li>
      <li><b>Foundational (50th and 60th percentile)</b>: Your behaviors, thoughts, and feelings are providing you with
a solid foundation, and you can use that as a base to continue to grow.</li>
      <li><b>Developed (70th and 80th percentile)</b>: Your behaviors, thoughts, and feelings are developed. However,
there is still room to grow.</li>
      <li><b>Advanced (90th and 100th percentile)</b>: You are excelling. However, remember not to get complacent
and to continue to always work on your mental wellness and performance.</li>
    </ul>
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
    <ul>
      <li><b>Oportunidad de crecimiento (percentil 10 y 20)</b>: esta es un área en la que tiene mucho espacio para mejorar
sus comportamientos, pensamientos y sentimientos.</li>
      <li><b>Emergente (percentil 30 y 40)</b>: sus comportamientos, pensamientos y sentimientos determinada están
comenzando a emerger, pero todavía tiene mucho espacio para crecer.</li>
      <li><b>Fundacional (percentil 50 y 60)</b>: tus comportamientos, pensamientos y sentimientos te brindan una base
sólida y puedes usarla como base para seguir creciendo.</li>
      <li><b>Desarrollado (percentil 70 y 80)</b>: se desarrollan sus comportamientos, pensamientos y sentimientos. Sin
embargo, todavía hay margen para crecer.</li>
      <li><b>Avanzado (percentil 90 y 100)</b>: estás sobresaliendo. Sin embargo, recuerda no volverte complaciente y
seguir trabajando siempre en tu bienestar y rendimiento mental.</li>
    </ul>
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
  margin-top: ${BASE * 2}px;
  > h1 {
    font-size: 18px;
    margin: 0px;
  }
`;

const ClusterResult = styled.table`
  border-spacing: ${BASE * 2}px;
  margin-left: ${BASE * 4}px;
  margin-bottom: ${BASE}px;

  > tr {
    > td {
      font-size: 14px;

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