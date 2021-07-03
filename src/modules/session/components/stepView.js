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

const Container = styled(Row)`
  align-items: center;
  justify-content: space-evenly;
  padding: 223px 0 134px 0;
  background: #FFFFFF;
  gap: 38px;
`
const Icon1 = styled.img`
  width: 64px;
  height: 64px;
`
const Icon2 = styled.img`
  width: 82px;
  height: 62px;

`
const Icon3 = styled.img`
  width: 70px;
  height: 70px;
`
const Content1 = styled.span`
  max-width: 300px;
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 27px;
  letter-spacing: -0.02em;
  color: #174C6E;
  padding-top: 31px;

`
const Content2 = styled(Content1)`
  padding-top: 32px;

`
const Content3 = styled(Content1)`
  max-width: 264px;
  padding-top: 26px;

`
const StepView = () => {
    return (<Container>
        <Column>
            <Icon1 src={'/images/step_view_first_icon.png'}/>
            <Content1>{'Pro Trainers with a combined experience of 50+ Years'}</Content1>
        </Column>
        <Column>
            <Icon2 src={'/images/step_view_2nd_icon.png'}/>
            <Content2>{'No Special equipments required'}</Content2>
        </Column>
        <Column>
            <Icon3 src={'/images/step_view_3rd_icon.png'}/>
            <Content3>{'Book a time slot suitable to you at the comfort of your home'}</Content3>

        </Column>
    </Container>)

}
export default StepView