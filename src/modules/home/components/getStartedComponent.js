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
  width: 100%;
  align-items: center;
  position: relative;
`
const ItemContainer = styled(Row)`
  width: 90%;
  margin: auto;
  padding-bottom: 97px;
`
const list = [
    {
        image: '/images/fitness_movenent.svg',
        title: 'Join The Fitness Movement',
        description: 'Help people reach their fitness, health, and performance goals by blending cutting-edge equipment and world-class training.'
    },
    {
        image: '/images/great_roi.svg',
        title: 'Great ROI',
        description: 'Receive exceptional growth opportunities and receive incredible Return on Investment by joining our fitness community.'
    },
    {
        image: '/images/customer_experience.svg',
        title: 'Unparalleled Customer Experience',
        description: 'Work in tandem with experts to create a fitness space designed to suit every training program and deliver a first-class customer experience.'
    },
    {
        image: '/images/class_equipment.svg',
        title: 'Best in Class Equipment',
        description: 'Build strength, speed, and agility of your clients using the latest and state of the art equipment and value-driven approach.'
    },
]

const Item = styled(Column)`
    flex: 20;
`
const Icon = styled.img`
  width: 100%;
  max-width: 50px;
`
const Title = styled.span`
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: -0.5px;
  color: #174C6E;
  padding-top: 35px;
  max-width: 240px;
`
const Description = styled.span`
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 155.8%;
  /* or 25px */
  letter-spacing: -0.5px;
  color: #174C6E;
  max-width: 240px;
  padding-top: 30px;
`
const StartButton = styled.button`
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 18px;
  /* identical to box height */
  text-transform: uppercase;
  color: #FFFFFF;

  width: 169px;
  height: 49px;
  background: #FF5C15;
  border-radius: 5px;
  border: 1px;
  //margin-top: 97px;
`
const BtnContainer = styled(Row)`
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -22px;
  z-index: 10000;
`
const GetStartedComponent = () => {
    return (<Container>
        <ItemContainer>
            {list && list.map((obj, index) =>
                <Item>
                    <Icon src={obj.image}/>
                    <Title>{obj.title}</Title>
                    <Description>{obj.description}</Description>
                </Item>)}
        </ItemContainer>
        <BtnContainer>
            <StartButton>{'get started'}</StartButton>
        </BtnContainer>
    </Container>)

}
export default GetStartedComponent