import styled from 'styled-components';

import logoImage from '../images/logo.png'

const PageFooter = ({ pageNum }: { pageNum: number }) => {
  return (
    <PageFooterWrapper>
      <div>
        &copy; 2024 Premier Sport Psychology PLLC
      </div>
      <img src={logoImage} />
      <PageNum>
        {pageNum}
      </PageNum>
    </PageFooterWrapper>
  )
}

const BASE = 8;

const PageFooterWrapper = styled.div`
  position: absolute;
  bottom: ${BASE}px;
  display: flex;
  align-items: center;
  margin-top: ${BASE}px;
  font-size: 8px;

  > img {
    width: 160px;
    margin-left: 150px;
    margin-right: 270px;
  }
`;

const PageNum = styled.div`
  font-size: 12px;
`;

export default PageFooter;