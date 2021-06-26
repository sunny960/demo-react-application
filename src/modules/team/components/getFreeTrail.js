import React from "react";
import styled from "styled-components";
import {Link} from "react-scroll";

const Row = styled.div`
  display: flex;
  flex-direction: row;
`
const Container = styled(Row)`
  width: 100%;
  background: #FFFFFF;
  align-items: center;
  justify-content: center;
  padding: 100px 0 125px 0;
`
const Button =styled.button`
  width: 311px;
  height: 49px;
  background: #FF5C15;
  border-radius: 5px;
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 18px;
  /* identical to box height */

  text-transform: uppercase;
  text-align: center;
  border: 1px;

  color: #FFFFFF;

`


const GetFreeTrail =()=>{
    return(<Container>
        <Button><Link  to="readyToJoin" spy={true} smooth={true}>{'Get Your Free Trial Now!'}</Link></Button>
    </Container>)

}
export default GetFreeTrail