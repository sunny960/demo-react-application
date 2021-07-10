import React from "react";
import styled from 'styled-components'

const Column = styled.div`
  display: flex;
  flex-direction: column;
`
const Container = styled(Column)`
  width: 100%;
  background: #FFFFFF;
  align-items: center;
  justify-content: center;
`

const Icon = styled.img`
  max-width: 100%;
  height: 100%;
`
const StartedButton = styled.button`
  background: #FF5C15;
  border-radius: 5px;
  width: 169px;
  height: 49px;

  font-family: Josefin Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 18px;
  /* identical to box height */

  text-transform: uppercase;

  color: #FFFFFF;
  border: 1px;
  margin: 52px 0 97px 0;
`
const ResidentialTraining = ()=>{
    return (<Container>
        <Icon src={'/images/residential_personal_training.png'}/>
        <StartedButton>{'get started'}</StartedButton>
    </Container>)

}
export default ResidentialTraining