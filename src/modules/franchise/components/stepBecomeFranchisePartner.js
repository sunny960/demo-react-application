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
  background: #FFFFFF;
  align-items: center;
  justify-content: center;
  position: relative;
`
const Icon = styled.img`
  width: 100%;
  height: 100%;
`
const ContactUsBtn = styled.button`
  width: 179px;
  height: 49px;
  background: #FF5C15;
  border-radius: 5px;

  font-family: Josefin Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 18px;
  /* identical to box height */

  text-align: center;
  text-transform: uppercase;

  color: #FFFFFF;
  border: 1px;
  position: absolute;
  top: 30%;
  left: 44%;
`
const FitnessIcon = styled.img`
  width: 100%;
  height: 100%;
  //position: absolute;
  //top: 99%;
`
const StepBecomeFranchisePartner = () => {
    return (
        <Container>
            <Icon src={'/images/become_partner_cropped_new.png'}/>
            <FitnessIcon src={'/images/fitness_moment_cropped.png'}/>
            <ContactUsBtn>{'Contact us'}</ContactUsBtn>
        </Container>)

}
export default StepBecomeFranchisePartner