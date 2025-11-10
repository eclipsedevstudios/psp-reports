import { ReactNode } from 'react';
import styled from 'styled-components';

import { Language } from '../types';
import emailImage from '../images/email.png';
import phoneImage from '../images/phone.png';
import websiteImage from '../images/website.png';

const ContactUs = ({ language }: { language: Language }) => {
  return (
    <ContactUsWrapper>
      <ContactUsHeader>
        {contactUsStrings[language]}
      </ContactUsHeader>
      <ContactUsRow>
        <ContactUsItem>
          <img src={websiteImage} alt="Website icon" />
          <p>mindbalancesport.com</p>
        </ContactUsItem>
        <ContactUsItem>
          <img src={phoneImage} alt="Phone icon" />
          <p>571.464.0159</p>
        </ContactUsItem>
        <ContactUsItem>
          <img src={emailImage} alt="Email icon" />
          <p>info@mindbalancesport.com</p>
        </ContactUsItem>
      </ContactUsRow>
    </ContactUsWrapper>
  )
}

const contactUsStrings: { [key in Language]: ReactNode } = {
  [Language.English]: <p><b>Stay on top of your mental game with MindBalanceSPORT</b></p>,
  [Language.Spanish]: <p><b>Mantente al tanto de tu juego mental con MindBalanceSPORT</b></p>,
}

const BASE = 8;

const ContactUsWrapper = styled.div`
  background-color: rgb(238,238,238);
  padding: ${BASE}px ${BASE*4}px;
  border-radius: ${BASE}px;
`;

const ContactUsHeader = styled.div`
  text-align: center;
`;

const ContactUsRow = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: ${BASE * 2}px;
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