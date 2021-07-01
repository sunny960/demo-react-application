import React from "react";
import styled from 'styled-components'
import UnderDevelopment from "../../common/underDevelopment";

const Column = styled.div`
  display: flex;
  flex-direction: column;
`
const Container = styled(Column)`
  width: 100%;
  //height: 1283px;
  height: 400px;
  //background: #F4EDDD;
  //background: url('/images/invest_bg_image.svg');
  //mix-blend-mode: color-dodge;
  justify-content: center;
  align-items: center;
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
  padding: 140px 0 19px 0;
`
const Description = styled.span`
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 155.8%;
  /* or 25px */
  text-align: center;
  color: #174C6E;
  max-width: 727px;

  padding: 140px 0 19px 0;
`
//TODO need to work here
const InvestInWhatMatterComponent = () => {
    return (<Container>
        <UnderDevelopment/>
        {/*<Title>{'Invest In What Matters'}</Title>*/}
        {/*<Description>{'Capture the opportunity to become a part of the ProSport community. You get to collaborate with the best instructors and reach soaring heights of success.'}</Description>*/}
    </Container>)

}
export default InvestInWhatMatterComponent