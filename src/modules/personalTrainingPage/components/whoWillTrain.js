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
  background: #174C6E;
`
const Icon = styled.img`
  width: 100%;
  height: 100%;
`
const WhoWillTrain = () => {
    return (<Container>
        <Icon src={'/images/who_will_train.png'}/>
    </Container>)

}
export default WhoWillTrain