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
  width: 100%;
  height: 1440px;
  background: linear-gradient(270deg, #FAF9F8 0%, rgba(255, 255, 255, 0) 52.03%), url('/demo-react-application/images/become_franchise_partner_bg.jpg');
  mix-blend-mode: multiply;
  transform: matrix(0, 1, 1, 0, 0, 0);
  align-items: center;
  justify-content: center;
`
//TODO Need to work here
const StepBecomeFranchisePartner = () => {
    return(<Container></Container>)

}
export default StepBecomeFranchisePartner