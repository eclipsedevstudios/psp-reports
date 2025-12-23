import { ReactNode } from "react";
import styled from "styled-components";

import { Language } from "../types";
import emailImage from "../images/email.png";
import phoneImage from "../images/phone.png";
import websiteImage from "../images/website.png";

const ContactUs = ({ language }: { language: Language }) => {
  return (
    <ContactUsWrapper>
      <ContactUsHeader>{contactUsStrings[language]}</ContactUsHeader>
      <ContactUsRow>
        <ContactUsItem>
          <img src={websiteImage} alt="Website icon" />
          <ContactLink
            href="https://mindbalancesport.com"
            target="_blank"
            rel="noopener noreferrer"
          >
          <u>mindbalancesport.com</u> 
          </ContactLink>
        </ContactUsItem>
        <ContactUsItem>
          <img src={phoneImage} alt="Phone icon" />
          <ContactLink href="tel:5714640159">571-464-0159</ContactLink>
        </ContactUsItem>
        <ContactUsItem>
          <img src={emailImage} alt="Email icon" />
          <ContactLink href="mailto:info@mindbalancesport.com">
            info@mindbalancesport.com
          </ContactLink>
        </ContactUsItem>
      </ContactUsRow>
    </ContactUsWrapper>
  );
};

const BASE = 8;

const ContactUsText = styled.p`
margin-top: 0px;
`;

const contactUsStrings: { [key in Language]: ReactNode } = {
  [Language.English]: (
    <ContactUsText>
      <b>Stay on top of your mental game with MindBalanceSPORT</b>
    </ContactUsText>
  ),
  [Language.Spanish]: (
    <ContactUsText>
      <b>Mantente al tanto de tu juego mental con MindBalanceSPORT</b>
    </ContactUsText>
  ),
};

const ContactUsWrapper = styled.div`
  background-color: rgb(238, 238, 238);
  padding: ${BASE}px ${BASE * 4}px;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > img {
    width: 60px;
    height: 60px;
    margin-bottom: 8px;
  }
`;

const ContactLink = styled.a`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default ContactUs;
