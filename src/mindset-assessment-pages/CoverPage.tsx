import styled from 'styled-components';

import coverImage from '../images/cover.png';

const CoverPage = () => {
  return (
    <>
      <CoverImage>
        <img src={coverImage} />
      </CoverImage>
      <CoverText>
        <CoverTextHeader>
          Assessment Report
          <br />& Training Guide
        </CoverTextHeader>
        <CoverTextSubheader>
          Premier Sport Psychology,
          <br />Research and Development Division
        </CoverTextSubheader>
      </CoverText>
    </>
  )
}

const BASE = 8;

const CoverImage = styled.div`
  > img {
    width: 100%;
  }
`;

const CoverText = styled.div`
  height: 100%;
  background-color: rgb(236, 236, 236);
  margin-top: ${BASE * -1}px;
  padding: ${BASE * 10}px;
`;

const CoverTextHeader = styled.div`
  font-family: 'League Gothic';
  font-size: 60px;
  text-transform: uppercase;
  margin-bottom: ${BASE * 3}px;
`;

const CoverTextSubheader = styled.div`
  font-size: 18px;
  color: rgb(191, 37, 35);
`;

export default CoverPage;