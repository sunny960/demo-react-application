import React from "react";
import styled from "styled-components";
import HeaderMenuRow from "../../header/headerMenuRow";
import Utility from "../../../utils";

const Row = styled.div`
  display: flex;
  flex-direction: row;
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
`

const ContentContainer = styled(Row)`
  //align-items: center;
  justify-content: center;
  padding-top: 102px;
  gap: 38px;
`
const Container = styled(Column)`
  width: 100%;
  height: 850px;
  background: url("/images/get_one_onlive_trsining_bg.png");
`

const Icon = styled.img`
  width: 525px;
  height: 848px;
`
const LeftBtnImage = styled.img`
  //width: 328px;
  height: 94px;
`
const RightBtnImage = styled.img`
  //width: 365px;
  height: 94px;
`
const Title = styled.span`
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 82px;
  line-height: 110%;
  /* or 90px */

  display: flex;
  align-items: center;
  letter-spacing: -0.05em;
  text-transform: uppercase;
  color: #174C6E;
  max-width: 585px;
  padding: 0 0 31px 0;
`
const ImageBtnContainer = styled(Row)`
  gap: 15px;
  padding-bottom: 69px;
`
const PayNowButton = styled.button`
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
            <Column>
                <Icon src={'/images/get_onlive_phone_image.png'}/>
            </Column>
            <Column>
                <Title>{'Get 1 on Live Training on video call'}</Title>
                <ImageBtnContainer>
                    <LeftBtnImage src={'/images/get_onlive_training_first_btn_image.png'}/>
                    <RightBtnImage src={'/images/get_onlive_training_2nd_btn_image.png'}/>
                </ImageBtnContainer>
                <PayNowButton onClick={()=>Utility.showUnderDevelopment()}>{'Pay Now'}</PayNowButton>
            </Column>
        </ContentContainer>

    </Container>)

}

export default GetOneOnLiveTraining