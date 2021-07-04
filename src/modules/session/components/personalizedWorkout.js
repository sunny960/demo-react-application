import React from "react";
import styled from "styled-components";

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
  background: #FFFFFF;
  position: relative;
  height: 975px;
`
const ImageContainer = styled(Column)`
  position: relative;
  background: #FFFFFF;
`

const MainImage = styled.img`
  height: 609px;
  width: 100%;
`
const FirstMobileImg = styled.img`
  position: absolute;
  top: 109px;
  left: 24%;

  height: 495px;
  width: 335px;
  z-index: 100;
`
const SecondMobileImg = styled.img`
  position: absolute;
  top: 40%;
  left: 10%;
  height: 600px;
  width: 371px;
  z-index: 200;
`
const TextContainer = styled(Column)`
  align-items: center;
  justify-content: center;
  position: absolute;
  background: #FFFFFF;
  right: 0;
  top: 38%;
  //bottom: -25%;
  width: 63%;
  padding-bottom: 118px;
`
const Title = styled.span`
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 45px;
  line-height: 110%;
  /* or 50px */

  letter-spacing: -0.02em;
  color: #174C6E;
  max-width: 488px;
  padding: 136px 0 41px 0;
  margin-left: 38px;
`
const BecomeMemberBtn = styled.button`
  width: 227px;
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

  text-align: center;
  text-transform: uppercase;
  color: #FFFFFF;

`
const PersonalizedWorkout = () => {
    return (<Container>
        <ImageContainer>
            <MainImage src={'/images/personalized_workout_main_image.png'}/>
            <FirstMobileImg src={'/images/first_mobile_image.png'}/>
            <SecondMobileImg src={'/images/second_mobile_image.png'}/>
        </ImageContainer>
        <TextContainer>
            <Title>{'Personalized Workouts based on your physique and goals '}</Title>
            <BecomeMemberBtn>{'Become A Member'}</BecomeMemberBtn>
        </TextContainer>
    </Container>)

}
export default PersonalizedWorkout