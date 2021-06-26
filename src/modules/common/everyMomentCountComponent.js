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
  background: #F4EDDD;
  align-items: center;
  justify-content: center;
  padding-top: 89px;
  padding-left: 50px;
`
const LeftContainer = styled(Column)`
`
const RightContainer = styled(Column)`
`
const Icon = styled.img`
  width: 100%;
  height: 816.86px;
`
const Title = styled.span`
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 64px;
  line-height: 122%;
  /* or 78px */

  letter-spacing: -0.05em;
  text-transform: uppercase;
  color: #174C6E;
  max-width: 637px;
`
const Discription = styled.span`
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 155.8%;
  /* or 28px */

  letter-spacing: -0.5px;
  color: #174C6E;
  max-width: 473px;
  padding: 30px 0 52px 0;
`
const ImageContainer = styled(Row)`
  gap: 20px;
`
const PlayIcon = styled.img`
  width: 209.05px;
  height: 62.71px;
  cursor: pointer;
`
const EveryMomentCountComponent = () => {
    return (<Container>
        <LeftContainer>
            <Title>{'Every Moment Counts'}</Title>
            <Discription>{'Never let anything hamper your fitness journey. You can now get personalised fitness programs, easy access to skilled instructors, exclusive offers, and more. Download the ProSport app now!'}</Discription>
            <ImageContainer>
                <PlayIcon src={'/demo-react-application/images/iphone_play.jpg'}
                          onClick={() => window.open('https://apps.apple.com/us/app/instagram/id389801252', '_blank')}/>
                <PlayIcon src={'/demo-react-application/images/google_play.jpg'}
                          onClick={() => window.open('https://play.google.com/store/apps/details?id=com.instagram.android', '_blank')}/>
            </ImageContainer>
        </LeftContainer>
        <RightContainer>
            <Icon src={"/demo-react-application/images/phone_picture.svg"}/>
        </RightContainer>

    </Container>)
}
export default EveryMomentCountComponent