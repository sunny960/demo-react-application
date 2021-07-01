import React from "react";
import styled from 'styled-components'
import {Link} from "react-scroll";

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
  background: #E5E5E5;
  align-items: center;
  justify-content: center;
  position: relative;
`
const ItemContainer = styled(Row)`
  gap: 30px;
  padding-bottom: 113px;
  flex-wrap: wrap;
  justify-content: center;

`
const list = [
    {
        image: '/images/training_1st.svg',
        description: 'Train with the best instructors and fitness experts to increase strength and endurance.'
    },
    {
        image: '/images/personal_trainer.svg',
        description: 'Achieve fitness and performance goals with custom programs led by dedicated instructors.'
    },
    {
        image: '/images/physiotherpy.svg',
        description: 'Let experts help you restore function, reduce pain, improve healing, and prevent future injuries.'
    },
    {
        image: '/images/nutristion.svg',
        description: 'Get personalised meal and snack plans that promote good health and overall performance.'
    },
]

const Item = styled(Column)`
`
const Icon = styled.img`
  width: 270px;
  height: 280px;
`
const Description = styled.span`
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 155.8%;
  /* or 25px */
  color: #174C6E;
  max-width: 244px;
  padding-top: 48px;
`
const FreeTrialButton = styled.button`
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
  //margin-top: 113px;
`
const BtnContainer = styled(Row)`
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -22px;
`
const Title = styled.span`
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 64px;
  line-height: 88.5%;
  /* identical to box height, or 57px */
  text-align: center;
  letter-spacing: -0.05em;
  text-transform: uppercase;
  color: #174C6E;
  padding: 129px 0 80px 0;
`
const OurFitnessProgramComponent = () => {
    return (<Container id={'fitnessProgram'}>
        <Title>{'Our Fitness Programs'}</Title>
        <ItemContainer>
            {list && list.map((obj, index) =>
                <Item>
                    <Icon src={obj.image}/>
                    <Description>{obj.description}</Description>
                </Item>)}
        </ItemContainer>
        <BtnContainer>
            <FreeTrialButton><Link  to="readyToJoin" spy={true} smooth={true}>{'Free Trial'}</Link></FreeTrialButton>
        </BtnContainer>
    </Container>)

}
export default OurFitnessProgramComponent