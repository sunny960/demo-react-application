import React from "react";
import styled from "styled-components";


const Column = styled.div`
  display: flex;
  flex-direction: column;
`
const Container = styled(Column)`
  width: 100%;
  background: #FFFFFF;
  align-items: center;
  justify-content: center;
  padding: 157px 0;
`
const Content = styled.span`
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 155.8%;
  /* or 47px */

  text-align: center;

  color: #174C6E;
  max-width: 1035px;
`
const OrangeText = styled(Content)`
  color: #FF5C15;
  padding-top: 40px;

`
const TextualContent = () => {
    return (<Container>
        <Content>{'We partner with apartments and residential complexes that need fitness centres. Our main objective is to build a safe space for fitness enthusiasts to help them achieve their fitness goals without a hassle. '}</Content>
        <OrangeText>{'Stay fit. Stay healthy. Stay Strong.'}</OrangeText>
    </Container>)
}

export default TextualContent