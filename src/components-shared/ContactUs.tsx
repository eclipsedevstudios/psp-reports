import { ReactNode } from 'react';
import styled from 'styled-components';

import { Language } from '../types';
import emailImage from '../images/email.png';
import mindsetProgramImage from '../images/mindset_program.png';
import phoneImage from '../images/phone.png';
import websiteImage from '../images/website.png';

const ContactUs = ({ language }: { language: Language }) => {
  return (
    <ContactUsWrapper>
      {contactUsStrings[language]}
      <ContactUsRow>
        <ContactUsItem>
          <img src={websiteImage} />
          <p>premiersportpsychology.com</p>
        </ContactUsItem>
        <ContactUsItem>
          <img src={phoneImage} />
          <p>952.835.8513</p>
        </ContactUsItem>
        <ContactUsItem>
          <img src={emailImage} />
          <p>admin@premiersportpsychology.com</p>
        </ContactUsItem>
        <ContactUsItem>
          <img src={mindsetProgramImage} />
          <p>mindsetprogram.com</p>
        </ContactUsItem>
      </ContactUsRow>
    </ContactUsWrapper>
  )
}

const contactUsStrings: { [key in Language]: ReactNode } = {
  [Language.English]: <p><b>Stay on top of your mental game with Premier Sport Psychology</b></p>,
  [Language.Spanish]: <p><b>Manténgase al tanto de su juego mental con Premier Sport Psychology</b></p>,
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