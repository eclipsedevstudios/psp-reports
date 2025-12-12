import { ReactNode } from 'react';
import styled from 'styled-components';

import { PageWrapper } from '../components-shared/PageWrapper';
import { PageHeader } from '../components-shared/PageHeader';
import { PageHeaderTitle } from '../components-shared/PageHeaderTitle';
import { PageHeaderSubtitle } from '../components-shared/PageHeaderSubtitle';
import { PageHeaderHr } from '../components-shared/PageHeaderHr';
import ContactUs from './ContactUs';
import PageFooter from '../components-shared/PageFooter';
import { Language } from '../types';
import mindsetBalanceAssessmentImage from '../images/mindset_balance_assessment.png';

const MindsetAssessmentPage = ({ language }: { language: Language }) => {
  return (
    <PageWrapper>
      <PageHeader>
        <div>
          {pageHeaderStrings[language]}
        </div>
        <PageHeaderHr>
          <hr />
        </PageHeaderHr>
      </PageHeader>
      <MindsetDescription>
        {mindsetDescriptionStrings[language]}
        <RightColumn>
          <AssessmentImage src={mindsetBalanceAssessmentImage} alt="Athletes in action" />
          <TestingSample>
            {testingSampleStrings[language]}
          </TestingSample>
        </RightColumn>
      </MindsetDescription>
      <ContactUs language={language} />
      <PageFooter pageNum={1} />
    </PageWrapper>
  );
}

const pageHeaderStrings: { [key in Language]: ReactNode } = {
  [Language.English]: <>
    <PageHeaderSubtitle>
      What is the
    </PageHeaderSubtitle>
    <PageHeaderTitle>
      Mindset Assessment?
    </PageHeaderTitle>
  </>,
  [Language.Spanish]: <>
    <PageHeaderSubtitle>
      ¿CUÁL ES EL
    </PageHeaderSubtitle>
    <PageHeaderTitle>
      EVALUACIÓN DE
    </PageHeaderTitle>
    <PageHeaderTitle>
      MENTALIDAD?
    </PageHeaderTitle>
  </>,
}

const mindsetDescriptionStrings: { [key in Language]: ReactNode } = {
  [Language.English]: <div>
    <p>
      The information included in this report is
      designed to provide you with important
      knowledge and information needed to
      increase your understanding and
      awareness, and take your mental game to
      the next level. In the pages to follow, you'll
      learn about how you scored in each area.
      You'll also learn what other athletes are
      doing to improve their mental game in
      these areas.
    </p>
    <p>
      As you review your results, we encourage
      you to look through them with an open
      mind. By understanding your strengths
      and growth edges, you can begin to
      prioritize your mental training.
    </p>
    <p>
      Just as athletes need to direct attention
      toward their physical training, it is also
      important for them to focus on their
      mental training. This process will enhance
      your performance routines and create
      greater consistency in your athletic
      performance over time.
    </p>
  </div>,
  [Language.Spanish]: <div>
    <p>
      La información incluida en este informe
      está diseñada para brindarle
      conocimientos e información importantes
      necesarios para aumentar su comprensión y
      conciencia, y llevar su juego mental al
      siguiente nivel. En las páginas siguientes,
      aprenderá cómo obtuvo su puntuación en cada área.
      También aprenderá qué están haciendo
      otros atletas para mejorar su juego mental en
      estas áreas.
    </p>
    <p>
      Al revisar sus resultados, le recomendamos
      que los examine con la mente abierta. Al comprender sus fortalezas
      y áreas de crecimiento, puede comenzar a
      priorizar su entrenamiento mental.
    </p>
    <p>
      Así como los atletas necesitan dirigir la atención
      hacia su entrenamiento físico, también es
      importante que se enfoquen en su
      entrenamiento mental. Este proceso mejorará
      sus rutinas de rendimiento y creará
      mayor consistencia en su rendimiento
      atlético con el tiempo.
    </p>
  </div>,
}

const testingSampleStrings: { [key in Language]: ReactNode } = {
  [Language.English]: <>
    <h2>OUR TESTING SAMPLE</h2>
    <p>
      Our sample includes over 1,500
      athletes at all levels of sports. From
      amateur to professional and Olympic
      competitors. Sports represented in
      our sample include: baseball;
      basketball; boxing; curling; cycling;
      football; golf; gymnastics; hockey;
      lacrosse; mixed martial arts;
      running; rowing; soccer; softball;
      swimming; triathlon; ultimate
      frisbee; volleyball; water polo; and
      weightlifting.
    </p>
    {/* <p>
      Since the initial testing sample, over 1,000 athletes have taken the Mindset Assessment. That number continues to grow each day, as the Mindset Assessment is a trusted resource for athletic programs and individual athletes.
    </p> */}
  </>,
  [Language.Spanish]: <>
    <h2>NUESTRA MUESTRA DE PRUEBA</h2>
    <p>
      Nuestra muestra incluye más de 1,500
      atletas de todos los niveles del deporte. Desde
      aficionados hasta competidores profesionales y olímpicos.
      Los deportes representados en nuestra
      muestra incluyen: béisbol;
      baloncesto; boxeo; curling; ciclismo;
      fútbol; golf; gimnasia; hockey;
      lacrosse; artes marciales mixtas;
      correr; remo; fútbol; softbol;
      natación; triatlón; ultimate
      frisbee; voleibol; waterpolo; y
      levantamiento de pesas.
    </p>
    {/* <p>
      Desde la muestra de prueba inicial, más de 1,000 atletas han tomado la Evaluación de Mentalidad. Ese número continúa creciendo cada día, ya que la Evaluación de Mentalidad es un recurso confiable para programas atléticos y atletas individuales.
    </p> */}
  </>,
}
const BASE = 8;

const MindsetDescription = styled('div')`
  display: flex;
  flex-direction: row;
  column-gap: ${BASE * 8}px;
  /* margin-top: ${BASE * 8}px; */
  margin-bottom: ${BASE * 6}px;
  align-items: center;
`;

const RightColumn = styled('div')`
  display: flex;
  flex-direction: column;
  gap: ${BASE * 3}px;
`;

const AssessmentImage = styled('img')`
  width: 100%;
  height: auto;
  border-radius: ${BASE}px;
`;

const TestingSample = styled('div')`
  border: 4px solid rgb(191, 37, 35);
  border-radius: ${BASE}px;
  background-color: rgb(229, 229, 229);
  padding: ${BASE * 0.5}px ${BASE * 4}px ${BASE * 1}px;

  > h2 {
    font-family: 'League Gothic';
    font-size: 28px;
    text-transform: uppercase;
    font-weight: normal;
    margin-bottom: ${BASE * 0.5}px;
    margin-top: 0;
  }

  > p {
    margin-top: ${BASE * 0.5}px;
    margin-bottom: ${BASE * 0.5}px;
  }
`;

export default MindsetAssessmentPage;