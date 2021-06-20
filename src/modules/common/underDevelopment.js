import React from "react";
import styled from "styled-components";

const Container = styled.span`
  width: 100%;
  height: 100%;
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 72px;
  line-height: 112%;
  /* identical to box height, or 81px */
  text-align: center;
  text-transform: uppercase;
  color: #CACACA;
  padding-top: 40px;
`
const UnderDevelopment = () => {
    return (<Container>{'Under Development'}</Container>)

}
export default UnderDevelopment