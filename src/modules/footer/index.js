import React from "react";
import styled from 'styled-components'
import {history} from "../../utils/history";

const Row = styled.div`
  display: flex;
  flex-direction: row;
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
`
const Container = styled(Column)`
  position: relative;
  width: 100%;
  height: 360px;
  background: #FFFFFF;
  align-items: center;
  justify-content: center;
  padding-top: 124px;
`
const FooterIcon = styled.img`
  width: 202px;
  height: 96px;
  margin: 71px 0 62px 0;
  cursor: pointer;
`
const Title = styled.span`
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 29px;
  line-height: 29px;
  /* identical to box height */
  color: #174C6E;
  padding-bottom: 14px;
`
const ConditionContainer = styled(Row)`
  max-width: 385px;
  padding-bottom: 75px;
  gap: 25px;
  justify-content: space-between;
`
const Tag = styled.a`
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 12px;
  /* identical to box height */

  letter-spacing: -0.02em;
  color: #174C6E;
`
const MessageIcon = styled.img`
  width: 111.43px;
  height: 119.57px;
  position: absolute;
  right: 72px;
  top: -55px;
`
const Footer = () => {
    return (<Container>
        <FooterIcon src={'/images/footer_logo.svg'} onClick={() => history.push('/')}/>
        <Title>{'© Prosportfitness 2021'}</Title>
        <ConditionContainer>
            <Tag href={'#'} target={'_blank'}>{'Privacy Policy'}</Tag>
            <Tag href={'#'} target={'_blank'}>{'Refund and Cancellation Policy'}</Tag>
            <Tag href={'#'} target={'_blank'}>{'Terms and Conditions'}</Tag>

        </ConditionContainer>
        <MessageIcon src={'/images/message_icon.svg'}/>
    </Container>)

}

export default Footer