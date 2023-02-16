import styled from 'styled-components';

import { PageWrapper } from '../components-shared/PageWrapper';
import { PageHeader } from '../components-shared/PageHeader';
import { PageHeaderTitle } from '../components-shared/PageHeaderTitle';
import { PageHeaderSubtitle } from '../components-shared/PageHeaderSubtitle';
import { PageHeaderHr } from '../components-shared/PageHeaderHr';
import ContactUs from '../components-shared/ContactUs';
import PageFooter from '../components-shared/PageFooter';

import wrapUpImage from '../images/wrap-up.png';

const WrapUpPage = () => {
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
        <div>
          <p>
            Your journey to peak performance doesn’t stop here. In fact, it’s just the beginning. If you’re thrilled with your results, great! Continue to capitalize on your strengths and implement the training tips for each cluster into your daily routine. Want to improve your results? <b>No athlete (or person) is perfect and the greatest athletes of all time didn’t become elite overnight.</b> Begin to implement new habits that are showcased in each cluster. Set small, attainable goals; elite-level habits come to fruition by focusing on the little things. Treat your lowest scores as opportunities to grow. Success is far from linear and acknowledging this will help you respond in a healthy way when things don’t go your way.
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
        </div>
      </WrapUpRow>
      <ContactUs />
      <PageFooter pageNum={10} />
    </PageWrapper>
  );
}

const BASE = 8;

const WrapUpRow = styled.div`
  display: flex;
  column-gap: ${BASE * 4}px;
  margin-top: ${BASE * 4}px;
  margin-bottom: ${BASE * 4}px;
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