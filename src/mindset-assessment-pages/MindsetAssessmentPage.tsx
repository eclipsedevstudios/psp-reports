import { ReactNode } from 'react';
import styled from 'styled-components';

import { PageWrapper } from '../components-shared/PageWrapper';
import { PageHeader } from '../components-shared/PageHeader';
import { PageHeaderTitle } from '../components-shared/PageHeaderTitle';
import { PageHeaderSubtitle } from '../components-shared/PageHeaderSubtitle';
import { PageHeaderHr } from '../components-shared/PageHeaderHr';
import ContactUs from '../components-shared/ContactUs';
import PageFooter from '../components-shared/PageFooter';
import { Language } from '../types';

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
        <TestingSample>
          {testingSampleStrings[language]}
        </TestingSample>
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
      knowledge and information needed to 1)
      increase knowledge and awareness; and 2)
      take your mental game to the next level. In
      the pages to follow, you'll learn about how
      you scored in each area. You'll also learn
      about what other athletes are doing to
      improve their mental game in these areas.
    </p>
    <p>
      As you review your results, we encourage
      you to look through them with an open
      mind. By understanding your strengths and
      growth edges, you can begin to prioritize
      your mental training. Just as athletes need
      to direct attention toward their physical
      training, it is important for them to direct
      attention toward their mental. This process
      will enhance your performance routines and
      create greater consistency in your athletic
      performance over time.
    </p>
  </div>,
  [Language.Spanish]: <div>
    <p>
      La información incluida en este informe
      está diseñada para brindarle
      conocimientos e información importantes
      necesarios para 1) aumentar el
      conocimiento y la concientización; y 2)
      lleva tu juego mental al siguiente nivel. En
      las páginas siguientes, aprenderá cómo
      obtuvo su puntuación en cada área.
      También aprenderá qué están haciendo
      otros atletas para mejorar su juego mental
      en estas áreas.
    </p>
    <p>
      Al revisar sus resultados, le animamos
      que mires a través de ellos con la vista
      abierta mente. Al comprender sus
      fortalezas y áreas de crecimiento, puede
      comenzar a priorizar tu entrenamiento
      mental. Tal como lo necesitan los atletas
      para dirigir la atención hacia su físico
      formación, es importante que dirijan
      atención hacia su mental. Este proceso
      mejorará sus rutinas de rendimiento y
      creará una mayor consistencia en su
      rendimiento atlético a lo largo del tiempo.
    </p>
  </div>,
}

const testingSampleStrings: { [key in Language]: ReactNode } = {
  [Language.English]: <>
    <h2>Our Testing Sample</h2>
    <p>
      Our sample includes over 1,500
      athletes at all levels of sport.
      from amateur to professional
      and Olympic competitors.
      Sports represented in our
      sample include: baseball;
      basketball; boxing; curling;
      cycling, football; golf;
      gymnastics; hockey; lacrosse;
      mixed martial arts; running;
      rowing; soccer; softball;
      swimming; triathlon; ultimate
      frisbee; volleyball; water polo;
      and weightlifting.
    </p>
  </>,
  [Language.Spanish]: <>
    <h2>NUESTRA MUESTRA DE PRUEBA</h2>
    <p>
      Nuestra muestra incluyó a más de
      1.500 atletas de todos los niveles del
      deporte, desde aficionados hasta
      profesionales y competidores
      olímpicos. Los deportes
      representados en nuestra muestra
      incluyen: béisbol, baloncesto,
      boxeo, curling, ciclismo, fútbol, golf,
      gimnasia, hockey, lacrosse, artes
      marciales mixtas, correr, remo,
      fútbol, softbol, natación, triatlón,
      ultimate frisbee, voleibol, waterpolo.
      y levantamiento de pesas.
    </p>
  </>,
}
const BASE = 8;

const MindsetDescription = styled('div')`
  display: flex;
  flex-direction: row;
  column-gap: ${BASE * 8}px;
  margin-top: ${BASE * 8}px;
  margin-bottom: ${BASE * 10}px;
  align-items: center;
`;

const TestingSample = styled('div')`
  border: 4px solid rgb(191, 37, 35);
  border-radius: ${BASE}px;
  background-color: rgb(229, 229, 229);
  padding: ${BASE * 2}px ${BASE * 4}px;

  > h2 {
    font-family: 'League Gothic';
    font-size: 28px;
    text-transform: uppercase;
    font-weight: normal;
  }
`;

export default MindsetAssessmentPage;