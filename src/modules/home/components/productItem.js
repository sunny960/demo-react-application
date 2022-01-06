import React from "react";
import styled from "styled-components";
import sessionManager from "../../../managers/sessionManager";
import {sessionConstants} from "../../../constants";
import Utility from "../../../utils";

const Column = styled.div`
  display: flex;
  flex-direction: column;
`

const Description = styled.span`
  display: none;
  font-family: Roboto;
  font-size: 10.8031px;
  line-height: 13px;
  align-items: center;
  color: #FFFFFF;
  padding-top: 10px;
`
const ImageContainer = styled(Column)`
  position: relative;
  background: url(${({image}) => image});
  border-radius: 7.78266px;
  cursor: pointer;

  width: 276.39px;
  height: 172.57px;
  background-size: 276.39px 172.57px;
  overflow: hidden;
  transition: 1.0s;

  &:hover {
    z-index: 1000;
    transform: scale(1.23,1.1);
    ${Description} {
      display: block;
    }
  }


`
const TextContainer = styled.div`
  position: absolute;
  bottom: 15px;
  left: 17px;
`
const Text = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 15.5653px;
  line-height: 19px;
  display: flex;
  align-items: center;
  color: #FFFFFF;
`
const Icon = styled.img`
  width: 18px;
  height: 16px;
  cursor: pointer;
  position: absolute;
  top: 11px;
  right: 10px;
`
const ProductItem = ({product, setSelectedProductItem, openModal, isOpen}) => {
    function addInFavouriteList(product) {
        let list = sessionManager.getDataFromLocalStorage(sessionConstants.FAVOURITE_LIST) || []
        sessionManager.setDataInLocalStorage((product && [...list, product]) || [], sessionConstants.FAVOURITE_LIST);
        Utility.apiSuccessToast('This video has been saved to favourites list successfully')
    }

    return (<>
        <ImageContainer image={product?.thumbnailUrl || ''}>
            <Icon src={'/images/heart_icon.svg'} onClick={() => addInFavouriteList(product)}/>
            <TextContainer onClick={() => {
                openModal(!isOpen)
                setSelectedProductItem(product)
            }}>
                <Text>{product?.title || ''}</Text>
                <Description>{product?.description || ''}</Description>
            </TextContainer>
        </ImageContainer>
    </>)

}
export default ProductItem