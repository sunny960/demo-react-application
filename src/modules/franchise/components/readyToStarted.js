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
const Container = styled(Column)`
  align-items: center;
  justify-content: center;
  position: relative;
`

const LeftContainer = styled(Column)`
  width: 942px;
  //height: 882px;
  background: #FAF9F8;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
  padding: 98px 0 79px 70px;
  position: absolute;
`
const Title = styled.span`
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 78px;
  line-height: 77px;
  /* or 99% */

  display: flex;
  align-items: center;
  letter-spacing: -0.055em;
  text-transform: capitalize;

  color: #174C6E;
  max-width: 720px;
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
  padding: 21px 0 50px 0;
`
const InputField = styled.input`
  width: 100%;
  max-width: 470px;
  border: 1px solid #174C6E;
  border-top: none;
  border-left: none;
  border-right: none;
  background: transparent;
  padding: 11px 0 11px 5px;
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
const SubmitForm = styled.button`
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
`
const Icon = styled.img`
  width: 100%;
  height: 100%;
`
const Image = styled.img`
  width: 75%;
  position: absolute;
  right: -17%;;
  top: 0%;
  height: 882px;
`
const SignUpForm = () => {
    return (<>
        <InputField type={'text'} placeholder={'Name'}/>
        <InputField type={'text'} placeholder={'Contact Number'}/>
        <InputField type={'text'} placeholder={'Email'}/>
        <InputField type={'text'} placeholder={'Tell us all about it'}/>
        <SubmitForm>{'Submit'}</SubmitForm>
    </>)

}
const ReadyToStarted = () => {
    return (<Container>
        <Icon src={'/images/ready_to_start_bg_cropped.png'}/>
        <LeftContainer>
            <Title>{'Ready To Get Started?'}</Title>
            <Content>{'Fill out the information and our representative will get in touch with you in no time.'}</Content>
            <SignUpForm/>
            <Image src={'/images/zaheer_khan.png'}/>
        </LeftContainer>
    </Container>)

}
export default ReadyToStarted