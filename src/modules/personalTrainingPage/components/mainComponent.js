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
  background: #F4EFCC;
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
const GetStartedBtn = styled.button`
  width: 169px;
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

  text-transform: uppercase;

  color: #FFFFFF;

  position: absolute;
  left: 9%;
  bottom: 15%;
`
const MainComponent = () => {
    return (<Container>
        <Icon src={'/images/personal_training_main_image.png'}/>
        <MenuContainer>
            <HeaderMenuRow backgroundColor={'transparent'} isHideSessionMenu={true}/>
        </MenuContainer>
        <GetStartedBtn>{'get started'}</GetStartedBtn>
    </Container>)

}

export default MainComponent