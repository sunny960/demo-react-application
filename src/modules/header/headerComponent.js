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
const HeaderWrapper = styled(Row)`
  background-color: #151a4f;
  justify-content: space-between;
  padding: 10px 34px 10px 34px;
  width: 100%;
`
const LogoIcon = styled.img`
  height: 34px;
  margin: 10px 0;
`
const Button = styled.button`
  width: 182px;
  height: 52px;
  font-family: Roboto;
  font-weight: bold;
  font-size: 19px;
  line-height: 22px;
  text-align: center;
  color: #FFFFFF;
  background: rgba(6, 139, 236, 0.6);
  backdrop-filter: blur(54px);
  border-radius: 10px;
  border: none;

  margin-top: 42px;
`
const Header = () => {
    return (
        <HeaderWrapper>
            <LogoIcon src={'/images/new-logo-white-cropped.png'}/>
        </HeaderWrapper>
    )
}
export default Header;