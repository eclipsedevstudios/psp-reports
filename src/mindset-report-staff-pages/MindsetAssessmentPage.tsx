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
      Mindset Assessment
    </PageHeaderTitle>
    <PageHeaderTitle>
      for Sport Staff?
    </PageHeaderTitle>
  </>,
  [Language.Spanish]: <></>,
}

const mindsetDescriptionStrings: { [key in Language]: ReactNode } = {
  [Language.English]: <div>
    <p>
      The information included in this report is
      designed to provide you with important
      information needed to 1)
      increase knowledge and awareness; and 2)
      take your mental game to the next level. In
      the pages to follow, you’ll learn about how
      you scored in each area. You'll also learn
      about what other sport staff are doing to
      improve their mental game in these areas.
      As you review your results, we encourage
      you to look through them with an open
      mind. By understanding your strengths and
      growth areas, you can begin to prioritize
      your mental training. This process
      will enhance your routines and create
      greater consistency in your work
      performance over time.
    </p>
  </div>,
  [Language.Spanish]: <div></div>,
}

const testingSampleStrings: { [key in Language]: ReactNode } = {
  [Language.English]: <>
    <h2>Our Testing Sample</h2>
    <p>
    Our sample included over 370 sport
    staff at all levels of sport, from
    coaches to athletic trainers and
    front office staff.
    </p>
  </>,
  [Language.Spanish]: <></>,
}
const BASE = 8;

const MindsetDescription = styled('div')`
  display: flex;
  flex-direction: row;
  column-gap: ${BASE * 12}px;
  margin-top: ${BASE * 8}px;
  margin-bottom: ${BASE * 12}px;
  align-items: center;
`;

const TestingSample = styled('div')`
  min-width: 200px;
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