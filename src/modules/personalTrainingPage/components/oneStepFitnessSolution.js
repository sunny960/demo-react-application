import React from "react";
import styled from "styled-components";


const Column = styled.div`
  display: flex;
  flex-direction: column;
`
const Row = styled.div`
  display: flex;
  flex-direction: row;
`
const Container = styled(Column)`
  width: 100%;
  justify-content: center;
  align-items: center;
  background: #FFFFFF;
  position: relative;
`
const Icon = styled.img`
  width: 100%;
  height: 100%;
`
const BecomeMember = styled.button`
  width: 227px;
  height: 49px;
  background: #FF5C15;
  border-radius: 5px;
  border: 1px;
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 18px;
  /* identical to box height */

  text-align: center;
  text-transform: uppercase;

  color: #FFFFFF;
  position: absolute;
  bottom: 10%;
`
const OneStepFitnessSolution = () => {
    return (<Container>
        <Icon src={'/images/one_step_fitness_solution.png'}/>
        <BecomeMember>{'Become A Member'}</BecomeMember>
    </Container>)

}
export default OneStepFitnessSolution