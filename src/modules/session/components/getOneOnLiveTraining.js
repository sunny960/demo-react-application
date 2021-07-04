import React from "react";
import styled from "styled-components";
import HeaderMenuRow from "../../header/headerMenuRow";
import Utility from "../../../utils";

const Column = styled.div`
  display: flex;
  flex-direction: column;
`

const ContentContainer = styled(Column)`
  position: relative;
`
const Container = styled(Column)`
  width: 100%;
  height: 850px;
  background: url("/images/get_one_onlive_trsining_bg.png");
`

const Icon = styled.img`
  width: 100%;
  height: 870px;
  margin-top: 102px;
`
const PayNowButton = styled.button`
  position: absolute;
  left: 45%;
  bottom: 20%;

  background: #FF5C15;
  border-radius: 100px;
  width: 228px;
  height: 74px;

  font-family: Josefin Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 18px;
  /* identical to box height */

  text-align: center;
  text-transform: uppercase;
  color: #FFFFFF;
  margin-bottom: 98px;
  border: 1px;

`
const GetOneOnLiveTraining = () => {
    return (<Container>
        <HeaderMenuRow backgroundColor={'transparent'} showBtnAppyForTrainner={true}/>
        <ContentContainer>
            <Icon src={'/images/session_first.png'}/>
            <PayNowButton onClick={() => Utility.showUnderDevelopment()}>{'Pay Now'}</PayNowButton>
        </ContentContainer>

    </Container>)

}

export default GetOneOnLiveTraining