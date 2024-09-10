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

import wrapUpImage from '../images/wrap-up-youth.png';

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
      Your journey to peak performance doesn’t stop here. In fact, it’s just the beginning.
      If you’re thrilled with your results, great! Continue to capitalize on your strengths
      and implement the training tips for each section into your daily routine. Want to
      improve your results? <b>No athlete (or person) is perfect and the greatest athletes
      of all time didn’t become elite overnight.</b> Begin to implement new habits that are
      showcased in each area of the assessment. Set small, attainable goals; elite-level
      habits develop by focusing on the little things. Treat your lowest scores as
      opportunities to grow. Success is far from linear and acknowledging this will help
      you respond in a healthy way when things don’t go your way.
    </p>
    <p>
      In addition, if you’re looking to improve your scores, reach out to one of our sport psychology professionals here (<a href="https://premiersportpsychology.com/request-appointment/">premiersportpsychology.com/request-appointment</a>) and check out our Premier Mindset Program (<a href="https://mindsetprogram.com/">mindsetprogram.com</a>) for hands-on activities and guidance for improving in these four areas!
    </p>
    <p>
      The Mindset Assessment for Youth Athletes is designed to help athletes live
      purposeful lives and is grounded in the conviction that sport and life are
      intertwined. Practicing healthy life habits translates to meaningful experiences in
      sport. Being intentional about your mental game during competition strengthens
      your life experiences. <b>Sport is a microcosm of life and the skills learned through
      understanding your mindset will cultivate success long after the season is over.</b>
    </p>
    <p>
      <b>Some of the information you’ve learned through these results can be implemented
      quickly, leading to noticeable results in a short period of time. Other information
      may take longer and require more attention.</b> The best part? Your scores will not
      stay the same. Premier Sport Psychology encourages athletes to take the Mindset
      Assessment every three months to stay on top of their mental game.
    </p>
    <p>
      <b>The mental side of sport is what separates good from great.</b> Whether you’re a student-athlete vying for a spot on the roster, or currently in the D1 recruitment process, the benefits of sport psychology are for you.
    </p>
  </div>,
  [Language.Spanish]: <></>
}

const BASE = 8;

const WrapUpRow = styled.div`
  display: flex;
  column-gap: ${BASE * 2}px;
  margin-top: ${BASE}px;
  margin-bottom: ${BASE * 2}px;
  font-size: 14px;
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