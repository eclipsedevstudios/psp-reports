import { ReactNode } from 'react';
import styled from 'styled-components';

import { Language } from '../types';
import coverImage from '../images/cover_youth_golf.png';
import coverBackgroundGradient from '../images/cover-background-gradient.jpg';
import mindsetInstituteImage from '../images/mindset_institute.png';
const CoverPage = ({ language }: { language: Language }) => {
  return (
    <>
      <CoverImage>
        <img src={coverImage} />
      </CoverImage>
      <CoverText>
        <div>
          <CoverTextHeader>
          {coverTextHeaderStrings[language]}
          </CoverTextHeader>
          <CoverTextHeaderSmall>
          For Youth Athletes
          </CoverTextHeaderSmall>
        </div>
        <img src={mindsetInstituteImage} />
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
  display: flex;
  flex-direction: row;
  column-gap: ${BASE * 4}px;
  align-items: center;
  height: 100%;
  background-image: url(${coverBackgroundGradient});
  background-size: 100%;
  background-repeat: no-repeat;
  background-color: rgb(236, 236, 236);
  margin-top: ${BASE * -1}px;
  padding: ${BASE * 6}px ${BASE * 6}px;

  img {
    width: 320px;
  }
`;

const CoverTextHeader = styled.div`
  font-family: 'League Gothic';
  font-size: 60px;
  text-transform: uppercase;
`;

const CoverTextHeaderSmall = styled.div`
  font-family: 'League Gothic';
  font-size: 40px;
  text-transform: uppercase;
  margin-bottom: ${BASE * 3}px;
`;

export default CoverPage;