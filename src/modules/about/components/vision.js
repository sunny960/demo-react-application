import React from "react";
import styled from "styled-components";

const Column = styled.div`
  display: flex;
  flex-direction: column;
`
const Container = styled(Column)`
  width: 100%;
  background: #E5E5E5;
  align-items: center;
  justify-content: center;
`
const Text = styled.span`
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 155.8%;
  /* or 25px */

  text-align: center;

  color: #174C6E;
  max-width: 848px;
  padding-bottom: 69px;
`
const Title = styled.span`
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 64px;
  line-height: 103%;
  /* identical to box height, or 66px */
  text-align: center;
  letter-spacing: -0.05em;
  text-transform: uppercase;
  color: #174C6E;
  padding: 101px 0 24px;
`
const SubTitle = styled.span`
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  /* identical to box height */
  letter-spacing: -0.5px;
  color: #174C6E;
  padding: 0 0 30px;
`
const Vision = () => {
    return (<Container>
        <Title>{'Our Vision'}</Title>
        <SubTitle>{'Bring Out the Athlete in Every Individual. '}</SubTitle>
        <Text>{'We believe in working with you to unlock your highest fitness potential and become the best version of yourself. With our thoughtfully curated training sessions, personalised classes, and bespoke service, we guide you through your fitness journey and help achieve your goals.'}</Text>
    </Container>)

}
export default Vision