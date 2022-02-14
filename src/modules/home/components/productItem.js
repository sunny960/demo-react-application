import React from "react";
import styled from "styled-components";

const Column = styled.div`
  display: flex;
  flex-direction: column;
`

const Description = styled.span`
  font-family: Roboto;
  font-size: 11.8031px;
  line-height: 13px;
  align-items: center;
  color: #111010;
`
const ImageContainer = styled(Column)`
  position: relative;
  border-radius: 7.78266px;
  cursor: pointer;

  width: 276.39px;
  background-size: 276.39px 172.57px;
  transition: 1.0s;

  &:hover {
    z-index: 1000;
    transform: scale(1.23, 1.1);
  }
`
const TextContainer = styled.div`
`
const Text = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  display: flex;
  align-items: center;
  color: #005188;
`
const Image = styled.img`
  height: 172.57px;
`
const ProductItem = ({product, setSelectedProductItem, openModal, isOpen}) => {

    return (<>
        <ImageContainer onClick={() => {
            openModal(!isOpen)
            setSelectedProductItem(product)
        }}>
            <Image src={product?.image || ''}/>
            <TextContainer>
                <Text>{product?.title || ''}</Text>
                <Description>{`$${product?.price || '0'}`}</Description>
            </TextContainer>
        </ImageContainer>
    </>)

}
export default ProductItem