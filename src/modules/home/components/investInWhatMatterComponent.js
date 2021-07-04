import React from "react";
import styled from 'styled-components'
import UnderDevelopment from "../../common/underDevelopment";

const Column = styled.div`
  display: flex;
  flex-direction: column;
`
const Container = styled(Column)`
  width: 100%;
  justify-content: center;
  align-items: center;
  background: #FFFFFF;
  padding-bottom: 60px;
`
const Icon = styled.img`
  width: 100%;
  height: 1361px;
`
const InvestInWhatMatterComponent = () => {
    return (<Container>
        <Icon src={'/images/invest_in_what_matter.png'}/>

    </Container>)

}
export default InvestInWhatMatterComponent