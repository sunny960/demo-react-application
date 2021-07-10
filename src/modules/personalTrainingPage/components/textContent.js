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
  background: #E5E5E5;
`
const Content = styled.span`
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 155.8%;
  /* or 47px */

  text-align: center;

  color: #174C6E;
  max-width: 1187px;
  padding: 136px 0 136px;
`
const TextContent = () => {
    return (<Container>
        <Content>{'Get the results you want in no time with workouts designed especially for you. Whether you are looking for one-on-one sessions or to build core strength, you can rely on our talented instructors.'}</Content>
    </Container>)

}
export default TextContent