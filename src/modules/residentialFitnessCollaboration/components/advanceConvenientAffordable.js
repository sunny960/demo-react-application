import React from "react";
import styled from "styled-components";
import HeaderMenuRow from "../../header/headerMenuRow";


const Column = styled.div`
  display: flex;
  flex-direction: column;
`
const Container = styled(Column)`
  width: 100%;
  //align-items: center;
  //justify-content: center;
  background: #FFFFFF;
  position: relative;
`
const Icon = styled.img`
  width: 100%;
  height: 100%;
`
const MenuContainer = styled(Column)`
  position: absolute;
  top: 0;
  width: 100%;
`
const BecomeMemberBtn = styled.button`
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
  top: 40%;
  left: 9%;

`
const AdvanceConvenientAffordable = () => {
    return (<Container>
        <Icon src={'/images/advance_affordable_img.png'}/>
        <MenuContainer>
            <HeaderMenuRow backgroundColor={'transparent'}/>
        </MenuContainer>
        <BecomeMemberBtn>{'Become A Member'}</BecomeMemberBtn>
    </Container>)

}

export default AdvanceConvenientAffordable