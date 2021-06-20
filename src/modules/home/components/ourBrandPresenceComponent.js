import React from "react";
import styled from 'styled-components'

const Column = styled.div`
  display: flex;
  flex-direction: column;
`
const Container = styled(Column)`
  width: 100%;
  height: 317px;
  background: #FFFFFF;
  justify-content: center;
  align-items: center;
`
const Title =styled.span`
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 64px;
  line-height: 88.5%;
  text-align: center;
  letter-spacing: -0.05em;
  text-transform: uppercase;
  color: #174C6E;
  padding-top: 101px;
`
const Description =styled.span`
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 155.8%;
  /* or 25px */
  text-align: center;
  max-width: 727px;

  color: #174C6E;
  padding-top: 28px;
`
const OurBrandPresenceComponent =()=>{
    return (<Container>
        <Title>{'Our Brand Presence'}</Title>
        <Description>{'We are more than just your average fitness coach. Here\'s a snippet for you to understand how our classes help you become stronger and better, all while having fun.'}</Description>
    </Container>)

}
export default OurBrandPresenceComponent