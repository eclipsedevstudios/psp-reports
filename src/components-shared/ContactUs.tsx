import styled from 'styled-components';

import emailImage from '../images/email.png';
import phoneImage from '../images/phone.png';
import websiteImage from '../images/website.png';

const ContactUs = () => {
  return (
    <ContactUsWrapper>
      <p><b>Stay on top of your mental game with Premier</b></p>
      <ContactUsRow>
        <ContactUsItem>
          <img src={phoneImage} />
          <p>952.835.8513</p>
        </ContactUsItem>
        <ContactUsItem>
          <img src={websiteImage} />
          <p>premiersportpsychology.com</p>
        </ContactUsItem>
        <ContactUsItem>
          <img src={emailImage} />
          <p>admin@premiersportpsychology.com</p>
        </ContactUsItem>
      </ContactUsRow>
    </ContactUsWrapper>
  )
}

const BASE = 8;

const ContactUsWrapper = styled.div`
  background-color: rgb(238,238,238);
  padding: ${BASE}px ${BASE*4}px;
  border-radius: ${BASE}px;
`;

const ContactUsRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ContactUsItem = styled.div`
  flex: 1;
  font-size: 14px;
  text-align: center;

  > img {
    width: 60px;
    height: 60px;
  }
`;

export default ContactUs;