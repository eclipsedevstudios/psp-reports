import styled from 'styled-components';

import { PageWrapper } from '../components-shared/PageWrapper';
import { PageHeader } from '../components-shared/PageHeader';
import { PageHeaderTitle } from '../components-shared/PageHeaderTitle';
import { PageHeaderSubtitle } from '../components-shared/PageHeaderSubtitle';
import { PageHeaderHr } from '../components-shared/PageHeaderHr';
import ContactUs from '../components-shared/ContactUs';
import PageFooter from '../components-shared/PageFooter';

const MindsetAssessmentPage = () => {
  return (
    <PageWrapper>
      <PageHeader>
        <div>
          <PageHeaderSubtitle>
            What is the
          </PageHeaderSubtitle>
          <PageHeaderTitle>
            Mindset Assessment?
          </PageHeaderTitle>
        </div>
        <PageHeaderHr>
          <hr />
        </PageHeaderHr>
      </PageHeader>
      <ContentWrapper>
        <div>
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
        </div>
        <TestingSample>
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
        </TestingSample>
      </ContentWrapper>
      <ContactUs />
      <PageFooter pageNum={1} />
    </PageWrapper>
  );
}

const BASE = 8;

const ContentWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  column-gap: ${BASE * 8}px;
  margin-top: ${BASE * 12}px;
  margin-bottom: ${BASE * 16}px;
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