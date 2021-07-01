import React from "react";
import styled from 'styled-components'
import HeaderMenuRow from "./headerMenuRow";

const Container = styled.div`
  width: 100%;
`
const Row = styled.div`
  display: flex;
  flex-direction: row;
`
const InfoContainer = styled(Row)`
  width: 100%;
  height: 32px;
  background: #F4F4F4;
  justify-content: space-between;
  align-items: center;
  padding: 0 135px 0 135px;
`
const Icon = styled.img`
  width: 11px;
  height: 11px;
`
const MailIcon = styled(Icon)`
  width: 14px;
`
const LocationIcon = styled(Icon)`
  width: 13px;
  height: 19px;
`
const Text = styled.span`
  padding-left: 7px;
  font-family: Josefin Sans;
  font-weight: normal;
  font-size: 12px;
  line-height: 17px;
  letter-spacing: -0.005em;
  text-transform: uppercase;
  color: #174C6E;
`

const MailText = styled(Text)`
  padding-left: 10px;
`
const ContactContainer = styled(Row)`
  gap: 36px;
  align-items: center;
  justify-content: center;
  height: 100%;
`
const AddressContainer = styled(Row)`
  align-items: center;
  justify-content: center;
  height: 100%;
`

const ContactInfo = () => {
    return (
        <InfoContainer>
            <ContactContainer>
                <Row>
                    <Icon src="/images/phone_icon.svg"/>
                    <Text>{'+91 9004559955'}</Text>
                </Row>
                <Row>
                    <MailIcon src="/images/mail_icon.svg"/>
                    <MailText>{'hello@ProsportFitness.in'}</MailText>
                </Row>
            </ContactContainer>
            <AddressContainer>
                <LocationIcon src="/images/location_icon.svg"/>
                <MailText>{'Claden Holm. TPS III, 15th Rd, Bandra West, Mumbai'}</MailText>
            </AddressContainer>
        </InfoContainer>
    );
};

const HeaderComponent = (props) => {
    return (
        <Container>
            <ContactInfo/>
            {props && props.hideHeaderMenu ? "" : <HeaderMenuRow/>}
        </Container>
    );

};
export default HeaderComponent;
