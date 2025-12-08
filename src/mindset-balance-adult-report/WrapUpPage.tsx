import { ReactNode } from "react";
import styled from "styled-components";

import { PageWrapper } from "../components-shared/PageWrapper";
import { PageHeader } from "../components-shared/PageHeader";
import { PageHeaderTitle } from "../components-shared/PageHeaderTitle";
import { PageHeaderHr } from "../components-shared/PageHeaderHr";
import PageFooter from "../components-shared/PageFooter";
import ContactUs from "./ContactUs";
import { Language } from "../types";
import mindBalanceWrapup1Image from "../images/mind_balance_adult_wrapup_1.png";
import mindBalanceWrapup2Image from "../images/mind_balance_wrapup_2.png";

const BASE = 8;

const WrapUpPage = ({
  language,
  pageNum: _pageNum,
}: {
  language: Language;
  pageNum: number;
}) => {
  return (
    <PageWrapper>
      <PageHeader
        style={{
          justifyContent: "flex-start",
          columnGap: "12px",
          alignItems: "flex-start",
        }}
      >
        <div>
          <HeroImage
            src={mindBalanceWrapup1Image}
            alt="Athlete preparing to compete"
          />
        </div>
        <div style={{ flex: 1, textAlign: "center" }}>
          <div>
            {page1HeaderStrings[language]}
            <PageHeaderHr>
              <hr />
            </PageHeaderHr>
          </div>
          <TopSection>
            <HeroTextContent>{heroContent[language]}</HeroTextContent>
          </TopSection>
        </div>
      </PageHeader>

      <BottomSection>
        <RecommendationsSection>
          <RecommendationsHeading>
            {athleteRecommendationsHeading[language]}
          </RecommendationsHeading>
          {athleteRecommendationsContent[language]}
        </RecommendationsSection>
        <SupportImage src={mindBalanceWrapup2Image} alt="Team in a huddle" />
      </BottomSection>
      <ContactUs language={language} />
      <PageFooter pageNum={4} />
    </PageWrapper>
  );
};

const TopSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${BASE * 6}px;
  align-items: flex-start;
  margin-top: ${BASE * 4}px;
  padding: 0px 12px;
`;

const HeroImage = styled.img`
  /* flex: 0 0 42%;
  width: 100%;
  max-width: 320px; */
  width: 200px;
  height: 430px;
  object-fit: cover;
`;

const HeroTextContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${BASE * 2}px;
  text-align: left;
`;

const HeroTagline = styled.h2`
  font-family: "League Gothic", sans-serif;
  font-size: 34px;
  font-weight: normal;
  color: #000;
  margin: 0;
  line-height: 1.1;
  text-align: center;

`;

const HeroParagraph = styled.p`
  font-size: 14px;
  line-height: 1.6;
  margin: 0;


`;

const BottomSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${BASE * 6}px;
  align-items: flex-start;
  margin-top: ${BASE * 5}px;
  margin-bottom: ${BASE * 4}px;
`;

const RecommendationsSection = styled.div`
  flex: 1;
`;

const RecommendationsHeading = styled.h3`
  font-size: 16px;
  font-weight: bold;
  text-decoration: underline;
  margin: 0 0 ${BASE * 2}px 0;
`;

const RecommendationsList = styled.ul`
  margin: 0;
  padding-left: 8px;

  > li {
    font-size: 14px;
    line-height: 1.6;
    /* margin-bottom: ${BASE * 1.5}px; */
  }
`;

const SupportImage = styled.img`

  width: 100%;
  max-width: 360px;
`;

const page1HeaderStrings: { [key in Language]: ReactNode } = {
  [Language.English]: <PageHeaderTitle>WRAP UP & NEXT STEPS</PageHeaderTitle>,
  [Language.Spanish]: (
    <PageHeaderTitle>CIERRE Y PRÓXIMOS PASOS</PageHeaderTitle>
  ),
};

const heroContent: { [key in Language]: ReactNode } = {
  [Language.English]: (
    <>
      <HeroTagline>
        Stay on top of your mental game like you do with other parts of your
        training!
      </HeroTagline>
      <HeroParagraph>
        Your journey to peak performance doesn’t stop here. In fact, it’s just the beginning. If you’re thrilled with your results, great! Continue to capitalize on your strengths and implement the training tips for each cluster into your daily routine. Want to improve your results? No athlete (or person) is perfect, and the greatest athletes of all time didn’t become elite overnight. Begin to implement new habits that are showcased in each area of the assessment. Set small, attainable goals; elite-level habits come to fruition by focusing on the little things. Treat your lowest scores as opportunities to grow. Success is far from linear and acknowledging this will help you respond in a healthy way when things don’t go your way.
      </HeroParagraph>
    </>
  ),
  [Language.Spanish]: (
    <>
      <HeroTagline>
        ¡Mantén tu juego mental al nivel de las demás partes de tu
        entrenamiento!
      </HeroTagline>
      <HeroParagraph>
        Tu camino hacia el máximo rendimiento no termina aquí; de hecho, apenas comienza. Si estás satisfecho con tus resultados, ¡excelente! Continúa aprovechando tus fortalezas e incorpora las recomendaciones de entrenamiento de cada clúster en tu rutina diaria. ¿Quieres mejorar tus resultados? Ningún atleta (ni persona) es perfecto, y los grandes de todos los tiempos no se volvieron élite de la noche a la mañana. Empieza a implementar los nuevos hábitos que se destacan en cada área de la evaluación. Establece metas pequeñas y alcanzables; los hábitos de alto nivel se construyen al enfocarse en los detalles. Toma tus puntuaciones más bajas como oportunidades para crecer. El éxito está lejos de ser lineal y reconocerlo te ayudará a responder de forma saludable cuando las cosas no salgan como esperas.
      </HeroParagraph>
    </>
  ),
};

const athleteRecommendationsHeading: { [key in Language]: ReactNode } = {
  [Language.English]: "Athlete Recommendations:",
  [Language.Spanish]: "Recomendaciones para Atletas:",
};

const athleteRecommendationsContent: { [key in Language]: ReactNode } = {
  [Language.English]: (
    <RecommendationsList>
      <li>
        Share your Mindset Assessment results with your current sport
        psychologist or performance improvement coach.
      </li>
      <li>
        Reflect on your growth areas, and identify 1-2 things you can begin
        implementing now to improve your performance.
      </li>
      <li>
        Reflect on your strength areas, and identify what behaviors you can
        continue to implement to maintain your score.
      </li>
    </RecommendationsList>
  ),
  [Language.Spanish]: (
    <RecommendationsList>
      <li>
        Comparte los resultados de tu Mindset Assessment con tu psicólogo
        deportivo actual o con tu coach de mejora del rendimiento.
      </li>
      <li>
        Reflexiona sobre tus áreas de crecimiento e identifica 1-2 acciones que
        puedas comenzar a implementar ahora para mejorar tu rendimiento.
      </li>
      <li>
        Reflexiona sobre tus áreas fuertes e identifica qué conductas puedes
        mantener para conservar tu puntuación.
      </li>
    </RecommendationsList>
  ),
};

export default WrapUpPage;
