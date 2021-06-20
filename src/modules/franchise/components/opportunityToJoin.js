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
`
const Description = styled.span`
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 155.8%;
  /* or 47px */

  text-align: center;
  color: #174C6E;
  max-width: 891px;
  padding: 163px 0 131px 0;
`
const OpportunityToJoin = () => {
    return (<Container>
        <Description>{'Grab the opportunity to join the revolutionary customised fitness centre and become a part of the community. With us, you get unbelievable growth opportunities and a chance to deliver a unique fitness experience.'}</Description>
    </Container>)

}

export default OpportunityToJoin