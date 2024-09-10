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
      Your journey to peak performance doesn’t stop here. In fact, it’s just the beginning. If you’re
      thrilled with your results, great! Continue to capitalize on your strengths and implement the
      training tips for each cluster into your daily routine. Want to improve your results? No staff
      member, athlete, or person is perfect and the greatest athletes of all time didn’t become
      elite overnight. Begin to implement new habits that are highlighted in the “Developmental
      Opportunities” sections. Set small, attainable goals; elite-level habits come to fruition by
      focusing on the little things. Treat your lowest scores as opportunities to grow. Success is
      far from linear and acknowledging this will help you respond in a healthy way when things
      don’t go your way.
    </p>
    <p>
      The Mindset Assessment for sport staff is designed to help individuals like you live
      purposeful lives and is grounded in the conviction that sport and life are intertwined.
      Practicing healthy life habits translates to meaningful experiences in sport.
      Sport is a microcosm of life and continuing to work on your mindset will cultivate success
      and growth.
    </p>
    <p>
      Some of the skills you’ve learned can be implemented quickly, leading to noticeable results
      in a short period of time. Others may take longer and require more attention. The best part?
      Your scores will not stay the same. Premier Sport Psychology encourages sport staff to take
      the Mindset Assessment every three to four months to stay on top of their mental game.
    </p>
    <p>
      The mental side of sport is what separates good from great. Whether you’re a coach,
      referee, or front office staff, the benefits of sport psychology are for you.
      In addition, if you’re looking to improve your scores, reach out to one of our sport
      psychology professionals at <a href="https://premiersportpsychology.com/request-appointment/">premiersportpsychology.com/request-appointment</a>.
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