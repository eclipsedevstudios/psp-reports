import { ReactNode } from 'react';
import styled from 'styled-components';

import { PageWrapper } from '../components-shared/PageWrapper';
import { PageHeader } from '../components-shared/PageHeader';
import { PageHeaderTitle } from '../components-shared/PageHeaderTitle';
import { PageHeaderSubtitle } from '../components-shared/PageHeaderSubtitle';
import { PageHeaderHr } from '../components-shared/PageHeaderHr';
import PageFooter from '../components-shared/PageFooter';
import ContactUs from './ContactUs';
import { Language } from '../types';
import mindBalanceWrapup1Image from '../images/mind_balance_wrapup_1.png';
import mindBalanceWrapup2Image from '../images/mind_balance_wrapup_2.png';

const BASE = 8;

const BulletList = styled.ul`
  margin: ${BASE * 2}px 0;
  padding-left: ${BASE * 3}px;
  
  > li {
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: ${BASE}px;
  }
`;

const WrapUpPage = ({ language, pageNum }: { language: Language; pageNum: number }) => {
  if (pageNum === 1) {
    return (
      <PageWrapper>
        <PageHeader>
          <div>
            {page1HeaderStrings[language]}
          </div>
          <PageHeaderHr>
            <hr />
          </PageHeaderHr>
        </PageHeader>
        <WrapUpContent>
          <LeftColumn>
            <SectionHeading>{continuousImprovementHeading[language]}</SectionHeading>
            {continuousImprovementContent[language]}
          </LeftColumn>
          <RightColumn>
            <WrapUpImage src={mindBalanceWrapup1Image} alt="Team huddle" />
          </RightColumn>
        </WrapUpContent>
        <ContactUs language={language} />
        <PageFooter pageNum={4} />
      </PageWrapper>
    );
  } else {
    return (
      <PageWrapper>
        <PageHeader>
          <div>
            {page2HeaderStrings[language]}
          </div>
          <PageHeaderHr>
            <hr />
          </PageHeaderHr>
        </PageHeader>
        <WrapUpContent>
          <LeftColumn>
            <SectionHeading>{takeNextStepHeading[language]}</SectionHeading>
            {takeNextStepContent[language]}
            <SectionHeading>{exploreProgramsHeading[language]}</SectionHeading>
            {exploreProgramsContent[language]}
            <CallToAction>{callToActionText[language]}</CallToAction>
          </LeftColumn>
          <RightColumn>
            <LogoImage src={mindBalanceWrapup2Image} alt="MindBalanceSPORT logo" />
          </RightColumn>
        </WrapUpContent>
        <ContactUs language={language} />
        <PageFooter pageNum={5} />
      </PageWrapper>
    );
  }
};

const page1HeaderStrings: { [key in Language]: ReactNode } = {
  [Language.English]: <>
    <PageHeaderSubtitle>
      What's Next?
    </PageHeaderSubtitle>
    <PageHeaderTitle>
      Developmental Opportunities
    </PageHeaderTitle>
  </>,
  [Language.Spanish]: <>
    <PageHeaderSubtitle>
      ¿Qué Sigue?
    </PageHeaderSubtitle>
    <PageHeaderTitle>
      Oportunidades de Desarrollo
    </PageHeaderTitle>
  </>,
};

const page2HeaderStrings: { [key in Language]: ReactNode } = {
  [Language.English]: <>
    <PageHeaderTitle>
      Your Mind Balance Sport Journey
    </PageHeaderTitle>
  </>,
  [Language.Spanish]: <>
    <PageHeaderTitle>
      Tu Viaje con Mind Balance Sport
    </PageHeaderTitle>
  </>,
};

const continuousImprovementHeading: { [key in Language]: ReactNode } = {
  [Language.English]: 'CONTINUOUS IMPROVEMENT',
  [Language.Spanish]: 'MEJORA CONTINUA',
};

const continuousImprovementContent: { [key in Language]: ReactNode } = {
  [Language.English]: <div>
    <p>
      The MindBalanceSPORT assessment is designed to provide you with a snapshot of your current mental game. Just like physical training, mental training is a continuous process. It requires consistent effort and dedication to see lasting results.
    </p>
    <p>
      We encourage you to revisit your report regularly, reflect on your progress, and identify new areas for growth. Your mental game is dynamic, and with consistent effort, you can continue to strengthen it.
    </p>
    <BulletList>
      <li><b>Set Goals:</b> Based on your report, identify 1-2 areas where you want to improve your mental game.</li>
      <li><b>Practice Consistently:</b> Integrate mental training exercises into your daily routine. Consistency is key!</li>
      <li><b>Seek Support:</b> Don't hesitate to reach out to coaches, mentors, or mental performance professionals for guidance.</li>
      <li><b>Celebrate Progress:</b> Acknowledge and celebrate small victories along your mental training journey.</li>
    </BulletList>
  </div>,
  [Language.Spanish]: <div>
    <p>
      La evaluación de MindBalanceSPORT está diseñada para proporcionarte una instantánea de tu juego mental actual. Al igual que el entrenamiento físico, el entrenamiento mental es un proceso continuo. Requiere un esfuerzo y una dedicación constantes para ver resultados duraderos.
    </p>
    <p>
      Te animamos a revisar tu informe regularmente, reflexionar sobre tu progreso e identificar nuevas áreas de crecimiento. Tu juego mental es dinámico y, con un esfuerzo constante, puedes seguir fortaleciéndolo.
    </p>
    <BulletList>
      <li><b>Establece Metas:</b> Basándote en tu informe, identifica 1-2 áreas en las que quieras mejorar tu juego mental.</li>
      <li><b>Practica Constantemente:</b> Integra ejercicios de entrenamiento mental en tu rutina diaria. ¡La constancia es clave!</li>
      <li><b>Busca Apoyo:</b> No dudes en contactar a entrenadores, mentores o profesionales del rendimiento mental para obtener orientación.</li>
      <li><b>Celebra el Progreso:</b> Reconoce y celebra las pequeñas victorias a lo largo de tu camino de entrenamiento mental.</li>
    </BulletList>
  </div>,
};

const takeNextStepHeading: { [key in Language]: ReactNode } = {
  [Language.English]: 'TAKE THE NEXT STEP',
  [Language.Spanish]: 'DA EL SIGUIENTE PASO',
};

const takeNextStepContent: { [key in Language]: ReactNode } = {
  [Language.English]: <p>
    MindBalanceSPORT offers a comprehensive suite of resources designed to help you master your mental game. From personalized coaching to interactive workshops, we provide the tools and support you need to unlock your full potential.
  </p>,
  [Language.Spanish]: <p>
    MindBalanceSPORT ofrece un conjunto completo de recursos diseñados para ayudarte a dominar tu juego mental. Desde el entrenamiento personalizado hasta los talleres interactivos, te proporcionamos las herramientas y el apoyo que necesitas para liberar todo tu potencial.
  </p>,
};

const exploreProgramsHeading: { [key in Language]: ReactNode } = {
  [Language.English]: 'EXPLORE OUR PROGRAMS',
  [Language.Spanish]: 'EXPLORA NUESTROS PROGRAMAS',
};

const exploreProgramsContent: { [key in Language]: ReactNode } = {
  [Language.English]: <BulletList>
    <li><b>Personalized Coaching:</b> Work one-on-one with a certified mental performance coach to develop a tailored training plan.</li>
    <li><b>Interactive Workshops:</b> Participate in engaging sessions focused on specific mental skills like focus, resilience, and confidence.</li>
    <li><b>Resource Library:</b> Access a wealth of articles, videos, and exercises to deepen your understanding of mental training.</li>
    <li><b>Community Support:</b> Connect with a network of athletes who are also committed to enhancing their mental game.</li>
  </BulletList>,
  [Language.Spanish]: <BulletList>
    <li><b>Entrenamiento Personalizado:</b> Trabaja individualmente con un entrenador de rendimiento mental certificado para desarrollar un plan de entrenamiento a medida.</li>
    <li><b>Talleres Interactivos:</b> Participa en sesiones atractivas centradas en habilidades mentales específicas como el enfoque, la resiliencia y la confianza.</li>
    <li><b>Biblioteca de Recursos:</b> Accede a una gran cantidad de artículos, videos y ejercicios para profundizar tu comprensión del entrenamiento mental.</li>
    <li><b>Apoyo Comunitario:</b> Conéctate con una red de atletas que también están comprometidos a mejorar su juego mental.</li>
  </BulletList>,
};

const callToActionText: { [key in Language]: ReactNode } = {
  [Language.English]: 'Visit mindbalancesport.com to learn more and start your journey today!',
  [Language.Spanish]: '¡Visita mindbalancesport.com para obtener más información y comenzar tu viaje hoy!',
};

const WrapUpContent = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: ${BASE * 6}px;
  margin-top: ${BASE * 4}px;
  margin-bottom: ${BASE * 4}px;
  align-items: flex-start;
`;

const LeftColumn = styled.div`
  flex: 1;
  
  > p {
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: ${BASE * 2}px;
  }
`;

const RightColumn = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SectionHeading = styled.h2`
  font-family: 'League Gothic', sans-serif;
  font-size: 24px;
  text-transform: uppercase;
  font-weight: normal;
  color: #000;
  margin: ${BASE * 3}px 0 ${BASE * 2}px 0;
`;

const WrapUpImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: ${BASE}px;
`;

const LogoImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
`;

const CallToAction = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin-top: ${BASE * 3}px;
  color: #000;
`;

export default WrapUpPage;

