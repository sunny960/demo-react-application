import React from "react";
import styled from "styled-components";
import sessionManager from "../../../managers/sessionManager";
import {sessionConstants} from "../../../constants";
import Utility from "../../../utils";

const Column = styled.div`
  display: flex;
  flex-direction: column;
`

const ImageContainer = styled(Column)`
  position: relative;
  background: linear-gradient(360deg, rgba(0, 0, 0, 0.6) -10.09%, rgba(0, 0, 0, 0.15) 42.08%);
  border-radius: 7.78266px;
  cursor: pointer;

`
const AdvertiseImage = styled.img`
  width: 276.39px;
  height: 172.57px;
  border-radius: 7.78266px;
  overflow: hidden;
  transition: 1.5s;

  &:hover {
    width: 342.24px;
    height: 213.68px;
  }
`
const TextContainer = styled.span`
  position: absolute;
  top: 119px;
  left: 17px;
`
const Text = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 15.5653px;
  line-height: 19px;
  display: flex;
  align-items: center;
  color: #FFFFFF;
`
const Description = styled.span`
  font-family: Roboto;
  font-size: 10.8031px;
  line-height: 13px;
  display: flex;
  align-items: center;
  color: #FFFFFF;
  padding-top: 13px;
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
        sessionManager.setDataInLocalStorage(product && [...list, product] || [], sessionConstants.FAVOURITE_LIST);
        Utility.apiSuccessToast('This video has been saved to favourites list successfully')
    }

    return (<>
        <ImageContainer>
            <Icon src={'/images/heart_icon.svg'} onClick={() => addInFavouriteList(product)}/>
            <AdvertiseImage src={product?.thumbnailUrl || ''} onClick={() => {
                openModal(!isOpen)
                setSelectedProductItem(product)
            }}/>
            <TextContainer>
                <Text>{product?.title || ''}</Text>
                <Description>{product?.description || ''}</Description>
            </TextContainer>
        </ImageContainer>
    </>)

}
export default ProductItem