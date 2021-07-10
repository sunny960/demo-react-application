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
const SessionBtn = styled.button`
  width: 158px;
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
  cursor: pointer;
`
const VideoIcon = styled.img`
  width: 18px;
  height: 12px;
  margin-right: 15px;
`
const TrainerBtn = styled.button`
  width: 191px;
  height: 49px;
  border: 1px solid #FF5C15;
  box-sizing: border-box;
  border-radius: 5px;
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 18px;
  /* identical to box height */

  text-align: center;
  text-transform: uppercase;

  color: #FF5C15;
  cursor: pointer;
`
const Sessions = () => {
    return (<Container>
        <Icon src={'/images/sessions.png'}/>
        <ButtonContainer>
            <SessionBtn>
                <VideoIcon src={'/images/video_vector.png'}/>
                {'Session'}
            </SessionBtn>
            <TrainerBtn>{'trainer'}</TrainerBtn>
        </ButtonContainer>
    </Container>)
}

export default Sessions