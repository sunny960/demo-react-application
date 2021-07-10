import React from "react";
import styled from 'styled-components'
import Utility from "../../../utils";
import {history} from "../../../utils/history";

const Row = styled.div`
  display: flex;
  flex-direction: row;
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
`

const ImageContainer = styled(Column)`
  position: relative;
  width: 100%;
`
const AdvertiseImage = styled.img`
  width: 100%;
  height: 815px;
`
const ButtonContainer = styled(Row)`
  padding: 0 102px 0 35px;
  position: absolute;
  bottom: 26px;
  justify-content: space-between;
  width: 100%;
`
const PersonalTrainingBtn = styled.button`
  width: 274px;
  height: 71px;
  background: #FAF9F8;
  border-radius: 100px;
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 133.7%;
  /* identical to box height, or 19px */

  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;

  color: #174C6E;
  border: 1px;
`
const ResidentialBtn = styled.button`
  width: 470px;
  height: 71px;
  background: transparent;

  border: 2px solid #FFFFFF;
  box-sizing: border-box;
  border-radius: 100px;

  font-family: Josefin Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 133.7%;
  /* identical to box height, or 19px */

  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;

  color: #FFFFFF;
  margin-left: 44px;
`
const FranchiseBtn = styled.button`
  width: 221px;
  height: 71px;
  background: #FF5C15;
  border-radius: 100px;
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 133.7%;
  /* identical to box height, or 19px */

  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;

  color: #FAF9F8;
  border: 1px;
`
const ImageComponent = () => {
    return (
        <ImageContainer>
            <AdvertiseImage src="/images/home_page_1.png"/>
            <ButtonContainer>
                <Row>
                    <PersonalTrainingBtn
                        onClick={() => Utility.showUnderDevelopment()}>{'Personal Training'}</PersonalTrainingBtn>
                    <ResidentialBtn
                        onClick={() => Utility.showUnderDevelopment()}>{'Residential Fitness Collaboration'}</ResidentialBtn>
                </Row>
                <Column>
                    <FranchiseBtn onClick={() =>history.push('/franchise')}>{'Franchise'}</FranchiseBtn>
                </Column>
            </ButtonContainer>
        </ImageContainer>
    )
}
export default ImageComponent
