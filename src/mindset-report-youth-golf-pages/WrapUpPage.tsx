import styled from 'styled-components';

import { PageWrapper } from '../components-shared/PageWrapper';
import { PageHeader } from '../components-shared/PageHeader';
import { PageHeaderTitle } from '../components-shared/PageHeaderTitle';
import { PageHeaderSubtitle } from '../components-shared/PageHeaderSubtitle';
import { PageHeaderHr } from '../components-shared/PageHeaderHr';
import PageFooter from '../components-shared/PageFooter';

import wrapUpImage from '../images/wrap-up-youth-golf.png';

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
          <h2>Stay on top of your mental game like you do with other parts of your golf game!</h2>
          <p>Your journey to peak performance doesn’t stop here. In fact, it’s just
          the beginning. If you’re thrilled with your results, great! Continue to
          capitalize on your strengths and implement the training tips for
          each cluster into your daily routine. Want to improve your results?
          No athlete (or person) is perfect and the greatest athletes of all time
          didn’t become elite overnight. Begin to implement new habits that
          are showcased in each area of the assessment. Set small,
          attainable goals; elite-level habits come to fruition by focusing on
          the little things. Treat your lowest scores as opportunities to grow.
          Success is far from linear and acknowledging this will help you
          respond in a healthy way when things don’t go your way.</p>
        </div>
      </WrapUpRow>
      <WrapUpBottom>
        <p><b>NJT Members - Recommendations:</b></p>
        <p>
          <ul>
            <li>
              Share your Mindset Assessment Results with your current sport psychology provider. If you don’t already have one, remember that the USNDP has four incredible consultants who you can access two hours per month for free! Reach out to Coach Chris Zambri (805.312.1516) and Dr. Beth Brown (405.658.3313) if you want to get connected.
            </li>
            <li>
              Talk to Coach Chris Zambri (805.312.1516) or Coach Tiff Joh (858.229.7906) about your results and explore ideas for what you can do to keep getter better.
            </li>
          </ul>
        </p>
        <p><b>USNDP Grant Recipients - Recommendations:</b></p>
        <p>
          <ul>
            <li>
              Share your Mindset Assessment Results with your current sport psychology provider. If you don’t already have one, remember you can utilize your “coaching dollars” for mental skills coaching too! See the list of Health – Recommended Providers created by the USNDP (<b>which includes <a href="mailto:npenz@premiersportpsychology.com">npenz@premiersportpsychology.com</a></b>) if you don’t know who to reach out to.
            </li>
            <li>
              Look at your Mindset Assessment result and pick one or two areas that you want to improve. Then, cross-reference with the Junior54 sessions and pick some of the exercises that connect to an area you want to improve. For example, if you want to improve your Self-Confidence score, then commit to practicing some of the Junior 54 golf exercises that can directly impact your confidence.
            </li>
          </ul>
        </p>
      </WrapUpBottom>
      <PageFooter pageNum={9} />
    </PageWrapper>
  );
}

const BASE = 8;

const WrapUpRow = styled.div`
  display: flex;
  column-gap: ${BASE * 4}px;
  margin-top: ${BASE}px;
  margin-bottom: ${BASE * 2}px;

  p {
    font-size: 18px;
    line-height: 1.5;
  }
  
  h2 {
    font-size: 30px;
    font-family: 'League Gothic';
    letter-spacing: 1.2px;
    margin-top: ${BASE * -1}px;
  }
`;

const AthleteImage = styled.div`
  > img {
    height: 400px;
  }
`;

const WrapUpBottom = styled.div`
  margin-top: ${BASE * -2}px;

  p {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export default WrapUpPage;