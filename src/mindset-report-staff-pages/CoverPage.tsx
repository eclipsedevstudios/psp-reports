import { ReactNode } from 'react';
import styled from 'styled-components';

import { Language } from '../types';
import coverImage from '../images/cover_staff.png';
import coverBackgroundGradient from '../images/cover-background-gradient.jpg';

const CoverPage = ({ language }: { language: Language }) => {
  return (
    <>
      <CoverImage>
        <img src={coverImage} />
      </CoverImage>
      <CoverText>
        <CoverTextHeader>
          {coverTextHeaderStrings[language]}
        </CoverTextHeader>
        <CoverTextSubheader>
          Premier Sport Psychology,
          <br />Research and Development Division
        </CoverTextSubheader>
      </CoverText>
    </>
  )
}

const coverTextHeaderStrings: { [key in Language]: ReactNode } = {
  [Language.English]: <>
    Assessment Report
    <br />& Training Guide
  </>,
  [Language.Spanish]: <>
  </>,
}

const BASE = 8;

const CoverImage = styled.div`
  > img {
    width: 100%;
    border-bottom: ${BASE}px solid rgb(191, 37, 35);
  }
`;

const CoverText = styled.div`
  height: 100%;
  background-image: url(${coverBackgroundGradient});
  background-size: 100%;
  background-repeat: no-repeat;
  background-color: rgb(236, 236, 236);
  margin-top: ${BASE * -1}px;
  padding: ${BASE * 6}px ${BASE * 10}px;
`;

const CoverTextHeader = styled.div`
  font-family: 'League Gothic';
  font-size: 60px;
  text-transform: uppercase;
`;

const CoverTextSubheader = styled.div`
  font-size: 18px;
  color: rgb(191, 37, 35);
  font-weight: bold;
`;

export default CoverPage;