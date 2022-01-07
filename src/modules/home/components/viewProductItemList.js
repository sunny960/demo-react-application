import React from "react";
import styled from "styled-components";
import ProductItem from "./productItem";

const Row = styled.div`
  display: flex;
  flex-direction: row;
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
`
const Container = styled(Column)`

`
const TitleRow = styled(Row)`
  font-family: Montserrat;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  color: #005188;
  padding: 0 40px 32px 40px;
  //padding: 32px 40px;
`
const ProductContainer = styled(Row)`
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  grid-gap: 24px 27px;

`
const ViewProductItemList = ({isOpen, openModal, setSelectedProductItem, title, productList}) => {
    return (<Container>
        <TitleRow>{title || 'All Videos'}</TitleRow>
        <ProductContainer>
            {productList?.length > 0 && productList.map((product, index) => <ProductItem product={product}
                                                                                         key={index}
                                                                                         openModal={openModal}
                                                                                         isOpen={isOpen}
                                                                                         setSelectedProductItem={setSelectedProductItem}/>)}
        </ProductContainer>

    </Container>)

}

export default ViewProductItemList