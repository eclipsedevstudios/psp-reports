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

import wrapUpImage from '../images/wrap-up.png';

const WrapUpPage = ({ language }: { language: Language }) => {
  return (
    <PageWrapper>
      <PageHeader>
        <div>
          <PageHeaderSubtitle>
            Wrap up and
          </PageHeaderSubtitle>
          <PageHeaderTitle>
            Next Steps
          </PageHeaderTitle>
        </div>
        <PageHeaderHr>
          <hr />
        </PageHeaderHr>
      </PageHeader>
      <WrapUpRow>
        <AthleteImage>
          <img src={wrapUpImage} />
        </AthleteImage>
        {wrapUpStrings[language]}
      </WrapUpRow>
      <ContactUs language={language} />
      <PageFooter pageNum={9} />
    </PageWrapper>
  );
}

const wrapUpStrings: { [key in Language]: ReactNode } = {
  [Language.English]: <div>
    <p>
      Your journey to peak performance doesn’t stop here. In fact, it’s just the beginning. If you’re thrilled with your results, great! Continue to capitalize on your strengths and implement the training tips for each cluster into your daily routine. Want to improve your results? <b>No athlete (or person) is perfect and the greatest athletes of all time didn’t become elite overnight.</b> Begin to implement new habits that are showcased in each cluster. Set small, attainable goals; elite-level habits come to fruition by focusing on the little things. Treat your lowest scores as opportunities to grow. Success is far from linear and acknowledging this will help you respond in a healthy way when things don’t go your way.
    </p>
    <p>
      In addition, if you’re looking to improve your scores, reach out to one of our sport psychology professionals here (<a href="https://premiersportpsychology.com/requestappointment/">premiersportpsychology.com/requestappointment</a>) and check out our Premier Mindset Program (<a href="https://mindsetprogram.com/">mindsetprogram.com</a>) for hands-on activities and guidance for improving in these five areas!
    </p>
    <p>
      The Mindset Assessment is designed to help athletes live purposeful lives and is grounded in the conviction that sport and life are intertwined. Practicing healthy life habits translates to meaningful experiences in sport. Being intentional about your mental game during competition strengthens your life experiences. <b>Sport is a microcosm of life and the skills learned through Mindset will cultivate success long after the season is over.</b>
    </p>
    <p>
      <b>Some of the skills you’ve learned can be implemented quickly, leading to noticeable results in a short period of time.</b> Others may take longer and require more attention. The best part? Your scores will not stay the same. Premier Sport Psychology encourages athletes to take the Mindset Assessment every three months to stay on top of their mental game.
    </p>
    <p>
      <b>The mental side of sport is what separates good from great.</b> Whether you’re a professional athlete, a student-athlete vying for a spot on the roster, or an adult trying to rekindle your love for a sport, the benefits of sport psychology are for you.
    </p>
  </div>,
  [Language.Spanish]: <div>
    <p>
      Su viaje hacia el máximo rendimiento no termina aquí. De hecho, es sólo el comienzo. Si está
      encantado con los resultados, ¡genial! Continúe aprovechando sus fortalezas e implemente
      los consejos de entrenamiento para cada grupo en su rutina diaria. ¿Quieres mejorar tus
      resultados? <b>Ningún atleta (o persona) es perfecto y los mejores atletas de todos los
      tiempos no se convirtieron en élite de la noche a la mañana.</b> Comience a implementar
      nuevos hábitos que se muestren en cada área de la evaluación. Establezca metas
      pequeñas y alcanzables; Los hábitos de élite se hacen realidad al centrarse en las
      pequeñas cosas. Trate sus puntajes más bajos como oportunidades para crecer. El éxito
      está lejos de ser lineal y reconocerlo le ayudará a responder de forma saludable cuando las
      cosas no salgan como quiere.
    </p>
    <p>
      Además, si está buscando mejorar sus puntajes, comuníquese con uno de nuestros
      profesionales de psicología deportiva aquí (<a href="https://premiersportpsychology.com/requestappointment/">premiersportpsychology.com/requestappointment</a>) y consulte nuestro Programa Premier Mindset (<a href="https://mindsetprogram.com/">mindsetprogram.com</a>) para actividades prácticas y orientación para mejorar en estas cinco áreas.
    </p>
    <p>
      La Evaluación de Mentalidad está diseñada para ayudar a los atletas a vivir una vida con
      propósito y se basa en la convicción de que el deporte y la vida están entrelazados.
      Practicar hábitos de vida saludables se traduce en experiencias significativas en el deporte.
      Ser intencional en tu juego mental durante la competencia fortalece tus experiencias de
      vida. <b>El deporte es un microcosmos de la vida y las habilidades que se aprenden a través de
      la comprensión de su forma de pensar cultivarán el éxito mucho después de que termine la
      temporada.</b>
    </p>
    <p>
      <b>Parte de la información que ha aprendido a través de estos resultados se puede
      implementar rápidamente, lo que generará resultados notables en un corto período de
      tiempo.</b> Otra información puede tardar más y requerir más atención. ¿La mejor parte? Tus
      puntuaciones no serán las mismas. Premier Sport Psychology anima a los atletas a realizar
      la Evaluación de mentalidad cada tres meses para mantenerse al tanto de su juego mental.
    </p>
    <p>
      El lado mental del deporte es lo que separa lo bueno de lo excelente. Si eres un atleta
      profesional, un estudiante-atleta que compite por un lugar en la lista o un adulto que
      intenta reavivar su amor por un deporte, los beneficios de la psicología del deporte son para
      usted.
    </p>
  </div>
}

const BASE = 8;

const WrapUpRow = styled.div`
  display: flex;
  column-gap: ${BASE * 2}px;
  margin-top: ${BASE}px;
  margin-bottom: ${BASE * 2}px;
  font-size: 13px;
`;

const AthleteImage = styled.div`
flex-basis: 200px;
flex-grow: 0;
flex-shrink: 0;

  > img {
    width: 100%;
  }
`;

export default WrapUpPage;