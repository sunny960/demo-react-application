import React from "react";
import styled from 'styled-components'

const Row = styled.div`
  display: flex;
  flex-direction: row;
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
`
const Container = styled(Row)`
  gap: 30px;
  width: 100%;
  background: #E4E4E4;
  align-items: center;
  justify-content: center;
  padding: 124px 135px 0 135px;
`

const LeftContainer = styled(Column)`
`
const RightContainer = styled(Column)`
  width: 500px;
  height: 615px;
  background: #FAF9F8;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
`
const SubTitle = styled.span`
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 64px;
  line-height: 110%;
  /* or 70px */

  display: flex;
  align-items: center;
  letter-spacing: -0.02em;
  color: #174C6E;
  max-width: 315px;
  padding: 60px 0 38px 48px;
`
const BandraText = styled.span`
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 165.52%;
  /* identical to box height, or 40px */
  color: #FF5C15;
  padding-left: 52px;
`
const Address = styled.span`
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 21px;

  color: #174C6E;
  padding-left: 52px;
  padding-bottom: 33px;
`
const SocialIconContainer = styled(Row)`
  gap: 20px;
  padding-left: 52px;

`
const SocialIcon = styled.img`
  max-width: 25px;
  height: 24px;
`
const Title =styled.span`
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 78px;
  line-height: 95px;
  /* or 122% */

  display: flex;
  align-items: center;
  letter-spacing: -0.055em;
  text-transform: capitalize;
  color: #174C6E;
  max-width: 689px;
`
const Content = styled.span`
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 155.8%;
  /* or 25px */


  color: #174C6E;
  max-width: 382px;
  padding: 10px 0 50px 0;
`
const InputField =styled.input`
  width: 100%;
  max-width: 470px;
  border: 1px solid #174C6E;
  border-top: none;
  border-left: none;
  border-right: none;
  background: transparent;
  padding: 11px 0;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 121.5%;
  margin-bottom: 44px;
  /* identical to box height, or 22px */

  letter-spacing: -0.02em;
  color: #174C6E;
  ::-webkit-input-placeholder {
        color: #174C6E;
    }
  &.hasFocus:focus,
  &:active {
    border-color: #174C6E;
  }

`
const SubmitForm =styled.button`
  width: 169px;
  height: 49px;
  background: #FF5C15;
  border-radius: 5px;
  border: 1px;

  font-family: Josefin Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 18px;
  /* identical to box height */

  text-transform: uppercase;
  text-align: center;
  color: #FFFFFF;
  margin: 75px 0 128px 0;
`
const SignUpForm = ()=>{
    return (<>
        <InputField type={'text'} placeholder={'Name'}/>
        <InputField type={'text'} placeholder={'Contact Number'}/>
        <InputField type={'text'} placeholder={'Email'}/>
        <InputField type={'text'} placeholder={'Tell us all about it'}/>
        <SubmitForm>{'Submit'}</SubmitForm>
    </>)

}
const ReadyToJoinComponent = () => {
    return (<Container>
        <LeftContainer>
            <Title>{'Ready To Join The ProSport Community?'}</Title>
            <Content>{'Feel free to contact us and we will get back to you as soon as we can.'}</Content>
            <SignUpForm/>
        </LeftContainer>
        <RightContainer>
            <SubTitle>{'Maximise Your Potential'}</SubTitle>
            <BandraText>{'Bandra'}</BandraText>
            <Address>{'1st Floor, Claden Holm, TPS III, 15th Road, Bandra West. Mumbai. Maharashtra - 400050\n' +
            '\n' +
            '+91 9004559955'}</Address>
            <SocialIconContainer>
                <SocialIcon src={'/images/twiiter_icon.jpg'}/>
                <SocialIcon src={'/images/facebook_icon.jpg'}/>
                <SocialIcon src={'/images/instagram_icon.jpg'}/>
            </SocialIconContainer>
        </RightContainer>

    </Container>)

}
export default ReadyToJoinComponent