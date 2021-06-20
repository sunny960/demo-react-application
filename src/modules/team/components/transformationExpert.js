import React from "react";
import styled from "styled-components";

const Column = styled.div`
  display: flex;
  flex-direction: column;
`
const Container = styled(Column)`
  width: 100%;
  background: url('/demo-react-application/images/transformation_experts.jpg');
  align-items: center;
  justify-content: center;
  max-height: 846px;
`
const Title = styled.span`
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 65px;
  line-height: 103%;
  /* or 67px */
  text-align: center;
  letter-spacing: -0.05em;
  text-transform: uppercase;
  color: #FFFFFF;
  max-width: 770px;
  padding: 255px 0 68px 0;
`
const SubTitle = styled.span`
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  /* identical to box height */

  letter-spacing: -0.5px;
  color: #FFFFFF;
  padding: 0 0 30px 0;
`
const Description = styled.span`
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 155.8%;
  /* or 25px */
  text-align: center;
  color: #FFFFFF;
  max-width: 848px;
  padding-bottom: 215px;
`
const TransformationExpert = () => {
    return (<Container>
        <Title>{'Your Transformation Experts'}</Title>
        <SubTitle>{'Dedicated & Passionate Personal Trainers'}</SubTitle>
        <Description>{'Giving fitness training a whole new definition, our team of skilled, performance-driven, and best in the industry trainers provide unparalleled service to ensure you get results anywhere, anytime. '}</Description>

    </Container>)

}

export default TransformationExpert