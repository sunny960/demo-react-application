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
  position: relative;
`
const Icon = styled.img`
  width: 100%;
  height: 100%;
`
const ButtonContainer = styled(Row)`
  gap: 21px;
  position: absolute;
  right: 15%;
  bottom: 17%;
`
const SessionBtn = styled.img`
  width: 158px;
  height: 49px;
  cursor: pointer;
`
const TrainerBtn = styled.img`
  width: 191px;
  height: 49px;
  cursor: pointer;
`
//TODO I think we need to use btn instead of images
const Sessions = () => {
    return (<Container>
        <Icon src={'/images/sessions.png'}/>
        <ButtonContainer>
            <SessionBtn src={'/images/session_btn.png'}/>
            <TrainerBtn src={'/images/trainer_btn.png'}/>
        </ButtonContainer>
    </Container>)
}

export default Sessions